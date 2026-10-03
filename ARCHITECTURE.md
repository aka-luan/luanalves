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

## Rendering And Measurement

Hero text, images, navigation, and CTAs render visibly from HTML. CSS must not hide content while waiting for the motion bundle. Landing and article motion may prime only content below the current viewport; preserve this on Barba initialization and reduced motion.

BaseLayout loads the optional GA4 Google tag asynchronously only on the production host, using the verified stream ID with an optional PUBLIC_GOOGLE_ANALYTICS_ID override (an empty value disables collection). Barba afterEnter sends the initial and subsequent page views after head syncing; do not add a second initial pageview. Disable enhanced-measurement history pageviews in GA4 when using this manual strategy. The persistent tag is not reinserted during navigation. WhatsApp tracking uses one delegated listener, sends readable labels and stable data-analytics-position values to GA4 and Vercel, and excludes phone numbers, message text, and destination URLs. See [the tracking and lead-funnel plan](docs/analytics.md) for account setup and validation.

Shared font preloads remain in the persistent head on all routes. Page-specific head additions must still be covered by syncHead.

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
