# Design Guidelines

Source of truth for visual, page, copy, and SEO work on this site.

## Direction And Layout

- Dark premium editorial presentation with sharp architectural geometry; --radius: 0px is intentional.
- Use warm charcoal surfaces, restrained gold accents, and the shared tokens in src/styles/global.css. Keep surfaces flat and project imagery clear; avoid stacked glows and decorative grids.
- Newsreader display type uses weight 400 with comfortable line spacing. Body copy uses Manrope at weight 400 or above. Buttons and navigation use sentence case with normal letter spacing; reserve tracked uppercase for short section labels.
- Keep the mobile header against the top edge so scrolled content cannot show above it. Use overflow-x: clip on article wrappers to preserve the sticky table of contents.
- Page heroes share the `data-motion='hero'` hook so the header starts with the full brand and compacts on scroll. Keep header colors in the shared component instead of page overrides.
- Use consistent desktop containers and at least 1.25rem mobile gutters. Keep mobile proof points compact so the primary action and introduction stay easy to scan.
- Manrope for body/UI and Newsreader for editorial display headings. Keep fonts local under public/fonts/ and use the existing Material Symbols icon font.
- Compose sections around their content, real project imagery, and clear WhatsApp conversion paths.
- Preserve this palette, geometry, type, and icon language unless the requested redesign changes them.

## Copy And Commercial Scope

Visible copy is direct pt-BR with correct accents. CTAs should describe the page's intent and lead naturally to WhatsApp contact.

Keep these market distinctions explicit:

- Incorporadora: structures and commercializes real-estate developments; emphasize brand, launches, and interested-buyer capture.
- Construtora: executes construction work; emphasize technical capacity, delivery history, and served segments.
- Empresa de madeira engenheirada: designs, manufactures, or assembles CLT, MLC, or other mass-timber systems; avoid reducing it to a generic madeireira.

Commercial conditions confirmed by the owner on 2026-10-03: scope, supplied/produced materials, approval stages, revision rounds, schedule, update method and post-publication support are defined in the proposal. Domain, hosting and external-tool recurring costs are separate from development. Do not promise a 24-hour reply, fixed revision count or unlimited support. Shared buyer-facing conditions live in src/data/projectScope.ts; keep included sections and FAQs consistent with them.

## Assets And Media

## Media

Prefer real project/service assets in public/assets/. Avoid invented screenshots, generic stock-like visuals, or decorative art when real work communicates better.
Use meaningful pt-BR alt text and consistent social-preview assets.

## Interaction And Accessibility

- Check Portuguese headings and CTA labels at mobile widths for clipping and awkward wrapping.
- Preserve readable contrast, keyboard operation, focus-visible states, button semantics, dialog labels, and accessible close controls.
- Hover, focus, and active states must communicate the same action.
- Motion should clarify hierarchy, transitions, or feedback. Respect prefers-reduced-motion and the existing motion-enabled setup.
- Motion budget: no scroll reveals, parallax, or hover lifts and zooms. Hover changes color, border, or filter over `var(--duration-hover) ease`; small arrow nudges sit behind `@media (hover: hover) and (pointer: fine)` with a matching `:focus-visible` rule. Press feedback is `scale(0.96)` over `var(--duration-press) var(--ease-out)`. Interface motion stays at or under 250ms; The Barba fade uses WAAPI with the `--ease-out` curve; GSAP tweens use `power2.out`/`power3.out` for enter and exit, `power2.inOut`/`power3.inOut` only for on-screen morphs.
- Reduced motion drops movement globally but keeps color and opacity transitions; don't add per-component `transition: none` overrides.

## SEO And Conversion

- Use one clear H1 and a logical heading hierarchy.
- Provide page-specific title, description, canonical, social metadata, and appropriate schema through BaseLayout.astro.
- Add relevant service, case, and contact links where they help the visitor.
- Add SearchAction only if real site search exists.
- Schema must reflect visible content. Check current search documentation before promising eligibility or benefits from a schema type.
- WhatsApp is the primary conversion path; keep CTAs specific, visible, and consistent with the page intent.
