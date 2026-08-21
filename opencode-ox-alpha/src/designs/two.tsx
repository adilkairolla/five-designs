import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";

const GREEN = "#3dff9c";
const DIM = "#1d5c3a";
const AMBER = "#ffb454";
const BG = "#040705";
const PANEL = "#071009";

function useTypewriter(lines: string[], speed = 26, startDelay = 400) {
  const [output, setOutput] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let li = 0;
    let ci = 0;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const tick = () => {
      if (cancelled) return;
      if (li >= lines.length) {
        setDone(true);
        return;
      }
      const current = lines[li];
      ci += 1;
      setOutput((prev) => {
        const next = [...prev];
        next[li] = current.slice(0, ci);
        return next;
      });
      if (ci >= current.length) {
        li += 1;
        ci = 0;
        timers.push(setTimeout(tick, 260));
      } else {
        timers.push(setTimeout(tick, speed + Math.random() * 30));
      }
    };
    timers.push(setTimeout(tick, startDelay));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [lines, speed, startDelay]);
  return { output, done };
}

function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setVal(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

function AsciiLogo() {
  return (
    <pre
      className="text-[8px] leading-[1.05] sm:text-[11px] md:text-[13px]"
      style={{ color: GREEN, textShadow: `0 0 12px ${GREEN}55` }}
    >
{` ██████╗  █████╗ ████████╗██╗ ██████╗
██╔══██╗██╔══██╗╚══██╔══╝██║██╔════╝
██████╔╝███████║   ██║   ██║██║  ███╗
██╔══██╗██╔══██║   ██║   ██║██║   ██║
██║  ██║██║  ██║   ██║   ██║╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝
          R E A D E R   v2.6.1`}
    </pre>
  );
}

const BOOT_LINES = [
  "$ ./ratio_reader --init",
  "> mounting document intake ............ [OK]",
  "> loading extraction cores (4/4) ...... [OK]",
  "> calibrating essence detector ........ [OK]",
  "> system ready. awaiting your PDF.",
];

function BootSequence() {
  const { output, done } = useTypewriter(BOOT_LINES);
  return (
    <div className="min-h-[9.5rem] font-jetbrains text-[12px] leading-6 sm:text-sm">
      {output.map((line, i) => (
        <p key={i} style={{ color: line.includes("[OK]") ? GREEN : "#9fe8c0" }}>
          {line}
        </p>
      ))}
      {!done && <span className="inline-block h-4 w-2.5 animate-pulse align-middle" style={{ background: GREEN }} />}
      {done && (
        <p className="mt-1" style={{ color: AMBER }}>
          {"> "}1 unread PDF detected in ~/guilt. <span className="animate-pulse">▊</span>
        </p>
      )}
    </div>
  );
}

function Pipeline() {
  const stages = [
    { cmd: "parse(pdf)", note: "312 pages · 148,204 tokens" },
    { cmd: "extract.structure()", note: "9 sections · 41 arguments" },
    { cmd: "rank(signal)", note: "top 8.4% retained" },
    { cmd: "render.brief()", note: "summary + 12 quotes + 5 hints" },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % (stages.length + 1)), 1100);
    return () => clearInterval(t);
  }, [stages.length]);
  return (
    <div className="border p-5 sm:p-6" style={{ borderColor: DIM, background: PANEL }}>
      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: DIM }}>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-2.5 border" style={{ borderColor: GREEN }} />
          ))}
        </div>
        <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: DIM }}>
          ratio@localhost: ~/thesis_final_FINAL_v9.pdf
        </p>
      </div>
      <div className="mt-4 space-y-3 font-jetbrains text-[12px] sm:text-[13px]">
        {stages.map((s, i) => {
          const state = i < active ? "done" : i === active ? "run" : "wait";
          return (
            <div key={s.cmd} className="flex items-start gap-3">
              <span style={{ color: state === "done" ? GREEN : state === "run" ? AMBER : DIM }}>
                {state === "done" ? "[✓]" : state === "run" ? "[▸]" : "[ ]"}
              </span>
              <div className="min-w-0 flex-1">
                <p style={{ color: state === "wait" ? DIM : GREEN, textShadow: state === "run" ? `0 0 10px ${AMBER}66` : "none" }}>
                  {s.cmd}
                </p>
                <p className="text-[11px]" style={{ color: state === "wait" ? "#123322" : DIM }}>
                  {state === "wait" ? "queued…" : s.note}
                </p>
              </div>
              {state === "run" && <span className="animate-pulse" style={{ color: AMBER }}>working</span>}
            </div>
          );
        })}
        {active === stages.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t pt-3"
            style={{ borderColor: DIM, color: GREEN }}
          >
            brief ready — 2 min 40 s read. you just saved 5 h 57 m. ▊
          </motion.p>
        )}
      </div>
    </div>
  );
}

function ManPage() {
  const entries = [
    {
      flag: "--summary",
      title: "THE BRIEF",
      body: "A structured digest of the document at your chosen ratio. Argument intact, padding incinerated. Reads in minutes, not evenings.",
    },
    {
      flag: "--quotes",
      title: "KEY QUOTES",
      body: "The lines worth citing, preserved verbatim with page numbers. For when you need the author's actual voice, not a paraphrase of it.",
    },
    {
      flag: "--hints",
      title: "HINTS",
      body: "Gentle pointers at weak methodology, buried assumptions, and sections that deserve your real eyes. The reader that reads critically for you.",
    },
    {
      flag: "--insights",
      title: "INSIGHTS",
      body: "Connections the document makes to your other documents, your field, your work. Because understanding beats coverage.",
    },
  ];
  return (
    <div className="grid gap-px" style={{ background: DIM }}>
      {entries.map((e, i) => (
        <motion.div
          key={e.flag}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="group grid gap-4 p-6 sm:grid-cols-12 sm:p-8"
          style={{ background: BG }}
        >
          <div className="sm:col-span-4">
            <p className="font-jetbrains text-lg sm:text-xl" style={{ color: AMBER }}>
              {e.flag}
            </p>
            <p className="mt-1 font-jetbrains text-[11px] tracking-[0.3em] uppercase" style={{ color: GREEN }}>
              {e.title}
            </p>
          </div>
          <div className="sm:col-span-8">
            <p className="font-jetbrains text-[13px] leading-relaxed sm:text-sm" style={{ color: "#8fd8ae" }}>
              <span style={{ color: DIM }}>DESCRIPTION: </span>
              {e.body}
            </p>
            <p className="mt-2 font-jetbrains text-[11px]" style={{ color: "#123322" }}>
              SEE ALSO: your free evenings(1), unread_stack(8) — deprecated
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Readouts() {
  const stats = [
    { label: "PAGES_DISTILLED", to: 1400000, suffix: "" },
    { label: "HOURS_RETURNED", to: 96000, suffix: "" },
    { label: "AVG_COMPRESSION", to: 91, suffix: "%" },
    { label: "UPTIME_SINCE_LAUNCH", to: 99, suffix: ".98%" },
  ];
  return (
    <div className="grid grid-cols-2 gap-px lg:grid-cols-4" style={{ background: DIM }}>
      {stats.map((s, i) => (
        <div key={s.label} className="p-6 sm:p-8" style={{ background: PANEL }}>
          <p className="font-jetbrains text-3xl font-bold sm:text-4xl" style={{ color: GREEN, textShadow: `0 0 14px ${GREEN}44` }}>
            <Counter to={s.to} suffix={s.suffix} />
          </p>
          <p className="mt-2 font-jetbrains text-[10px] tracking-[0.25em] uppercase" style={{ color: DIM }}>
            {s.label}
            {i === 3 && <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full" style={{ background: GREEN, animation: "pulse-dot 2s infinite" }} />}
          </p>
        </div>
      ))}
    </div>
  );
}

function CommandCTA() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="border p-6 sm:p-10" style={{ borderColor: GREEN, background: PANEL, boxShadow: `0 0 40px ${GREEN}18` }}>
      <p className="font-jetbrains text-[11px] tracking-[0.3em] uppercase" style={{ color: DIM }}>
        // initiate transfer of reading hours back to you
      </p>
      <h2 className="mt-4 font-jetbrains text-2xl font-bold sm:text-4xl" style={{ color: GREEN, textShadow: `0 0 18px ${GREEN}55` }}>
        STOP READING EVERYTHING.
      </h2>
      <p className="mt-2 font-jetbrains text-sm sm:text-base" style={{ color: "#8fd8ae" }}>
        START UNDERSTANDING THE ESSENTIAL PARTS.
      </p>
      {submitted ? (
        <p className="mt-8 font-jetbrains text-lg" style={{ color: GREEN }}>
          access granted. check your inbox — first 3 briefs are on the house. ▊
        </p>
      ) : (
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (value.trim()) setSubmitted(true);
          }}
        >
          <div className="flex flex-1 items-center gap-2 border px-4 py-3" style={{ borderColor: DIM }}>
            <span style={{ color: GREEN }}>$</span>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="email"
              required
              placeholder="you@localhost --plan=free"
              className="w-full bg-transparent font-jetbrains text-sm outline-none placeholder:text-[#123322]"
              style={{ color: GREEN }}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 font-jetbrains text-sm font-bold transition-all"
            style={{ background: GREEN, color: BG, boxShadow: `0 0 24px ${GREEN}44` }}
          >
            [EXECUTE]
          </button>
        </form>
      )}
      <p className="mt-4 font-jetbrains text-[11px]" style={{ color: "#123322" }}>
        man ratio_reader | no credit card required | cancel anytime with Ctrl-C
      </p>
    </div>
  );
}

export function DesignTwo() {
  useEffect(() => {
    document.title = "RATIO_READER // terminal edition";
  }, []);
  return (
    <div className="d2-scanlines d2-flicker min-h-screen font-jetbrains antialiased" style={{ background: BG }}>
      <div
        className="pointer-events-none fixed inset-0 z-50 hidden md:block"
        style={{
          background: `radial-gradient(ellipse at center, transparent 55%, ${"rgba(0,0,0,0.5)"} 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute left-0 h-24 w-full opacity-[0.04]"
        style={{ background: `linear-gradient(to bottom, transparent, ${GREEN}, transparent)`, animation: "scanline 7s linear infinite" }}
      />

      {/* top bar */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-sm" style={{ borderColor: DIM, background: `${BG}e6` }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/2" className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center border text-[11px]" style={{ borderColor: GREEN, color: GREEN }}>
              ¸/
            </span>
            <span className="text-sm font-bold tracking-widest" style={{ color: GREEN }}>
              RATIO_READER
            </span>
            <span className="hidden text-[10px] tracking-widest sm:inline" style={{ color: DIM }}>
              v2.6.1 — stable
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-[11px] tracking-widest uppercase">
            <a href="#docs" className="transition-colors hover:text-[#3dff9c]" style={{ color: "#8fd8ae" }}>docs</a>
            <a href="#metrics" className="transition-colors hover:text-[#3dff9c]" style={{ color: "#8fd8ae" }}>metrics</a>
            <a href="#exec" className="px-3 py-1.5 font-bold transition-all hover:shadow-[0_0_16px_rgba(61,255,156,0.4)]" style={{ background: GREEN, color: BG }}>
              run it
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(${GREEN} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div>
            <AsciiLogo />
            <p className="mt-6 max-w-md text-sm leading-relaxed sm:text-base" style={{ color: "#8fd8ae" }}>
              A document intelligence daemon. Feed it PDFs; it returns the
              summary, the quotable lines, the hidden hints — at the exact
              compression ratio you demand.
            </p>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: DIM }}>
              // no fluff. no 40-page intros. no "in this paper, we will…"
            </p>
            <div className="mt-8">
              <BootSequence />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#exec"
                className="px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{ background: GREEN, color: BG, boxShadow: `0 0 24px ${GREEN}33` }}
              >
                $ start --free
              </a>
              <a
                href="#docs"
                className="border px-5 py-3 text-sm transition-colors hover:border-[#3dff9c]"
                style={{ borderColor: DIM, color: "#8fd8ae" }}
              >
                man ratio_reader
              </a>
            </div>
          </div>
          <div className="lg:pt-10">
            <Pipeline />
            <p className="mt-3 text-right text-[11px]" style={{ color: "#123322" }}>
              fig 2.1 — live processing trace (simulated)
            </p>
          </div>
        </div>
      </section>

      {/* ticker */}
      <div className="overflow-hidden border-y py-2" style={{ borderColor: DIM }}>
        <div className="d1-marquee-track flex w-max whitespace-nowrap text-[11px] tracking-[0.3em] uppercase" style={{ color: DIM }}>
          {[0, 1].map((n) => (
            <span key={n} className="pr-4">
              {"SIGNAL ↑↑ NOISE ↓↓ COMPRESSION 91% UPTIME 99.98% QUOTES PRESERVED VERBATIM HINTS ENABLED GUILT UNINSTALLED ".repeat(2)}
            </span>
          ))}
        </div>
      </div>

      {/* docs */}
      <section id="docs" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-wider sm:text-3xl" style={{ color: GREEN }}>
            MANUAL: ratio_reader(1)
          </h2>
          <p className="hidden text-[11px] tracking-widest uppercase sm:block" style={{ color: DIM }}>
            section 1 — user commands
          </p>
        </div>
        <ManPage />
      </section>

      {/* metrics */}
      <section id="metrics" className="border-y" style={{ borderColor: DIM }}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="mb-10 text-2xl font-bold tracking-wider sm:text-3xl" style={{ color: GREEN }}>
            SYSTEM READOUT
          </h2>
          <Readouts />
          <p className="mt-4 text-[11px]" style={{ color: "#123322" }}>
            // counters update as you watch. the fleet never sleeps.
          </p>
        </div>
      </section>

      {/* cta */}
      <section id="exec" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <CommandCTA />
      </section>

      {/* footer */}
      <footer className="border-t" style={{ borderColor: DIM }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-[11px] tracking-widest uppercase sm:flex-row sm:px-8">
          <p style={{ color: DIM }}>© 2026 ratio_reader systems</p>
          <p style={{ color: "#123322" }}>
            process exited with code <span style={{ color: GREEN }}>0</span> (all signal, no noise)
          </p>
          <Link to="/3" className="transition-colors hover:text-[#3dff9c]" style={{ color: "#8fd8ae" }}>
            next: lumen →
          </Link>
        </div>
      </footer>
    </div>
  );
}
