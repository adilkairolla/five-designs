import { Fragment, useEffect, useState } from "react";
import { Reveal } from "../components/reveal";

/*
 * Design 2 — "The Machine"
 * Ratio Reader as a signal-extraction terminal. Phosphor amber on black
 * glass, scanlines, a boot sequence, and a man page. VT323 + IBM Plex Mono.
 */

const BG = "#0C0A05";
const PANEL = "#131008";
const AMBER = "#FFB000";
const DIM = "#8A6A1F";
const FAINT = "#5C4A1E";

const glow = { textShadow: "0 0 14px rgba(255,176,0,0.45)" };

const BOOT_LINES = [
  "$ ratio --ingest dissertation_final_v3.pdf",
  "  parsing 312 pages ............... done [2.1s]",
  "  extracting signal ............... done [9.4s]",
  "  pinning quotes (11) ............. done",
  "  compression ratio ............... 34:1",
  "$ open brief_",
];

function BootSequence() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (line >= BOOT_LINES.length) return;
    const current = BOOT_LINES[line];
    if (chars < current.length) {
      const t = setTimeout(() => setChars((c) => c + 1), current.startsWith("$") ? 38 : 10);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((l) => l + 1);
      setChars(0);
    }, current.startsWith("$") ? 250 : 420);
    return () => clearTimeout(t);
  }, [line, chars]);

  return (
    <div
      className="border bg-black/40 p-5 font-plexmono text-sm leading-relaxed sm:text-base"
      style={{ borderColor: FAINT, minHeight: "11.5rem" }}
      aria-label="terminal boot sequence"
    >
      {BOOT_LINES.slice(0, line).map((l, i) => (
        <p key={i} style={{ color: l.startsWith("$") ? AMBER : DIM }}>
          {l}
        </p>
      ))}
      {line < BOOT_LINES.length && (
        <p style={{ color: BOOT_LINES[line].startsWith("$") ? AMBER : DIM }}>
          {BOOT_LINES[line].slice(0, chars)}
          <span className="inline-block h-4 w-2.5 translate-y-0.5 animate-[blink_1s_steps(1)_infinite]" style={{ background: AMBER }} />
        </p>
      )}
      {line >= BOOT_LINES.length && (
        <p style={{ color: AMBER }}>
          <span className="inline-block h-4 w-2.5 translate-y-0.5 animate-[blink_1s_steps(1)_infinite]" style={{ background: AMBER }} />
        </p>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-plexmono text-xs uppercase tracking-[0.4em]" style={{ color: DIM }}>
      ──[ {children} ]────────────────
    </p>
  );
}

export function Machine() {
  return (
    <main className="crt min-h-screen font-plexmono antialiased selection:bg-[#FFB000] selection:text-black" style={{ background: BG, color: "#E8D5A0" }}>
      {/* roaming scanline */}
      <div
        className="pointer-events-none fixed left-0 z-40 h-24 w-full animate-[scanline_7s_linear_infinite]"
        style={{ background: "linear-gradient(180deg, transparent, rgba(255,176,0,0.045), transparent)" }}
        aria-hidden
      />

      {/* ── Title bar ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b backdrop-blur-sm" style={{ borderColor: FAINT, background: "rgba(12,10,5,0.92)" }}>
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 text-sm">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full border" style={{ borderColor: DIM }} />
            <span className="h-3 w-3 rounded-full border" style={{ borderColor: DIM }} />
            <span className="h-3 w-3 rounded-full" style={{ background: AMBER }} />
          </div>
          <span style={{ color: AMBER, ...glow }}>ratio@reader:~</span>
          <nav className="ml-auto flex gap-5 text-xs sm:text-sm" style={{ color: DIM }}>
            <a href="#pipeline" className="hidden transition-colors hover:text-[#FFB000] md:inline">[pipeline]</a>
            <a href="#man" className="hidden transition-colors hover:text-[#FFB000] sm:inline">[man]</a>
            <a href="#output" className="hidden transition-colors hover:text-[#FFB000] sm:inline">[output]</a>
            <a href="#init" className="transition-colors hover:text-[#FFB000]">[run]</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.5em]" style={{ color: DIM }}>
                Ratio Reader // signal extraction unit
              </p>
              <h1 className="mt-6 font-vt text-[clamp(3.4rem,8.5vw,7rem)] leading-[0.88] uppercase" style={{ color: AMBER, ...glow }}>
                300 pages in.
                <br />
                <span style={{ color: "#E8D5A0", textShadow: "0 0 10px rgba(232,213,160,0.3)" }}>9 insights</span> out.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-md text-base leading-relaxed" style={{ color: "#C9B271" }}>
                Feed it any PDF. The Machine separates signal from filler and returns a brief: the summary, the
                quotes, the hints, the insights. Nothing else survives.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#init"
                  className="border-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] transition-all hover:bg-[#FFB000] hover:text-black hover:shadow-[0_0_30px_rgba(255,176,0,0.5)]"
                  style={{ borderColor: AMBER, color: AMBER }}
                >
                  [ upload pdf_ ]
                </a>
                <a href="#output" className="text-sm underline-offset-4 hover:underline" style={{ color: DIM }}>
                  view sample output →
                </a>
              </div>
              <p className="mt-5 text-xs" style={{ color: FAINT }}>
                drag &amp; drop. no account required for first run.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <BootSequence />
          </Reveal>
        </div>

        {/* stat strip */}
        <Reveal delay={350}>
          <div className="mt-20 grid grid-cols-2 gap-px border md:grid-cols-4" style={{ borderColor: FAINT, background: FAINT }}>
            {[
              ["34:1", "avg compression"],
              ["6.2 hrs", "saved / document"],
              ["11", "quotes pinned, avg"],
              ["0", "pages skimmed in guilt"],
            ].map(([num, label]) => (
              <div key={label} className="p-6 text-center" style={{ background: PANEL }}>
                <p className="font-vt text-4xl md:text-5xl" style={{ color: AMBER, ...glow }}>
                  {num}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em]" style={{ color: DIM }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Pipeline ───────────────────────────────────────────────── */}
      <section id="pipeline" className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <SectionLabel>processing pipeline</SectionLabel>
          <h2 className="mt-4 font-vt text-4xl uppercase md:text-5xl" style={{ color: AMBER, ...glow }}>
            What happens inside
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
          {[
            { tag: "input", title: "document.pdf", body: "Any PDF. Papers, reports, books, scans. The uglier the formatting, the prouder the Machine." },
            { tag: "stage 1", title: "PARSE", body: "Structure recovered: chapters, claims, evidence, asides. Footnotes interrogated." },
            { tag: "stage 2", title: "DISTILL", body: "Signal ranked against noise. Key passages pinned with page coordinates. Filler discarded." },
            { tag: "output", title: "brief.txt", body: "Summary + quotes + hints + insights. Read it in minutes. Sound like you read it for a week." },
          ].map((s, i) => (
            <Fragment key={s.title}>
              {i > 0 && (
                <div className="hidden items-center font-vt text-3xl md:flex" style={{ color: DIM }} aria-hidden>
                  »
                </div>
              )}
              <Reveal delay={i * 140}>
                <div className="h-full border p-5 transition-colors hover:border-[#FFB000]" style={{ borderColor: FAINT, background: PANEL }}>
                  <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: FAINT }}>
                    ┌─ {s.tag}
                  </p>
                  <p className="mt-2 font-vt text-3xl" style={{ color: AMBER }}>
                    {s.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#C9B271" }}>
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </section>

      {/* ── Man page ───────────────────────────────────────────────── */}
      <section id="man" className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <SectionLabel>manual</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 border p-6 md:p-10" style={{ borderColor: FAINT, background: PANEL }}>
            <div className="flex justify-between text-xs uppercase tracking-widest" style={{ color: DIM }}>
              <span>RATIO(1)</span>
              <span className="hidden sm:inline">User Commands</span>
              <span>RATIO(1)</span>
            </div>

            <div className="mt-8 space-y-8 text-sm leading-relaxed">
              <div>
                <h3 className="font-vt text-2xl uppercase tracking-wide" style={{ color: AMBER }}>Name</h3>
                <p className="mt-2 pl-4" style={{ color: "#C9B271" }}>
                  ratio — read the substance of a document, skip the rest
                </p>
              </div>

              <div>
                <h3 className="font-vt text-2xl uppercase tracking-wide" style={{ color: AMBER }}>Synopsis</h3>
                <p className="mt-2 pl-4" style={{ color: "#E8D5A0" }}>
                  ratio [--summary] [--hints] [--quotes] [--insights] <span style={{ color: DIM }}>&lt;file.pdf&gt;</span>
                </p>
              </div>

              <div>
                <h3 className="font-vt text-2xl uppercase tracking-wide" style={{ color: AMBER }}>Options</h3>
                <dl className="mt-3 space-y-5 pl-4">
                  {[
                    ["--summary", "Return the document's core argument in proportion. Default: on. Always on. You can't turn it off. Why would you?"],
                    ["--hints", "Emit guidance for deep reading: where to slow down, what everyone misreads, which chapter quietly contradicts the abstract."],
                    ["--quotes", "Pin verbatim passages with page coordinates. Citation-ready. Plagiarism-proof, because it tells you exactly where it came from."],
                    ["--insights", "Surface what the author implies but never states. The connective tissue between chapters. The part highlighters miss."],
                  ].map(([flag, desc]) => (
                    <div key={flag} className="grid gap-1 md:grid-cols-[140px_1fr] md:gap-6">
                      <dt className="font-semibold" style={{ color: AMBER }}>{flag}</dt>
                      <dd style={{ color: "#C9B271" }}>{desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="font-vt text-2xl uppercase tracking-wide" style={{ color: AMBER }}>Exit status</h3>
                <div className="mt-2 space-y-1 pl-4" style={{ color: "#C9B271" }}>
                  <p><span style={{ color: AMBER }}>0</span>&nbsp;&nbsp;you understood the document</p>
                  <p><span style={{ color: AMBER }}>1</span>&nbsp;&nbsp;the document did not understand itself</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Sample output ──────────────────────────────────────────── */}
      <section id="output" className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <SectionLabel>sample output</SectionLabel>
          <h2 className="mt-4 font-vt text-4xl uppercase md:text-5xl" style={{ color: AMBER, ...glow }}>
            meditations.brief.txt
          </h2>
          <p className="mt-2 text-sm" style={{ color: DIM }}>
            input: Meditations, Marcus Aurelius — 254 pages · output: 96 lines
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 overflow-hidden border" style={{ borderColor: FAINT }}>
            <div className="flex items-center justify-between border-b px-4 py-2 text-xs" style={{ borderColor: FAINT, background: PANEL, color: DIM }}>
              <span>~/briefs/meditations.brief.txt</span>
              <span>-rw-r--r-- · 4.2K</span>
            </div>
            <div className="grid grid-cols-[3rem_1fr] bg-black/40 text-sm leading-7">
              <div className="select-none border-r py-5 text-right pr-3" style={{ borderColor: FAINT, color: FAINT }}>
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="overflow-x-auto py-5 pl-5 pr-4">
                <p style={{ color: AMBER }}># SUMMARY</p>
                <p style={{ color: "#C9B271" }}>You control your judgments, not events. All anxiety is</p>
                <p style={{ color: "#C9B271" }}>negotiation with things outside that control.</p>
                <p>&nbsp;</p>
                <p style={{ color: AMBER }}># QUOTES [pinned]</p>
                <p style={{ color: "#E8D5A0" }}>"We are more often frightened than hurt; and we suffer</p>
                <p style={{ color: "#E8D5A0" }}>more in imagination than in reality." <span style={{ color: DIM }}>· p.84</span></p>
                <p style={{ color: "#E8D5A0" }}>"The obstacle on the path becomes the way." <span style={{ color: DIM }}>· p.121</span></p>
                <p>&nbsp;</p>
                <p style={{ color: AMBER }}># HINTS</p>
                <p style={{ color: "#C9B271" }}>Book 5 reads as repetition — it isn't. He's arguing with</p>
                <p style={{ color: "#C9B271" }}>himself and losing. Slow down there.</p>
                <p>&nbsp;</p>
                <p style={{ color: AMBER }}># INSIGHT</p>
                <p style={{ color: "#C9B271" }}>This was a private journal. Every command is self-directed:</p>
                <p style={{ color: "#C9B271" }}>read "you" as "I" and the whole book changes.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Operator log ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <SectionLabel>operator log</SectionLabel>
        </Reveal>
        <div className="mt-8 space-y-px">
          {[
            ["a3f9c2e", "finally read the 14 papers I'd been hoarding since 2024", "phd candidate, week before defense"],
            ["7b01d4f", "board deck briefing went from sunday night to sunday lunch", "consultant, recovering"],
            ["c92e851", "I quote actual page numbers in seminars now. people flinch", "law student"],
          ].map(([hash, msg, who], i) => (
            <Reveal key={hash} delay={i * 120}>
              <div className="group flex flex-col gap-1 border px-5 py-4 transition-colors hover:border-[#FFB000] sm:flex-row sm:items-baseline sm:gap-5" style={{ borderColor: FAINT, background: PANEL }}>
                <span className="shrink-0 text-xs" style={{ color: AMBER }}>{hash}</span>
                <span className="text-sm" style={{ color: "#E8D5A0" }}>"{msg}"</span>
                <span className="ml-auto shrink-0 text-xs" style={{ color: DIM }}>— {who}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Init CTA ───────────────────────────────────────────────── */}
      <section id="init" className="mx-auto max-w-6xl px-5 py-24 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em]" style={{ color: DIM }}>
            ready when you are
          </p>
          <h2 className="mt-6 font-vt text-[clamp(3rem,9vw,6.5rem)] uppercase leading-none" style={{ color: AMBER, ...glow }}>
            $ ratio init
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed" style={{ color: "#C9B271" }}>
            First three documents are free. The Machine is hungry and your reading list is long.
          </p>
          <a
            href="#"
            className="mt-10 inline-block border-2 px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition-all hover:bg-[#FFB000] hover:text-black hover:shadow-[0_0_40px_rgba(255,176,0,0.55)]"
            style={{ borderColor: AMBER, color: AMBER }}
          >
            [ feed it a pdf ]
          </a>
        </Reveal>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t px-5 py-10 text-center text-xs" style={{ borderColor: FAINT, color: DIM }}>
        <p>ratio reader · signal extraction unit · est. MMXXVI</p>
        <p className="mt-3 font-vt text-2xl" style={{ color: FAINT }}>
          ── EOF ──
        </p>
      </footer>
    </main>
  );
}
