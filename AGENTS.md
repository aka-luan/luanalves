# AGENTS.md

Guidance for coding agents working in this repository. Keep this file short and practical. Add notes only when they prevent real mistakes.

## Project Snapshot

- Astro 5 static marketing site for Luan Alves.
- Main language: Portuguese Brazil (`pt-BR`).
- Primary goal: fast, polished, SEO-friendly site with strong WhatsApp conversion.
- Current key routes include `/` and `/criacao-de-sites/`.

## Commands

Use `pnpm` unless the user explicitly asks otherwise.

- `pnpm install` — install dependencies.
- `pnpm run dev` — start local dev server.
- `pnpm run build` — build site and run the post-build asset patch.
- `pnpm run test` — run Vitest tests.
- `pnpm run preview` — preview built output.

Before finishing code changes, run the narrowest useful check:

- UI/page/content/layout change: `pnpm run build`.
- Modal, keyboard, focus, timer, or DOM-state logic: `pnpm run test` too.

## Repository Map

- `src/pages/` — Astro routes.
- `src/layouts/BaseLayout.astro` — shared HTML shell, metadata, schema, analytics, global assets.
- `src/components/` — reusable Astro components.
- `src/components/service/` — service-page components.
- `src/data/site.ts` — shared navigation, service, portfolio, FAQ, and page copy data.
- `src/scripts/` — browser behavior.
- `src/styles/global.css` — global tokens, layout classes, and component styles.
- `src/styles/fonts.css` — local font-face declarations.
- `public/assets/` — production images and social assets.
- `design.md` — visual, layout, copy, accessibility, motion, SEO, and UI QA source of truth.
- `docs/SEO-ROADMAP.md` — SEO strategy and planned content architecture.

## Editing Rules

- For visual, layout, page, copy, SEO, or component changes, read `design.md` first.
- Keep visible copy in correct `pt-BR` with accents.
- Do not trust PowerShell mojibake. If text appears like `ServiÃ§os`, verify actual file encoding before changing copy.
- Keep reused content in `src/data/site.ts` or another shared data file.
- Keep Astro components mostly presentational.
- Put browser behavior in `src/scripts/`.
- Do not add remote fonts. Fonts are local under `public/fonts/`.
- Use existing CSS custom properties before adding new tokens.
- Preserve accessibility attributes on dialogs, buttons, image alt text, nav controls, and focus states.
- Respect reduced motion when changing animation or motion logic.

## Known Surprises

- The repo has both `package-lock.json` and `pnpm-lock.yaml`; prefer `pnpm` and do not rewrite unrelated lockfiles.
- Some portfolio media paths may be placeholders. Check `public/assets/` before assuming an image or video exists.
- If you hit a project-specific trap that would slow down the next agent, add a short note here with the symptom and safe response.
