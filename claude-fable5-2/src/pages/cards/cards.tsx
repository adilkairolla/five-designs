import "@fontsource-variable/bricolage-grotesque/standard.css";
import { formatDuration, formatPages, fullReadMinutes, summaryReadMinutes } from "@/lib/reading-estimate.ts";
import { usePdfPicker } from "@/lib/use-pdf-picker.ts";
import { CardPile } from "./card-pile.tsx";

const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest";
const SECTION = "mx-auto max-w-[80rem] px-5 sm:px-8";
const SECTION_TITLE = "condensed text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.88] font-extrabold tracking-[-0.02em]";
const FOREST_BUTTON =
  "inline-flex cursor-pointer rounded-full bg-forest font-bold text-butter transition-colors hover:bg-black";

export function Cards() {
  return (
    <div className="cards min-h-svh bg-lilac font-bricolage text-forest">
      <title>Ratio Reader: upload a PDF, get the good parts</title>
      <TopBar />
      <main>
        <Hero />
        <Kinds />
        <HowItWorks />
        <Shelf />
        <Questions />
        <UploadBand />
      </main>
      <footer className="bg-forest text-lilac">
        <div className={`${SECTION} flex flex-wrap justify-between gap-4 py-8`}>
          <p className="text-xl font-extrabold">Ratio Reader</p>
          <p>The cards at the top come from The Wealth of Nations, Adam Smith, 1776.</p>
        </div>
      </footer>
    </div>
  );
}

function TopBar() {
  return (
    <header className={`${SECTION} flex items-center justify-between gap-6 py-5`}>
      <a href="/5" className={`text-2xl font-extrabold tracking-[-0.02em] ${FOCUS_RING}`}>
        Ratio Reader
      </a>
      <nav className="flex items-center gap-8 font-semibold">
        <a href="#what-you-get" className={`hidden underline-offset-4 hover:underline md:block ${FOCUS_RING}`}>
          What you get
        </a>
        <a href="#how-it-works" className={`hidden underline-offset-4 hover:underline md:block ${FOCUS_RING}`}>
          How it works
        </a>
        <a href="#questions" className={`hidden underline-offset-4 hover:underline md:block ${FOCUS_RING}`}>
          Questions
        </a>
        <a href="#upload" className={`${FOREST_BUTTON} px-5 py-2.5 ${FOCUS_RING}`}>
          Upload a PDF
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className={`${SECTION} pt-6 pb-20 lg:pt-10`}>
      <h1 className="condensed text-[clamp(3.5rem,10.4vw,9.5rem)] leading-[0.86] font-extrabold tracking-[-0.03em]">
        Upload a PDF.
        <br />
        Get the good parts.
      </h1>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
        <p className="max-w-[40rem] text-xl leading-[1.4]">
          Ratio Reader reads the whole thing and deals you a hand: a summary of the most important
          information, hints for the tricky bits, quotes worth keeping, and insights that make it
          click.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#upload" className={`${FOREST_BUTTON} px-7 py-3.5 text-lg ${FOCUS_RING}`}>
            Upload a PDF
          </a>
          <p className="text-lg font-semibold">First three are free</p>
        </div>
      </div>
      <div className="mt-14">
        <CardPile />
      </div>
    </section>
  );
}

const KINDS = [
  {
    name: "Summary",
    tone: "bg-chalk text-forest",
    what: "The most important information in the PDF, in the order the author makes it, with a page number on every point.",
    when: "Read it first, to decide how much of the document you need.",
  },
  {
    name: "Hints",
    tone: "bg-butter text-forest",
    what: "Short notes for the places readers get stuck: an old word, a buried definition, a chapter you can skim.",
    when: "Keep them next to the text while you read.",
  },
  {
    name: "Quotes",
    tone: "bg-tangerine text-forest",
    what: "The sentences that carry the document, word for word, each with its page number.",
    when: "Use them to cite, or to find your way back to the page.",
  },
  {
    name: "Insights",
    tone: "bg-forest text-lilac",
    what: "What the text implies, assumes, or leaves out. The connections it does not make for you.",
    when: "Read them last, to test what you understood.",
  },
];

function Kinds() {
  return (
    <section id="what-you-get" className="scroll-mt-0">
      {KINDS.map((kind) => (
        <article key={kind.name} className={kind.tone}>
          <div
            className={`${SECTION} grid gap-x-12 gap-y-4 py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)_minmax(0,3fr)] lg:items-end lg:py-12`}
          >
            <h2 className="condensed text-[clamp(4rem,10vw,8.5rem)] leading-[0.8] font-extrabold tracking-[-0.03em]">
              {kind.name}
            </h2>
            <p className="max-w-[30rem] text-xl leading-[1.35]">{kind.what}</p>
            <p className="max-w-[22rem] text-lg leading-[1.35] font-semibold">{kind.when}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

const STEPS = [
  {
    title: "Upload a PDF",
    text: "A book, a paper, a contract, a scanned chapter. Up to 2,000 pages.",
  },
  {
    title: "Ratio Reader reads every page",
    text: "It takes about a minute for a typical book. Footnotes and appendices get read too.",
  },
  {
    title: "Pick up your cards",
    text: "Start with the summary. Tap any point to open the page it came from, with hints, quotes and insights beside it.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className={`${SECTION} scroll-mt-6 py-24`}>
      <h2 className={SECTION_TITLE}>How it works</h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <p className="condensed text-[9rem] leading-[0.78] font-extrabold text-chalk">{index + 1}</p>
            <h3 className="mt-5 text-2xl leading-tight font-extrabold">{step.title}</h3>
            <p className="mt-2 max-w-[24rem] text-lg leading-[1.4]">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const SHELF = [
  { title: "Research paper", pages: 24, tone: "bg-chalk text-forest", height: "13rem" },
  { title: "Seminar reading", pages: 48, tone: "bg-lilac text-forest", height: "14.5rem" },
  { title: "Lease agreement", pages: 61, tone: "bg-tangerine text-forest", height: "13.5rem" },
  { title: "Annual report", pages: 180, tone: "bg-white text-forest", height: "15.5rem" },
  { title: "The Wealth of Nations", pages: 1152, tone: "bg-forest text-lilac", height: "17rem" },
];

function spineWidth(pages: number) {
  return `${1.6 + pages * 0.0075}rem`;
}

function Shelf() {
  return (
    <section className="bg-butter">
      <div className={`${SECTION} grid gap-x-16 gap-y-12 py-24 lg:grid-cols-2 lg:items-end`}>
        <div>
          <h2 className={SECTION_TITLE}>Made for the long ones</h2>
          <p className="mt-6 max-w-[32rem] text-xl leading-[1.4]">
            The thicker the PDF, the more Ratio Reader saves you. Spines are drawn to scale.
          </p>
          <ul className="mt-8 border-t-2 border-forest">
            {SHELF.map((book) => (
              <li
                key={book.title}
                className="flex flex-wrap items-baseline justify-between gap-x-6 border-b-2 border-forest py-3 text-lg"
              >
                <span>
                  <span className="font-extrabold">{book.title}</span>, {formatPages(book.pages)} pages
                </span>
                <span>
                  {formatDuration(fullReadMinutes(book.pages))} to read, or{" "}
                  <span className="font-extrabold">{formatDuration(summaryReadMinutes(book.pages))}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="overflow-x-auto">
          <div className="flex w-max items-end gap-1.5 border-b-[0.75rem] border-forest px-3">
            {SHELF.map((book) => (
              <div
                key={book.title}
                className={`spine flex items-center justify-start rounded-t-md px-1 py-3 leading-none font-extrabold ${book.tone} ${book.pages > 500 ? "text-3xl" : "text-[0.8125rem]"}`}
                style={{ width: spineWidth(book.pages), height: book.height }}
              >
                {book.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const QUESTIONS = [
  {
    question: "Is this a way to skip reading?",
    answer:
      "It is a way to read better. The summary shows you what a document says and which parts deserve your attention. The hints and insights help when you sit down with the full text.",
  },
  {
    question: "How do I check it got things right?",
    answer:
      "Every summary point, quote and insight links to the page it came from. One tap and you are looking at the original sentence.",
  },
  {
    question: "Which files can I upload?",
    answer:
      "Any PDF up to 2,000 pages, scans included. Your files stay private to your account, and deleting one removes everything written about it.",
  },
  {
    question: "What does it cost?",
    answer: "Your first three PDFs are free and you do not need a card. After that it is $8 a month for unlimited PDFs.",
  },
];

function Questions() {
  return (
    <section id="questions" className="scroll-mt-0 bg-chalk">
      <div className={`${SECTION} py-24`}>
        <h2 className={SECTION_TITLE}>Questions</h2>
        <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {QUESTIONS.map((item) => (
            <div key={item.question} className="border-t-2 border-forest pt-5">
              <dt className="text-2xl leading-tight font-extrabold">{item.question}</dt>
              <dd className="mt-3 max-w-[34rem] text-lg leading-[1.45]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function UploadBand() {
  const { fileName, inputProps } = usePdfPicker();

  return (
    <section id="upload" className="scroll-mt-0 bg-tangerine">
      <div className={`${SECTION} py-24`}>
        <h2 className="condensed text-[clamp(3.5rem,10.4vw,9.5rem)] leading-[0.86] font-extrabold tracking-[-0.03em]">
          Got a PDF?
          <br />
          Hand it over.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <label
            className={`${FOREST_BUTTON} px-9 py-5 text-xl focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-forest`}
          >
            <input {...inputProps} className="sr-only" />
            Upload a PDF
          </label>
          <p aria-live="polite" className="text-xl font-semibold">
            {fileName ? `${fileName} selected.` : "Your first three are free. No card."}
          </p>
        </div>
      </div>
    </section>
  );
}
