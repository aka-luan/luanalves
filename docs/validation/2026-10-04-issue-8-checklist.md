# Issue 8: checklist de lançamento

## Evidência e decisão editorial

Em 04/10/2026, o Search Console autenticado confirmou a associação da consulta exata “coisas para conferir antes de lançar seu site” com `/insights/checklist-lancamento-site-empresarial/`, usando o filtro consulta × página, pesquisa Web e o período de três meses exibido (30/06 a 29/09/2026). As capturas com informações da conta ficaram fora do repositório público. Não se compara esse recorte com os números de outro período da auditoria.

O artigo existente recebeu title e descrição mais diretos, dez verificações com critérios de aprovação, modelo copiável com responsável/prazo/evidência, orientação para repetir os testes em produção e referências técnicas primárias. O slug, a categoria, a resposta inicial, os passos e a FAQ foram preservados. O contato no corpo propõe revisão do lançamento. Os demais contatos contextuais do template dependem do PR #24 (issue #15).

A publicação original permanece em 05/06/2026. A revisão substantiva de 04/10/2026 aparece separadamente e alimenta `BlogPosting.dateModified` e `sitemap.lastmod`. Os sete outros artigos não receberam datas artificiais. A política está registrada em `ARCHITECTURE.md`, seguindo a [orientação do Google sobre datas de publicação](https://developers.google.com/search/docs/appearance/publication-dates).

## Validação local

- `pnpm run build`: 28 páginas, incluindo o patch obrigatório de assets.
- Inspeção do HTML gerado: um H1, dez linhas de checklist, âncoras existentes, datas de publicação/revisão coerentes e sitemap atualizado.
- Os oito artigos publicados foram conferidos: somente o checklist tem `dateModified` diferente da publicação.
- Navegador em 390 × 844 e 320 × 740: sem overflow horizontal da página (larguras de documento 380 e 310 px). A tabela e o modelo longo têm rolagem própria.
- O bloco copiável foi corrigido para não incluir indentação do template no conteúdo.
- `git diff --check`: sem erros.
- Integração com a branch do PR #24: build e 18 testes passaram; os contatos de cabeçalho, lateral e autor usam mensagem de revisão de lançamento, preservando o contato contextual do corpo.

Capturas: [cabeçalho mobile](issue-8-checklist-mobile.png) e [registro copiável](issue-8-checklist-record.png).

## Preview hospedado

Em 04/10/2026, a Vercel marcou como pronto o deployment `87wWE7GHATy9gTKyhC2vhtBJrUmd` do commit `235faa8`. O [preview do artigo](https://luanalves-git-codex-issue-8-launch-checklist-aka-luans-projects.vercel.app/insights/checklist-lancamento-site-empresarial/) foi conferido com a sessão autenticada existente, em 390 × 844 px: documento com 380 px, title e conteúdo revisados, publicação `2026-06-05`, atualização `2026-10-04` e canonical apontando para a URL pública com barra. O modelo não contém indentação extra. Os contatos de lateral/autor e corpo mantêm mensagens de revisão de lançamento. Nenhuma mensagem foi enviada. [Captura do preview mobile](issue-8-checklist-preview.png).

Publicação e validação no domínio final ainda pendentes. A issue permanece aberta até essa etapa; não há alegação de aumento de cliques ou conversões.
