import {
  BookOpenText,
  Clock3,
  Feather,
  FileText,
  Lightbulb,
  Mail,
  Quote,
  Sparkles,
  Stamp,
} from "lucide-react";
import { Reveal } from "../components/Reveal";

const INK = "#1D1712";
const RED = "#A63A2B";

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4 py-2 text-[#8A7B63]">
      <span className="h-px w-16 bg-current opacity-50 md:w-32" />
      <svg width="26" height="14" viewBox="0 0 26 14" fill="none" aria-hidden>
        <path
          d="M13 1c3 0 5 2.5 5 6s-2 6-5 6-5-2.5-5-6 2-6 5-6Zm-8 6h4m14 0h-4"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <span className="h-px w-16 bg-current opacity-50 md:w-32" />
    </div>
  );
}

function SectionKicker({ children }: { children: string }) {
  return (
    <p
      className="font-jetbrains text-[10px] uppercase tracking-[0.4em]"
      style={{ color: RED }}
    >
      {children}
    </p>
  );
}

export function Design1() {
  return (
    <div
      className="min-h-screen font-newsreader"
      style={{ background: "#F6F1E4", color: INK }}
    >
      <div className="grain grain-soft" />

      {/* ─────────── dateline bar ─────────── */}
      <div className="border-b border-[#1D1712]/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-[#5C5245] md:text-[11px]">
          <span>Vol. I — № 07</span>
          <span className="hidden sm:inline">Friday, July 17, 2026</span>
          <span>Price: one PDF</span>
        </div>
      </div>

      {/* ─────────── masthead ─────────── */}
      <header className="mx-auto max-w-6xl px-5 pt-8 md:pt-12">
        <Reveal>
          <h1
            className="text-center font-fraunces font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)" }}
          >
            Ratio Reader
          </h1>
          <div className="rule-double mt-5" />
          <p className="mt-3 text-center font-jetbrains text-[10px] uppercase tracking-[0.5em] text-[#5C5245] md:text-xs">
            The distilled edition of every document
          </p>
          <div className="mt-3 flex items-center justify-center gap-6 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#8A7B63]">
            <a href="#method" className="transition-colors hover:text-[#A63A2B]">The Method</a>
            <span>·</span>
            <a href="#margins" className="transition-colors hover:text-[#A63A2B]">Margins</a>
            <span>·</span>
            <a href="#letters" className="transition-colors hover:text-[#A63A2B]">Letters</a>
            <span>·</span>
            <a href="#rates" className="transition-colors hover:text-[#A63A2B]">Rates</a>
          </div>
          <div className="mt-5 border-b border-[#1D1712]/70" />
        </Reveal>
      </header>

      {/* ─────────── hero article ─────────── */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <SectionKicker>Reading, reinvented</SectionKicker>
              <h2
                className="mt-4 font-fraunces font-semibold leading-[1.02] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)" }}
              >
                Read less.{" "}
                <em className="font-light" style={{ color: RED }}>
                  Know more.
                </em>
              </h2>
              <p className="mt-6 max-w-xl text-lg italic leading-relaxed text-[#4A4136] md:text-xl">
                Ratio Reader receives any PDF — theses, reports, contracts,
                tomes — and returns a brief of its essential arguments,
                evidence, and quotable lines.
              </p>
              <p className="mt-3 font-jetbrains text-[10px] uppercase tracking-[0.3em] text-[#8A7B63]">
                By the Ratio Editorial Desk · 4 min read
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 columns-1 gap-8 space-y-5 text-[15px] leading-[1.75] text-[#33291F] sm:columns-2 hyphens-editorial">
                <p className="drop-cap">
                  There was a time when finishing a document meant reading all
                  of it. Ninety pages of market analysis, two hundred of
                  dissertation, forty of legal prose — the whole weight of it,
                  page after page, whether or not every page earned its keep.
                  Ratio Reader was founded on a simpler belief: that every
                  document carries an essence, and that essence can be drawn
                  out faithfully.
                </p>
                <p>
                  Submit a manuscript and our engine reads it the way a
                  careful editor would — marking the argument's spine, noting
                  where the evidence gathers, folding down the corners of
                  pages that matter. What returns is not a mutilation but a
                  distillation: the summary of record, true to the original.
                </p>
                <p>
                  Where the prose grows dense, the Reader leaves{" "}
                  <em>hints</em> — small lanterns in the margin. Where a
                  sentence deserves permanence, it is lifted as a{" "}
                  <em>quotation</em>, cited to its page. And where patterns
                  hide beneath the text, they surface as <em>insights</em>,
                  filed plainly for your consideration.
                </p>
                <p>
                  The result, we are told, reads like the document wished it
                  could have: brief, luminous, and impossible to put down.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#rates"
                  className="group inline-flex items-center gap-3 border border-[#1D1712] bg-[#1D1712] px-7 py-3.5 font-jetbrains text-xs uppercase tracking-[0.25em] text-[#F6F1E4] transition-colors hover:bg-transparent hover:text-[#1D1712]"
                >
                  <Stamp className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                  Subscribe — it's free
                </a>
                <a
                  href="#method"
                  className="inline-flex items-center gap-3 border-b border-[#1D1712]/40 pb-1 font-jetbrains text-xs uppercase tracking-[0.25em] transition-colors hover:border-[#A63A2B] hover:text-[#A63A2B]"
                >
                  Read the method
                </a>
              </div>
            </Reveal>
          </div>

          {/* engraved figure */}
          <div className="md:col-span-4">
            <Reveal delay={200}>
              <figure className="border border-[#1D1712]/60 bg-[#EFE8D6] p-6 shadow-[6px_6px_0_0_rgba(29,23,18,0.9)]">
                <p className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-[#8A7B63]">
                  Fig. 1 — The distillation
                </p>
                <div className="mt-5 space-y-4">
                  <div className="border border-[#1D1712]/70 bg-[#F6F1E4] p-4">
                    <div className="flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-widest text-[#5C5245]">
                      <FileText className="h-3.5 w-3.5" /> 214 pages in
                    </div>
                    <div className="mt-3 space-y-1.5 opacity-70">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="h-px bg-[#1D1712]"
                          style={{ width: `${100 - (i % 3) * 14}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center" style={{ color: RED }}>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none">
                      <path
                        d="M10 0v28m0 0-6-7m6 7 6-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="border border-[#A63A2B] bg-[#F6F1E4] p-4">
                    <div className="flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-widest" style={{ color: RED }}>
                      <BookOpenText className="h-3.5 w-3.5" /> 6 pages out
                    </div>
                    <div className="mt-3 space-y-1.5 opacity-80" style={{ color: RED }}>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-px bg-current"
                          style={{ width: `${92 - i * 16}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <figcaption className="mt-5 border-t border-[#1D1712]/40 pt-3 text-[13px] italic leading-relaxed text-[#5C5245]">
                  A 214-page market report, reduced to the six pages an
                  executive actually reads. Nothing of consequence lost.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Ornament />

      {/* ─────────── the method ─────────── */}
      <section id="method" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <Reveal>
          <div className="flex items-end justify-between border-b-2 border-[#1D1712] pb-4">
            <h2 className="font-fraunces text-3xl font-semibold tracking-tight md:text-5xl">
              The Method
            </h2>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-[#8A7B63]">
              In three acts
            </span>
          </div>
        </Reveal>
        <div className="grid divide-y divide-[#1D1712]/50 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            {
              no: "I.",
              title: "Submit the manuscript",
              body: "Drag any PDF onto the Reader — a thesis at midnight, a contract before signing, a report you were 'cc'd on. It accepts them all without judgement.",
              icon: FileText,
            },
            {
              no: "II.",
              title: "We distill",
              body: "The engine reads cover to cover, ranking every argument by consequence, marking evidence, and lifting the lines worth keeping. Seconds pass.",
              icon: Feather,
            },
            {
              no: "III.",
              title: "You digest",
              body: "A clean brief arrives: the summary, the hints for hard passages, the quotations with their pages, the insights between the lines. Read it over coffee.",
              icon: BookOpenText,
            },
          ].map((s, i) => (
            <div key={s.no} className="px-0 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
              <Reveal delay={i * 120}>
                <div className="flex items-center justify-between">
                  <span className="font-fraunces text-2xl font-semibold" style={{ color: RED }}>
                    {s.no}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1D1712]/60">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="mt-4 font-fraunces text-xl font-semibold md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4A4136]">
                  {s.body}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── margins / features ─────────── */}
      <section id="margins" className="border-y border-[#1D1712]/70 bg-[#EFE8D6]">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Reveal>
            <SectionKicker>Notes from the margins</SectionKicker>
            <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight md:text-5xl">
              Everything a careful reader
              <br />
              would have told you.
            </h2>
          </Reveal>
          <div className="mt-10">
            {[
              {
                tag: "§ 01",
                icon: BookOpenText,
                name: "Summaries",
                text: "The document's spine, re-set in plain language. Chapters collapse into paragraphs; paragraphs into sentences you can defend in a meeting.",
              },
              {
                tag: "§ 02",
                icon: Lightbulb,
                name: "Hints",
                text: "Where the original grows thorny, the Reader leaves a lantern — context, definitions, and the one sentence you should read twice.",
              },
              {
                tag: "§ 03",
                icon: Quote,
                name: "Quotes",
                text: "Passages that deserve permanence, lifted verbatim and cited to their page. Paste them straight into your notes, your deck, your argument.",
              },
              {
                tag: "§ 04",
                icon: Sparkles,
                name: "Insights",
                text: "The connections the author didn't spell out — contradictions, recurring themes, and the question the whole document is really asking.",
              },
              {
                tag: "§ 05",
                icon: Clock3,
                name: "A time ledger",
                text: "Every brief closes with an honest accounting: pages read, pages spared, and the hours returned to your life.",
              },
            ].map((f, i) => (
              <Reveal key={f.tag} delay={i * 60}>
                <div className="group grid grid-cols-[auto_1fr] items-baseline gap-4 border-t border-[#1D1712]/50 py-6 transition-colors last:border-b hover:bg-[#F6F1E4] md:grid-cols-[90px_56px_220px_1fr] md:gap-8">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-[#8A7B63]">
                    {f.tag}
                  </span>
                  <f.icon
                    className="hidden h-5 w-5 self-center transition-transform group-hover:-rotate-6 md:block"
                    strokeWidth={1.5}
                    style={{ color: RED }}
                  />
                  <h3 className="font-fraunces text-2xl font-semibold">
                    {f.name}
                  </h3>
                  <p className="col-span-2 mt-2 max-w-2xl text-[15px] leading-relaxed text-[#4A4136] md:col-span-1 md:mt-0">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── pull quote ─────────── */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
        <Reveal>
          <Quote className="mx-auto h-8 w-8 rotate-180" strokeWidth={1} style={{ color: RED }} />
          <blockquote
            className="mt-6 font-fraunces font-light italic leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4.4vw, 3.6rem)" }}
          >
            “The future belongs to those who read
            the important parts.”
          </blockquote>
          <p className="mt-8 font-jetbrains text-[10px] uppercase tracking-[0.3em] text-[#8A7B63]">
            — lifted verbatim from a 214-page market report, page 87
          </p>
        </Reveal>
      </section>

      <Ornament />

      {/* ─────────── letters ─────────── */}
      <section id="letters" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <Reveal>
          <div className="flex items-end justify-between border-b-2 border-[#1D1712] pb-4">
            <h2 className="font-fraunces text-3xl font-semibold tracking-tight md:text-5xl">
              Letters to the Editor
            </h2>
            <Mail className="h-6 w-6 text-[#8A7B63]" strokeWidth={1.5} />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              letter:
                "Sir — I submitted my doctoral thesis at 11pm and received a brief my own supervisor could not have written. I remain, etc.,",
              name: "A. Okafor",
              place: "Edinburgh",
            },
            {
              letter:
                "Madam — Our board now opens every meeting with the Ratio brief. The hour we used to spend 'aligning' has been returned to us.",
              name: "R. Lindqvist",
              place: "Copenhagen",
            },
            {
              letter:
                "Editor — The quotes feature ended a two-week dispute over what the contract actually said. Page 41, as it happens.",
              name: "M. Tanaka",
              place: "Osaka",
            },
          ].map((l, i) => (
            <Reveal key={l.name} delay={i * 120}>
              <div className="flex h-full flex-col border border-[#1D1712]/50 bg-[#F6F1E4] p-6 shadow-[4px_4px_0_0_rgba(29,23,18,0.85)]">
                <p className="flex-1 text-[15px] italic leading-relaxed text-[#33291F]">
                  {l.letter}
                </p>
                <p className="mt-6 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-[#8A7B63]">
                  {l.name} — {l.place}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── rates ─────────── */}
      <section id="rates" className="border-t border-[#1D1712]/70 bg-[#EFE8D6]">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Reveal>
            <SectionKicker>Classified advertisements</SectionKicker>
            <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight md:text-5xl">
              Rates of subscription
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "The Reader",
                price: "Free",
                per: "forever",
                items: ["3 briefs per month", "Summaries & quotes", "Hints on request"],
                featured: false,
              },
              {
                name: "The Scholar",
                price: "$9",
                per: "per month",
                items: ["Unlimited briefs", "All four instruments", "Time ledger & export", "Priority press"],
                featured: true,
              },
              {
                name: "The Institution",
                price: "Bespoke",
                per: "per annum",
                items: ["Libraries & teams", "Private collections", "A dedicated editor"],
                featured: false,
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div
                  className={`flex h-full flex-col border p-7 ${
                    t.featured
                      ? "border-[#A63A2B] bg-[#1D1712] text-[#F6F1E4] shadow-[6px_6px_0_0_#A63A2B]"
                      : "border-[#1D1712]/60 bg-[#F6F1E4] shadow-[6px_6px_0_0_rgba(29,23,18,0.85)]"
                  }`}
                >
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.3em] opacity-70">
                    {t.name}
                  </p>
                  <p className="mt-4 font-fraunces text-5xl font-semibold tracking-tight">
                    {t.price}
                  </p>
                  <p className="mt-1 text-sm italic opacity-70">{t.per}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-current/30 pt-5 text-[15px]">
                    {t.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span style={{ color: t.featured ? "#E8B4A8" : RED }}>—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 border px-5 py-3 font-jetbrains text-xs uppercase tracking-[0.25em] transition-colors ${
                      t.featured
                        ? "border-[#F6F1E4] bg-[#F6F1E4] text-[#1D1712] hover:bg-transparent hover:text-[#F6F1E4]"
                        : "border-[#1D1712] hover:bg-[#1D1712] hover:text-[#F6F1E4]"
                    }`}
                  >
                    Place an order
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── colophon ─────────── */}
      <footer className="border-t-2 border-[#1D1712]">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-fraunces text-2xl font-black tracking-tight">
              Ratio Reader
            </p>
            <Ornament />
            <p className="max-w-md text-sm italic leading-relaxed text-[#5C5245]">
              Set in Fraunces & Newsreader. Printed on pixels, distilled from
              paper. No documents were harmed in the making of this edition.
            </p>
            <div className="flex gap-6 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-[#8A7B63]">
              <a href="#method" className="hover:text-[#A63A2B]">Method</a>
              <a href="#margins" className="hover:text-[#A63A2B]">Margins</a>
              <a href="#rates" className="hover:text-[#A63A2B]">Rates</a>
              <a href="/" className="hover:text-[#A63A2B]">Other editions</a>
            </div>
            <p className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-[#8A7B63]">
              © MMXXVI The Ratio Press · All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
