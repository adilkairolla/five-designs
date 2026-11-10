import { book, questions, summary } from "@/content/origin-of-species";
import type { Question, QuoteId } from "@/content/origin-of-species";
import { numberWord } from "./book-figures";

export const LESSON_IDS = {
  pdf: "lesson-1",
  summary: "lesson-2",
  hints: "lesson-3",
  quotes: "lesson-4",
  insights: "lesson-5",
  yourPdf: "lesson-6",
} as const;

export const PDF_LINES: readonly string[] = [
  "This is a PDF.",
  `It is ${book.pages} pages long.`,
  "Upload the PDF.",
  "Now it is short.",
];

export const YOUR_PDF_LINES: readonly string[] = ["This is your PDF.", "It is long too."];

export type SpreadLesson = {
  id: string;
  number: number;
  title: string;
  lines: readonly string[];
  statement: string;
  question: Question | undefined;
};

function questionAbout(quote: QuoteId) {
  return questions.find((question) => question.quote === quote);
}

export const SPREAD_LESSONS = {
  summary: {
    id: LESSON_IDS.summary,
    number: 2,
    title: "The summary",
    lines: [
      "Mr. Darwin wrote a book.",
      `It has ${book.pages} pages.`,
      `Ratio Reader read all ${book.pages}.`,
      `Here are ${numberWord(summary.length)} sentences.`,
      "Each one names its pages.",
    ],
    statement: "Here is the whole of it.",
    question: questionAbout("eye"),
  },
  hints: {
    id: LESSON_IDS.hints,
    number: 3,
    title: "The hints",
    lines: [
      "Some parts are hard.",
      "Some words are hard.",
      "A hint helps.",
      "It says what to look for.",
      "You still read the page.",
    ],
    statement: "Here is where it is hard.",
    question: questionAbout("metaphor"),
  },
  quotes: {
    id: LESSON_IDS.quotes,
    number: 4,
    title: "The quotes",
    lines: [
      "Mr. Darwin wrote these.",
      "Every word is his.",
      "Each has a page number.",
      "You can go and check.",
    ],
    statement: "Here are the lines to remember.",
    question: questionAbout("name"),
  },
  insights: {
    id: LESSON_IDS.insights,
    number: 5,
    title: "The insights",
    lines: [
      "The chapters fit together.",
      "An insight shows how.",
      "Some things are left out.",
      "An insight shows what.",
      "A question is an insight.",
      "One ends this lesson.",
    ],
    statement: "Here is what is easy to miss.",
    question: questionAbout("man"),
  },
} satisfies Record<string, SpreadLesson>;
