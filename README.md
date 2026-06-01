# Five Designs

A small benchmark gallery for comparing how different AI coding tools and models
interpret the same product brief.

The brief was simple: build a marketing landing page for **Ratio Reader**, a
tool that makes PDF reading easier by turning documents into summaries, hints,
quotes, and insights. Each model was asked to create five distinct React +
Tailwind designs.

The result is this repo: many independent generated apps, plus one TanStack
Start showcase that lets you browse and preview them in one place.

## What Is Inside

```txt
reader-design/
  five-designs/                 # TanStack Start showcase app
  antigravity-gemini-3-pro-preview/
  claude-opus4-8/
  codex-5-5/
  opencode-qwen3-7max/
  ...                           # generated React design projects
```

Each top-level project folder is a standalone generated React app. Folder names
are normalized as `tool-model`, and the showcase uses those names for stable
preview URLs. Each project also carries a `createdAt` timestamp derived from the
source folder's completion time.

## Showcase App

The main app lives in `five-designs`.

```bash
cd five-designs
bun install
bun dev
```

Open:

```txt
http://localhost:3000/five-designs/
```

## Useful Commands

Run the showcase locally:

```bash
bun dev
```

Build only the showcase app:

```bash
bun run build:app
```

Build every embedded project and then the showcase:

```bash
bun run build
```

Normalize project folder names from the manifest:

```bash
bun run normalize:projects
```

Refresh project created dates from the source folders:

```bash
bun run sync:created-dates
```

Deploy to Cloudflare:

```bash
bun run deploy
```

## How Embedding Works

The showcase build script compiles each generated React app into:

```txt
five-designs/public/projects/<project-slug>/
```

The TanStack Start app then previews each project with an iframe. The production
base path is `/five-designs`, so previews are served from:

```txt
/five-designs/projects/<project-slug>/
```

During local development, Vite serves those same paths so dev and production
behave the same way.

## Stack

- React
- TanStack Start
- TanStack Router
- Tailwind CSS
- Coss UI
- Motion
- Hugeicons
- Bun
- Cloudflare Workers

## Purpose

This is not a single polished landing page. It is a comparison surface.

The interesting part is seeing how different models respond to the same product,
same constraints, and same creative instruction. Some outputs are minimal, some
are expressive, some are practical, and some are strange in useful ways.

That contrast is the point.
