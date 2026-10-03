# Typography

- Consider text-wrap: balance for short headings and pretty for prose when wrapping is visibly awkward. Check the result at narrow widths; keep code and preformatted text intact.
- Check italic display text and accented Portuguese characters for clipping. Adjust line height or the containing box based on the actual font.
- Use font-variant-numeric: tabular-nums for changing counters/timers or aligned numeric columns when proportional numerals cause movement. Verify the local font's numeral appearance.
- Inspect existing global font-smoothing rules before adjusting rendering. Compare on the affected platform; do not impose thinner text everywhere to fix one component.
