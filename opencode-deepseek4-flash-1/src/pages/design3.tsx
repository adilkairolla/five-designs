import { usePage } from "@/lib/page";

const fonts =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap";

const pageCss = `
.rr { font-family: 'Spectral', Georgia, serif; }
.rr-display { font-family: 'Cormorant Garamond', 'Times New Roman', serif; }
.rr-lamp { background:
  radial-gradient(56% 44% at 50% -4%, rgba(255,217,142,.30), rgba(255,217,142,.10) 42%, rgba(11,36,29,0) 74%);
}
.rr-glow { animation: rr-glow 2.4s ease-out both; }
@keyframes rr-glow { from { opacity: 0; } to { opacity: 1; } }
.rr-rise { animation: rr-rise 1.1s cubic-bezier(.2,.7,.2,1) both; }
@keyframes rr-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.rr-hair { height:1px; background: linear-gradient(90deg, transparent, rgba(200,169,81,.55), transparent); }
.rr-link { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 5px; text-decoration-color: rgba(200,169,81,.45); }
.rr-link:hover { text-decoration-color: #C8A951; }
.rr-card { transition: border-color .3s ease, transform .3s ease; }
.rr-card:hover { border-color: rgba(200,169,81,.65); transform: translateY(-2px); }
.rr-fleuron { color: #C8A951; }
@media (prefers-reduced-motion: reduce) {
  .rr-glow, .rr-rise { animation: none; }
  .rr-card { transition: none; }
  .rr-card:hover { transform: none; }
}
`;

const catalogue = [
  {
    n: "I",
    name: "Summary",
    d: "The whole argument, ranked by consequence. Read the important parts in the order they matter, not the order they were printed.",
  },
  {
    n: "II",
    name: "Hints",
    d: "Short, plain explanations for the jargon, the formulas, and the leaps of logic. Placed exactly where you would have stalled.",
  },
  {
    n: "III",
    name: "Quotes",
    d: "The sentences you will want to repeat, lifted word for word, each one carrying its page number.",
  },
  {
    n: "IV",
    name: "Insights",
    d: "What page 4 means for page 60. Contradictions, dependencies, and the thing the document never quite says out loud.",
  },
  {
    n: "V",
    name: "Sources",
    d: "Every claim stays fastened to its origin. One click takes you to the original sentence, in a document you already trust.",
  },
  {
    n: "VI",
    name: "Discretion",
    d: "Documents are read in memory and deleted when your summary is built. Nothing is stored, nothing is used for training.",
  },
];

export function Design3() {
  usePage("Ratio Reader · The Reading Room", fonts);

  return (
    <div className="rr min-h-dvh bg-[#0B241D] text-[#E9DFC8] antialiased">
      <style>{pageCss}</style>

      <header className="relative z-10 border-b border-[#C8A951]/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="rr-display flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A951]/70 text-[.95rem] tracking-widest text-[#C8A951]">
              RR
            </span>
            <span className="rr-display text-xl tracking-wide">Ratio Reader</span>
          </a>
          <nav className="rr-display hidden items-baseline gap-8 text-[1.05rem] italic text-[#CDBF9C] md:flex">
            <a className="rr-link" href="#catalogue">The catalogue</a>
            <a className="rr-link" href="#evening">An evening</a>
            <a className="rr-link" href="#membership">Membership</a>
          </nav>
          <a
            href="#request"
            className="rr-display border border-[#C8A951]/70 px-5 py-2 text-[.98rem] text-[#E9DFC8] transition-colors hover:bg-[#C8A951] hover:text-[#0B241D]"
          >
            Bring a document
          </a>
        </div>
      </header>

      <main id="top">
        <section className="rr-lamp relative px-6 pt-24 pb-20 text-center sm:pt-32">
          <div className="mx-auto max-w-4xl">
            <p className="rr-rise rr-display text-[1.25rem] italic text-[#C8A951]">
              For people who read for a living
            </p>
            <h1 className="rr-rise rr-display mt-7 text-[clamp(3.4rem,10vw,7rem)] leading-[.92] font-light">
              Read less.
              <br />
              <em>Know more.</em>
            </h1>
            <p className="rr-rise mx-auto mt-9 max-w-[52ch] text-[1.1rem] leading-8 text-[#CDBF9C]">
              Ratio Reader sits with your document the way a good librarian
              does: reading every page, remembering what matters, and handing
              you the parts worth your evening. Summary, hints, quotes, and
              insights, each one pointing to its source.
            </p>
            <div className="rr-rise mt-11 flex flex-wrap items-center justify-center gap-7">
              <a
                href="#request"
                className="rr-display bg-[#C8A951] px-8 py-3.5 text-[1.05rem] text-[#0B241D] transition-colors hover:bg-[#DBBC6A]"
              >
                Bring a document
              </a>
              <a href="#catalogue" className="rr-display rr-link text-[1.05rem] text-[#E9DFC8]">
                Browse a sample
              </a>
            </div>
          </div>

          <div className="rr-rise mx-auto mt-20 max-w-3xl border border-[#C8A951]/35 bg-[#0E2C24] text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#C8A951]/25 px-7 py-4">
              <span className="rr-display text-[1.05rem] tracking-wide text-[#C8A951]">
                Quarterly Review
              </span>
              <span className="text-[.85rem] text-[#A99C7C]">
                214 pages · read in 8 minutes
              </span>
            </div>
            <div className="grid gap-8 px-7 py-8 sm:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="rr-display text-[1.1rem] tracking-wide text-[#C8A951]">
                  What matters
                </p>
                <ul className="mt-4 space-y-3.5 text-[1rem] leading-7 text-[#E9DFC8]">
                  <li className="flex gap-3">
                    <span className="text-[#C8A951]">—</span>
                    Retention slipped to 104%, and the recovery plan leans on
                    renewals that are already at risk.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C8A951]">—</span>
                    The pricing change is the cause, not the cycle; the support
                    load per seat is up 30%.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C8A951]">—</span>
                    The board paper's own appendix contradicts its summary.
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="border-l border-[#C8A951]/40 pl-5">
                  <p className="rr-display text-[1.05rem] italic text-[#C8A951]">
                    Worth quoting
                  </p>
                  <p className="mt-2 text-[.98rem] italic leading-7">
                    “We spent eighteen months optimizing a funnel that leaks at
                    the bottom.”
                  </p>
                  <p className="mt-1.5 text-[.82rem] text-[#A99C7C]">page 41</p>
                </div>
                <div className="border-l border-[#C8A951]/40 pl-5">
                  <p className="rr-display text-[1.05rem] italic text-[#C8A951]">
                    A hint
                  </p>
                  <p className="mt-2 text-[.95rem] leading-7 text-[#CDBF9C]">
                    NRR counts expansion inside existing accounts, which is why
                    SMB churn stays invisible here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="rr-hair mx-auto max-w-6xl" />

        <section id="catalogue" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <p className="rr-display text-[1.2rem] italic text-[#C8A951]">
              The catalogue
            </p>
            <h2 className="rr-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)] leading-tight font-light">
              What the room contains
            </h2>
          </div>

          <div className="mt-16 border-t border-[#C8A951]/20">
            {catalogue.map((c) => (
              <div
                key={c.n}
                className="grid gap-3 border-b border-[#C8A951]/20 py-8 sm:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.6fr)] sm:items-baseline sm:gap-8"
              >
                <span className="rr-display text-[1.5rem] text-[#C8A951]">{c.n}</span>
                <h3 className="rr-display text-[1.8rem] font-light">{c.name}</h3>
                <p className="max-w-[54ch] text-[1rem] leading-8 text-[#CDBF9C]">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-[#C8A951]/20 bg-[#081B16] py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="rr-display text-center text-3xl text-[#C8A951]" aria-hidden>
              ❦
            </p>
            <div className="mt-12 grid gap-14 sm:grid-cols-3 sm:gap-10">
              {[
                {
                  q: "Like having a colleague who read it twice before the meeting.",
                  w: "Amara D.",
                  r: "partner, advisory firm",
                },
                {
                  q: "The hints turned a dense actuarial report into an evening read.",
                  w: "Jonas W.",
                  r: "underwriter",
                },
                {
                  q: "It found the caveat on page 88 that changed our decision.",
                  w: "Ruth L.",
                  r: "general counsel",
                },
              ].map((t) => (
                <figure key={t.w} className="text-center">
                  <p className="rr-display text-[1.45rem] leading-snug font-light italic">
                    “{t.q}”
                  </p>
                  <figcaption className="mt-5 text-[.9rem] tracking-wide text-[#A99C7C]">
                    {t.w}
                    <span className="block text-[.82rem] italic">{t.r}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="evening" className="mx-auto max-w-5xl px-6 py-24">
          <div className="text-center">
            <p className="rr-display text-[1.2rem] italic text-[#C8A951]">
              An evening, usually
            </p>
            <h2 className="rr-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)] leading-tight font-light">
              Three quiet movements
            </h2>
          </div>

          <div className="mt-16 grid gap-14 sm:grid-cols-3">
            {[
              {
                t: "You leave a document",
                d: "A report, a contract, a paper, a manual. Up to 500 pages. It is read the moment it arrives.",
              },
              {
                t: "The room reads",
                d: "Claims are ranked, jargon is translated, quotes are copied out, and the contradictions are underlined.",
              },
              {
                t: "You take the good parts",
                d: "Ten minutes at the desk, then put the document down knowing exactly which page to cite and which risk to raise.",
              },
            ].map((s, i) => (
              <div key={s.t} className="relative text-center">
                <span className="rr-fleuron text-2xl">{["✳", "✦", "✳"][i]}</span>
                <h3 className="rr-display mt-5 text-[1.6rem] font-light">{s.t}</h3>
                <p className="mt-4 text-[.98rem] leading-8 text-[#CDBF9C]">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="membership" className="border-t border-[#C8A951]/20 bg-[#081B16] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="rr-display text-[1.2rem] italic text-[#C8A951]">
                Membership
              </p>
              <h2 className="rr-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)] leading-tight font-light">
                Three ways to keep a seat
              </h2>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {[
                {
                  n: "Reader",
                  p: "Free",
                  d: "Three documents a month",
                  hot: false,
                  items: ["The ranked summary", "Quotes with page numbers", "Source links"],
                },
                {
                  n: "Scholar",
                  p: "$9",
                  d: "A month, unlimited documents",
                  items: [
                    "Hints for dense passages",
                    "Insights across the document",
                    "Ask the document questions",
                    "Export to your notes",
                  ],
                  hot: true,
                },
                {
                  n: "Society",
                  p: "$19",
                  d: "A seat, a month",
                  hot: false,
                  items: [
                    "Shared shelves for the team",
                    "Margins written together",
                    "Admin, SSO, audit log",
                  ],
                },
              ].map((m) => (
                <div
                  key={m.n}
                  className={`rr-card flex flex-col border p-8 ${
                    m.hot
                      ? "border-[#C8A951] bg-[#0E2C24] shadow-[0_30px_70px_-40px_rgba(200,169,81,.5)]"
                      : "border-[#C8A951]/25 bg-[#0B241D]"
                  }`}
                >
                  <h3 className="rr-display text-[1.7rem] font-light">{m.n}</h3>
                  <p className="mt-4 flex items-baseline gap-3">
                    <span className="rr-display text-5xl font-light text-[#C8A951]">{m.p}</span>
                    <span className="text-[.9rem] text-[#A99C7C]">{m.d}</span>
                  </p>
                  <ul className="mt-7 flex-1 space-y-3 border-t border-[#C8A951]/20 pt-7 text-[.98rem] leading-7 text-[#CDBF9C]">
                    {m.items.map((i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#C8A951]">·</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#request"
                    className={`rr-display mt-8 block px-6 py-3 text-center text-[1rem] transition-colors ${
                      m.hot
                        ? "bg-[#C8A951] text-[#0B241D] hover:bg-[#DBBC6A]"
                        : "border border-[#C8A951]/40 hover:border-[#C8A951] hover:bg-[#C8A951]/10"
                    }`}
                  >
                    {m.hot ? "Take the Scholar's seat" : `Become a ${m.n.toLowerCase()}`}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="request" className="rr-lamp px-6 py-28 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="rr-display text-[clamp(2.6rem,6vw,4.6rem)] leading-tight font-light">
              The reading room is open.
            </h2>
            <p className="mx-auto mt-6 max-w-[46ch] text-[1.08rem] leading-8 text-[#CDBF9C]">
              Bring the document you have been putting off. The first three are
              on the house, no card required.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
              <a
                href="#top"
                className="rr-display bg-[#C8A951] px-9 py-4 text-[1.08rem] text-[#0B241D] transition-colors hover:bg-[#DBBC6A]"
              >
                Bring a document
              </a>
              <span className="rr-display text-[1rem] italic text-[#A99C7C]">
                closes at midnight, opens whenever you do
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C8A951]/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-6 px-6 py-9 text-[.9rem] text-[#A99C7C]">
          <p className="rr-display text-[1.05rem] italic">
            Ratio Reader · a quiet instrument for loud deadlines
          </p>
          <nav className="flex flex-wrap gap-7">
            <a className="rr-link" href="#catalogue">Catalogue</a>
            <a className="rr-link" href="#membership">Membership</a>
            <a className="rr-link" href="#top">Privacy</a>
            <a className="rr-link" href="#request">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
