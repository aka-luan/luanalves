# 001 — Replace the ease-in on the mobile menu close

- **Status**: DONE
- **Commit**: 60f493b (plus the uncommitted motion-removal working tree; see Boundaries)
- **Severity**: HIGH
- **Category**: Easing & duration
- **Estimated scope**: 1 file, 1 line

## Problem

Closing the mobile menu fades its content out with `power2.in`. That's GSAP's ease-in: it starts slowly, so the first frames after the tap barely move and the close feels laggy, right at the moment the user is watching.

```ts
// src/scripts/mobile-nav.ts:189-196 — current
    menuTween
      .to(mobileMenuContent, {
        autoAlpha: 0,
        y: 18,
        duration: 0.16,
        ease: 'power2.in',
      })
```

## Target

An exit uses ease-out. In GSAP, `power2.out` is the matching curve, and the open tween in this same file already uses it for the content.

```ts
// target
    menuTween
      .to(mobileMenuContent, {
        autoAlpha: 0,
        y: 18,
        duration: 0.16,
        ease: 'power2.out',
      })
```

## Repo conventions to follow

- GSAP named eases are used throughout; there are no custom cubic-bezier tokens. Keep using named GSAP eases.
- Exemplar: the open tween in the same file, `src/scripts/mobile-nav.ts:161-168`, animates the same element with `ease: 'power2.out'`.

## Steps

1. In `src/scripts/mobile-nav.ts`, inside the close branch of `animateMenu` (the `menuTween` timeline built after `syncToggle(false)`), change `ease: 'power2.in',` to `ease: 'power2.out',`. That's the only occurrence of `'power2.in'` in the file.

## Boundaries

- Do NOT change durations, the `y: 18` offset, the `power3.inOut` timeline defaults, or the height tween.
- Do NOT touch any other file.
- The commit stamp predates an uncommitted working tree. If line numbers differ but the excerpt above matches, proceed. If the excerpt doesn't match, STOP and report.

## Verification

- **Mechanical**: `grep -n "power2.in'" src/scripts/mobile-nav.ts` returns nothing. `pnpm run test` passes (mobile-nav.test.ts included). `pnpm run build` succeeds.
- **Feel check**: run `pnpm run dev`, open the site at a width ≤ 960px, open the menu, then close it:
  - The menu links start fading the instant you tap; there's no pause before they start moving.
  - In DevTools, slow animations to 10% (Animations panel) and confirm the content's opacity drops fastest at the start of the close, not at the end.
- **Done when**: the close tween uses `power2.out` and tests and the build pass.
