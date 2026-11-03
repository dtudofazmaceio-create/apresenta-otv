# Apresentação na TV — aplicativo instalável

## O que tem nesta pasta
| Arquivo | Para quê |
|---|---|
| `index.html` | O aplicativo inteiro |
| `manifest.webmanifest` | Nome, ícones e atalhos usados na instalação |
| `sw.js` | Permite abrir sem internet e receber arquivos do "Compartilhar" |
| `icons/`, `screenshots/` | Ícones e imagens da tela de instalação |

**Envie a pasta inteira.** Sem o `manifest` e o `sw.js` o app não aparece como instalável.

## Como publicar (precisa ser um endereço https://)
- **Netlify Drop (mais fácil):** acesse app.netlify.com/drop e arraste esta pasta. Em segundos você recebe um link `https://…netlify.app`.
- **GitHub Pages, Vercel, Cloudflare Pages** ou a hospedagem do seu site também funcionam: basta enviar os arquivos para uma pasta.

## Como instalar
- **Computador (Chrome ou Edge):** abra o link e clique em **Instalar**, no topo do app ou no ícone ⊕ da barra de endereço. O app abre em janela própria, com a barra de título integrada, e fica no menu Iniciar/Dock.
- **Android (Chrome):** toque em **Instalar** no app ou no menu ⋮ › *Instalar app*.
- **iPhone/iPad (Safari):** toque em Compartilhar › **Adicionar à Tela de Início**. O botão Instalar dentro do app mostra esse passo a passo.
- **TV:** abra `https://seu-endereco/#tv` no navegador da TV. Em TVs Android/Google TV dá para instalar também.

## Modelos de apresentação e informativos
Na aba **Modelos**:
- **14 layouts profissionais:**
  - **Apresentação:** Capa, Tópicos, Divisor de seção, Indicador, Destaque com foto, Citação, Encerramento e Texto simples.
  - **Informativo:** Comunicado, Evento, Boas-vindas, Aniversariantes, Aviso importante e Meta/progresso.
- **8 temas:** Executivo, Corporativo, Grafite, Esmeralda, Bordô, Areia, Oceano e Ametista. Você também pode usar a **cor da sua marca** em "Cor de destaque".
- **Foto de fundo** em qualquer modelo, com controle de escurecimento para o texto ficar legível. No "Boas-vindas", a foto vira o retrato da pessoa.
- **Música por slide:** toca enquanto aquele slide está na tela e pausa a trilha de fundo. Marque "Ficar até a música terminar" para o slide durar o tempo da música.
- **Celebrações:** Premiação (com coroa de louros e foto), Ranking/pódio (1º, 2º e 3º lugar + 4º e 5º), Aniversariante do dia (balões e confete), Aniversariantes do mês e **Data comemorativa**.
- **Fotos e Instagram das pessoas:** no Ranking e nos Aniversariantes, cada pessoa tem foto, nome, resultado ou data e Instagram. No pódio, a foto aparece com a medalha da posição (1º, 2º, 3º), e a seta ▲ muda a ordem. Premiação, Aniversariante do dia e Boas-vindas também têm campo de Instagram. Você pode colar o link do perfil: ele vira @usuario sozinho.
- **Datas comemorativas (17):** Ano Novo, Carnaval, Dia da Mulher, Páscoa, Dia do Trabalhador, Dia das Mães, Dia dos Namorados, Festa Junina, Dia dos Pais, Dia do Corretor de Imóveis, Independência, Dia do Cliente, Dia das Crianças, Outubro Rosa, Novembro Azul, Consciência Negra e Natal. Cada uma tem cores, ilustração e texto próprios, e o app já sugere a próxima data do calendário.
- **Promoções:** Promoção/oferta (preço "de/por" com selo de desconto calculado sozinho) e **Black Friday** (com contagem regressiva automática: "Faltam 12 dias", "É amanhã!", "É hoje!").
- **Apresentação pronta:** cria de uma vez uma *Apresentação institucional*, uma *Reunião de resultados* ou um *Informativo da semana* completos, no tema escolhido. Depois é só editar.
- Na TV, os slides entram com animação suave e a foto de fundo tem um leve movimento de zoom.

## Conectar à TV: mesma rede ou qualquer lugar
- **Mesma rede:** a TV aparece sozinha em "TVs na sua rede".
- **Qualquer rede (pelo endereço):** cada TV mostra na tela um **Endereço** fixo (ex.: `K7M2QX`) e um **QR Code**. Digite o endereço em **Conectar TV**, ou aponte a câmera do celular para o QR Code. Funciona com a TV em outro prédio ou outra cidade; os dois aparelhos só precisam de internet.
- As TVs usadas ficam em **"TVs salvas"**, com status Online / Em uso / Offline. O botão 🔗 copia um **link de controle remoto** para abrir em outro aparelho.
- **Vários aparelhos na mesma TV:** computadores e celulares podem ficar conectados juntos, inclusive de redes diferentes. Cada aparelho envia a sua programação, e a TV exibe tudo em sequência, em blocos por aparelho. Qualquer um pode pausar, avançar ou voltar. Quando a TV está exibindo o conteúdo de outro aparelho, o rodapé mostra "Na TV agora: conteúdo de …". Em **Limpar TV**, escolha entre remover só o conteúdo deste aparelho ou tudo.
- **Redes restritas (empresas, 4G):** se a TV aparecer Online mas a conexão não completar, cadastre um servidor de retransmissão (TURN) em **Conectar TV › Conexão entre redes diferentes (avançado)**. A Metered oferece 20 GB/mês grátis com cadastro. A configuração é enviada para a TV automaticamente.
- Por limitação dos navegadores, não é possível conectar digitando o IP da TV. O endereço da TV cumpre esse papel e funciona mesmo quando o IP muda.

## Aparência do sistema
Clique no ícone de **paleta** no topo:
- **6 temas de interface:** Noite, Claro, Grafite, Oceano, Rosé e Floresta.
- **Plano de fundo:** cor lisa do tema, 6 gradientes (Aurora, Pôr do sol, Mar, Noturno, Dourado e Pastel) ou **sua própria foto**. Ajuste o desfoque e a suavização para manter tudo legível. Os painéis ficam translúcidos sobre o fundo.
- **Cor de destaque** personalizada (por exemplo, a cor da sua marca).
- **Programação em Lista ou Grade**, com miniaturas grandes. Também há um atalho nos ícones ao lado de "Programação". Na grade, dá para arrastar os cartões para reordenar.
- **Fotos e vídeos verticais na TV** usam o plano de fundo do sistema nas laterais, em vez de faixas pretas, com uma sombra suave em volta da mídia. Na aba **Tela › Fundo de fotos e vídeos verticais** você pode trocar para "Desfoque" (a própria foto desfocada) ou "Preto". Quando você muda a aparência, a TV conectada se atualiza sozinha. Se você usa mais de um aparelho (computador e celular), a TV fica com o fundo alterado por último. Para forçar o fundo de um aparelho, use **Tela › Enviar à TV**.
- As escolhas ficam salvas no aparelho. "Restaurar padrão" volta ao visual original.

## Vários arquivos de uma vez
- **Escolher arquivos:** na janela de seleção, segure **Ctrl** e clique em cada arquivo, use **Shift** para um intervalo ou **Ctrl+A** para todos. Também dá para arrastar vários arquivos de uma vez para a área "Solte arquivos aqui".
- **Escolher pasta:** adiciona tudo o que for compatível dentro de uma pasta, na ordem dos nomes (01, 02, 10…).
- **Selecionar na programação:** o botão ☑ ao lado de "Programação" ativa a seleção. Toque nos itens (Shift+clique marca um intervalo, Ctrl+A marca todos) e depois **mude a duração**, **duplique** ou **remova** todos de uma vez.
- **Várias fotos de pessoas:** no Ranking e nos Aniversariantes, o botão **"Várias fotos"** cria uma pessoa para cada foto, usando o nome do arquivo (ex.: `ana_souza.jpg` vira "Ana Souza").

## Vídeos e áudios em qualquer formato
- Ao adicionar vídeos AVI, MKV, WMV, MOV, FLV, MPEG, 3GP, TS, HEVC/H.265 etc., ou áudios WMA, FLAC, AC3, AMR etc., o app converte sozinho para **MP4 (H.264 + AAC)** ou **M4A**, formatos que tocam em qualquer TV. A conversão acontece no próprio navegador, com uma barra de progresso, e nada é enviado para a internet.
- **Arquivos .MP4 e .MOV são analisados por dentro.** Vídeos de câmeras e celulares que costumam ficar com tela preta na TV são convertidos automaticamente: HEVC/H.265 do iPhone, H.264 de 10 bits ou 4:2:2 (Sony, Canon, Panasonic), AVC-Intra, ProRes, 4K e áudio PCM/AC-3. MP4 comum (H.264 + AAC) entra sem conversão.
- Vídeos que já estavam na programação também são verificados e convertidos sozinhos.
- Se um vídeo "tocar" na TV sem imagem (tela preta), a TV detecta, avisa o computador e o vídeo é convertido e reenviado. Se a **TV** não conseguir reproduzir algum vídeo, ela avisa o computador, que converte e reenvia automaticamente.
- Cada vídeo ou áudio tem um botão ⟳ para converter manualmente.
- O controle do conversor fica dentro do próprio `index.html`. O motor (cerca de 31 MB) é procurado primeiro na pasta `vendor/ffmpeg-core/` e, se ela não estiver publicada, em servidores públicos (jsDelivr ou unpkg). Depois do primeiro uso, ele fica guardado no aparelho.
- Se uma conversão falhar, o app tenta de novo sozinho em modo leve (720p). Se ainda assim não der certo, aparece um cartão com o motivo e os botões **Tentar de novo**, **Detalhes** (texto para enviar ao suporte) e **Descartar**.
- Mantenha o app aberto enquanto converte. Vídeos 4K longos podem levar alguns minutos.
- Arquivos muito longos podem demorar para converter. O limite é cerca de 1,8 GB por arquivo.

## Fundo musical das apresentações
Na aba **Música** há 3 trilhas instrumentais originais, no estilo podcast, criadas para o sistema. Por serem originais, não têm direitos autorais de terceiros.
- **Podcast Leve** (padrão): lo-fi tranquilo, para informativos e avisos.
- **Boutique**: elegante e moderna, para coleções e vitrines.
- **Corporativo**: piano inspirador, para reuniões e resultados.

Toque em ▶ para ouvir antes de escolher. A música toca em loop por trás dos slides, pausa sozinha durante vídeos e áudios e para no encerramento.
- **Silenciar**: escolha "Sem fundo musical" ou use o botão de som da barra inferior.
- **Substituir**: adicione suas próprias músicas em "Suas músicas". Elas tocam no lugar da trilha.
- **Volume**: use o controle "Volume da música".

## Encerramento e tela cheia automática
- **Encerramento**: ao final da apresentação, a TV mostra a marca Mercatto Labs, a frase "Não é só um sistema, é uma solução!" e um QR code grande do WhatsApp. A tela fica assim até a próxima apresentação.
- **Quando termina**: com "Repetir" desligado, termina sozinha depois do último item (ou ao avançar no último slide, no modo manual). A qualquer momento você pode usar o botão **Encerrar**, na barra inferior ou no modo Apresentador. No controle da TV, a tecla End/Stop também encerra.
- **Tela normal no fim**: 10 segundos depois do encerramento, a TV sai da tela cheia. No app instalado na TV, ela continua em tela cheia, porque não tem barra de endereço.
- **Tela cheia automática ao começar**:
  - Janela de apresentação aberta pelo próprio computador (TV ligada por cabo ou tela estendida): entra em tela cheia sozinha quando você toca em "Do início" ou em ▶.
  - App instalado na TV ou atalho "Abrir TV em tela cheia" do Windows: sempre em tela cheia, sem clicar em nada.
  - Navegador comum da Smart TV: por segurança, o navegador exige um OK no controle. Nenhum site consegue pular isso.

## Edição Moda Atacado
O sistema vem preparado para lojas de moda no atacado.

**Sua loja** (ícone de loja no topo): cadastre o nome, a logo (de preferência PNG com fundo transparente), a frase, o WhatsApp de vendas, o Instagram, o endereço e o horário. O nome e a logo aparecem no topo do sistema. Esses dados também já preenchem os modelos, como contato, rodapés e QR code do WhatsApp.

**Modelos** (aba Modelos), em 6 grupos:
- **Coleção**: Lançamento de coleção, Acabou de chegar (selo giratório "Novidade" ou "Reposição"), Peça em destaque (referência, preço de atacado, tamanhos e cores), Vitrine de peças (até 6 fotos com preço) e Mais vendidos.
- **Atacado**: Tabela de preços, Como comprar (pedido mínimo, pagamento, frete…), Tabela de medidas e Contato e redes (com QR code do WhatsApp).
- **Promoções**: Promoção, Liquidação (com contagem regressiva) e Black Friday.
- **Apresentação**, **Informativo** e **Celebrações**, incluindo as datas do varejo: Dia do Consumidor, Dia da Costureira, Dia do Comerciante, Dia do Vendedor, Mães, Namorados, Pais, Cliente, Natal e outras.

**Apresentações prontas**: Lançamento de coleção, Atacado: como comprar, Vitrine da semana, Liquidação, Black Friday no atacado, Datas do varejo de moda, Reunião de resultados, Informativo da semana, Reconhecimento da equipe e Fim de ano.

**Temas de moda** para os slides: Couture, Off-white, Nude, Rosé, Champagne e Oliva. **Temas do sistema**: Atelier (padrão) e Boutique (claro), com os fundos Seda e Linho.

**Abertura**: toda apresentação começa com a marca Mercatto Labs em transparência e a frase "Fazendo Acontecer", por cerca de 3,5 segundos. Isso acontece quando a programação chega a uma TV vazia, quando a TV liga com conteúdo e ao tocar em "Do início". Para pular, use ▶ no controle.

## Slides com avanço manual ou automático
- **Automático**: cada item fica na TV pelo tempo definido e passa sozinho; vídeos passam ao terminar.
- **Manual**: a TV para em cada slide até você avançar. Troque no botão de mão/relógio na barra inferior, ou em Tela > Avanço.
- **Modo Apresentador** (botão "Apresentador" ou tecla P): mostra o slide atual, o próximo, o contador (ex.: 3 / 8) e um cronômetro. Avance com → / PageDown / Espaço e volte com ← / PageUp. Também funciona com passadores de slide (clicker USB) e, no celular, deslizando o dedo.

## Vídeos do YouTube
Cole o link na caixa "Cole aqui um link do YouTube" (aba Arquivos) e toque em Adicionar. Também dá para colar com Ctrl+V. Funcionam links youtube.com/watch, youtu.be, Shorts e links com tempo inicial (?t=42). O título e a miniatura aparecem sozinhos.
- A TV precisa de internet para tocar o vídeo.
- Alguns vídeos têm a exibição fora do YouTube bloqueada pelo dono. Nesses casos a TV avisa e passa para o próximo item.

## Tela cheia na TV
- **Navegador da TV**: aperte **OK** no controle (ou clique) uma vez e a apresentação entra em tela cheia. Se não estiver em tela cheia, a TV mostra um aviso. Por segurança, os navegadores só permitem tela cheia depois de um toque ou clique.
- **Instalar como app na TV/computador** (botão "Instalar" na tela de espera): o app da TV abre direto em tela cheia, sem barra de endereço.
- **Computador ligado à TV (Windows)**: em "Trocar TV", baixe o atalho **"Abrir TV em tela cheia"**. Ele abre o Chrome (ou o Edge) em modo quiosque: sem barra de endereço e sem os botões de minimizar e fechar. Para sair, use **Alt+F4**.

## Assinatura Mercatto Labs
- Em todas as apresentações na TV, a logo da **Mercatto Labs** aparece transparente, como marca-d'água, no canto superior esquerdo, e um **QR Code do WhatsApp** (82) 99662-2036, pequeno e sem texto, aparece no canto inferior direito, com o link `wa.me/5582996622036`. Os dois somem na tela de espera e o QR sobe quando a faixa rolante está ativa.
- Os arquivos da logo (SVG e PNG, versões para fundo escuro, fundo claro, branca e só o ícone) estão na pasta `brand/`.

## Recursos do app
- O app abre direto no último modo usado (controle ou TV). Para trocar, clique no logotipo.
- **Funciona sem internet** para montar a programação. Para conectar a uma TV é preciso internet.
- **Celular:** a opção *Compartilhar → Apresentação TV* na galeria envia fotos, vídeos e PDFs direto para a programação (Android).
- **Computador:** com o botão direito em uma imagem, PDF ou vídeo, use *Abrir com → Apresentação na TV* (Chrome/Edge).
- **Atalhos:** `Ctrl+K` conectar TV · `Ctrl+O` adicionar arquivos · `Espaço` reproduzir/pausar · `← →` anterior/próximo · `L` repetir · `M` sem som.
- A tela da TV fica sempre acesa enquanto apresenta.
- Quando você publicar uma versão nova, o app mostra **"Nova versão disponível — Atualizar"**. Ao alterar o `index.html`, mude também `apres-v1` para `apres-v2` na primeira linha do `sw.js`.
