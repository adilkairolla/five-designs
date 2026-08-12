import "@fontsource-variable/jetbrains-mono";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const GREEN = "#7dff9b";
const AMBER = "#ffc24b";
const BG = "#07090b";
const PANEL = "#0c1013";

function useTypewriter(text: string, speed = 24, startDelay = 400) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && interval) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return out;
}

function Bar({ label, width, delay, color = GREEN }: { label: string; width: string; delay: number; color?: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] md:text-xs">
      <span className="w-28 shrink-0 text-[#5d6b72]">{label}</span>
      <div className="h-3.5 flex-1 border border-[#2a333a] bg-[#05070a] p-[2px]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
          className="h-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}66` }}
        />
      </div>
      <span className="w-12 shrink-0 text-right" style={{ color }}>{width}</span>
    </div>
  );
}

const modules = [
  {
    cmd: "summary.distill",
    out: "the spine of the argument",
    desc: "Not a wall of text. The document's spine — thesis, stakes, conclusions — measured to the sentence. Everything else is marked as what it is: context.",
  },
  {
    cmd: "hints.margin",
    out: "47 load-bearing sentences flagged",
    desc: "Hints tell you which passages unlock later chapters, which claims need scrutiny, and where the author buries the good part. A tutor, in the margins, always.",
  },
  {
    cmd: "quotes.verbatim",
    out: "the author's own words, kept",
    desc: "Paraphrase is a lossy format. Quotes preserve the exact lines that carry the argument, so you can cite the source like you actually read it. You did.",
  },
  {
    cmd: "insights.context",
    out: "why any of it matters",
    desc: "Insights connect the text to its field, its critics, and the argument it answers. You don't just learn what was said — you learn where it fits.",
  },
];

export function DesignTwo() {
  const out = useTypewriter("> upload your pdf. we'll do the reading.", 32);

  return (
    <div className="min-h-screen font-[JetBrains_Mono_Variable] text-[#c9d4d8]" style={{ background: BG }}>
      <div className="scanlines pointer-events-none fixed inset-0 z-40" />
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.45)_100%)]" />

      {/* top bar */}
      <header className="sticky top-0 z-50 border-b border-[#222c33] bg-[#07090b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#5d6b72]">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </span>
            <span className="ml-3 hidden sm:block">ratio.exe v2.4.7</span>
          </div>
          <span>session: guest — mode: digest</span>
          <span className="hidden md:block" style={{ color: AMBER }}>[ uptime 00:00:47 ]</span>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.3em] text-[#5d6b72]"
        >
          // the extraction engine for pdfs
        </motion.p>

        <h1 className="animate-flicker mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          <span className="text-[#5d6b72]">$</span>{" "}
          <span style={{ color: GREEN }}>ratio</span>
          <span className="text-[#c9d4d8]"> read</span>
          <span style={{ color: AMBER }}> your_pdf</span>
          <span className="text-[#5d6b72]"> --keep-what-matters</span>
        </h1>

        <div className="mt-6 h-8 text-sm text-[#5d6b72] md:text-base">
          <span>{out}</span>
          <span className="animate-blink ml-1 inline-block h-4 w-2.5 translate-y-0.5 bg-[#7dff9b]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#drop"
            className="border border-[#7dff9b] bg-[#7dff9b]/10 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7dff9b] transition-colors hover:bg-[#7dff9b] hover:text-[#07090b]"
          >
            ▸ initialize extraction
          </a>
          <a
            href="#modules"
            className="border border-[#2a333a] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#c9d4d8] transition-colors hover:border-[#ffc24b] hover:text-[#ffc24b]"
          >
            view modules
          </a>
        </motion.div>

        {/* terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 border border-[#2a333a] bg-[#0c1013] shadow-[0_0_60px_rgba(125,255,155,0.06)]"
        >
          <div className="flex items-center justify-between border-b border-[#2a333a] px-4 py-2.5 text-[11px] text-[#5d6b72]">
            <span>guest@ratio: ~/documents</span>
            <span className="hidden sm:block">— bash — 80×24</span>
          </div>
          <div className="p-5 text-[11px] leading-6 md:p-7 md:text-[13px]">
            <p className="text-[#5d6b72]">
              <span style={{ color: GREEN }}>$</span> ratio read attention_economy.pdf
            </p>
            <p className="mt-1 text-[#5d6b72]">extraction session 0x4F — target: 214 pages</p>

            <div className="mt-5 space-y-3">
              <Bar label="SCANNING" width="100%" delay={0.1} />
              <Bar label="WEIGHING" width="100%" delay={0.35} />
              <Bar label="COMPRESSING" width="92%" delay={0.6} color={AMBER} />
              <Bar label="ANNOTATING" width="100%" delay={0.85} />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="border border-[#2a333a] bg-[#07090b] p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6b72]">// output: digest.ratio</p>
                <div className="mt-3 space-y-1.5">
                  {[
                    ["SUMMARY", "3 paragraphs — the spine"],
                    ["HINTS", "47 load-bearing sentences"],
                    ["QUOTES", "12 — the author, verbatim"],
                    ["INSIGHTS", "9 — why any of it matters"],
                  ].map(([k, v]) => (
                    <p key={k} className="flex gap-3">
                      <span style={{ color: GREEN }}>├─ {k}</span>
                      <span className="text-[#5d6b72]">·····</span>
                      <span>{v}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-3 border border-[#2a333a] bg-[#07090b] p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6b72]">// compression report</p>
                <p className="text-2xl md:text-4xl">
                  <span style={{ color: GREEN }}>12.4 : 1</span>
                  <span className="text-sm text-[#5d6b72]"> ratio achieved</span>
                </p>
                <p className="text-[#c9d4d8]">9 min read <span className="text-[#5d6b72]">instead of 3h 12m</span></p>
                <p style={{ color: AMBER }}>fluff survived: 0.00%</p>
              </div>
            </div>

            <p className="mt-5 text-[#5d6b72]">
              <span style={{ color: GREEN }}>$</span> █ <span className="animate-blink ml-1 inline-block h-3 w-2 bg-[#7dff9b]" />
            </p>
          </div>
        </motion.div>
      </section>

      {/* hex dump strip */}
      <div className="mt-16 overflow-hidden border-y border-[#222c33] bg-[#05070a] py-4">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap font-mono text-[11px] text-[#5d6b72]" style={{ ["--marquee-duration" as string]: "38s" }}>
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["%PDF-1.7", "the thesis", "%âãÏÓ", "4 0 obj", "load-bearing", "<< /Signal /true >>", "stream", "argument found", "endstream", "endobj", "xref", "12.4:1", "trailer", "%%EOF"].map((s, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-16">
                <span className={i % 3 === 0 ? "text-[#7dff9b]/70" : i % 3 === 1 ? "text-[#ffc24b]/60" : ""}>{s}</span>
                <span className="text-[#222c33]">|</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* modules */}
      <section id="modules" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#5d6b72]">// loaded modules</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Four binaries. <span style={{ color: GREEN }}>One job:</span> understanding.
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-[#5d6b72]">
            every module is optional, every module is on by default. the engine decides what your
            document deserves.
          </p>
        </div>

        <div className="grid gap-px border border-[#2a333a] bg-[#2a333a] md:grid-cols-2">
          {modules.map((m, i) => (
            <motion.article
              key={m.cmd}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group p-6 transition-colors hover:bg-[#0c1013] md:p-8"
              style={{ background: PANEL }}
            >
              <p className="text-xs md:text-sm">
                <span className="text-[#5d6b72]">$ ratio load</span>{" "}
                <span style={{ color: GREEN }} className="group-hover:underline">{m.cmd}</span>
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em]" style={{ color: AMBER }}>
                → {m.out}
              </p>
              <p className="mt-4 text-xs leading-6 text-[#9fb0b6]">{m.desc}</p>
              <p className="mt-5 text-[10px] text-[#5d6b72]">
                [ OK ] module {m.cmd} loaded in {12 + i * 7}ms
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* /proc/ratio stats */}
      <section className="border-y border-[#222c33] bg-[#0c1013]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#5d6b72]">$ cat /proc/ratio</p>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["docs_processed", "4,211", "this week, and counting"],
              ["mean_compression", "12.4:1", "pages in → minutes out"],
              ["retention_delta", "+3.1×", "vs. raw skimming"],
              ["fluff_survived", "0.00%", "we checked twice"],
            ].map(([k, v, d], i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5d6b72]">{k}</p>
                <p className="mt-2 text-4xl font-bold md:text-5xl" style={{ color: i % 2 ? AMBER : GREEN }}>{v}</p>
                <p className="mt-2 text-[11px] text-[#5d6b72]">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* dropzone */}
      <section id="drop" className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#5d6b72]">// input buffer ready</p>
          <div className="mt-8 border-2 border-dashed border-[#2a333a] p-10 text-center transition-colors hover:border-[#7dff9b]/60 md:p-16">
            <p className="text-4xl text-[#5d6b72]">⬇</p>
            <p className="mt-6 text-xl font-bold md:text-3xl">
              DROP PDF HERE<span className="animate-blink ml-1 inline-block h-5 w-3 translate-y-1 bg-[#7dff9b]" />
            </p>
            <p className="mt-3 text-xs text-[#5d6b72]">
              or press <span className="border border-[#2a333a] px-2 py-0.5 text-[#c9d4d8]">ENTER</span> to browse —
              .pdf accepted, .tldr returned
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#top"
                className="bg-[#7dff9b] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#07090b] transition-colors hover:bg-[#ffc24b]"
              >
                [ start extraction ]
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-[#5d6b72]">
            * documents are read locally. nothing leaves your machine but the understanding.
          </p>
        </motion.div>
      </section>

      {/* footer */}
      <footer className="border-t border-[#222c33]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-[10px] uppercase tracking-[0.2em] text-[#5d6b72]">
          <span style={{ color: GREEN }}>[ OK ]</span>
          <span>ratio.exe exited cleanly — memory freed: 0 regrets</span>
          <span>© 2026 the ratio reader</span>
        </div>
      </footer>
    </div>
  );
}
