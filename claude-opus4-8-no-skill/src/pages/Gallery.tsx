import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { brand, designIndex } from "@/content";

export function Gallery() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] font-inter text-zinc-100 antialiased">
      {/* ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* header */}
        <header className="mb-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {brand.name} · landing page studies
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Five ways to sell{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              one good idea.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {brand.subhead} Below are five complete, deliberately distinct takes on
            the marketing landing page — each its own world of type, color, and motion.
          </p>
        </header>

        {/* design grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {designIndex.map((d) => (
            <Link
              key={d.path}
              to={d.path}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              {/* palette swatches as a soft top band */}
              <div className="mb-6 flex h-16 overflow-hidden rounded-xl">
                {d.palette.map((c, i) => (
                  <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>

              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <div className="font-space-mono text-xs text-zinc-500">
                    /{d.index}
                  </div>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                    {d.name}
                  </h2>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-zinc-500 transition-all duration-300 group-hover:rotate-12 group-hover:text-white" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {d.concept}
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-zinc-500">
          Concept, copy, and all five designs are illustrative work for{" "}
          <span className="text-zinc-300">{brand.name}</span>. Tip: open each at{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-space-mono text-xs text-zinc-300">
            /1
          </code>{" "}
          through{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-space-mono text-xs text-zinc-300">
            /5
          </code>
          .
        </footer>
      </div>
    </div>
  );
}
