import { Link } from "@tanstack/react-router"
import { Layers3 } from "#/components/ui/icons"
import { projects } from "#/data/projects"

import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 px-4 backdrop-blur-xl">
      <nav className="page-wrap flex items-center gap-3 py-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground no-underline"
        >
          <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Layers3 data-icon="inline-start" />
          </span>
          Five Designs
        </Link>
        <span className="hidden font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase sm:inline">
          / model behavior study
        </span>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
            {projects.length} runs
          </span>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
