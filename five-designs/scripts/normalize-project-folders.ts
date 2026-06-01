import { existsSync } from "node:fs"
import { rename } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

type ProjectEntry = {
  slug: string
  folder: string
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const showcaseRoot = path.resolve(__dirname, "..")
const experimentsRoot = path.resolve(showcaseRoot, "..")
const projectsFile = path.join(showcaseRoot, "src", "data", "projects.ts")

const source = await Bun.file(projectsFile).text()
const projects = readProjects(source)

if (!projects.length) {
  throw new Error(`No projects found in ${projectsFile}`)
}

let nextSource = source
const renamed: string[] = []
const skipped: string[] = []

for (const project of projects) {
  const from = path.join(experimentsRoot, project.folder)
  const to = path.join(experimentsRoot, project.slug)

  if (project.folder === project.slug) {
    skipped.push(project.slug)
    continue
  }

  if (!existsSync(from)) {
    if (existsSync(to)) {
      skipped.push(project.slug)
      nextSource = replaceFolder(nextSource, project)
      continue
    }

    throw new Error(`Cannot find source folder for ${project.slug}: ${from}`)
  }

  if (existsSync(to)) {
    throw new Error(`Target folder already exists for ${project.slug}: ${to}`)
  }

  await rename(from, to)
  renamed.push(`${project.folder} -> ${project.slug}`)
  nextSource = replaceFolder(nextSource, project)
}

if (nextSource !== source) {
  await Bun.write(projectsFile, nextSource)
}

console.log(`Normalized ${renamed.length} project folders.`)

if (renamed.length) {
  console.log(renamed.map((item) => `- ${item}`).join("\n"))
}

if (skipped.length) {
  console.log(`Skipped ${skipped.length} already-normalized projects.`)
}

function readProjects(manifestSource: string) {
  return [
    ...manifestSource.matchAll(/slug: "([^"]+)",\n\s+folder: "([^"]+)"/g),
  ].map(([, slug, folder]) => ({ slug, folder }) satisfies ProjectEntry)
}

function replaceFolder(manifestSource: string, project: ProjectEntry) {
  const pattern = new RegExp(
    `(slug: "${escapeRegExp(project.slug)}",\\n\\s+folder: ")${escapeRegExp(project.folder)}(")`,
    "g",
  )

  return manifestSource.replace(pattern, `$1${project.slug}$2`)
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
