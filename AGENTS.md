# AGENTS.md

Guidance for agents working in this repository. Keep this file practical: add notes only when they prevent real mistakes.

## Project Snapshot

- Astro 5 static site for Luan Alves, a Brazilian freelance web developer.
- Main language: Portuguese Brazil (`pt-BR`). Visible UI copy must use correct accentuation.
- Main routes today: `/` and `/criacao-de-sites/`.
- Primary goal: fast, polished, SEO-friendly marketing site with strong WhatsApp conversion.
- Visual style: dark premium editorial UI, sharp edges, local fonts, restrained gold accents.

## Commands

Use `pnpm` unless the user specifically asks for `npm`.

- `pnpm install` - install dependencies.
- `pnpm run dev` - start Astro dev server.
- `pnpm run build` - build site, then run `scripts/patch-build-assets.mjs`.
- `pnpm run test` - run Vitest tests.
- `pnpm run preview` - preview built output.

Before finishing code changes, run the narrowest useful check. For UI/page changes, prefer `pnpm run build`; for modal or script logic, run `pnpm run test` too.

## Repository Map

- `src/pages/` - Astro routes.
- `src/layouts/BaseLayout.astro` - shared HTML shell, global metadata, analytics, schema.
- `src/components/` - reusable Astro components.
- `src/data/site.ts` - shared navigation, service, portfolio, FAQ, and page copy data.
- `src/scripts/landing-motion.ts` - GSAP page motion and nav behavior.
- `src/scripts/project-modal.ts` - portfolio modal/lightbox behavior.
- `src/styles/global.css` - main design system and component styles.
- `src/styles/fonts.css` - local font-face declarations.
- `public/assets/` - production images and social assets.
- `design.md` - design source of truth for new pages, layouts, visual direction, and UI verification.
- `docs/SEO-ROADMAP.md` - SEO strategy and planned content architecture.
- `scripts/patch-build-assets.mjs` - post-build asset patching.

## Editing Rules

- Preserve correct `pt-BR` spelling and accents in all visible copy. Examples: `Serviços`, `Criação`, `Portfólio`, `orçamento`, `conversão`, `lançamento`.
- Before creating or changing any page or layout, read `design.md` and follow its visual, copy, accessibility, motion, SEO, and verification checklist.
- Do not trust mojibake shown by PowerShell alone. If text appears like `ServiÃ§os`, verify the actual file encoding before changing copy.
- Keep content data centralized in `src/data/site.ts` when it is reused by multiple components.
- Avoid duplicating SEO metadata. Prefer improving `BaseLayout.astro` or a shared SEO abstraction when metadata grows.
- Keep Astro components mostly presentational; put browser behavior in `src/scripts/`.
- Respect reduced motion. Motion code must check `prefers-reduced-motion` or use the existing motion setup.
- Preserve accessibility attributes on dialogs, buttons, image alt text, and nav controls.
- Do not add remote font dependencies. Fonts are served from `public/fonts/`.

## UI And Design Notes

- Treat `design.md` as the source of truth for visual direction, page composition, page/layout guardrails, and design QA.
- Match the existing premium/dark visual direction instead of introducing a new palette.
- Use the existing CSS custom properties in `src/styles/global.css` before adding new colors.
- Current UI intentionally uses sharp corners: `--radius: 0px`.
- Use Material Symbols for icons; local font files are already included.
- For responsive work, verify both mobile and desktop layouts. Watch for clipped PT-BR text, especially long words and CTA labels.
- After significant frontend changes, open the local site in the browser and inspect the affected route.

## SEO Notes

- Read `docs/SEO-ROADMAP.md` before SEO changes.
- Known SEO priorities:
  - page-specific title, description, canonical, Open Graph, and Twitter metadata;
  - consistent social image asset extension;
  - `robots.txt` and `sitemap.xml`;
  - valid schema per page type;
  - one clear H1 per page;
  - service and case pages with internal links to WhatsApp/contact.
- Do not add `SearchAction` schema unless site search exists.

## Testing Notes

- Existing Vitest coverage focuses on `src/scripts/project-modal.ts`.
- Add or update tests when changing modal/lightbox behavior, keyboard handling, focus behavior, timers, or DOM state.
- Animation-only changes may be better verified through build plus browser inspection.

## Known Surprises

- PowerShell output can show PT-BR copy as mojibake even when the intended source text is UTF-8. Preserve correct Portuguese in source files and verify encoding-sensitive edits carefully.
- The repo currently has both `package-lock.json` and `pnpm-lock.yaml`. Prefer `pnpm`; do not rewrite lockfiles unrelated to the task.
- Some portfolio media paths are placeholders. Do not assume every referenced video/image exists without checking `public/assets/`.

## When You Learn Something

If you hit a project-specific trap that would slow down the next agent, add a short note under `Known Surprises` with the exact symptom and the safe response.
