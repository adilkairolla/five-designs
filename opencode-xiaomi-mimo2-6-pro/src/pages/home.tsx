import { Link } from "react-router-dom";

const designs = [
  {
    id: 1,
    name: "The Annotated Margin",
    kind: "Literary editorial",
    blurb: "Cream paper, oxide-red pen, and marginalia as the product demo. For readers who love the smell of a used book.",
    accent: "#B33A2B",
    bg: "#F7F1E5",
    ink: "#1C1917",
  },
  {
    id: 2,
    name: "Signal / Compression",
    kind: "Cyber telemetry",
    blurb: "312 pages collapse into 12 signals. Scanlines, monospace telemetry, and a document being decoded in real time.",
    accent: "#00E5FF",
    bg: "#06060B",
    ink: "#E8E8F0",
  },
  {
    id: 3,
    name: "Form Follows Reading",
    kind: "Swiss modernism",
    blurb: "No images. No decoration. Only type, rules, and one red square. Confidence at 120pt.",
    accent: "#E30613",
    bg: "#FFFFFF",
    ink: "#000000",
  },
  {
    id: 4,
    name: "Soft Focus",
    kind: "Pastel product",
    blurb: "Lavender, peach, mint. Floating squircles and gentle motion. The friendly face of document intelligence.",
    accent: "#7C5CFF",
    bg: "#FFFDF8",
    ink: "#1E1B4B",
  },
  {
    id: 5,
    name: "The Broadsheet",
    kind: "Newspaper press",
    blurb: "Masthead, drop caps, column rules, and a classifieds CTA. A landing page as a special edition.",
    accent: "#C41E3A",
    bg: "#F0EDE4",
    ink: "#111111",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <div className="rr-grid-lines min-h-screen">
        <header className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:px-10 md:pt-24">
          <p className="font-mono text-[11px] tracking-[0.32em] text-white/40 uppercase">
            Ratio Reader — Design Exploration
          </p>
          <h1 className="mt-6 max-w-4xl font-space text-5xl leading-[0.95] font-medium tracking-tight text-balance md:text-8xl">
            Five ways to say{" "}
            <span className="text-cyan-300">read less,</span>{" "}
            understand more.
          </h1>
          <p className="mt-8 max-w-2xl font-space text-lg leading-relaxed text-white/55">
            Ratio Reader turns any PDF into a summary, a set of reading hints, living quotes, and an insight map.
            Below: five complete landing pages, each with its own visual language. Pick one — or steal from all of them.
          </p>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-32 md:px-10">
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {designs.map((d) => (
              <Link
                key={d.id}
                to={`/${d.id}`}
                className="group relative flex min-h-[280px] flex-col justify-between bg-[#0B0B0F] p-7 transition-colors hover:bg-[#12121A] md:p-9"
                style={{ "--accent": d.accent } as React.CSSProperties}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: d.accent }}
                />
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className="font-mono text-xs tracking-[0.25em] uppercase"
                      style={{ color: d.accent }}
                    >
                      0{d.id}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
                      {d.kind}
                    </span>
                  </div>
                  <h2 className="mt-6 font-space text-3xl font-medium tracking-tight md:text-4xl">
                    {d.name}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
                    {d.blurb}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: d.accent }}
                  />
                  <span className="font-mono text-[11px] tracking-[0.22em] text-white/40 uppercase transition group-hover:text-white">
                    Open design 0{d.id} →
                  </span>
                </div>
              </Link>
            ))}

            <div className="flex min-h-[280px] flex-col justify-between bg-[#0B0B0F] p-7 md:p-9">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-white/30 uppercase">
                  The product
                </span>
                <h2 className="mt-6 font-space text-3xl font-medium tracking-tight text-white/70 md:text-4xl">
                  What every design sells
                </h2>
              </div>
              <ul className="mt-8 space-y-2 font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
                <li>→ Distilled summaries</li>
                <li>→ Reading hints</li>
                <li>→ Living quotes</li>
                <li>→ Insight maps</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
