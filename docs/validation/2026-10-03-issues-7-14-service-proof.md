# Issues #7 e #14: prova e fluxo comercial dos serviços

Validação local em 03/10/2026. Publicação pendente.

Cada serviço escolhe um case e seu enquadramento nos dados. Site institucional usa Agência Skyrocket; blog e Belém usam Poliana Bentes. Landing page usa Skyrocket como referência de mensagem, hierarquia e contato, com aviso explícito de que o projeto é institucional e não demonstra taxa de conversão ou retorno de mídia de campanha.

ServiceProof reutiliza imagem, cliente, problema e solução dos cases existentes. Nenhuma métrica ou depoimento foi acrescentado. O componente falha no build se o slug do case não existir.

Fluxo: oferta → benefícios → prova → entrega base/extensões → contato sobre escopo → adequação ao público → processo → condições de parceria → leituras/objeções → contato final. Os antigos cards de público foram resumidos a descrição e segmentos atendidos; os argumentos repetidos de diferenciais foram substituídos por condições concretas de parceria, com link às FAQs. O CTA intermediário usa service_after_case; o final mantém service_final. Menu e âncoras existentes foram preservados.

Em Belém, o hero agora explica atendimento direto a partir da cidade com processo remoto. “Copy local sem repetição forçada” e a descrição de metadados/headings foram substituídas por informação comercial. O case Poliana apresenta a atuação da consultoria no Pará e a base institucional/editorial entregue. Mapa continua condicionado ao escopo; materiais, investimento e suporte seguem as condições da #13.

Verificações:

- Build final passou: 28 páginas, com patch de assets.
- [Conferência dos quatro serviços](issue-14-service-proof-checks.json): sequência de seções, case correto, imagem e destino existentes, âncoras únicas e resolvíveis, CTA WhatsApp e limitação de campanha. Nenhum texto de bastidor ou atributo de implementação solto foi encontrado.
- Landing page em 390 × 844: [prova](issue-14-proof-mobile.png) e [limitação/links](issue-14-proof-limits-mobile.png) legíveis. A âncora “Ver cases” chega à prova.
- [Desktop 1440 × 900](issue-14-proof-desktop.png) preserva composição com imagem e história lado a lado. Em 320 × 740, documento 310px e área de prova 262px, sem overflow horizontal.
- Clique em “Conhecer o case” abre Agência Skyrocket por Barba; após a transição, H1, title e canonical correspondem ao case.
- [Belém em 320 × 740](issue-7-belem-mobile.png): atendimento remoto e CTA legíveis. Viewport temporária restaurada.
- `git diff --check` passou. Não foi adicionada lógica de DOM, foco, modal ou timers.

Mensuração da #7: a auditoria anterior registra Belém com 1 clique/102 impressões e a consulta local com 1/27 no export até 29/09/2026. São agregações separadas, não um cruzamento página × consulta. A [referência autenticada de 04/10/2026](2026-10-04-issue-7-gsc-baseline.md) registra filtros de página/consulta, país e dispositivo no período exibido de 02/09–29/09. A comparação de 28 dias após publicação com contatos qualificados continua pendente; estas alterações locais não demonstram ganho de posição ou conversão. Nenhum novo GBP foi criado.
