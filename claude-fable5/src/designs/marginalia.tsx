import { Reveal } from "../components/reveal";

/*
 * Design 1 — "Marginalia"
 * The landing page IS an annotated manuscript. Cream paper, ink type,
 * an editor's red pen, a highlighter, and handwritten notes in the margins.
 * Fraunces (display) · Crimson Pro (text) · Caveat (handwriting)
 */

const PAPER = "#F5EFE1";
const INK = "#241B10";
const RED = "#B23A1C";
const PENCIL = "#8B7E6A";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 40" fill="none" className={className} aria-hidden>
      <path
        d="M86 6C68 26 38 36 6 28M6 28l10-8M6 28l13 4"
        stroke={RED}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Asterism() {
  return (
    <div className="my-20 flex justify-center text-2xl tracking-[1em]" style={{ color: PENCIL }} aria-hidden>
      ⁂
    </div>
  );
}

function MarginNote({
  children,
  side = "right",
  className = "",
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`font-caveat text-xl leading-snug ${side === "right" ? "rotate-2" : "-rotate-2"} ${className}`}
      style={{ color: RED }}
    >
      {children}
    </div>
  );
}

export function Marginalia() {
  return (
    <main
      className="min-h-screen font-crimson text-lg antialiased selection:bg-[#FFD338]/60"
      style={{ background: PAPER, color: INK, backgroundImage: grain }}
    >
      {/* ── Running head ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b" style={{ borderColor: `${INK}22`, background: `${PAPER}F2`, backdropFilter: "blur(6px)" }}>
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-4">
          <a href="#" className="font-fraunces text-xl font-semibold tracking-tight">
            Ratio<span style={{ color: RED }}>·</span>Reader
          </a>
          <nav className="hidden items-baseline gap-8 text-[15px] italic md:flex" style={{ color: `${INK}B0` }}>
            <a href="#method" className="hover:not-italic" style={{ color: "inherit" }}>the method</a>
            <a href="#brief" className="hover:not-italic">the brief</a>
            <a href="#marginalia" className="hover:not-italic">marginalia</a>
          </nav>
          <a
            href="#card"
            className="border px-4 py-1.5 font-fraunces text-sm transition-colors hover:text-white"
            style={{ borderColor: INK }}
            onMouseEnter={(e) => { e.currentTarget.style.background = INK; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            Begin reading
          </a>
        </div>
      </header>

      {/* ── Hero: an edited first page ─────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.35em]" style={{ color: PENCIL }}>
            Chapter I &nbsp;·&nbsp; The Problem with Reading
          </p>
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-4xl">
          <Reveal delay={120}>
            <h1 className="text-center font-fraunces text-[clamp(2.8rem,7.5vw,5.8rem)] font-medium leading-[1.04] tracking-tight">
              You don't have to{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative">
                  read it all
                  <span
                    className="absolute left-[-2%] top-[54%] h-[3px] w-[104%] -rotate-2"
                    style={{ background: RED }}
                    aria-hidden
                  />
                </span>
                <span
                  className="absolute -top-7 left-1/2 w-max -translate-x-1/2 -rotate-3 font-caveat text-[clamp(1.3rem,2.6vw,2rem)] font-bold"
                  style={{ color: RED }}
                >
                  read what matters
                </span>
              </span>
              <br />
              to <em className="hl-sweep font-light">understand it all.</em>
            </h1>
          </Reveal>

          {/* margin note, hero */}
          <Reveal delay={600} className="pointer-events-none absolute -right-10 top-6 hidden w-44 lg:block">
            <MarginNote>
              300 pages in,
              <br />4 minutes out ↓
            </MarginNote>
            <HandArrow className="mt-1 w-20 rotate-[140deg]" />
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xl leading-relaxed md:text-2xl" style={{ color: `${INK}D0` }}>
            <span className="float-left mr-3 mt-1 font-fraunces text-7xl font-semibold leading-[0.75]" style={{ color: RED }}>
              U
            </span>
            pload any PDF — a paper, a report, a four-hundred-page tome — and Ratio Reader hands back the heart of
            it: a faithful summary, the quotes worth keeping, and hints for where to slow down when you read deeply.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#card"
              className="group px-8 py-4 font-fraunces text-lg text-[#F5EFE1] shadow-[4px_4px_0_rgba(36,27,16,0.25)] transition-transform hover:-translate-y-0.5"
              style={{ background: INK }}
            >
              Upload your first PDF
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#brief" className="px-4 py-4 text-lg italic underline decoration-dotted underline-offset-4" style={{ color: `${INK}A8` }}>
              or see a sample brief
            </a>
          </div>
          <p className="mt-6 text-center font-caveat text-lg" style={{ color: PENCIL }}>
            free for your first three documents — no account, no speed-reading course*
          </p>
        </Reveal>
      </section>

      <Asterism />

      {/* ── The Method ─────────────────────────────────────────────── */}
      <section id="method" className="mx-auto max-w-5xl px-6 pb-8">
        <Reveal>
          <h2 className="font-fraunces text-4xl font-medium md:text-5xl">
            The method<span style={{ color: RED }}>.</span>
          </h2>
          <p className="mt-3 max-w-xl text-xl italic" style={{ color: `${INK}A8` }}>
            Three steps, in the tradition of every good editor since Gutenberg.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {[
            {
              n: "i.",
              title: "The manuscript arrives",
              body: "Drop in any PDF. Lecture notes, legal briefs, dissertations, that report you were supposed to read last Tuesday.",
              note: "yes, even the scanned ones",
            },
            {
              n: "ii.",
              title: "Ratio reads it. Twice.",
              body: "Once for the argument, once for the texture — what's claimed, what's proven, what's merely beautiful.",
              note: "≈ 40 seconds per 100 pages",
            },
            {
              n: "iii.",
              title: "You receive the brief",
              body: "A summary in proportion, quotes with page numbers, hints, and the insights between the lines.",
              note: "the good part",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 150}>
              <div className="relative border-t pt-6" style={{ borderColor: `${INK}33` }}>
                <span className="font-fraunces text-5xl italic" style={{ color: RED }}>
                  {s.n}
                </span>
                <h3 className="mt-4 font-fraunces text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed" style={{ color: `${INK}C8` }}>
                  {s.body}
                </p>
                <p className="mt-4 font-caveat text-xl" style={{ color: PENCIL }}>
                  ({s.note})
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Asterism />

      {/* ── The Brief: open-book spread ────────────────────────────── */}
      <section id="brief" className="mx-auto max-w-6xl px-6 pb-10">
        <Reveal>
          <h2 className="text-center font-fraunces text-4xl font-medium md:text-5xl">
            One spread<span style={{ color: RED }}>:</span> before &amp; after
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-xl italic" style={{ color: `${INK}A8` }}>
            On the left, what you were assigned. On the right, what Ratio hands you.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div
            className="relative mt-14 grid overflow-hidden rounded-sm border shadow-[0_24px_60px_-24px_rgba(36,27,16,0.45)] md:grid-cols-2"
            style={{ borderColor: `${INK}30`, background: "#FBF7EC" }}
          >
            {/* spine */}
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-10 -translate-x-1/2 md:block"
              style={{ background: "linear-gradient(90deg, transparent, rgba(36,27,16,0.16), transparent)" }}
              aria-hidden
            />

            {/* left page — the original */}
            <div className="relative border-b p-8 md:border-b-0 md:p-12" style={{ borderColor: `${INK}22` }}>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ color: PENCIL }}>
                The original · p. 142 of 311
              </p>
              <h3 className="mt-4 font-fraunces text-xl font-semibold">The Attention Economy and the Modern Reader</h3>
              <div className="mt-5 space-y-4 text-justify text-[15px] leading-[1.75]" style={{ color: `${INK}D6` }}>
                <p>
                  It has become fashionable to lament the decline of deep reading, as though attention were a finite
                  ore being strip-mined by the apparatus of modern life.{" "}
                  <mark className="px-0.5" style={{ background: "rgba(255,211,56,0.55)", color: "inherit" }}>
                    Yet the evidence suggests the problem is not that we read less, but that we read without
                    proportion
                  </mark>
                  — devoting equal weight to the essential and the incidental alike.
                </p>
                <p>
                  The nineteenth-century scholar kept a commonplace book precisely for this reason: the act of
                  selection was understood to be the act of understanding.{" "}
                  <span style={{ textDecorationLine: "underline", textDecorationStyle: "wavy", textDecorationColor: RED, textUnderlineOffset: "4px" }}>
                    To choose a passage was to weigh it
                  </span>
                  , and to weigh it was to know its worth relative to the whole.
                </p>
                <p>
                  What the modern reader lacks is not time but a instrument of proportion — a means of seeing, before
                  the deep dive, where the depths actually are. Without it, every page demands the same attention,
                  which is to say that no page truly receives it.
                </p>
              </div>
              {/* scribbles on the original */}
              <div className="pointer-events-none absolute right-4 top-32 hidden w-28 lg:block">
                <MarginNote>key claim!</MarginNote>
                <HandArrow className="w-14 -scale-x-100 rotate-12" />
              </div>
              <div className="pointer-events-none absolute bottom-10 left-4 hidden lg:block">
                <MarginNote side="left">this → the whole point</MarginNote>
              </div>
            </div>

            {/* right page — the Ratio brief */}
            <div className="relative p-8 md:p-12" style={{ background: "#F8F2E3" }}>
              <div className="flex items-baseline justify-between">
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: RED }}>
                  The Ratio brief
                </p>
                <p className="font-caveat text-lg" style={{ color: PENCIL }}>
                  read in ~4 min
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-fraunces text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: PENCIL }}>
                    Summary
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-[17px] leading-relaxed">
                    <li className="flex gap-3">
                      <span style={{ color: RED }}>—</span>
                      The crisis isn't reading less; it's reading without <em>proportion</em>.
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: RED }}>—</span>
                      Selection is understanding: the commonplace book as proof.
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: RED }}>—</span>
                      Readers need an instrument that shows where the depths are <em>before</em> diving.
                    </li>
                  </ul>
                </div>

                <figure className="border-l-2 pl-5" style={{ borderColor: RED }}>
                  <blockquote className="font-fraunces text-xl italic leading-snug">
                    "To choose a passage was to weigh it, and to weigh it was to know its worth relative to the
                    whole."
                  </blockquote>
                  <figcaption className="mt-2 text-sm" style={{ color: PENCIL }}>
                    — verbatim, p. 142 · citation-ready
                  </figcaption>
                </figure>

                <div className="rotate-[0.6deg] border p-4" style={{ borderColor: `${INK}30`, background: "rgba(255,211,56,0.18)" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: `${INK}99` }}>
                    Hint
                  </p>
                  <p className="mt-1 text-[16px] leading-relaxed">
                    Chapter 9 quietly reverses this argument — slow down there if you read in full.
                  </p>
                </div>

                <div className="-rotate-[0.5deg] border p-4" style={{ borderColor: `${INK}30`, background: "#FBF7EC" }}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: RED }}>
                    Insight
                  </p>
                  <p className="mt-1 text-[16px] leading-relaxed">
                    The author never says it, but the "instrument of proportion" is an argument <em>against</em>{" "}
                    speed-reading — and for tools exactly like this one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Asterism />

      {/* ── Marginalia: the features ───────────────────────────────── */}
      <section id="marginalia" className="mx-auto max-w-5xl px-6 pb-10">
        <Reveal>
          <h2 className="font-fraunces text-4xl font-medium md:text-5xl">
            What lives in the margins<span style={{ color: RED }}>.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0">
          {[
            {
              title: "Faithful summaries",
              body: "The argument, the evidence, the conclusion — kept in proportion to the original. Nothing invented, nothing inflated.",
              note: "no machine-made fluff",
            },
            {
              title: "Guiding hints",
              body: "Where to slow down, what the author buries in chapter nine, which section everyone misreads.",
              note: "like a friend who read it first",
            },
            {
              title: "Verbatim quotes",
              body: "Word-for-word passages with page numbers attached. Ready for your essay, your meeting, your commonplace book.",
              note: "p. 84, ready to paste",
            },
            {
              title: "Connected insights",
              body: "What the author implies but never states outright — the threads between chapters, made visible.",
              note: "the aha! part",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div
                className="group grid gap-2 border-t py-8 md:grid-cols-[1fr_auto] md:items-baseline md:gap-10"
                style={{ borderColor: `${INK}26` }}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  <span className="font-fraunces text-2xl italic tabular-nums" style={{ color: PENCIL }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-fraunces text-2xl transition-transform group-hover:translate-x-1 md:text-3xl">
                      {f.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-lg leading-relaxed" style={{ color: `${INK}C0` }}>
                      {f.body}
                    </p>
                  </div>
                </div>
                <MarginNote className="md:w-44 md:text-right">{f.note}</MarginNote>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Asterism />

      {/* ── Blurb ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <Reveal>
          <figure className="text-center">
            <blockquote className="font-fraunces text-[clamp(1.6rem,4vw,2.6rem)] font-light italic leading-snug">
              "I stopped <span className="hl-sweep not-italic">pretending</span> I'd read the assigned chapters — and
              started actually knowing them."
            </blockquote>
            <figcaption className="mt-6 text-lg" style={{ color: PENCIL }}>
              — a graduate student, sleeping again
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <Asterism />

      {/* ── Library card CTA ───────────────────────────────────────── */}
      <section id="card" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-fraunces text-4xl font-medium leading-tight md:text-5xl">
              Your library card<span style={{ color: RED }}>,</span>
              <br />
              issued in seconds.
            </h2>
            <p className="mt-5 max-w-md text-xl leading-relaxed" style={{ color: `${INK}C0` }}>
              Three documents free, then a flat fee that costs less than the coffee you drink while not reading.
            </p>
            <p className="mt-6 font-caveat text-2xl" style={{ color: RED }}>
              overdue books forgiven ↓
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="relative rotate-1 border p-8 shadow-[8px_10px_0_rgba(36,27,16,0.12)]"
              style={{ borderColor: `${INK}50`, background: "#FBF7EC" }}
            >
              <p className="text-center text-xs uppercase tracking-[0.4em]" style={{ color: PENCIL }}>
                Ratio Public Library
              </p>
              <p className="mt-1 text-center font-fraunces text-2xl font-semibold">Reader's Card</p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="m-email" className="text-xs uppercase tracking-[0.25em]" style={{ color: PENCIL }}>
                    Name of borrower
                  </label>
                  <input
                    id="m-email"
                    type="email"
                    placeholder="you@somewhere.edu"
                    className="mt-1 w-full border-b bg-transparent pb-1 font-caveat text-2xl outline-none placeholder:opacity-50"
                    style={{ borderColor: `${INK}66`, color: INK }}
                  />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.25em]" style={{ color: PENCIL }}>
                    Date due
                    <p className="mt-1 font-caveat text-xl normal-case tracking-normal" style={{ color: RED }}>
                      never.
                    </p>
                  </div>
                  <button
                    className="px-6 py-3 font-fraunces text-[#F5EFE1] transition-transform hover:-translate-y-0.5"
                    style={{ background: RED }}
                  >
                    Issue my card
                  </button>
                </div>
              </div>

              {/* date stamps */}
              <div
                className="pointer-events-none absolute -right-4 -top-5 rotate-12 border-2 px-3 py-1 font-plexmono text-xs font-semibold uppercase"
                style={{ borderColor: RED, color: RED }}
                aria-hidden
              >
                Approved
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Colophon ───────────────────────────────────────────────── */}
      <footer className="border-t py-12 text-center" style={{ borderColor: `${INK}26` }}>
        <p className="font-fraunces text-lg">
          Ratio<span style={{ color: RED }}>·</span>Reader
        </p>
        <p className="mt-2 text-sm italic" style={{ color: PENCIL }}>
          Set in Fraunces &amp; Crimson Pro on digital paper. § MMXXVI.
        </p>
        <p className="mt-4 font-caveat text-lg" style={{ color: PENCIL }}>
          *no speed-reading courses were harmed in the making of this product
        </p>
      </footer>
    </main>
  );
}
