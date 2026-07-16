import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

const INK = "#0B0B0B";
const BLUE = "#2337FF";
const LINE = "rgba(11,11,11,0.9)";

function Cross({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute select-none text-sm font-light leading-none ${className}`}
      style={{ color: "rgba(11,11,11,0.45)" }}
      aria-hidden
    >
      +
    </span>
  );
}

function VerticalLabel({ children }: { children: string }) {
  return (
    <span className="vertical-rl hidden text-[10px] font-semibold uppercase tracking-[0.4em] text-black/50 lg:block">
      {children}
    </span>
  );
}

export function Design4() {
  return (
    <div className="min-h-screen bg-white font-archivo" style={{ color: INK }}>
      {/* ─────────── top bar ─────────── */}
      <header className="border-b" style={{ borderColor: LINE }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          <div className="border-r px-5 py-4 text-xs font-bold uppercase tracking-[0.25em]" style={{ borderColor: LINE }}>
            Ratio—Reader
          </div>
          <div className="hidden px-5 py-4 text-xs uppercase tracking-[0.25em] text-black/60 md:block" style={{ borderColor: LINE }}>
            Document compression system
          </div>
          <div className="hidden border-l px-5 py-4 text-xs uppercase tracking-[0.25em] text-black/60 md:block" style={{ borderColor: LINE }}>
            Edition 01 — 2026
          </div>
          <a
            href="#order"
            className="border-l px-5 py-4 text-right text-xs font-bold uppercase tracking-[0.25em] transition-colors md:text-center"
            style={{ borderColor: LINE, background: BLUE, color: "white" }}
          >
            Start →
          </a>
        </div>
      </header>

      {/* ─────────── masthead ─────────── */}
      <section className="relative border-b" style={{ borderColor: LINE }}>
        <Cross className="left-3 top-3" />
        <Cross className="right-3 top-3" />
        <Cross className="bottom-3 left-3" />
        <Cross className="bottom-3 right-3" />
        <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-10 md:pt-16">
          <Reveal>
            <div className="flex items-start justify-between gap-6">
              <h1
                className="font-black uppercase leading-[0.78] tracking-[-0.04em]"
                style={{ fontSize: "clamp(4.5rem, 17.5vw, 17rem)", fontStretch: "125%" }}
              >
                Ratio
              </h1>
              <VerticalLabel>Fig. 0 — The wordmark, expanded</VerticalLabel>
            </div>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
              <p
                className="font-black uppercase leading-none tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.6rem, 4.5vw, 4rem)", fontStretch: "115%", color: BLUE }}
              >
                — Reader
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-black/70">
                A PDF enters. Its essence remains. Ratio Reader is a precision
                instrument for compressing documents into their important
                parts — nothing more, nothing less.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── hero split ─────────── */}
      <section className="border-b" style={{ borderColor: LINE }}>
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12">
          <div className="relative border-b px-5 py-14 md:col-span-8 md:border-b-0 md:border-r md:py-20" style={{ borderColor: LINE }}>
            <Cross className="left-3 top-3" />
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em]" style={{ color: BLUE }}>
                Statement — 001
              </p>
              <h2
                className="mt-6 font-bold uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4.6vw, 4.2rem)" }}
              >
                Reading is a
                <br />
                compression
                <br />
                problem<span style={{ color: BLUE }}>.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-black/70">
                You do not lack intelligence. You lack hours. Ratio Reader
                uploads a PDF and returns a brief — summary, hints, quotes,
                insights — engineered so six pages carry the weight of two
                hundred.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#order"
                  className="inline-flex items-center gap-3 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors"
                  style={{ background: INK }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = BLUE)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = INK)}
                >
                  Upload a PDF <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#index"
                  className="inline-flex items-center gap-3 border px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-colors hover:bg-black hover:text-white"
                  style={{ borderColor: LINE }}
                >
                  The index
                </a>
              </div>
            </Reveal>
          </div>

          {/* spec sheet */}
          <div className="relative md:col-span-4">
            <Cross className="right-3 top-3" />
            <Reveal delay={150}>
              <div className="px-5 py-10 md:py-14">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-black/50">
                  Specification
                </p>
                <table className="mt-6 w-full text-sm">
                  <tbody>
                    {[
                      ["Input", "Any .pdf"],
                      ["Output", "Essence"],
                      ["Throughput", "240 pages / min"],
                      ["Distill time", "4.2 seconds"],
                      ["Fidelity", "Faithful, cited"],
                      ["Fluff tolerance", "0.00 %"],
                    ].map(([k, v], i) => (
                      <tr key={k} className={i !== 0 ? "border-t" : ""} style={{ borderColor: "rgba(11,11,11,0.25)" }}>
                        <td className="py-3 pr-4 text-black/55">{k}</td>
                        <td className="py-3 text-right font-bold tabular-nums" style={v === "Essence" ? { color: BLUE } : undefined}>
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* geometric diagram */}
                <svg viewBox="0 0 200 120" className="mt-10 w-full" aria-hidden>
                  <rect x="4" y="10" width="70" height="100" fill="none" stroke={INK} strokeWidth="2" />
                  <line x1="16" y1="26" x2="62" y2="26" stroke={INK} strokeWidth="2" />
                  <line x1="16" y1="38" x2="62" y2="38" stroke={INK} strokeWidth="2" />
                  <line x1="16" y1="50" x2="54" y2="50" stroke={INK} strokeWidth="2" />
                  <line x1="16" y1="62" x2="62" y2="62" stroke={INK} strokeWidth="2" />
                  <line x1="16" y1="74" x2="46" y2="74" stroke={INK} strokeWidth="2" />
                  <line x1="84" y1="60" x2="112" y2="60" stroke={BLUE} strokeWidth="2" />
                  <path d="M108 52l12 8-12 8z" fill={BLUE} />
                  <rect x="130" y="34" width="52" height="52" fill={BLUE} />
                  <line x1="140" y1="50" x2="172" y2="50" stroke="white" strokeWidth="2" />
                  <line x1="140" y1="60" x2="166" y2="60" stroke="white" strokeWidth="2" />
                  <line x1="140" y1="70" x2="158" y2="70" stroke="white" strokeWidth="2" />
                </svg>
                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-black/45">
                  Fig. 1 — Compression, to scale
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── index 01–03 ─────────── */}
      <section id="index" className="border-b" style={{ borderColor: LINE }}>
        {[
          {
            n: "01",
            title: "Upload",
            body: "One gesture. The document crosses the threshold whole — thesis, contract, report — and is never altered, only read.",
            meta: "T-minus 4.2s",
          },
          {
            n: "02",
            title: "Distill",
            body: "Every argument is weighed. Evidence is located and pinned. Passages of consequence are lifted verbatim, cited to the page.",
            meta: "240 pages / min",
          },
          {
            n: "03",
            title: "Understand",
            body: "You receive the brief: the summary, the hints for hard passages, the quotes worth keeping, the insights between the lines.",
            meta: "6 pages out",
          },
        ].map((s, i) => (
          <div key={s.n} className={i !== 0 ? "border-t" : ""} style={{ borderColor: LINE }}>
            <div className="mx-auto grid max-w-[1400px] md:grid-cols-12">
              <div className="flex items-start justify-between border-b px-5 py-8 md:col-span-3 md:border-b-0 md:border-r md:py-12" style={{ borderColor: LINE }}>
                <Reveal>
                  <span
                    className="font-black tabular-nums leading-none"
                    style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: i === 1 ? BLUE : INK }}
                  >
                    {s.n}
                  </span>
                </Reveal>
                <VerticalLabel>{`Procedure ${s.n} / 03`}</VerticalLabel>
              </div>
              <div className="px-5 py-8 md:col-span-6 md:border-r md:py-12" style={{ borderColor: LINE }}>
                <Reveal delay={80}>
                  <h3 className="text-2xl font-bold uppercase tracking-tight md:text-4xl" style={{ fontStretch: "115%" }}>
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-black/70">{s.body}</p>
                </Reveal>
              </div>
              <div className="hidden items-end justify-between px-5 py-12 md:col-span-3 md:flex">
                <Reveal delay={140}>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/50">{s.meta}</p>
                </Reveal>
                <span className="h-3 w-3" style={{ background: i === 1 ? BLUE : INK }} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─────────── instruments table ─────────── */}
      <section className="border-b" style={{ borderColor: LINE }}>
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:py-20">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl" style={{ fontStretch: "120%" }}>
                Instruments
              </h2>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-black/50">
                04 units — standard
              </p>
            </div>
          </Reveal>
          <div className="mt-10">
            {[
              ["A", "Summaries", "Every argument, ranked and re-set in plain language."],
              ["B", "Hints", "Guidance precisely where the prose turns difficult."],
              ["C", "Quotes", "Verbatim passages, cited to their page, export-ready."],
              ["D", "Insights", "Contradictions, themes, and the question behind the text."],
            ].map(([k, name, desc], i) => (
              <Reveal key={k} delay={i * 60}>
                <a
                  href="#order"
                  className="group grid grid-cols-[40px_1fr_32px] items-center gap-4 border-t py-6 transition-colors last:border-b hover:bg-[#F4F4F4] md:grid-cols-[60px_280px_1fr_40px] md:gap-8"
                  style={{ borderColor: LINE }}
                >
                  <span className="text-sm font-bold" style={{ color: BLUE }}>{k}</span>
                  <span className="text-xl font-bold uppercase tracking-tight md:text-2xl">{name}</span>
                  <span className="col-span-3 pl-14 text-sm leading-relaxed text-black/65 md:col-span-1 md:pl-0">
                    {desc}
                  </span>
                  <ArrowUpRight className="hidden h-5 w-5 justify-self-end transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block" style={{ color: BLUE }} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── stats band ─────────── */}
      <section className="border-b" style={{ borderColor: LINE, background: BLUE, color: "white" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {[
            ["240", "pages per minute"],
            ["94%", "reading time saved"],
            ["12×", "faster than skimming"],
            ["0", "fluff emitted"],
          ].map(([v, l], i) => (
            <div
              key={l}
              className={`px-5 py-10 text-center md:py-14 ${i !== 0 ? "border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              <Reveal delay={i * 80}>
                <p className="text-5xl font-black tabular-nums tracking-tight md:text-6xl">{v}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.3em] opacity-80">{l}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── order / pricing ─────────── */}
      <section id="order" className="border-b" style={{ borderColor: LINE }}>
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:py-20">
          <Reveal>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl" style={{ fontStretch: "120%" }}>
              Order form
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="border-y text-left" style={{ borderColor: LINE }}>
                    <th className="py-4 pr-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/50">Tier</th>
                    <th className="py-4 pr-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/50">Price</th>
                    <th className="py-4 pr-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/50">Briefs</th>
                    <th className="py-4 pr-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/50">Instruments</th>
                    <th className="py-4 text-right text-[11px] font-bold uppercase tracking-[0.3em] text-black/50">—</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Reader", "$0 / mo", "3 / month", "Summaries · Quotes", false],
                    ["Scholar", "$9 / mo", "Unlimited", "All four · Ledger · API", true],
                    ["Institution", "Bespoke", "Unlimited", "All · Team seats · SSO", false],
                  ].map(([tier, price, briefs, inst, hot]) => (
                    <tr key={tier as string} className="border-b transition-colors hover:bg-[#F4F4F4]" style={{ borderColor: LINE }}>
                      <td className="py-5 pr-4 text-base font-bold uppercase">
                        {tier as string}
                        {hot ? <span className="ml-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white" style={{ background: BLUE }}>Standard</span> : null}
                      </td>
                      <td className="py-5 pr-4 font-bold tabular-nums" style={{ color: BLUE }}>{price as string}</td>
                      <td className="py-5 pr-4 text-black/70">{briefs as string}</td>
                      <td className="py-5 pr-4 text-black/70">{inst as string}</td>
                      <td className="py-5 text-right">
                        <a href="#" className="inline-flex items-center gap-2 border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors hover:bg-black hover:text-white" style={{ borderColor: LINE }}>
                          Select <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── footer ─────────── */}
      <footer>
        <div className="mx-auto max-w-[1400px] px-5 py-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <p className="font-black uppercase leading-[0.8] tracking-[-0.03em]" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", fontStretch: "125%" }}>
              Ratio<span style={{ color: BLUE }}>.</span>
            </p>
            <div className="text-right text-[11px] font-bold uppercase leading-loose tracking-[0.3em] text-black/55">
              <p>Set in Archivo — 12-column grid</p>
              <p>50.0809° N, 8.2470° E — 2026</p>
              <p>
                <a href="/" className="transition-colors" style={{ color: BLUE }}>
                  Other editions →
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
