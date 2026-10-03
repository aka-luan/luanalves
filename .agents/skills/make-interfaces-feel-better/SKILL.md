---
name: make-interfaces-feel-better
description: Polish UI typography, alignment, control states, animation, or rendering performance on the Luan Alves Astro site.
---

# Interface Polish

Read design.md and inspect the affected component before selecting a change. Preserve the project's visual language and use existing CSS/GSAP behavior.

Load only the reference relevant to the problem:
- [Typography](typography.md): wrapping, clipped text, unstable numerals, font rendering.
- [Surfaces](surfaces.md): optical alignment, image edges, depth, control hit areas.
- [Animations](animations.md): interrupted state changes, entrances/exits, icon swaps.
- [Performance](performance.md): unintended transitions, animation stutter, layer costs.

Apply the smallest change that resolves the observed problem. Verify the affected viewport and interaction states, including rapid repeated input when motion changes. Follow AGENTS.md for checks.

Completion: the observed issue is resolved without regressing keyboard operation, focus visibility, or navigation behavior.
