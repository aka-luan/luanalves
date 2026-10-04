# Issue 10: evidência pública dos cases

## Alteração preparada

Os cards de case descrevem recursos e ganhos qualitativos, mas o template os apresentava como “Resultados”. A seção agora se chama “Estrutura e recursos do projeto”, preservando a posição do contato contextual após a prova. Nos três cases prioritários, o texto aponta recursos verificáveis e oferece links para o projeto publicado.

Conviva, Urbem e Poliana escolhem explicitamente Site Institucional como serviço principal, conforme a entrega institucional já descrita nos dados. A presença adicional de Blog Profissional na categoria não determina esse vínculo automaticamente. Categorias e entregas originais de CMS/blog não foram reclassificadas: essa confirmação ainda depende do proprietário.

## Fontes observadas em 04/10/2026

| Case | Fonte pública | O que sustenta | Limite |
| --- | --- | --- | --- |
| Conviva | [Página inicial](https://convivaengenharia.com.br/) | Empreendimentos, jornada do comprador, stands, atendimento e blog visíveis | Não prova a participação individual nem melhora de vendas ou conversão |
| Urbem | [Página inicial](https://urbembr.com/) e [Projetos](https://urbembr.com/projetos/) | Produtos de madeira engenheirada, caminhos de biblioteca/blog/contato e projetos classificados por aplicação | Não prova a autoria de cada seção, escopo original ou crescimento orgânico |
| Poliana | [Página inicial](https://polianabentes.com.br/) e [Serviços](https://polianabentes.com.br/nossos-servicos/) | Atuação em Belém/Pará e páginas das áreas da consultoria | Não prova a implementação do CMS nem melhora de credibilidade ou contatos |

As fontes foram consultadas com navegador de leitura da web; alguns documentos internos retornaram conteúdo de cache antigo ou erro e não foram usados como destinos de evidência. A home da Conviva e a página de Projetos da Urbem retornaram conteúdo atual; a home e Serviços da Poliana estavam disponíveis na consulta com cache de poucos dias/um mês. Os links descrevem a estrutura pública observada, não um antes/depois da entrega original.

Os rodapés públicos creditam Agência Skyrocket na Conviva e Parawara Design na Poliana. Esses créditos não demonstram ausência de participação de Luan, mas exigem confirmação de papel e colaboração antes de acrescentar atribuições. Não foram criados depoimentos, métricas, novos anos de entrega ou alegações de autoria individual de conteúdos.

## Validação

- `pnpm run build`: passou, 28 páginas, com o patch obrigatório de assets.
- `node docs/validation/check-issue-6-schema.mjs`: passou nas 28 páginas; identidade, canonical, FAQ visível e política de datas dos cases preservadas.
- HTML dos sete cases: um H1, novo heading, contato contextual preservado; três cases prioritários têm links de evidência e serviço institucional.
- Conviva em 390 × 844 e 320 × 740: documento com 380 e 310 px, sem overflow horizontal da página; texto e links de prova legíveis. [Captura mobile](issue-10-conviva-mobile.png).
- `git diff --check`: sem erros.

## Aceite ainda pendente

### Integração com os PRs 24 e 25

Em 04/10/2026, a branch temporária `codex/open-issues-integration`, commit `76bb23d7072e552c12f84bb536c263536a5d4517`, reuniu o PR 24 (`de7b7a3`), o PR 25 (`f0eb365`) e esta alteração de cases (`d54d785`). O merge não teve conflitos. Build de 28 páginas, 18 testes e verificação de schema das 28 páginas passaram.

A navegação interna Urbem → Insights → checklist foi conferida no navegador. Depois da transição, o artigo mostrou o título revisado, publicação original `2026-06-05`, revisão `2026-10-04`, canonical do checklist e um único script JSON-LD com BlogPosting/FAQPage, sem CreativeWork residual do case. As mensagens de revisão de lançamento foram preservadas. Isso valida a combinação local, não substitui a publicação nem confirma atribuições dos cases.

Confirmar com Luan o papel efetivo em cada projeto, colaboradores, restrições e o escopo de blog/CMS da Conviva. Publicar somente depois dessa revisão e validar o domínio final. Se houver números comerciais, registrar período, fonte, método e autorização antes de incorporá-los. Ausência de números não invalida a descrição dos recursos, mas a fonte pública sozinha não conclui todos os critérios da issue 10.
