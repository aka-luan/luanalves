# Design Guidelines

This file is the design source of truth for new pages, layouts, and major UI sections in this Astro site. Read it before creating or changing page structure.

## Design Direction

- Build a dark premium editorial interface, not a generic SaaS template.
- Keep the site sharp and architectural. The global radius is intentionally `--radius: 0px`.
- Use restrained gold accents from the existing CSS custom properties in `src/styles/global.css`.
- Prefer the current surface system before adding new colors: `--background`, `--surface`, `--surface-elevated`, `--surface-soft`, `--surface-lowest`, and `--line`.
- Use Manrope for body/UI text and Newsreader for editorial display headings.
- Do not add remote font dependencies. Fonts must stay local under `public/fonts/`.
- Use Material Symbols for icons because the local icon font is already included.
- Keep visual emphasis focused on clarity, craft, performance, and WhatsApp conversion.

## Page And Layout Rules

- Start new pages from the existing Astro patterns in `src/pages/`, `src/components/`, and `src/components/service/`.
- Use `src/layouts/BaseLayout.astro` for shared HTML shell concerns: title, description, canonical URL, Open Graph, Twitter metadata, schema, analytics, and global assets.
- Keep reusable content in `src/data/site.ts` or another shared data file when multiple components/pages need it.
- Keep Astro components mostly presentational. Put browser behavior in `src/scripts/`.
- Preserve one clear H1 per page.
- Favor composed editorial sections, real project imagery, and strong conversion paths over decorative cards.
- Use existing section rhythm first: `.section`, `.container`, service components, portfolio components, and CTA patterns.
- Do not introduce a new palette, rounded component language, remote font, or icon family unless the user explicitly asks for a broader redesign.

## Copy And Language

- Visible UI copy must be Portuguese Brazil (`pt-BR`) with correct accentuation.
- Check long Portuguese words and CTA labels on mobile so they do not clip, overflow, or wrap awkwardly.
- Keep copy direct and conversion-aware. The site should guide visitors toward WhatsApp contact without feeling noisy.
- Preserve terms that already define the business: desenvolvimento web, criação de sites, site institucional, blog profissional, landing page, portfólio, orçamento, conversão, lançamento, suporte.
- Do not trust mojibake shown by PowerShell. If text appears corrupted in terminal output, verify the actual file encoding before changing copy.

## Assets And Media

- Use real images from `public/assets/` when possible.
- Verify every referenced image, video, poster, and placeholder path exists before shipping.
- Give images meaningful `alt` text in pt-BR.
- Keep social/OG image paths consistent with metadata in `BaseLayout.astro`.
- Avoid fake screenshots, purely decorative SVG art, and generic stock-like visuals when a real project or service image can communicate better.

## Motion And Interaction

- Respect reduced motion. Motion code must check `prefers-reduced-motion` or use the existing `motion-enabled` setup.
- Use motion to clarify hierarchy, page transitions, reveal timing, or user feedback. Avoid animation that only adds noise.
- Keep browser interaction logic in `src/scripts/`, especially navigation, page transitions, GSAP behavior, modals, and lightboxes.
- Preserve focus states, keyboard behavior, button semantics, dialog labels, and accessible close controls.
- Buttons and links need clear hover, focus-visible, and active states.

## SEO And Conversion

- New pages need page-specific title, description, canonical path, Open Graph/Twitter metadata, and appropriate schema through `BaseLayout.astro`.
- Keep one clear H1 and a logical heading hierarchy.
- Include internal links to relevant service pages, portfolio examples, and WhatsApp/contact where natural.
- Do not add `SearchAction` schema unless real site search exists.
- Read `docs/SEO-ROADMAP.md` before SEO-focused changes.
- Conversion priority is WhatsApp contact. CTAs should be visible, specific, and consistent with the page intent.

