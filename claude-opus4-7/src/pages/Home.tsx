import { Link } from "react-router-dom";

const designs = [
  {
    num: "01",
    path: "/1",
    title: "Modern arXiv",
    blurb:
      "Typography-heavy academic platform. Cream paper, deep ink, an oxblood serif spine.",
    sample:
      "open-access publishing for the AI age — preprints, transparent review, version of record",
    bg: "#f4f1ea",
    ink: "#1a1916",
    accent: "#7d2c2c",
    font: '"Fraunces", serif',
    sublabel: "Editorial · Serif · Calm",
  },
  {
    num: "02",
    path: "/2",
    title: "AI Review Lab",
    blurb:
      "Futuristic interface. Real-time AI manuscript analysis, scoring panels, structured feedback.",
    sample:
      "INTEGRITY 0.97 · NOVELTY 0.81 · METHODS 0.74 · VERIFY → human peer review",
    bg: "#0a0e1a",
    ink: "#dbe7ff",
    accent: "#5cffd0",
    font: '"JetBrains Mono", monospace',
    sublabel: "Dark · Technical · Lab",
  },
  {
    num: "03",
    path: "/3",
    title: "Open Journal",
    blurb:
      "Premium editorial. Drop caps, paper-like surfaces, citations, DOI blocks, article cards.",
    sample:
      "Vol. III · No. 7 · An open-access journal of record. Released under CC BY 4.0.",
    bg: "#faf7f0",
    ink: "#1c2521",
    accent: "#1c3d35",
    font: '"DM Serif Display", serif',
    sublabel: "Magazine · Premium · Calm",
  },
  {
    num: "04",
    path: "/4",
    title: "Research Network",
    blurb:
      "Knowledge graph. Authors, papers, reviewers, citations, versions — drawn as a constellation.",
    sample:
      "12,481 authors · 3,902 papers · 17,604 citations · 218 reviewers online",
    bg: "#0d0d10",
    ink: "#f1ecdf",
    accent: "#f4b73c",
    font: '"Instrument Serif", serif',
    sublabel: "Graph · Constellation · Cartographic",
  },
  {
    num: "05",
    path: "/5",
    title: "Publishing OS",
    blurb:
      "Product-led dashboard. Manuscript statuses, review timelines, metadata panels, license controls.",
    sample:
      "DRAFT → PREPRINT → AI-REVIEWED → HUMAN-REVIEWED → ACCEPTED → PUBLISHED",
    bg: "#0f1012",
    ink: "#e9e6df",
    accent: "#ff7a3d",
    font: '"Bricolage Grotesque", sans-serif',
    sublabel: "Product · Dashboard · Workflow",
  },
];

export function Home() {
  return (
    <div
      className="min-h-screen text-stone-900"
      style={{
        background:
          "linear-gradient(180deg,#f6f3ec 0%,#efe9dc 100%), radial-gradient(1200px 600px at 80% -10%, #e9dfca 0%, transparent 70%)",
        fontFamily: '"Newsreader", ui-serif, Georgia, serif',
      }}
    >
      {/* paper grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24 relative">
        {/* top bar */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-stone-600">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#7d2c2c]" />
            <span>Open Ratio</span>
            <span className="text-stone-400">/</span>
            <span>Design Exploration</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-stone-500">
            <span>v0.1 — internal</span>
            <span className="font-mono">2026 · 05 · 10</span>
          </div>
        </div>

        {/* masthead */}
        <header className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <div
              className="text-[11px] tracking-[0.42em] uppercase text-[#7d2c2c]"
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            >
              Five landing pages · One platform
            </div>
            <h1
              className="mt-4 text-[64px] md:text-[112px] leading-[0.92] tracking-[-0.02em] text-stone-900"
              style={{ fontFamily: '"Fraunces", serif', fontWeight: 300 }}
            >
              Open <span className="italic font-light text-stone-700">access</span>{" "}
              <br className="hidden md:block" />
              publishing,<br />
              <span
                className="italic"
                style={{ fontWeight: 300, color: "#7d2c2c" }}
              >
                rethought.
              </span>
            </h1>
          </div>
          <div className="md:col-span-3 md:pb-6">
            <div className="border-l-2 border-stone-300 pl-4 text-[15px] leading-[1.55] text-stone-600">
              Open Ratio takes a manuscript from preprint to published version of record —
              with AI assistance, transparent peer review, DOIs, and CC licensing.
              <br />
              <br />
              Below: five landing pages, each presenting the same product through a
              radically different aesthetic lens.
            </div>
          </div>
        </header>

        {/* divider */}
        <div className="mt-14 md:mt-20 flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-stone-500">
          <span>The five directions</span>
          <span className="flex-1 h-px bg-stone-300" />
          <span style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
            01 → 05
          </span>
        </div>

        {/* design cards */}
        <div className="mt-10 grid gap-3">
          {designs.map((d) => (
            <Link
              key={d.path}
              to={d.path}
              className="group relative block overflow-hidden border border-stone-300/80 hover:border-stone-900 transition-all hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
              style={{ background: d.bg }}
            >
              <div className="grid grid-cols-12 items-stretch">
                {/* number */}
                <div
                  className="col-span-2 md:col-span-1 flex items-center justify-center border-r border-current/10 py-10 text-3xl md:text-4xl"
                  style={{
                    color: d.ink,
                    fontFamily: d.font,
                    background: "rgba(0,0,0,0.02)",
                  }}
                >
                  {d.num}
                </div>

                {/* title block */}
                <div className="col-span-10 md:col-span-5 px-5 md:px-8 py-7 md:py-10 border-r border-current/10">
                  <div
                    className="text-[10px] tracking-[0.3em] uppercase opacity-70"
                    style={{
                      color: d.accent,
                      fontFamily: '"IBM Plex Mono", monospace',
                    }}
                  >
                    {d.sublabel}
                  </div>
                  <h2
                    className="mt-2 text-3xl md:text-5xl leading-[1.05]"
                    style={{ color: d.ink, fontFamily: d.font, fontWeight: 400 }}
                  >
                    {d.title}
                  </h2>
                  <p
                    className="mt-3 max-w-md text-sm md:text-[15px] leading-[1.55] opacity-80"
                    style={{ color: d.ink }}
                  >
                    {d.blurb}
                  </p>
                </div>

                {/* sample line */}
                <div
                  className="hidden md:flex col-span-5 items-center px-8 py-10 text-[12px] leading-[1.7] tracking-wide"
                  style={{
                    color: d.ink,
                    opacity: 0.7,
                    fontFamily: '"IBM Plex Mono", monospace',
                  }}
                >
                  <span className="line-clamp-3">{d.sample}</span>
                </div>

                {/* arrow */}
                <div
                  className="col-span-12 md:col-span-1 flex items-center justify-end md:justify-center px-6 md:px-0 pb-6 md:pb-0 text-3xl"
                  style={{ color: d.ink }}
                >
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* footnotes */}
        <footer
          className="mt-20 pt-10 border-t border-stone-300 grid md:grid-cols-3 gap-8 text-[12px] text-stone-500"
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
        >
          <div>
            <div className="uppercase tracking-[0.3em] mb-2">Brief</div>
            Modern alternative to arXiv + peer review + open-access publishing
            infrastructure.
          </div>
          <div>
            <div className="uppercase tracking-[0.3em] mb-2">Workflow</div>
            Manuscript → Preprint → AI Review → Human Review → Revision → Accepted
            Article → Version of Record.
          </div>
          <div>
            <div className="uppercase tracking-[0.3em] mb-2">Identifiers</div>
            DOI · CC BY 4.0 / BY-NC / BY-SA · Versioned changelog · Long-term access.
          </div>
        </footer>
      </div>
    </div>
  );
}
