import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";

const specs = [
  ["Input", "PDF · up to 500 pages"],
  ["Turnaround", "~30 seconds"],
  ["Traceability", "Page & paragraph"],
  ["Languages", "16, including English"],
  ["Privacy", "Never used for training"],
  ["Export", "Markdown · Notion · PDF"],
];

const outputs = [
  {
    code: "OUT-01",
    name: "Summary",
    proportion: "0.12",
    what: "The argument, ordered by importance. Claims separated from evidence. Nothing invented.",
    form: "One page, in your language.",
  },
  {
    code: "OUT-02",
    name: "Hints",
    proportion: "0.08",
    what: "Context placed where it is needed: terms defined, assumptions surfaced, hard passages slowed down.",
    form: "Margin notes, tied to page.",
  },
  {
    code: "OUT-03",
    name: "Quotes",
    proportion: "0.05",
    what: "The exact lines that carry the claim, selected for reuse rather than decoration.",
    form: "Verbatim, with citation.",
  },
  {
    code: "OUT-04",
    name: "Insights",
    proportion: "0.03",
    what: "The wider frame: what this assumes, where it is weak, and what to read next.",
    form: "Short prose, clearly marked.",
  },
];

const notes = [
  {
    q: "I use it before I decide whether a paper deserves my afternoon. It has saved me from two bad ones and sent me into three good ones.",
    who: "Researcher, cognitive science",
    id: "NOTE / 01",
  },
  {
    q: "Every summary line has a page number. That one detail is why I trust it with contracts.",
    who: "Operations lead, 40-person studio",
    id: "NOTE / 02",
  },
  {
    q: "The hints are the part I did not know I needed. They read like a patient colleague, not a chatbot.",
    who: "Master's student, public policy",
    id: "NOTE / 03",
  },
];

function Monogram() {
  return (
    <svg viewBox="0 0 48 48" className="size-9" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 36V12h10.5a7 7 0 0 1 0 14H12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M22 26l11 10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="12" r="2.5" fill="#c94b38" />
    </svg>
  );
}

function Crosshair({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M20 4v8M20 28v8M4 20h8M28 20h8" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function Schematic() {
  return (
    <figure className="relative">
      <div className="flex items-center justify-between border-b border-[#123043]/25 pb-2 font-plex-mono text-[9px] uppercase tracking-[0.18em] text-[#123043]/60">
        <span>Fig. 01 — reduction assembly</span>
        <span>Scale 1:1 / Rev 3.1</span>
      </div>
      <svg viewBox="0 0 600 540" className="mt-3 w-full" role="img" aria-label="Diagram: a 41-page source document is reduced into four linked outputs: summary, hints, quotes and insights, with every output traced back to a page.">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#123043" />
          </marker>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#c94b38" />
          </marker>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#123043" strokeWidth="1" opacity="0.22" />
          </pattern>
        </defs>

        <g className="font-plex-mono" fill="#123043">
          <text x="34" y="36" fontSize="10" letterSpacing="2" opacity="0.62">SOURCE</text>
          <text x="34" y="52" fontSize="16" letterSpacing="1">DOCUMENT / PDF</text>
          <text x="34" y="68" fontSize="9" letterSpacing="1.5" opacity="0.5">41 PP · 18,400 WORDS</text>

          <rect x="34" y="88" width="190" height="300" fill="#fbfdfd" stroke="#123043" strokeWidth="1.5" />
          <rect x="34" y="88" width="190" height="300" fill="url(#hatch)" opacity="0.35" />
          <path d="M54 120h150M54 136h132M54 152h144M54 168h110M54 184h148" stroke="#123043" strokeWidth="2" opacity="0.28" />
          <path d="M54 214h150M54 230h120M54 246h140M54 262h138M54 278h96" stroke="#123043" strokeWidth="2" opacity="0.28" />
          <path d="M54 308h150M54 324h110M54 340h146M54 356h92" stroke="#123043" strokeWidth="2" opacity="0.28" />
          <rect x="54" y="138" width="132" height="12" fill="#0c8aa6" opacity="0.24" />
          <rect x="54" y="246" width="140" height="12" fill="#c94b38" opacity="0.18" />
          <path d="M54 288v50" stroke="#c94b38" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="54" cy="288" r="2.5" fill="#c94b38" />
          <text x="62" y="298" fontSize="8" fill="#c94b38" letterSpacing="1">KEY CLAIM</text>

          <path d="M224 88v300" stroke="#123043" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
          <path d="M236 88h20M236 388h20M246 88v300" stroke="#123043" strokeWidth="1" opacity="0.7" />
          <text x="252" y="242" fontSize="9" letterSpacing="1.5" transform="rotate(90 252 242)" opacity="0.55">1.00 / FULL INPUT</text>
        </g>

        <g>
          <path d="M224 112 C 280 112, 290 90, 330 90" fill="none" stroke="#123043" strokeWidth="1.4" markerEnd="url(#arrow)" />
          <path d="M224 188 C 280 188, 290 178, 330 178" fill="none" stroke="#123043" strokeWidth="1.4" markerEnd="url(#arrow)" />
          <path d="M224 264 C 280 264, 290 266, 330 266" fill="none" stroke="#123043" strokeWidth="1.4" markerEnd="url(#arrow)" />
          <path d="M224 340 C 280 340, 290 354, 330 354" fill="none" stroke="#123043" strokeWidth="1.4" markerEnd="url(#arrow)" />
        </g>

        <g className="font-plex-mono">
          {[
            ["OUT-01", "SUMMARY", "0.12", 66],
            ["OUT-02", "HINTS", "0.08", 154],
            ["OUT-03", "QUOTES", "0.05", 242],
            ["OUT-04", "INSIGHTS", "0.03", 330],
          ].map(([code, label, ratio, y]) => (
            <g key={String(code)}>
              <rect x="330" y={Number(y)} width="200" height="52" fill="#fbfdfd" stroke="#123043" strokeWidth="1.5" />
              <rect x="330" y={Number(y)} width="7" height="52" fill="#0c8aa6" />
              <text x="350" y={Number(y) + 21} fontSize="12" letterSpacing="2">{label}</text>
              <text x="350" y={Number(y) + 38} fontSize="8" letterSpacing="1.2" opacity="0.55">{code} · PROPORTION {ratio}</text>
              <path d="M530 52v360M524 52h12M524 412h12" stroke="#123043" strokeWidth="1" opacity="0.65" />
              <text x="552" y="238" fontSize="9" letterSpacing="1.5" transform="rotate(90 552 238)" opacity="0.55">0.14 / KEPT</text>
            </g>
          ))}
        </g>

        <g className="font-plex-mono" fill="#c94b38">
          <path d="M430 118 C 430 140, 400 146, 386 156" fill="none" stroke="#c94b38" strokeWidth="1.2" markerEnd="url(#arrow-red)" />
          <text x="380" y="136" fontSize="9" letterSpacing="1.2">EVERY LINE TRACEABLE</text>
          <text x="380" y="148" fontSize="8" letterSpacing="1" opacity="0.75">PAGE · PARAGRAPH · VERBATIM</text>
        </g>

        <g className="font-plex-mono" fill="#123043">
          <path d="M34 410h496" stroke="#123043" strokeWidth="1" opacity="0.4" />
          <text x="34" y="430" fontSize="9" letterSpacing="1.4" opacity="0.55">FIG. 01</text>
          <text x="34" y="450" fontSize="14" letterSpacing="1">REDUCTION ASSEMBLY, AXIAL VIEW</text>
          <text x="34" y="470" fontSize="9" letterSpacing="1.2" opacity="0.55">INPUT: WHOLE DOCUMENT · OUTPUT: FOUR LINKED LAYERS · RATIO: APPROX. 7:1</text>
          <path d="M34 490h496" stroke="#123043" strokeWidth="1" opacity="0.2" />
          <text x="34" y="510" fontSize="8" letterSpacing="1.2" opacity="0.45">RR-002 / DRAWN: RR / CHECKED: HUMAN / SHEET 02 OF 05</text>
        </g>
      </svg>
      <div className="mt-2 flex items-start justify-between gap-6 border-t border-[#123043]/25 pt-2 font-plex-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-[#123043]/50">
        <span>Fig. 01 — Not to scale. Values are typical, not guaranteed.</span>
        <span className="shrink-0">Sheet 02 / 05</span>
      </div>
    </figure>
  );
}

export function Two() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-[#e9f1f4] font-condensed text-[#123043]">
      <div className="pointer-events-none fixed inset-4 z-50 hidden border border-[#123043]/15 lg:block" aria-hidden="true">
        <span className="absolute -left-px -top-px h-5 w-px bg-[#123043]" />
        <span className="absolute -left-px -top-px h-px w-5 bg-[#123043]" />
        <span className="absolute -right-px -top-px h-5 w-px bg-[#123043]" />
        <span className="absolute -right-px -top-px h-px w-5 bg-[#123043]" />
        <span className="absolute -bottom-px -left-px h-5 w-px bg-[#123043]" />
        <span className="absolute -bottom-px -left-px h-px w-5 bg-[#123043]" />
        <span className="absolute -bottom-px -right-px h-5 w-px bg-[#123043]" />
        <span className="absolute -bottom-px -right-px h-px w-5 bg-[#123043]" />
      </div>

      <div className="blueprint-grid min-h-screen">
        <header className="border-b border-[#123043]/35">
          <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
            <Link to="/" className="flex items-center gap-3">
              <Monogram />
              <div className="leading-none">
                <p className="font-instrument text-xl tracking-tight">Ratio Reader</p>
                <p className="mt-1 font-plex-mono text-[8px] uppercase tracking-[0.2em] opacity-55">Document reduction system</p>
              </div>
            </Link>
            <nav className="hidden items-center gap-7 font-plex-mono text-[9px] uppercase tracking-[0.18em] lg:flex">
              <a href="#method" className="hover:text-[#0c8aa6]">Method</a>
              <a href="#outputs" className="hover:text-[#0c8aa6]">Outputs</a>
              <a href="#specimen" className="hover:text-[#0c8aa6]">Specimen</a>
              <a href="#notes" className="hover:text-[#0c8aa6]">Field notes</a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="hidden font-plex-mono text-[9px] uppercase tracking-[0.16em] opacity-50 md:block">Sheet 02 / 05</span>
              <a href="#request" className="group flex items-center gap-2 border border-[#123043] bg-[#123043] px-4 py-2.5 font-plex-mono text-[9px] uppercase tracking-[0.16em] text-[#e9f1f4] transition-colors hover:bg-[#0c8aa6]">
                Request access
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <section className="grid gap-12 border-b border-[#123043]/25 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-16">
            <div className="anim-rise">
              <div className="flex items-center gap-3 font-plex-mono text-[9px] uppercase tracking-[0.2em] text-[#123043]/60">
                <span className="inline-block size-1.5 rounded-full bg-[#c94b38]" />
                Technical sheet RR-002 · Revision 3.1
              </div>
              <h1 className="mt-6 font-instrument text-[clamp(3.6rem,7.2vw,6.6rem)] leading-[0.86] tracking-[-0.035em]">
                Every document,
                <br />
                <span className="italic text-[#0c8aa6]">in proportion.</span>
              </h1>
              <p className="mt-7 max-w-md font-newsreader text-lg leading-relaxed text-[#123043]/80">
                Ratio Reader reads the whole file, then returns the fraction that matters. One
                summary, three supporting layers, and a source line for every claim.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#request" className="group flex items-center gap-3 bg-[#123043] px-6 py-3.5 font-plex-mono text-[10px] uppercase tracking-[0.16em] text-[#e9f1f4] transition-colors hover:bg-[#0c8aa6]">
                  Upload a specimen
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#method" className="flex items-center gap-2 font-plex-mono text-[10px] uppercase tracking-[0.14em] underline decoration-[#123043]/30 underline-offset-4 hover:text-[#0c8aa6]">
                  Read the method
                  <ArrowDown className="size-3.5" />
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-0 border-t border-[#123043]/25 sm:grid-cols-3">
                {specs.map(([k, v]) => (
                  <div key={k} className="border-b border-[#123043]/15 py-3">
                    <dt className="font-plex-mono text-[8px] uppercase tracking-[0.18em] text-[#123043]/45">{k}</dt>
                    <dd className="mt-1 font-condensed text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="anim-rise anim-delay-2 relative">
              <Crosshair className="absolute -right-2 -top-6 size-10 text-[#123043]/35 sm:size-12" />
              <Crosshair className="absolute -bottom-6 -left-4 size-8 text-[#123043]/25" />
              <div className="border border-[#123043]/30 bg-[#fbfdfd]/55 p-4 backdrop-blur-[2px] sm:p-6">
                <Schematic />
              </div>
            </div>
          </section>

          <section id="method" className="border-b border-[#123043]/25 py-14 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-plex-mono text-[9px] uppercase tracking-[0.22em] text-[#123043]/50">Section 01 / Method</p>
                <h2 className="mt-4 font-instrument text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                  Read all of it.
                  <br />
                  Return the useful part.
                </h2>
                <p className="mt-5 max-w-xs font-newsreader text-base leading-relaxed text-[#123043]/70">
                  A summary is only as good as what it leaves out. The system is built to make that
                  choice visible, not to hide it.
                </p>
                <p className="mt-6 border-l-2 border-[#c94b38] pl-3 font-plex-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-[#c94b38]">
                  Important: the full text is never discarded. It sits behind every output.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  {
                    n: "I",
                    title: "Ingest",
                    body: "The entire PDF is read, including footnotes, appendices and the parts that feel like filler. 500-page limit.",
                    detail: "No sampling.",
                  },
                  {
                    n: "II",
                    title: "Reduce",
                    body: "Claims are ranked against evidence. Repetition collapses. Contradictions are kept, because they matter.",
                    detail: "Importance, not brevity.",
                  },
                  {
                    n: "III",
                    title: "Attach",
                    body: "Each output is tied to the page and paragraph that produced it. Follow any line back to the source.",
                    detail: "Traceable by default.",
                  },
                ].map((step) => (
                  <div key={step.n} className="relative border-t border-[#123043] pt-4">
                    <span className="absolute -top-4 right-0 bg-[#e9f1f4] px-1 font-plex-mono text-[10px] tracking-[0.1em] text-[#123043]/50">{step.n}</span>
                    <h3 className="font-condensed text-lg font-semibold uppercase tracking-[0.04em]">{step.title}</h3>
                    <p className="mt-2 font-newsreader text-sm leading-relaxed text-[#123043]/70">{step.body}</p>
                    <p className="mt-4 font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#0c8aa6]">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="outputs" className="border-b border-[#123043]/25 py-14 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-plex-mono text-[9px] uppercase tracking-[0.22em] text-[#123043]/50">Section 02 / Outputs</p>
                <h2 className="mt-3 font-instrument text-4xl tracking-tight sm:text-5xl">The returned assembly</h2>
              </div>
              <p className="max-w-xs font-plex-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-[#123043]/50">
                Four layers. Toggle any of them off. The summary is the only default.
              </p>
            </div>
            <div className="mt-8 border-t border-[#123043]">
              <div className="hidden grid-cols-[100px_1fr_1.4fr_150px] gap-4 border-b border-[#123043]/25 py-2 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45 md:grid">
                <span>Code</span>
                <span>Layer</span>
                <span>What is returned</span>
                <span className="text-right">Proportion</span>
              </div>
              {outputs.map((out) => (
                <div key={out.code} className="group grid grid-cols-[72px_1fr] items-start gap-4 border-b border-[#123043]/20 py-5 transition-colors hover:bg-[#fbfdfd]/70 md:grid-cols-[100px_1fr_1.4fr_150px] md:items-center">
                  <span className="font-plex-mono text-[9px] tracking-[0.1em] text-[#123043]/45">{out.code}</span>
                  <div>
                    <h3 className="font-instrument text-2xl leading-none">{out.name}</h3>
                    <p className="mt-1 font-plex-mono text-[8px] uppercase tracking-[0.12em] text-[#0c8aa6] md:hidden">{out.form}</p>
                  </div>
                  <div className="col-start-2 md:col-start-auto">
                    <p className="max-w-xl font-newsreader text-sm leading-relaxed text-[#123043]/75">{out.what}</p>
                    <p className="mt-1 hidden font-plex-mono text-[8px] uppercase tracking-[0.12em] text-[#0c8aa6] md:block">{out.form}</p>
                  </div>
                  <div className="col-start-2 flex items-center gap-3 md:col-start-auto md:justify-end">
                    <div className="h-1.5 w-16 bg-[#123043]/10">
                      <div className="h-full bg-[#0c8aa6]" style={{ width: `${Number(out.proportion) * 600}%` }} />
                    </div>
                    <span className="font-plex-mono text-xs tracking-[0.08em]">{out.proportion}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="specimen" className="border-b border-[#123043]/25 py-14 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-plex-mono text-[9px] uppercase tracking-[0.22em] text-[#123043]/50">Section 03 / Specimen</p>
                <h2 className="mt-3 font-instrument text-4xl tracking-tight sm:text-5xl">Specimen 04-B, annotated</h2>
              </div>
              <span className="border border-[#123043]/40 px-3 py-1.5 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/60">
                Source: public policy report · 44 pp
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative border border-[#123043]/35 bg-[#fbfdfd]/70 p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#123043]/20 pb-2 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">
                  <span>Source / p. 14</span>
                  <span>44 pp</span>
                </div>
                <p className="mt-5 font-plex-mono text-[8px] uppercase tracking-[0.18em] text-[#123043]/45">3.2 · Implementation</p>
                <h3 className="mt-2 font-instrument text-2xl leading-snug sm:text-3xl">
                  The pilot reduced waiting times, but only where staffing was already adequate.
                </h3>
                <p className="mt-4 font-newsreader text-sm leading-relaxed text-[#123043]/75">
                  Across the twelve participating sites, median waiting time fell by 18 percent.
                  However, the four sites with below-median staffing saw an increase of 4 percent.
                  The authors note that{" "}
                  <span className="bg-[#0c8aa6]/18 px-0.5">
                    the intervention cannot substitute for baseline capacity
                  </span>
                  , a finding that is repeated in the appendices but not in the executive summary.
                </p>
                <div className="mt-5 border-t border-dashed border-[#c94b38]/40 pt-3">
                  <p className="font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#c94b38]">Annotation / missing from page 1</p>
                  <p className="mt-1 font-newsreader text-sm italic text-[#123043]/75">
                    The caveat changes who should adopt this. That is the whole story.
                  </p>
                </div>
                <div className="absolute -right-3 top-1/3 hidden rotate-90 font-plex-mono text-[8px] uppercase tracking-[0.2em] text-[#123043]/35 sm:block">
                  full text retained
                </div>
              </div>
              <div className="relative border border-[#123043] bg-[#fbfdfd] p-6 shadow-[8px_8px_0_rgba(12,138,166,0.18)] sm:p-8">
                <div className="flex items-center justify-between border-b border-[#123043]/20 pb-2 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">
                  <span>Ratio output / reduced</span>
                  <span>Ratio 44:6</span>
                </div>
                <div className="mt-5">
                  <p className="font-plex-mono text-[8px] uppercase tracking-[0.18em] text-[#0c8aa6]">Summary</p>
                  <p className="mt-1 font-instrument text-2xl leading-snug">
                    The pilot worked, but only in places that already had enough staff.
                  </p>
                  <p className="mt-3 font-newsreader text-sm leading-relaxed text-[#123043]/75">
                    Waiting times fell 18% across twelve sites. The four understaffed sites got
                    slower. The authors&apos; own conclusion is conditional, and the executive summary
                    omits the condition.
                  </p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="border-l-2 border-[#0c8aa6] pl-3">
                    <p className="font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">Hint</p>
                    <p className="mt-1 font-newsreader text-sm leading-snug text-[#123043]/80">
                      Read &ldquo;baseline capacity&rdquo; as a prerequisite, not a footnote.
                    </p>
                    <span className="mt-1 block font-plex-mono text-[8px] tracking-[0.1em] text-[#123043]/40">p. 14, ¶ 2</span>
                  </div>
                  <div className="border-l-2 border-[#c94b38] pl-3">
                    <p className="font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">Quote</p>
                    <p className="mt-1 font-newsreader text-sm italic leading-snug text-[#123043]/80">
                      &ldquo;The intervention cannot substitute for baseline capacity.&rdquo;
                    </p>
                    <span className="mt-1 block font-plex-mono text-[8px] tracking-[0.1em] text-[#123043]/40">p. 14, ¶ 2</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#123043]/15 pt-3">
                  <span className="font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#123043]/45">Insight</span>
                  <span className="font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#c94b38]">1 contradiction flagged</span>
                </div>
                <p className="mt-1 font-newsreader text-sm leading-relaxed text-[#123043]/75">
                  The report&apos;s headline and its own appendix disagree. Anyone citing the 18%
                  without the staffing caveat is citing the wrong document.
                </p>
              </div>
            </div>
          </section>

          <section id="notes" className="border-b border-[#123043]/25 py-14 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="font-plex-mono text-[9px] uppercase tracking-[0.22em] text-[#123043]/50">Section 04 / Field notes</p>
                <h2 className="mt-3 font-instrument text-4xl tracking-tight sm:text-5xl">Recorded on use</h2>
                <p className="mt-4 max-w-[28ch] font-newsreader text-base leading-relaxed text-[#123043]/65">
                  Notes from people who read for a living, edited only for length.
                </p>
                <div className="mt-8 border border-[#123043]/30 p-4">
                  <p className="font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">Calibration data</p>
                  <div className="mt-3 space-y-2.5 font-plex-mono text-[9px] uppercase tracking-[0.08em]">
                    <div className="flex items-baseline justify-between gap-4 border-b border-[#123043]/10 pb-2">
                      <span className="text-[#123043]/60">Docs finished / week</span>
                      <span className="font-semibold">2.4×</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-[#123043]/10 pb-2">
                      <span className="text-[#123043]/60">Blind summary accuracy</span>
                      <span className="font-semibold">91%</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[#123043]/60">Median time saved</span>
                      <span className="font-semibold">37 min</span>
                    </div>
                  </div>
                  <p className="mt-3 font-plex-mono text-[7.5px] uppercase leading-relaxed tracking-[0.1em] text-[#123043]/35">
                    Internal study, n=248, 2026. Your mileage may vary. Ours did.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {notes.map((note) => (
                  <figure key={note.id} className="flex flex-col justify-between border border-[#123043]/30 bg-[#fbfdfd]/60 p-5">
                    <div>
                      <p className="font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#c94b38]">{note.id}</p>
                      <blockquote className="mt-4 font-newsreader text-base leading-relaxed text-[#123043]/85">
                        &ldquo;{note.q}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-6 border-t border-[#123043]/15 pt-3 font-plex-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-[#123043]/45">
                      {note.who}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id="request" className="py-14 lg:py-20">
            <div className="grid gap-10 border border-[#123043] bg-[#fbfdfd]/60 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
              <div>
                <p className="font-plex-mono text-[9px] uppercase tracking-[0.22em] text-[#123043]/50">Section 05 / Access</p>
                <h2 className="mt-4 font-instrument text-[clamp(2.4rem,4.4vw,4rem)] leading-[0.92] tracking-tight">
                  Put a document
                  <br />
                  on the bench.
                </h2>
                <p className="mt-5 max-w-md font-newsreader text-base leading-relaxed text-[#123043]/70">
                  First three documents are free, no account. If it is worth keeping, the source
                  stays attached. If it is not, you found out in thirty seconds.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#123043]/45">
                  <span>PDF in</span>
                  <span>Summary out</span>
                  <span>Source preserved</span>
                  <span>No training on your files</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="group flex w-full flex-col items-center justify-center gap-2 border border-dashed border-[#123043]/50 bg-[#e9f1f4] px-6 py-10 text-center transition-colors hover:border-[#0c8aa6] hover:bg-[#0c8aa6]/5"
                >
                  <FileText className="size-7 text-[#0c8aa6]" strokeWidth={1.4} />
                  <span className="font-condensed text-base font-semibold uppercase tracking-[0.08em]">Drop a PDF here</span>
                  <span className="font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">or click to browse · max 500 pp</span>
                </button>
                <div className="mt-3 flex items-center justify-between border border-[#123043] bg-[#123043] px-4 py-3 text-[#e9f1f4]">
                  <span className="font-plex-mono text-[9px] uppercase tracking-[0.16em]">Try without an account</span>
                  <ArrowUpRight className="size-4" />
                </div>
                <p className="mt-3 text-center font-plex-mono text-[7.5px] uppercase tracking-[0.12em] text-[#123043]/35">
                  Fictional product · this button is a demonstration
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#123043]/35 bg-[#dfeaf0]">
          <div className="mx-auto grid max-w-[1240px] gap-6 px-5 py-8 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-end">
            <div>
              <p className="font-instrument text-xl">Ratio Reader</p>
              <p className="mt-1 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#123043]/45">
                Document reduction system · Est. 2026
              </p>
            </div>
            <div className="font-plex-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-[#123043]/50">
              <p>Sheet 02 of 05</p>
              <p>Drawn: Ratio Reader</p>
              <p>Checked: a human, eventually</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-plex-mono text-[8px] uppercase tracking-[0.14em] md:justify-end">
              <span className="text-[#123043]/35">Editions</span>
              {["1", "2", "3", "4", "5"].map((n) => (
                <Link key={n} to={`/${n}`} className={n === "2" ? "text-[#0c8aa6]" : "hover:text-[#0c8aa6]"}>
                  {n.padStart(2, "0")}
                </Link>
              ))}
              <Link to="/" className="underline underline-offset-4 hover:text-[#0c8aa6]">Index</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
