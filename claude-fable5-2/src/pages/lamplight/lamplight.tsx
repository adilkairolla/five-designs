import "@fontsource-variable/cormorant/wght.css";
import "@fontsource-variable/cormorant/wght-italic.css";
import "@fontsource-variable/atkinson-hyperlegible-next/wght.css";
import { usePdfPicker } from "@/lib/use-pdf-picker.ts";
import { LampWall } from "./lamp-wall.tsx";

const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lamp";
const DISPLAY = "font-cormorant font-medium italic";
const SECTION_TITLE = `${DISPLAY} text-[clamp(2.5rem,5vw,4.25rem)] leading-none text-lamplit`;
const LAMP_BUTTON = `inline-flex cursor-pointer rounded-full bg-lamp px-7 py-3.5 font-semibold text-night-deep transition-colors hover:bg-lamplit`;

export function Lamplight() {
  return (
    <div className="lamplight min-h-svh font-atkinson text-lamplit">
      <title>Ratio Reader: light up what matters in any PDF</title>
      <TopBar />
      <main>
        <Hero />
        <WhatYouGet />
        <HowItWorks />
        <OneNight />
        <Questions />
        <UploadCall />
      </main>
      <footer className="mx-auto flex max-w-[72rem] flex-wrap justify-between gap-4 px-6 pt-6 pb-10 text-sm text-dusk">
        <p className={`${DISPLAY} text-xl text-lamplit`}>Ratio Reader</p>
        <p>Sample text: Charles Darwin, On the Origin of Species, 1859.</p>
      </footer>
    </div>
  );
}

function TopBar() {
  return (
    <header className="mx-auto grid max-w-[72rem] grid-cols-[1fr_auto] items-center gap-6 px-6 py-6 md:grid-cols-[1fr_auto_1fr]">
      <nav className="hidden gap-8 text-dusk md:flex">
        <a href="#what-you-get" className={`hover:text-lamplit ${FOCUS_RING}`}>
          What you get
        </a>
        <a href="#how-it-works" className={`hover:text-lamplit ${FOCUS_RING}`}>
          How it works
        </a>
      </nav>
      <a href="/3" className={`${DISPLAY} text-[1.75rem] leading-none ${FOCUS_RING}`}>
        Ratio Reader
      </a>
      <a
        href="#upload"
        className={`justify-self-end text-lamp underline decoration-lamp/50 underline-offset-[6px] hover:decoration-lamp ${FOCUS_RING}`}
      >
        Upload a PDF
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-10 pb-24 lg:pt-14">
      <div className="mx-auto max-w-[52rem] text-center">
        <h1 className={`${DISPLAY} text-[clamp(3rem,7.4vw,6.25rem)] leading-[0.95] text-balance`}>
          Light up what matters in any PDF.
        </h1>
        <p className="mx-auto mt-7 max-w-[39rem] text-lg leading-[1.6] text-dusk">
          Upload a PDF and Ratio Reader reads it through, then shows you the most important parts
          first: a summary, hints for the difficult passages, quotes worth keeping, and insights
          that help you understand the rest.
        </p>
        <a href="#upload" className={`mt-9 ${LAMP_BUTTON} ${FOCUS_RING}`}>
          Upload a PDF
        </a>
      </div>
      <div className="mt-16">
        <LampWall />
      </div>
    </section>
  );
}

const OUTPUTS = [
  {
    name: "Summary",
    what: "The most important information in the document, in the order the author gives it. Each point shows its page, so the original is always within reach.",
    example:
      "All living things descend from a few simple forms. Variation, inheritance, and more offspring than can survive are enough to shape them into everything alive today.",
    source: "Summary point 9 of 9, from p. 489",
  },
  {
    name: "Hints",
    what: "Short notes on the passages where readers get stuck, and a nudge about what to watch for before you reach them.",
    example:
      "“Ratio of Increase” is Darwin’s phrase for how fast a population would grow if nothing stopped it. The struggle in the next clause depends on it.",
    source: "Hint on p. 490",
  },
  {
    name: "Quotes",
    what: "The exact sentences that carry the argument, word for word, with page numbers you can cite.",
    example: "“There is grandeur in this view of life.”",
    source: "Quote from p. 490",
  },
  {
    name: "Insights",
    what: "What the text implies, assumes, or leaves unsaid. The connections a careful reader makes on the second pass.",
    example:
      "Darwin ends on beauty and says nothing more about mechanism. The last paragraph is persuasion, written for the reader who finds the theory bleak.",
    source: "Insight on the closing chapter",
  },
];

function WhatYouGet() {
  return (
    <section id="what-you-get" className="mx-auto max-w-[72rem] scroll-mt-8 px-6 py-24">
      <h2 className={SECTION_TITLE}>What you get</h2>
      <div className="mt-16 space-y-20">
        {OUTPUTS.map((output) => (
          <article
            key={output.name}
            className="grid gap-x-16 gap-y-8 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] md:items-center"
          >
            <div>
              <h3 className={`${DISPLAY} text-[clamp(2.25rem,4vw,3.25rem)] leading-none text-lamp`}>
                {output.name}
              </h3>
              <p className="mt-4 max-w-[27rem] text-lg leading-[1.6] text-dusk">{output.what}</p>
            </div>
            <figure className="pool -mx-6 px-6 py-10 md:mx-0 md:px-12 md:py-14">
              <blockquote className="font-cormorant text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.3] font-medium text-lamplit">
                {output.example}
              </blockquote>
              <figcaption className="mt-4 text-[0.9375rem] text-dusk">{output.source}</figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: "Upload a PDF",
    text: "A book, a paper, a report, a scanned chapter. Up to 2,000 pages.",
  },
  {
    title: "Ratio Reader reads every page",
    text: "A typical book takes about a minute. Footnotes and appendices are read too.",
  },
  {
    title: "Start with what matters",
    text: "Read the summary first. Open any point to land on its page, with hints, quotes and insights beside the text.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[72rem] scroll-mt-8 px-6 py-24">
      <h2 className={SECTION_TITLE}>How it works</h2>
      <ol className="mt-14 grid gap-12 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="border-t border-lamp/35 pt-6">
            <p className={`${DISPLAY} text-6xl leading-none text-lamp`}>{index + 1}</p>
            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 max-w-[24rem] leading-[1.6] text-dusk">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const NIGHT = [
  {
    time: "11:40 pm",
    scene: "The seminar is at nine and the reading is sixty pages.",
    help: "Start from the summary, then read in full the two sections the hints point to.",
  },
  {
    time: "1:15 am",
    scene: "You need the exact sentence for a citation, and the page it is on.",
    help: "It is under Quotes, word for word, with the page number next to it.",
  },
  {
    time: "6:30 am",
    scene: "A ninety-page report lands two hours before the meeting.",
    help: "Ten minutes with the summary and the insights, and you know what to ask.",
  },
];

function OneNight() {
  return (
    <section className="border-y border-lamplit/10 bg-night-deep/60">
      <div className="mx-auto max-w-[72rem] px-6 py-24">
        <h2 className={SECTION_TITLE}>One night with it</h2>
        <ol className="mt-14 space-y-12">
          {NIGHT.map((moment) => (
            <li key={moment.time} className="grid gap-x-16 gap-y-3 md:grid-cols-[14rem_minmax(0,1fr)]">
              <p className={`${DISPLAY} text-[clamp(2.5rem,4.5vw,3.75rem)] leading-none text-lamp tabular-nums`}>
                {moment.time}
              </p>
              <div className="max-w-[40rem] text-lg leading-[1.6]">
                <p>{moment.scene}</p>
                <p className="mt-1 text-dusk">{moment.help}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const QUESTIONS = [
  {
    question: "Is this instead of reading?",
    answer:
      "No. It shows you what a document says and where the important parts are, so you can decide what to read in full. The hints and insights are there for when you do.",
  },
  {
    question: "How do I know the summary is right?",
    answer:
      "Every summary point, quote and insight links to the page it came from. One click shows you the original sentence in context.",
  },
  {
    question: "Which PDFs work, and are they private?",
    answer:
      "Any PDF up to 2,000 pages, scans included. Your documents stay private to your account, and deleting one removes everything Ratio Reader wrote about it.",
  },
  {
    question: "What does it cost?",
    answer: "Your first three PDFs are free, with no card. After that it is $8 a month for unlimited PDFs.",
  },
];

function Questions() {
  return (
    <section className="mx-auto max-w-[52rem] px-6 py-24">
      <h2 className={`${SECTION_TITLE} text-center`}>Questions</h2>
      <div className="mt-12">
        {QUESTIONS.map((item) => (
          <details key={item.question} className="group border-b border-lamplit/15 py-6">
            <summary
              className={`flex cursor-pointer list-none items-baseline justify-between gap-6 text-xl font-semibold [&::-webkit-details-marker]:hidden ${FOCUS_RING}`}
            >
              {item.question}
              <span
                aria-hidden="true"
                className="font-cormorant text-4xl leading-none text-lamp transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-[40rem] text-lg leading-[1.6] text-dusk">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function UploadCall() {
  const { fileName, inputProps } = usePdfPicker();

  return (
    <section id="upload" className="scroll-mt-8 px-6 pt-10 pb-28 text-center">
      <div className="pool mx-auto max-w-[56rem] px-6 py-20">
        <h2 className={`${DISPLAY} text-[clamp(2.75rem,6.4vw,5.5rem)] leading-[0.98] text-balance`}>
          Start with the PDF you have been putting off.
        </h2>
        <p className="mx-auto mt-6 max-w-[32rem] text-lg leading-[1.6] text-dusk">
          It will be ready in about a minute. Your first three are free.
        </p>
        <label
          className={`mt-9 ${LAMP_BUTTON} focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-lamp`}
        >
          <input {...inputProps} className="sr-only" />
          Upload a PDF
        </label>
        <p aria-live="polite" className="mt-5 min-h-[1.75rem] text-lamp">
          {fileName && `${fileName} selected.`}
        </p>
      </div>
    </section>
  );
}
