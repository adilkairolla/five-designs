import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, FileText, Sparkles } from "lucide-react";

const layers = [
  {
    tag: "01 / THE GIST",
    title: "Summary",
    body: "One page that carries the whole argument: the claim, the evidence, and what it means. Written for a person, not a search engine.",
    color: "bg-[#e6ff3b]",
    note: "41 pages in. One page out.",
    stamp: "THE POINT",
  },
  {
    tag: "02 / THE MARGIN",
    title: "Hints",
    body: "Plain-language notes beside the hard parts. Definitions, missing context, and the sentence your professor will actually ask about.",
    color: "bg-[#ff4fa3]",
    note: "Like a friend who read it first.",
    stamp: "STUCK? HERE",
  },
  {
    tag: "03 / THE RECEIPTS",
    title: "Quotes",
    body: "The exact lines that hold the claim up, each one page-linked. Keep the proof, skip the highlighting marathon.",
    color: "bg-[#b9c6ff]",
    note: "Say it, then show it.",
    stamp: "CITE IT",
  },
  {
    tag: "04 / THE WIDER FRAME",
    title: "Insights",
    body: "What the document assumes, where it disagrees with itself, and the two things worth reading next. The part you would have missed.",
    color: "bg-[#f5f1e6]",
    note: "Connections, not cliffhangers.",
    stamp: "GO DEEPER",
  },
];

const steps = [
  {
    n: "01",
    title: "Drop the PDF",
    body: "Papers, reports, contracts, a 300-page book you have been avoiding. If it opens, it works.",
  },
  {
    n: "02",
    title: "Choose your depth",
    body: "Skim for the gist, study for the details, or teach it back. Same document, three useful shapes.",
  },
  {
    n: "03",
    title: "Keep the good part",
    body: "Read the summary, follow the hints, save the quotes. The source stays one click away.",
  },
];

const marquee = [
  "SUMMARY",
  "HINTS",
  "QUOTES",
  "INSIGHTS",
  "PAGE-LINKED",
  "NO FILLER",
  "PDF IN",
  "CLARITY OUT",
];

function Stamp({ children }: { children: string }) {
  return (
    <span className="inline-block -rotate-2 border-2 border-[#14110c] px-2.5 py-1 font-space text-[10px] font-bold uppercase tracking-[0.16em]">
      {children}
    </span>
  );
}

function RisoBadge() {
  return (
    <div className="relative size-14 shrink-0 sm:size-28">
      <svg viewBox="0 0 200 200" className="spin-slow size-full" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="#ff4fa3" stroke="#14110c" strokeWidth="4" />
        <text className="hidden font-space sm:inline" fontSize="21" fontWeight="700" fill="#14110c" letterSpacing="3">
          <textPath href="#badge-circle" startOffset="0">
            PDF IN · CLARITY OUT · READ LESS · KEEP MORE ·
          </textPath>
        </text>
        <path d="M78 108 L100 84 L122 108" fill="none" stroke="#14110c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M100 84 L100 128" fill="none" stroke="#14110c" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Specimen() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute -left-5 top-24 hidden -rotate-6 border-2 border-[#14110c] bg-[#e6ff3b] px-3 py-2 font-marker text-sm shadow-[4px_4px_0_#14110c] sm:block">
        read this bit twice
      </div>
      <div className="absolute -right-2 top-2 z-20 sm:-right-3 sm:top-3">
        <RisoBadge />
      </div>
      <div className="relative rotate-[2.5deg] border-2 border-[#14110c] bg-[#fffdf6] p-5 pt-8 shadow-[12px_12px_0_#14110c] transition-transform duration-500 hover:rotate-0 sm:p-7">
        <div className="absolute -top-3 left-8 h-6 w-24 rotate-[-4deg] tape" />
        <div className="flex items-center justify-between gap-3 border-b border-[#14110c]/25 pb-2 pr-10 font-space text-[9px] uppercase tracking-[0.18em] sm:pr-24">
          <span>Behavioural economics</span>
          <span>38 pp · 2,140 words kept</span>
        </div>
        <p className="mt-5 font-condensed text-[10px] uppercase tracking-[0.2em] text-[#14110c]/60">
          The source
        </p>
        <h3 className="mt-1 font-archivo text-xl font-semibold leading-snug tracking-tight">
          Why we choose the wrong option, even when we know better
        </h3>
        <p className="mt-3 font-newsreader text-[13.5px] leading-relaxed text-[#2a261f]/80">
          People do not evaluate choices in isolation. Every option is read against a reference point
          that is{" "}
          <span className="bg-[#e6ff3b] px-0.5 box-decoration-clone">
            usually arbitrary, often set by someone else, and almost never questioned
          </span>
          . The mistake is not in the choosing. It is in the frame.
        </p>
        <div className="relative mt-5 border-t-2 border-dashed border-[#14110c]/30 pt-4">
          <div className="absolute -right-2 -top-7 rotate-2 bg-[#ff4fa3] px-2 py-1 font-marker text-[11px] leading-tight text-[#14110c]">
            the whole argument ↑
          </div>
          <p className="font-space text-[9px] uppercase tracking-[0.16em] text-[#14110c]/60">
            Ratio output / gist
          </p>
          <p className="mt-1 font-archivo text-[14px] font-semibold leading-snug">
            We don&apos;t pick badly. We pick inside bad frames.
          </p>
          <ul className="mt-2 space-y-1.5 font-newsreader text-[12.5px] leading-snug text-[#2a261f]/80">
            <li className="flex gap-2"><span aria-hidden="true">→</span> Defaults outperform willpower in 8 of 11 studies.</li>
            <li className="flex gap-2"><span aria-hidden="true">→</span> The strongest predictor of choice is the first number shown.</li>
            <li className="flex gap-2"><span aria-hidden="true">→</span> Reframing beats more information. Every time.</li>
          </ul>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="border border-[#14110c] px-2 py-1 font-space text-[9px] uppercase tracking-[0.12em]">
            Quote saved · p. 17
          </span>
          <span className="font-marker text-xs">4 min read</span>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-2 rotate-[-5deg] border-2 border-[#14110c] bg-[#b9c6ff] px-4 py-2 font-archivo-black text-xs uppercase shadow-[4px_4px_0_#14110c] sm:-left-6">
        38 pages → 4 minutes
      </div>
    </div>
  );
}

export function One() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-[#f1f1ec] font-archivo text-[#14110c]">
      <div className="border-b-2 border-[#14110c] bg-[#e6ff3b]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2 font-archivo-black text-sm uppercase tracking-tight">
            <span className="flex size-7 items-center justify-center border-2 border-[#14110c] bg-[#ff4fa3]">
              <FileText className="size-4" strokeWidth={2.5} />
            </span>
            Ratio Reader
          </Link>
          <p className="hidden font-space text-[10px] uppercase tracking-[0.22em] md:block">
            For people with 74 tabs open
          </p>
          <div className="flex items-center gap-3">
            <Link to="/2" className="hidden font-space text-[10px] uppercase tracking-[0.14em] underline underline-offset-4 hover:no-underline sm:block">
              Next edition → 02
            </Link>
            <a
              href="#get"
              className="border-2 border-[#14110c] bg-[#14110c] px-4 py-2 font-space text-[10px] font-bold uppercase tracking-[0.14em] text-[#e6ff3b] shadow-[3px_3px_0_#ff4fa3] transition-transform hover:-translate-y-0.5"
            >
              Get the tool
            </a>
          </div>
        </div>
      </div>

      <main>
        <section className="relative overflow-hidden border-b-2 border-[#14110c] bg-[#e6ff3b]">
          <div className="pointer-events-none absolute inset-0 hidden select-none items-start justify-center overflow-hidden lg:flex" aria-hidden="true">
            <span className="mt-[-4rem] font-archivo-black text-[24vw] leading-none text-[#14110c]/[0.045]">
              RATIO
            </span>
          </div>
          <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28 lg:pt-24">
            <div className="relative z-10">
              <div className="anim-rise flex flex-wrap items-center gap-3">
                <Stamp>Edition 01 / Riso press</Stamp>
                <span className="font-condensed text-xs uppercase tracking-[0.2em]">
                  A reading instrument for too much to read
                </span>
              </div>
              <h1 className="anim-rise anim-delay-1 mt-8 font-archivo-black text-[clamp(3.6rem,9.4vw,8.6rem)] uppercase leading-[0.82] tracking-[-0.045em]">
                Read less.
                <br />
                <span className="relative isolate inline-block">
                  Keep
                  <span className="absolute inset-x-0 bottom-[0.1em] -z-10 h-[0.22em] -rotate-1 bg-[#ff4fa3]" aria-hidden="true" />
                </span>{" "}
                more.
              </h1>
              <div className="mt-8 flex max-w-xl flex-col gap-5 border-l-[3px] border-[#14110c] pl-5">
                <p className="font-archivo text-lg leading-snug sm:text-xl">
                  Ratio Reader turns any PDF into the part worth remembering: a clear summary,
                  margin-level hints, quotes you can cite, and insights you would have missed.
                </p>
                <p className="font-space text-[11px] uppercase leading-relaxed tracking-[0.08em] text-[#14110c]/70">
                  The whole document is read. Only the useful part comes back. Every claim stays
                  linked to its page.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#get"
                  className="group flex items-center gap-3 border-2 border-[#14110c] bg-[#14110c] px-6 py-3.5 font-archivo-black text-sm uppercase tracking-wide text-[#e6ff3b] shadow-[6px_6px_0_#ff4fa3] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#ff4fa3]"
                >
                  Upload a PDF — free
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </a>
                <a href="#inside" className="flex items-center gap-2 font-space text-[11px] uppercase tracking-[0.12em] underline underline-offset-4 hover:no-underline">
                  See what comes back
                  <ArrowDown className="size-3.5" />
                </a>
              </div>
              <p className="mt-4 font-condensed text-xs text-[#14110c]/60">
                No account for your first three documents. 30 seconds, give or take a coffee.
              </p>
            </div>
            <div className="relative z-10 lg:pt-4">
              <div className="float-slow">
                <Specimen />
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-b-2 border-[#14110c] bg-[#14110c] py-2.5">
          <div className="marquee">
            <div className="marquee-track items-center gap-6 pr-6 font-space text-[11px] font-bold uppercase tracking-[0.2em] text-[#e6ff3b]">
              {[...marquee, ...marquee].map((word, i) => (
                <span key={`${word}-${i}`} className="flex items-center gap-6 whitespace-nowrap">
                  {word}
                  <Sparkles className="size-3 text-[#ff4fa3]" strokeWidth={3} aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="border-b-2 border-[#14110c] bg-[#f1f1ec]">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:py-24">
            <div>
              <p className="font-space text-[10px] uppercase tracking-[0.24em] text-[#14110c]/55">The ratio, explained</p>
              <h2 className="mt-4 font-archivo-black text-4xl uppercase leading-[0.9] tracking-[-0.03em] sm:text-5xl">
                A document is<br />mostly scaffolding.
              </h2>
              <p className="mt-5 max-w-md font-newsreader text-lg leading-relaxed text-[#2a261f]/80">
                Repetition, throat-clearing, literature reviews that exist to prove the author read
                them. The point is in there. It just is not evenly distributed.
              </p>
            </div>
            <div className="border-2 border-[#14110c] bg-[#fffdf6] p-5 shadow-[6px_6px_0_#14110c] sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-2 border-b-2 border-[#14110c] pb-2">
                <p className="font-archivo-black text-lg uppercase tracking-tight">41 pages, received</p>
                <p className="font-marker text-sm">find the six that matter</p>
              </div>
              <div className="mt-4 grid grid-cols-10 gap-1.5" aria-hidden="true">
                {Array.from({ length: 41 }).map((_, i) => {
                  const useful = [4, 9, 17, 23, 31, 38].includes(i);
                  return (
                    <div
                      key={i}
                      className={`aspect-[3/4] border border-[#14110c]/40 ${
                        useful ? (i === 17 ? "bg-[#ff4fa3]" : "bg-[#b9c6ff]") : "bg-[#14110c]/[0.06]"
                      }`}
                    />
                  );
                })}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 border-t-2 border-[#14110c] pt-3">
                <div>
                  <p className="font-archivo-black text-2xl">35</p>
                  <p className="mt-0.5 font-condensed text-[10px] uppercase leading-tight tracking-[0.12em] text-[#14110c]/60">pages of scaffolding</p>
                </div>
                <div>
                  <p className="font-archivo-black text-2xl">6</p>
                  <p className="mt-0.5 font-condensed text-[10px] uppercase leading-tight tracking-[0.12em] text-[#14110c]/60">pages carry the claim</p>
                </div>
                <div className="border-2 border-[#14110c] bg-[#ff4fa3] px-2 py-1">
                  <p className="font-archivo-black text-2xl">1</p>
                  <p className="mt-0.5 font-condensed text-[10px] uppercase leading-tight tracking-[0.12em]">page comes back</p>
                </div>
              </div>
              <p className="mt-3 font-space text-[8px] uppercase leading-relaxed tracking-[0.1em] text-[#14110c]/50">
                Every sentence in that one page links back to one of the six.
              </p>
            </div>
          </div>
        </section>

        <section id="inside" className="border-b-2 border-[#14110c] bg-[#f1f1ec]">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-[#14110c] pb-6">
              <h2 className="max-w-2xl font-archivo-black text-4xl uppercase leading-[0.88] tracking-[-0.03em] sm:text-6xl">
                Four layers.<br />One honest reading.
              </h2>
              <p className="max-w-xs font-space text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[#14110c]/60">
                Choose the layers you want. Every line of output points back to the page it came from.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {layers.map((layer, i) => (
                <article
                  key={layer.title}
                  className={`${layer.color} rotate-hover relative border-2 border-[#14110c] p-6 shadow-[7px_7px_0_#14110c] sm:p-8`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-space text-[10px] font-bold uppercase tracking-[0.18em]">{layer.tag}</span>
                    <Stamp>{layer.stamp}</Stamp>
                  </div>
                  <h3 className="mt-10 font-archivo-black text-3xl uppercase tracking-tight sm:text-4xl">{layer.title}</h3>
                  <p className="mt-3 max-w-lg font-newsreader text-base leading-relaxed text-[#14110c]/80">{layer.body}</p>
                  <div className="mt-8 flex items-end justify-between gap-4 border-t-2 border-[#14110c]/20 pt-3">
                    <p className="font-marker text-sm">{layer.note}</p>
                    <span className="font-archivo-black text-xs">{String(i + 1).padStart(2, "0")} / 04</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b-2 border-[#14110c] bg-[#14110c] text-[#f1f1ec]">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-24">
            <div>
              <p className="font-space text-[10px] uppercase tracking-[0.24em] text-[#e6ff3b]">The specimen</p>
              <h2 className="mt-4 font-archivo-black text-4xl uppercase leading-[0.9] tracking-[-0.03em] sm:text-6xl">
                The gist,<br />in the wild.
              </h2>
              <p className="mt-6 max-w-md font-newsreader text-lg leading-relaxed text-[#f1f1ec]/75">
                A contract, a paper, a 60-page strategy deck — the shape is always the same. Here is
                what Ratio Reader gives back, with the source still attached.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["p. 4 · context", "p. 17 · key claim", "p. 23 · contradiction", "p. 31 · quote"].map((tag) => (
                  <span key={tag} className="border border-[#f1f1ec]/30 px-3 py-1.5 font-space text-[9px] uppercase tracking-[0.12em] text-[#f1f1ec]/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-l-2 border-[#ff4fa3] pl-5">
                <p className="font-newsreader text-xl italic leading-snug text-[#f1f1ec]/90">
                  &ldquo;I stopped taking notes on things I hadn&apos;t understood yet.&rdquo;
                </p>
                <p className="mt-2 font-space text-[9px] uppercase tracking-[0.16em] text-[#f1f1ec]/50">
                  Maya R. — graduate student, read 14 papers this week
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-2 -top-5 z-10 rotate-6 border-2 border-[#14110c] bg-[#e6ff3b] px-3 py-2 font-marker text-xs text-[#14110c] shadow-[3px_3px_0_#ff4fa3]">
                every line sourced
              </div>
              <div className="rotate-[-1.5deg] border-2 border-[#e6ff3b]/40 bg-[#fffdf6] p-6 text-[#14110c] shadow-[14px_14px_0_rgba(255,79,163,0.4)] sm:p-8">
                <div className="flex items-center justify-between border-b border-[#14110c]/20 pb-3 font-space text-[9px] uppercase tracking-[0.16em]">
                  <span>Ratio output / contract</span>
                  <span>6 min</span>
                </div>
                <p className="mt-5 font-space text-[9px] uppercase tracking-[0.16em] text-[#14110c]/55">The one thing to know</p>
                <p className="mt-1 font-archivo text-xl font-semibold leading-snug">
                  You can leave after 12 months. The notice period is 60 days, not 30.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-space text-[9px] uppercase tracking-[0.16em] text-[#14110c]/55">Hints</p>
                    <ul className="mt-2 space-y-2 font-newsreader text-[13px] leading-snug">
                      <li className="border-l-2 border-[#ff4fa3] pl-2.5">Clause 8 overrides the summary on page 2.</li>
                      <li className="border-l-2 border-[#ff4fa3] pl-2.5">&ldquo;Renewal&rdquo; here means automatic, not optional.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-space text-[9px] uppercase tracking-[0.16em] text-[#14110c]/55">Quote to keep</p>
                    <p className="mt-2 bg-[#e6ff3b] px-2 py-1 font-newsreader text-[13px] italic leading-snug">
                      &ldquo;Either party may terminate with sixty (60) days written notice.&rdquo;
                    </p>
                    <p className="mt-1 font-space text-[8px] uppercase tracking-[0.14em] text-[#14110c]/50">p. 9, clause 8.2</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-[#14110c]/20 pt-4">
                  <p className="font-space text-[9px] uppercase tracking-[0.16em] text-[#14110c]/55">Worth noticing</p>
                  <p className="mt-1 font-newsreader text-[13px] leading-relaxed">
                    The termination clause is friendlier than the renewal clause. Putting them side by
                    side is the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-[#14110c] bg-[#f1f1ec]">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-archivo-black text-4xl uppercase leading-none tracking-[-0.03em] sm:text-6xl">How the sausage gets read</h2>
              <span className="font-space text-[10px] uppercase tracking-[0.18em] text-[#14110c]/55">Three steps, no dashboard tour</span>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.n} className="relative border-t-[3px] border-[#14110c] pt-5">
                  <span className={`absolute -top-4 right-2 font-archivo-black text-6xl ${i === 1 ? "text-[#ff4fa3]" : "text-[#14110c]/15"}`} aria-hidden="true">
                    {step.n}
                  </span>
                  <p className="font-space text-[10px] uppercase tracking-[0.18em]">Step {step.n}</p>
                  <h3 className="mt-2 font-archivo-black text-2xl uppercase tracking-tight">{step.title}</h3>
                  <p className="mt-2 max-w-xs font-newsreader text-base leading-relaxed text-[#2a261f]/80">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="get" className="relative overflow-hidden border-b-2 border-[#14110c] bg-[#ff4fa3]">
          <div className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-[#e6ff3b] blur-[1px]" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 hidden font-archivo-black text-[15vw] leading-none text-[#14110c]/[0.05] lg:block" aria-hidden="true">
            LESS
          </div>
          <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-24">
            <div>
              <p className="font-space text-[10px] uppercase tracking-[0.24em]">Start with the thing you are avoiding</p>
              <h2 className="mt-4 max-w-3xl font-archivo-black text-[clamp(2.8rem,6vw,5.6rem)] uppercase leading-[0.85] tracking-[-0.04em]">
                Your reading list called. It&apos;s fine now.
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#get"
                  className="group flex items-center gap-3 border-2 border-[#14110c] bg-[#14110c] px-6 py-4 font-archivo-black text-sm uppercase tracking-wide text-[#e6ff3b] shadow-[6px_6px_0_#e6ff3b] transition-transform hover:-translate-y-0.5"
                >
                  Upload a PDF
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </a>
                <span className="font-marker text-base">free for 3 documents</span>
              </div>
            </div>
            <div className="border-2 border-[#14110c] bg-[#fffdf6] p-6 shadow-[8px_8px_0_#14110c]">
              <div className="flex items-center justify-between border-b border-[#14110c]/20 pb-3 font-space text-[9px] uppercase tracking-[0.16em]">
                <span>Reading list, after</span>
                <span>3 items</span>
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  ["The 74-page annual report", "read · 6 min"],
                  ["That paper from March", "read · 4 min"],
                  ["The contract you signed", "read · 3 min"],
                ].map(([item, status]) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-dashed border-[#14110c]/20 pb-3 font-condensed text-sm">
                    <span className="line-through decoration-[#14110c]/30">{item}</span>
                    <span className="shrink-0 bg-[#e6ff3b] px-2 py-0.5 font-space text-[8px] uppercase tracking-[0.12em]">{status}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-newsreader text-[13px] italic leading-relaxed text-[#14110c]/70">
                You still have to read. It just does not have to take the whole afternoon.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#14110c] text-[#f1f1ec]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border border-[#e6ff3b] text-[#e6ff3b]">
              <FileText className="size-4" />
            </span>
            <div>
              <p className="font-archivo-black text-sm uppercase">Ratio Reader</p>
              <p className="font-space text-[9px] uppercase tracking-[0.16em] text-[#f1f1ec]/40">Read less. Keep more. Est. 2026.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-space text-[9px] uppercase tracking-[0.14em] text-[#f1f1ec]/60">
            <span className="text-[#f1f1ec]/35">Five editions</span>
            {["1", "2", "3", "4", "5"].map((n) => (
              <Link key={n} to={`/${n}`} className={n === "1" ? "text-[#e6ff3b]" : "hover:text-[#e6ff3b]"}>
                {n.padStart(2, "0")}
              </Link>
            ))}
            <Link to="/" className="underline underline-offset-4 hover:text-[#e6ff3b]">Index</Link>
          </div>
          <p className="font-space text-[9px] uppercase tracking-[0.12em] text-[#f1f1ec]/30">A fictional product, designed five ways.</p>
        </div>
      </footer>
    </div>
  );
}
