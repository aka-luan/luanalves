# Content Calendar: Nov 2026 – Jan 2027

Goal: restart non-brand search growth. The GSC export for 2026-08-04 to 2026-11-03 showed about 410 impressions and 12 clicks, nearly all on brand or home. No insight was published after 2026-07-30.

Rule for every post: support one commercial page and cite one real case from `src/data/site.ts`. A post that supports no service or vertical page doesn't earn a slot.

Before writing each post, check the target query in Google Keyword Planner or the GSC Queries report and adjust the angle if the query has no demand. Record the result on the post's issue. The first three queries were checked on 2026-11-10 (see #32, #33, #34); the rest are unverified.

| Publish | Working title | Target query | Supports | Case evidence |
| --- | --- | --- | --- | --- |
| 2026-11-20 | Site para incorporadora: o que precisa ter para vender lançamentos | site para incorporadora | `/site-para-incorporadora/` | Trésor Incorporações, Conviva Engenharia, Tymber |
| 2026-12-04 | Como escolher quem cria o site da sua empresa em Belém | criação de sites em belém | `/criacao-de-sites-belem/` | Poliana Bentes (Belém) |
| 2026-12-18 | Site de construtora: como mostrar obras e passar confiança | site de construtora | `/site-para-construtora/` | Conviva Engenharia |
| 2027-01-08 | Quanto custa um site profissional em 2027 (refresh, not a new post) | quanto custa um site profissional | `/criacao-de-sites/` | Existing article `quanto-custa-um-site-profissional` |
| 2027-01-15 | Landing page para lançamento imobiliário: estrutura que leva ao WhatsApp | landing page lançamento imobiliário | `/landing-page/`, `/site-para-incorporadora/` | Tresor Incorporações |
| 2027-01-29 | Site para indústria de madeira engenheirada: como explicar CLT e MLC para quem compra | site madeira engenheirada | `/site-para-industria-de-madeira-engenheirada/` | Tymber |

## Notes Per Post

- **Incorporadora.** Cover plantas, tabela, localização, andamento de obra and the WhatsApp handoff for each empreendimento. `/site-para-incorporadora/` already sits at position 9 with few impressions, so a supporting article can lift it.
- **Belém.** Write a buyer's guide, not a second service page. Cover local proof, Google Business Profile, meeting in person, and what to ask before hiring. Link to `/criacao-de-sites-belem/` and avoid repeating its copy, or the two pages compete for the same query. Current positions for "criação de sites (em) belém" range from 10 to 71.
- **Construtora.** Focus on portfolio of obras, certificações, and B2B contact paths. Targets "site de construtora" (100–1K monthly searches on 2026-11-10) instead of "site para construtora" (10–100). Conviva also appears in the incorporadora post, so this one uses its construction-phase angle.
- **Quanto custa refresh.** Update prices and examples for 2027, set `updatedIsoDate`, keep the slug. People search this kind of query with the year in it.
- **Landing page imobiliária.** Distinct from the incorporadora post: one empreendimento, one campaign, one conversion. `/landing-page/` has 17 impressions at position 7.
- **Madeira engenheirada.** Niche with little competition. Aim to be the reference answer, and expect few but qualified visits.

## Each Post Ships With

- Two contextual links from existing articles, using the inline `<a>` pattern in paragraph text (see the checklist links added on 2026-11-06).
- The post's slug in the supported page's `relatedInsightSlugs` when that swap is worth it.
- A hero image in `public/assets/insights/` and an entry in `insightContacts`.
- `pnpm run build`, then a URL Inspection request in GSC after deploy.

## Checkpoints

- **2026-12-04.** Check the checklist query ("coisas para conferir antes de lançar seu site") after the 2026-11-06 retitle. Success means position under 10 with clicks above 0.
- **2027-02-05.** Export 3 months of GSC data and compare non-brand impressions and clicks against the baseline above. Keep topics that gained impressions and drop the angles that didn't.
