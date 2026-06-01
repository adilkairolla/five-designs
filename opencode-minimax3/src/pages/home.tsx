import { Link } from "react-router-dom";

const designs = [
  {
    n: "01",
    path: "/1",
    name: "The Scholar's Codex",
    feel: "Editorial / Print",
    desc: "Cream paper, drop caps, asymmetric columns. For the reader who treats PDFs like a hardback first edition.",
    palette: ["#f4ecd9", "#1a1814", "#8b6f47"],
    font: "EB Garamond",
  },
  {
    n: "02",
    path: "/2",
    name: "The Brutalist Lab",
    feel: "Brutalist / Technical",
    desc: "Raw grid, monospace, hard rules, no apologies. A research notebook that yells.",
    palette: ["#fafafa", "#0a0a0a", "#ff3b00"],
    font: "JetBrains Mono",
  },
  {
    n: "03",
    path: "/3",
    name: "Soft Cloud",
    feel: "Friendly / Organic",
    desc: "Floating shapes, pastel gradients, and rounded warmth. The reading buddy that hugs you back.",
    palette: ["#fff4ec", "#ff9aa2", "#a4c8ff"],
    font: "Fraunces",
  },
  {
    n: "04",
    path: "/4",
    name: "Terminal 1986",
    feel: "Cyberpunk / Retro",
    desc: "Phosphor green, scanlines, glitch text. A boot sequence for a smarter brain.",
    palette: ["#0a0e0a", "#39ff14", "#ff00aa"],
    font: "VT323",
  },
  {
    n: "05",
    path: "/5",
    name: "Golden Ratio",
    feel: "Deco / Geometric",
    desc: "Black marble, brass rules, sunbursts. For the reader who values craft over convenience.",
    palette: ["#0d0a08", "#d4a849", "#1a1a1a"],
    font: "Cormorant Garamond",
  },
] as const;

export function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0c] text-[#f4f1ea] font-['Inter_Tight',system-ui,sans-serif]">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-20">
        <header className="flex items-center justify-between mb-24 md:mb-32">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#ff5b1f]" />
            <div className="text-[13px] tracking-[0.2em] uppercase font-medium">
              Ratio Reader / Concept Lab
            </div>
          </div>
          <div className="hidden md:block text-[12px] tracking-[0.2em] uppercase opacity-50">
            v.01 — Five directions
          </div>
        </header>

        <section className="mb-24 md:mb-40">
          <p className="text-[12px] tracking-[0.3em] uppercase opacity-50 mb-8">
            A reading tool, five visual languages
          </p>
          <h1 className="font-['Instrument_Serif',serif] font-light text-[clamp(48px,9vw,140px)] leading-[0.92] tracking-[-0.03em] max-w-[12ch]">
            Pick the room you want to <em className="italic text-[#ff5b1f]">read in.</em>
          </h1>
          <p className="mt-10 max-w-[58ch] text-[18px] md:text-[20px] leading-[1.5] opacity-70">
            Ratio Reader takes a PDF and gives you the summary, the key
            arguments, the best quotes, and the threads worth pulling — in
            minutes. Below are five completely different ways to present the
            same product. Each one is a real, working page.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#f4f1ea]/15">
          {designs.map((d) => (
            <Link
              key={d.path}
              to={d.path}
              className="group relative bg-[#0e0e0c] hover:bg-[#161614] transition-colors p-8 md:p-12 flex flex-col min-h-[420px]"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="font-['Space_Mono',monospace] text-[12px] tracking-wider opacity-50">
                  /{d.n}
                </div>
                <div className="font-['Space_Mono',monospace] text-[12px] tracking-wider opacity-50">
                  {d.path} →
                </div>
              </div>

              <h2 className="font-['Instrument_Serif',serif] text-[44px] md:text-[64px] leading-[0.95] tracking-[-0.02em] mb-6">
                {d.name}
              </h2>

              <p className="text-[14px] uppercase tracking-[0.2em] opacity-50 mb-6">
                {d.feel}
              </p>

              <p className="text-[15px] md:text-[16px] leading-[1.55] opacity-75 max-w-[42ch] mt-auto">
                {d.desc}
              </p>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#f4f1ea]/10">
                <div className="flex items-center gap-2">
                  {d.palette.map((c, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-[#f4f1ea]/20"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="font-['Space_Mono',monospace] text-[11px] opacity-50">
                  {d.font}
                </div>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#f4f1ea]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                ↗
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-24 md:mt-32 pt-8 border-t border-[#f4f1ea]/10 flex flex-col md:flex-row gap-4 justify-between text-[12px] tracking-[0.2em] uppercase opacity-50">
          <div>Ratio Reader — concept explorations</div>
          <div>Each design is a complete, scrollable landing page</div>
        </footer>
      </div>
    </div>
  );
}
