/* Apresentação na TV — service worker (funciona offline e recebe arquivos compartilhados) */
const VERSION='apres-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/favicon-32.png'];
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.5.4/peerjs.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'];
const CACHEABLE=/^https:\/\/(cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(VERSION);
    await c.addAll(SHELL);
    await Promise.all(CDN.map(u=>c.add(new Request(u,{mode:'cors'})).catch(()=>{})));
  })());
});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{
    for(const k of await caches.keys())if(k!==VERSION&&k!=='share-inbox')await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  // "Compartilhar" do celular → guarda os arquivos e abre o app
  if(r.method==='POST'&&u.origin===location.origin&&u.pathname.endsWith('/share')){
    e.respondWith((async()=>{
      try{
        const fd=await r.formData(),c=await caches.open('share-inbox');let i=0;
        for(const f of fd.getAll('files'))if(f&&f.size!==undefined)
          await c.put(`./inbox/${Date.now()}-${i++}`,new Response(f,{headers:{'content-type':f.type||'application/octet-stream','x-name':encodeURIComponent(f.name||'arquivo')}}));
      }catch(err){}
      return Response.redirect('./?share=1#pc',303);
    })());
    return;
  }
  if(r.method!=='GET')return;
  // páginas: rede primeiro (pega atualizações), cache se estiver offline
  if(r.mode==='navigate'){
    e.respondWith((async()=>{
      try{const res=await fetch(r);const c=await caches.open(VERSION);c.put('./index.html',res.clone());return res}
      catch(err){return (await caches.match('./index.html'))||(await caches.match('./'))||Response.error()}
    })());
    return;
  }
  // arquivos do app e bibliotecas: cache primeiro, atualiza em segundo plano
  if(u.origin===location.origin||CACHEABLE.test(r.url)){
    e.respondWith((async()=>{
      const c=await caches.open(VERSION),hit=await c.match(r);
      const net=fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res}).catch(()=>null);
      return hit||(await net)||Response.error();
    })());
  }
});
