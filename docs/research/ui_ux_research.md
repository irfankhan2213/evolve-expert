# Master UI/UX & Frontend Design Engineering Research Dossier

## 1. Master Teardowns: Linear, Stripe, and Ramp

### A. The Linear Method (Achromatic Dark Precision & Velocity)
* **Surface Ladder**: Avoid heavy shadows on dark mode. Elevation is achieved via near-black luminance steps separated by microscopic hairline borders:
  * Base Canvas: `#08090a` (`bg-zinc-950`).
  * Surface Panels: `#121315`.
  * Cards / Modals: `#18191b` (`bg-zinc-900`).
  * Hairline Borders: `1px solid rgba(255, 255, 255, 0.08)`.
* **Single Signature Accent**: 95% of UI is achromatic; reserve the signature purple/indigo accent strictly for active state indicators and keyboard focus rings.
* **Negative Letter-Spacing**: Headings use aggressive negative tracking (`-1.5px` to `-3.0px`) with tight line-heights (`1.05` to `1.2`) for an engineered feel.
* **Keyboard-First Ergonomics**: Global `Cmd + K` palette and tactile click scale (`scale(0.97)` in 150ms).

### B. Stripe UI/UX (Luxury Minimal & Financial Authority)
* **Deep Navy Ink**: Headings use Deep Navy (`#0a2540`) instead of pure black (`#000000`) to eliminate eye vibration and establish institutional trust.
* **One Primary Button Law**: Exactly one solid primary button per viewport. Secondary actions are ghost buttons or text links.
* **Layered Cool-Tinted Shadows**:
  ```css
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25), 0 1px 3px -1px rgba(0, 0, 0, 0.3);
  ```
* **Tabular Numerals**: Universal `font-variant-numeric: tabular-nums` across all invoices, fee breakdowns, and pricing tables.

### C. Ramp Design System (High-Density B2B Utility & Audit Grids)
* **Row Heights**: High-density audit mode uses **32px to 36px** row heights with `py-1.5 px-3` cell padding.
* **Alignment Rules**:
  * Text / Vendors: Left-aligned.
  * Badges / Status: Center-aligned.
  * Currency / Quantities: Right-aligned with tabular figures so decimals align vertically.
* **Asymmetrical 12-Column Bento Grid**: Hero KPI tiles spanning 8 cols × 2 rows, operational queues spanning 4 cols.

---

## 2. Calibrated Design Dials

| Dial | Range | Default | Operational Meaning |
|---|---|---|---|
| **1. Density** | 1 (Airy) → 5 (Compact) | **4 (High-Density)** | 32–36px table rows, tight `p-3`/`p-4` cards, zero wasted vertical space. |
| **2. Novelty** | 1 (Standard) → 5 (Experimental) | **3 (Bespoke Product)** | Custom laser sweep and field chips while maintaining intuitive layout. |
| **3. Kinetic Energy** | 1 (Static) → 5 (Cinematic) | **2 (Subtle Weight)** | Sub-200ms ease-out transitions, tactile click scale down (0.97). |
| **4. Contrast** | 1 (Soft Pastels) → 5 (Stark OLED) | **4 (Deep Contrast)** | Deep zinc canvas (`#09090b`), crisp 1px borders, 7:1+ contrast. |
| **5. Asset Dependence** | 1 (Pure Code) → 5 (Media Heavy) | **1 (Pure Typography/CSS)** | Design value derives from typography rhythm, borders, and CSS geometry. |

---

## 3. Micro-Interaction Timing Curves

* **Easing Formula**:
  * Entering / Deceleration: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple/Linear ease-out).
  * Exiting / Acceleration: `cubic-bezier(0.4, 0, 1, 1)` (fast dismiss).
* **Speed Tiers**:
  * `<100ms`: Instant / cuts.
  * `150ms–200ms`: Button press, toggle, tab indicator.
  * `250ms–300ms`: Modals, tooltips, drawers.
  * `>400ms`: Sluggish (forbidden for utility software).
* **GPU Performance**: Animate strictly `transform` and `opacity`. Never animate `width`, `height`, or `margin`.

---

## 4. WCAG 2.2 AA Contrast & Accessibility Standards

* **Text Contrast**: 4.5:1 minimum for normal text, 3.0:1 for large text (≥18pt).
* **UI Components**: 3.0:1 minimum contrast for borders and actionable icons (SC 1.4.11).
* **Touch Targets**: 24×24px minimum (Level AA), 44×44px on mobile viewports.
* **SC 2.4.11 (Focus Not Obscured)**: Fixed headers must never obscure active focused elements. Enforce `scroll-padding-top: 80px`.
* **SC 3.3.8 (Accessible Authentication)**: Never disable paste on password, API key, or verification fields.

---

## 5. Master Anti-Patterns Matrix (10 Lethal UI Mistakes)

1. ❌ **Purple AI Gradient Blob**: Instantly signals generic AI templates; destroys enterprise credibility.
2. ❌ **Left-Aligned Currencies in Tables**: Decimals drift horizontally; impossible for financial auditing.
3. ❌ **Blocking Paste on Auth Fields**: Violates WCAG 2.2 SC 3.3.8; breaks password managers.
4. ❌ **Emojis as Primary UI Icons**: Render inconsistently across platforms; look toy-like. Use strict Lucide SVG icons.
5. ❌ **Low-Contrast Dark Mode Text**: Gray `#71717a` on `#18181b` yields 3.8:1 (fails WCAG AA).
6. ❌ **Disembodied Button States**: Buttons with no active press scale or loading spinner feedback.
7. ❌ **Sticky Navbars Obscuring Focus**: Users tabbing blindly behind fixed navigation bars.
8. ❌ **Removing Focus Rings (`outline-none`)**: Destroys keyboard navigation for motor-impaired users.
9. ❌ **Slow Transitions (>400ms)**: Makes snappy tools feel heavy and lagging.
10. ❌ **Unwrapped Mobile Tables**: Wide tables shattering horizontal viewports on mobile devices.
