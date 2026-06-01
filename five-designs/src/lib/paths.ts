import type { DesignProject } from "#/data/projects"

export function appBase() {
  return import.meta.env.BASE_URL.replace(/\/$/, "")
}

export function projectEmbedUrl(project: DesignProject) {
  return `${appBase()}/projects/${project.slug}/`
}

export function projectDesignUrl(project: DesignProject, designNumber: number) {
  return `${projectEmbedUrl(project)}#/${designNumber}`
}
