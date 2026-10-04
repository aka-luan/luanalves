# Architecture

## Purpose

This repository is an Astro 5 static marketing site for Luan Alves, a Brazilian freelance web developer. The site prioritizes fast pages, polished editorial presentation, technical SEO, and WhatsApp conversion.

## Runtime Shape

- Astro builds static routes from `src/pages/`.
- Shared HTML shell, metadata, schema, analytics, fonts, global CSS, and page-transition bootstrapping live in `src/layouts/BaseLayout.astro`.
- Reused content lives mainly in `src/data/site.ts`, `src/data/servicePages.ts`, and `src/data/insights.ts`.
- Presentational UI lives in `src/components/`.
- Browser behavior lives in `src/scripts/`.
- Production assets live in `public/assets/`; local fonts live in `public/fonts/`.

There is no backend service or database in this repository.

## Main Routes

- `/` - home page with services, selected portfolio, differentiators, and contact.
- `/criacao-de-sites/` - custom service page for site creation.
- `/site-institucional/`, `/landing-page/`, `/blog-profissional/`, `/criacao-de-sites-belem/` - service pages generated from `src/data/servicePages.ts` through `ServicePageTemplate.astro`.
- `/site-para-incorporadora/`, `/site-para-construtora/`, `/site-para-industria-de-madeira-engenheirada/` - vertical commercial pages generated from `src/data/verticalPages.ts` through `VerticalPageTemplate.astro`.
- `/portfolio/` - portfolio index.
- `/portfolio/[slug]/` - case study pages generated from `portfolioProjects` in `src/data/site.ts`.
- `/insights/` - editorial index.
- `/insights/[slug]/` - article pages generated from `publishedInsights` in `src/data/insights.ts`.

## Data Flow

`src/data/site.ts` owns navigation, service summaries, home portfolio cards, full portfolio case details, featured portfolio projects, and conversion reasons.

`src/data/servicePages.ts` owns service-page content, shared process blocks, shared FAQ blocks, WhatsApp links, breadcrumbs, FAQ schema, and service schema.

`src/data/verticalPages.ts` owns industry-specific commercial content, case selection, WhatsApp attribution, links between verticals, and `Service`/breadcrumb schema without `FAQPage` markup.

`src/data/insights.ts` owns editorial post metadata, article blocks, categories, filters, article paths, table-of-contents helpers, and hero image prompts.

Article isoDate/date describe original publication. Set updatedIsoDate only for a substantive editorial revision; the article displays it separately, BlogPosting uses it for dateModified and the sitemap uses it for lastmod. Do not refresh publication dates or mark untouched articles as updated during template changes.

src/data/projectScope.ts owns shared commercial conditions and optional extensions used by the service hub, services and segment FAQs.

Astro pages import these data modules, compose components, and pass page-specific metadata/schema to `BaseLayout.astro`.

## Layout And SEO

`BaseLayout.astro` provides:

- `<html lang="pt-BR">`.
- title, description, canonical, Open Graph, Twitter metadata.
- base JSON-LD graph for `Person`, `ProfessionalService`, and `WebSite`.
- page-level schema appended through the `schema` prop.
- local font CSS and global CSS.
- Vercel Analytics, Speed Insights, and the production-only GA4 Google tag.
- Barba page-transition script import.

`astro.config.mjs` configures `@astrojs/sitemap` and delegates `lastmod` values to `scripts/seo-metadata.mjs`.

`public/robots.txt` and `public/llms.txt` are static public files.

## Browser Scripts

- `src/scripts/page-transitions.ts` boots Barba, syncs selected head tags, and initializes or cleans page scripts.
- `src/scripts/landing-motion.ts` owns GSAP/ScrollTrigger landing motion with visible hero content and reveals below the viewport.
- `src/scripts/mobile-nav.ts` owns mobile navigation behavior.
- `src/scripts/project-modal.ts` owns home portfolio modal, gallery, video, lightbox, and focus/keyboard behavior.
- `src/scripts/portfolio-filters.ts` owns portfolio filtering UI.
- `src/scripts/insight-post.ts` owns article progress, table-of-contents state, share links, and article motion.

Motion code must respect `prefers-reduced-motion` and the existing `motion-enabled` class.

## Rendering And Measurement

Hero text, images, navigation, and CTAs render visibly from HTML. CSS must not hide content while waiting for the motion bundle. Landing and article motion may prime only content below the current viewport; preserve this on Barba initialization and reduced motion.

BaseLayout loads the optional GA4 Google tag asynchronously only on the production host, using the verified stream ID with an optional PUBLIC_GOOGLE_ANALYTICS_ID override (an empty value disables collection). Barba afterEnter sends the initial and subsequent page views after head syncing; do not add a second initial pageview. Disable enhanced-measurement history pageviews in GA4 when using this manual strategy. The persistent tag is not reinserted during navigation. WhatsApp tracking uses one delegated listener, sends readable labels and stable data-analytics-position values to GA4 and Vercel, and excludes phone numbers, message text, and destination URLs. See [the tracking and lead-funnel plan](docs/analytics.md) for account setup and validation.

Shared font preloads remain in the persistent head on all routes. Page-specific head additions must still be covered by syncHead.

## Responsive Hero Delivery

src/data/heroImages.ts generates responsive WebP variants from existing public assets. Keep sizes aligned with each template. The desktop-only home preload shares the image candidates and is replaced during Barba navigation.

Astro inlines route CSS to avoid blocking the text hero on a stylesheet request. Barba retains and deduplicates inline style elements alongside stylesheet links. The post-build patch must rewrite every srcset/imagesrcset candidate relative to its output HTML, including candidates after commas.

## Build Helpers

`pnpm run build` runs `astro build` and then `scripts/patch-build-assets.mjs`.

`scripts/patch-build-assets.mjs` rewrites built HTML references from root `_astro` URLs to relative `_astro` paths. Treat this as part of the production build contract.

`scripts/seo-metadata.mjs` maps static, portfolio, and insight routes to sitemap `lastmod` dates.

## Tests

Vitest is configured through `vitest.config.ts`. Tests cover the project modal, delegated WhatsApp events, GA4 page context, and landing/article motion visibility and cleanup.

Run `pnpm run build` after page, layout, content, or SEO changes. Run `pnpm run test` too when touching modal, keyboard, focus, timer, or DOM-state logic.

## Boundaries

- Keep visible copy in correct `pt-BR` with accents.
- Keep Astro components mostly presentational.
- Put browser behavior in `src/scripts/`.
- Use existing CSS custom properties and local fonts.
- Preserve SEO metadata, schema, accessible labels, focus states, and reduced-motion behavior.
- Do not add a database, API layer, CMS, remote fonts, or new analytics tooling without explicit review.

## Unclear Areas

- NEEDS_HUMAN_REVIEW: Real lead metrics, Search Console baselines, and conversion attribution are not present in the repo.
- NEEDS_HUMAN_REVIEW: External business profiles and local SEO facts must be verified outside this repository before being documented as facts.

Mobile header CSS must match the controller's initial compact state to avoid shifting on boot. The home heading has authored line breaks: use an em-based width that accommodates both Newsreader and the serif fallback, rather than a ch limit whose width changes during font swap. Keep the mobile eyebrow line-height explicit so the CTA position is stable while fonts load.
Keep the home heading and its child span at a stable block width during font swap; a shrink-to-fit inline-block can register CLS even when its line count and CTA position are stable.
