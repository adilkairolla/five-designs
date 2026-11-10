import type { CSSProperties, ReactNode } from "react";
import "@fontsource-variable/literata/opsz.css";
import "@fontsource-variable/literata/opsz-italic.css";
import "@fontsource-variable/caveat/index.css";
import { usePdfPicker } from "@/lib/use-pdf-picker.ts";

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marker";

export function Marginalia() {
  return (
    <div className="marginalia min-h-svh font-literata text-white">
      <title>Ratio Reader: read every PDF like someone marked it up first</title>
      <DeskNav />
      <main>
        <Hero />
        <WhatComesBack />
        <HowItWorks />
        <Questions />
        <UploadTray />
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-x-10 gap-y-2 px-6 pb-10 text-sm text-white/65 lg:px-10">
        <p>Ratio Reader</p>
        <p className="italic">The page on the desk is Francis Bacon’s “Of Studies”, 1625.</p>
      </footer>
    </div>
  );
}

function DeskNav() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
      <a href="/1" className={`text-2xl font-semibold italic ${FOCUS_RING}`}>
        Ratio Reader
      </a>
      <nav className="flex items-center gap-8">
        <a href="#what-you-get" className={`hidden underline-offset-4 hover:underline md:block ${FOCUS_RING}`}>
          What you get
        </a>
        <a href="#how-it-works" className={`hidden underline-offset-4 hover:underline md:block ${FOCUS_RING}`}>
          How it works
        </a>
        <a href="#questions" className={`hidden underline-offset-4 hover:underline md:block ${FOCUS_RING}`}>
          Questions
        </a>
        <UploadLink />
      </nav>
    </header>
  );
}

function UploadLink() {
  return (
    <a
      href="#upload"
      className={`inline-flex rounded-full bg-sheet px-6 py-3 font-semibold text-ink transition-colors hover:bg-marker ${FOCUS_RING}`}
    >
      Upload a PDF
    </a>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 pt-8 pb-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 lg:px-10 lg:pt-14">
      <div className="lg:pt-8">
        <h1 className="text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] font-semibold tracking-[-0.015em] text-balance">
          Read every PDF like someone careful marked it up first.
        </h1>
        <p className="mt-7 max-w-[34rem] text-lg leading-[1.7] text-white/85">
          Upload a PDF. Ratio Reader reads all of it and hands it back with a summary of what
          matters, hints for the hard passages, the quotes worth keeping, and the insights the text
          doesn’t spell out.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <UploadLink />
          <p className="text-white/75 italic">Your first three PDFs are free.</p>
        </div>
        <MarkKey />
      </div>
      <AnnotatedPage />
    </section>
  );
}

function MarkKey() {
  return (
    <div className="sheet mt-14 max-w-[25rem] -rotate-1 px-6 py-5">
      <p className="text-sm text-ink/70 italic">How to read the marks on the page</p>
      <dl className="mt-3 grid grid-cols-[5.75rem_1fr] items-baseline gap-x-4 gap-y-2.5 text-[0.9375rem] leading-snug">
        <dt>
          <span className="mark mark-summary mark-static font-semibold">Summary</span>
        </dt>
        <dd>the sentences that carry the argument</dd>
        <dt>
          <span className="mark mark-quote mark-static font-semibold">Quotes</span>
        </dt>
        <dd>lines worth keeping, with their page</dd>
        <dt className="font-caveat text-[1.45rem] leading-none font-semibold text-pen">Hints</dt>
        <dd>help with the hard parts, in pen</dd>
        <dt className="font-caveat text-[1.45rem] leading-none font-semibold text-graphite">Insights</dt>
        <dd>what the text implies, in pencil</dd>
      </dl>
    </div>
  );
}

function AnnotatedPage() {
  return (
    <article
      aria-label="A page of Francis Bacon’s essay Of Studies, marked up by Ratio Reader"
      className="sheet mx-auto w-full max-w-[44rem] self-start px-6 py-8 sm:px-10 sm:py-10 lg:rotate-[0.7deg]"
    >
      <header className="flex items-baseline justify-between gap-4 border-b border-ink/20 pb-3 text-sm text-ink/70 italic">
        <span>Of Studies</span>
        <span>Francis Bacon, 1625</span>
      </header>

      <div className="mt-7 space-y-6 text-[1.0625rem] leading-[1.78]">
        <Passage
          note={
            <Note kind="hint" delay={1.4}>
              Hint: three uses. The rest of the essay takes them one at a time.
            </Note>
          }
        >
          <Mark kind="summary" delay={0.5}>
            Studies serve for delight, for ornament, and for ability.
          </Mark>{" "}
          Their chief use for delight is in privateness and retiring; for ornament, is in discourse;
          and for ability, is in the judgment and disposition of business.
        </Passage>

        <Passage
          note={
            <Note kind="hint" delay={3.9}>
              Hint: in 1625 “curiously” meant “carefully”. These are the books to skim.
            </Note>
          }
        >
          Read not to contradict and confute; nor to believe and take for granted; nor to find talk
          and discourse;{" "}
          <Mark kind="summary" delay={2.1} sweep={0.6}>
            but to weigh and consider.
          </Mark>{" "}
          <Mark kind="quote" delay={2.7} sweep={1.2}>
            Some books are to be tasted, others to be swallowed, and some few to be chewed and
            digested;
          </Mark>{" "}
          that is, some books are to be read only in parts; others to be read, but not{" "}
          <span className="underline decoration-pen decoration-[1.5px] underline-offset-[3px]">
            curiously
          </span>
          ; and some few to be read wholly, and with diligence and attention.
        </Passage>

        <Passage
          note={
            <Note kind="insight" delay={4.7}>
              Insight: Bacon distrusts summaries. He allows them for lesser books and calls the rest
              “flashy”, meaning flat. So every line here stays tied to its page.
            </Note>
          }
        >
          Some books also may be read by deputy, and extracts made of them by others; but that would
          be only in the less important arguments, and the meaner sort of books; else distilled
          books are like common distilled waters, flashy things.
        </Passage>

        <Passage>
          <Mark kind="quote" delay={5.6} sweep={1}>
            Reading maketh a full man; conference a ready man; and writing an exact man.
          </Mark>
        </Passage>
      </div>

      <footer className="mt-9 text-center text-sm text-ink/60">1</footer>
    </article>
  );
}

function Passage({ children, note }: { children: ReactNode; note?: ReactNode }) {
  return (
    <div className="grid gap-x-7 gap-y-2 sm:grid-cols-[minmax(0,1fr)_10.5rem]">
      <p>{children}</p>
      {note}
    </div>
  );
}

function Mark({
  kind,
  delay,
  sweep = 0.9,
  children,
}: {
  kind: "summary" | "quote";
  delay: number;
  sweep?: number;
  children: ReactNode;
}) {
  const timing = { "--d": `${delay}s`, "--sweep": `${sweep}s` } as CSSProperties;
  return (
    <mark className={`mark mark-${kind}`} style={timing}>
      {children}
    </mark>
  );
}

function Note({
  kind,
  delay,
  children,
}: {
  kind: "hint" | "insight";
  delay: number;
  children: ReactNode;
}) {
  const hand = kind === "hint" ? "text-pen sm:-rotate-2" : "text-graphite sm:rotate-1";
  return (
    <aside
      className={`note font-caveat text-[1.3rem] leading-[1.12] font-medium sm:pt-1 ${hand}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </aside>
  );
}

function WhatComesBack() {
  return (
    <section id="what-you-get" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-24 lg:px-10">
      <h2 className="max-w-3xl text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.1] font-semibold text-balance">
        One PDF goes in. Four kinds of help come back.
      </h2>
      <p className="mt-5 max-w-[38rem] text-lg leading-[1.7] text-white/80">
        Here is what Ratio Reader returned for that one page of Bacon. A 400-page book gets the same
        treatment, with more of each.
      </p>

      <div className="mt-16 grid gap-x-16 gap-y-20 md:grid-cols-2">
        <Exhibit
          title="A summary of what matters"
          text="The main points in the order the document makes them, each with the page it came from. Short enough to read before you decide how much time the PDF deserves."
        >
          <SummarySheet />
        </Exhibit>
        <Exhibit
          title="Hints for the hard parts"
          text="An old word, a dense definition, an argument that depends on something from page 14. Ratio Reader flags the places where readers get lost and tells you what to watch for."
          className="md:mt-20"
        >
          <StickyNotes />
        </Exhibit>
        <Exhibit
          title="Quotes worth keeping"
          text="The sentences that carry the document, word for word, with page numbers. Ready to cite, and one click from their place in the PDF."
        >
          <IndexCard />
        </Exhibit>
        <Exhibit
          title="Insights the text doesn’t spell out"
          text="What an argument implies, where it contradicts itself, what it leaves out. The notes a good tutor would add in pencil."
          className="md:mt-20"
        >
          <PencilScrap />
        </Exhibit>
      </div>
    </section>
  );
}

function Exhibit({
  title,
  text,
  className = "",
  children,
}: {
  title: string;
  text: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex min-h-[19rem] items-center justify-center">{children}</div>
      <h3 className="mt-9 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-[30rem] leading-[1.7] text-white/80">{text}</p>
    </div>
  );
}

const SUMMARY_POINTS = [
  "Study is good for three things: private pleasure, better conversation, and sounder judgment at work.",
  "Too much of it is its own vice. Over-studying is sloth; showing off what you read is affectation.",
  "Read to weigh and consider. Most books deserve a taste. A few deserve everything you have.",
];

function SummarySheet() {
  return (
    <div className="sheet w-full max-w-[27rem] -rotate-1 px-7 py-6">
      <p className="border-b border-ink/20 pb-2 text-sm text-ink/70 italic">Of Studies, in three points</p>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-[0.9688rem] leading-[1.6] marker:text-ink/50">
        {SUMMARY_POINTS.map((point) => (
          <li key={point}>
            {point} <span className="whitespace-nowrap text-pen">p. 1</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StickyNotes() {
  return (
    <div className="relative h-[17rem] w-full max-w-[25rem] font-caveat text-[1.4rem] leading-[1.15] font-medium text-pen">
      <p className="sticky-note absolute top-0 left-0 w-[13rem] -rotate-3 px-5 pt-7 pb-6">
        “Curiously” = carefully. He means: skim these ones.
      </p>
      <p className="sticky-note absolute right-0 bottom-0 w-[13rem] rotate-2 px-5 pt-7 pb-6">
        “Conference” is conversation. Talking makes you quick. No lanyards involved.
      </p>
    </div>
  );
}

function IndexCard() {
  return (
    <figure className="index-card w-full max-w-[28rem] rotate-1 px-7 pt-3 pb-5">
      <blockquote className="text-[1.1875rem] leading-[1.875rem] italic text-ink">
        “Some books are to be tasted, others to be swallowed, and some few to be chewed and
        digested.”
      </blockquote>
      <figcaption className="mt-[1.875rem] flex justify-between text-sm leading-[1.875rem] text-ink/75">
        <span>Francis Bacon, Of Studies</span>
        <span className="text-pen">p. 1</span>
      </figcaption>
    </figure>
  );
}

function PencilScrap() {
  return (
    <p className="squared w-full max-w-[25rem] -rotate-2 px-7 py-7 font-caveat text-[1.45rem] leading-[1.2] font-medium text-graphite">
      Bacon wrote the first review of tools like this one: fine for “the meaner sort of books”,
      flat for the rest. Use the summary to decide which books deserve a full read.
    </p>
  );
}

const STEPS = [
  {
    title: "Upload a PDF",
    text: "A book, a paper, a contract, a scanned chapter. Anything up to 2,000 pages.",
  },
  {
    title: "Ratio Reader reads every page",
    text: "A typical book takes about a minute. Nothing is skipped, footnotes and appendices included.",
  },
  {
    title: "Read the marked-up version",
    text: "Start with the summary. Open any line to see the page it came from, with hints, quotes and insights beside the text.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-8 border-y border-white/15 bg-baize-deep/45">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.1] font-semibold">How it works</h2>
        <ol className="mt-12 grid gap-12 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="relative inline-flex size-16 items-center justify-center font-caveat text-[2.75rem] leading-none font-semibold text-marker">
                <svg viewBox="0 0 60 60" aria-hidden="true" className="absolute inset-0 size-full">
                  <path
                    d="M31 6c14-1 24 9 23 23-1 15-12 25-26 24C15 52 5 42 6 28 7 15 18 6 33 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
                {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 max-w-[24rem] leading-[1.7] text-white/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const QUESTIONS = [
  {
    question: "Does this replace reading the book?",
    answer:
      "No, and it isn’t meant to. The summary tells you what a document says and which parts deserve your full attention. For the books that should be chewed and digested, the hints and insights are there to help you read them properly.",
  },
  {
    question: "Can I trust the summary?",
    answer:
      "Check it. Every summary point, quote and insight links to the page it came from, so the original sentence is always one click away, in context.",
  },
  {
    question: "Which files work?",
    answer:
      "Any PDF up to 2,000 pages, including scanned ones. Text PDFs are ready in about a minute. Scans take a little longer.",
  },
  {
    question: "What happens to my PDF?",
    answer:
      "It stays private to your account. Delete a document and everything Ratio Reader wrote about it is deleted too.",
  },
  {
    question: "What does it cost?",
    answer: "Your first three PDFs are free, with no card. After that it is $8 a month for unlimited PDFs.",
  },
];

function Questions() {
  return (
    <section
      id="questions"
      className="mx-auto grid max-w-7xl scroll-mt-8 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16 lg:px-10"
    >
      <div>
        <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.1] font-semibold">Fair questions</h2>
        <p className="mt-5 max-w-[26rem] leading-[1.7] text-white/80">
          Bacon had doubts about reading by deputy four hundred years ago. These are the ones we hear
          now.
        </p>
      </div>
      <div className="sheet px-6 py-4 sm:px-10 sm:py-6">
        {QUESTIONS.map((item) => (
          <details key={item.question} className="group border-b border-ink/15 py-5 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pen [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="font-caveat text-3xl leading-none text-pen transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-[38rem] leading-[1.7] text-ink/85">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function UploadTray() {
  const { fileName, inputProps } = usePdfPicker();

  return (
    <section id="upload" className="mx-auto max-w-7xl scroll-mt-8 px-6 pb-20 lg:px-10">
      <div className="rounded-[1.5rem] border-2 border-dashed border-white/45 px-6 py-16 text-center">
        <h2 className="text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.1] font-semibold">
          Put a PDF on the desk.
        </h2>
        <p className="mx-auto mt-4 max-w-[32rem] text-lg leading-[1.7] text-white/80">
          It comes back marked up in about a minute. Your first three are free.
        </p>
        <label className="mt-9 inline-flex cursor-pointer rounded-full bg-sheet px-8 py-4 text-lg font-semibold text-ink transition-colors hover:bg-marker focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-marker">
          <input {...inputProps} className="sr-only" />
          Upload a PDF
        </label>
        <p aria-live="polite" className="mt-5 min-h-[2rem] font-caveat text-2xl text-marker">
          {fileName && `${fileName} is on the desk.`}
        </p>
      </div>
    </section>
  );
}
