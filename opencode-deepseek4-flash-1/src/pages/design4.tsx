import { usePage } from "@/lib/page";

const fonts =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap";

const pageCss = `
.ed { font-family: 'Newsreader', Georgia, serif; }
.ed-display { font-family: 'Fraunces', 'Newsreader', Georgia, serif; font-variation-settings: "SOFT" 40, "WONK" 1; }
.ed-drop::first-letter {
  float: left; font-family: 'Fraunces', Georgia, serif; font-weight: 600;
  font-variation-settings: "SOFT" 40, "WONK" 1;
  font-size: 4.6em; line-height: .76; padding: .04em .1em 0 0; color: #E8B4AD;
}
.ed-link { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 5px; text-decoration-color: rgba(232,180,173,.5); }
.ed-link:hover { text-decoration-color: #E8B4AD; }
.ed-rule { height:1px; background: linear-gradient(90deg, rgba(240,228,216,.55), rgba(240,228,216,0)); }
.ed-figcap { font-variation-settings: normal; font-family: 'Newsreader', Georgia, serif; font-style: italic; }
.ed-card { transition: background-color .3s ease; }
.ed-card:hover { background: rgba(232,180,173,.07); }
.ed-mark { background: linear-gradient(transparent 58%, rgba(232,180,173,.4) 58%); }
@media (prefers-reduced-motion: reduce) {
  .ed-card { transition: none; }
}
`;

export function Design4() {
  usePage("Ratio Reader · The Long Read, Short", fonts);

  return (
    <div className="ed min-h-dvh bg-[#3B1220] text-[#F4EAE1] antialiased">
      <style>{pageCss}</style>

      <header className="border-b border-[#F4EAE1]/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-5">
          <div className="flex items-baseline gap-4">
            <span className="ed-display text-2xl font-semibold tracking-tight">
              Ratio Reader
            </span>
            <span className="hidden text-[.85rem] text-[#C9A3A6] sm:inline">
              The Attention Issue, No. 1
            </span>
          </div>
          <nav className="hidden items-baseline gap-7 text-[.95rem] text-[#E3CFC7] lg:flex">
            <a className="ed-link" href="#problem">The problem</a>
            <a className="ed-link" href="#instrument">The instrument</a>
            <a className="ed-link" href="#verdict">The verdict</a>
            <a className="ed-link" href="#mail">Letters</a>
          </nav>
          <a
            href="#subscribe"
            className="bg-[#E8B4AD] px-5 py-2 text-[.92rem] font-medium text-[#3B1220] transition-colors hover:bg-[#F2C6BF]"
          >
            Start reading
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24">
          <p className="ed-display text-[.85rem] tracking-[.16em] text-[#E8B4AD] uppercase">
            A review of the reading instrument
          </p>
          <h1 className="ed-display mt-6 max-w-[16ch] text-[clamp(2.9rem,7.5vw,6.2rem)] leading-[.98] font-semibold tracking-tight">
            You will never read it all. Read what counts.
          </h1>
          <div className="mt-10 grid gap-8 border-t border-[#F4EAE1]/25 pt-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <p className="max-w-[52ch] text-[1.15rem] leading-8 text-[#E3CFC7]">
              A summary that ranks. Hints when you are stuck. Quotes worth
              keeping. Insights you would have missed. Ratio Reader takes any
              PDF and returns the short version in minutes, every line tied to
              the page it came from.
            </p>
            <div className="flex flex-col items-start justify-between gap-6">
              <p className="text-[.9rem] text-[#C9A3A6]">
                Reviewed by people who read for a living
              </p>
              <div className="flex flex-wrap gap-5">
                <a
                  href="#subscribe"
                  className="bg-[#F4EAE1] px-6 py-3 text-[.98rem] font-medium text-[#3B1220] transition-colors hover:bg-white"
                >
                  Start reading
                </a>
                <a href="#instrument" className="ed-link self-center text-[.98rem]">
                  Read a sample
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#F4EAE1]/20 bg-[#4A1826]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-9 lg:grid-cols-4">
            {[
              { n: "214", l: "pages, the average upload" },
              { n: "9 min", l: "the average full read" },
              { n: "4", l: "kinds of help, every time" },
              { n: "1 click", l: "from any line to its source" },
            ].map((s) => (
              <div key={s.l}>
                <p className="ed-display text-[clamp(1.9rem,4vw,2.9rem)] leading-none font-semibold text-[#E8B4AD]">
                  {s.n}
                </p>
                <p className="mt-2 max-w-[18ch] text-[.88rem] leading-5 text-[#D9BFB9]">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="problem" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem]">
            <div>
              <p className="ed-figcap text-[.9rem] tracking-[.14em] text-[#E8B4AD] uppercase">
                The problem
              </p>
              <h2 className="ed-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-tight font-semibold tracking-tight">
                The report was never the problem. The evening was.
              </h2>
              <p className="ed-drop mt-8 text-[1.08rem] leading-9 text-[#EBDCD5] sm:columns-2 sm:gap-12">
                Turns out the meeting was not waiting for your opinion on the
                formatting. It needed the number on page eighty-seven, the
                caveat on page 88, and the admission tucked into appendix C.
                Everything around those three facts exists to make the
                document defensible, and none of it tells you what the
                document found.{" "}
                Ratio Reader reads the whole thing at the speed it takes to say
                it, ranks the claims by consequence, and returns a version you
                can finish with one cup of coffee. Hints sit beside the dense
                passages. Quotes are lifted verbatim. Insights connect the
                footnote to the headline.
              </p>
              <p className="mt-6 text-[1.08rem] leading-9 text-[#EBDCD5]">
                Nothing disappears. Every returned line keeps its page number,
                so the work stays checkable. A summary that hides the evidence
                is not a summary; it is a rumor with better typography.
              </p>
            </div>

            <aside className="lg:border-l lg:border-[#F4EAE1]/20 lg:pl-9">
              <blockquote className="text-[1.35rem] leading-snug italic">
                “The problem is that it arrived at 6 p.m. and the meeting is at
                nine.”
              </blockquote>
              <p className="mt-4 text-[.88rem] text-[#C9A3A6]">
                from an editor's notebook
              </p>
              <div className="ed-rule mt-8" />
              <div className="mt-8 bg-[#4A1826] p-6">
                <p className="ed-figcap text-[.82rem] tracking-[.12em] text-[#E8B4AD] uppercase">
                  Figure 1 — the reading pile
                </p>
                <div className="mt-4 space-y-2">
                  {[96, 82, 70, 58].map((w, i) => (
                    <div key={w} className="flex items-center gap-3">
                      <span className="text-[.8rem] text-[#C9A3A6]">
                        {["Mon", "Tue", "Wed", "Thu"][i]}
                      </span>
                      <span
                        className="h-3"
                        style={{
                          width: `${w}%`,
                          background: i === 3 ? "#E8B4AD" : "rgba(244,234,225,.28)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[.88rem] leading-6 text-[#D9BFB9]">
                  Four days of reading, before Ratio Reader. After: one coffee,
                  one morning.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="instrument" className="border-y border-[#F4EAE1]/20 bg-[#451624] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="ed-figcap text-[.9rem] tracking-[.14em] text-[#E8B4AD] uppercase">
              The instrument
            </p>
            <h2 className="ed-display mt-4 max-w-[18ch] text-[clamp(2rem,4.4vw,3.2rem)] leading-tight font-semibold tracking-tight">
              Four ways it helps, before you have asked
            </h2>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              <dl className="divide-y divide-[#F4EAE1]/20 border-y border-[#F4EAE1]/20">
                {[
                  {
                    t: "Summary",
                    d: "The argument, ranked by consequence. Not a recap of the abstract; a map of what actually decides the conclusion.",
                  },
                  {
                    t: "Hints",
                    d: "Plain-language notes on jargon, formulas, and leaps. Written to sit exactly where you would have stalled.",
                  },
                  {
                    t: "Quotes",
                    d: "Verbatim sentences worth putting in the memo, with page numbers attached.",
                  },
                  {
                    t: "Insights",
                    d: "The connections the document leaves implicit, including where two sections contradict each other.",
                  },
                ].map((f) => (
                  <div key={f.t} className="ed-card grid gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <dt className="ed-display text-[1.25rem] font-semibold text-[#E8B4AD]">
                      {f.t}
                    </dt>
                    <dd className="text-[1rem] leading-8 text-[#EBDCD5]">{f.d}</dd>
                  </div>
                ))}
              </dl>

              <figure className="border border-[#F4EAE1]/25 bg-[#3B1220] p-7">
                <figcaption className="ed-figcap text-[.82rem] tracking-[.12em] text-[#E8B4AD] uppercase">
                  Figure 2 — page 41, returned
                </figcaption>
                <div className="mt-6 space-y-5 text-[.98rem] leading-7">
                  <p className="text-[#C9A3A6]">
                    New-logo bookings grew 11% and the enterprise pipeline
                    remains healthy…
                  </p>
                  <p className="ed-mark pr-1">
                    Net revenue retention slipped to 104%, driven almost
                    entirely by churn in the SMB tier.
                  </p>
                  <div className="grid gap-4 border-t border-[#F4EAE1]/15 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[.75rem] tracking-[.12em] text-[#E8B4AD] uppercase">
                        Hint
                      </p>
                      <p className="mt-1.5 text-[.92rem] leading-6 text-[#EBDCD5]">
                        NRR counts expansion inside existing accounts. It hides
                        SMB churn.
                      </p>
                    </div>
                    <div>
                      <p className="text-[.75rem] tracking-[.12em] text-[#E8B4AD] uppercase">
                        Insight
                      </p>
                      <p className="mt-1.5 text-[.92rem] leading-6 text-[#EBDCD5]">
                        Contradicts the pipeline claim on page 12, which counts
                        trials.
                      </p>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section id="verdict" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem]">
            <div>
              <p className="ed-figcap text-[.9rem] tracking-[.14em] text-[#E8B4AD] uppercase">
                The verdict
              </p>
              <h2 className="ed-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-tight font-semibold tracking-tight">
                Should you subscribe?
              </h2>
              <p className="mt-7 max-w-[58ch] text-[1.08rem] leading-9 text-[#EBDCD5]">
                If your job includes the word review, or your inbox regularly
                contains things labelled final_v7, yes. The free tier is honest
                enough to evaluate: three documents a month, the full summary
                and quotes, no card. The paid tier is for people whose reading
                pile has a pulse.
              </p>

              <div className="mt-10 grid gap-5 border-y border-[#F4EAE1]/20 py-8 sm:grid-cols-3">
                {[
                  { k: "Understanding", v: "Up, reliably" },
                  { k: "Time on task", v: "Down 84%" },
                  { k: "Regret about the pile", v: "None found" },
                ].map((s) => (
                  <div key={s.k}>
                    <p className="ed-figcap text-[.82rem] tracking-[.1em] text-[#C9A3A6] uppercase">
                      {s.k}
                    </p>
                    <p className="ed-display mt-2 text-[1.35rem] font-semibold text-[#E8B4AD]">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-[#4A1826] p-8">
                <p className="ed-display text-[1.4rem] font-semibold">
                  The mail-in subscription card
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    { n: "Reader", p: "$0", d: "3 documents a month" },
                    { n: "Annotated", p: "$9", d: "unlimited, hints + insights" },
                    { n: "Library", p: "$19", d: "per seat, shared shelves" },
                  ].map((t) => (
                    <div key={t.n} className="border border-dashed border-[#C9A3A6]/50 p-4">
                      <p className="ed-display text-[1.05rem] font-semibold">{t.n}</p>
                      <p className="ed-display mt-1 text-3xl font-semibold text-[#E8B4AD]">
                        {t.p}
                      </p>
                      <p className="mt-1.5 text-[.85rem] leading-5 text-[#D9BFB9]">{t.d}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#subscribe"
                  className="mt-6 inline-block bg-[#E8B4AD] px-6 py-3 text-[.95rem] font-medium text-[#3B1220] transition-colors hover:bg-[#F2C6BF]"
                >
                  Subscribe
                </a>
              </div>
            </div>

            <aside className="self-start border border-[#F4EAE1]/25 p-7 lg:sticky lg:top-8">
              <p className="ed-figcap text-[.82rem] tracking-[.12em] text-[#E8B4AD] uppercase">
                Sidebar — the small print
              </p>
              <ul className="mt-5 space-y-4 text-[.95rem] leading-7 text-[#EBDCD5]">
                <li>Reads PDFs up to 500 pages, scans included, forty languages.</li>
                <li>Documents are deleted when your summary is built.</li>
                <li>Never used to train anything, ever.</li>
                <li>Export to Markdown, or straight into your notes app.</li>
                <li>Cancel from the same page you subscribed on.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="mail" className="border-y border-[#F4EAE1]/20 bg-[#451624] py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="ed-figcap text-[.9rem] tracking-[.14em] text-[#E8B4AD] uppercase">
              From the mail
            </p>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {[
                {
                  q: "To the editor: I fed it a 300-page environmental assessment on a Tuesday and understood it by Wednesday breakfast. My only complaint is that I no longer have an excuse.",
                  w: "Dana F., planning consultant",
                },
                {
                  q: "To the editor: it caught a contradiction between the executive summary and appendix C that four of us had read past. That single insight paid for the year.",
                  w: "Marcus O., fund analyst",
                },
              ].map((l) => (
                <figure key={l.w} className="border-t border-[#E8B4AD]/50 pt-6">
                  <blockquote className="text-[1.2rem] leading-relaxed italic">
                    “{l.q}”
                  </blockquote>
                  <figcaption className="mt-4 text-[.9rem] text-[#C9A3A6]">
                    {l.w}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="subscribe" className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="ed-display mx-auto max-w-[20ch] text-[clamp(2.2rem,5vw,4rem)] leading-tight font-semibold tracking-tight">
            Subscribe to your own attention.
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-[1.05rem] leading-8 text-[#E3CFC7]">
            Three documents free, no card. Bring the longest thing in your
            downloads folder and see what comes back.
          </p>
          <a
            href="#subscribe"
            className="mt-10 inline-block bg-[#F4EAE1] px-9 py-4 text-[1.02rem] font-medium text-[#3B1220] transition-colors hover:bg-white"
          >
            Start reading
          </a>
        </section>
      </main>

      <footer className="border-t border-[#F4EAE1]/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-6 px-6 py-9 text-[.88rem] text-[#C9A3A6]">
          <p className="ed-figcap">
            Ratio Reader. Published continuously. Set in Fraunces and Newsreader.
          </p>
          <nav className="flex flex-wrap gap-6">
            <a className="ed-link" href="#problem">The problem</a>
            <a className="ed-link" href="#instrument">The instrument</a>
            <a className="ed-link" href="#verdict">The verdict</a>
            <a className="ed-link" href="#subscribe">Subscribe</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
