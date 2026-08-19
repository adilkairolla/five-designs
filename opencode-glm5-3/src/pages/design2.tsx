import { useEffect, useState } from "react";
import { useCountUp, useInView, useTyped } from "../lib/hooks";

const GREEN = "text-emerald-300";
const DIM = "text-emerald-900";

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="shrink-0 text-emerald-500">ratio@reader:~$</span>
      <span className="text-emerald-100">{children}</span>
    </div>
  );
}

function Progress({ label, value, delay, active }: { label: string; value: number; delay: number; active: boolean }) {
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setFilled(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  const blocks = 22;
  const filledBlocks = filled ? Math.round((value / 100) * blocks) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="w-56 shrink-0 text-emerald-600">{label}</span>
      <span className="text-emerald-300">
        [{"█".repeat(filledBlocks)}
        <span className={DIM}>{"░".repeat(blocks - filledBlocks)}</span>]
      </span>
      <span className="text-emerald-500">{filled ? `${value}%` : "0%"}</span>
    </div>
  );
}

function BootLines({ active }: { active: boolean }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!active) return;
    const timers = [600, 1200, 1800, 2400, 3000].map((ms, i) =>
      setTimeout(() => setStep(i + 1), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <div className="space-y-2.5 text-sm sm:text-[15px]">
      <Prompt>ratio upload quarterly-report.pdf</Prompt>
      {step >= 1 && (
        <p className="pl-11 text-emerald-600">
          <span className="text-amber-400">[ok]</span> parsing 214 pages · 48,213 tokens
        </p>
      )}
      {step >= 2 && (
        <div className="pl-11">
          <Progress label="ranking importance" value={100} delay={0} active={step >= 2} />
        </div>
      )}
      {step >= 3 && (
        <div className="pl-11">
          <Progress label="extracting quotes" value={100} delay={100} active={step >= 3} />
        </div>
      )}
      {step >= 4 && (
        <p className="pl-11 text-emerald-600">
          <span className="text-amber-400">[ok]</span> signal-to-noise ratio: <span className="text-emerald-300">214:5</span>
        </p>
      )}
      {step >= 5 && (
        <p className="pl-11 text-emerald-100">
          <span className="text-emerald-500">→</span> brief ready. 3 min read.{" "}
          <span className="text-amber-400 underline decoration-dotted underline-offset-4 cursor-pointer">
            open brief
          </span>
          <span className="ml-1 animate-blink text-emerald-300">▊</span>
        </p>
      )}
      {step < 5 && <Prompt><span className="opacity-0">.</span></Prompt>}
    </div>
  );
}

function RatioBar({ active }: { active: boolean }) {
  const noise = useCountUp(11, 1800, active);
  const signal = 100 - noise;
  return (
    <div className="mt-10">
      <div className="flex h-16 overflow-hidden rounded-sm border border-emerald-800/60 font-plexmono text-xs">
        <div
          className="flex items-center justify-center bg-emerald-400 text-emerald-950 transition-[width] duration-1000"
          style={{ width: active ? `${signal}%` : "100%" }}
        >
          SIGNAL {Math.round(signal)}%
        </div>
        <div
          className="flex items-center justify-center overflow-hidden bg-emerald-950 text-emerald-600 transition-[width] duration-1000"
          style={{ width: active ? `${noise}%` : "0%" }}
        >
          NOISE
        </div>
      </div>
      <div className="mt-3 flex justify-between text-xs text-emerald-700">
        <span>what the argument actually needs</span>
        <span>everything else, held for you</span>
      </div>
    </div>
  );
}

const specs = [
  ["INPUT", "any PDF · text, scans, tables, footnotes"],
  ["OUTPUT", "brief · quotes w/ page cites · hints · insights"],
  ["LATENCY", "~30 sec for 200 pages"],
  ["MAX SIZE", "500 MB · 2,000 pages"],
  ["STORAGE", "none · your files are deleted after distilling"],
  ["COST", "first 3 briefs free · then $8/mo"],
];

const modules = [
  {
    name: "mod/summary",
    desc: "The argument, compressed. Every brief opens with the one paragraph the author spent 200 pages building.",
    sample: "> summary --one-paragraph\n\"Logistics is becoming a software business; margins follow the orchestration layer.\"",
  },
  {
    name: "mod/quotes",
    desc: "Key passages lifted verbatim, each cited to its page. Quote the report without reading the report.",
    sample: "> quotes --top-3\n[12] \"The market is consolidating around platforms…\"\n[47] \"CAC tripled while LTV grew 40%…\"",
  },
  {
    name: "mod/hints",
    desc: "Reading guidance before you dive: which section to start with, which appendix contradicts the body.",
    sample: "> hints\nstart: appendix B (contradicts §3)\nskip: §5 — methodology only",
  },
  {
    name: "mod/insights",
    desc: "Connections the author didn't spell out — tensions in the data, assumptions worth doubting.",
    sample: "> insights\n- growth claims lean on 2022 data\n- the one chart that matters: p.96",
  },
];

export function Design2() {
  const { ref: heroRef, inView: heroInView } = useInView<HTMLDivElement>(0.3);
  const typed = useTyped("ratio upload quarterly-report.pdf", 55, 400, true);
  const { ref: ratioRef, inView: ratioInView } = useInView<HTMLDivElement>(0.4);

  return (
    <div className="animate-flicker relative min-h-screen bg-[#050807] font-plexmono text-emerald-200 antialiased selection:bg-emerald-400 selection:text-emerald-950">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(80, 250, 160, 0.25) 2px, rgba(80, 250, 160, 0.25) 4px)",
        }}
      />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-40 animate-scanline bg-gradient-to-b from-transparent via-emerald-400/[0.04] to-transparent" />

      <header className="sticky top-0 z-40 border-b border-emerald-900/60 bg-[#050807]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 text-xs sm:px-8 sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            <span className={`font-semibold tracking-widest ${GREEN}`}>
              RATIO<span className="text-emerald-600">·</span>READER
            </span>
            <span className="hidden text-emerald-800 sm:inline">v2.4.1</span>
          </div>
          <nav className="hidden gap-6 text-emerald-700 md:flex">
            {["/how-it-works", "/modules", "/spec", "/run"].map((item) => (
              <a key={item} href={item} className="transition-colors hover:text-emerald-300">
                {item.slice(1)}
              </a>
            ))}
          </nav>
          <a
            href="#run"
            className="border border-emerald-400 px-4 py-1.5 text-emerald-300 transition-all hover:bg-emerald-400 hover:text-emerald-950"
          >
            $ run --free
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-xs tracking-[0.3em] text-emerald-600">
              session 0x3F2A · upload → distill → understand
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-emerald-100 sm:text-6xl">
              200 pages in.
              <br />
              <span className="text-emerald-400">5 pages out.</span>
              <span className="ml-2 inline-block h-9 w-4 animate-blink bg-emerald-400 align-baseline sm:h-14 sm:w-5" />
            </h1>
            <p className="mt-7 max-w-md leading-relaxed text-emerald-700">
              Ratio Reader computes the signal-to-noise ratio of your PDFs. You get the summary of what matters, key
              quotes cited to the page, hints, and insights — in about thirty seconds.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#run"
                className="bg-emerald-400 px-7 py-3.5 text-emerald-950 transition-all hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)]"
              >
                $ upload pdf →
              </a>
              <a
                href="#modules"
                className="border border-emerald-800 px-7 py-3.5 text-emerald-400 transition-colors hover:border-emerald-400"
              >
                cat modules
              </a>
            </div>
            <p className="mt-6 text-xs text-emerald-800">
              # no signup · no storage · first 3 briefs free
            </p>
          </div>

          <div ref={heroRef} className="relative">
            <div className="rounded-sm border border-emerald-800/70 bg-black/50 shadow-[0_0_60px_-15px_rgba(52,211,153,0.25)]">
              <div className="flex items-center justify-between border-b border-emerald-900/60 px-4 py-2.5 text-xs">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-800" />
                  <span className="h-3 w-3 rounded-full bg-emerald-800" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-emerald-700">ratio-reader — zsh</span>
              </div>
              <div className="p-5 text-[13px] leading-relaxed sm:p-7">
                {typed.done ? (
                  <BootLines active={heroInView} />
                ) : (
                  <Prompt>
                    {typed.output}
                    <span className="animate-blink text-emerald-300">▊</span>
                  </Prompt>
                )}
              </div>
            </div>
            <p className="mt-3 text-right text-xs text-emerald-800">^ actual output, sped up 4×</p>
          </div>
        </div>
      </section>

      <section ref={ratioRef} className="border-y border-emerald-900/60 bg-emerald-950/20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-2xl font-semibold tracking-tight text-emerald-100 sm:text-4xl">
              The metric: <span className="text-amber-400">signal : noise</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-emerald-700">
              Every PDF is mostly noise — boilerplate, filler, restated points. Ratio Reader separates the two and shows
              you the split.
            </p>
          </div>
          <RatioBar active={ratioInView} />
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs tracking-[0.3em] text-emerald-600">// four modules, one brief</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-emerald-100 sm:text-4xl">
          What the engine emits
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {modules.map((m) => (
            <div
              key={m.name}
              className="group rounded-sm border border-emerald-900/70 bg-black/40 p-6 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-950/30 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.35)]"
            >
              <p className="text-sm font-semibold text-amber-400">
                <span className="mr-2 text-emerald-600">┌─</span>
                {m.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-emerald-700">{m.desc}</p>
              <pre className="mt-4 overflow-x-auto rounded-sm border border-emerald-900/60 bg-[#030504] p-4 text-xs leading-relaxed whitespace-pre-wrap text-emerald-500 transition-colors group-hover:text-emerald-400">
                {m.sample}
              </pre>
            </div>
          ))}
        </div>
      </section>

      <section id="spec" className="border-y border-emerald-900/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs tracking-[0.3em] text-emerald-600">// datasheet</p>
          <div className="mt-8 border-t border-emerald-900/60">
            {specs.map(([k, v]) => (
              <div
                key={k}
                className="group grid grid-cols-[110px_1fr] gap-4 border-b border-emerald-900/60 py-4 text-sm transition-colors hover:bg-emerald-950/40 sm:grid-cols-[180px_1fr]"
              >
                <span className="text-emerald-600 transition-colors group-hover:text-amber-400">{k}</span>
                <span className="text-emerald-300">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="run" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-sm border border-emerald-800/70 bg-gradient-to-b from-emerald-950/40 to-black/60 px-6 py-16 text-center sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 0%, rgba(52,211,153,0.35), transparent 60%)",
            }}
          />
          <p className="relative text-xs tracking-[0.3em] text-emerald-600">$ run ratio-reader --free</p>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-emerald-100 sm:text-5xl">
            Your PDFs called.
            <br />
            They want to be <span className="text-amber-400">shorter.</span>
          </h2>
          <a
            href="#"
            className="relative mt-9 inline-block bg-emerald-400 px-10 py-4 text-lg font-semibold text-emerald-950 transition-all hover:bg-emerald-300 hover:shadow-[0_0_60px_-10px_rgba(52,211,153,0.6)]"
          >
            upload pdf → get brief
          </a>
          <p className="relative mt-6 text-xs text-emerald-800">
            # ~30 seconds · nothing stored · first 3 free
          </p>
        </div>
      </section>

      <footer className="border-t border-emerald-900/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-emerald-800 sm:flex-row sm:items-center sm:px-8">
          <p>
            <span className="text-emerald-600">status:</span> operational ·{" "}
            <span className="text-emerald-600">uptime:</span> 99.98% ·{" "}
            <span className="text-emerald-600">pdfs distilled:</span> 12,408
          </p>
          <p className="text-emerald-900">© 2026 ratio-reader — all signal, no noise</p>
        </div>
      </footer>
    </div>
  );
}
