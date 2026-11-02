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

## Aparência do sistema
Clique no ícone de **paleta** no topo:
- **6 temas de interface:** Noite, Claro, Grafite, Oceano, Rosé e Floresta.
- **Plano de fundo:** cor lisa do tema, 6 gradientes (Aurora, Pôr do sol, Mar, Noturno, Dourado e Pastel) ou **sua própria foto**. Ajuste o desfoque e a suavização para manter tudo legível. Os painéis ficam translúcidos sobre o fundo.
- **Cor de destaque** personalizada (por exemplo, a cor da sua marca).
- **Programação em Lista ou Grade**, com miniaturas grandes. Também há um atalho nos ícones ao lado de "Programação". Na grade, dá para arrastar os cartões para reordenar.
- **Fotos e vídeos verticais na TV** usam o plano de fundo do sistema nas laterais, em vez de faixas pretas, com uma sombra suave em volta da mídia. Na aba **Tela › Fundo de fotos e vídeos verticais** você pode trocar para "Desfoque" (a própria foto desfocada) ou "Preto". Quando você muda a aparência, a TV conectada se atualiza sozinha.
- As escolhas ficam salvas no aparelho. "Restaurar padrão" volta ao visual original.

## Recursos do app
- O app abre direto no último modo usado (controle ou TV). Para trocar, clique no logotipo.
- **Funciona sem internet** para montar a programação. Para conectar a uma TV é preciso internet.
- **Celular:** a opção *Compartilhar → Apresentação TV* na galeria envia fotos, vídeos e PDFs direto para a programação (Android).
- **Computador:** com o botão direito em uma imagem, PDF ou vídeo, use *Abrir com → Apresentação na TV* (Chrome/Edge).
- **Atalhos:** `Ctrl+K` conectar TV · `Ctrl+O` adicionar arquivos · `Espaço` reproduzir/pausar · `← →` anterior/próximo · `L` repetir · `M` sem som.
- A tela da TV fica sempre acesa enquanto apresenta.
- Quando você publicar uma versão nova, o app mostra **"Nova versão disponível — Atualizar"**. Ao alterar o `index.html`, mude também `apres-v1` para `apres-v2` na primeira linha do `sw.js`.
