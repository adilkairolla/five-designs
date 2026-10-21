import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const editions = [
  {
    n: "01",
    name: "The Riso Edition",
    screen: "Read less. Keep more.",
    idea: "Loud print for a quiet activity. Acid yellow, hot pink and a specimen page that does the explaining.",
    tags: ["Print shop", "Poster scale", "Highlighter"],
    palette: ["#e6ff3b", "#ff4fa3", "#14110c", "#f1f1ec"],
    tint: "hover:bg-[#e6ff3b]",
  },
  {
    n: "02",
    name: "The Schematic",
    screen: "Every document, in proportion.",
    idea: "A technical sheet for a reading instrument. Blueprint grid, dimension lines, and a source you can trace.",
    tags: ["Technical drawing", "Blueprint", "Measured"],
    palette: ["#e9f1f4", "#123043", "#0c8aa6", "#c94b38"],
    tint: "hover:bg-[#d8e7ee]",
  },
  {
    n: "03",
    name: "Night Reading",
    screen: "Keep the sentence that matters.",
    idea: "A page for the 11 p.m. reader. Ink-dark, lamplit, with annotations that float up out of the page.",
    tags: ["Atmospheric", "Serif", "Lamplight"],
    palette: ["#08110e", "#f2a65a", "#f0e6d2", "#91a89b"],
    tint: "hover:bg-[#12241e]",
  },
  {
    n: "04",
    name: "The Comic",
    screen: "Your reading list is the villain.",
    idea: "A four-colour origin story. Halftone, speech bubbles and a machine you can actually push a button on.",
    tags: ["Comic book", "Pop", "Interactive"],
    palette: ["#fff6de", "#ffd43b", "#f1447e", "#2fc6d6"],
    tint: "hover:bg-[#2fc6d6]",
  },
  {
    n: "05",
    name: "Field Manual",
    screen: "Information survival manual.",
    idea: "Standard-issue kit for information overload. Olive drab, safety orange, and a procedure with four steps.",
    tags: ["Utility", "Stencil", "Field kit"],
    palette: ["#242919", "#ede6d6", "#ff5c1a", "#a9b18c"],
    tint: "hover:bg-[#ede6d6]",
  },
];

function Thumb({ n }: { n: string }) {
  if (n === "01") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#e6ff3b] p-3">
        <div className="font-archivo-black text-[15px] uppercase leading-[0.82] tracking-tight">
          Read
          <br />
          less.
        </div>
        <div className="absolute -bottom-3 -right-2 size-16 rounded-full bg-[#ff4fa3]" />
        <div className="absolute bottom-2 left-2 border border-[#14110c] bg-[#f1f1ec] px-1 py-0.5 font-space text-[5px] font-bold uppercase tracking-[0.1em]">
          41 pp → 4 min
        </div>
        <div className="absolute right-2 top-2 h-10 w-7 rotate-6 border border-[#14110c] bg-[#fffdf6] shadow-[2px_2px_0_#14110c]" />
      </div>
    );
  }
  if (n === "02") {
    return (
      <div className="blueprint-grid relative h-full w-full overflow-hidden bg-[#e9f1f4] p-3 text-[#123043]">
        <div className="font-instrument text-[17px] leading-[0.9]">In proportion.</div>
        <div className="absolute bottom-3 left-3 h-10 w-7 border border-[#123043] bg-[#fbfdfd]">
          <div className="mx-1 mt-1 h-px bg-[#123043]/30" />
          <div className="mx-1 mt-1 h-px w-2/3 bg-[#123043]/30" />
        </div>
        <div className="absolute bottom-3 right-3 space-y-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-2 w-12 border border-[#123043] bg-[#fbfdfd]" />
          ))}
        </div>
        <div className="absolute left-[52%] top-4 h-10 border-l border-dashed border-[#123043]/50" />
        <div className="absolute right-2 top-2 size-1.5 rounded-full bg-[#c94b38]" />
      </div>
    );
  }
  if (n === "03") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#08110e] p-3">
        <div className="absolute -right-4 -top-4 size-20 rounded-full bg-[radial-gradient(circle,rgba(242,166,90,0.7),transparent_70%)] blur-md" />
        <div className="relative font-fraunces text-[20px] italic leading-[0.9] text-[#f0e6d2]">
          Keep the
          <br />
          <span className="text-[#f2a65a]">sentence.</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 border-l border-[#f2a65a]/50 pl-2 font-space text-[5px] uppercase tracking-[0.1em] text-[#91a89b]">
          Margin note · p. 14
        </div>
      </div>
    );
  }
  if (n === "04") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#fff6de] p-2 halftone text-[#17110f]/15">
        <div className="absolute left-2 top-2 rotate-[-4deg] border-2 border-[#17110f] bg-[#ffd43b] px-2 py-1 font-lilita text-[13px] uppercase leading-none">
          Villain!
        </div>
        <div className="absolute right-2 top-3 size-8 rotate-12 bg-[#f1447e] [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_94%,50%_72%,21%_94%,32%_57%,2%_35%,39%_35%)]" />
        <div className="absolute bottom-2 left-2 right-2 border-2 border-[#17110f] bg-white px-1.5 py-1 font-dm text-[6px] font-black uppercase leading-tight">
          the reading list has teeth
        </div>
        <div className="absolute bottom-3 right-3 size-3 rounded-full border-2 border-[#17110f] bg-[#2fc6d6]" />
      </div>
    );
  }
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#242919] p-2.5 text-[#ede6d6]">
      <div className="font-staatliches text-[17px] uppercase leading-[0.82]">
        Info
        <br />
        survival
      </div>
      <div className="absolute bottom-0 left-0 right-0 warning-stripes h-2" />
      <div className="absolute right-2 top-2 border border-[#ede6d6]/50 px-1 py-0.5 font-space text-[5px] font-bold uppercase tracking-[0.12em]">
        FM 24-7
      </div>
      <div className="absolute bottom-3.5 left-2.5 bg-[#ff5c1a] px-1 py-0.5 font-space text-[5px] font-bold uppercase tracking-[0.1em] text-[#1c2013]">
        64 pp → 4 min
      </div>
    </div>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-[#f2f2ef] font-archivo text-[#171614]">
      <header className="border-b border-[#171614]/20">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center bg-[#171614]">
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path d="M5 7h14M5 12h9M5 17h12" stroke="#f2f2ef" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight">Ratio Reader</p>
              <p className="font-space text-[7.5px] uppercase tracking-[0.18em] text-[#171614]/50">Marketing studies · 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-5 font-space text-[8px] uppercase tracking-[0.14em]">
            <span className="hidden text-[#171614]/45 sm:block">Five editions</span>
            <span className="border border-[#171614] px-2 py-1">Index</span>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#171614]/20">
          <div className="pointer-events-none absolute -right-20 -top-24 hidden size-[420px] rounded-full border border-[#171614]/10 lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-4 top-8 hidden size-[240px] rounded-full border border-[#171614]/10 lg:block" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pb-24 lg:pt-20">
            <div className="anim-rise">
              <p className="font-space text-[8.5px] uppercase tracking-[0.22em] text-[#171614]/50">A product, drawn five ways</p>
              <h1 className="mt-5 text-[clamp(3.2rem,7.2vw,6.8rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
                One promise.
                <br />
                <span className="font-instrument italic tracking-[-0.02em]">Five points of view.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-[#171614]/65">
                Ratio Reader turns any PDF into what matters. Here are five marketing pages for it,
                each with its own visual argument: a riso poster, a technical sheet, a night read, a
                comic, and a field manual.
              </p>
            </div>
            <div className="anim-rise anim-delay-2 lg:justify-self-end">
              <div className="max-w-[280px] border border-[#171614] bg-white p-4">
                <p className="font-space text-[7.5px] uppercase tracking-[0.16em] text-[#171614]/45">The product</p>
                <p className="mt-2 text-sm font-medium leading-snug">
                  Summary, hints, quotes and insights from any PDF. Every line linked to its source.
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-[#171614]/15 pt-3">
                  <span className="font-space text-[7.5px] uppercase tracking-[0.12em] text-[#171614]/45">Start with</span>
                  <Link to="/1" className="group flex items-center gap-1.5 text-xs font-semibold">
                    Edition 01
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="flex items-center justify-between border-b border-[#171614]/20 py-3 font-space text-[8px] uppercase tracking-[0.16em] text-[#171614]/45">
            <span>The editions</span>
            <span>Same brand · different rooms</span>
          </div>
          <div>
            {editions.map((edition) => (
              <Link
                key={edition.n}
                to={`/${edition.n}`}
                className={`group grid grid-cols-[36px_1fr] items-center gap-4 border-b border-[#171614]/20 px-2 py-5 transition-colors sm:grid-cols-[44px_180px_1fr_auto] sm:gap-6 sm:px-3 ${edition.tint}`}
              >
                <span className="font-space text-xs text-[#171614]/40">{edition.n}</span>
                <div className="hidden h-[92px] w-[168px] overflow-hidden border border-[#171614] transition-transform duration-300 group-hover:rotate-[-1deg] sm:block">
                  <Thumb n={edition.n} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h2 className={`text-lg font-semibold tracking-tight ${edition.n === "03" ? "group-hover:text-[#f0e6d2]" : ""} ${edition.n === "05" ? "group-hover:text-[#242919]" : ""}`}>
                      {edition.name}
                    </h2>
                    <span className={`font-space text-[8px] uppercase tracking-[0.12em] text-[#171614]/45 ${edition.n === "03" ? "group-hover:text-[#f0e6d2]/60" : ""}`}>{edition.screen}</span>
                  </div>
                  <p className={`mt-1.5 max-w-xl text-sm leading-relaxed text-[#171614]/60 ${edition.n === "03" ? "group-hover:text-[#f0e6d2]/65" : ""} ${edition.n === "05" ? "group-hover:text-[#242919]/65" : ""}`}>
                    {edition.idea}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {edition.tags.map((tag) => (
                      <span key={tag} className={`font-space text-[7px] uppercase tracking-[0.1em] text-[#171614]/40 ${edition.n === "03" ? "group-hover:text-[#f0e6d2]/50" : ""} ${edition.n === "05" ? "group-hover:text-[#242919]/50" : ""}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-start-2 flex items-center justify-between gap-5 sm:col-start-auto sm:justify-end">
                  <div className="flex gap-1">
                    {edition.palette.map((color) => (
                      <span key={color} className="size-3 border border-[#171614]/25" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center border border-[#171614]/30 transition-colors group-hover:border-[#171614] group-hover:bg-[#171614] group-hover:text-white">
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 max-w-2xl font-space text-[8px] uppercase leading-relaxed tracking-[0.1em] text-[#171614]/40">
            Each edition is a complete landing page at its own URL. Same content, deliberately
            different design language. The product is fictional; the reading fatigue is not.
          </p>
        </section>
      </main>

      <footer className="border-t border-[#171614]/20 bg-[#e9e9e5]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="font-space text-[7.5px] uppercase tracking-[0.14em] text-[#171614]/45">
            Ratio Reader · Marketing studies · Reader discretion advised
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-space text-[8px] uppercase tracking-[0.12em]">
            {["1", "2", "3", "4", "5"].map((n) => (
              <Link key={n} to={`/${n}`} className="text-[#171614]/55 hover:text-[#171614]">
                Edition {n.padStart(2, "0")}
              </Link>
            ))}
          </div>
          <p className="font-space text-[7.5px] uppercase tracking-[0.12em] text-[#171614]/35">React · Tailwind · Bun</p>
        </div>
      </footer>
    </div>
  );
}
