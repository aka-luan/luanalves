# Generated Repo Map

This file is manually generated for now. Update when route or folder structure changes.

## Root

- `AGENTS.md` - concise agent instructions.
- `ARCHITECTURE.md` - architecture overview.
- `astro.config.mjs` - Astro config and sitemap integration.
- `design.md` - canonical design rules.
- `package.json` - scripts and dependencies.
- `pnpm-lock.yaml` and `package-lock.json` - both exist; prefer `pnpm`.
- `scripts/` - build and SEO helper scripts.
- `src/` - application source.
- `public/` - static assets and public files.
- `docs/` - project documentation.

## Source

- `src/pages/` - Astro routes.
- `src/layouts/BaseLayout.astro` - shared HTML shell, metadata, schema, analytics, global assets, page-transition import.
- `src/components/` - reusable Astro components.
- `src/components/service/` - service-page component system.
- `src/data/site.ts` - navigation, services, portfolio, case details, home data.
- `src/data/servicePages.ts` - service-page content and schema helpers.
- `src/data/insights.ts` - insight article content and helpers.
- `src/scripts/` - browser behavior.
- `src/styles/global.css` - global tokens and styles.
- `src/styles/fonts.css` - local font-face declarations.

## Public

- `public/assets/` - production images, placeholders, social images, insight assets.
- `public/fonts/` - local Manrope, Newsreader, and Material Symbols fonts.
- `public/llms.txt` - AI/search summary.
- `public/robots.txt` - crawler directives.
- `public/favicon.svg` - favicon.

## Tests

- `src/scripts/project-modal.test.ts` - Vitest coverage for portfolio modal behavior.
- `vitest.config.ts` - Vitest configuration.

## Build Scripts

- `scripts/patch-build-assets.mjs` - post-build HTML asset URL rewrite.
- `scripts/seo-metadata.mjs` - sitemap lastmod source.
- `scripts/check-home-hero.js` - helper script present in repo; inspect before use.
