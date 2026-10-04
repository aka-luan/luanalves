# Issue 4: canonicals observadas no Search Console

Inspeção autenticada em 04/10/2026, propriedade de domínio `luanalves.com.br`, antes da publicação do PR #24. Foi consultado o índice do Google, sem solicitar indexação e sem testar/publicar uma nova versão. Capturas da conta permanecem em arquivos locais ignorados; a tabela registra apenas as URLs públicas e os estados relevantes.

| URL inspecionada | Estado do índice | Canonical declarada | Canonical escolhida pelo Google | Último crawl exibido |
| --- | --- | --- | --- | --- |
| `https://luanalves.com.br/criacao-de-sites-belem/` | URL desconhecida pelo Google; não indexada | N/A | N/A | N/A |
| `https://luanalves.com.br/criacao-de-sites-belem` | Indexada | `https://luanalves.com.br/criacao-de-sites-belem/` | URL inspecionada, sem barra | Sep 18, 2026, 6:01:42 PM |
| `https://luanalves.com.br/site-institucional/` | Descoberta, atualmente não indexada | N/A | N/A | N/A |
| `https://luanalves.com.br/site-institucional` | Indexada | `https://luanalves.com.br/site-institucional/` | URL inspecionada, sem barra | Jul 18, 2026, 4:43:08 PM |

As duas versões sem barra tiveram crawl permitido, fetch bem-sucedido, indexação permitida e Googlebot smartphone. O relatório de Belém sem barra exibiu erro temporário de processamento em Sitemaps. A versão institucional com barra foi descoberta nos sitemaps e em links internos. Os horários acima são os exibidos pela interface; não se presume fuso não informado.

## Implicação e próxima verificação

A canonical declarada ainda não foi escolhida pelo Google nessas duas páginas. As variantes sem barra continuam publicamente acessíveis como 200 na linha de base anterior. O redirect permanente para a versão com barra preparado no PR #24 alinha esse sinal ao canonical e sitemap; esta observação não demonstra que o Google já consolidou as URLs.

Depois da publicação, conferir a cadeia de redirects e os recursos estáticos conforme [a validação de hospedagem e schema](2026-10-03-issues-4-6-canonical-schema.md). Repetir a inspeção quando houver um novo crawl, registrando a data. O índice não muda imediatamente após o deploy. Não encerrar a issue apenas por um build ou uma inspeção anterior à publicação.
