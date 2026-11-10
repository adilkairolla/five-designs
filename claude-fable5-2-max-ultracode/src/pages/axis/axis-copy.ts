import { book } from "@/content/origin-of-species";

export type PlainRowCopy = { left: string; key: string; right: string };
export type HeadCopy = { id: string; lead: string; word: string; note?: string };

export const TITLE = "Ratio Reader: a summary, hints, quotes and insights from one long PDF";
export const WORDMARK = "Ratio Reader";
export const CAPTION = "Read down for the gist, across for the sentence.";
export const SKIP = "Skip to the sample";
export const RELEASE = "release";

export const HERO_ROWS: readonly PlainRowCopy[] = [
  { left: "Upload a long, dense ", key: "PDF", right: " and get four things: " },
  { left: "what it says, as a ", key: "summary", right: " in plain language; " },
  { left: "where to start, as ", key: "hints", right: " for the hard parts; " },
  { left: "its exact words, as ", key: "quotes", right: " with page numbers; " },
  { left: "what it adds up to, as ", key: "insights", right: " that tie it together." },
];

export const HEADS = {
  sample: { id: "axis-sample-h", lead: "what follows is a ", word: "sample" },
  summary: {
    id: "axis-summary-h",
    lead: "what it says: ",
    word: "summary",
    note: "Read down the band and you have the argument.",
  },
  hints: {
    id: "axis-hints-h",
    lead: "where to start: ",
    word: "hints",
    note: "Each hint is keyed on the word it turns on: what to read first, what a term means, what to watch for.",
  },
  terms: { id: "axis-terms-h", lead: "its key ", word: "terms" },
  quotes: {
    id: "axis-quotes-h",
    lead: "its exact words: ",
    word: "quotes",
    note: "Each passage quoted on this page, word for word, with its page number. Every line is a window on one passage; press it to open the whole of it.",
  },
  insights: {
    id: "axis-insights-h",
    lead: "what it adds up to: ",
    word: "insights",
    note: "What the book is about, how its parts connect, and what it leaves out.",
  },
  steps: { id: "axis-steps-h", lead: "how it works, in three ", word: "steps" },
  notes: { id: "axis-notes-h", lead: "before you upload: ", word: "notes" },
} as const satisfies Record<string, HeadCopy>;

export const TRY_ROW: PlainRowCopy = {
  left: "press the word ",
  key: "selection",
  right:
    ". Every line that carries it stays dark and the rest fall back; each quote turns to show it. Any underlined word on the band does the same. Press it again, or press Escape, to let go.",
};

export const STEP_ROWS: readonly PlainRowCopy[] = [
  { left: "1. You ", key: "upload", right: " a PDF." },
  { left: "2. Ratio Reader ", key: "reads", right: " the whole thing." },
  { left: "3. You ", key: "get", right: " the summary, the hints, the quotes and the insights." },
];

export const NOTE_ROWS: readonly PlainRowCopy[] = [
  {
    left: "Made for long, dense ",
    key: "PDFs",
    right:
      " such as papers, reports, contracts, textbooks and manuals. Its readers: students, researchers, analysts, anyone handed a long document.",
  },
  { left: "It does not ", key: "replace", right: " reading. It points to the pages to read closely." },
  {
    left: "You can ",
    key: "check",
    right: " its work: the page numbers are there so you can look for yourself.",
  },
  { left: "The name: ", key: "ratio", right: " means proportion, and is Latin for reason or reckoning." },
];

export const FOOTER_ROWS: readonly PlainRowCopy[] = [
  { left: "the ", key: "sample", right: `: ${book.title}, ${book.edition}, ${book.year}.` },
  {
    left: "this is a ",
    key: "demo page",
    right: ". It does not process files, and nothing you pick here is uploaded.",
  },
];

export const UPLOAD = {
  lead: "Upload a",
  key: "PDF",
  sectionLabel: "Upload a PDF",
  seeSample: "See a sample",
  seeSampleRest: `: what you get back for a ${book.pages}-page book.`,
  closingIdle: "You get back a summary, hints, quotes and insights.",
  pickedLine: (name: string, size: string) => `Picked: ${name}, ${size}.`,
  pickedNote: "Not uploaded: this demo page does not process files. Yours never left the browser.",
  seeTheSample: "See the sample",
  rejectedLine: (name: string) => `Not a PDF: ${name}`,
  rejectedNote: "Choose a file that ends in .pdf.",
  pickAgain: "Pick again",
} as const;
