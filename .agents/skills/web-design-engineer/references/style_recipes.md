# Style Recipes & Design Tokens

## Recipe 1: Linear Dark Precision (FinTech & DevTools Default)
- **Background**: `#09090b` (`bg-zinc-950`)
- **Card Surface**: `#18181b` (`bg-zinc-900`) with subtle border `#27272a` (`border-zinc-800`)
- **Accent Glow**: `indigo-500` / `blue-600` (`from-blue-600 to-indigo-600`) with 20% opacity blur
- **Typography**:
  - Headings: `font-extrabold tracking-tight text-white`
  - Body: `text-zinc-400 font-normal leading-relaxed`
  - Metrics / Numbers: `font-mono text-zinc-200 tracking-wide`
- **Badges**: `bg-indigo-950/60 text-indigo-300 border border-indigo-800`

## Recipe 2: Stripe Luxury Minimal (Checkout & Trust Default)
- **Background**: `#ffffff` light or `#0f172a` slate
- **Card Surface**: Pure white with `shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/10`
- **Accent**: Royal violet `#6366f1` / Emerald green `#10b981`
- **Border Radii**: `rounded-2xl` (16px) for cards, `rounded-xl` (12px) for buttons

## Recipe 3: Ramp High-Density Utility (Bento & Audit Tables)
- **Grid Layout**: 12-column asymmetric Bento Grid with 1px border dividers
- **Header Chips**: Monospace status indicators (`[STATUS: VERIFIED]`, `[CHECKSUM: PASS]`)
- **Table Density**: `py-2.5 px-3.5 text-xs`, alternating subtle row highlights
