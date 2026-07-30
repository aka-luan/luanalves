# SEO Status

## Implemented

- Per-page metadata via `BaseLayout.astro` props (title, description, canonical, OG, Twitter).
- JSON-LD schema: `Person`, `ProfessionalService`, `WebSite` base + page-level schema for services, cases, and articles.
- `@astrojs/sitemap`, `public/robots.txt`, `public/llms.txt`.
- Sitemap `lastmod` helper in `scripts/seo-metadata.mjs`.
- Commercial pages: `/criacao-de-sites/`, `/site-institucional/`, `/landing-page/`, `/blog-profissional/`, `/criacao-de-sites-belem/`.
- Portfolio index + case pages (`/portfolio/[slug]/`).
- Editorial index + articles (`/insights/[slug]/`).
- Breadcrumbs and `BreadcrumbList` schema on internal pages.
- FAQPage schema on service pages. Google retired FAQ rich results for all sites on 2026-05-07; existing markup may remain while it mirrors visible FAQ content, but it has no Google rich-result benefit or proven special AI/LLM citation value.
- Per-page prefilled WhatsApp messages in `src/data/servicePages.ts` (enables page-level lead attribution at the inbox).

## Needs Human Review

- Search Console verification, sitemap submission, impressions/clicks data (no data in repo).
- Schema validation on representative pages (Rich Results Test).
- Lighthouse / Core Web Vitals baseline (LCP / INP / CLS).
- Google Business Profile, local citations, external profiles.
- Privacy/analytics consent and legal requirements.

## Known Gaps

- No `src/pages/404.astro`.
- No `/sobre/` page (E-E-A-T).
- Editorial cadence stalled at 6 articles.

## Roadmaps

- Current plan: `docs/SEO-ROADMAP.md` (prioritized, updated 2026-07-30).
- Historical phased plan: `docs/SEO-ROADMAP-archived.md` (implementation work from phases 1–4 shipped; outstanding validation moved to the current plan).
