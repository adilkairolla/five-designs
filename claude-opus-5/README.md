# Ratio Reader — five landing pages

Five complete marketing landing pages for the same product, each in a different
visual language. `bun run dev`, then:

| Route | Direction | Palette | Type |
| --- | --- | --- | --- |
| `/` | Contents — the five directions with palettes and type credits | | |
| `/1` | **Proofsheet** — a manuscript under the blue pencil; Ratio's output arrives in the margins | cool paper `#F4F4F0`, ink `#14161A`, blue pencil `#1B3BC4`, highlighter `#F0E24A` | Bodoni Moda · Newsreader · Courier Prime |
| `/2` | **Blueprint** — the structural drawing of an argument, on a cyanotype sheet | cyanotype `#0C2A4D`, chalk `#EAF1F7`, ochre `#E0A43A` | Saira Condensed · IBM Plex Sans · IBM Plex Mono |
| `/3` | **Risograph** — a two-ink zine: overprint, grain, halftone, misregistration | press grey `#E9E7DF`, fluoro pink `#FF3D9A`, blue `#1B44C8`, overprint `#241A4A` | Bricolage Grotesque · Karla · Martian Mono |
| `/4` | **Atlas** — the document as terrain: contours, legend, scale bar, elevation profile | seafoam `#E6EDE7`, pine `#1D3A33`, olive `#8A9A5B`, clay `#C08552` | Marcellus · Jost |
| `/5` | **Nocturne** — an observatory: concepts plotted as a star chart on canvas | night `#0B1026`, starlight `#F3EEE2`, brass `#C9A24B` | Cormorant Garamond · Spectral |

## How the set holds together

One product concept runs through all five: **ratio is the compression you
choose** (1:5 digest → 1:20 brief → 1:100 gist), and each page expresses it in
its own vernacular — a printer's setting, an architect's drawing scale, a
physical dial on a duplicator, a cartographic scale bar, a telescope eyepiece.
All five describe the same fictional source document (a 34-page paper on thermal
drift in battery arrays), so the demos are concrete and comparable.

Every page carries a working interaction: marked-up text with margin notes
(`/1`), a scale selector driving a dimension line (`/2`), a rotary ratio dial
(`/3`), a clickable contour map plus an evidence-density profile (`/4`), and a
hoverable canvas star chart with a keyboard-reachable equivalent (`/5`).

## Structure

- `src/app.tsx` — routes, lazily loading one design per route
- `src/pages/contents.tsx` — the index at `/`
- `src/designs/*.tsx` — one self-contained file per design: its own scoped
  stylesheet (`.pf`, `.bp`, `.rz`, `.at`, `.nc` prefixes), palette, copy and
  motion. Nothing is shared between designs, deliberately.
- `src/index.css` — Tailwind entry plus the font tokens exposed through `@theme`
- Fonts load from Google Fonts in `index.html`

Tailwind handles layout and spacing; the identity-carrying CSS (grain, halftone,
blend modes, keyframes, generated contours) lives in each design's scoped
stylesheet. `prefers-reduced-motion` is honoured on all five.
