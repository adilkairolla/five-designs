import {
  approxWordsBefore,
  chaptersIn,
  countWords,
  pageCount,
  secondsToRead,
  sharedPages,
} from "@/content/book-math";
import { chapters, hints, insights, questions, quotes, summary } from "@/content/origin-of-species";
import type {
  Chapter,
  Hint,
  Insight,
  PageSpan,
  Quote,
  SummarySentence,
} from "@/content/origin-of-species";
import { cuts, keptFragments } from "./abridged-book";
import type { Cut, KeptFragment } from "./abridged-book";
import type { Marks, Pointed } from "./reader-types";

const MIN_SHARED_PAGES = 5;

const NO_MARKS: Marks = { cuts: [], fragments: [] };

const quotesInPageOrder: readonly Quote[] = Object.values(quotes).sort(
  (a, b) => a.pages.from - b.pages.from || a.pages.to - b.pages.to,
);

function coversCut(sentence: SummarySentence, cut: Cut) {
  return sharedPages(sentence.pages, cut.pages) >= MIN_SHARED_PAGES;
}

function liesMostlyIn(pages: PageSpan, cut: Cut) {
  return sharedPages(pages, cut.pages) * 2 >= pageCount(pages);
}

function liesWhollyIn(pages: PageSpan, cut: Cut) {
  return sharedPages(pages, cut.pages) === pageCount(pages);
}

function readingSecondsOf(span: PageSpan) {
  const words = approxWordsBefore(span.to + 1) - approxWordsBefore(span.from);
  return words > 0 ? secondsToRead(words) : null;
}

export type CutContents = {
  chapters: Chapter[];
  sentences: SummarySentence[];
  hints: Hint[];
  quotes: Quote[];
  insights: Insight[];
  readingSeconds: number | null;
};

export function contentsOf(cut: Cut): CutContents {
  return {
    chapters: chaptersIn(cut.pages),
    sentences: summary.filter((sentence) => coversCut(sentence, cut)),
    hints: hints.filter((hint) => liesMostlyIn(hint.pages, cut)),
    quotes: quotesInPageOrder.filter((quote) => liesWhollyIn(quote.pages, cut)),
    insights: insights.filter((insight) => liesMostlyIn(insight.pages, cut)),
    readingSeconds: readingSecondsOf(cut.pages),
  };
}

export function citedBy(fragment: KeptFragment) {
  return {
    sentences: summary.filter((sentence) => sentence.cite === fragment.quote),
    hints: hints.filter((hint) => hint.quote === fragment.quote),
    insights: insights.filter((insight) => insight.quote === fragment.quote),
    questions: questions.filter((question) => question.quote === fragment.quote),
  };
}

export function homeCutOf(sentence: SummarySentence): Cut | undefined {
  return cuts.reduce<Cut | undefined>((home, cut) => {
    const shared = sharedPages(sentence.pages, cut.pages);
    if (shared === 0) return home;
    return home && sharedPages(sentence.pages, home.pages) >= shared ? home : cut;
  }, undefined);
}

export function marksOf(pointed: Pointed): Marks {
  switch (pointed.kind) {
    case "none":
      return NO_MARKS;
    case "cut":
      return { cuts: [pointed.index], fragments: [] };
    case "fragment":
      return { cuts: [], fragments: [pointed.index] };
    case "sentence": {
      const sentence = summary[pointed.index];
      if (!sentence) return NO_MARKS;
      return {
        cuts: cuts.filter((cut) => coversCut(sentence, cut)).map((cut) => cut.index),
        fragments: keptFragments
          .filter((fragment) => sharedPages(fragment.page, sentence.pages) > 0)
          .map((fragment) => fragment.index),
      };
    }
  }
}

export function summaryStart() {
  const firstPage = Math.min(...summary.map((sentence) => sentence.pages.from));
  return { page: firstPage, chapter: chapters.find((chapter) => chapter.pages.from === firstPage) };
}

export const summaryWords = summary.reduce((words, sentence) => words + countWords(sentence.text), 0);
