import { $ } from "bun"
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

type ProjectBuild = {
  slug: string
  folder: string
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const showcaseRoot = path.resolve(__dirname, "..")
const experimentsRoot = path.resolve(showcaseRoot, "..")
const outputRoot = path.join(showcaseRoot, "public", "projects")
const projectsFile = path.join(showcaseRoot, "src", "data", "projects.ts")
const clientRoot = path.join(showcaseRoot, "dist", "client")
const baseSegment = "five-designs"
const basePath = `/${baseSegment}`
const args = new Set(Bun.argv.slice(2))
const startAt = process.env.START_AT

const shouldBuildProjects = !args.has("--app-only")
const shouldBuildApp = !args.has("--projects-only")
const shouldDryRun = args.has("--dry-run")

if (args.has("--help")) {
  console.log(`
Usage:
  bun run scripts/build-showcase.ts [--app-only] [--projects-only] [--dry-run]

Examples:
  bun run build
  START_AT=opencode-owlalpha bun run build:projects
  bun run build:deploy-check
`)
  process.exit(0)
}

if (shouldBuildProjects) {
  await buildProjects()
}

if (shouldBuildApp) {
  await $`bunx vite build`.cwd(showcaseRoot)
  mirrorBaseAssets()
}

if (shouldDryRun) {
  await $`bunx wrangler deploy --dry-run`.cwd(showcaseRoot)
}

async function buildProjects() {
  const projects = await readProjects()
  const startIndex = startAt
    ? projects.findIndex((item) => item.slug === startAt || item.folder === startAt)
    : 0

  if (!projects.length) {
    throw new Error(`No projects found in ${projectsFile}`)
  }

  if (startAt && startIndex === -1) {
    throw new Error(`START_AT did not match a project: ${startAt}`)
  }

  if (!startAt) {
    rmSync(outputRoot, { recursive: true, force: true })
  }
  mkdirSync(outputRoot, { recursive: true })

  for (const [currentIndex, project] of projects.entries()) {
    if (currentIndex < startIndex) {
      continue
    }

    const projectDir = path.join(experimentsRoot, project.folder)
    const packageJson = path.join(projectDir, "package.json")

    if (!existsSync(packageJson)) {
      console.warn(`Skipping ${project.folder}: package.json not found`)
      continue
    }

    console.log(`\nBuilding ${project.folder}`)

    if (!existsSync(path.join(projectDir, "node_modules"))) {
      await $`bun install --frozen-lockfile`.cwd(projectDir)
    }

    const changedFiles = await patchRouters(projectDir)

    try {
      await $`bunx vite build --base=${`${basePath}/projects/${project.slug}/`} --outDir=${path.join(outputRoot, project.slug)} --emptyOutDir`.cwd(
        projectDir,
      )
    } finally {
      await restoreFiles(changedFiles)
    }
  }
}

async function readProjects() {
  const manifestSource = await Bun.file(projectsFile).text()

  return [...manifestSource.matchAll(/slug: "([^"]+)",\n\s+folder: "([^"]+)"/g)].map(
    ([, slug, folder]) => ({ slug, folder }) satisfies ProjectBuild,
  )
}

async function patchRouters(projectDir: string) {
  const changedFiles = new Map<string, string>()

  for (const file of collectSourceFiles(path.join(projectDir, "src"))) {
    const source = await Bun.file(file).text()
    const next = transformRouterSource(source)

    if (next !== source) {
      changedFiles.set(file, source)
      await Bun.write(file, next)
    }
  }

  return changedFiles
}

function transformRouterSource(source: string) {
  let next = source

  next = next.replace(
    /import\s+\{([^}]*?)\bBrowserRouter\b([^}]*?)\}\s+from\s+["']react-router-dom["']/g,
    (match, before, after) => {
      if (match.includes("HashRouter as BrowserRouter")) {
        return match
      }

      return `import {${before}HashRouter as BrowserRouter${after}} from "react-router-dom"`
    },
  )

  next = next.replace(/\bcreateBrowserRouter\b/g, "createHashRouter")

  return next
}

async function restoreFiles(changedFiles: Map<string, string>) {
  await Promise.all([...changedFiles].map(([file, source]) => Bun.write(file, source)))
}

function collectSourceFiles(dir: string) {
  if (!existsSync(dir)) {
    return []
  }

  const files: string[] = []
  const stack = [dir]

  while (stack.length) {
    const current = stack.pop()

    if (!current) {
      continue
    }

    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name)

      if (entry.isDirectory()) {
        if (entry.name !== "node_modules") {
          stack.push(fullPath)
        }
        continue
      }

      if (entry.isFile() && /\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

function mirrorBaseAssets() {
  if (!existsSync(clientRoot)) {
    throw new Error(`Client build directory does not exist: ${clientRoot}`)
  }

  const mirroredRoot = path.join(clientRoot, baseSegment)

  rmSync(mirroredRoot, { recursive: true, force: true })
  mkdirSync(mirroredRoot, { recursive: true })

  for (const entry of readdirSync(clientRoot, { withFileTypes: true })) {
    if (entry.name === baseSegment) {
      continue
    }

    const source = path.join(clientRoot, entry.name)
    const destination = path.join(mirroredRoot, entry.name)

    cpSync(source, destination, { recursive: true })
  }

  console.log(`Mirrored client assets into dist/client/${baseSegment}`)
}
