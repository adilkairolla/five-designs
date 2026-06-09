import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronUpIcon,
  Layers3,
  XIcon,
} from "#/components/ui/icons"

import { Button } from "#/components/ui/button"
import { projects } from "#/data/projects"
import { formatProjectCreatedDate } from "#/lib/project-date"
import { appBase, projectDesignUrl } from "#/lib/paths"

export const Route = createFileRoute("/p/$slug")({
  component: ProjectPreview,
})

const STORAGE_KEY = "five-designs:controls-collapsed"

function ProjectPreview() {
  const { slug } = Route.useParams()
  const index = projects.findIndex((project) => project.slug === slug)
  const projectIndex = index >= 0 ? index : 0
  const project = projects[projectIndex]
  const previous =
    projects[(projectIndex - 1 + projects.length) % projects.length]
  const next = projects[(projectIndex + 1) % projects.length]
  const [activeDesignIndex, setActiveDesignIndex] = useState(0)

  // Collapsed/expanded state, persisted like a devtools panel.
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    try {
      setCollapsed(window.localStorage.getItem(STORAGE_KEY) === "1")
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    setActiveDesignIndex(0)
  }, [slug])

  function setCollapsedPersisted(value: boolean) {
    setCollapsed(value)
    try {
      window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0")
    } catch {
      /* ignore */
    }
  }

  if (!project) {
    return null
  }

  const exhibit = String(projectIndex + 1).padStart(2, "0")
  const activeDesignNumber = activeDesignIndex + 1
  const frameUrl = projectDesignUrl(project, activeDesignNumber)

  return (
    <main className="preview-page" data-collapsed={collapsed}>
      {!collapsed && (
        <>
          <section className="omni-bar">
            <div className="omni-left">
              <Button
                render={<a href={`${appBase()}/#index`} />}
                variant="outline"
                size="sm"
                aria-label="Back to gallery"
              >
                <ArrowLeft data-icon="inline-start" />
                <span className="hidden sm:inline">Gallery</span>
              </Button>
              <div className="hidden h-9 w-px bg-border sm:block" />
              <div className="min-w-0">
                <p className="m-0 flex items-center gap-2 truncate text-sm font-semibold text-foreground">
                  <span className="omni-exhibit">Exhibit {exhibit}</span>
                  <span className="truncate">
                    {project.tool} / {project.model}
                  </span>
                </p>
                <p className="omni-folder m-0 hidden truncate sm:block">
                  {project.folder}
                </p>
                <p className="omni-created m-0 hidden truncate md:block">
                  Created{" "}
                  {formatProjectCreatedDate(project.createdAt, {
                    includeTime: true,
                  })}
                </p>
              </div>
            </div>

            <div className="omni-right">
              <label className="sr-only" htmlFor="project-switcher">
                Switch project
              </label>
              <select
                id="project-switcher"
                className="omni-select"
                value={project.slug}
                onChange={(event) => {
                  window.location.href = `${appBase()}/p/${event.target.value}`
                }}
              >
                {projects.map((item, itemIndex) => (
                  <option key={item.slug} value={item.slug}>
                    {String(itemIndex + 1).padStart(2, "0")} — {item.tool} /{" "}
                    {item.model}
                  </option>
                ))}
              </select>

              <Button
                render={
                  <a
                    href={`${appBase()}/p/${previous.slug}`}
                    aria-label="Previous run"
                  />
                }
                variant="outline"
                size="icon-sm"
              >
                <ChevronLeft />
              </Button>
              <Button
                render={
                  <a
                    href={`${appBase()}/p/${next.slug}`}
                    aria-label="Next run"
                  />
                }
                variant="outline"
                size="icon-sm"
              >
                <ChevronRight />
              </Button>
              <Button
                render={
                  <a
                    href={frameUrl}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                size="sm"
              >
                <ArrowUpRight data-icon="inline-start" />
                <span className="hidden sm:inline">Full</span>
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setCollapsedPersisted(true)}
                aria-label="Hide controls"
              >
                <XIcon />
              </Button>
            </div>
          </section>

          <div className="embedded-title">
            <span className="embedded-title-label">Designs</span>
            <div className="embedded-chips">
              {project.labels.map((label, labelIndex) => (
                <button
                  key={label}
                  type="button"
                  className="embedded-chip"
                  data-active={labelIndex === activeDesignIndex}
                  onClick={() => setActiveDesignIndex(labelIndex)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <section className="embedded-stage">
        <iframe
          title={`${project.tool} ${project.model} ${project.labels[activeDesignIndex]}`}
          src={frameUrl}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        />
      </section>

      {collapsed && (
        <button
          type="button"
          className="omni-launcher"
          onClick={() => setCollapsedPersisted(false)}
          aria-label="Show controls"
        >
          <Layers3 className="omni-launcher-mark" data-icon="inline-start" />
          <span className="omni-launcher-num">
            Exhibit {exhibit} · Design {activeDesignNumber}
          </span>
          <ChevronUpIcon className="omni-launcher-caret" />
        </button>
      )}
    </main>
  )
}
