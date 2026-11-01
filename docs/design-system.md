# Baladeira Studio – Design System

Extracted from the current site (`src/**/*.css`, `public/index.html`) so new pages
stay consistent. Values marked **(inferred)** come from screenshots of the art, not CSS.

## 1. Brand voice

Warm, cultural, proud of Natal. Headlines are set in a light weight with the key
phrase in bold ("De **Natal** para o **MUNDO!**", "Conheça nosso **lançamento!**").
Copy is in Portuguese, sentence case, short sentences. The studio makes *serious
games* (education + culture), so pages should feel closer to a cultural
institution with energy than to a generic game portal.

## 2. Color tokens

| Token | Value | Used for |
|---|---|---|
| `--bs-orange` | `#F04B23` | Brand accent: headings on light, launch band, active states |
| `--bs-orange-press` | `#D43F1A` | Hover/pressed for orange |
| `--bs-ink` | `#393645` | Primary text, dark buttons, footer, "ink" surfaces |
| `--bs-ink-deep` | `#292C37` | Dark cards (home "Quem nós somos") |
| `--bs-paper` | `#EFEFED` | Page background on inner pages |
| `--bs-paper-warm` | `#F8F4F2` | Soft sections |
| `--bs-white` | `#FFFFFF` | Cards on colored bands |
| Per-game palette | see §7 | Each game brings its own colors from its art |

Existing stray values to retire: `#333`, `#999`, `#898989`, `#ed5424`, `#ffdede`,
`#fba42b`, `#f9f9f9`, `#000`. Map them to the tokens above.

## 3. Typography

- **Family:** `Red Hat Display` (Google Fonts), weights 300, 400, 500, 700, 900. Fallback `sans-serif`.
- **Rule:** one family. Hierarchy comes from weight (300 vs 700/900) and size, not from a second face.

| Role | Size | Weight |
|---|---|---|
| Page title (h1) | 2.5rem – 3rem | 300 with 700 emphasis |
| Section title (h2) | 2rem | 300 with 700 emphasis |
| Card title (h3) | 1.5rem | 700 |
| Body | 1rem (15–18px today) | 400, line-height 1.6 |
| Nav | 0.9rem, uppercase | 300 / 700 active |
| Small / meta | 0.875rem | 400 |

Body line length ≤ 65ch. Headings use `text-wrap: balance`.

## 4. Shape, elevation, spacing

- **Radius:** pill `30px` for buttons; `16px` for cards; `12px`/`8px` for small surfaces. One radius per role, not one everywhere.
- **Elevation:** almost flat. A single soft shadow `0 4px 12px rgba(0,0,0,.1)` on white cards over colored bands. Dark cards use no shadow.
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px. Sections use 48–64 px vertical padding.
- **Container:** Bootstrap `Container`, content column `lg={10}` (~950 px), 16 px side gutter minimum.

## 5. Components

- **Header (`HeaderGrey`)**: logo left, centered uppercase nav (active item bold with underline), X and Instagram icons right. Transparent over the home hero, solid on inner pages. Burger menu below 992 px.
- **Button, primary dark:** `--bs-ink` fill, white text, pill radius, padding 12×30, chevron icon left, label "Ver mais" / "Saiba mais".
- **Button, light:** white fill, `--bs-ink` text, same shape (used on dark cards).
- **Button, outline:** 1 px white border on photo backgrounds (home hero).
- **Cards:** white or `--bs-ink-deep`, radius 16, padding 32–40, text left, art right on desktop; stacked on mobile.
- **Color band:** full-width section in one solid color holding a card (home "lançamento" in orange).
- **Feature rows (game page):** full-bleed band in the game's palette, illustration on one side alternating, title bold + short paragraph.
- **Partners strip:** white band with three logos separated by thin vertical rules.
- **Footer:** `--bs-ink` background, logo, three columns (social, institutional, contact), white text.
- **Store badge:** official Google Play badge image, linked, never recolored.

## 6. Motion

Transitions are 0.3 s `ease`, on color, background-color, transform. Rule going
forward: list properties explicitly (no `transition: all`), animate only
`transform`/`opacity`, and honor `prefers-reduced-motion`.

## 7. Per-game theming

Each game owns a small palette taken from its art, applied only inside that
game's card/page. Brand tokens (orange, ink, paper) stay constant around it.

| Game | Primary | Deep | Soft | Source |
|---|---|---|---|---|
| Refúgio do Banzé | `#FF8C00` (amber) **(inferred)** | `#8B0000` (maroon) **(inferred)** | `#F2E8DA` (sand) **(inferred)** | `FeatureSection` bands |

Confirm exact hex values with the artist before shipping; sample them from the art.

## 8. Quality floor (from Web Interface Guidelines)

- Visible `:focus-visible` on every interactive element; never remove outlines without a replacement.
- `<a>`/`<Link>` for navigation, `<button>` for actions. No `div onClick`.
- `<img>` with `width`/`height`, `alt`, and `loading="lazy"` below the fold.
- Contrast: white on `--bs-orange` is ≈ 3.6:1, so use it only for large text (≥ 24 px or 19 px bold). Body text on orange needs `--bs-ink`.
- Content strings use `…` and curly quotes, and non-breaking spaces in brand names.

## 9. Known gaps in the current site

- `public/assets/refugio-banner.png` is 3840×960 and 5.5 MB. Needs a compressed WebP/JPEG and a ~1600 px variant.
- `src/App.css` and `index.css` still hold unused CRA boilerplate (`.App-header`, `.App-link`, `#61dafb`).
- Colors and radii are repeated as literals in every CSS file; move them to CSS variables (`src/styles/tokens.css`).
- `HomePage.css` / `DownloadSection.css` use `url("/public/assets/…")`, which does not resolve in a production build.
