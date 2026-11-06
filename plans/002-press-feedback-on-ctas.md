# 002 — Add press feedback to the primary CTAs

- **Status**: DONE
- **Commit**: 60f493b (plus the uncommitted motion-removal working tree; see Boundaries)
- **Severity**: MEDIUM
- **Category**: Physicality & origin (press feedback)
- **Estimated scope**: 4 files, ~25 lines of CSS

## Problem

The site's main conversion buttons, including the home-hero WhatsApp CTA, don't react when pressed. Smaller controls on the same pages do (`.shared-button`, `.creation-button`, `.post-whatsapp`, and the filter buttons all scale to `0.96` on `:active`). So tapping the most important button feels dead next to minor ones.

Buttons with no `:active` state:

```css
/* src/styles/global.css:220-236 — current (.button is used 10× incl. home hero, HomeCta, 404) */
.button {
  display: inline-flex;
  /* … */
  transition:
    background-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease;
}
```

```css
/* src/components/vertical/VerticalPageTemplate.astro:474-489 — current */
  .vertical-button {
    /* … */
    transition:
      border-color 180ms ease,
      background 180ms ease,
      color 180ms ease;
  }
```

```css
/* src/pages/portfolio.astro:844-859 — current */
  .portfolio-cta > a {
    /* … */
    white-space: nowrap;
    transition: background-color 180ms ease;
  }
```

```css
/* src/components/SiteNav.astro:426-443 — current (inside @media (max-width: 767px)) */
    .mobile-menu-cta {
      /* … */
      transition:
        background-color 220ms ease,
        color 220ms ease,
        border-color 220ms ease;
    }
```

## Target

Press feedback: `transform: scale(0.96)` on `:active`, matching the repo's existing press scale, with the transform transitioning over `160ms cubic-bezier(0.23, 1, 0.32, 1)` (a strong ease-out). Press and release both use this transition, so the release snaps back quickly.

```css
/* target pattern, for each selector */
.button {
  transition:
    transform 160ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease;
}

.button:active {
  transform: scale(0.96);
}
```

## Repo conventions to follow

- Press feedback in this repo is always `transform: scale(0.96)` in a separate `:active` rule placed right after the element's hover rule. Exemplar: `src/styles/global.css:819-821`:
  ```css
  .shared-button:active {
    transform: scale(0.96);
  }
  ```
- Styles are scoped `<style>` blocks inside `.astro` files with 2-space indentation, plus `src/styles/global.css` for shared classes. Keep each rule in the file that owns the class.
- No motion tokens exist yet. Inline the curve exactly as `cubic-bezier(0.23, 1, 0.32, 1)`.

## Steps

1. `src/styles/global.css`, `.button` rule (around line 220): make `transform 160ms cubic-bezier(0.23, 1, 0.32, 1),` the first entry of the `transition` list and leave the other three entries unchanged. Then insert this new rule right after the `.button-ghost:hover, .button-outline:hover { … }` rule:
   ```css
   .button:active {
     transform: scale(0.96);
   }
   ```
2. `src/components/vertical/VerticalPageTemplate.astro`, `.vertical-button` rule (around line 474): make `transform 160ms cubic-bezier(0.23, 1, 0.32, 1),` the first entry of the `transition` list. Then insert this right after the `.vertical-button--solid:hover, .vertical-button--solid:focus-visible { … }` rule:
   ```css
     .vertical-button:active {
       transform: scale(0.96);
     }
   ```
   Leave the existing `@media (prefers-reduced-motion: reduce)` block (around line 1175) that sets `transition: none` on `.vertical-button` as it is.
3. `src/pages/portfolio.astro`, `.portfolio-cta > a` rule (around line 844): replace `transition: background-color 180ms ease;` with:
   ```css
       transition:
         transform 160ms cubic-bezier(0.23, 1, 0.32, 1),
         background-color 180ms ease;
   ```
   Then insert this right after the `.portfolio-cta > a:hover, .portfolio-cta > a:focus-visible { … }` rule:
   ```css
     .portfolio-cta > a:active {
       transform: scale(0.96);
     }
   ```
4. `src/components/SiteNav.astro`, `.mobile-menu-cta` rule (around line 426, inside `@media (max-width: 767px)`, 4-space indentation): make `transform 160ms cubic-bezier(0.23, 1, 0.32, 1),` the first entry of the `transition` list. Then insert this right after `.mobile-menu-cta:hover { … }`, still inside the same media query:
   ```css
       .mobile-menu-cta:active {
         transform: scale(0.96);
       }
   ```

## Boundaries

- Do NOT add hover transforms or lifts. They were removed on purpose; hovers change color and border only.
- Do NOT change buttons that already have `:active` (`.shared-button`, `.creation-button`, `.post-whatsapp`, `.post-share button`, `.insights-cta > a`, filter buttons, cards).
- Do NOT touch markup or scripts, and do NOT add dependencies.
- If any rule's current code doesn't match the excerpts above (drift beyond line numbers), STOP and report.

## Verification

- **Mechanical**: `pnpm run build` succeeds. `grep -n ":active" src/styles/global.css src/components/vertical/VerticalPageTemplate.astro src/pages/portfolio.astro src/components/SiteNav.astro` shows the 4 new rules.
- **Feel check**: run `pnpm run dev`, then press and hold each button, then release:
  - Home hero "Conversar sobre meu site" (`.button`), `/portfolio/` bottom CTA, a vertical page such as `/site-para-construtora/` (`.vertical-button`), and the mobile menu CTA at ≤ 767px width.
  - Each button shrinks slightly as soon as it's pressed, and snaps back fast on release.
  - With DevTools animations at 10%, the scale moves fastest at the start (ease-out), not evenly.
  - On a real phone, a quick tap shows the shrink.
  - Text inside doesn't blur or jitter during the scale.
- **Done when**: all four selectors have an `:active { transform: scale(0.96) }` rule and a `transform 160ms cubic-bezier(0.23, 1, 0.32, 1)` transition entry, and the build passes.
