# Frontend Conventions

## Stack

- Astro 5.
- TypeScript for browser scripts and data modules.
- CSS in `src/styles/global.css` and `src/styles/fonts.css`.
- GSAP and ScrollTrigger for motion.
- Barba for page transitions.
- Vitest with jsdom for DOM behavior tests.

## Component Boundaries

- Pages in `src/pages/` compose data and components.
- Shared shell concerns stay in `src/layouts/BaseLayout.astro`.
- Reusable Astro components stay in `src/components/`.
- Service-page components stay in `src/components/service/`.
- Browser behavior stays in `src/scripts/`.
- Shared content belongs in `src/data/` when reused by more than one page/component.

## Metadata And Schema

Use `BaseLayout.astro` props for page metadata:

- `title`
- `description`
- `namespace`
- `canonicalPath`
- `ogType`
- `socialImage`
- `socialImageAlt`
- `schema`

Page-specific schema should be generated from data modules where possible, as `src/data/servicePages.ts` already does for service pages.

## Motion

- Respect `prefers-reduced-motion`.
- Use the existing `motion-enabled` class and local script patterns.
- Keep GSAP setup/cleanup colocated with script lifecycle functions.
- When adding Barba-aware behavior, update `src/scripts/page-transitions.ts` boot and cleanup paths.

## Accessibility

Preserve:

- Button semantics.
- `aria-label` text.
- Dialog close controls.
- Focus-visible states.
- Keyboard behavior.
- Meaningful image alt text in `pt-BR`.
- Breadcrumb labels and schema.

Run `pnpm run test` when touching modal, keyboard, focus, timer, or DOM-state logic.

## Assets

- Use files from `public/assets/` when possible.
- Verify images, posters, videos, and placeholders before referencing them.
- Do not add remote fonts or remote icon assets.

## Known Frontend Risks

- The build depends on `scripts/patch-build-assets.mjs` after `astro build`.
- Barba head syncing can regress SEO/social tags if new head tags are introduced without checking `src/scripts/page-transitions.ts`.
- Motion can break reduced-motion expectations if new animation code bypasses existing guards.
