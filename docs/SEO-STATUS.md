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
- FAQPage schema on service pages.

## Needs Human Review

- Search Console impressions, clicks, and rankings (no data in repo).
- Schema validation on representative pages (Rich Results Test).
- Lighthouse / Core Web Vitals baseline.
- Google Business Profile, local citations, external profiles.
- Privacy/analytics consent and legal requirements.

## Historical Roadmap

Full phased SEO plan preserved in `docs/SEO-ROADMAP-archived.md` for reference.
