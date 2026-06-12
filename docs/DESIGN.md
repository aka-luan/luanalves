# Design Invariants

`design.md` at the repository root is the canonical design source of truth. This file is a short operational mirror for agents.

## Direction

- Dark premium editorial interface.
- Sharp, architectural layout; global radius intentionally stays `--radius: 0px`.
- Restrained gold accents through existing CSS custom properties.
- Manrope for body/UI and Newsreader for editorial display headings.
- Local Material Symbols icon font only.
- Real project/service imagery before decorative art.

## Do Not Change Casually

- Do not add remote fonts.
- Do not introduce a new palette or rounded component language without explicit redesign scope.
- Do not replace Material Symbols with another icon family without review.
- Do not let visual decoration outrank clarity, performance, or WhatsApp conversion.

## Copy

- Visible UI copy must be Portuguese Brazil (`pt-BR`) with correct accentuation.
- Verify encoding before editing copy if terminal output shows mojibake.
- Keep conversion copy direct and specific.

## QA

Before shipping visual/page work:

- Check mobile and desktop.
- Check long Portuguese labels for clipping or awkward wraps.
- Confirm asset paths exist.
- Preserve one clear H1 and logical headings.
- Run `pnpm run build`.
