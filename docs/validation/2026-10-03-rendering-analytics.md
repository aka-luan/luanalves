# Validação: Conviva, renderização inicial e analytics

Data: 2026-10-03. PR relacionada às issues #2, #3 e #16.

## Escopo verificado

Link do artigo de preços corrigido para /portfolio/conviva-engenharia/, sem redirect de uma URL que não tem histórico de migração comprovado. Loader e ocultação CSS antes do boot removidos. Heroes de home/serviço e artigo não recebem estado inicial invisível pelo GSAP. Revelações abaixo do viewport, reduced-motion e cleanup continuam no ciclo Barba. Fontes locais de texto crítico recebem preload; imagem de artigo recebe fetchpriority high.

Instrumentação existente ampliada com posições estáveis, rótulos sem ícones e envio opcional a GA4. O Google tag usa o fluxo confirmado G-MWZHK1N4TN por padrão, com override PUBLIC_GOOGLE_ANALYTICS_ID, e coleta apenas no host de produção. Conta/propriedade/fluxo GA4 criados, termos aceitos pelo proprietário, dimensões cta_position/cta_label criadas e medição otimizada desativada. Recebimento em produção ainda pendente. Ver [analytics e funil](../analytics.md).

## Evidência mobile anterior

Os relatórios públicos abaixo têm uma execução por URL, em 2026-10-03 por volta de 00:35–00:36 (São Paulo). Não são medianas de três execuções.

| Página | LCP | CLS | Relatório |
| --- | --- | --- | --- |
| Home | 4,5 s | 0,03 | [PSI](https://pagespeed.web.dev/analysis/https-luanalves-com-br/ekw46n7wmb?form_factor=mobile) |
| Belém | 4,7 s | 0 | [PSI](https://pagespeed.web.dev/analysis/https-luanalves-com-br-criacao-de-sites-belem/4rvozxk95n?form_factor=mobile) |
| Artigo de prazos | 3,8 s | 0,005 | [PSI](https://pagespeed.web.dev/analysis/https-luanalves-com-br-insights-quanto-tempo-leva-para-criar-um-site-profissional/pdez5prp98?form_factor=mobile) |

Tentativa de coletar três novas execuções comparáveis pela API pública PSI recebeu HTTP 429 antes de retornar uma medição. Nenhuma mediana foi calculada. Campo: sem dados suficientes nos relatórios anteriores; TBT não equivale a INP.

Para coletar séries reproduzíveis, usar scripts/measure-mobile-psi.mjs com origem pública e arquivo de saída. A variável PAGESPEED_API_KEY é opcional, para uma chave já autorizada; não salvar a chave em Git. Comparar três execuções por URL, mesma versão/configuração de Lighthouse e ambiente de hospedagem. Registrar medianas de LCP/CLS/FCP/TBT antes e depois. A meta LCP <2,5 s não está comprovada. A comparação em produção requer publicação do PR; não foi autorizado merge nesta tarefa. Se persistir LCP alto, inspecionar CSS bloqueante, custo de fontes/imagens e TTFB no relatório novo.

## Verificação local

Build Astro com patch de assets; testes de clique filho, rótulo, domínio correto, reinit/cleanup, erro de provedor, contexto GA4, hero/viewport visível e reduced-motion. Navegação manual mobile no build de produção, viewport real 390 × 844: home e Belém sem overflow horizontal; título, texto e CTA visíveis; menu mobile abre; navegação Barba atualiza título e canonical. Artigo de preços aponta para o case Conviva correto. Artigo de prazos rechecado com título e visual em opacity 1 desde o boot, sem overflow. Testes finais: 5 arquivos, 11 testes passam com pnpm run test --maxWorkers=1; o teste em paralelo sofreu timeout de inicialização dos workers, sem falha de asserção.

Crawl do HTML gerado: 28 páginas e 1.174 links internos, sem destino quebrado. Todos os CTAs de WhatsApp possuem posição explícita após completar a cobertura de 404 e da página de criação de sites.

## Critérios ainda abertos

Issue #3: medianas PSI antes/depois e validação de CLS de laboratório após publicação. Issue #16: evidência de recebimento sem duplicidade após publicação e 28 dias de linha de base comercial. Manter essas issues abertas até a evidência existir.
