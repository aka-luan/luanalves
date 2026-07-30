# SEO Roadmap — Current

Updated: 2026-07-30. Supersedes `docs/SEO-ROADMAP-archived.md`: the implementation work from phases 1–4 (technical foundation, transactional pages, portfolio cases, editorial base) is shipped. External validation that remains incomplete is carried into P0 below.

## Where things stand

- 21 indexable routes: home, 5 service pages, `/portfolio/` + 7 cases, `/insights/` + 6 articles.
- Metadata, canonical, sitemap, robots.txt, llms.txt, breadcrumbs, and per-page-type schema are in place.
- The binding constraint is no longer on-page work. It is: (1) zero measurement data — nothing confirms these pages are indexed or ranking; (2) zero off-site signals — no GBP, citations, or external profiles; (3) editorial cadence stalled at 6 articles.

Priorities below are ordered by dependency: P0 makes everything else verifiable, P1 is the highest-leverage remaining work for a local freelancer site, P2/P3 compound over time.

## P0 — Measurement and validation (target: 2026-08-06; blocks validation of everything else)

1. **Verify the domain in Google Search Console and submit the sitemap.**
   Status (2026-07-30): complete; domain access and sitemap submission confirmed by the site owner.
   Failure check: coverage report shows fewer than ~19/21 routes indexed after 4 weeks → investigate exclusions per URL. Leading indicator: impressions > 0 for the brand query "luan alves" within days of verification.
2. **Capture a Core Web Vitals baseline** (PageSpeed Insights on home, one service page, one article; record LCP / INP / CLS — INP, never FID). Store the numbers here so future changes have a reference.
   Status (2026-07-30): Search Console/CrUX reports insufficient usage data for both mobile and desktop over the last 90 days. Lab baselines are intentionally deferred.
   Failure check: any page scoring "poor" on a vital → open a fix task before P2 content work.
3. **Validate schema on representative page types** with the Rich Results Test: home, one service page, one case, and one article. Record warnings and errors; create a fix task for invalid markup before expanding schema.
   Status (2026-07-30): rendered JSON-LD passed local syntax, expected-type, and absolute-URL validation for all four page types. See `docs/SCHEMA-REPORT.md`. One live Rich Results Test remains advisable after deployment.
4. **Confirm WhatsApp lead attribution end to end.** Per-page prefilled message text already exists in `src/data/servicePages.ts` (good — the receiving inbox can tell which page a lead came from). Decide whether to also fire an analytics event on WhatsApp CTA clicks; without it, the leads KPI is measured only by inbox counting.
   Status (2026-07-30): implemented a site-wide Vercel Analytics `whatsapp_click` event with page path, page title, and CTA label. Automated interaction coverage is in place. Confirm one production event in the Vercel dashboard after deployment.
   Failure check: a month passes and you can't say how many leads came from which page → attribution is not working.

## P1 — Local SEO & off-site authority (weeks 1–4; old Phase 5)

1. **Create/claim Google Business Profile** (service-area business for Belém/PA if no public address). Complete categories, services, description consistent with site copy.
   Leading indicator: profile appears for "criação de sites belém" branded/map searches; GBP insights show views.
2. **Standardize NAP** (name, phone `+55 91 98289-0565`, city, site URL) across GBP, LinkedIn, GitHub, Instagram, and any directory listing. Inconsistency here undermines the `ProfessionalService` entity data already in schema.
3. **Collect 3–5 client testimonials** and place them as visible content on service and case pages. Do **not** add self-serving `Review`/`AggregateRating` markup to the site's `ProfessionalService` entity: Google does not show review rich results for self-serving reviews of `LocalBusiness`/`Organization` types. Keep the testimonials visible as ordinary page content.
4. **Ask satisfied clients for GBP reviews** (the review signal that actually moves local rankings).
   Failure check for P1 overall: after 8 weeks, GSC shows no impressions for "criação de sites belém"-type queries → local relevance signals are not landing; revisit GBP category/content.

## P2 — Editorial cadence (2 articles/month, resume now)

Next two, both already mapped to keyword pillars in the archived roadmap and still unwritten:

1. "Como escolher um desenvolvedor web freelancer" (pillar: educação → conversion).
2. "Por que a performance do site afeta conversão" (pillar: blog/SEO; links naturally to cases with real numbers).

The existing 6 articles now link to at least one relevant individual case each (completed 2026-07-30). New articles must link to at least one service page and one case, use correct pt-BR with accents, and open with an answer-first block.
Leading indicator: new articles receive impressions in GSC within 2–3 weeks of publish; if older articles show queries with impressions but low CTR, retitle before writing new ones.

## P3 — GEO / AI search upkeep (ongoing, low effort)

- Keep `public/llms.txt` in sync when routes change.
- Keep entity data (name, service, city, phone) identical across schema, page copy, GBP, and external profiles.
- Case pages: add one concrete metric each as real numbers become available — specific figures are what AI answers cite.

## Housekeeping

- **Custom 404 page** — completed 2026-07-30 with branded navigation, recovery links, WhatsApp help, `noindex, follow`, and no canonical URL.
- Create `/sobre/` page (E-E-A-T: experience, method, stack, real social links). The article author card already references the `#person` schema entity; a real about page strengthens it. Medium priority — do after P1.
- Refresh the KPI table below with real baselines once GSC has ~4 weeks of data.

## KPIs (reset against current reality)

| Metric | Baseline (2026-07) | +3 months | +6 months |
| --- | --- | --- | --- |
| Routes indexed / total | to measure (of 21) | 21/21 | maintained |
| Organic impressions | to measure in GSC | establish trend | +100% vs. first month |
| Organic clicks | to measure in GSC | establish trend | +100% vs. first month |
| WhatsApp leads attributable to a page | to measure | 3–5/month | 8–12/month |
| GBP reviews | 0 | 3+ | 8+ |
| CWV (LCP / INP / CLS) | to measure | all "good" | maintained |

## Policy notes (apply to all future SEO work)

- **FAQPage schema**: Google retired FAQ rich results for all sites on 2026-05-07. Existing markup may remain while it accurately mirrors visible FAQ content, but it has no Google rich-result benefit. Do not claim a special AI/LLM citation benefit without evidence, add new markup expecting SERP features, or treat its absence as a critical fix.
- **Never add HowTo schema** (deprecated since Sept 2023).
- **Core Web Vitals** = LCP, INP, CLS. Never reference FID.
- No self-serving `Review`/`AggregateRating` markup on own pages (see P1.3).
