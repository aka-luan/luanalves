# Reliability

## Current Reliability Model

This is a static Astro site. Reliability mostly depends on:

- Successful static builds.
- Valid route generation.
- Correct asset paths.
- Stable public metadata and schema.
- Browser scripts that initialize and clean up correctly across Barba transitions.

## Build Risks

`pnpm run build` runs:

1. `astro build`
2. `node scripts/patch-build-assets.mjs`

The asset patch rewrites built HTML asset URLs. If this script fails or is removed, production HTML may reference assets differently than expected.

## Route Risks

- Portfolio case routes depend on `portfolioProjects` from `src/data/site.ts`.
- Insight article routes depend on `publishedInsights` from `src/data/insights.ts`.
- Service template pages depend on keys in `servicePages` from `src/data/servicePages.ts`.
- New static routes should be added to `scripts/seo-metadata.mjs` when sitemap `lastmod` needs explicit control.

## Asset Risks

Some media paths may be placeholders. Verify every referenced image, poster, video, and gallery file exists under `public/assets/` before shipping.

## Client-Side Risks

- Barba transitions require script cleanup and reinitialization.
- Head syncing in `src/scripts/page-transitions.ts` can miss new SEO/social tags if selectors are not kept aligned.
- GSAP and ScrollTrigger must respect reduced motion and refresh after page transitions.
- Modal/lightbox behavior needs keyboard and focus checks.

## Recovery Checklist

When a production page breaks:

- Run `pnpm run build`.
- Check generated route exists in `dist/`.
- Check asset path in built HTML.
- Check browser console on affected route.
- Check Barba namespace and script boot path.
- Check whether `prefers-reduced-motion` changes behavior.

## Needs Review

- NEEDS_HUMAN_REVIEW: Hosting/deployment provider settings are not documented in this repo.
- NEEDS_HUMAN_REVIEW: No uptime, error, or analytics alerting policy is documented here.
