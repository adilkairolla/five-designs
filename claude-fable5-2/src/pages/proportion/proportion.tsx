import "@fontsource-variable/archivo/standard.css";
import {
  compressionRatio,
  formatDuration,
  formatPages,
  fullReadMinutes,
  summaryReadMinutes,
} from "@/lib/reading-estimate.ts";
import { usePdfPicker } from "@/lib/use-pdf-picker.ts";
import { RatioDial } from "./ratio-dial.tsx";

const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-klein";
const SECTION = "mx-auto max-w-[84rem] px-5 sm:px-8 lg:px-12";
const SECTION_TITLE = "wide text-[clamp(2rem,4.2vw,3.75rem)] leading-none font-bold tracking-[-0.02em]";

export function Proportion() {
  return (
    <div className="proportion min-h-svh bg-white font-archivo text-black">
      <title>Ratio Reader: upload a PDF, read the part that matters</title>
      <TopBar />
      <main>
        <Hero />
        <WhatYouGet />
        <HowItWorks />
        <LongerIsBetter />
        <Pricing />
        <UploadBand />
      </main>
      <footer className={`${SECTION} flex flex-wrap justify-between gap-4 py-8 text-sm text-black/65`}>
        <p className="wide font-semibold text-black">Ratio Reader</p>
        <p>Examples on this page come from On the Origin of Species, first edition, 1859.</p>
      </footer>
    </div>
  );
}

function TopBar() {
  return (
    <header className={`${SECTION} flex items-center justify-between gap-6 py-5`}>
      <a href="/2" className={`wide text-xl font-extrabold tracking-[-0.01em] ${FOCUS_RING}`}>
        Ratio Reader
      </a>
      <nav className="flex items-center gap-8 font-medium">
        <a href="#what-you-get" className={`hidden hover:text-klein md:block ${FOCUS_RING}`}>
          What you get
        </a>
        <a href="#how-it-works" className={`hidden hover:text-klein md:block ${FOCUS_RING}`}>
          How it works
        </a>
        <a href="#pricing" className={`hidden hover:text-klein md:block ${FOCUS_RING}`}>
          Pricing
        </a>
        <a
          href="#upload"
          className={`bg-klein px-5 py-2.5 font-semibold text-white transition-colors hover:bg-black ${FOCUS_RING}`}
        >
          Upload a PDF
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className={`${SECTION} pt-6 pb-24 lg:pt-10`}>
      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-end">
        <h1 className="wide text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[0.98] font-bold tracking-[-0.025em] lg:col-span-7">
          Upload a PDF.
          <br />
          Read the part that matters.
        </h1>
        <p className="max-w-[34rem] text-lg leading-[1.55] lg:col-span-5 lg:pb-1.5">
          Ratio Reader reads the whole document and gives you a summary of the most important
          information, with hints, quotes and insights that help you understand the rest. Drag the
          slider to see what that does to a PDF the size of yours.
          <a
            href="#upload"
            className={`mt-5 block w-fit font-semibold text-klein underline decoration-2 underline-offset-4 hover:text-black ${FOCUS_RING}`}
          >
            Upload a PDF
          </a>
        </p>
      </div>
      <div className="mt-12 lg:mt-16">
        <RatioDial />
      </div>
    </section>
  );
}

const OUTPUTS = [
  {
    name: "Summary",
    what: "The most important information, in the order the document makes it. Every point carries the page it came from.",
    example:
      "Species are not fixed. Small inherited differences that help an organism survive pile up over generations, and that alone is enough to produce new species.",
    page: "p. 61",
  },
  {
    name: "Hints",
    what: "Short notes that get you past the hard passages and tell you where to slow down.",
    example:
      "Chapter 4 is the core of the book. If you read one chapter in full, read that one. When Darwin says “variety”, read it as a species in the making.",
    page: "p. 80",
  },
  {
    name: "Quotes",
    what: "The sentences worth keeping, word for word, ready to cite.",
    example:
      "“I have called this principle, by which each slight variation, if useful, is preserved, by the term of Natural Selection.”",
    page: "p. 61",
  },
  {
    name: "Insights",
    what: "What the text implies, assumes, or leaves out.",
    example:
      "Darwin never explains how traits are inherited. He didn’t know; genetics came later. The argument holds without it, which is part of why it lasted.",
    page: "p. 13",
  },
];

function WhatYouGet() {
  return (
    <section id="what-you-get" className={`${SECTION} scroll-mt-6 py-24`}>
      <h2 className={SECTION_TITLE}>What you get</h2>
      <div className="mt-12 border-t-[3px] border-black">
        <div className="hidden grid-cols-12 gap-x-10 border-b border-black py-3 text-sm font-semibold lg:grid">
          <p className="col-span-3">Part</p>
          <p className="col-span-4">What it is</p>
          <p className="col-span-5 text-klein">From a real PDF: On the Origin of Species, 502 pages</p>
        </div>
        {OUTPUTS.map((output) => (
          <article
            key={output.name}
            className="grid gap-x-10 gap-y-3 border-b border-black py-8 lg:grid-cols-12 lg:items-baseline"
          >
            <h3 className="wide text-[clamp(1.75rem,2.6vw,2.5rem)] leading-none font-bold tracking-[-0.02em] lg:col-span-3">
              {output.name}
            </h3>
            <p className="max-w-[30rem] text-lg leading-[1.5] lg:col-span-4">{output.what}</p>
            <p className="max-w-[36rem] text-lg leading-[1.5] text-klein lg:col-span-5">
              {output.example} <span className="font-semibold whitespace-nowrap">{output.page}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    clock: "0:00",
    title: "Upload a PDF",
    text: "Books, papers, reports, contracts. Scans work too. Up to 2,000 pages.",
  },
  {
    clock: "0:55",
    title: "Ratio Reader finishes reading",
    text: "Every page, footnotes and appendices included. A typical book takes about a minute.",
  },
  {
    clock: "0:56",
    title: "You start with what matters",
    text: "Read the summary, then open any point to see its page, with hints, quotes and insights alongside.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-6 bg-klein-wash">
      <div className={`${SECTION} py-24`}>
        <h2 className={SECTION_TITLE}>How it works</h2>
        <ol className="mt-12 grid gap-10 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.clock} className="border-t-[3px] border-black pt-5">
              <p className="narrow text-[5.5rem] leading-[0.85] font-extrabold text-klein tabular-nums">
                {step.clock}
              </p>
              <h3 className="wide mt-6 text-2xl leading-tight font-bold tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-3 max-w-[26rem] text-lg leading-[1.5]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const DOCUMENTS = [
  { name: "Research paper", pages: 24 },
  { name: "Lease agreement", pages: 61 },
  { name: "Annual report", pages: 180 },
  { name: "On the Origin of Species", pages: 502 },
  { name: "Organic chemistry textbook", pages: 1200 },
];

function LongerIsBetter() {
  return (
    <section className={`${SECTION} py-24`}>
      <h2 className={`${SECTION_TITLE} max-w-[20ch]`}>The longer the PDF, the better the ratio</h2>
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-lg tabular-nums">
          <thead>
            <tr className="border-t-[3px] border-b border-black text-sm">
              <th scope="col" className="py-3 pr-6 font-semibold">
                PDF
              </th>
              <th scope="col" className="py-3 pr-6 text-right font-semibold">
                Pages
              </th>
              <th scope="col" className="py-3 pr-6 text-right font-semibold">
                Reading all of it
              </th>
              <th scope="col" className="py-3 pr-6 text-right font-semibold text-klein">
                With Ratio Reader
              </th>
              <th scope="col" className="py-3 text-right font-semibold">
                Ratio
              </th>
            </tr>
          </thead>
          <tbody>
            {DOCUMENTS.map((pdf) => (
              <tr key={pdf.name} className="border-b border-black">
                <th scope="row" className="py-5 pr-6 font-semibold">
                  {pdf.name}
                </th>
                <td className="py-5 pr-6 text-right">{formatPages(pdf.pages)}</td>
                <td className="py-5 pr-6 text-right">{formatDuration(fullReadMinutes(pdf.pages))}</td>
                <td className="py-5 pr-6 text-right font-semibold text-klein">
                  {formatDuration(summaryReadMinutes(pdf.pages))}
                </td>
                <td className="wide py-5 text-right text-2xl font-extrabold">
                  {compressionRatio(pdf.pages)}:1
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-[40rem] text-lg leading-[1.5]">
        The summary is where you start. The full text stays one click away, so you choose how much
        of the left-hand column to spend.
      </p>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className={`${SECTION} scroll-mt-6 pb-24`}>
      <h2 className={SECTION_TITLE}>Pricing</h2>
      <div className="mt-12 grid border-t-[3px] border-black lg:grid-cols-2">
        <div className="border-b border-black py-8 lg:border-r lg:pr-10">
          <p className="wide text-[clamp(3rem,6vw,5.5rem)] leading-none font-extrabold tracking-[-0.03em]">$0</p>
          <h3 className="wide mt-4 text-2xl font-bold">Your first three PDFs</h3>
          <p className="mt-3 max-w-[28rem] text-lg leading-[1.5]">
            Summary, hints, quotes and insights for each one. No card needed.
          </p>
        </div>
        <div className="border-b border-black py-8 lg:pl-10">
          <p className="wide text-[clamp(3rem,6vw,5.5rem)] leading-none font-extrabold tracking-[-0.03em] text-klein">
            $8
          </p>
          <h3 className="wide mt-4 text-2xl font-bold">A month, for every PDF after that</h3>
          <p className="mt-3 max-w-[28rem] text-lg leading-[1.5]">
            Unlimited PDFs up to 2,000 pages each, scans included. Cancel whenever you like.
          </p>
        </div>
      </div>
    </section>
  );
}

function UploadBand() {
  const { fileName, inputProps } = usePdfPicker();

  return (
    <section id="upload" className="scroll-mt-0 bg-klein text-white">
      <div className={`${SECTION} py-20 lg:py-28`}>
        <label className="group block cursor-pointer focus-within:outline-2 focus-within:outline-offset-8 focus-within:outline-white">
          <input {...inputProps} className="sr-only" />
          <span className="wide block text-[clamp(3rem,10.5vw,11rem)] leading-[0.88] font-extrabold tracking-[-0.04em] decoration-[0.06em] underline-offset-[0.12em] group-hover:underline">
            Upload a PDF
          </span>
        </label>
        <p aria-live="polite" className="mt-8 max-w-[40rem] text-xl leading-[1.45]">
          {fileName
            ? `${fileName} selected.`
            : "Your first three are free. You will have the summary before you finish your coffee."}
        </p>
      </div>
    </section>
  );
}
