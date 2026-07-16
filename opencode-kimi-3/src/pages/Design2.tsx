import { useEffect, useState } from "react";
import {
  Braces,
  FileUp,
  Gauge,
  Lightbulb,
  Quote,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { Reveal } from "../components/Reveal";

const G = "#4AF626"; // phosphor green
const DIM = "#2E8B3D";
const AMBER = "#FFB000";
const FAINT = "#173A1C";

/* ─────────── typed terminal session ─────────── */
const SCRIPT: { text: string; cls?: string }[] = [
  { text: "guest@ratio:~$ ratio ingest market-report-2026.pdf", cls: "cmd" },
  { text: "reading 214 pages … ok", cls: "dim" },
  { text: "ranking arguments by consequence … ok", cls: "dim" },
  { text: "[████████████████████] 100% — 4.2s", cls: "bar" },
  { text: "" },
  { text: "[SUMMARY]", cls: "tag" },
  { text: "  Growth concentrated in 3 segments; margins fell despite" },
  { text: "  record revenue. Logistics now the binding constraint." },
  { text: "" },
  { text: "[HINT] p.41 — “adjusted EBIT” excludes warehousing;", cls: "tag" },
  { text: "  compare against appendix C before quoting.", cls: "dim" },
  { text: "" },
  { text: "[QUOTE] p.87", cls: "tag" },
  { text: "  “The future belongs to those who read the" },
  { text: "   important parts.”" },
  { text: "" },
  { text: "[INSIGHT] revenue up +22% while headcount flat →", cls: "tag" },
  { text: "  automation thesis, never stated outright.", cls: "dim" },
  { text: "" },
  { text: "ledger: 214 pages in · 6 pages out · 3h 12m returned", cls: "amber" },
  { text: "guest@ratio:~$ █", cls: "cmd" },
];

function useTypewriter() {
  const [progress, setProgress] = useState(0);
  const total = SCRIPT.reduce((n, l) => n + l.text.length + 5, 0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= total + 90 ? 0 : p + 1));
    }, 26);
    return () => clearInterval(id);
  }, [total]);

  return { progress, total };
}

/* start offset (in chars) of each line within the script */
const OFFSETS: number[] = (() => {
  let acc = 0;
  return SCRIPT.map((l) => {
    const start = acc;
    acc += l.text.length + 5;
    return start;
  });
})();

function TerminalDemo() {
  const { progress } = useTypewriter();

  return (
    <div className="border border-[#1F5B2A] bg-[#060B06] shadow-[0_0_60px_rgba(74,246,38,0.12)]">
      <div className="flex items-center gap-2 border-b border-[#1F5B2A] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full border border-[#2E8B3D]" />
        <span className="h-2.5 w-2.5 rounded-full border border-[#2E8B3D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4AF626]" />
        <span className="ml-3 text-[10px] uppercase tracking-[0.3em] text-[#2E8B3D]">
          ratio — ingestion session
        </span>
      </div>
      <div className="h-[380px] overflow-hidden p-4 text-left text-[11px] leading-[1.7] sm:text-xs md:h-[420px]">
        {SCRIPT.map((line, i) => {
          const start = OFFSETS[i];
          const shown = Math.max(0, Math.min(line.text.length, progress - start));
          const visible = shown > 0 || line.text === "";
          if (!visible && progress <= start) return null;
          const color =
            line.cls === "cmd"
              ? "text-[#8FFF7A]"
              : line.cls === "dim"
                ? "text-[#2E8B3D]"
                : line.cls === "tag"
                  ? "text-[#FFB000]"
                  : line.cls === "amber"
                    ? "text-[#FFB000]"
                    : line.cls === "bar"
                      ? "text-[#4AF626]"
                      : "text-[#4AF626]";
          return (
            <div key={i} className={`${color} whitespace-pre-wrap`}>
              {line.text.slice(0, shown)}
            </div>
          );
        })}
        <span className="animate-blink inline-block h-3.5 w-2 bg-[#4AF626]" />
      </div>
    </div>
  );
}

function SectionHead({ cmd, title }: { cmd: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-10">
        <p className="text-xs" style={{ color: DIM }}>
          <span style={{ color: G }}>$</span> {cmd}
        </p>
        <h2
          className="crt-glow mt-2 text-2xl font-bold uppercase tracking-tight md:text-4xl"
          style={{ color: G }}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

export function Design2() {
  return (
    <div
      className="min-h-screen font-jetbrains"
      style={{ background: "#040704", color: G }}
    >
      <div className="scanlines" />
      <div className="crt-vignette" />

      {/* ─────────── nav ─────────── */}
      <header className="relative z-10 border-b" style={{ borderColor: FAINT }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <TerminalSquare className="h-5 w-5" style={{ color: G }} />
            <span className="text-sm font-bold tracking-widest">RATIO://OS</span>
            <span className="hidden text-[10px] sm:inline" style={{ color: DIM }}>
              v2.4.1
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.2em] md:flex" style={{ color: DIM }}>
            <a href="#man" className="transition-colors hover:text-[#4AF626]">man</a>
            <a href="#opts" className="transition-colors hover:text-[#4AF626]">options</a>
            <a href="#log" className="transition-colors hover:text-[#4AF626]">log</a>
            <a href="#license" className="transition-colors hover:text-[#4AF626]">license</a>
          </nav>
          <a
            href="#license"
            className="border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#4AF626] hover:text-black"
            style={{ borderColor: G, color: G }}
          >
            [ install ]
          </a>
        </div>
      </header>

      {/* ─────────── hero ─────────── */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-14 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs md:text-sm" style={{ color: DIM }}>
                <span style={{ color: AMBER }}>guest@ratio</span>
                <span>:</span>
                <span style={{ color: "#7FB3FF" }}>~</span>
                <span>$ </span>
                <span style={{ color: G }}>./read_less --know-more</span>
                <span className="animate-blink ml-1 inline-block h-3 w-2 align-middle" style={{ background: G }} />
              </p>
              <h1
                className="crt-glow mt-6 font-bold uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", color: G }}
              >
                Read less.
                <br />
                <span style={{ color: AMBER, textShadow: "0 0 12px rgba(255,176,0,0.5)" }}>
                  Know more.
                </span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed md:text-base" style={{ color: DIM }}>
                ratio(1) ingests any PDF and returns its essence — summaries,
                hints, quotes, insights — printed to standard out in under
                five seconds. No GUI. No mercy. No fluff.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#license"
                  className="flex items-center gap-3 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:shadow-[0_0_30px_rgba(74,246,38,0.5)]"
                  style={{ background: G }}
                >
                  <FileUp className="h-4 w-4" />
                  [ upload pdf ]
                </a>
                <a
                  href="#man"
                  className="border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#0A1F0C]"
                  style={{ borderColor: FAINT, color: DIM }}
                >
                  [ man ratio ]
                </a>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t pt-6 text-[11px]" style={{ borderColor: FAINT, color: DIM }}>
                <div>
                  <p className="text-lg font-bold" style={{ color: G }}>4.2s</p>
                  avg. ingest
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: G }}>97%</p>
                  pages skipped
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: G }}>0</p>
                  fluff emitted
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <TerminalDemo />
          </Reveal>
        </div>
      </section>

      {/* ─────────── man page ─────────── */}
      <section id="man" className="relative z-10 border-t" style={{ borderColor: FAINT, background: "#060B06" }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHead cmd="man ratio" title="Manual page" />
          <Reveal>
            <div className="border p-6 text-xs leading-[2] md:p-10 md:text-sm" style={{ borderColor: FAINT, background: "#040704" }}>
              <p style={{ color: DIM }}>RATIO(1) <span className="mx-4">User Commands</span> RATIO(1)</p>
              <p className="mt-6 font-bold" style={{ color: G }}>NAME</p>
              <p className="pl-6" style={{ color: "#C9FFD0" }}>ratio — distill a PDF into its essential reading</p>
              <p className="mt-5 font-bold" style={{ color: G }}>SYNOPSIS</p>
              <p className="pl-6" style={{ color: "#C9FFD0" }}>
                <span className="font-bold">ratio</span> [<span style={{ color: AMBER }}>-shqi</span>] <span className="underline">file.pdf</span>
              </p>
              <p className="mt-5 font-bold" style={{ color: G }}>DESCRIPTION</p>
              <p className="pl-6 max-w-3xl" style={{ color: "#C9FFD0" }}>
                ratio reads a document the way a careful editor would: marking
                the argument's spine, noting where evidence gathers, lifting
                the lines worth keeping. It prints a brief to standard output.
                The brief is faithful. The brief is short. The brief is final.
              </p>
              <p className="mt-5 font-bold" style={{ color: G }}>EXIT STATUS</p>
              <p className="pl-6" style={{ color: "#C9FFD0" }}>0 — you understood the document. 1 — the document was a scanned image of a napkin.</p>
              <p className="mt-6" style={{ color: DIM }}>ratio 2.4.1 <span className="mx-4">2026-07-17</span> RATIO(1)</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── options ─────────── */}
      <section id="opts" className="relative z-10 border-t" style={{ borderColor: FAINT }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHead cmd="ratio --help" title="Options" />
          <div className="grid gap-px border md:grid-cols-2" style={{ borderColor: FAINT, background: FAINT }}>
            {[
              { flag: "-s, --summary", icon: Braces, body: "Print the document's spine in plain language. Chapters collapse into paragraphs; paragraphs into defensible sentences." },
              { flag: "-h, --hints", icon: Lightbulb, body: "Emit a lantern wherever the prose grows thorny: context, definitions, and the one sentence to read twice." },
              { flag: "-q, --quotes", icon: Quote, body: "Lift verbatim passages worth keeping, each cited to its page. Pipe straight into your notes or your deck." },
              { flag: "-i, --insights", icon: Sparkles, body: "Surface what the author never stated: contradictions, recurring themes, the question the text is really asking." },
              { flag: "--ledger", icon: Gauge, body: "Append an honest accounting: pages read, pages spared, hours returned to your life. On by default." },
              { flag: "--no-mercy", icon: TerminalSquare, body: "Remove the three sentences of encouragement we normally prepend. For experienced readers only." },
            ].map((o, i) => (
              <Reveal key={o.flag} delay={i * 60}>
                <div className="group h-full p-6 transition-colors md:p-8" style={{ background: "#040704" }}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold" style={{ color: AMBER }}>{o.flag}</p>
                    <o.icon className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color: DIM }} />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed md:text-sm" style={{ color: "#8FD89A" }}>
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── log / testimonials ─────────── */}
      <section id="log" className="relative z-10 border-t" style={{ borderColor: FAINT, background: "#060B06" }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHead cmd="tail -n 3 /var/log/praise.log" title="System log" />
          <Reveal>
            <div className="border p-6 text-[11px] leading-[2.1] md:p-10 md:text-xs" style={{ borderColor: FAINT, background: "#040704" }}>
              <p>
                <span style={{ color: DIM }}>2026-07-11T23:04:12Z</span>{" "}
                <span className="font-bold" style={{ color: AMBER }}>[OKAFOR-A]</span>{" "}
                <span style={{ color: "#C9FFD0" }}>ingested doctoral thesis (196p) at 23:00. brief returned before the kettle boiled. supervisor: “who wrote this?”</span>
              </p>
              <p>
                <span style={{ color: DIM }}>2026-07-13T09:15:40Z</span>{" "}
                <span className="font-bold" style={{ color: AMBER }}>[LINDQVIST-R]</span>{" "}
                <span style={{ color: "#C9FFD0" }}>board meeting opened with ratio brief. alignment phase: 0 min. first time since 2019.</span>
              </p>
              <p>
                <span style={{ color: DIM }}>2026-07-16T14:52:03Z</span>{" "}
                <span className="font-bold" style={{ color: AMBER }}>[TANAKA-M]</span>{" "}
                <span style={{ color: "#C9FFD0" }}>contract dispute resolved via --quotes. answer was on p.41. it usually is.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── license / pricing ─────────── */}
      <section id="license" className="relative z-10 border-t" style={{ borderColor: FAINT }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHead cmd="ratio license --list" title="License tiers" />
          <Reveal>
            <div className="overflow-x-auto">
              <pre className="min-w-[640px] border p-6 text-[10px] leading-[1.9] sm:text-xs md:p-10" style={{ borderColor: FAINT, background: "#040704", color: "#8FD89A" }}>
{`┌──────────────────┬────────────┬─────────────────────────────────────┐
│ TIER             │ PRICE      │ INCLUDES                            │
├──────────────────┼────────────┼─────────────────────────────────────┤
│ READER           │ $0  /mo    │ 3 briefs · summaries · quotes       │
│ `}<span style={{ color: G }}>{`SCHOLAR  ◄──────`}</span>{` │ `}<span style={{ color: G }}>{`$9  /mo   `}</span>{` │ `}<span style={{ color: G }}>{`unlimited · all flags · ledger · api `}</span>{`│
│ INSTITUTION      │ bespoke    │ libraries · teams · dedicated node  │
└──────────────────┴────────────┴─────────────────────────────────────┘`}
              </pre>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:shadow-[0_0_40px_rgba(74,246,38,0.6)]"
                style={{ background: G }}
              >
                [ sudo apt install ratio ]
              </a>
              <p className="text-[11px]" style={{ color: DIM }}>
                // no root required. no card required for READER tier.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── footer + status bar ─────────── */}
      <footer className="relative z-10 border-t pb-20" style={{ borderColor: FAINT }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
          <p className="crt-glow text-sm font-bold tracking-[0.3em]" style={{ color: G }}>
            RATIO://OS
          </p>
          <p className="max-w-md text-[11px] leading-relaxed" style={{ color: DIM }}>
            EOF. this page rendered 0 images and 100% of its meaning. set in
            jetbrains mono on a simulated phosphor display.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.25em]" style={{ color: DIM }}>
            <a href="#man" className="hover:text-[#4AF626]">man</a>
            <a href="#opts" className="hover:text-[#4AF626]">options</a>
            <a href="#license" className="hover:text-[#4AF626]">license</a>
            <a href="/" className="hover:text-[#4AF626]">exit</a>
          </div>
        </div>
      </footer>

      {/* fixed status bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[70] border-t text-[10px] uppercase tracking-[0.15em]"
        style={{ borderColor: FAINT, background: "#040704", color: DIM }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5">
          <span>
            <span style={{ color: G }}>●</span> ratio 2.4.1 — NORMAL
          </span>
          <span className="hidden sm:inline">utf-8 · mono · pdf: ready</span>
          <span>
            mem: 42M <span style={{ color: AMBER }}>▮</span>
          </span>
        </div>
      </div>
    </div>
  );
}
