# Ratio Reader — Landing Page Concepts

Marketing landing pages for **Ratio Reader**, a tool that makes reading easier:
upload a PDF and get a clear summary of the most important information, plus
margin hints, key quotes, and insights that help you actually understand the
content.

This project contains **five fully distinct landing-page designs** for the same
product — each a self-contained creative world with its own typography, palette,
motion, and layout.

## The five designs

| Route | Name | Direction |
|-------|------|-----------|
| `/`  | **Gallery** | Curated index linking to all five concepts |
| `/1` | **The Marginalia** | Editorial / literary magazine — warm paper, deep ink, Fraunces + Newsreader, drop caps & marginalia |
| `/2` | **Reading Engine** | Computational / retro-terminal — phosphor green on black, live boot log & readouts, Chakra Petch + JetBrains Mono + IBM Plex Sans |
| `/3` | **Slow Light** | Organic / calm — sage, clay & cream, drifting blobs, Instrument Serif + Hanken Grotesk |
| `/4` | **LESS / MORE** | Brutalist / maximalist — giant Anton type, acid lime, marquee, hard grid (Anton + Archivo + Space Mono) |
| `/5` | **Aurelia** | Luxury / cinematic — midnight + champagne gold, drifting aurora, glass panels (Cormorant Garamond + Manrope) |

## Stack

- React 19 + TypeScript + Vite (rolldown-vite)
- Tailwind CSS v4
- [`motion`](https://motion.dev) for animation
- `react-router-dom` for routing
- `lucide-react` for icons
- Fonts loaded from Google Fonts (see `index.html`)

Each design lives in its own file under `src/pages/` and is code-split (lazy
loaded), so the gallery loads instantly and a design's bundle is fetched only
when you open its route.

## Develop

```bash
bun install      # install dependencies
bun run dev      # start the dev server → http://localhost:5173
bun run build    # type-check + production build to dist/
bun run preview  # preview the production build
```
