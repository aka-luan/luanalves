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
- Done outside the plans: hover nudges gated to hover-capable devices, reduced motion keeps color and opacity feedback, Barba fade-out uses `power2.out`, header blur swaps instead of animating, motion tokens (`--ease-out`, `--duration-hover`, `--duration-press`).
- Closed without change: the mobile menu `height` tween. `.site-nav` is `position: fixed`, so the tween re-lays out only the nav subtree, about once per visit; a `clip-path` reveal would clip the panel's border and shadow while it opens. The header width/padding tween stays for the same reason.
