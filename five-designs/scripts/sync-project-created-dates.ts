import { stat } from "node:fs/promises"
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

const createdAtBySlug = new Map<string, string>()

for (const project of projects) {
  const info = await stat(path.join(experimentsRoot, project.folder))
  createdAtBySlug.set(project.slug, formatLocalDateTime(info.mtime))
}

const nextSource = source.replace(
  /(\{\n\s+slug: "([^"]+)",\n\s+folder: "([^"]+)",[\s\S]*?\n\s+labels: \[[^\n]*\],)(\n\s+createdAt: "[^"]+",)?/g,
  (match, prefix: string, slug: string) => {
    const createdAt = createdAtBySlug.get(slug)

    if (!createdAt) {
      return match
    }

    return `${prefix}\n    createdAt: "${createdAt}",`
  },
)

await Bun.write(projectsFile, nextSource)

console.log(`Synced created dates for ${createdAtBySlug.size} projects.`)

function readProjects(manifestSource: string) {
  return [
    ...manifestSource.matchAll(/slug: "([^"]+)",\n\s+folder: "([^"]+)"/g),
  ].map(([, slug, folder]) => ({ slug, folder }) satisfies ProjectEntry)
}

function formatLocalDateTime(date: Date) {
  const offsetMinutes = -date.getTimezoneOffset()
  const sign = offsetMinutes >= 0 ? "+" : "-"
  const absoluteOffset = Math.abs(offsetMinutes)
  const offsetHours = Math.floor(absoluteOffset / 60)
  const offsetRestMinutes = absoluteOffset % 60

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds(),
  )}${sign}${pad(offsetHours)}:${pad(offsetRestMinutes)}`
}

function pad(value: number) {
  return String(value).padStart(2, "0")
}
