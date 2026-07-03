# AGENTS.md

Guidance for coding agents working in this repository. Keep this file short and practical. Add notes only when they prevent real mistakes.

## Project Snapshot

- Astro 5 static marketing site for Luan Alves.
- Main language: Portuguese Brazil (`pt-BR`).
- Primary goal: fast, polished, SEO-friendly site with strong WhatsApp conversion.
- Current key routes include `/`, `/criacao-de-sites/`, service pages, `/portfolio/`, portfolio cases, `/insights/`, and insight articles.

## Start Here

- `ARCHITECTURE.md` - system shape, route map, data flow, scripts, and build helpers.
- `design.md` - visual, layout, copy, accessibility, motion, and SEO source of truth. Read before UI/page/copy work.
- `docs/SEO-STATUS.md` - what SEO work is done vs. what needs human review.
- `docs/PLANS.md` - active/backlog items.

## Commands

Use `pnpm` unless the user explicitly asks otherwise.

- `pnpm install` - install dependencies.
- `pnpm run dev` - start local dev server.
- `pnpm run build` - build site and run the post-build asset patch.
- `pnpm run test` - run Vitest tests.
- `pnpm run preview` - preview built output.

Before finishing code changes, run the narrowest useful check:

- UI/page/content/layout/SEO change: `pnpm run build`.
- Modal, keyboard, focus, timer, or DOM-state logic: `pnpm run test` too.

## Repository Map

- `src/pages/` - Astro routes.
- `src/layouts/BaseLayout.astro` - shared HTML shell, metadata, schema, analytics, global assets.
- `src/components/` - reusable Astro components.
- `src/components/service/` - service-page components.
- `src/data/site.ts` - navigation, service summaries, portfolio, case, and home data.
- `src/data/servicePages.ts` - service-page content, WhatsApp links, breadcrumbs, and schema helpers.
- `src/data/insights.ts` - insight article content, filters, paths, and helpers.
- `src/scripts/` - browser behavior.
- `src/styles/global.css` - global tokens, layout classes, and component styles.
- `src/styles/fonts.css` - local font-face declarations.
- `public/assets/` - production images and social assets.
- `scripts/` - build and SEO helper scripts.
- `docs/` - durable project documentation.

## Editing Rules

- For visual, layout, page, copy, SEO, or component changes, read `design.md` first.
- Keep visible copy in correct `pt-BR` with accents.
- Do not trust PowerShell mojibake. If text appears like `ServiÃ§os`, verify actual file encoding before changing copy.
- Keep reused content in `src/data/site.ts`, `src/data/servicePages.ts`, `src/data/insights.ts`, or another shared data file.
- Keep Astro components mostly presentational.
- Put browser behavior in `src/scripts/`.
- Do not add remote fonts. Fonts are local under `public/fonts/`.
- Use existing CSS custom properties before adding new tokens.
- Preserve accessibility attributes on dialogs, buttons, image alt text, nav controls, and focus states.
- Respect reduced motion when changing animation or motion logic.
- Update docs when changing architecture, routes, build workflow, product behavior, or quality expectations.

## Known Surprises

- The repo has both `package-lock.json` and `pnpm-lock.yaml`; prefer `pnpm` and do not rewrite unrelated lockfiles.
- Some portfolio media paths may be placeholders. Check `public/assets/` before assuming an image or video exists.
- `pnpm run build` includes `scripts/patch-build-assets.mjs`; treat the post-build patch as part of the build contract.
- Barba head syncing can silently drop SEO/social tags if new `<head>` elements aren't covered by the selectors in `src/scripts/page-transitions.ts`. Update boot and cleanup paths there when adding Barba-aware behavior.
- If you hit a project-specific trap that would slow down the next agent, add a short note here or in the relevant `docs/` file.

## Picking the right models for workflows and subagents

Rankings, higher = better. Cost reflects what I actually pay (OpenAI has really generous limits), not list price. Intelligence is how hard a problem you can hand the model unsupervised. Taste covers UI/UX, code quality, API design, and copy.

| model    | cost | intelligence | taste |
| -------- | ---- | ------------ | ----- |
| gpt-5.5  | 9    | 8            | 5     |
| sonnet-5 | 5    | 5            | 7     |
| opus-4.8 | 4    | 7            | 8     |
| fable-5  | 2    | 9            | 9     |

How to apply:

- These are defaults, not limits. You have standing permission to override them: if a cheaper model's output doesn't meet the bar, rerun or redo the work with a smarter model without asking. Judge the output, not the price tag. Escalating costs less than shipping mediocre work.
- Cost is a tie-breaker only; when axes conflict for anything that ships, intelligence > taste > cost.
- Bulk/mechanical work (clear-spec implementation, data analysis, migrations): gpt-5.5 — it's effectively free.
- Anything user-facing (UI, copy, API design) needs taste ≥ 7.
- Reviews of plans/implementations: fable-5 or opus-4.8, optionally gpt-5.5 as an extra independent perspective.
- Never use Haiku.
- Mechanics: gpt-5.5 is only reachable through the Codex CLI — `codex exec` / `codex review` (my ~/.codex/config.toml defaults to gpt-5.5). Use the codex-implementation, codex-review, and codex-computer-use skills; for work they don't cover (investigation, data analysis), run `codex exec -s read-only` directly with a self-contained prompt.
- Claude models (sonnet-5, opus-4.8, fable-5) run via the Agent/Workflow model parameter.

Using gpt-5.5 inside workflows and subagents (the model parameter only takes Claude models, so use a wrapper):

- Spawn a thin Claude wrapper agent with `model: 'sonnet', effort: 'low'` whose prompt instructs it to write a self-contained codex prompt, run `codex exec` via Bash, and return codex's output verbatim (no summarizing or editorializing).
