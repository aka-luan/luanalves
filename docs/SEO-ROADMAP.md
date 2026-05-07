# Roadmap de SEO — Luan Alves

Atualizado em: 2026-05-06

## Diagnóstico rápido

Site Astro em PT-BR para desenvolvedor web freelancer, com foco em criação de sites, blogs e landing pages para pequenas e médias empresas no Brasil. Estrutura atual enxuta:

- `/`: home institucional com serviços, portfólio, diferenciais e contato.
- `/criacao-de-sites`: página de serviço principal para criação de sites.
- Schema atual: `Person`, `ProfessionalService` e `WebSite`.
- Pontos fortes: proposta clara, performance potencialmente boa, portfólio real, copy orientada a conversão, assets próprios.
- Gargalos SEO: poucas URLs indexáveis, ausência de páginas dedicadas por serviço/intenção, cases sem páginas próprias, sem blog/insights, metadados e schema centralizados demais no layout base.

## Posicionamento

Posicionar Luan Alves como desenvolvedor web freelancer especializado em sites rápidos, profissionais e orientados a conversão para empresas brasileiras, com prioridade inicial em buscas transacionais e locais.

### Audiências principais

- Pequenos empresários que precisam de site profissional.
- Prestadores de serviço que dependem de orçamento via WhatsApp.
- Empresas em Belém/PA e região Norte buscando presença digital.
- Negócios que já anunciam e precisam de landing pages mais rápidas.
- Empresas que querem blog/site com base técnica de SEO.

### Pilares de palavras-chave

| Pilar | Intenção | Exemplos |
| --- | --- | --- |
| Criação de sites | Transacional | criação de sites profissionais, desenvolvedor de sites, site institucional para empresa |
| Local | Transacional/local | criação de sites em Belém, desenvolvedor web em Belém, freelancer web Belém |
| Landing pages | Transacional | criação de landing page, landing page para tráfego pago, página de vendas profissional |
| Blog/SEO | Comercial | blog profissional para empresa, site otimizado para SEO, estrutura de blog para ranquear |
| Educação | Informacional | quanto custa criar um site, o que um site profissional precisa ter, site institucional vale a pena |

## Arquitetura recomendada

Criar páginas indexáveis por serviço, localidade, prova e conteúdo editorial.

```text
/
/criacao-de-sites/
/criacao-de-sites-belem/
/site-institucional/
/landing-page/
/blog-profissional/
/portfolio/
/portfolio/tresor-incorporacoes/
/portfolio/skyrocket/
/portfolio/poliana-bentes/
/sobre/
/processo/
/faq/
/insights/
/insights/quanto-custa-criar-um-site/
/insights/site-institucional-ou-landing-page/
/insights/como-escolher-desenvolvedor-web/
```

## Plano técnico

### Prioridade alta

- Separar metadados por página: `title`, `description`, `canonical`, `og:url`, `og:image`, `twitter:image`.
- Corrigir inconsistência atual: Open Graph usa `og-cover.png`, Twitter/schema usam `og-cover.jpg`.
- Remover `SearchAction` do schema enquanto não existir busca no site.
- Gerar `sitemap.xml` e `robots.txt`.
- Adicionar canonical por rota.
- Criar schema por tipo de página:
  - Home: `Person`, `ProfessionalService`, `WebSite`.
  - Serviço: `Service`, `FAQPage`.
  - Case: `CreativeWork` ou `Article`.
  - Blog: `BlogPosting`.
- Garantir H1 único e headings orientados por intenção.
- Revisar encoding das cópias PT-BR antes de qualquer alteração em texto visível.

### Prioridade média

- Criar componente SEO centralizado para reduzir repetição e erro.
- Adicionar breadcrumbs e `BreadcrumbList` em páginas internas.
- Adicionar páginas de cases com problema, solução, stack, resultado e CTA.
- Otimizar imagens com dimensões explícitas, `srcset` quando útil, `fetchpriority` só no hero.
- Medir Lighthouse/Core Web Vitals depois de cada nova página.

### Prioridade baixa

- Adicionar `llms.txt` com resumo de serviços, páginas principais e contato.
- Criar página `/sobre/` com sinais de E-E-A-T: experiência, método, stack, links sociais reais.
- Criar página `/processo/` com metodologia mais detalhada.

## Roadmap por fase

### Fase 1 — Fundação técnica, semanas 1-2

Objetivo: deixar indexação e metadados confiáveis.

- Implementar componente `Seo.astro` ou props completas no `BaseLayout`.
- Adicionar canonical, `og:url`, `twitter:image` coerentes por página.
- Corrigir asset social para uma única extensão real.
- Criar `public/robots.txt`.
- Configurar sitemap em Astro.
- Remover schema inválido/inútil.
- Validar schema no Rich Results Test.
- Rodar build e Lighthouse.

Entrega esperada: site tecnicamente pronto para indexar sem sinais conflitantes.

### Fase 2 — Páginas transacionais, semanas 3-6

Objetivo: capturar buscas de alta intenção.

- Expandir `/criacao-de-sites/` para virar página completa de serviço.
- Criar `/site-institucional/`.
- Criar `/landing-page/`.
- Criar `/blog-profissional/`.
- Criar `/criacao-de-sites-belem/` com foco local e copy natural.
- Adicionar FAQ curto em cada página.
- Linkar home → serviços → cases → contato.

Entrega esperada: 5 páginas comerciais indexáveis, cada uma com CTA forte para WhatsApp.

### Fase 3 — Prova e autoridade, semanas 7-10

Objetivo: transformar portfólio em ativo SEO.

- Criar `/portfolio/` como índice.
- Criar uma página para cada case atual.
- Estrutura mínima de cada case:
  - contexto do cliente;
  - desafio;
  - solução;
  - funcionalidades;
  - resultado qualitativo ou métrica real;
  - galeria;
  - CTA para orçamento.
- Adicionar links dos cards da home para páginas de case.
- Usar schema `CreativeWork`/`Article`.

Entrega esperada: prova concreta para usuários, Google e IA search.

### Fase 4 — Conteúdo editorial, semanas 11-16

Objetivo: puxar tráfego informacional que vira orçamento.

Publicar 2 conteúdos por mês:

1. Quanto custa criar um site profissional em 2026?
2. Site institucional ou landing page: qual escolher?
3. O que um site profissional precisa ter para vender?
4. Como escolher um desenvolvedor web freelancer?
5. Por que performance afeta conversão?
6. Checklist antes de lançar um site empresarial.

Cada artigo deve linkar para uma página de serviço e para WhatsApp.

Entrega esperada: base editorial evergreen com intenção comercial clara.

### Fase 5 — Local SEO e autoridade externa, meses 5-8

Objetivo: ganhar presença regional e confiança.

- Criar/otimizar Google Business Profile se houver operação local.
- Padronizar NAP: nome, telefone, cidade, site.
- Criar citações em perfis profissionais relevantes.
- Atualizar LinkedIn, GitHub, Instagram e Behance/Dribbble se usados.
- Pedir depoimentos de clientes e inserir em páginas de serviço/case.
- Buscar parcerias locais: agências, designers, consultores e negócios de Belém.

Entrega esperada: mais sinais de confiança e descoberta local.

### Fase 6 — GEO/AI search, meses 6-12

Objetivo: tornar o site fácil de citar por mecanismos com IA.

- Criar blocos com respostas diretas em páginas de serviço.
- Publicar cases com métricas específicas.
- Usar frases citable, por exemplo: "Luan Alves desenvolve sites institucionais rápidos para empresas brasileiras que precisam gerar orçamento via WhatsApp."
- Manter dados consistentes em schema, página, redes e perfis externos.
- Criar `/llms.txt` apontando páginas principais, serviços e contato.

Entrega esperada: site mais legível para Google AI Overviews, ChatGPT, Perplexity e Bing Copilot.

## KPIs

| Métrica | Baseline | 3 meses | 6 meses | 12 meses |
| --- | --- | --- | --- | --- |
| Páginas indexáveis | 2 | 8-10 | 14-18 | 24+ |
| Impressões orgânicas | A medir no GSC | +50% | +150% | +300% |
| Cliques orgânicos | A medir no GSC | +25% | +100% | +250% |
| Leads orgânicos via WhatsApp | A medir | 3-5/mês | 8-12/mês | 15+/mês |
| Páginas com schema válido | Parcial | 100% comerciais | 100% cases/blog | Mantido |
| Core Web Vitals | A medir | Bom | Bom | Bom |

## Backlog recomendado

### Implementação imediata

- `Seo.astro` ou `BaseLayout` com props completas.
- `robots.txt`.
- sitemap.
- canonical por página.
- correção de `og-cover`.
- schema sem `SearchAction`.

### Próximas páginas

- `/site-institucional/`
- `/landing-page/`
- `/blog-profissional/`
- `/criacao-de-sites-belem/`
- `/portfolio/`
- páginas individuais dos 3 cases.

### Conteúdo

- Guia de preço.
- Comparativo site institucional vs landing page.
- Checklist de site profissional.
- Guia de contratação de desenvolvedor web.

## Riscos

- Conteúdo genérico competir mal contra agências maiores. Mitigação: foco em freelancer direto, Belém, rapidez, WhatsApp e cases reais.
- Poucas métricas nos cases. Mitigação: usar resultados qualitativos agora e coletar métricas futuras.
- Copy com mojibake em leituras PowerShell. Mitigação: validar acentuação no arquivo fonte antes de publicar.
- Crescimento de páginas sem links internos. Mitigação: todo conteúdo novo deve apontar para serviço, case e contato.

## Critério de sucesso

Roadmap funcionando quando Search Console mostrar crescimento de impressões para termos de criação de sites, páginas comerciais receberem cliques orgânicos e WhatsApp tiver leads identificados como vindos do Google.
