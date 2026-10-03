# AGENTS.md

Guidance for coding agents working in this repository. Add notes only when they prevent a concrete recurring mistake.

## Project

Astro static marketing site for Luan Alves. Priorities: performance, editorial presentation, technical SEO, and WhatsApp conversion.

## Read When Relevant

- UI, page, copy, SEO, or component work: read [design.md](design.md) first.
- Architecture, data flow, routes, or build workflow: read [ARCHITECTURE.md](ARCHITECTURE.md).
- Vertical-page work: read [the segment-page ADR](docs/adr/0001-paginas-verticais-para-segmentos.md).
- Planning or prioritization: read [docs/PLANS.md](docs/PLANS.md). Old task lists do not authorize unrelated work.

Read source and configuration for inventories and implementation status. Keep completed work in Git history.

## Commands And Checks

Use pnpm. Consult package.json for available scripts.

Before finishing code changes:

- UI/page/content/layout/SEO: run pnpm run build.
- Modal, keyboard, focus, timer, or DOM-state logic: also run pnpm run test.
- Documentation only: check references and git diff --check; a site build is unnecessary.

The build includes scripts/patch-build-assets.mjs. Treat its post-build patch as part of the production contract.
The repo has both package-lock.json and pnpm-lock.yaml; leave unrelated lockfiles alone.

## Editing Traps

- PowerShell may display UTF-8 as mojibake. Verify actual encoding before repairing apparently corrupted copy.
- Portfolio media paths may be placeholders. Check public/assets/ before referencing an image, video, or poster.
- Barba head syncing can silently drop SEO/social tags. New head elements must be covered by the selectors in src/scripts/page-transitions.ts.
- New page behavior must work on initial load and Barba navigation, with cleanup for listeners, timers, and animation state.

Update the existing owner document when changing architecture, product behavior, build workflow, or quality expectations. Keep docs focused on decisions and traps; avoid duplicating source inventories.

## Tools And Models

Use tools and models available in the current environment, choosing for task quality; never use Haiku.
