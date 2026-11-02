#!/usr/bin/env node
/* Programa auxiliar: acha TVs (DLNA/UPnP) na rede e transmite a apresentação.
   Sem dependências. Requer Node.js 16+.  Uso: node tv-bridge.js  (PORT=8765 por padrão) */
'use strict';
const http=require('http'),dgram=require('dgram'),os=require('os'),fs=require('fs'),path=require('path'),{exec}=require('child_process');
const PORT=+process.env.PORT||8765,MEDIA=path.join(os.tmpdir(),'apresentacao-tv-media'),HTML=path.join(__dirname,'apresentacao-tv.html');
fs.rmSync(MEDIA,{recursive:true,force:true});fs.mkdirSync(MEDIA,{recursive:true});

const log=(...a)=>console.log(new Date().toLocaleTimeString('pt-BR'),...a);
const ifaces=()=>Object.values(os.networkInterfaces()).flat().filter(i=>i&&(i.family==='IPv4'||i.family===4)&&!i.internal);
const ip2n=s=>s.split('.').reduce((a,b)=>a*256+ +b,0);
const myIpFor=ip=>{const m=ifaces().find(i=>(ip2n(i.address)&ip2n(i.netmask))===(ip2n(ip)&ip2n(i.netmask)));return(m||ifaces()[0]||{address:'127.0.0.1'}).address};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const unesc=s=>String(s).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
const tag=(x,t)=>{const m=String(x).match(new RegExp('<(?:\\w+:)?'+t+'[^>]*>([^<]*)</(?:\\w+:)?'+t+'>'));return m?m[1].trim():''};
const json=(res,o,c=200)=>{res.writeHead(c,{'Content-Type':'application/json'});res.end(JSON.stringify(o))};
const readBody=req=>new Promise(ok=>{let d='';req.on('data',c=>d+=c);req.on('end',()=>{try{ok(JSON.parse(d||'{}'))}catch(e){ok({})}})});

/* ---------- descoberta (SSDP) ---------- */
const devices=new Map(),ignored=new Map();let scanning=false;
function httpGet(url,timeout=4000){return new Promise((ok,err)=>{const r=http.get(url,{timeout},res=>{let d='';res.setEncoding('utf8');res.on('data',c=>{d+=c;if(d.length>2e6)r.destroy()});res.on('end',()=>ok(d))});r.on('timeout',()=>r.destroy(new Error('timeout')));r.on('error',err)})}
async function describe(location){
  if((ignored.get(location)||0)>Date.now())return;
  try{
    const x=await httpGet(location),u=new URL(location),base=tag(x,'URLBase')||u.origin+'/';
    let av=null,rc=null;
    for(const m of x.matchAll(/<service>([\s\S]*?)<\/service>/g)){
      const st=tag(m[1],'serviceType'),cu=tag(m[1],'controlURL');
      if(st.includes(':AVTransport:'))av={type:st,url:new URL(cu,base).href};
      if(st.includes(':RenderingControl:'))rc={type:st,url:new URL(cu,base).href};
    }
    if(!av){ignored.set(location,Date.now()+3e5);return}
    const id=tag(x,'UDN')||location;
    if(!devices.has(id))log('TV encontrada:',unesc(tag(x,'friendlyName')),u.hostname);
    devices.set(id,{id,name:unesc(tag(x,'friendlyName'))||u.hostname,manufacturer:unesc(tag(x,'manufacturer')),model:unesc(tag(x,'modelName')),ip:u.hostname,av,rc,seen:Date.now()});
  }catch(e){ignored.set(location,Date.now()+3e4)}
}
function scan(){
  scanning=true;setTimeout(()=>scanning=false,6000);
  for(const ifc of ifaces()){
    const s=dgram.createSocket({type:'udp4',reuseAddr:true});
    s.on('error',()=>{try{s.close()}catch(e){}});
    s.on('message',m=>{const l=(m.toString().match(/^location:\s*(\S+)/im)||[])[1];if(l)describe(l)});
    s.bind(0,ifc.address,()=>{
      try{s.setMulticastInterface(ifc.address);s.setMulticastTTL(4)}catch(e){}
      const send=()=>['urn:schemas-upnp-org:device:MediaRenderer:1','urn:schemas-upnp-org:service:AVTransport:1'].forEach(st=>
        s.send(Buffer.from(`M-SEARCH * HTTP/1.1\r\nHOST: 239.255.255.250:1900\r\nMAN: "ssdp:discover"\r\nMX: 2\r\nST: ${st}\r\n\r\n`),1900,'239.255.255.250',()=>{}));
      send();setTimeout(send,1200);setTimeout(send,2600);setTimeout(()=>{try{s.close()}catch(e){}},7000);
    });
  }
}

/* ---------- controle UPnP ---------- */
function soap(url,type,action,args){
  const body=`<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:${action} xmlns:u="${type}">${Object.entries(args).map(([k,v])=>`<${k}>${v}</${k}>`).join('')}</u:${action}></s:Body></s:Envelope>`;
  return new Promise((ok,err)=>{
    const u=new URL(url);
    const r=http.request({hostname:u.hostname,port:u.port||80,path:u.pathname+u.search,method:'POST',timeout:8000,
      headers:{'Content-Type':'text/xml; charset="utf-8"',SOAPACTION:`"${type}#${action}"`,'Content-Length':Buffer.byteLength(body)}},res=>{
      let d='';res.on('data',c=>d+=c);res.on('end',()=>res.statusCode<300?ok(d):err(new Error(unesc(tag(d,'errorDescription'))||'A TV recusou ('+res.statusCode+')')));
    });
    r.on('timeout',()=>r.destroy(new Error('A TV não respondeu')));r.on('error',err);r.end(body);
  });
}

/* ---------- mídia (servida para a TV) ---------- */
const media=new Map();
function upload(req,res,id){
  if(!/^[\w-]+$/.test(id)){res.writeHead(400);return res.end()}
  const file=path.join(MEDIA,id),w=fs.createWriteStream(file);
  req.pipe(w);
  w.on('finish',()=>{media.set(id,{file,mime:req.headers['x-mime']||'application/octet-stream',size:fs.statSync(file).size});json(res,{ok:true})});
  w.on('error',e=>json(res,{error:e.message},500));
}
function serveMedia(req,res,id){
  const m=media.get(id);if(!m){res.writeHead(404);return res.end()}
  const size=m.size,h={'Content-Type':m.mime,'Accept-Ranges':'bytes','transferMode.dlna.org':'Streaming','contentFeatures.dlna.org':'DLNA.ORG_OP=01;DLNA.ORG_CI=0;DLNA.ORG_FLAGS=01700000000000000000000000000000'};
  let s=0,e=size-1,code=200;const r=/bytes=(\d*)-(\d*)/.exec(req.headers.range||'');
  if(r){if(r[1]===''){s=Math.max(0,size-+r[2])}else{s=+r[1];if(r[2])e=Math.min(+r[2],e)}code=206;h['Content-Range']=`bytes ${s}-${e}/${size}`}
  h['Content-Length']=e-s+1;res.writeHead(code,h);
  if(req.method==='HEAD')return res.end();
  fs.createReadStream(m.file,{start:s,end:e}).pipe(res);
}

/* ---------- sessão de apresentação ---------- */
const S={dev:null,list:[],idx:0,cur:null,playing:false,loop:true,timer:null,poll:null,err:''};
const av=(a,args={})=>soap(S.dev.av.url,S.dev.av.type,a,{InstanceID:0,...args});
const CLS={image:'object.item.imageItem.photo',video:'object.item.videoItem.movie',audio:'object.item.audioItem.musicTrack'};
const clearTimers=()=>{clearTimeout(S.timer);clearInterval(S.poll)};
function avSet(it){
  const url=`http://${myIpFor(S.dev.ip)}:${PORT}/media/${it.id}`,m=media.get(it.id);
  const pi=`http-get:*:${m.mime}:DLNA.ORG_OP=01;DLNA.ORG_CI=0;DLNA.ORG_FLAGS=01700000000000000000000000000000`;
  const didl=`<DIDL-Lite xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/"><item id="${esc(it.id)}" parentID="0" restricted="1"><dc:title>${esc(it.name||'Item')}</dc:title><upnp:class>${CLS[it.type]}</upnp:class><res protocolInfo="${esc(pi)}">${esc(url)}</res></item></DIDL-Lite>`;
  return av('SetAVTransportURI',{CurrentURI:esc(url),CurrentURIMetaData:esc(didl)});
}
function startPoll(it,started=false){
  clearInterval(S.poll);const t0=Date.now();
  S.poll=setInterval(async()=>{
    try{
      const st=tag(await av('GetTransportInfo'),'CurrentTransportState');
      if(st==='PLAYING'||st==='TRANSITIONING')started=true;
      else if(started&&(st==='STOPPED'||st==='NO_MEDIA_PRESENT')){clearInterval(S.poll);next()}
      else if(!started&&Date.now()-t0>25000){clearInterval(S.poll);S.err='A TV não conseguiu reproduzir: '+it.name;next()}
    }catch(e){}
  },2000);
}
async function playIdx(i){
  clearTimers();if(!S.list.length)return;
  S.idx=((i%S.list.length)+S.list.length)%S.list.length;
  const it=S.cur=S.list[S.idx];S.err='';S.playing=true;
  try{await avSet(it);await av('Play',{Speed:1})}
  catch(e){try{await av('Stop');await avSet(it);await av('Play',{Speed:1})}catch(e2){S.err=e2.message;S.playing=false;return}}
  if(it.type==='image'){if(S.list.length>1)S.timer=setTimeout(next,(it.dur||8)*1000)}else startPoll(it);
}
function next(){if(!S.loop&&S.idx>=S.list.length-1){S.playing=false;return}return playIdx(S.idx+1)}
async function pause(){clearTimers();S.playing=false;await av('Pause').catch(()=>{})}
async function resume(){
  if(!S.list.length)return;
  if(S.cur.type==='image')return playIdx(S.idx);
  S.playing=true;await av('Play',{Speed:1});startPoll(S.cur,true);
}
async function stopAll(){clearTimers();if(S.dev&&S.list.length)await av('Stop').catch(()=>{});S.list=[];S.cur=null;S.playing=false;S.err=''}
const publicDev=d=>d&&{id:d.id,name:d.name,manufacturer:d.manufacturer,model:d.model,ip:d.ip};

/* ---------- servidor HTTP ---------- */
const isLocal=req=>{
  const a=(req.socket.remoteAddress||'').replace('::ffff:',''),mine=ifaces().map(i=>i.address);
  const host=(req.headers.host||'').replace(/:\d+$/,'').replace(/^\[|\]$/g,'');
  return(a==='127.0.0.1'||a==='::1'||mine.includes(a))&&['localhost','127.0.0.1','::1',...mine].includes(host);
};
http.createServer(async(req,res)=>{
  const p=new URL(req.url,'http://x').pathname;
  try{
    if(p.startsWith('/media/'))return serveMedia(req,res,p.slice(7));
    if(p==='/'||p==='/index.html'){res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});return res.end(fs.readFileSync(HTML))}
    if(!p.startsWith('/api/')){res.writeHead(404);return res.end()}
    if(!isLocal(req))return json(res,{error:'Acesso permitido somente neste computador'},403);
    if(p==='/api/devices'){const now=Date.now();return json(res,{scanning,devices:[...devices.values()].filter(d=>now-d.seen<90000||(S.dev&&S.dev.id===d.id)).map(publicDev)})}
    if(p==='/api/scan'){scan();return json(res,{ok:true})}
    if(p==='/api/add'){const b=await readBody(req);await describe(b.location);return json(res,{devices:[...devices.values()].map(publicDev)})}
    if(p==='/api/media'&&req.method==='GET')return json(res,{ids:[...media.keys()]});
    if(p.startsWith('/api/media/')&&req.method==='POST')return upload(req,res,p.slice(11));
    if(p==='/api/state')return json(res,{dev:publicDev(S.dev),active:S.list.length>0,idx:S.idx,id:S.cur&&S.cur.id,src:S.cur&&S.cur.srcId,playing:S.playing,err:S.err});
    const b=await readBody(req);
    if(p==='/api/select'){
      if(!b.id){await stopAll();S.dev=null;return json(res,{ok:true})}
      const d=devices.get(b.id);if(!d)return json(res,{error:'TV não encontrada. Clique em Procurar.'},404);
      try{await soap(d.av.url,d.av.type,'GetTransportInfo',{InstanceID:0})}catch(e){return json(res,{error:'Não consegui falar com a TV: '+e.message},502)}
      if(S.dev&&S.dev.id!==d.id)await stopAll();
      S.dev=d;log('Conectado a',d.name);return json(res,{ok:true});
    }
    if(p==='/api/session'){
      if(!S.dev)return json(res,{error:'Selecione uma TV primeiro'},400);
      const list=(b.list||[]).filter(x=>media.has(x.id)&&CLS[x.type]);
      if(!list.length)return json(res,{error:'Nenhum item válido para enviar'},400);
      const curSrc=S.cur&&S.cur.srcId;S.loop=b.loop!==false;S.list=list;
      const k=list.findIndex(x=>x.srcId===curSrc);
      if(k>=0&&S.playing){S.idx=k;S.cur=list[k]}else await playIdx(0);
      return json(res,{ok:true});
    }
    if(p==='/api/control'){
      if(!S.dev)return json(res,{error:'Nenhuma TV conectada'},400);
      switch(b.c){
        case'play':await resume();break;
        case'pause':await pause();break;
        case'next':await playIdx(S.idx+1);break;
        case'prev':await playIdx(S.idx-1);break;
        case'show':{const k=S.list.findIndex(x=>x.srcId===b.id||x.id===b.id);if(k>=0)await playIdx(k);break}
        case'stop':await stopAll();break;
        case'loop':S.loop=!!b.v;break;
        case'mute':if(S.dev.rc)await soap(S.dev.rc.url,S.dev.rc.type,'SetMute',{InstanceID:0,Channel:'Master',DesiredMute:b.v?1:0});break;
      }
      return json(res,{ok:true,err:S.err});
    }
    json(res,{error:'Rota desconhecida'},404);
  }catch(e){log('Erro:',e.message);try{json(res,{error:e.message},500)}catch(x){}}
}).listen(PORT,'0.0.0.0',()=>{
  const lan=ifaces()[0]&&ifaces()[0].address;
  console.log(`\n  Apresentação na TV — programa auxiliar ativo\n\n  Abra no computador:  http://localhost:${PORT}/#pc\n`+(lan?`  Navegador da TV:     http://${lan}:${PORT}/#tv\n`:'')+`\n  Se o Windows perguntar sobre o Firewall, permita em "Redes privadas".\n  Para encerrar, feche esta janela (Ctrl+C).\n`);
  scan();setInterval(scan,20000);
  if(!process.argv.includes('--no-open'))exec(`${process.platform==='win32'?'start ""':process.platform==='darwin'?'open':'xdg-open'} http://localhost:${PORT}/#pc`,()=>{});
}).on('error',e=>{console.error(e.code==='EADDRINUSE'?`A porta ${PORT} já está em uso. O programa já está aberto?`:e.message);process.exit(1)});
process.on('uncaughtException',e=>log('Erro inesperado:',e.message));
