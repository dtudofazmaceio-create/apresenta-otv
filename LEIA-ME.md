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
- **Apresentação pronta:** cria de uma vez uma *Apresentação institucional*, uma *Reunião de resultados* ou um *Informativo da semana* completos, no tema escolhido. Depois é só editar.
- Na TV, os slides entram com animação suave e a foto de fundo tem um leve movimento de zoom.

## Recursos do app
- O app abre direto no último modo usado (controle ou TV). Para trocar, clique no logotipo.
- **Funciona sem internet** para montar a programação. Para conectar a uma TV é preciso internet.
- **Celular:** a opção *Compartilhar → Apresentação TV* na galeria envia fotos, vídeos e PDFs direto para a programação (Android).
- **Computador:** com o botão direito em uma imagem, PDF ou vídeo, use *Abrir com → Apresentação na TV* (Chrome/Edge).
- **Atalhos:** `Ctrl+K` conectar TV · `Ctrl+O` adicionar arquivos · `Espaço` reproduzir/pausar · `← →` anterior/próximo · `L` repetir · `M` sem som.
- A tela da TV fica sempre acesa enquanto apresenta.
- Quando você publicar uma versão nova, o app mostra **"Nova versão disponível — Atualizar"**. Ao alterar o `index.html`, mude também `apres-v1` para `apres-v2` na primeira linha do `sw.js`.
