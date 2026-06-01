import { createFileRoute } from "@tanstack/react-router"
import { motion } from "motion/react"
import { useMemo, useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDownIcon,
  MonitorPlay,
} from "#/components/ui/icons"

import { Button } from "#/components/ui/button"
import { briefPrompt, briefTeaser, productName } from "#/data/brief"
import { projects, type DesignProject } from "#/data/projects"
import { formatProjectCreatedDate } from "#/lib/project-date"
import { appBase, projectEmbedUrl } from "#/lib/paths"

export const Route = createFileRoute("/")({ component: App })

type Exhibit = DesignProject & { n: number }

const numbered: Exhibit[] = projects.map((project, index) => ({
  ...project,
  n: index + 1,
}))

const ALL = "All tools"

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function App() {
  const runCount = projects.length
  const designCount = projects.reduce(
    (total, project) => total + project.labels.length,
    0,
  )

  const toolCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const project of projects) {
      counts.set(project.tool, (counts.get(project.tool) ?? 0) + 1)
    }
    return counts
  }, [])
  const toolCount = toolCounts.size

  const [activeTool, setActiveTool] = useState<string>(ALL)
  const shown =
    activeTool === ALL
      ? numbered
      : numbered.filter((project) => project.tool === activeTool)

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-wrap px-4 pt-6 pb-7 md:pt-9 md:pb-9">
        <motion.div
          className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.74fr)]"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex max-w-2xl flex-col gap-5">
            <span className="lab-eyebrow">
              Model behavior study
              <span className="lab-eyebrow-sep" />
              {runCount} runs
            </span>
            <h1 className="display-title text-5xl leading-[0.92] text-balance text-foreground md:text-7xl">
              How {runCount} models read the same brief.
            </h1>
            <p className="max-w-md font-mono text-[0.9rem] leading-6 text-muted-foreground">
              Every model below got the{" "}
              <span className="font-semibold text-foreground">
                exact same prompt
              </span>{" "}
              — design a landing page for {productName}. {runCount} runs, side
              by side, so you can see how each one behaves.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button render={<a href="#index" />} size="lg">
                <ArrowDown data-icon="inline-start" />
                Browse the {runCount} runs
              </Button>
              <Button
                render={<a href="https://adilkairolla.dev/five-designs" />}
                size="lg"
                variant="ghost"
              >
                adilkairolla.dev/five-designs
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
          </div>

          <BriefCard />
        </motion.div>

        {/* ── Datasheet ──────────────────────────────────────── */}
        <dl className="datasheet mt-7 md:mt-9">
          <Stat figure={runCount} label="tool + model runs" />
          <Stat figure={toolCount} label="generation tools" />
          <Stat figure={designCount} label="designs generated" />
          <Stat figure={1} label="identical brief" accent />
        </dl>
      </section>

      {/* ── Index ────────────────────────────────────────────── */}
      <section id="index" className="page-wrap scroll-mt-16 px-4 pb-24">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div className="flex flex-col gap-1.5">
            <span className="lab-eyebrow">The runs</span>
            <h2 className="display-title text-3xl leading-[0.95] text-foreground md:text-4xl">
              Open any run, read the result.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-5 text-muted-foreground">
            Each exhibit is one local React project — the real static build,
            previewed live.
          </p>
        </div>

        <FilterBar
          active={activeTool}
          onSelect={setActiveTool}
          toolCounts={toolCounts}
          total={runCount}
          shownCount={shown.length}
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((project, index) => (
            <motion.div
              key={project.slug}
              id={project.slug}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: Math.min(index * 0.02, 0.2),
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ExhibitCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

function Stat({
  figure,
  label,
  accent = false,
}: {
  figure: number
  label: string
  accent?: boolean
}) {
  return (
    <div className="datasheet-cell">
      <dt
        className={`datasheet-figure display-title ${accent ? "is-accent" : ""}`}
      >
        {figure}
      </dt>
      <dd className="datasheet-label">{label}</dd>
    </div>
  )
}

function BriefCard() {
  return (
    <div className="brief-card">
      <div className="brief-head">
        <span className="brief-dot" />
        <span className="brief-dot" />
        <span className="brief-dot" />
        <span className="brief-file">the-brief.txt</span>
        <span className="brief-tag">identical · all runs</span>
      </div>
      <div className="brief-body">
        <p className="brief-teaser">{briefTeaser}</p>
        <details className="brief-details">
          <summary className="brief-summary">
            <ChevronDownIcon className="brief-chevron" data-icon="inline-start" />
            Read the full prompt
          </summary>
          <pre className="brief-prompt">{briefPrompt}</pre>
        </details>
      </div>
    </div>
  )
}

function FilterBar({
  active,
  onSelect,
  toolCounts,
  total,
  shownCount,
}: {
  active: string
  onSelect: (tool: string) => void
  toolCounts: Map<string, number>
  total: number
  shownCount: number
}) {
  const tools = [ALL, ...toolCounts.keys()]
  return (
    <div className="filter-bar">
      <div className="filter-scroll">
        {tools.map((tool) => {
          const count = tool === ALL ? total : (toolCounts.get(tool) ?? 0)
          return (
            <button
              key={tool}
              type="button"
              onClick={() => onSelect(tool)}
              className="filter-chip"
              data-active={active === tool}
            >
              {tool}
              <span className="filter-count">{count}</span>
            </button>
          )
        })}
      </div>
      <span className="filter-result">
        {shownCount} / {total} shown
      </span>
    </div>
  )
}

function ExhibitCard({ project }: { project: Exhibit }) {
  const href = `${appBase()}/p/${project.slug}`
  return (
    <article className="exhibit-card">
      <div className="exhibit-head">
        <span className="exhibit-num">Exhibit {pad(project.n)}</span>
        <span className="exhibit-count">
          {formatProjectCreatedDate(project.createdAt)}
        </span>
      </div>
      <a
        href={href}
        className="project-frame group"
        aria-label={`Open ${project.tool} / ${project.model}`}
      >
        <iframe
          title={`${project.tool} ${project.model} preview`}
          src={projectEmbedUrl(project)}
          loading="lazy"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        />
        <span className="project-frame-cover">
          <MonitorPlay data-icon="inline-start" />
          Open preview
        </span>
      </a>
      <div className="exhibit-meta">
        <span className="exhibit-tool">{project.tool}</span>
        <a href={href} className="exhibit-model">
          {project.model}
        </a>
        <p className="exhibit-created">
          {project.labels.length} designs · created{" "}
          {formatProjectCreatedDate(project.createdAt, { includeTime: true })}
        </p>
        <div className="exhibit-labels">
          {project.labels.map((label) => (
            <span key={label} className="exhibit-label">
              {label}
            </span>
          ))}
        </div>
      </div>
      <a href={href} className="exhibit-open">
        Open run
        <ArrowUpRight data-icon="inline-end" />
      </a>
    </article>
  )
}
