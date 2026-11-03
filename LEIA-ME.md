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
- Se outro aparelho assumir a TV, o anterior para de tentar reconectar e mostra o aviso.
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

## Recursos do app
- O app abre direto no último modo usado (controle ou TV). Para trocar, clique no logotipo.
- **Funciona sem internet** para montar a programação. Para conectar a uma TV é preciso internet.
- **Celular:** a opção *Compartilhar → Apresentação TV* na galeria envia fotos, vídeos e PDFs direto para a programação (Android).
- **Computador:** com o botão direito em uma imagem, PDF ou vídeo, use *Abrir com → Apresentação na TV* (Chrome/Edge).
- **Atalhos:** `Ctrl+K` conectar TV · `Ctrl+O` adicionar arquivos · `Espaço` reproduzir/pausar · `← →` anterior/próximo · `L` repetir · `M` sem som.
- A tela da TV fica sempre acesa enquanto apresenta.
- Quando você publicar uma versão nova, o app mostra **"Nova versão disponível — Atualizar"**. Ao alterar o `index.html`, mude também `apres-v1` para `apres-v2` na primeira linha do `sw.js`.
