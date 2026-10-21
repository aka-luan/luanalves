# Issue #5: controle acessível do menu

Validação local em 03/10/2026. Publicação e auditoria externa de produção ainda pendentes.

SiteNav usa um botão nativo com nome acessível, aria-controls e aria-expanded. O antigo label com aria-label e o checkbox invisível foram removidos. O foco tem contorno visível. Escape fecha o menu e devolve o foco ao botão; o menu fechado fica inert no mobile e volta a estar disponível no desktop.

O script duplicado do componente foi removido: mobile-nav.ts agora é inicializado pelo mesmo ciclo de página na carga inicial e nas transições Barba. O cleanup remove os listeners e mata a animação. Reduced motion usa a mesma altura limitada ao viewport, sem animação.

Evidências:

- Build de produção passou, com 28 páginas e patch de assets.
- A suíte final passou: 7 arquivos, 18 testes. Uma execução sem filtros incluiu cópias temporárias; a execução restrita ao código do projeto excluiu .tmp-dev e luanalves.com.br-audit. Os testes do controlador verificam reinit sem toggle duplo, cleanup, estados acessíveis, Escape/foco, resize durante animação e altura com reduced motion.
- Navegador local em 390 × 844: abertura por Enter, reabertura por Espaço, fechamento por Escape com foco no botão; home → Sobre pelo menu e reabertura após terminar a transição Barba. A árvore de acessibilidade mostra o botão como expandido/colapsado com o nome atualizado.
- [Menu aberto após navegação](issue-5-menu-mobile.png). Em 1440 × 900, os links desktop voltam à árvore de acessibilidade, sem inert ou scroll lock. Viewport temporária restaurada.
- Verificação de semântica do HTML gerado: controle button com aria-controls resolvível, nome e estado inicial; nenhum label.nav-toggle-button com aria-label. Esta checagem cobre o defeito reportado, não equivale a uma auditoria geral de acessibilidade.

O teste de reduced motion detectou a ausência do max-height ao usar valor numérico após `none`. A medição limpa os estilos antes de preparar o conteúdo, e os limites de max-height usam unidade px explícita na abertura e no resize. A regressão passou após essa correção. `git diff --check` passou.

Também foram corrigidos os textos compartilhados do menu/rodapé ainda pendentes na #12: promessa de resposta em 24h e garantias de conversão foram substituídas por apresentação da empresa, contato e alinhamento de próximos passos.
