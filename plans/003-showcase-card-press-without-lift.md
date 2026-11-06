# 003 — Remove the leftover lift from the showcase card press

- **Status**: DONE
- **Commit**: 60f493b (plus the uncommitted motion-removal working tree; see Boundaries)
- **Severity**: LOW
- **Category**: Physicality & origin
- **Estimated scope**: 1 file, 1 line

## Problem

The hover lift on `.portfolio-showcase__card` was removed, but its `:active` rule still includes the lift's offset. Pressing a card now makes it jump up 0.15rem while shrinking, instead of pressing down into place. That reads as a glitch, and it's the only card in the site that moves on press.

```css
/* src/components/PortfolioShowcase.astro:235-237 — current */
  .portfolio-showcase__card:active {
    transform: translateY(-0.15rem) scale(0.96);
  }
```

## Target

```css
/* target */
  .portfolio-showcase__card:active {
    transform: scale(0.96);
  }
```

## Repo conventions to follow

- Card press feedback is scale only, with no translate. Exemplar: `src/pages/portfolio.astro:655-657`:
  ```css
  .portfolio-card:active {
    transform: scale(0.96);
  }
  ```

## Steps

1. In `src/components/PortfolioShowcase.astro`, change `transform: translateY(-0.15rem) scale(0.96);` to `transform: scale(0.96);` inside `.portfolio-showcase__card:active`.

## Boundaries

- Do NOT change the card's `transition` (`border-color 220ms ease, transform 220ms ease`) or any hover rule.
- Do NOT touch other files.
- If the excerpt doesn't match, STOP and report.

## Verification

- **Mechanical**: `grep -n "translateY(-0.15rem)" src/components/PortfolioShowcase.astro` returns nothing, and `pnpm run build` succeeds.
- **Feel check**: run `pnpm run dev` and open a page that renders the showcase, such as `/criacao-de-sites/` or a service page (grep for `PortfolioShowcase` to confirm which). Press and hold a project card:
  - The card shrinks in place, and its top edge doesn't move upward.
  - Releasing returns it smoothly with no vertical bounce.
- **Done when**: the `:active` transform is `scale(0.96)` only and the build passes.
