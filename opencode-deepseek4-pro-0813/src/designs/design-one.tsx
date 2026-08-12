import "@fontsource-variable/fraunces";
import "@fontsource-variable/newsreader";
import { motion } from "motion/react";

const paper = "#f6f1e4";
const ink = "#191510";
const red = "#b3392b";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function DesignOne() {
  return (
    <div
      className="min-h-screen font-[Fraunces_Variable] text-[#191510]"
      style={{ background: paper }}
    >
      <div className="paper-noise pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-multiply" />

      {/* Masthead */}
      <header className="relative border-b-2 border-[#191510]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between py-3 text-[10px] uppercase tracking-[0.2em] text-[#191510]/70 md:text-xs">
            <span>Vol. II — No. 47</span>
            <span className="hidden md:block">Tuesday, August 12, 2026</span>
            <span>Price: two cents of attention</span>
          </div>
          <div className="border-t border-[#191510]/30" />
          <div className="py-6 text-center md:py-8">
            <h1 className="text-5xl font-black tracking-tight md:text-8xl" style={{ fontVariationSettings: "'opsz' 144" }}>
              The Ratio Reader
            </h1>
            <p className="mt-3 font-[Newsreader_Variable] text-sm italic text-[#191510]/70 md:text-lg">
              A periodical for people who intend to finish more than they start.
            </p>
          </div>
          <div className="border-t-2 border-[#191510]" />
          <nav className="flex items-center justify-between py-2 text-[10px] uppercase tracking-[0.18em] text-[#191510]/80 md:text-xs">
            {["Summaries", "Hints", "Quotes", "Insights", "The Method"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-[#b3392b] transition-colors">
                {s}
              </a>
            ))}
          </nav>
          <div className="border-b-2 border-[#191510]" />
        </div>
      </header>

      {/* Lead story */}
      <section className="mx-auto max-w-6xl px-5 pt-10 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <motion.p {...fadeUp} className="text-[11px] uppercase tracking-[0.3em] text-[#b3392b]">
              The Lead — Editorial
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-4 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl"
            >
              Read less.
              <br />
              Know more.
            </motion.h2>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-8 md:columns-2 md:gap-10">
              <p className="text-lg leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-[#b3392b]">
                Hand this instrument a PDF — a research paper, a contract, a novel's worth of
                anything — and it returns the argument, annotated. What matters, why it matters,
                and the exact lines that do the heavy lifting. No skimming required; the skimming
                has already been done, thoughtfully.
              </p>
              <p className="mt-4 text-lg leading-relaxed md:mt-0">
                We call the measure of its work the <em>ratio</em>: two hundred pages in, nine
                minutes out. It is the first reader designed for the century of too much to read.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#method"
                className="bg-[#191510] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#f6f1e4] transition-colors hover:bg-[#b3392b]"
              >
                Try the first issue free
              </a>
              <span className="font-[Newsreader_Variable] text-base italic text-[#191510]/60">
                No subscription. No excuses.
              </span>
            </motion.div>
          </div>
          <motion.aside {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="md:col-span-4">
            <div className="border-2 border-[#191510] p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b3392b]">In this issue</p>
              <ul className="mt-4 space-y-4 font-[Newsreader_Variable] text-base">
                {[
                  ["The Summary", "the whole point, compressed — p. 3"],
                  ["The Hints", "a tutor living in your margins — p. 4"],
                  ["The Quotes", "proof, in the author's own words — p. 5"],
                  ["The Insights", "why it matters, and what follows — p. 6"],
                  ["The Method", "how a PDF becomes a digest — p. 7"],
                ].map(([t, d]) => (
                  <li key={t} className="flex items-baseline justify-between gap-3 border-b border-dotted border-[#191510]/40 pb-3 last:border-0 last:pb-0">
                    <span className="font-semibold">{t}</span>
                    <span className="text-sm text-[#191510]/55">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 bg-[#191510] p-5 text-[#f6f1e4]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f6f1e4]/60">Fig. 1 — The Ratio</p>
              <p className="mt-3 text-4xl font-black">
                84 pages <span className="text-[#e8a09a]">→</span> 9 minutes
              </p>
              <p className="mt-2 font-[Newsreader_Variable] text-sm italic text-[#f6f1e4]/70">
                Compression, measured honestly, printed daily.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Ticker */}
      <div className="mt-14 overflow-hidden border-y-2 border-[#191510] bg-[#191510] py-3 text-[#f6f1e4]">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-sm uppercase tracking-[0.2em]" style={{ ["--marquee-duration" as string]: "26s" }}>
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["12.4 : 1 average compression", "3× retention reported by early readers", "4,211 PDFs digested this week", "0 pages of fluff survived", "100% of the argument, kept"].map((s) => (
              <span key={`${k}-${s}`} className="flex items-center gap-10">
                {s} <span className="text-[#b3392b]" style={{ color: "#e8a09a" }}>✦</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Facsimile of an annotated page */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b3392b]">Exclusive facsimile</p>
            <h3 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">A page, as the Reader sees it.</h3>
          </div>
          <p className="hidden font-[Newsreader_Variable] text-sm italic text-[#191510]/60 md:block">
            Reproduced from a live session, slightly abridged.
          </p>
        </div>

        <motion.div {...fadeUp} className="relative mx-auto max-w-5xl -rotate-[0.6deg] border-2 border-[#191510] bg-[#fdfaf1] shadow-[10px_12px_0_rgba(25,21,16,0.14)]">
          <div className="grid md:grid-cols-5">
            {/* The page itself */}
            <div className="border-b-2 border-[#191510] p-6 md:col-span-3 md:border-b-0 md:border-r-2 md:p-8">
              <div className="flex items-baseline justify-between border-b border-[#191510]/30 pb-2 text-[10px] uppercase tracking-[0.2em] text-[#191510]/55">
                <span>The Attention Economy, Reconsidered — J. Okafor</span>
                <span>p. 12 / 214</span>
              </div>
              <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#191510]/85">
                <p>
                  It has become customary to describe attention as a scarce resource, mined from
                  users the way ore is mined from a hillside. This metaphor is not merely
                  imprecise; it is actively misleading. Attention is not extracted —
                </p>
                <p className="relative">
                  <span className="bg-[#f3d98b] px-0.5">it is cultivated, and like all cultivated things it dies
                  when overharvested.</span>
                  <span className="absolute -right-6 -top-3 hidden rotate-[-8deg] font-[Newsreader_Variable] text-sm italic md:block" style={{ color: red }}>
                    ★ the thesis, right here
                  </span>
                </p>
                <p>
                  The platforms that dominate our century have built their fortunes on a simple
                  error: treating the reader's hour as a field to be clear-cut rather than a garden
                  to be tended. The consequence is measurable. A reader who is asked to attend to
                  everything attends to nothing, and pays for the privilege.
                </p>
                <p className="relative">
                  <span className="underline decoration-[#b3392b] decoration-2 underline-offset-4">
                    The cure for an overharvested mind is not more reading, but better reading —
                    fewer pages, chosen well, understood fully.
                  </span>
                  <span className="absolute -bottom-2 -right-4 hidden rotate-[-5deg] font-[Newsreader_Variable] text-sm italic md:block" style={{ color: red }}>
                    underline this twice
                  </span>
                </p>
              </div>
            </div>
            {/* The reader's margin */}
            <div className="bg-[#f6f1e4] p-6 md:col-span-2 md:p-8" style={{ background: paper }}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b3392b]">Reader's digest</p>
              <div className="mt-5 space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#191510]/50">In three sentences</p>
                  <p className="mt-2 font-[Newsreader_Variable] text-[15px] leading-6">
                    Okafor argues attention is cultivated, not mined. Platforms that harvest it
                    destroy it. The fix is fewer, better-read pages.
                  </p>
                </div>
                <div className="border-t border-dotted border-[#191510]/40 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#191510]/50">Hint</p>
                  <p className="mt-2 font-[Newsreader_Variable] text-[15px] italic leading-6" style={{ color: red }}>
                    The gardening metaphor returns in §4 — don't skim it, it's load-bearing.
                  </p>
                </div>
                <div className="border-t border-dotted border-[#191510]/40 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#191510]/50">Quote of the page</p>
                  <blockquote className="mt-2 border-l-2 border-[#191510] pl-3 font-[Newsreader_Variable] text-[15px] leading-6">
                    “A reader asked to attend to everything attends to nothing.”
                  </blockquote>
                </div>
                <div className="border-t border-dotted border-[#191510]/40 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#191510]/50">This page cost you</p>
                  <p className="mt-1 text-3xl font-black">
                    0:41 <span className="text-base font-medium text-[#191510]/50">instead of 6:20</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features as articles */}
      <section className="border-t-2 border-[#191510] bg-[#efe9d9]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#b3392b]">The departments</p>
          <h3 className="mt-3 text-center text-4xl font-black tracking-tight md:text-5xl">
            Everything a margin was always for.
          </h3>

          <div className="mt-14 grid gap-px border-2 border-[#191510] bg-[#191510] md:grid-cols-2">
            {[
              {
                num: "§1",
                title: "The Summary",
                kicker: "the whole point, compressed",
                body: "Not a chatbot rambling about a PDF. A real digest: the argument's spine, its stakes, and the conclusions you'd have underlined yourself. Long enough to be true, short enough to be read before the kettle boils.",
                fig: "214 pages → 3 paragraphs",
              },
              {
                num: "§2",
                title: "The Hints",
                kicker: "a tutor in your margins",
                body: "Every digest comes annotated. Hints flag the passages that matter later, the claims that need scrutiny, and the sentences that unlock whole chapters — the way a good teacher marks a book before lending it to you.",
                fig: "when a sentence is load-bearing",
              },
              {
                num: "§3",
                title: "The Quotes",
                kicker: "proof, in the author's words",
                body: "No paraphrase without evidence. The Reader pulls the exact lines that carry the argument, so you can quote the source like you actually read it — because, in the way that counts, you did.",
                fig: "the author's own voice, kept",
              },
              {
                num: "§4",
                title: "The Insights",
                kicker: "why it matters, and what follows",
                body: "The part most summaries skip. Insights connect the text to its field, its critics, and the argument it answers. You don't just learn what the author said — you learn where it fits.",
                fig: "context, on the house",
              },
            ].map((f, i) => (
              <motion.article
                key={f.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="flex flex-col justify-between gap-8 p-7 md:p-9"
                style={{ background: paper }}
              >
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-5xl font-black" style={{ color: red }}>{f.num}</span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#191510]/50">{f.kicker}</span>
                  </div>
                  <h4 className="mt-4 text-3xl font-black tracking-tight">{f.title}</h4>
                  <p className="mt-3 text-[15px] leading-7 text-[#191510]/80">{f.body}</p>
                </div>
                <p className="border-t border-[#191510]/30 pt-3 font-[Newsreader_Variable] text-sm italic text-[#191510]/60">
                  Fig. {i + 2} — {f.fig}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-t-2 border-[#191510]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <motion.blockquote {...fadeUp} className="font-[Newsreader_Variable] text-3xl italic leading-snug md:text-5xl">
            “It is not the amount you read that changes you.
            <br className="hidden md:block" />
            It is the amount that <span className="underline decoration-[#b3392b] decoration-4 underline-offset-8">survives</span>.”
          </motion.blockquote>
          <motion.p {...fadeUp} className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#191510]/55">
            — Attributed to the Editor, on a Tuesday
          </motion.p>
        </div>
      </section>

      {/* The Method */}
      <section id="method" className="border-t-2 border-[#191510] bg-[#191510] text-[#f6f1e4]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "#e8a09a" }}>The Method — p. 7</p>
              <h3 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Three acts, no curtain.</h3>
            </div>
          </div>
          <div className="mt-12 grid gap-px border-2 border-[#f6f1e4]/30 bg-[#f6f1e4]/30 md:grid-cols-3">
            {[
              ["Act I", "Hand over the document", "Any PDF. A paper, a brief, a book, a manifesto. The Reader takes it as it is — no preparation, no formatting rituals."],
              ["Act II", "The engine reads", "Not skims — reads. Weighs every sentence, keeps the load-bearing ones, and notes where the argument turns."],
              ["Act III", "The digest arrives", "Summary, hints, quotes, insights. One page of paper for every hundred you didn't have to read."],
            ].map(([act, t, d], i) => (
              <motion.div key={act} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="p-7 md:p-9" style={{ background: ink }}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#f6f1e4]/50">{act}</p>
                <h4 className="mt-3 text-2xl font-black">{t}</h4>
                <p className="mt-3 text-[15px] leading-7 text-[#f6f1e4]/75">{d}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12 text-center">
            <a href="#top" className="inline-block bg-[#b3392b] px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e4] transition-colors hover:bg-[#f6f1e4] hover:text-[#191510]">
              Open the front page
            </a>
            <p className="mt-4 font-[Newsreader_Variable] text-sm italic text-[#f6f1e4]/55">
              Free forever for the first issue of every document.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corrections & colophon */}
      <footer className="border-t-2 border-[#191510]">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#191510]/50">Corrections & clarifications</p>
              <p className="mt-2 font-[Newsreader_Variable] text-sm italic text-[#191510]/70">
                An earlier draft of this page claimed reading was hard. We regret the error; it
                was only ever the wrong reading.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#191510]/50">Letters</p>
              <p className="mt-2 font-[Newsreader_Variable] text-sm italic text-[#191510]/70">
                “I finished three books this month. My bookshelf is in shock.” — a subscriber, verified.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#191510]/50">The Colophon</p>
              <p className="mt-2 font-[Newsreader_Variable] text-sm italic text-[#191510]/70">
                Printed by Ratio Press. Set in Fraunces & Newsreader. No trees were harmed;
                several PDFs were.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#191510]/30 pt-5 text-[10px] uppercase tracking-[0.25em] text-[#191510]/55">
            <span>© MMXXVI The Ratio Reader</span>
            <span>All the news that's fit to skim</span>
            <span>Est. 2026 — The Year of the Digest</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
