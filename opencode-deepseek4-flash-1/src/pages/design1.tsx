import { usePage } from "@/lib/page";

const fonts =
  "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Caveat:wght@400..700&display=swap";

const pageCss = `
.mg { font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif; }
.mg-hand { font-family: 'Caveat', 'Segoe Script', cursive; }
.mg-grain::before {
  content: ""; position: fixed; inset: 0; z-index: 40; pointer-events: none; opacity: .5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.32'/%3E%3C/svg%3E");
  mix-blend-mode: multiply;
}
.mg-link { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px; text-decoration-color: rgba(198,58,47,.45); }
.mg-link:hover { text-decoration-color: #C63A2F; }
.mg-mark {
  background-image: linear-gradient(104deg, rgba(244,200,74,0) 1%, rgba(244,200,74,.92) 4%, rgba(244,200,74,.78) 96%, rgba(244,200,74,0) 99%);
  background-size: 0% 82%; background-position: 0 62%; background-repeat: no-repeat;
  animation: mg-sweep 1.15s cubic-bezier(.65,.05,.36,1) .55s forwards;
}
@keyframes mg-sweep { to { background-size: 100% 82%; } }
.mg-note { animation: mg-note .7s ease-out both; }
@keyframes mg-note { from { opacity: 0; transform: translateY(8px) rotate(-1.5deg); } to { opacity: 1; transform: translateY(0) rotate(-1.5deg); } }
.mg-rule { background: linear-gradient(to bottom, transparent, rgba(198,58,47,.4) 12%, rgba(198,58,47,.4) 88%, transparent); }
.mg-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.05rem; height: 1.05rem; border-radius: 999px; border: 1px solid currentColor;
  font-size: .58rem; line-height: 1; vertical-align: .28em; margin-left: .18rem;
}
.mg-squiggle { stroke-dasharray: 260; stroke-dashoffset: 260; animation: mg-draw 1.3s ease-out 1s forwards; }
@keyframes mg-draw { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) {
  .mg-mark { animation: none; background-size: 100% 82%; }
  .mg-note, .mg-squiggle { animation: none; stroke-dashoffset: 0; }
}
`;

const editions = [
  {
    name: "Reader",
    price: "Free",
    detail: "three documents a month",
    featured: false,
    items: [
      "The ranked summary",
      "Quotes with page numbers",
      "Every line links to its source",
    ],
  },
  {
    name: "Annotated",
    price: "$9",
    detail: "a month, unlimited documents",
    items: [
      "Everything in Reader",
      "Hints for the dense passages",
      "Insights across the document",
      "Export to Markdown and notes apps",
    ],
    featured: true,
  },
  {
    name: "Library",
    price: "$19",
    detail: "a seat, a month",
    featured: false,
    items: [
      "Everything in Annotated",
      "Shared shelves for the team",
      "Annotations in the margins together",
      "Admin, SSO, audit log",
    ],
  },
];

export function Design1() {
  usePage("Ratio Reader · Marginalia", fonts);

  return (
    <div className="mg mg-grain min-h-dvh bg-[#FBF7EE] text-[#221F19] antialiased">
      <style>{pageCss}</style>

      <header className="mx-auto flex max-w-5xl items-baseline justify-between gap-6 px-6 py-7 text-[15px]">
        <a href="#top" className="text-[1.05rem] tracking-tight">
          Ratio <em>Reader</em>
        </a>
        <nav className="hidden items-baseline gap-8 italic text-[#5B5548] sm:flex">
          <a className="mg-link" href="#problem">The problem</a>
          <a className="mg-link" href="#annotated">A marked page</a>
          <a className="mg-link" href="#editions">Editions</a>
        </nav>
        <a
          href="#bring-it"
          className="mg-link italic text-[#C63A2F] decoration-[#C63A2F]"
        >
          Read a document
        </a>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        <section className="relative border-y border-[#221F19]/15 py-20 text-center sm:py-28">
          <p className="mg-hand text-2xl text-[#C63A2F] sm:text-3xl">
            for the 214-page attachments of the world
          </p>
          <h1 className="mt-6 text-[17vw] leading-[0.86] tracking-tight sm:text-[7.5rem]">
            Ratio
            <br />
            <em className="text-[#221F19]">Reader</em>
          </h1>
          <p className="mx-auto mt-10 max-w-[46ch] text-[1.15rem] leading-8 text-[#4A453A]">
            Upload a PDF. Get back a summary of what actually mattered — with
            hints where it gets dense, the quotes worth keeping, and insights
            you would have missed.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#bring-it"
              className="bg-[#221F19] px-7 py-3.5 text-[1.02rem] text-[#FBF7EE] shadow-[5px_5px_0_#C63A2F] transition-transform hover:-translate-y-0.5"
            >
              Upload a PDF
            </a>
            <a href="#annotated" className="mg-link text-[1.02rem]">
              See a marked-up page
            </a>
          </div>
          <p className="mt-14 text-[1.35rem] italic leading-relaxed">
            Two hundred pages in. Ten minutes out.{" "}
            <span className="mg-mark px-0.5">
              Nothing important missed.
            </span>
          </p>

          <svg
            aria-hidden
            className="pointer-events-none absolute -bottom-2 right-4 hidden w-40 text-[#C63A2F] lg:block"
            viewBox="0 0 160 70"
            fill="none"
          >
            <path
              className="mg-squiggle"
              d="M6 8 C 34 44, 70 58, 150 54 M136 44 l14 10 -16 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </section>

        <section id="problem" className="py-20 sm:py-24">
          <div className="flex items-baseline gap-4">
            <span className="mg-hand text-3xl text-[#C63A2F]">I.</span>
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              The problem with long documents
            </h2>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,62ch)_1fr]">
            <div className="space-y-6 text-[1.08rem] leading-8 text-[#3B372E]">
              <p>
                Somewhere between the executive summary and the appendix is the
                one paragraph you actually needed. It is on page eighty-seven,
                directly after nine pages of boilerplate, and your meeting is in
                forty minutes.
              </p>
              <p>
                PDFs are not long because their authors are cruel. They are long
                because they have to be: legal review, methodology, hedging,
                every qualification that makes a finding defensible. The trouble
                is that none of that machinery ever tells you what the finding
                is.
              </p>
              <p className="text-[1.2rem] leading-9">
                <span className="mg-mark px-0.5">
                  Ratio Reader separates what a document had to say from what it
                  had to include.
                </span>
              </p>
              <p>
                It reads the whole thing, ranks the parts by consequence, and
                hands them back in the order that matters — each one still tied
                to the page it came from.
              </p>
            </div>

            <aside className="relative lg:pl-10">
              <div className="mg-rule absolute top-1 bottom-1 left-0 hidden w-px lg:block" />
              <div
                className="mg-note mg-hand text-[1.45rem] leading-snug text-[#C63A2F]"
                style={{ animationDelay: ".35s" }}
              >
                every reader knows this feeling —
                <br />
                the fact is in there somewhere.
              </div>
              <div
                className="mg-note mt-8 border-l-2 border-[#3C5A8C]/40 pl-4 text-[.95rem] leading-7 text-[#4A453A]"
                style={{ animationDelay: ".55s" }}
              >
                <span className="font-semibold text-[#3C5A8C]">Hint</span> —
                in this house style, the blue notes explain the jargon and the
                leaps. You get them inline, exactly where you would have stalled.
              </div>
              <div
                className="mg-note mt-8 text-[1.35rem] italic leading-snug text-[#221F19]"
                style={{ animationDelay: ".75s" }}
              >
                “The document was fine. The document was always fine. It was the
                arriving that was the problem.”
              </div>
              <p className="mt-2 text-sm text-[#8A8477]">
                an editor, on the Monday pile
              </p>
            </aside>
          </div>
        </section>

        <section id="annotated" className="border-t border-[#221F19]/15 py-20 sm:py-24">
          <div className="flex items-baseline gap-4">
            <span className="mg-hand text-3xl text-[#C63A2F]">II.</span>
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              A page, the way we return it
            </h2>
          </div>
          <p className="mt-5 max-w-[62ch] text-[1.08rem] leading-8 text-[#3B372E]">
            This is page 41 of a 96-page strategy memo. The yellow is what the
            document was actually about. The red tells you what you needed to
            know to follow it. The quotation is the line worth keeping. The blue
            is the connection the document never makes itself.
          </p>

          <div className="mt-12 border border-[#221F19]/20 bg-[#FFFDF7] shadow-[10px_10px_0_rgba(34,31,25,0.08)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#221F19]/15 px-6 py-4 text-[.8rem] tracking-wide text-[#8A8477]">
              <span>Strategy Review — FY26</span>
              <span>page 41 of 96</span>
            </div>

            <div className="grid gap-x-10 gap-y-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_15rem]">
              <div className="space-y-5 text-[1.02rem] leading-8 text-[#3B372E]">
                <p>
                  The quarter closed broadly in line with plan. New-logo
                  bookings grew 11% and the enterprise pipeline remains
                  healthy.
                  <span className="mg-num text-[#3C5A8C]">4</span>
                </p>
                <p>
                  <span className="mg-mark px-0.5">
                    Net revenue retention slipped to 104%, driven almost
                    entirely by churn in the SMB tier.
                  </span>
                  <span className="mg-num text-[#C63A2F]">1</span> Management
                  views this as cyclical. The renewal base for the next two
                  quarters is weighted toward accounts acquired before the
                  pricing change, and the support load per seat has grown 30%
                  year over year.
                </p>
                <p>
                  <span className="underline decoration-[#C63A2F]/70 decoration-2 underline-offset-4">
                    NRR
                  </span>
                  <span className="mg-num text-[#C63A2F]">2</span> is expected
                  to recover as the new packaging takes hold. The team
                  recommends holding current spend levels through Q3.
                </p>
                <p>
                  Downstream, the renewal schedule that carries the recovery is
                  detailed on page 62, where the same accounts appear with
                  at-risk flags. The memo never connects the two pages.
                </p>
                <p className="text-[#8A8477]">
                  The report continues for another fifty pages in this register:
                  careful, hedged, and entirely sincere. The margin notes are
                  where the meaning lives.
                  <span className="mg-num text-[#C63A2F]">3</span>
                </p>
              </div>

              <div className="space-y-7 lg:pt-1">
                <div className="border-l-2 border-[#C63A2F]/60 pl-4">
                  <p className="text-[.72rem] font-semibold tracking-widest text-[#C63A2F] uppercase">
                    Summary
                  </p>
                  <p className="mt-2 text-[.98rem] leading-7 text-[#3B372E]">
                    The whole memo is about this sentence. Retention is being
                    held up by accounts that are about to renew.
                  </p>
                </div>
                <div className="border-l-2 border-[#C63A2F]/60 pl-4">
                  <p className="text-[.72rem] font-semibold tracking-widest text-[#C63A2F] uppercase">
                    Hint
                  </p>
                  <p className="mt-2 text-[.98rem] leading-7 text-[#3B372E]">
                    NRR counts expansion inside existing accounts. It hides SMB
                    churn that new-logo numbers never show.
                  </p>
                </div>
                <div className="border-l-2 border-[#221F19]/40 pl-4">
                  <p className="text-[.72rem] font-semibold tracking-widest text-[#221F19]/70 uppercase">
                    Quote
                  </p>
                  <p className="mt-2 text-[.98rem] italic leading-7 text-[#3B372E]">
                    “We spent eighteen months optimizing a funnel that leaks at
                    the bottom.”
                  </p>
                  <p className="mt-1.5 text-sm text-[#8A8477]">page 41</p>
                </div>
                <div className="border-l-2 border-[#3C5A8C]/50 pl-4">
                  <p className="text-[.72rem] font-semibold tracking-widest text-[#3C5A8C] uppercase">
                    Insight
                  </p>
                  <p className="mt-2 text-[.98rem] leading-7 text-[#3B372E]">
                    Contradicts the healthy-pipeline note on page 12, which
                    counts trials rather than paid seats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mg-hand mt-6 text-center text-[1.3rem] text-[#8A8477]">
            every note keeps its page number — click and you are there
          </p>
        </section>

        <section className="border-t border-[#221F19]/15 py-20 sm:py-24">
          <div className="flex items-baseline gap-4">
            <span className="mg-hand text-3xl text-[#C63A2F]">III.</span>
            <h2 className="text-3xl tracking-tight sm:text-4xl">How it reads</h2>
          </div>

          <ol className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {[
              {
                n: "1",
                title: "You bring the document",
                body: "Drag in a PDF of up to 500 pages. It is read in memory and deleted when your summary is built. Never stored, never training data.",
              },
              {
                n: "2",
                title: "It reads all of it",
                body: "Claims are ranked by consequence, jargon is defined where it appears, quotes are lifted word for word, and contradictions are flagged across sections.",
              },
              {
                n: "3",
                title: "You read the good parts",
                body: "Ten minutes, in the order that matters. Every line links back to its page, so verifying takes one click and no faith.",
              },
            ].map((s) => (
              <li key={s.n}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C63A2F]/60 text-[.95rem] text-[#C63A2F]">
                  {s.n}
                </span>
                <h3 className="mt-5 text-[1.3rem] tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[1rem] leading-8 text-[#3B372E]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-[#221F19]/15 py-20 sm:py-24">
          <div className="flex items-baseline gap-4">
            <span className="mg-hand text-3xl text-[#C63A2F]">IV.</span>
            <h2 className="text-3xl tracking-tight sm:text-4xl">
              Remarks from readers
            </h2>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                quote:
                  "I stopped dreading the Monday reading pile. The hints alone saved me an afternoon of searching.",
                who: "Priya N.",
                role: "strategy consultant",
              },
              {
                quote:
                  "It caught a contradiction between page 4 and page 60 that our whole team had missed.",
                who: "Tom A.",
                role: "M&A analyst",
              },
              {
                quote:
                  "I read the summary first, then the paper. For the first time I understood the paper on the first pass.",
                who: "Dr. Elena R.",
                role: "researcher",
              },
            ].map((t) => (
              <blockquote key={t.who}>
                <p className="text-[1.25rem] italic leading-relaxed text-[#221F19]">
                  “{t.quote}”
                </p>
                <footer className="mt-4 text-[.95rem] text-[#5B5548]">
                  {t.who}
                  <span className="text-[#8A8477]">, {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="editions" className="border-t border-[#221F19]/15 py-20 sm:py-24">
          <div className="flex items-baseline gap-4">
            <span className="mg-hand text-3xl text-[#C63A2F]">V.</span>
            <h2 className="text-3xl tracking-tight sm:text-4xl">Editions</h2>
          </div>
          <p className="mt-5 max-w-[58ch] text-[1.08rem] leading-8 text-[#3B372E]">
            Start free. Pay when the reading pile becomes a habit.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {editions.map((e) => (
              <div
                key={e.name}
                className={`relative flex flex-col border bg-[#FFFDF7] p-7 ${
                  e.featured
                    ? "border-[#C63A2F] shadow-[7px_7px_0_rgba(198,58,47,0.16)]"
                    : "border-[#221F19]/25"
                }`}
              >
                {e.featured && (
                  <span className="mg-hand absolute -top-3.5 right-5 bg-[#FBF7EE] px-2 text-[1.15rem] text-[#C63A2F]">
                    most readers start here
                  </span>
                )}
                <h3 className="text-[1.4rem] tracking-tight">{e.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl tracking-tight">{e.price}</span>
                  <span className="text-[.95rem] text-[#8A8477]">
                    {e.detail}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-[#221F19]/15 pt-6 text-[.98rem] leading-7 text-[#3B372E]">
                  {e.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#C63A2F]">—</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#bring-it"
                  className={`mt-8 block px-6 py-3 text-center text-[1rem] transition-colors ${
                    e.featured
                      ? "bg-[#C63A2F] text-[#FFFDF7] hover:bg-[#A82F26]"
                      : "border border-[#221F19]/30 hover:bg-[#221F19] hover:text-[#FBF7EE]"
                  }`}
                >
                  {e.featured ? "Start with Annotated" : `Choose ${e.name}`}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="bring-it" className="border-t border-[#221F19]/15 py-24 text-center sm:py-28">
          <h2 className="mx-auto max-w-[24ch] text-4xl leading-tight tracking-tight sm:text-5xl">
            Bring the document you have been avoiding.
          </h2>
          <p className="mg-hand mt-6 text-2xl text-[#C63A2F]">
            it is probably shorter than you fear
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#top"
              className="bg-[#221F19] px-8 py-4 text-[1.05rem] text-[#FBF7EE] shadow-[5px_5px_0_#C63A2F] transition-transform hover:-translate-y-0.5"
            >
              Upload a PDF
            </a>
            <span className="text-[.95rem] text-[#8A8477]">
              free for your first three, no card
            </span>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#221F19]/20">
        <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-between gap-8 px-6 py-10 text-[.92rem] text-[#5B5548]">
          <p className="max-w-[52ch] leading-7">
            Ratio Reader, set in Source Serif with annotations in Caveat. PDFs
            are read in memory, deleted after processing, and never used for
            training. Every quote keeps its page number.
          </p>
          <nav className="flex flex-wrap gap-6 italic">
            <a className="mg-link" href="#problem">The method</a>
            <a className="mg-link" href="#annotated">A sample</a>
            <a className="mg-link" href="#editions">Editions</a>
            <a className="mg-link" href="#top">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
