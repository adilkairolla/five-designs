import { insights, quotes, summary } from "@/content/origin-of-species";
import type { PageSpan } from "@/content/origin-of-species";
import { ANCHORED_HINTS } from "./hint-anchors";
import { SPREAD_LESSONS } from "./lessons";

export type NewWordExample = {
  form: "sentence" | "title" | "quote";
  text: string;
  pages: PageSpan;
};

export type NewWord = {
  word: string;
  lesson: number;
  target: string;
  gloss: string;
  example: NewWordExample | undefined;
};

const struggleSentence = summary.find((sentence) => sentence.term === "struggle");
const termHint = ANCHORED_HINTS.find(({ hint }) => hint.kind === "term")?.hint;
const manInsight = insights.find((insight) => insight.quote === "man");

export const NEW_WORDS: readonly NewWord[] = [
  {
    word: "summary",
    lesson: SPREAD_LESSONS.summary.number,
    target: SPREAD_LESSONS.summary.id,
    gloss: "The main points, in plain language.",
    example: struggleSentence
      ? { form: "sentence", text: struggleSentence.text, pages: struggleSentence.pages }
      : undefined,
  },
  {
    word: "hint",
    lesson: SPREAD_LESSONS.hints.number,
    target: SPREAD_LESSONS.hints.id,
    gloss: "A nudge at a hard part.",
    example: termHint ? { form: "title", text: termHint.title, pages: termHint.pages } : undefined,
  },
  {
    word: "quote",
    lesson: SPREAD_LESSONS.quotes.number,
    target: SPREAD_LESSONS.quotes.id,
    gloss: "The author’s exact words, with the page number.",
    example: { form: "quote", text: quotes.man.text, pages: quotes.man.pages },
  },
  {
    word: "insight",
    lesson: SPREAD_LESSONS.insights.number,
    target: SPREAD_LESSONS.insights.id,
    gloss: "A theme, a connection, a gap, or a question.",
    example: manInsight
      ? { form: "title", text: manInsight.title, pages: manInsight.pages }
      : undefined,
  },
];
