import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { product, features, steps, quotes, stats } from "../lib/content";

function Note({
  children,
  className = "",
  rotate = -3,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotate }}
      className={`font-caveat text-[#B33A2B] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Page() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] rotate-[2.2deg]">
      <div className="relative rounded-[2px] bg-[#FFFDF6] p-8 shadow-[0_30px_60px_-20px_rgba(28,25,23,0.28),0_8px_16px_-8px_rgba(28,25,23,0.15)]">
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#E8DFCC]/70 to-transparent" />
        <div className="mb-6 flex items-center justify-between font-newsreader text-[10px] tracking-[0.28em] text-[#1C1917]/35 uppercase">
          <span>Chapter Four</span>
          <span>p. 148</span>
        </div>
        <div className="space-y-3 font-newsreader text-[13.5px] leading-[1.85] text-[#1C1917]/85">
          <p>
            <span className="float-left mt-1 mr-2 font-fraunces text-[42px] leading-[0.8] font-semibold text-[#1C1917]">
              T
            </span>
            he temptation of long documents is that they look like work.
            They sit on the desk with the gravity of something unfinished, and we
            mistake the act of carrying them for the act of understanding them.
          </p>
          <p className="relative">
            A better reader is not the one who finishes.{" "}
            <span className="rr-underline-hand">A better reader is the one who knows where to look</span>{" "}
            before they begin — and who leaves with the sentences that matter
            already marked.
          </p>
          <p className="text-[#1C1917]/55">
            <span className="bg-[#B33A2B]/12 px-0.5">This is the whole of the method:</span>{" "}
            compress the page, keep the signal, and return to the prose only when
            it can still repay you.
          </p>
        </div>
        <div className="pointer-events-none absolute top-24 -right-28 hidden w-40 md:block">
          <p className="font-caveat text-lg leading-tight text-[#B33A2B]">
            ← This is the whole
            <br />
            paper in one line.
          </p>
          <svg className="mt-1 h-8 w-28 text-[#B33A2B]" viewBox="0 0 112 32" fill="none">
            <path d="M110 4 C 70 6, 30 14, 6 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M6 28 L 16 22 M6 28 L 14 30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -bottom-6 -left-24 hidden w-36 rotate-[-6deg] md:block">
          <p className="font-caveat text-base leading-tight text-[#B33A2B]">
            drop cap = signal
            <br />
            rest is noise…
          </p>
        </div>
      </div>
      <div className="absolute -inset-3 -z-10 rotate-[-1.5deg] rounded-[2px] bg-[#EDE4D3] shadow-[0_10px_30px_-15px_rgba(28,25,23,0.25)]" />
    </div>
  );
}

export function Page1() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="rr-grain relative min-h-screen overflow-hidden bg-[#F7F1E5] text-[#1C1917] selection:bg-[#B33A2B] selection:text-[#F7F1E5]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%231C1917' stroke-width='0.6'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 md:px-10">
        <div>
          <p className="font-fraunces text-[15px] font-semibold tracking-tight">ratio</p>
          <p className="mt-0.5 font-newsreader text-[10px] tracking-[0.32em] text-[#1C1917]/45 uppercase">
            A reading companion
          </p>
        </div>
        <nav className="hidden items-center gap-8 font-newsreader text-[13px] text-[#1C1917]/70 md:flex">
          <a href="#method" className="transition hover:text-[#B33A2B]">The method</a>
          <a href="#chapters" className="transition hover:text-[#B33A2B]">Four virtues</a>
          <a href="#practice" className="transition hover:text-[#B33A2B]">The practice</a>
          <a
            href="#begin"
            className="border-b border-[#B33A2B] pb-0.5 text-[#B33A2B]"
          >
            Begin
          </a>
        </nav>
      </header>

      <section ref={heroRef} className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 md:px-10 md:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y }}>
            <p className="font-caveat text-2xl text-[#B33A2B]">No. 01 — The Margin</p>
            <h1 className="mt-4 font-fraunces text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-balance">
              The margins
              <br />
              have been
              <br />
              <span className="rr-underline-hand inline-block">waiting for this.</span>
            </h1>
            <p className="mt-8 max-w-lg font-newsreader text-lg leading-[1.75] text-[#1C1917]/75">
              {product.description} Ratio Reader is the brilliant second pair of
              eyes that marks the page before you do — summary, hints, quotes, and
              the arguments hiding in the footnotes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#begin"
                className="group inline-flex items-center gap-3 bg-[#1C1917] px-7 py-4 font-newsreader text-[13px] tracking-[0.18em] text-[#F7F1E5] uppercase transition hover:bg-[#B33A2B]"
              >
                Upload a PDF
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#method" className="font-newsreader text-sm text-[#1C1917]/60 underline decoration-[#B33A2B]/50 underline-offset-4 transition hover:text-[#1C1917]">
                Read the method first
              </a>
            </div>
            <Note className="mt-10 text-xl" rotate={-1.5}>
              “finish” is the wrong goal. “find it” is the right one.
            </Note>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="rr-float" style={{ "--rr-rot": "2.2deg" } as React.CSSProperties}>
              <Page />
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px border-y border-[#1C1917]/15 bg-[#1C1917]/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#F7F1E5] px-5 py-7 text-center">
              <p className="font-fraunces text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</p>
              <p className="mt-2 font-newsreader text-[12px] tracking-[0.16em] text-[#1C1917]/55 uppercase">
                {s.label}
              </p>
              <p className="mt-0.5 font-caveat text-base text-[#B33A2B]/80">{s.unit}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="method" className="relative border-y border-[#1C1917]/12 bg-[#EDE4D3]/60">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-newsreader text-[11px] tracking-[0.32em] text-[#B33A2B] uppercase">
              An essay, in brief
            </p>
            <h2 className="mt-5 font-fraunces text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl">
              The practice of reading, slightly cheated.
            </h2>
            <Note className="mt-8 text-2xl" rotate={2}>
              the useful kind of cheating
            </Note>
          </div>
          <div className="space-y-6 font-newsreader text-[17px] leading-[1.85] text-[#1C1917]/80">
            <p>
              Every serious reader keeps a private ritual: the scan of the table of
              contents, the hunting of the thesis on page two, the underlining that
              turns a book into a map. Ratio Reader formalises that ritual — and then
              does the first pass for you.
            </p>
            <p>
              Drop in a PDF and Ratio returns four things: a <em className="text-[#B33A2B] not-italic">summary</em> that
              states the argument instead of paraphrasing the abstract;{" "}
              <em className="text-[#B33A2B] not-italic">hints</em> that tell you where the author is being careful, and
              where they are being slippery; <em className="text-[#B33A2B] not-italic">quotes</em> worth keeping, with
              their page numbers; and an <em className="text-[#B33A2B] not-italic">insight map</em> of themes,
              contradictions, and the sentences buried on page 214 that change
              everything before them.
            </p>
            <p className="text-[#1C1917]/60">
              What remains is the good part: the deep reading you were going to do
              anyway, aimed at the pages that can still repay you.
            </p>
          </div>
        </div>
      </section>

      <section id="chapters" className="relative mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="font-newsreader text-[11px] tracking-[0.32em] text-[#B33A2B] uppercase">
              Four virtues
            </p>
            <h2 className="mt-4 font-fraunces text-4xl font-semibold tracking-tight md:text-5xl">
              What lands on your desk
            </h2>
          </div>
          <Note className="hidden text-xl md:block" rotate={4}>
            keep these four.
            <br />
            discard the rest.
          </Note>
        </div>

        <div className="grid gap-px bg-[#1C1917]/12 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#F7F1E5] p-9 transition-colors hover:bg-[#FFFDF6] md:p-11"
            >
              <div className="flex items-start justify-between">
                <span className="font-caveat text-3xl text-[#B33A2B]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-newsreader text-[10px] tracking-[0.28em] text-[#1C1917]/35 uppercase">
                  {f.short}
                </span>
              </div>
              <h3 className="mt-6 font-fraunces text-2xl font-semibold tracking-tight md:text-[28px]">
                {f.title}
              </h3>
              <p className="mt-4 max-w-md font-newsreader text-[16px] leading-[1.8] text-[#1C1917]/70">
                {f.body}
              </p>
              <div className="mt-8 h-px w-0 bg-[#B33A2B] transition-all duration-500 group-hover:w-16" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="practice" className="relative border-y border-[#1C1917]/12 bg-[#1C1917] text-[#F7F1E5]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
          <p className="font-newsreader text-[11px] tracking-[0.32em] text-[#B33A2B] uppercase">
            The practice
          </p>
          <h2 className="mt-4 max-w-3xl font-fraunces text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            Three movements. Then you are ready.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative border-t border-[#F7F1E5]/20 pt-8">
                <p className="font-caveat text-5xl text-[#B33A2B]">{s.n}</p>
                <h3 className="mt-4 font-fraunces text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-4 font-newsreader text-[16px] leading-[1.8] text-[#F7F1E5]/65">{s.body}</p>
                {i < 2 && (
                  <span className="pointer-events-none absolute top-10 -right-6 hidden font-caveat text-2xl text-[#B33A2B] md:block">
                    ···
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="relative bg-[#EDE4D3]/50 p-8">
              <span className="font-fraunces text-6xl leading-none text-[#B33A2B]/35">“</span>
              <blockquote className="mt-2 font-newsreader text-[17px] leading-[1.75] text-[#1C1917]/85 italic">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#1C1917]/15 pt-4">
                <p className="font-fraunces text-sm font-semibold">{q.name}</p>
                <p className="mt-0.5 font-caveat text-lg text-[#B33A2B]">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="begin" className="relative overflow-hidden border-t border-[#1C1917]/12 bg-[#EDE4D3]">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center md:px-10">
          <Note className="text-2xl" rotate={-2}>
            start with the one you keep postponing
          </Note>
          <h2 className="mx-auto mt-6 max-w-4xl font-fraunces text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-balance">
            Bring the PDF.
            <br />
            Leave with the argument.
          </h2>
          <p className="mx-auto mt-8 max-w-xl font-newsreader text-lg leading-relaxed text-[#1C1917]/70">
            {product.tagline} Free for your first ten documents — no card, no
            onboarding call, no empty dashboard tour.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#begin"
              className="group inline-flex items-center gap-3 bg-[#B33A2B] px-8 py-5 font-newsreader text-[13px] tracking-[0.18em] text-[#F7F1E5] uppercase transition hover:bg-[#1C1917]"
            >
              Choose a PDF
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link to="/" className="font-newsreader text-sm text-[#1C1917]/50 transition hover:text-[#1C1917]">
              ← All five designs
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1C1917]/12 bg-[#F7F1E5]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 font-newsreader text-[12px] text-[#1C1917]/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>Ratio Reader — Design 01 · The Annotated Margin</p>
          <p className="font-caveat text-lg text-[#B33A2B]">Read less. Understand more.</p>
          <p>© {new Date().getFullYear()} Ratio</p>
        </div>
      </footer>
    </div>
  );
}
