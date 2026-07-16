import { useMemo } from "react";
import {
  ArrowRight,
  BookOpenText,
  FileText,
  Lightbulb,
  Quote,
  Sparkles,
  Telescope,
  Timer,
} from "lucide-react";
import { Reveal } from "../components/Reveal";

const TEAL = "#5FF2C4";
const VIOLET = "#8B7CFF";
const ROSE = "#FF7AC6";

function Stars() {
  const stars = useMemo(
    () =>
      [...Array(70)].map((_, i) => ({
        left: (i * 37.7 + 13) % 100,
        top: (i * 53.3 + 7) % 100,
        size: (i % 3) + 1,
        delay: (i % 10) * 0.42,
        dur: 2.6 + (i % 5) * 0.7,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}

function AuroraField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="aurora-a absolute -top-[20%] left-[-15%] h-[70vh] w-[70vw] rounded-full blur-[110px]"
        style={{ background: `radial-gradient(closest-side, ${TEAL}55, transparent)` }}
      />
      <div
        className="aurora-b absolute right-[-20%] top-[10%] h-[80vh] w-[60vw] rounded-full blur-[120px]"
        style={{ background: `radial-gradient(closest-side, ${VIOLET}50, transparent)` }}
      />
      <div
        className="aurora-a absolute bottom-[-30%] left-[20%] h-[70vh] w-[60vw] rounded-full blur-[130px]"
        style={{ background: `radial-gradient(closest-side, ${ROSE}38, transparent)`, animationDelay: "-11s" }}
      />
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/12 bg-white/[0.05] backdrop-blur-xl ${className}`}
      style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)" }}
    >
      {children}
    </div>
  );
}

function DistillCard() {
  return (
    <div className="animate-floaty relative mx-auto w-full max-w-md">
      {/* glow */}
      <div
        className="animate-pulse-glow absolute -inset-8 rounded-[3rem] blur-3xl"
        style={{ background: `linear-gradient(135deg, ${TEAL}30, ${VIOLET}28, ${ROSE}24)` }}
        aria-hidden
      />
      <GlassCard className="relative p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})` }}>
              <FileText className="h-5 w-5 text-[#05060E]" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">market-report.pdf</p>
              <p className="text-xs text-white/50">214 pages · ingesting…</p>
            </div>
          </div>
          <span className="animate-pulse-glow text-xs font-semibold tracking-widest" style={{ color: TEAL }}>
            LIVE
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[94%] rounded-full" style={{ background: `linear-gradient(90deg, ${TEAL}, ${VIOLET})` }} />
          </div>
          <div className="h-2.5 w-4/5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[88%] rounded-full" style={{ background: `linear-gradient(90deg, ${VIOLET}, ${ROSE})` }} />
          </div>
          <div className="h-2.5 w-3/5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[76%] rounded-full" style={{ background: `linear-gradient(90deg, ${ROSE}, ${TEAL})` }} />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
          {[
            ["6", "pages out"],
            ["4.2s", "distill"],
            ["3h12m", "returned"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-instrument text-2xl italic" style={{ color: TEAL }}>{v}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">{l}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* orbiting chips */}
      <div className="absolute -left-10 -top-6 hidden -rotate-6 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs backdrop-blur-xl sm:block" style={{ color: TEAL }}>
        ✳ summary ready
      </div>
      <div className="absolute -right-8 bottom-10 hidden rotate-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-xs backdrop-blur-xl sm:block" style={{ color: ROSE }}>
        “read the important parts”
      </div>
    </div>
  );
}

export function Design5() {
  return (
    <div className="relative min-h-screen overflow-x-clip font-outfit text-[#E9ECF5]" style={{ background: "#05060E" }}>
      <div className="grain grain-soft" />
      <AuroraField />
      <Stars />

      {/* ─────────── nav ─────────── */}
      <header className="relative z-10 mx-auto max-w-6xl px-5 pt-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 backdrop-blur-xl">
          <span className="flex items-center gap-2.5">
            <Telescope className="h-4.5 w-4.5" style={{ color: TEAL }} />
            <span className="text-sm font-semibold tracking-[0.2em]">RATIO</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#alchemy" className="transition-colors hover:text-white">Alchemy</a>
            <a href="#instruments" className="transition-colors hover:text-white">Instruments</a>
            <a href="#voices" className="transition-colors hover:text-white">Voices</a>
          </nav>
          <a
            href="#begin"
            className="rounded-full px-5 py-2 text-sm font-semibold text-[#05060E] transition-transform hover:scale-105"
            style={{ background: `linear-gradient(90deg, ${TEAL}, ${VIOLET})` }}
          >
            Begin
          </a>
        </div>
      </header>

      {/* ─────────── hero ─────────── */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-20 md:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.5em]" style={{ color: TEAL }}>
                Signal from noise
              </p>
              <h1
                className="mt-6 font-light leading-[1.02] tracking-tight text-white"
                style={{ fontSize: "clamp(2.6rem, 5.6vw, 4.8rem)" }}
              >
                Every document
                <br />
                has a{" "}
                <em
                  className="font-instrument italic"
                  style={{
                    background: `linear-gradient(90deg, ${TEAL}, ${VIOLET} 55%, ${ROSE})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  pulse.
                </em>
                <br />
                We find it.
              </h1>
              <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-white/60 lg:mx-0 md:text-lg">
                Ratio Reader takes your PDF into the dark and returns with its
                light — the summary, the hints, the quotes, the insights. What
                remains is everything that mattered.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#begin"
                  className="group flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-[#05060E] transition-transform hover:scale-105"
                  style={{ background: `linear-gradient(90deg, ${TEAL}, ${VIOLET})`, boxShadow: `0 12px 40px ${TEAL}40` }}
                >
                  Distill a PDF
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#alchemy"
                  className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur transition-colors hover:bg-white/5"
                >
                  See the alchemy
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <DistillCard />
          </Reveal>
        </div>
      </section>

      {/* ─────────── stats ─────────── */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            ["240", "pages read per minute"],
            ["94%", "of reading time returned"],
            ["12×", "faster than skimming"],
            ["1", "essence, faithfully kept"],
          ].map(([v, l], i) => (
            <div key={l} className="px-6 py-10 text-center">
              <Reveal delay={i * 80}>
                <p
                  className="font-instrument text-4xl italic md:text-5xl"
                  style={{ color: [TEAL, VIOLET, ROSE, "#fff"][i] }}
                >
                  {v}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/45">{l}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── alchemy ─────────── */}
      <section id="alchemy" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.5em]" style={{ color: VIOLET }}>
            The distillation
          </p>
          <h2 className="mt-4 text-center text-3xl font-light tracking-tight text-white md:text-5xl">
            Three passes of{" "}
            <em className="font-instrument italic" style={{ color: TEAL }}>light</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "I",
              color: TEAL,
              title: "Ingestion",
              body: "Your document enters whole and untouched. Ratio reads every page — the way light passes through glass, nothing resisted.",
            },
            {
              n: "II",
              color: VIOLET,
              title: "Separation",
              body: "Arguments are weighed against each other. Evidence sinks where it belongs. The quotable rises to the surface, page numbers intact.",
            },
            {
              n: "III",
              color: ROSE,
              title: "Condensation",
              body: "What remains is the brief: six luminous pages of summary, hints, quotes and insight. The document, finally at room temperature.",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 140}>
              <GlassCard className="group h-full p-8 transition-transform duration-500 hover:-translate-y-2">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full font-instrument text-2xl italic transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}66, ${s.color}18)`, color: s.color, boxShadow: `0 0 34px ${s.color}40` }}
                >
                  {s.n}
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── instruments ─────────── */}
      <section id="instruments" className="relative z-10 border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <h2 className="text-center text-3xl font-light tracking-tight text-white md:text-5xl">
              Four{" "}
              <em className="font-instrument italic" style={{ color: ROSE }}>instruments</em>
              , one brief
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {[
              { icon: BookOpenText, color: TEAL, name: "Summaries", body: "The spine of the argument, re-set in plain language. Chapters become paragraphs; paragraphs become sentences you can defend." },
              { icon: Lightbulb, color: VIOLET, name: "Hints", body: "A lantern wherever the prose turns difficult — context, definitions, and the single sentence to read twice." },
              { icon: Quote, color: ROSE, name: "Quotes", body: "Passages worth keeping, lifted verbatim and cited to their page. Ready for your notes, your deck, your argument." },
              { icon: Sparkles, color: TEAL, name: "Insights", body: "What the author never said aloud: contradictions, recurring themes, the question the whole text is quietly asking." },
            ].map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <GlassCard className="group h-full p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6"
                      style={{ background: `linear-gradient(135deg, ${f.color}30, transparent)`, boxShadow: `inset 0 0 0 1px ${f.color}55, 0 0 24px ${f.color}25` }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: f.color }} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{f.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">{f.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur">
              <Timer className="h-4 w-4" style={{ color: VIOLET }} />
              <p className="text-sm text-white/60">
                Every brief closes with a <span className="text-white">time ledger</span> — pages in, pages out, hours returned to your life.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── voices ─────────── */}
      <section id="voices" className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center md:py-36">
        <Reveal>
          <span className="font-instrument text-6xl italic leading-none" style={{ color: TEAL }} aria-hidden>
            “
          </span>
          <blockquote
            className="mx-auto max-w-3xl font-instrument italic leading-[1.2] text-white"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3.1rem)" }}
          >
            The future belongs to those who read the{" "}
            <span style={{ color: TEAL }}>important parts</span>.
          </blockquote>
          <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-white/40">
            lifted verbatim · page 87 of 214 · returned in 4.2 seconds
          </p>
          <div className="mt-14 flex items-center justify-center gap-3 text-white/30" aria-hidden>
            <span className="h-px w-14 bg-white/20" />
            <Sparkles className="h-4 w-4" style={{ color: VIOLET }} />
            <span className="h-px w-14 bg-white/20" />
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            {[
              ["“My thesis brief read better than my thesis.”", "A. Okafor — researcher"],
              ["“Board meetings now start at the interesting part.”", "R. Lindqvist — operator"],
              ["“Page 41 settled a two-week argument.”", "M. Tanaka — counsel"],
            ].map(([q, a], i) => (
              <Reveal key={a} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <p className="text-sm leading-relaxed text-white/75">{q}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/40">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─────────── begin ─────────── */}
      <section id="begin" className="relative z-10 mx-auto max-w-6xl px-5 pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 px-6 py-20 text-center md:py-28">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(80% 120% at 50% 0%, ${VIOLET}30, transparent), radial-gradient(60% 100% at 50% 110%, ${TEAL}26, transparent), rgba(255,255,255,0.03)`,
              }}
              aria-hidden
            />
            <div className="relative">
              <h2
                className="mx-auto max-w-3xl font-light leading-[1.05] tracking-tight text-white"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)" }}
              >
                Begin your{" "}
                <em className="font-instrument italic" style={{ color: TEAL }}>
                  distillation.
                </em>
              </h2>
              <p className="mx-auto mt-6 max-w-md text-white/60">
                Free to start. Three briefs a month, forever. The next thing
                you read could be the short version.
              </p>
              <a
                href="#"
                className="group mt-10 inline-flex items-center gap-3 rounded-full px-10 py-4.5 text-sm font-semibold text-[#05060E] transition-transform hover:scale-105"
                style={{ background: `linear-gradient(90deg, ${TEAL}, ${VIOLET}, ${ROSE})`, boxShadow: `0 16px 50px ${VIOLET}45` }}
              >
                Upload your first PDF
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-5 text-xs tracking-widest text-white/35">NO CARD · NO NOISE · NO 40-PAGE ONBOARDING DOC</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─────────── footer ─────────── */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center">
          <span className="text-sm font-semibold tracking-[0.3em] text-white/80">RATIO</span>
          <p className="max-w-sm text-xs leading-relaxed text-white/40">
            Set in Instrument Serif & Outfit beneath a simulated aurora.
            Somewhere, a 300-page document just became six.
          </p>
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.25em] text-white/45">
            <a href="#alchemy" className="hover:text-white">Alchemy</a>
            <a href="#instruments" className="hover:text-white">Instruments</a>
            <a href="#begin" className="hover:text-white">Begin</a>
            <a href="/" className="hover:text-white">Other skies</a>
          </div>
          <p className="text-[11px] text-white/30">© 2026 Ratio — signal from noise</p>
        </div>
      </footer>
    </div>
  );
}
