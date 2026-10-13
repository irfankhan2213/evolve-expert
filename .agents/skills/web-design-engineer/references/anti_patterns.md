# Contextual Anti-Patterns Checklist

Before approving any UI deliverable, verify none of these anti-patterns are present:

1. ❌ **The "Generic AI Template" Syndrome**:
   - Centered headline + generic purple gradient ball in the background + 3 identical cards below.
   - *Fix*: Asymmetric layout, real product preview, interactive playground.

2. ❌ **Unresponsive Data Tables**:
   - Wide financial tables overflowing horizontal viewports on mobile without overflow-x wrappers.
   - *Fix*: Wrap in `overflow-x-auto rounded-xl border border-zinc-800`.

3. ❌ **Muted Low-Contrast Text**:
   - Gray text (`#71717a`) on dark gray backgrounds (`#18181b`) failing WCAG AA (4.5:1 ratio).
   - *Fix*: Use `text-zinc-300` or `text-zinc-200` for readable body content.

4. ❌ **Disembodied Button States**:
   - Buttons without hover/active states or disabled spinner feedback during async actions.
   - *Fix*: Always add `hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50`.
