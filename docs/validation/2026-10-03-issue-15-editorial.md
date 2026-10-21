# Issue #15: leituras e contato por intenção

Validação local em 03/10/2026. Publicação pendente.

Os quatro serviços e sete cases definem relatedInsightSlugs nos seus respectivos dados. A seleção prioriza dúvidas de estrutura, escolha de formato, investimento, prazo, contratação ou lançamento conforme a entrega. Landing page aponta para escolha de formato e performance; institucional aponta para estrutura e investimento. Cases com links de segmento mantêm uma leitura, os demais mantêm duas, preservando a composição existente.

getCuratedInsights resolve apenas artigos publicados, deduplica e preserva a ordem editorial. Seleções ausentes ou inválidas usam escolha de formato e investimento como fallback de planejamento, sem depender da data de publicação.

Os oito artigos recebem label e mensagem de contato escolhidos juntos pelo tema. Prazos convida a planejar objetivo, data, materiais e aprovações; checklist convida a revisar o lançamento; investimento pede alinhamento de escopo. As mensagens do conteúdo já contextualizadas foram preservadas. A listagem agora inclui site institucional, blog e landing page no convite, com mensagem sobre objetivo/formato.

Verificações:

- `pnpm run build` passou: 28 páginas, incluindo patch de assets.
- [Conferência dos dados e HTML](issue-15-editorial-checks.json): oito pares de CTAs de artigo, quatro seleções de serviço, sete seleções de case; ordem renderizada, slugs publicados e destinos existentes. BlogPosting preserva a data original; o corpo editorial de checklist/prazos não foi alterado nesta issue.
- Execução do helper com slugs inválidos/repetidos retornou duas leituras publicadas distintas do fallback.
- Mobile 320 × 740: [CTA do artigo de prazos](issue-15-article-mobile.png) e [CTA da listagem](issue-15-index-mobile.png) legíveis. Largura do documento 310px em ambos, sem overflow horizontal. Viewport temporária restaurada.
- `git diff --check` passou. Não foram modificadas lógica de navegação, filtros, modal ou estado DOM nesta etapa.

Esta validação não demonstra impacto em cliques, conversas ou conversão. Atualização editorial e evidências reais de checklist/prazos continuam no escopo das #8 e #9.
