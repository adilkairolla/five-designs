import { usePage } from "@/lib/page";

const fonts =
  "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Archivo+Black&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap";

const pageCss = `
.rp { font-family: 'Archivo', 'Helvetica Neue', sans-serif; }
.rp-black { font-family: 'Archivo Black', 'Archivo', sans-serif; }
.rp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
.rp-grain::after {
  content:""; position: fixed; inset:0; z-index:60; pointer-events:none; opacity:.55;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E");
  mix-blend-mode: multiply;
}
.rp-mis-pink { color:#FF4F8B; transform: translate(6px,5px); animation: rp-pink .8s cubic-bezier(.2,.9,.25,1) both; }
.rp-mis-teal { color:#147D8A; transform: translate(-5px,3px); animation: rp-teal .8s cubic-bezier(.2,.9,.25,1) both; }
@keyframes rp-pink { from { transform: translate(15px,12px); } to { transform: translate(6px,5px); } }
@keyframes rp-teal { from { transform: translate(-14px,8px); } to { transform: translate(-5px,3px); } }
.rp-track { display:flex; width:max-content; animation: rp-scroll 34s linear infinite; }
@keyframes rp-scroll { to { transform: translateX(-50%); } }
.rp-stamp {
  display:inline-block; border:3px solid #FF4F8B; outline:2px solid #FF4F8B; outline-offset:3px;
  color:#FF4F8B; padding:.55rem 1.4rem; text-transform:uppercase; letter-spacing:.06em;
  transform: rotate(-1.5deg); transition: transform .2s ease, background-color .2s ease, color .2s ease;
}
.rp-stamp:hover { transform: rotate(0deg) translateY(-2px); background:#FF4F8B; color:#F1ECE0; }
.rp-stamp-teal { border-color:#147D8A; outline-color:#147D8A; color:#147D8A; transform: rotate(1deg); }
.rp-stamp-teal:hover { background:#147D8A; color:#F1ECE0; }
.rp-panel { border:2px solid #17130E; box-shadow: 7px 7px 0 #17130E; }
.rp-panel-pink { border:2px solid #17130E; box-shadow: 7px 7px 0 #FF4F8B; }
.rp-panel-teal { border:2px solid #17130E; box-shadow: 7px 7px 0 #147D8A; }
.rp-dial {
  background: conic-gradient(#FF4F8B 0 8.5%, #E3DCCB 8.5% 100%);
  border:3px solid #17130E; border-radius:999px;
}
.rp-barcode span { display:inline-block; height:38px; background:#17130E; }
@media (prefers-reduced-motion: reduce) {
  .rp-mis-pink, .rp-mis-teal { animation:none; }
  .rp-track { animation:none; }
  .rp-stamp { transition:none; }
}
`;

const ticker = [
  "HINTS",
  "QUOTES",
  "INSIGHTS",
  "SOURCE-LINKED",
  "NO PADDING",
  "214 PAGES IN, 9 MINUTES OUT",
  "READS WHILE YOU SLEEP",
];

export function Design2() {
  usePage("Ratio Reader · The Ratio Press", fonts);

  return (
    <div className="rp rp-grain min-h-dvh bg-[#F1ECE0] text-[#17130E] antialiased">
      <style>{pageCss}</style>

      <header className="border-b-2 border-[#17130E]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-3 px-5 py-4 sm:px-8">
          <p className="rp-mono text-[.72rem] font-medium">
            THE IMPORTANT PARTS PRESS · ISSUE 01
          </p>
          <nav className="rp-mono hidden gap-6 text-[.78rem] sm:flex">
            <a className="underline decoration-[#FF4F8B] decoration-2 underline-offset-4" href="#ratio">THE RATIO</a>
            <a className="underline decoration-[#147D8A] decoration-2 underline-offset-4" href="#machine">THE MACHINE</a>
            <a className="underline decoration-[#FF4F8B] decoration-2 underline-offset-4" href="#rates">RATES</a>
          </nav>
          <a className="rp-mono bg-[#17130E] px-3 py-1.5 text-[.75rem] text-[#F1ECE0]" href="#feed">
            FEED IT A PDF
          </a>
        </div>
      </header>

      <div className="overflow-hidden border-b-2 border-[#17130E] bg-[#FF4F8B] py-2 text-[#17130E]">
        <div className="rp-track" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {ticker.map((t) => (
                <span key={`${copy}-${t}`} className="rp-black flex items-center px-6 text-[.95rem] tracking-wide uppercase">
                  {t}
                  <span className="ml-6 text-[1.1rem]">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main>
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_.65fr]">
            <div>
              <h1 className="rp-black text-[clamp(3.2rem,9.5vw,7.5rem)] leading-[0.88] tracking-tight uppercase">
                <span className="relative inline-block">
                  <span aria-hidden className="rp-mis-pink absolute inset-0">RATIO</span>
                  <span aria-hidden className="rp-mis-teal absolute inset-0">RATIO</span>
                  <span className="relative">RATIO</span>
                </span>
                <br />
                <span className="text-[#FF4F8B]">READER</span>
              </h1>
              <p className="rp-black mt-8 max-w-[26ch] text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.02] uppercase">
                Everything that matters. Nothing that doesn't.
              </p>
              <p className="mt-6 max-w-[52ch] text-[1.05rem] leading-7">
                Feed it a PDF. Get back the summary of the most important
                information, plus hints, quotes, and insights. Printed in
                minutes, not weekends.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a href="#feed" className="rp-black rp-stamp text-[.9rem]">FEED IT A PDF</a>
                <a href="#machine" className="rp-black rp-stamp rp-stamp-teal text-[.9rem]">SEE THE OUTPUT</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="rp-dial relative h-56 w-56 sm:h-64 sm:w-64">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="rp-black text-5xl">8%</span>
                  <span className="rp-mono mt-1 text-[.68rem]">SIGNAL</span>
                </div>
              </div>
              <p className="rp-mono max-w-[24ch] text-center text-[.72rem] leading-5">
                92% OF MOST DOCUMENTS IS ARMOR PLATING. WE READ THAT PART SO
                YOU CAN SKIP IT.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-[#17130E] bg-[#17130E] text-[#F1ECE0]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-[#F1ECE0]/25 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:divide-x">
            {[
              { n: "214", l: "average pages per upload" },
              { n: "8:40", l: "to a full understanding" },
              { n: "4", l: "kinds of help per document" },
              { n: "100%", l: "of claims keep their page" },
            ].map((s) => (
              <div key={s.l} className="px-2 py-3 lg:px-8">
                <p className="rp-black text-[clamp(2rem,5vw,3.4rem)] leading-none text-[#FF4F8B]">
                  {s.n}
                </p>
                <p className="rp-mono mt-2 text-[.7rem] leading-4">{s.l.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ratio" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="rp-mono text-[.72rem]">EXHIBIT A</p>
              <h2 className="rp-black mt-3 text-[clamp(2rem,4.6vw,3.4rem)] leading-[.95] uppercase">
                The ratio is the point.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-8">
                Most documents are 8% argument and 92% armor: the hedging, the
                history, the appendix that exists for auditors. Ratio Reader
                reads all of it and returns the 8% with every claim still
                fastened to its page.
              </p>
              <p className="mt-5 text-[1.05rem] leading-8">
                No vague recap. No five-paragraph summary of an abstract. The
                argument, ranked by consequence, in the order it actually
                matters.
              </p>
              <a href="#machine" className="rp-black mt-8 inline-block text-[.85rem] underline decoration-[#FF4F8B] decoration-4 underline-offset-4 uppercase">
                Show me what comes out
              </a>
            </div>

            <div className="rp-panel-pink bg-[#FBF7EC] p-7 sm:p-9">
              <p className="rp-mono text-[.7rem]">A PAGE OF 96, AS RETURNED</p>
              <div className="mt-5 space-y-4 text-[.98rem] leading-7">
                <p className="bg-[#F2C14E] px-1.5 py-0.5 font-medium">
                  Net revenue retention slipped to 104%, driven almost entirely
                  by churn in the SMB tier.
                </p>
                <div className="border-l-4 border-[#FF4F8B] pl-4">
                  <p className="rp-mono text-[.65rem] text-[#FF4F8B]">HINT</p>
                  <p>NRR counts expansion inside existing accounts. It hides SMB churn.</p>
                </div>
                <div className="border-l-4 border-[#147D8A] pl-4">
                  <p className="rp-mono text-[.65rem] text-[#147D8A]">INSIGHT</p>
                  <p>Contradicts the healthy-pipeline claim on page 12.</p>
                </div>
                <div className="border-l-4 border-[#17130E] pl-4">
                  <p className="rp-mono text-[.65rem]">QUOTE · P. 41</p>
                  <p className="italic">“We optimized a funnel that leaks at the bottom.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="machine" className="border-y-2 border-[#17130E] bg-[#147D8A] py-20 text-[#F1ECE0]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="rp-black text-[clamp(2rem,4.6vw,3.4rem)] leading-none uppercase">
              The machine
            </h2>
            <p className="rp-mono mt-3 text-[.72rem]">THREE MOVING PARTS. NO SETTINGS TO LEARN.</p>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "FEED",
                  d: "Drag in contracts, papers, decks, manuals. Up to 500 pages, forty languages, scans included.",
                  icon: (
                    <svg viewBox="0 0 72 72" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 8h26l10 10v46H18z" />
                      <path d="M44 8v10h10" />
                      <path d="M26 34h20M26 44h14" />
                    </svg>
                  ),
                },
                {
                  n: "02",
                  t: "DISTILL",
                  d: "It ranks what matters, writes plain-language hints for the dense stretches, and lifts quotes word for word.",
                  icon: (
                    <svg viewBox="0 0 72 72" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M10 22h52M10 36h34M10 50h20" />
                      <path d="M56 46l8 8-8 8" />
                    </svg>
                  ),
                },
                {
                  n: "03",
                  t: "READ",
                  d: "A summary you can finish with one coffee. Click any line to see the page behind it.",
                  icon: (
                    <svg viewBox="0 0 72 72" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M8 20c10-6 20-6 28 0v34c-8-6-18-6-28 0z" />
                      <path d="M64 20c-10-6-20-6-28 0v34c8-6 18-6 28 0z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <div key={s.n} className="border-2 border-[#F1ECE0] bg-[#0F626D] p-7">
                  <div className="flex items-start justify-between">
                    {s.icon}
                    <span className="rp-black text-3xl text-[#F2C14E]">{s.n}</span>
                  </div>
                  <h3 className="rp-black mt-8 text-2xl">{s.t}</h3>
                  <p className="mt-3 text-[.98rem] leading-7 text-[#E4F0F0]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="rp-black text-[clamp(2rem,4.6vw,3.4rem)] leading-none uppercase">
            What comes out of it
          </h2>
          <p className="rp-mono mt-3 text-[.72rem]">FOUR THINGS, EVERY TIME, RANKED.</p>

          <div className="mt-12 grid gap-7 sm:grid-cols-2">
            {[
              {
                t: "SUMMARY",
                d: "Ranked, not recited. The argument first, then the evidence, then the caveat you can stop worrying about.",
                accent: "text-[#FF4F8B]",
              },
              {
                t: "HINTS",
                d: "Plain-language context for the jargon, the formulas, and the reference you were supposed to know already.",
                accent: "text-[#147D8A]",
              },
              {
                t: "QUOTES",
                d: "The lines worth repeating, lifted verbatim with page numbers, ready for the meeting or the essay.",
                accent: "text-[#FF4F8B]",
              },
              {
                t: "INSIGHTS",
                d: "Contradictions, dependencies, and connections across sections. The document's subtext, surfaced.",
                accent: "text-[#147D8A]",
              },
            ].map((o, i) => (
              <div
                key={o.t}
                className={`rp-panel relative bg-[#FBF7EC] p-8 ${i % 2 ? "rotate-[.5deg]" : "-rotate-[.5deg]"}`}
              >
                <span className={`rp-black text-3xl ${o.accent}`}>{o.t}</span>
                <p className="mt-4 text-[1rem] leading-7">{o.d}</p>
                <span className="rp-mono absolute right-5 top-5 text-[.65rem]">PART {String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y-2 border-[#17130E] bg-[#17130E] py-20 text-[#F1ECE0]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="rp-black text-[clamp(2rem,4.6vw,3.4rem)] leading-none text-[#FF4F8B] uppercase">
              A short manifesto
            </h2>
            <ol className="mt-10 space-y-6">
              {[
                "Attention is the scarce resource. Treat it that way.",
                "Every claim keeps its page number. A summary that hides the evidence is a rumor.",
                "Hints are not cheating. They are what a well-informed colleague would whisper to you.",
                "Your documents are not training data. They go in, they come out, they are deleted.",
              ].map((m, i) => (
                <li key={m} className="flex gap-5">
                  <span className="rp-black text-2xl text-[#F2C14E]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="max-w-[58ch] text-[1.15rem] leading-8">{m}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="rates" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="rp-black text-[clamp(2rem,4.6vw,3.4rem)] leading-none uppercase">
            Subscription rates
          </h2>
          <p className="rp-mono mt-3 text-[.72rem]">CANCEL ANY TIME. WE WILL NOT MAKE IT WEIRD.</p>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {[
              { n: "READER", p: "$0", d: "3 documents a month, ranked summaries and quotes, source links.", hot: false },
              { n: "ANNOTATED", p: "$9", d: "Unlimited documents, hints and insights, export, questions to the document.", hot: true },
              { n: "LIBRARY", p: "$19", d: "Per seat. Shared shelves, team margins, admin, SSO, audit log.", hot: false },
            ].map((r) => (
              <div
                key={r.n}
                className={`relative flex flex-col bg-[#FBF7EC] p-8 ${
                  r.hot ? "border-2 border-[#17130E] shadow-[8px_8px_0_#FF4F8B]" : "border-2 border-[#17130E]"
                }`}
              >
                {r.hot && (
                  <span className="rp-black absolute -top-4 left-6 bg-[#FF4F8B] px-3 py-1 text-[.72rem] tracking-wide uppercase">
                    Most fed
                  </span>
                )}
                <p className="rp-black text-xl">{r.n}</p>
                <p className="rp-black mt-4 text-6xl leading-none">
                  {r.p}
                  <span className="rp-mono ml-2 align-middle text-[.7rem] font-normal">/ MONTH</span>
                </p>
                <p className="mt-5 flex-1 border-t-2 border-[#17130E]/15 pt-5 text-[.98rem] leading-7">{r.d}</p>
                <a
                  href="#feed"
                  className={`rp-black mt-7 block px-5 py-3 text-center text-[.85rem] uppercase ${
                    r.hot ? "bg-[#FF4F8B] text-[#17130E]" : "border-2 border-[#17130E] hover:bg-[#17130E] hover:text-[#F1ECE0]"
                  }`}
                >
                  {r.n === "READER" ? "Start free" : `Choose ${r.n.toLowerCase()}`}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y-2 border-[#17130E] bg-[#F2C14E] py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
            <h2 className="rp-black text-[clamp(2rem,4.6vw,3.4rem)] leading-none uppercase">
              Asked &amp; answered
            </h2>
            <dl className="space-y-7">
              {[
                { q: "Does it read scans?", a: "Yes. OCR handles scans and photographs, in forty-plus languages." },
                { q: "Where do my files go?", a: "In, processed, out. Deleted when your summary is built, never used for training." },
                { q: "Can I check its work?", a: "Every line links to its source page. Click and read the original sentence." },
                { q: "What if it misses something?", a: "Re-run any section at a deeper setting, or ask the document a direct question." },
              ].map((f) => (
                <div key={f.q} className="border-b-2 border-[#17130E]/20 pb-5">
                  <dt className="rp-black text-[1.05rem]">{f.q}</dt>
                  <dd className="mt-2 text-[.98rem] leading-7">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="feed" className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <h2 className="rp-black text-[clamp(2.4rem,6vw,4.4rem)] leading-[.94] uppercase">
            Bring the document.
            <br />
            <span className="text-[#FF4F8B]">Lose the weekend.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[1.05rem] leading-7">
            First three documents are free. No card, no demo call, no
            onboarding sequence with a progress bar.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
            <a href="#feed" className="rp-black rp-stamp text-[1rem]">FEED IT A PDF</a>
            <span className="rp-mono text-[.72rem]">DROP · DISTILL · DONE</span>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-[#17130E] bg-[#17130E] py-10 text-[#F1ECE0]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5 sm:px-8">
          <div>
            <p className="rp-black text-2xl">
              RATIO <span className="text-[#FF4F8B]">READER</span>
            </p>
            <p className="rp-mono mt-3 max-w-[42ch] text-[.7rem] leading-5">
              THE IMPORTANT PARTS PRESS · PRINTED CONTINUOUSLY · NO PADDING
              INCLUDED · EST. 2026
            </p>
            <div className="rp-barcode mt-5 flex items-end gap-[3px]" aria-hidden>
              {[3, 1, 4, 2, 1, 5, 2, 3, 1, 2, 4, 1, 3, 2, 5, 1, 2, 3, 1, 4].map(
                (w, i) => (
                  <span key={i} style={{ width: `${w * 2}px` }} />
                ),
              )}
            </div>
          </div>
          <nav className="rp-mono flex flex-wrap gap-6 text-[.75rem]">
            <a className="underline underline-offset-4" href="#ratio">THE RATIO</a>
            <a className="underline underline-offset-4" href="#machine">THE MACHINE</a>
            <a className="underline underline-offset-4" href="#rates">RATES</a>
            <a className="underline underline-offset-4" href="#feed">FEED</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
