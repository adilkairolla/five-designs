import { motion } from "motion/react";
import { ArrowRight, Brain, Gamepad2, Mic, Sparkles, Star, Upload } from "lucide-react";
import { DesignSwitcher } from "../components/DesignSwitcher";
import { Reveal } from "../components/Reveal";

const FEATURES = [
  {
    icon: Sparkles,
    title: "The Gist",
    tag: "Summaries",
    body: "The whole document's point on one page. Skim it in 60 seconds, sound like you read it for a week.",
    bg: "bg-[#ffd23f]",
    rotate: "-rotate-2",
  },
  {
    icon: Gamepad2,
    title: "Cheat Codes",
    tag: "Hints",
    body: "Hints that explain the hard bits before they ambush you. Like SparkNotes, except it read your file.",
    bg: "bg-[#ff7ac3]",
    rotate: "rotate-1",
  },
  {
    icon: Mic,
    title: "Mic Drops",
    tag: "Quotes",
    body: "The best lines lifted straight from the source, with page numbers. Copy, paste, take the credit.",
    bg: "bg-[#7ad0ff]",
    rotate: "-rotate-1",
  },
  {
    icon: Brain,
    title: "Big Brain Energy",
    tag: "Insights",
    body: "Connections, contradictions and 'wait, what?' moments — served on a plate with a side of context.",
    bg: "bg-[#b8f26b]",
    rotate: "rotate-2",
  },
];

const STEPS = [
  {
    no: "1",
    title: "Chuck it in",
    body: "Drag any PDF into the box. Textbooks, reports, that paper your advisor 'insists' you read.",
    bg: "bg-[#ffd23f]",
  },
  {
    no: "2",
    title: "Whirring noises",
    body: "Ratio reader reads every single page so you don't have to. It even reads the footnotes. Show-off.",
    bg: "bg-[#ff7ac3]",
  },
  {
    no: "3",
    title: "Get the good bits",
    body: "Summary, hints, quotes and insights land about 30 seconds later. Homework energy: restored.",
    bg: "bg-[#7ad0ff]",
  },
];

const QUOTES = [
  {
    text: "I read a 300-page chapter in four minutes and aced the quiz. Don't tell my professor.",
    from: "Maya",
    role: "grad student",
    bg: "bg-[#ffd23f]",
  },
  {
    text: "My book club now 'reads' a book a week. We're unstoppable and slightly fraudulent.",
    from: "Dev",
    role: "book club founder",
    bg: "bg-[#b8f26b]",
  },
  {
    text: "It found a quote in my own thesis I had completely forgotten I wrote. Respect.",
    from: "Sofia",
    role: "PhD survivor",
    bg: "bg-[#7ad0ff]",
  },
];

const PLANS = [
  {
    name: "Free Sample",
    price: "$0",
    perks: ["10 documents", "Full summaries", "Hints & quotes", "No card needed"],
    bg: "bg-white",
    featured: false,
  },
  {
    name: "Bookworm",
    price: "$8/mo",
    perks: ["Unlimited documents", "Everything in Free", "Insights & exports", "Priority whirring"],
    bg: "bg-[#ffd23f]",
    featured: true,
  },
  {
    name: "Night Owl",
    price: "$20/mo",
    perks: ["For teams & clubs", "Shared libraries", "Group annotations", "API access"],
    bg: "bg-white",
    featured: false,
  },
];

function MarqueeStrip() {
  const items = ["Summaries", "Hints", "Quotes", "Insights", "Zero skimming guilt", "Footnotes included"];
  return (
    <div className="overflow-hidden border-y-4 border-[#141414] bg-[#ffd23f]">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-6 whitespace-nowrap px-6 py-3 font-brutal text-xl uppercase"
              >
                {item} <Star size={18} className="fill-[#141414]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DesignThree() {
  return (
    <div className="min-h-screen bg-[#fdf4e0] font-grotesk text-[#141414] antialiased">
      <header className="border-b-4 border-[#141414]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center border-[3px] border-[#141414] bg-[#ff7ac3] font-brutal text-lg shadow-brutal-sm">
              R
            </span>
            <span className="font-brutal text-xl tracking-tight">RATIO READER</span>
          </div>
          <nav className="hidden items-center gap-7 font-bold uppercase tracking-wide md:flex">
            <a href="#why" className="hover:text-[#ff7ac3]">Why</a>
            <a href="#how" className="hover:text-[#ff7ac3]">How</a>
            <a href="#plans" className="hover:text-[#ff7ac3]">Plans</a>
          </nav>
          <a
            href="#cta"
            className="border-[3px] border-[#141414] bg-[#ffd23f] px-5 py-2.5 font-brutal text-sm uppercase shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Try it
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <motion.div
              initial={{ rotate: -4, opacity: 0 }}
              animate={{ rotate: -2, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block border-[3px] border-[#141414] bg-[#b8f26b] px-4 py-1.5 font-brutal text-xs uppercase shadow-brutal-sm"
            >
              The anti-snooze reading tool
            </motion.div>
            <h1 className="mt-6 font-brutal text-5xl uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              PDFs are
              <br />a snooze.
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 top-2 -skew-x-3 bg-[#ffd23f]" />
                <span className="relative">Wake them up.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg font-medium leading-relaxed">
              Ratio reader smashes long, dusty documents into the good bits: a punchy summary,
              sneaky-helpful hints, quotes you'll actually use, and insights that make you the
              smartest person in the room.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-[3px] border-[#141414] bg-[#ff7ac3] px-7 py-4 font-brutal text-base uppercase shadow-brutal"
              >
                <Upload size={20} /> Feed me a PDF
              </motion.a>
              <span className="font-bold">→ it's free for 10 docs</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -left-6 -top-8 z-10 rotate-[-8deg] border-[3px] border-[#141414] bg-[#7ad0ff] px-3 py-1.5 font-brutal text-xs uppercase shadow-brutal-sm">
              No skimming guilt
            </div>
            <div className="absolute -right-4 top-16 z-10 rotate-6 border-[3px] border-[#141414] bg-[#ffd23f] px-3 py-1.5 font-brutal text-xs uppercase shadow-brutal-sm">
              100% brain food
            </div>
            <div className="rotate-2 border-[3px] border-[#141414] bg-white p-6 shadow-brutal-lg">
              <p className="font-brutal text-xs uppercase text-[#141414]/50">Before</p>
              <p className="mt-1 font-brutal text-2xl uppercase leading-tight">
                84 pages of corporate jazz
              </p>
              <div className="mt-4 space-y-2">
                {[100, 92, 96, 78, 88].map((w, i) => (
                  <div key={i} className="h-2.5 bg-[#141414]/15" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="my-5 flex items-center gap-3">
                <div className="h-[3px] flex-1 bg-[#141414]" />
                <ArrowRight size={26} strokeWidth={3} />
              </div>
              <p className="font-brutal text-xs uppercase text-[#141414]/50">After</p>
              <p className="mt-1 font-brutal text-2xl uppercase leading-tight text-[#ff7ac3]">
                1 page of the actual point
              </p>
              <div className="mt-4 border-[3px] border-[#141414] bg-[#b8f26b] p-3 font-bold leading-snug">
                "Q3 grew 18% because of exactly two decisions. Here they are — and the quote
                your CEO will love."
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section id="why" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center font-brutal text-4xl uppercase tracking-tight sm:text-5xl">
          What's in the box
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-lg font-medium">
          Four snacks per document. All of them filling.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="h-full">
              <motion.article
                whileHover={{ rotate: 0, y: -6 }}
                className={`flex h-full flex-col border-[3px] border-[#141414] p-6 shadow-brutal ${f.bg} ${f.rotate}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center border-[3px] border-[#141414] bg-white">
                    <f.icon size={22} strokeWidth={2.5} />
                  </span>
                  <span className="border-[3px] border-[#141414] bg-white px-2.5 py-1 font-brutal text-[10px] uppercase">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-brutal text-xl uppercase leading-tight">{f.title}</h3>
                <p className="mt-3 flex-1 font-medium leading-relaxed">{f.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="how" className="border-y-4 border-[#141414] bg-[#141414] text-[#fdf4e0]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center font-brutal text-4xl uppercase tracking-tight sm:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-lg font-medium text-[#fdf4e0]/70">
            Three steps. No step four. We checked.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <span
                    className={`grid h-20 w-20 place-items-center border-[3px] border-[#fdf4e0] font-brutal text-4xl ${s.bg} text-[#141414]`}
                  >
                    {s.no}
                  </span>
                  <h3 className="mt-6 font-brutal text-2xl uppercase">{s.title}</h3>
                  <p className="mt-3 max-w-xs font-medium leading-relaxed text-[#fdf4e0]/75">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center font-brutal text-4xl uppercase tracking-tight sm:text-5xl">
          Real readers, real shocked faces
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.from} delay={i * 0.1}>
              <figure
                className={`relative border-[3px] border-[#141414] p-6 shadow-brutal ${q.bg} ${
                  i % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <blockquote className="text-lg font-bold leading-snug">"{q.text}"</blockquote>
                <figcaption className="mt-4 font-brutal text-sm uppercase">
                  — {q.from}, {q.role}
                </figcaption>
                <span className="absolute -bottom-[26px] left-10 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-[#141414] bg-inherit" />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="plans" className="border-t-4 border-[#141414] bg-[#7ad0ff]/30">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center font-brutal text-4xl uppercase tracking-tight sm:text-5xl">
            Pick your flavor
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <article
                  className={`flex h-full flex-col border-[3px] border-[#141414] p-7 ${p.bg} ${
                    p.featured ? "shadow-brutal-lg md:-translate-y-3" : "shadow-brutal"
                  }`}
                >
                  {p.featured && (
                    <span className="mb-4 w-fit -rotate-2 border-[3px] border-[#141414] bg-[#ff7ac3] px-3 py-1 font-brutal text-xs uppercase">
                      Most devoured
                    </span>
                  )}
                  <h3 className="font-brutal text-2xl uppercase">{p.name}</h3>
                  <p className="mt-2 font-brutal text-5xl">{p.price}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 font-bold">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5">
                        <Star size={15} className="shrink-0 fill-[#141414]" /> {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className="mt-8 block border-[3px] border-[#141414] bg-[#141414] px-5 py-3 text-center font-brutal text-sm uppercase text-[#fdf4e0] transition-colors hover:bg-[#ff7ac3] hover:text-[#141414]"
                  >
                    Choose {p.name}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h2 className="font-brutal text-4xl uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Stop pretending
          <br />
          you read it.
        </h2>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 inline-flex items-center gap-3 border-[3px] border-[#141414] bg-[#ff7ac3] px-10 py-5 font-brutal text-xl uppercase shadow-brutal-lg"
        >
          Start reading smarter <ArrowRight size={24} strokeWidth={3} />
        </motion.a>
        <p className="mt-6 text-sm font-bold text-[#141414]/50">
          *Results may include sudden confidence in meetings.
        </p>
      </section>

      <footer className="border-t-4 border-[#141414] bg-[#ffd23f]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-brutal text-xs uppercase">
          <span>Ratio Reader © 2026</span>
          <span>Made for people with better things to do</span>
        </div>
      </footer>

      <DesignSwitcher />
    </div>
  );
}
