# Ratio Reader — five landing page designs

A React + TypeScript + Tailwind/Vite project with five independent visual directions.

| Route | Direction                                                       |
| ----- | --------------------------------------------------------------- |
| `/1`  | The margin — editorial typography, paper, cobalt annotations    |
| `/2`  | After hours — indigo, peach, luminous reading lens              |
| `/3`  | Study club — apricot, lavender, custom illustrated book         |
| `/4`  | The essential — oversized typography, red, document compression |
| `/5`  | A little clarity — forest photography, sage, quiet reading      |

The root route opens design 1. The floating selector switches between all five.

## Run

```sh
bun install
bun run dev
```

## Verify

```sh
bun run build
bun run lint
# With the dev server running on port 5173:
bun run verify
```

Browser verification requires Playwright Chromium (`bunx playwright install chromium` if not already installed). It checks every design at desktop, tablet, and mobile widths, exercises the reader and FAQ, and uploads a real PDF fixture. Screenshots are written to `/tmp/ratio-reader-qa`.

## Reader demo

The primary buttons open an accessible reading-room dialog. Explore summary, hint, and quote tabs, or upload a text-based PDF up to 20 MB. PDF.js extracts text locally from the first 80 pages. A simple frequency ranking selects key passages and preserves page references. This is explicitly labeled as a local extractive preview, not an AI-generated summary. No server, account, API key, or document upload is required. Generic reflection prompts are provided in the Hints tab.

## Assets

Original document compositions, reading lens, and book character use CSS and SVG. Typefaces: DM Sans, Instrument Serif, Fraunces, and Space Grotesk via Google Fonts, with system fallbacks. The local forest photograph is from [Pexels, photo 775201](https://www.pexels.com/photo/775201/).
