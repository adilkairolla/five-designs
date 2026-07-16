import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  FileText,
  Lightbulb,
  Quote,
  Scissors,
  Sparkles,
  Timer,
} from "lucide-react";
import { Reveal } from "../components/Reveal";

const PAPER = "#FFF3E2";
const INK = "#26221F";
const ORANGE = "#FF5C38";
const TEAL = "#0E8C7F";
const PINK = "#FF9BB3";
const YELLOW = "#FFC627";

function Squiggle({ color = ORANGE, className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 220 14" fill="none" className={className} aria-hidden>
      <path
        d="M3 9c14-8 22-8 36 0s22 8 36 0 22-8 36 0 22 8 36 0 22-8 36 0 22 8 34 2"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path
        fill={YELLOW}
        stroke={INK}
        strokeWidth="2.5"
        d="M60 4l8 18 15-12 2 20 19-7-6 19 20 2-13 15 17 11-19 8 11 17-20 1 3 20-17-9-4 20-11-17-11 17-4-20-17 9 3-20-20-1 11-17-19-8 17-11-13-15 20-2-6-19 19 7 2-20 15 12z"
      />
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fontSize="17"
        fontWeight="800"
        fill={INK}
        fontFamily="Karla, sans-serif"
      >
        FREE
      </text>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={INK}
        fontFamily="Karla, sans-serif"
      >
        to start!
      </text>
    </svg>
  );
}

function Tape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-7 w-24 opacity-80 ${className}`}
      style={{
        background: "rgba(255,198,39,0.75)",
        clipPath: "polygon(3% 0, 97% 6%, 100% 94%, 0 100%)",
      }}
    />
  );
}

export function Design3() {
  return (
    <div className="min-h-screen overflow-x-clip font-karla" style={{ background: PAPER, color: INK }}>
      <div className="grain grain-soft" />

      {/* ─────────── nav ─────────── */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 -rotate-6 items-center justify-center rounded-xl border-2 font-tilt text-xl"
            style={{ borderColor: INK, background: ORANGE, color: PAPER, boxShadow: `3px 3px 0 ${INK}` }}
          >
            R/
          </span>
          <span className="font-tilt text-2xl tracking-tight">Ratio Reader</span>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
          <a href="#how" className="transition-colors hover:text-[#FF5C38]">How it works</a>
          <a href="#stuff" className="transition-colors hover:text-[#0E8C7F]">The good stuff</a>
          <a href="#wall" className="transition-colors hover:text-[#FF5C38]">Quote wall</a>
        </nav>
        <a
          href="#cta"
          className="rounded-full border-2 px-5 py-2.5 text-sm font-extrabold transition-transform hover:-translate-y-0.5"
          style={{ borderColor: INK, background: YELLOW, boxShadow: `3px 3px 0 ${INK}` }}
        >
          Get the app
        </a>
      </header>

      {/* ─────────── hero ─────────── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 md:pt-16">
        {/* halftone blobs */}
        <div className="halftone-lg absolute -right-24 -top-10 h-72 w-72 rounded-full opacity-25" style={{ color: TEAL }} />
        <div className="halftone-lg absolute -left-28 bottom-0 h-80 w-80 rounded-full opacity-20" style={{ color: ORANGE }} />

        <div className="relative text-center">
          <Reveal>
            <div className="inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-2 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em]" style={{ borderColor: INK, background: PINK, boxShadow: `3px 3px 0 ${INK}` }}>
              <Sparkles className="h-4 w-4" />
              Now pressing: your PDFs
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="relative mx-auto mt-8 font-tilt uppercase leading-[0.85]"
              style={{ fontSize: "clamp(3.4rem, 12vw, 10.5rem)" }}
            >
              <span className="absolute left-1/2 top-0 -translate-x-1/2 translate-x-[6px] translate-y-[6px] select-none opacity-60 mix-blend-multiply" style={{ color: TEAL }} aria-hidden>
                Skim smart.
              </span>
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-x-[6px] -translate-y-[6px] select-none opacity-60 mix-blend-multiply" style={{ color: ORANGE }} aria-hidden>
                Skim smart.
              </span>
              <span className="relative">Skim smart.</span>
            </h1>
            <Squiggle className="mx-auto mt-4 w-56 md:w-80" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed md:text-xl">
              Your 90-page PDF — now with{" "}
              <span className="relative inline-block font-extrabold">
                87 fewer pages
                <Squiggle color={TEAL} className="absolute -bottom-2 left-0 w-full" />
              </span>
              . Upload it, and Ratio hands back the summary, the hints, the
              killer quotes, and the “ohh, <em>that's</em> what it meant.”
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a
                href="#cta"
                className="group flex items-center gap-3 rounded-2xl border-2 px-8 py-4 text-base font-extrabold transition-transform hover:-translate-y-1 hover:rotate-1"
                style={{ borderColor: INK, background: ORANGE, color: PAPER, boxShadow: `5px 5px 0 ${INK}` }}
              >
                <FileText className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                Drop a PDF
              </a>
              <a
                href="#how"
                className="flex items-center gap-3 rounded-2xl border-2 px-8 py-4 text-base font-extrabold transition-transform hover:-translate-y-1 hover:-rotate-1"
                style={{ borderColor: INK, background: PAPER, boxShadow: `5px 5px 0 ${INK}` }}
              >
                See the trick
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="pointer-events-none absolute -right-4 top-6 hidden md:block lg:right-10">
              <Starburst className="animate-wobble h-32 w-32" />
            </div>
            <div className="pointer-events-none absolute -left-2 top-24 hidden rotate-[-8deg] rounded-xl border-2 px-4 py-2 text-xs font-extrabold md:block lg:left-6" style={{ borderColor: INK, background: TEAL, color: PAPER, boxShadow: `3px 3px 0 ${INK}` }}>
              100% facts, 0% fluff
            </div>
            <div className="pointer-events-none absolute bottom-2 right-6 hidden rotate-[5deg] rounded-xl border-2 px-4 py-2 text-xs font-extrabold md:block" style={{ borderColor: INK, background: PAPER, boxShadow: `3px 3px 0 ${INK}` }}>
              no skimming guilt ✓
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── marquee ─────────── */}
      <div className="relative -rotate-1 border-y-2 py-3" style={{ borderColor: INK, background: ORANGE }}>
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="flex items-center font-tilt text-xl uppercase tracking-wide md:text-2xl" style={{ color: PAPER }}>
              {[...Array(8)].map((_, i) => (
                <span key={i} className="mx-6 flex items-center gap-6">
                  Read less <span style={{ color: YELLOW }}>✳</span> Know more{" "}
                  <span style={{ color: YELLOW }}>✳</span> Upload a PDF{" "}
                  <span style={{ color: YELLOW }}>✳</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─────────── how it works ─────────── */}
      <section id="how" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.35em]" style={{ color: TEAL }}>
            Step by step
          </p>
          <h2 className="mt-3 text-center font-tilt text-4xl uppercase leading-none md:text-6xl">
            Three moves and
            <br />
            <span style={{ color: ORANGE }}>you're done.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "1",
              bg: YELLOW,
              title: "Feed the machine",
              body: "Any PDF goes in. Thesis, lease, quarterly report, that 300-page novel for book club. It does not judge. It only reads.",
              icon: FileText,
              rot: "-rotate-2",
            },
            {
              n: "2",
              bg: PINK,
              title: "It reads so you don't",
              body: "Ratio chews through every page, ranks what matters, and lifts the lines worth keeping. Takes about four seconds. Grab a sip of coffee.",
              icon: BookOpenText,
              rot: "rotate-1",
            },
            {
              n: "3",
              bg: TEAL,
              title: "You get the good part",
              body: "Out comes the brief: summary, hints, quotes, insights. Six pages instead of ninety. You walk in sounding like you read the whole thing. You basically did.",
              icon: Sparkles,
              rot: "-rotate-1",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div
                className={`relative h-full rounded-3xl border-2 p-7 transition-transform hover:-translate-y-2 ${s.rot}`}
                style={{ borderColor: INK, background: s.bg, boxShadow: `7px 7px 0 ${INK}` }}
              >
                <div className="halftone absolute right-4 top-4 h-20 w-20 rounded-full opacity-30" style={{ color: INK }} />
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 font-tilt text-2xl"
                  style={{ borderColor: INK, background: s.bg === TEAL ? INK : PAPER, color: s.bg === TEAL ? PAPER : INK }}
                >
                  {s.n}
                </span>
                <h3 className="mt-6 font-tilt text-2xl uppercase">{s.title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed">{s.body}</p>
                <s.icon className="mt-6 h-6 w-6" strokeWidth={2} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── features bento ─────────── */}
      <section id="stuff" className="border-y-2 py-20 md:py-28" style={{ borderColor: INK, background: "#FFE9CF" }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-tilt text-4xl uppercase leading-none md:text-6xl">
              The good stuff<span style={{ color: ORANGE }}>.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center font-medium">
              Four instruments, one brief. Here's what Ratio slips into your
              pocket every time.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-6">
            {[
              {
                icon: BookOpenText,
                title: "Summaries",
                body: "The argument's spine, re-set in plain language. Chapters become paragraphs, paragraphs become sentences you can say out loud in a meeting without blushing.",
                span: "md:col-span-4",
                bg: PAPER,
                accent: ORANGE,
              },
              {
                icon: Lightbulb,
                title: "Hints",
                body: "Stuck on page 41? A lantern appears: context, a definition, the one sentence to read twice.",
                span: "md:col-span-2",
                bg: TEAL,
                fg: PAPER,
                accent: YELLOW,
              },
              {
                icon: Quote,
                title: "Quotes",
                body: "The lines worth keeping, lifted verbatim with their page numbers. Ready for your notes, your deck, your group chat.",
                span: "md:col-span-2",
                bg: PAPER,
                accent: PINK,
              },
              {
                icon: Sparkles,
                title: "Insights",
                body: "What the author never said out loud: the contradictions, the recurring theme, the question the whole text is secretly asking.",
                span: "md:col-span-2",
                bg: PAPER,
                accent: TEAL,
              },
              {
                icon: Timer,
                title: "Time ledger",
                body: "Every brief closes with an honest receipt: 214 pages in, 6 out, three hours and twelve minutes returned to your life.",
                span: "md:col-span-2",
                bg: PAPER,
                accent: YELLOW,
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className={f.span}>
                <div
                  className="h-full rounded-3xl border-2 p-7 transition-transform hover:-translate-y-1.5"
                  style={{
                    borderColor: INK,
                    background: f.bg,
                    color: f.fg ?? INK,
                    boxShadow: `6px 6px 0 ${INK}`,
                  }}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2"
                    style={{ borderColor: INK, background: f.accent, color: f.fg ?? INK }}
                  >
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 font-tilt text-2xl uppercase">{f.title}</h3>
                  <p className="mt-2 text-[15px] font-medium leading-relaxed opacity-90">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── quote wall ─────────── */}
      <section id="wall" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-tilt text-4xl uppercase leading-none md:text-6xl">
              Fresh off<br />the wall<span style={{ color: TEAL }}>.</span>
            </h2>
            <p className="flex items-center gap-2 text-sm font-bold" style={{ color: TEAL }}>
              <Scissors className="h-4 w-4" /> torn from real briefs
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            {
              q: "“The future belongs to those who read the important parts.”",
              from: "p.87 — 214-page market report",
              bg: "#FFFFFF",
              rot: "-rotate-2",
              pin: ORANGE,
            },
            {
              q: "“We recommend, with moderate confidence, everything on page 12.”",
              from: "p.31 — consulting deck, name withheld",
              bg: "#FFF9EC",
              rot: "rotate-1",
              pin: TEAL,
            },
            {
              q: "“In conclusion: it depends. (See 40 pages of it depending.)”",
              from: "p.2 — graduate thesis, ch. 9",
              bg: "#FFFFFF",
              rot: "-rotate-1",
              pin: PINK,
            },
          ].map((c, i) => (
            <Reveal key={c.q} delay={i * 120}>
              <div
                className={`relative ${c.rot} p-7 pt-10 transition-transform hover:rotate-0 hover:scale-[1.02]`}
                style={{
                  background: c.bg,
                  clipPath:
                    "polygon(0 3%, 6% 0, 14% 2%, 23% 0, 31% 3%, 40% 1%, 52% 3%, 60% 0, 70% 2%, 79% 0, 88% 3%, 96% 1%, 100% 4%, 100% 96%, 95% 100%, 86% 98%, 76% 100%, 66% 97%, 55% 100%, 45% 98%, 34% 100%, 25% 97%, 15% 100%, 7% 98%, 0 100%)",
                  boxShadow: "0 10px 24px rgba(38,34,31,0.18)",
                }}
              >
                <Tape className="-top-1 left-1/2 -translate-x-1/2 -rotate-3" />
                <Quote className="h-6 w-6 rotate-180" style={{ color: c.pin }} />
                <p className="mt-4 font-newsreader text-xl italic leading-snug">{c.q}</p>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em]" style={{ color: c.pin }}>
                  {c.from}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── big CTA ─────────── */}
      <section id="cta" className="relative overflow-hidden border-t-2" style={{ borderColor: INK, background: TEAL }}>
        <div className="halftone-lg absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-25" style={{ color: PAPER }} />
        <div className="halftone-lg absolute -bottom-24 -right-16 h-96 w-96 rounded-full opacity-20" style={{ color: INK }} />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32" style={{ color: PAPER }}>
          <Reveal>
            <h2 className="font-tilt uppercase leading-[0.9]" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              Drop a PDF<span style={{ color: YELLOW }}>.</span>
              <br />
              Keep the day<span style={{ color: YELLOW }}>.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg font-medium opacity-95">
              Free to start. No card. No thirty-page terms of service — and if
              there were, we'd happily summarize them for you.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a
                href="#"
                className="group flex items-center gap-3 rounded-2xl border-2 px-9 py-4 text-lg font-extrabold transition-transform hover:-translate-y-1 hover:rotate-1"
                style={{ borderColor: INK, background: YELLOW, color: INK, boxShadow: `6px 6px 0 ${INK}` }}
              >
                Start reading smarter
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-sm font-bold opacity-80">3 briefs a month, on the house ✳ forever</p>
          </Reveal>
        </div>
      </section>

      {/* ─────────── footer ─────────── */}
      <footer style={{ background: INK, color: PAPER }}>
        <svg viewBox="0 0 1440 40" className="block w-full" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0 0h1440v12c-60 14-120 14-180 0s-120-14-180 0-120 14-180 0-120-14-180 0-120 14-180 0-120-14-180 0-120 14-180 0-120-14-180 0v-12z"
            fill={TEAL}
          />
        </svg>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 -rotate-6 items-center justify-center rounded-xl border-2 font-tilt text-lg"
              style={{ borderColor: PAPER, background: ORANGE }}
            >
              R/
            </span>
            <span className="font-tilt text-xl">Ratio Reader</span>
          </div>
          <p className="max-w-sm text-sm opacity-70">
            Printed in two-and-a-half inks on recycled pixels. Misregistration
            is a feature, not a bug.
          </p>
          <div className="flex gap-6 text-xs font-extrabold uppercase tracking-[0.2em] opacity-80">
            <a href="#how" className="hover:text-[#FFC627]">How</a>
            <a href="#stuff" className="hover:text-[#FFC627]">Stuff</a>
            <a href="#wall" className="hover:text-[#FFC627]">Wall</a>
            <a href="/" className="hover:text-[#FFC627]">More designs</a>
          </div>
          <p className="text-xs opacity-50">© 2026 Ratio Press — hot off the press</p>
        </div>
      </footer>
    </div>
  );
}
