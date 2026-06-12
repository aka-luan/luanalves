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
- `/portfolio/` - portfolio index.
- `/portfolio/[slug]/` - case study pages generated from `portfolioProjects` in `src/data/site.ts`.
- `/insights/` - editorial index.
- `/insights/[slug]/` - article pages generated from `publishedInsights` in `src/data/insights.ts`.

## Data Flow

`src/data/site.ts` owns navigation, service summaries, home portfolio cards, full portfolio case details, featured portfolio projects, and conversion reasons.

`src/data/servicePages.ts` owns service-page content, shared process blocks, shared FAQ blocks, WhatsApp links, breadcrumbs, FAQ schema, and service schema.

`src/data/insights.ts` owns editorial post metadata, article blocks, categories, filters, article paths, table-of-contents helpers, and hero image prompts.

Astro pages import these data modules, compose components, and pass page-specific metadata/schema to `BaseLayout.astro`.

## Layout And SEO

`BaseLayout.astro` provides:

- `<html lang="pt-BR">`.
- title, description, canonical, Open Graph, Twitter metadata.
- base JSON-LD graph for `Person`, `ProfessionalService`, and `WebSite`.
- page-level schema appended through the `schema` prop.
- local font CSS and global CSS.
- Vercel Analytics and Speed Insights.
- Barba page-transition script import.

`astro.config.mjs` configures `@astrojs/sitemap` and delegates `lastmod` values to `scripts/seo-metadata.mjs`.

`public/robots.txt` and `public/llms.txt` are static public files.

## Browser Scripts

- `src/scripts/page-transitions.ts` boots Barba, syncs selected head tags, and initializes or cleans page scripts.
- `src/scripts/landing-motion.ts` owns GSAP/ScrollTrigger home motion and the session-scoped loader.
- `src/scripts/mobile-nav.ts` owns mobile navigation behavior.
- `src/scripts/project-modal.ts` owns home portfolio modal, gallery, video, lightbox, and focus/keyboard behavior.
- `src/scripts/portfolio-filters.ts` owns portfolio filtering UI.
- `src/scripts/insight-post.ts` owns article progress, table-of-contents state, share links, and article motion.

Motion code must respect `prefers-reduced-motion` and the existing `motion-enabled` class.

## Build Helpers

`pnpm run build` runs `astro build` and then `scripts/patch-build-assets.mjs`.

`scripts/patch-build-assets.mjs` rewrites built HTML references from root `_astro` URLs to relative `_astro` paths. Treat this as part of the production build contract.

`scripts/seo-metadata.mjs` maps static, portfolio, and insight routes to sitemap `lastmod` dates.

## Tests

Vitest is configured through `vitest.config.ts`. Current test coverage focuses on `src/scripts/project-modal.ts` behavior in `src/scripts/project-modal.test.ts`.

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
