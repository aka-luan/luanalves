# Animation plans

Written by `improve-animations` against commit `60f493b` plus the uncommitted motion-removal working tree. Execute after that work is committed.

| # | Plan | Severity | Status |
| --- | --- | --- | --- |
| 001 | [Replace the ease-in on the mobile menu close](001-mobile-menu-close-ease-out.md) | HIGH | DONE |
| 002 | [Add press feedback to the primary CTAs](002-press-feedback-on-ctas.md) | MEDIUM | DONE |
| 003 | [Remove the leftover lift from the showcase card press](003-showcase-card-press-without-lift.md) | LOW | DONE |

## Execution order

001 → 003 → 002. The plans touch different rules and don't depend on each other. 001 and 003 are one-line changes; 002 touches four files.

## Not planned (audit findings left open)

- Modal Escape close and gallery autoplay: dropped; the unused project modal was deleted instead.
- Mobile menu `height` animation → `clip-path`; header compaction animating layout properties; the reduced-motion override removing color fades; hover nudges not limited to hover-capable devices; Barba fade-out using `power2.inOut`; no motion tokens.
