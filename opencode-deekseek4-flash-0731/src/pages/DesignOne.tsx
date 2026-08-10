import { ArrowUpRight, Compass, Feather, Highlighter, Quote, Upload } from "lucide-react";
import { DesignSwitcher } from "../components/DesignSwitcher";
import { Reveal } from "../components/Reveal";

const EDITIONS = [
  {
    icon: Feather,
    kicker: "Department of Compression",
    title: "The Digest",
    body: "A one-page brief of the document's claims, evidence and conclusions — written like a front page, not an abstract.",
    exhibit: "Exhibit A — 62 pages become 90 seconds",
  },
  {
    icon: Highlighter,
    kicker: "Department of Margin Notes",
    title: "Marginalia",
    body: "Hints where you need them: definitions, context, and a gentle warning before the jargon gets brave.",
    exhibit: "Exhibit B — 12 hints per digest, on average",
  },
  {
    icon: Quote,
    kicker: "Department of Verbatim",
    title: "Quotable",
    body: "The sentences worth stealing, lifted verbatim and cited to the page — for your essay, deck, or shower argument.",
    exhibit: "Exhibit C — every quote carries its page number",
  },
  {
    icon: Compass,
    kicker: "Department of Reading Between",
    title: "Between the Lines",
    body: "What the author assumes, what the data implies, and where the argument creaks under its own weight.",
    exhibit: "Exhibit D — assumptions surfaced, not buried",
  },
];

const STEPS = [
  {
    no: "I",
    title: "File the copy",
    body: "Drop in any PDF — a paper, a contract, a 300-page report. Length is not a concern; it is a beat to cover.",
  },
  {
    no: "II",
    title: "The edit",
    body: "Ratio reader weighs every claim, keeps the evidence, and cuts the padding. Nothing important reaches the shredder.",
  },
  {
    no: "III",
    title: "Hot off the press",
    body: "About thirty seconds later your digest arrives: summary, hints, quotes and insights folded neatly into one page.",
  },
];

const LETTERS = [
  {
    body: "My dissertation committee believes I have read everything. I have not. Ratio reader makes it convincingly appear that I have.",
    from: "T. Nakamura",
    title: "Doctoral candidate",
  },
  {
    body: "Two hundred and forty pages of case law became one page of sense. My billable hours wept with joy.",
    from: "R. Alvarez",
    title: "Attorney at law",
  },
  {
    body: "I now finish three papers a week and still take long walks. A miracle of modern engineering, plainly stated.",
    from: "J. Whitfield",
    title: "Independent researcher",
  },
];

const PLANS = [
  {
    name: "Curious",
    price: "Free",
    body: "Your first ten documents distilled gratis. No card, no ceremony, no fine print worth summarizing.",
    cta: "Start reading",
  },
  {
    name: "Scholar",
    price: "$9 / month",
    body: "Unlimited digests, marginalia, quotables and exports. The serious reader's subscription, billed gently.",
    cta: "Subscribe",
    featured: true,
  },
  {
    name: "Faculty",
    price: "$29 / month",
    body: "For seminars and study groups: shared libraries, joint annotations, and priority at the presses.",
    cta: "Assemble a desk",
  },
];

export function DesignOne() {
  return (
    <div className="min-h-screen bg-[#f6f1e7] font-body-serif text-[#17140e] paper-grain antialiased">
      <div className="border-b border-[#17140e]/25">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 font-sans text-[11px] uppercase tracking-[0.18em]">
          <span>Vol. I · No. 1</span>
          <span className="hidden sm:block">Founded 2026 — for the honestly curious</span>
          <span>Price: one PDF</span>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-4 pb-5 pt-10 text-center">
        <div className="flex items-center justify-center gap-8">
          <span className="hidden font-sans text-[10px] uppercase tracking-[0.3em] text-[#17140e]/60 md:block">
            Est. 2026
          </span>
          <h1 className="font-display text-5xl font-black tracking-tight sm:text-7xl md:text-8xl">
            The Daily Ratio
          </h1>
          <span className="hidden font-sans text-[10px] uppercase tracking-[0.3em] text-[#17140e]/60 md:block">
            ✦ ✦ ✦
          </span>
        </div>
        <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.35em] text-[#17140e]/70 md:text-xs">
          Every document, distilled to its essence
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t-2 border-[#17140e]" />
        <div className="mt-[3px] border-t border-[#17140e]" />
      </div>

      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-b border-[#17140e] py-3 font-sans text-[11px] uppercase tracking-[0.22em]">
          <a href="#editions" className="transition-colors hover:text-[#a51d2a]">
            In this edition
          </a>
          <a href="#press" className="transition-colors hover:text-[#a51d2a]">
            The process
          </a>
          <a href="#letters" className="transition-colors hover:text-[#a51d2a]">
            Letters
          </a>
          <a href="#classifieds" className="transition-colors hover:text-[#a51d2a]">
            Classifieds
          </a>
          <a
            href="#subscribe"
            className="inline-flex items-center gap-1.5 bg-[#17140e] px-4 py-1.5 text-[#f6f1e7] transition-colors hover:bg-[#a51d2a]"
          >
            Upload a PDF <ArrowUpRight size={13} />
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#a51d2a]">
            Leading story — reading, rescued
          </p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Sixty-two pages in.
            <br />
            One page out.
          </h2>
          <p className="drop-cap mt-8 max-w-xl text-lg leading-relaxed text-[#17140e]/85">
            Ratio reader is the newsroom your documents deserve. Upload any PDF and receive a
            one-page digest — the argument, the evidence, the conclusion — with hints in the
            margins, quotes worth keeping, and the insights hiding between the lines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#subscribe"
              className="inline-flex items-center gap-2 bg-[#17140e] px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-[#f6f1e7] transition-colors hover:bg-[#a51d2a]"
            >
              <Upload size={15} /> Upload your first PDF
            </a>
            <a
              href="#editions"
              className="inline-flex items-center gap-2 border border-[#17140e] px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[#17140e] hover:text-[#f6f1e7]"
            >
              Read a sample digest
            </a>
          </div>
          <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-[#17140e]/55">
            Free for your first ten documents · No account required
          </p>
        </div>

        <aside className="md:col-span-5">
          <Reveal delay={0.15}>
            <div className="border-2 border-[#17140e] bg-[#fbf7ee] p-6">
              <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.25em] text-[#17140e]/60">
                <span>Sample digest</span>
                <span>No. 001</span>
              </div>
              <div className="mt-2 border-t-2 border-[#17140e]" />
              <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.25em] text-[#a51d2a]">
                Behavioral economics · 62 pages → 1
              </p>
              <h3 className="mt-2 font-display text-3xl font-black leading-tight">
                Deep work still beats deep stacks
              </h3>
              <div className="mt-3 border-t border-[#17140e]/30" />
              <ul className="mt-4 space-y-3 text-[15px] leading-snug">
                {[
                  "Focus is a budget: spend it on shallow pages and none is left for the hard parts.",
                  "The headline effect (d = 0.63) survives three independent replications.",
                  "Recommendation: two 40-minute reading blocks, zero open tabs.",
                ].map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-[2px] text-[#a51d2a]">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="mt-5 border-l-[3px] border-[#a51d2a] pl-4">
                <p className="font-display text-lg font-medium italic leading-snug">
                  “Attention is the scarcest resource of the decade.”
                </p>
                <cite className="mt-1 block font-sans text-[10px] uppercase not-italic tracking-[0.2em] text-[#17140e]/55">
                  Quotable — page 41
                </cite>
              </blockquote>
              <div className="mt-5 bg-[#17140e]/[0.05] p-3.5">
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#a51d2a]">
                  Marginal hint
                </p>
                <p className="mt-1 text-sm leading-snug text-[#17140e]/80">
                  §4 assumes Kahneman's framing. Short on time? Skip straight to §4.3 — the
                  digest has already footnoted the rest.
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[#17140e]/30 pt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-[#17140e]/55">
                <span>7 quotables</span>
                <span>12 hints</span>
                <span>90 sec read</span>
              </div>
            </div>
          </Reveal>
        </aside>
      </section>

      <section id="editions" className="border-t-2 border-[#17140e]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-sans text-xs uppercase tracking-[0.35em]">In this edition</h3>
            <span className="font-sans text-[11px] italic text-[#17140e]/50">
              Four departments, one digest
            </span>
          </div>
          <div className="mt-8 grid gap-px border border-[#17140e]/25 bg-[#17140e]/25 md:grid-cols-4">
            {EDITIONS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col bg-[#f6f1e7] p-6">
                  <f.icon size={22} strokeWidth={1.5} className="text-[#a51d2a]" />
                  <p className="mt-4 font-sans text-[9px] uppercase tracking-[0.25em] text-[#a51d2a]">
                    {f.kicker}
                  </p>
                  <h4 className="mt-1 font-display text-2xl font-black">{f.title}</h4>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#17140e]/85">
                    {f.body}
                  </p>
                  <p className="mt-5 border-t border-[#17140e]/25 pt-3 font-sans text-[9px] uppercase tracking-[0.18em] text-[#17140e]/50">
                    {f.exhibit}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="border-t border-[#17140e]/40 bg-[#efe7d7]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h3 className="font-sans text-xs uppercase tracking-[0.35em]">How it comes to press</h3>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.1}>
                <div className="flex items-start gap-5">
                  <span className="font-display text-6xl font-black leading-none text-[#a51d2a]">
                    {s.no}
                  </span>
                  <div>
                    <h4 className="font-display text-2xl font-black">{s.title}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#17140e]/80">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17140e] text-[#f6f1e7]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <Quote size={30} strokeWidth={1.5} className="mx-auto text-[#a51d2a]" />
          <p className="mt-6 font-display text-3xl font-medium italic leading-snug md:text-4xl">
            “I stopped fearing long documents. I read the digest, then I read what deserved
            reading.”
          </p>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.3em] text-[#f6f1e7]/60">
            Dr. Amara Osei — historian of science, reformed skimmer
          </p>
        </div>
      </section>

      <section id="letters" className="border-t border-[#17140e]/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h3 className="font-sans text-xs uppercase tracking-[0.35em]">Letters to the editor</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {LETTERS.map((l, i) => (
              <Reveal key={l.from} delay={i * 0.1}>
                <article className="border border-[#17140e]/30 p-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#a51d2a]">
                    To the editor:
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed">“{l.body}”</p>
                  <p className="mt-5 font-display text-lg font-bold italic">— {l.from}</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#17140e]/55">
                    {l.title}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="classifieds" className="border-t border-[#17140e]/40 bg-[#efe7d7]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-sans text-xs uppercase tracking-[0.35em]">Classifieds</h3>
            <span className="font-sans text-[11px] italic text-[#17140e]/50">
              Subscriptions, honestly advertised
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <article
                  className={`flex h-full flex-col border-2 p-6 ${
                    p.featured
                      ? "border-[#a51d2a] bg-[#fbf7ee]"
                      : "border-[#17140e] bg-[#f6f1e7]"
                  }`}
                >
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em]">
                    {p.featured ? "Most subscribed" : "Advertisement"}
                  </p>
                  <h4 className="mt-2 font-display text-3xl font-black">{p.name}</h4>
                  <p className="mt-1 font-display text-xl font-bold italic text-[#a51d2a]">
                    {p.price}
                  </p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#17140e]/80">
                    {p.body}
                  </p>
                  <a
                    href="#subscribe"
                    className={`mt-6 inline-flex w-fit items-center gap-2 px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.2em] transition-colors ${
                      p.featured
                        ? "bg-[#a51d2a] text-[#f6f1e7] hover:bg-[#17140e]"
                        : "border border-[#17140e] hover:bg-[#17140e] hover:text-[#f6f1e7]"
                    }`}
                  >
                    {p.cta} <ArrowUpRight size={13} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="border-t-2 border-[#17140e]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#a51d2a]">
            Try the press
          </p>
          <h3 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            If the digest doesn't save you an hour, we'll eat the edition.
          </h3>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-[#17140e] px-8 py-4 font-sans text-xs uppercase tracking-[0.22em] text-[#f6f1e7] transition-colors hover:bg-[#a51d2a]"
          >
            <Upload size={16} /> Upload a PDF — free
          </a>
        </div>
      </section>

      <footer className="border-t border-[#17140e]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-sans text-[10px] uppercase tracking-[0.2em] text-[#17140e]/55">
          <span>The Daily Ratio — published by Ratio reader, Inc.</span>
          <span className="hidden md:block">Set in Fraunces & Newsreader</span>
          <span>© 2026 · All rights reserved, most pages summarized</span>
        </div>
      </footer>

      <DesignSwitcher />
    </div>
  );
}
