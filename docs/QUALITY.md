# Quality

## Required Checks

Use `pnpm`.

- Page, content, layout, SEO, or asset-reference change: run `pnpm run build`.
- Modal, keyboard, focus, timer, or DOM-state logic change: run `pnpm run test` too.

## Current Automated Coverage

Vitest coverage currently exists for `src/scripts/project-modal.ts` in `src/scripts/project-modal.test.ts`.

The test checks modal open/close behavior, Escape handling, video setup, gallery navigation, lightbox state, and body class cleanup.

## Manual QA

For UI changes, check:

- Mobile and desktop layout.
- Long `pt-BR` headings and labels.
- CTA visibility and WhatsApp links.
- Image/video paths.
- Focus states and keyboard paths.
- Reduced-motion behavior.
- One H1 per page.
- Canonical, Open Graph, Twitter metadata, and JSON-LD schema.

## SEO QA

Check:

- `BaseLayout.astro` metadata props are set per page.
- Page schema is appropriate and does not duplicate invalid data.
- `scripts/seo-metadata.mjs` includes new static routes when needed.
- Sitemap builds after route changes.
- `public/llms.txt` stays aligned with important public pages.

## Testing Gaps

- NEEDS_HUMAN_REVIEW: No automated visual regression tests are configured.
- NEEDS_HUMAN_REVIEW: No Lighthouse/Core Web Vitals baseline is stored in the repo.
- NEEDS_HUMAN_REVIEW: Only modal behavior has direct unit coverage today.
