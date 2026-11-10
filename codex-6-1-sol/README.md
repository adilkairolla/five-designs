# Ratio Reader

Five distinct, responsive marketing landing pages for a PDF reading companion.

## Run locally

The app uses Bun, React, TypeScript, Vite, and Tailwind CSS. Existing dependencies are recorded in `bun.lock`.

```sh
bun install --frozen-lockfile --registry=https://socket.higgsfield.xyz/npm
bun run dev
```

- `/1` — The reading room: blue editorial typography and layered paper.
- `/2` — A brighter brain: yellow, tactile stationery, and playful illustration.
- `/3` — The observatory: dark violet, orbital graphics, and a reading workspace.
- `/4` — Room to grow: forest green, botanical linework, and quiet photography.
- `/5` — Less, but more: coral poster typography and graphic paper sculpture.

The root redirects to `/1`. The fixed design selector links all five pages.

## Checks

```sh
bun run build
bun run lint
```

The pages include keyboard-accessible preview tabs, a sample reader dialog, mobile navigation, and expandable FAQs. The PDF picker checks file size and signature locally. PDF uploading and AI analysis are not connected to a backend; the interface labels its sample content clearly.

Fonts and photography are served locally from `public/`. The forest photograph is from [Unsplash](https://images.unsplash.com/photo-1441974231531-c6227db76b6e). Fonts are DM Sans, Newsreader, Space Grotesk, and Manrope, distributed through Google Fonts.

For production hosting, serve `dist/` after building and configure SPA fallback to `index.html` for `/1` through `/5`.
