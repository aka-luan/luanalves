# Issue #11: contato contextual nos cases

Validação local em 03/10/2026. Sem publicação ou fechamento da issue nesta etapa.

O template dos sete cases agora usa o componente compartilhado HomeCta após os resultados e antes dos serviços/leituras relacionados. A mensagem do WhatsApp identifica o projeto visualizado. O convite explica quais informações enviar e o alinhamento de escopo antes da proposta, sem prometer vendas. O botão usa a posição `case_final` na instrumentação delegada existente. O painel permanece visível sem inicialização de animação.

O heading de bastidor foi substituído por “Conheça o serviço e tire suas dúvidas”. Os caminhos para outros projetos foram preservados.

Verificações:

- `pnpm run build` passou: 28 páginas, incluindo o patch de assets.
- Inspeção do HTML gerado confirmou nos sete cases um único CTA `case_final`, mensagem com o título correto, posição imediatamente após os resultados e âncora `contato` única.
- Navegador local no case Conviva: painel e botão legíveis em 320 × 740 e 1440 × 900. No mobile, largura do documento 310px para viewport de 320px; botão contido no painel, com foco visível por teclado. Destino inspecionado sem enviar mensagem. [Captura mobile](issue-11-case-mobile.png).
- Viewport temporária restaurada. Nenhuma lógica de DOM ou eventos foi acrescentada; a medição usa o listener já existente.
- `git diff --check` passou.

Recebimento do novo rótulo em analytics de produção e publicação ainda precisam de validação posterior. Esta etapa não comprova ganho comercial.
