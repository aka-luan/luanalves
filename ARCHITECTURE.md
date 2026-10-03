# Architecture

Static Astro marketing site for Luan Alves. No backend service or database is implemented here.

## Boundaries And Data Flow

- Routes in src/pages/ compose presentational components from src/components/.
- Reused content belongs in src/data/; browser behavior belongs in src/scripts/.
- src/layouts/BaseLayout.astro owns the shared HTML shell, metadata, schema, analytics, and global assets.
- Pages pass their metadata and schema to that layout instead of duplicating the shell.

Choose the data owner by content:

- src/data/site.ts: shared navigation, home content, and portfolio cases.
- src/data/servicePages.ts: service-page content and conversion/schema helpers.
- src/data/verticalPages.ts: segment-specific commercial content and case selection.
- src/data/insights.ts: editorial content, taxonomy, and article helpers.

Read the current types and exports before changing consumers. Discover routes from src/pages/ rather than maintaining a route list here.

## Browser Lifecycle

src/scripts/page-transitions.ts coordinates Barba navigation, page-script initialization/cleanup, and selected head-tag syncing.

Page behavior must initialize on both direct load and navigation. Register cleanup alongside initialization so navigation does not retain old listeners, timers, DOM references, or GSAP/ScrollTrigger state. The current boot and cleanup functions are the integration points.

Head changes must also survive Barba navigation: inspect the replacement and persistent-node selectors in syncHead before introducing metadata, structured data, or asset tags.

## Build Contract

package.json defines the commands. The production build runs Astro and then scripts/patch-build-assets.mjs.

The patch rewrites root /_astro/ HTML asset references to paths relative to each generated HTML file. Preserve this behavior when changing output or deployment workflows; running astro build alone does not produce the project's final artifact.

astro.config.mjs and scripts/seo-metadata.mjs own sitemap generation and lastmod mapping. Inspect them when changing routes or publication dates.

Production media and local fonts live under public/. Global visual tokens and font declarations live in src/styles/.

## Related Decisions

Visual and copy conventions: [design.md](design.md).
Commercial vertical architecture: [segment-page ADR](docs/adr/0001-paginas-verticais-para-segmentos.md).
Deliberate pending validation: [docs/PLANS.md](docs/PLANS.md).

Implementation state belongs in source/configuration; this document records boundaries and integration risks.
