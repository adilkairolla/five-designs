import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, FileUp, MoonStar, Quote } from "lucide-react";

const layers = [
  {
    key: "summary",
    label: "Summary",
    eyebrow: "The clear version",
    title: "What the document is actually saying",
    body: "A short, ordered account of the argument: the claim, the evidence, and the part the author buried in the middle. Written in plain language, with nothing added that was not in the file.",
    meta: "1 page · 4 min · whole document read",
    highlight: "the argument is not evenly distributed",
  },
  {
    key: "hints",
    label: "Hints",
    eyebrow: "The patient friend",
    title: "Help exactly where the page gets difficult",
    body: "Terms defined in place. Assumptions named. A quiet note when a sentence is doing more work than it appears to. The margin, finally earning its keep.",
    meta: "Margin notes · tied to page & paragraph",
    highlight: "this is the sentence to read twice",
  },
  {
    key: "quotes",
    label: "Quotes",
    eyebrow: "The proof",
    title: "The lines worth carrying out of the room",
    body: "Verbatim excerpts chosen for reuse, not decoration. Every quote keeps its page number, so the idea still belongs to its source when you repeat it.",
    meta: "Verbatim · page-linked · exportable",
    highlight: "keep the exact words, keep the page",
  },
  {
    key: "insights",
    label: "Insights",
    eyebrow: "The wider frame",
    title: "What the document does not say out loud",
    body: "The assumptions underneath it, the place it contradicts itself, the question it leaves open, and the two things worth reading next. The part that changes how you use it.",
    meta: "Context · contradictions · next reads",
    highlight: "the caveat changes who should listen",
  },
];

const faqs = [
  {
    q: "Does it read the whole PDF, or just skim it?",
    a: "The whole thing: body, footnotes, appendices, the lot. The summary is short because the reading was not.",
  },
  {
    q: "Can I trust what it says?",
    a: "Every output line links back to the page and paragraph it came from. Follow it, check it, disagree with it. The source is always one click away.",
  },
  {
    q: "What happens to my files?",
    a: "They are never used to train a model and never shown to anyone else. Delete a document and it is gone, including its outputs.",
  },
];

function Mark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-full border border-[#f2a65a]/50">
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <path d="M5 7h14M5 12h9M5 17h12" stroke="#f2a65a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function HeroDesk() {
  return (
    <div className="relative mx-auto mt-4 w-full max-w-[520px] lg:mt-0">
      <div className="glow-breathe pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,166,90,0.28)_0%,rgba(242,166,90,0.08)_42%,transparent_70%)] blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f2a65a]/10" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f2a65a]/10" aria-hidden="true" />

      <div className="relative z-10 rotate-[-1.6deg] rounded-sm bg-[#f3ead7] p-5 text-[#1b231d] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.8)] sm:p-7">
        <div className="flex items-center justify-between border-b border-[#1b231d]/15 pb-2 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#1b231d]/50">
          <span>The attention economy · p. 14</span>
          <span>41 pp</span>
        </div>
        <p className="mt-5 font-plex-mono text-[8px] uppercase tracking-[0.18em] text-[#1b231d]/45">3.2 / What gets remembered</p>
        <h3 className="mt-2 font-fraunces text-[26px] font-medium leading-[1.05] tracking-tight sm:text-[30px]">
          We do not remember what we read. We remember what we noticed.
        </h3>
        <p className="mt-4 font-newsreader text-[14px] leading-[1.7] text-[#1b231d]/80">
          Attention is not a spotlight. It is a series of small decisions, most of them made before
          we are aware of making them.{" "}
          <span className="bg-[#f2a65a]/50 px-0.5 [box-decoration-break:clone]">
            The argument is not evenly distributed across the page
          </span>
          , and neither is the meaning. A reader who finishes every sentence at the same speed has
          understood none of them.
        </p>
        <p className="mt-3 font-newsreader text-[14px] leading-[1.7] text-[#1b231d]/80">
          The studies below suggest something less flattering: we keep the shape of an argument and
          lose the condition attached to it. The caveat changes who should listen.
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[#1b231d]/15 pt-3 font-plex-mono text-[8px] uppercase tracking-[0.12em] text-[#1b231d]/45">
          <span>Highlighted by Ratio Reader</span>
          <span>p. 14 / 41</span>
        </div>
      </div>

      <div className="float-slow absolute -right-4 top-[16%] z-20 w-44 rotate-[4deg] rounded border border-[#f2a65a]/25 bg-[#152721]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur sm:-right-10 sm:w-52">
        <p className="flex items-center gap-1.5 font-plex-mono text-[7.5px] uppercase tracking-[0.18em] text-[#f2a65a]">
          <Quote className="size-2.5" /> Quote / p. 14
        </p>
        <p className="mt-2 font-fraunces text-sm italic leading-snug text-[#f0e6d2]/90">
          &ldquo;A reader who finishes every sentence at the same speed has understood none of them.&rdquo;
        </p>
      </div>

      <div className="float-slower absolute -left-4 bottom-[14%] z-20 w-40 -rotate-[3deg] rounded border border-[#f0e6d2]/15 bg-[#0e1d18]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur sm:-left-12 sm:w-48">
        <p className="font-plex-mono text-[7.5px] uppercase tracking-[0.18em] text-[#91a89b]">Hint</p>
        <p className="mt-2 font-newsreader text-[13px] leading-snug text-[#f0e6d2]/85">
          The caveat arrives in the third paragraph. It is the point.
        </p>
      </div>

      <div className="absolute -bottom-6 right-2 z-20 rotate-2 rounded-full border border-[#f2a65a]/30 bg-[#0c1713] px-4 py-2 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#f2a65a]/80 sm:right-6">
        41 pages → 4 minutes
      </div>
    </div>
  );
}

export function Three() {
  const [active, setActive] = useState("summary");
  const layer = layers.find((l) => l.key === active) ?? layers[0];

  return (
    <div className="grain grain-dark min-h-screen overflow-x-clip bg-[#08110e] font-newsreader text-[#f0e6d2]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-[#f2a65a]/60 to-transparent" aria-hidden="true" />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(242,166,90,0.16),transparent_55%),radial-gradient(ellipse_at_15%_90%,rgba(64,98,83,0.18),transparent_50%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
          <header className="flex items-center justify-between gap-6 py-5">
            <Link to="/" className="flex items-center gap-3">
              <Mark />
              <div className="leading-none">
                <p className="font-fraunces text-lg tracking-tight">Ratio Reader</p>
                <p className="mt-1 font-plex-mono text-[7.5px] uppercase tracking-[0.22em] text-[#91a89b]">Night edition · 03</p>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 font-plex-mono text-[8.5px] uppercase tracking-[0.18em] text-[#f0e6d2]/60 lg:flex">
              <a href="#reads" className="transition-colors hover:text-[#f2a65a]">How it reads</a>
              <a href="#layers" className="transition-colors hover:text-[#f2a65a]">What comes back</a>
              <a href="#pricing" className="transition-colors hover:text-[#f2a65a]">Pricing</a>
            </nav>
            <a href="#begin" className="group flex items-center gap-2 rounded-full border border-[#f2a65a]/40 px-4 py-2 font-plex-mono text-[8.5px] uppercase tracking-[0.16em] text-[#f2a65a] transition-colors hover:bg-[#f2a65a] hover:text-[#08110e]">
              Open a PDF
              <ArrowUpRight className="size-3" />
            </a>
          </header>

          <div className="grid items-center gap-16 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:pb-28 lg:pt-16">
            <div className="anim-rise relative z-10">
              <div className="flex items-center gap-3 font-plex-mono text-[8.5px] uppercase tracking-[0.2em] text-[#f2a65a]/85">
                <MoonStar className="size-3" strokeWidth={1.5} />
                For the 11 p.m. reader
              </div>
              <h1 className="mt-6 font-fraunces text-[clamp(3.5rem,7.4vw,6.4rem)] font-normal leading-[0.9] tracking-[-0.035em]">
                Keep the
                <br />
                <span className="italic text-[#f2a65a]">sentence</span> that
                <br />
                matters.
              </h1>
              <p className="mt-7 max-w-[46ch] font-newsreader text-lg leading-relaxed text-[#f0e6d2]/72">
                Ratio Reader reads the entire PDF, then hands back the part worth your attention: a
                clear summary, notes in the margin, the quotes that carry the claim, and the
                connections you would have missed. All of it, still tied to the page.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#begin" className="group flex items-center gap-3 rounded-full bg-[#f2a65a] px-6 py-3.5 font-plex-mono text-[9.5px] uppercase tracking-[0.16em] text-[#08110e] transition-colors hover:bg-[#f7bd80]">
                  Upload a PDF
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#reads" className="flex items-center gap-2 font-plex-mono text-[9px] uppercase tracking-[0.14em] text-[#f0e6d2]/65 underline decoration-[#f0e6d2]/20 underline-offset-4 transition-colors hover:text-[#f2a65a]">
                  See a page
                  <ArrowDown className="size-3.5" />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#f0e6d2]/10 pt-5 font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#91a89b]/70">
                <span>Reads every page</span>
                <span className="inline-block size-0.5 rounded-full bg-[#f2a65a]" />
                <span>Sources attached</span>
                <span className="inline-block size-0.5 rounded-full bg-[#f2a65a]" />
                <span>Private by default</span>
              </div>
            </div>
            <div className="anim-rise anim-delay-2 relative">
              <HeroDesk />
            </div>
          </div>
        </div>
      </section>

      <section id="reads" className="relative border-y border-[#f0e6d2]/10 bg-[#0b1713]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="font-plex-mono text-[8.5px] uppercase tracking-[0.22em] text-[#f2a65a]/80">The read</p>
              <h2 className="mt-4 font-fraunces text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.95] tracking-[-0.02em]">
                First the whole thing.
                <br />
                Then the point.
              </h2>
            </div>
            <p className="max-w-[52ch] font-newsreader text-base leading-relaxed text-[#f0e6d2]/60 md:justify-self-end">
              Most tools summarise by cutting. Ratio Reader reads first, ranks what matters, and
              shows its working. The summary is short because the reading was not.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "i",
                title: "The whole document",
                body: "Body, footnotes, appendices. A 300-page book gets the same attention as a two-page brief.",
              },
              {
                n: "ii",
                title: "The load-bearing parts",
                body: "Claims are weighed against evidence. Repetition collapses. Contradictions stay, because they change the reading.",
              },
              {
                n: "iii",
                title: "The useful shape",
                body: "A summary you can finish, hints where it gets hard, quotes you can cite, insights that widen the frame.",
              },
            ].map((step) => (
              <article key={step.n} className="group relative rounded-sm border border-[#f0e6d2]/10 bg-[#08110e]/50 p-6 transition-colors hover:border-[#f2a65a]/30">
                <span className="font-fraunces text-3xl italic text-[#f2a65a]/70">{step.n}</span>
                <h3 className="mt-6 font-fraunces text-2xl leading-tight">{step.title}</h3>
                <p className="mt-3 font-newsreader text-[15px] leading-relaxed text-[#f0e6d2]/60">{step.body}</p>
                <span className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#f2a65a]/40 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="layers" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(242,166,90,0.07),transparent_55%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-plex-mono text-[8.5px] uppercase tracking-[0.22em] text-[#f2a65a]/80">Four layers</p>
              <h2 className="mt-4 font-fraunces text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.95] tracking-[-0.02em]">
                One reading,
                <br />
                four kinds of help.
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 rounded-full border border-[#f0e6d2]/12 p-1" role="tablist" aria-label="Output layers">
              {layers.map((l) => (
                <button
                  key={l.key}
                  type="button"
                  role="tab"
                  aria-selected={active === l.key}
                  onClick={() => setActive(l.key)}
                  className={`rounded-full px-4 py-2 font-plex-mono text-[8.5px] uppercase tracking-[0.14em] transition-colors ${
                    active === l.key ? "bg-[#f2a65a] text-[#08110e]" : "text-[#f0e6d2]/55 hover:text-[#f0e6d2]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
            <div className="relative rounded-sm border border-[#f0e6d2]/12 bg-[#0d1a16] p-6 sm:p-9">
              <div className="flex items-center justify-between border-b border-[#f0e6d2]/10 pb-3 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#f0e6d2]/40">
                <span>Annotated reading · p. 14</span>
                <span>41 pp · 18,400 words</span>
              </div>
              <p className="mt-6 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#f2a65a]/65">3.2 / What gets remembered</p>
              <h3 className="mt-3 font-fraunces text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.08] tracking-tight">
                We do not remember what we read. We remember what we noticed.
              </h3>
              <div className="mt-6 space-y-4 font-newsreader text-[15px] leading-[1.75] text-[#f0e6d2]/68 sm:text-base">
                <p>
                  Attention is not a spotlight. It is a series of small decisions, most of them made
                  before we are aware of making them.{" "}
                  <span className="rounded-[1px] bg-[#f2a65a]/22 px-0.5 text-[#f0e6d2]/90 [box-decoration-break:clone]">
                    The argument is not evenly distributed across the page
                  </span>
                  , and neither is the meaning.
                </p>
                <p>
                  The studies below suggest something less flattering: we keep the shape of an
                  argument and lose the condition attached to it.{" "}
                  <span className="border-b border-[#f2a65a]/50 pb-0.5 text-[#f0e6d2]/90">
                    The caveat changes who should listen.
                  </span>
                </p>
                <p className="italic text-[#f0e6d2]/45">
                  Four of the twelve sites improved. The other eight were already understaffed.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#f0e6d2]/10 pt-4 font-plex-mono text-[8px] uppercase tracking-[0.13em] text-[#f0e6d2]/35">
                <span className="rounded-full border border-[#f2a65a]/30 px-2.5 py-1 text-[#f2a65a]/80">67% signal</span>
                <span className="rounded-full border border-[#f0e6d2]/12 px-2.5 py-1">33% scaffolding</span>
                <span>Source retained in full</span>
              </div>
            </div>

            <div key={layer.key} className="anim-fade flex flex-col rounded-sm border border-[#f2a65a]/25 bg-[#101f1a] p-6 sm:p-8">
              <p className="font-plex-mono text-[8px] uppercase tracking-[0.2em] text-[#f2a65a]/80">{layer.eyebrow}</p>
              <h3 className="mt-4 font-fraunces text-3xl leading-none">{layer.title}</h3>
              <p className="mt-5 font-newsreader text-base leading-relaxed text-[#f0e6d2]/68">{layer.body}</p>
              <div className="mt-6 border-l border-[#f2a65a]/40 pl-4">
                <p className="font-fraunces text-lg italic leading-snug text-[#f0e6d2]/85">
                  &ldquo;{layer.highlight}&rdquo;
                </p>
                <p className="mt-2 font-plex-mono text-[7.5px] uppercase tracking-[0.14em] text-[#91a89b]/55">Margin note · p. 14</p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-4 pt-8 font-plex-mono text-[8px] uppercase tracking-[0.13em] text-[#f0e6d2]/40">
                <span>{layer.meta}</span>
                <button type="button" className="flex items-center gap-1 text-[#f2a65a]/80 hover:text-[#f2a65a]">
                  View source <ArrowUpRight className="size-3" />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-right font-plex-mono text-[8px] uppercase tracking-[0.12em] text-[#f0e6d2]/25">
            Layers can be switched off. The source cannot.
          </p>
        </div>
      </section>

      <section className="relative border-y border-[#f0e6d2]/10 bg-[#0b1713]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <figure className="relative">
              <Quote className="size-8 text-[#f2a65a]/50" strokeWidth={1.2} />
              <blockquote className="mt-5 font-fraunces text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.12] tracking-tight text-[#f0e6d2]/92">
                &ldquo;I used to read everything twice because I could not remember what I had read
                the first time. Now I read once, and keep the part that mattered.&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-plex-mono text-[8px] uppercase tracking-[0.16em] text-[#91a89b]/60">
                Elif A. — researcher, reads 30 papers a month
              </figcaption>
            </figure>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  q: "The hints feel like sitting next to someone who has already read the book.",
                  who: "Product designer",
                },
                {
                  q: "I forwarded a summary to my team. Every quote still had its page number. Nobody had to ask.",
                  who: "Consultant",
                },
                {
                  q: "It found the one clause that mattered in a 54-page contract. That paid for the year.",
                  who: "Small studio owner",
                },
                {
                  q: "The insights are the reason I stopped using a highlight-and-pray method.",
                  who: "PhD candidate",
                },
              ].map((t) => (
                <div key={t.who} className="border-t border-[#f0e6d2]/12 pt-4">
                  <p className="font-newsreader text-[15px] italic leading-relaxed text-[#f0e6d2]/65">&ldquo;{t.q}&rdquo;</p>
                  <p className="mt-3 font-plex-mono text-[7.5px] uppercase tracking-[0.14em] text-[#91a89b]/50">{t.who}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-plex-mono text-[8.5px] uppercase tracking-[0.22em] text-[#f2a65a]/80">Pricing</p>
              <h2 className="mt-4 font-fraunces text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[0.95] tracking-[-0.02em]">
                Pay for the reading,
                <br />
                not the storage.
              </h2>
              <p className="mt-5 max-w-[38ch] font-newsreader text-base leading-relaxed text-[#f0e6d2]/55">
                Start with three documents, no account. Keep going if it earns it.
              </p>
              <p className="mt-6 font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#f2a65a]/70">Cancel whenever. Files leave with you.</p>
            </div>
            <div className="divide-y divide-[#f0e6d2]/10 border-y border-[#f0e6d2]/10">
              {[
                {
                  name: "First light",
                  price: "Free",
                  detail: "3 documents a month · all four layers · source links",
                  cta: "Start reading",
                  featured: false,
                },
                {
                  name: "Reader",
                  price: "$8",
                  suffix: "/month",
                  detail: "Unlimited documents · 500 pages each · exports · priority processing",
                  cta: "Choose Reader",
                  featured: true,
                },
                {
                  name: "Studio",
                  price: "$6",
                  suffix: "/person",
                  detail: "Shared library · collections · admin controls · SSO",
                  cta: "Talk to us",
                  featured: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`grid items-center gap-3 py-6 sm:grid-cols-[0.65fr_0.55fr_1.4fr_auto] sm:gap-6 ${
                    plan.featured ? "relative bg-[#f2a65a]/[0.06] px-4 sm:px-5" : ""
                  }`}
                >
                  <div>
                    <p className="font-fraunces text-xl">{plan.name}</p>
                    {plan.featured && (
                      <span className="mt-1 inline-block font-plex-mono text-[7px] uppercase tracking-[0.16em] text-[#f2a65a]">Most read</span>
                    )}
                  </div>
                  <p className="font-fraunces text-2xl text-[#f0e6d2]/90">
                    {plan.price}
                    {plan.suffix && <span className="ml-0.5 font-newsreader text-xs text-[#f0e6d2]/40">{plan.suffix}</span>}
                  </p>
                  <p className="font-newsreader text-sm leading-relaxed text-[#f0e6d2]/50">{plan.detail}</p>
                  <a
                    href="#begin"
                    className={`justify-self-start rounded-full border px-4 py-2 font-plex-mono text-[8px] uppercase tracking-[0.13em] transition-colors sm:justify-self-end ${
                      plan.featured
                        ? "border-[#f2a65a] bg-[#f2a65a] text-[#08110e] hover:bg-[#f7bd80]"
                        : "border-[#f0e6d2]/20 text-[#f0e6d2]/65 hover:border-[#f2a65a]/60 hover:text-[#f2a65a]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 border-t border-[#f0e6d2]/10 pt-10 md:grid-cols-3">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-fraunces text-lg leading-snug text-[#f0e6d2]/85 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="mt-0.5 shrink-0 font-plex-mono text-sm text-[#f2a65a]/60 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-newsreader text-sm leading-relaxed text-[#f0e6d2]/50">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="begin" className="relative overflow-hidden border-t border-[#f0e6d2]/10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(242,166,90,0.24),transparent_65%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <p className="font-plex-mono text-[8.5px] uppercase tracking-[0.24em] text-[#f2a65a]/80">The lamp is on</p>
          <h2 className="mt-6 font-fraunces text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.03em]">
            Bring us the thing
            <br />
            <span className="italic">you keep putting off.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md font-newsreader text-lg leading-relaxed text-[#f0e6d2]/60">
            A report, a paper, a book with a bookmark from last winter. You will know in thirty
            seconds whether it was worth the evening.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#begin" className="group flex items-center gap-3 rounded-full bg-[#f2a65a] px-7 py-4 font-plex-mono text-[10px] uppercase tracking-[0.16em] text-[#08110e] transition-colors hover:bg-[#f7bd80]">
              <FileUp className="size-4" strokeWidth={1.8} />
              Upload a PDF
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#f0e6d2]/35">Free for your first three</span>
          </div>
          <p className="mt-6 font-newsreader text-sm italic text-[#91a89b]/50">
            Ratio Reader, edition 03. Designed to be read under a small circle of light.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#f0e6d2]/10 bg-[#060d0a]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Mark />
            <div>
              <p className="font-fraunces text-base">Ratio Reader</p>
              <p className="mt-0.5 font-plex-mono text-[7px] uppercase tracking-[0.18em] text-[#91a89b]/45">Read less. Keep more.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-plex-mono text-[8px] uppercase tracking-[0.14em] text-[#91a89b]/55">
            <span className="text-[#91a89b]/30">Five editions</span>
            {["1", "2", "3", "4", "5"].map((n) => (
              <Link key={n} to={`/${n}`} className={n === "3" ? "text-[#f2a65a]" : "transition-colors hover:text-[#f2a65a]"}>
                {n.padStart(2, "0")}
              </Link>
            ))}
            <Link to="/" className="underline underline-offset-4 hover:text-[#f2a65a]">Index</Link>
          </div>
          <p className="font-plex-mono text-[7px] uppercase tracking-[0.12em] text-[#91a89b]/25">Fiction, but a good idea.</p>
        </div>
      </footer>
    </div>
  );
}
