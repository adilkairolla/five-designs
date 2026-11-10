import { pageCount } from "@/content/book-math";
import { abridgement, book, quotes } from "@/content/origin-of-species";
import type { PageSpan, QuoteId } from "@/content/origin-of-species";
import { splitLastWord } from "./last-word";

export type KeptFragment = {
  index: number;
  quote: QuoteId;
  page: PageSpan;
  kept: string;
  lead: string;
  last: string;
  before: string;
  after: string;
};

export type Cut = {
  index: number;
  pages: PageSpan;
  count: number;
  isIndex: boolean;
  before: KeptFragment;
  after: KeptFragment | null;
};

export const keptFragments: readonly KeptFragment[] = abridgement.map((piece, index) => {
  const sentence = quotes[piece.quote];
  const start = sentence.text.indexOf(piece.kept);
  const isFound = start >= 0;
  return {
    index,
    quote: piece.quote,
    page: sentence.pages,
    kept: piece.kept,
    ...splitLastWord(piece.kept),
    before: isFound ? sentence.text.slice(0, start) : "",
    after: isFound ? sentence.text.slice(start + piece.kept.length) : "",
  };
});

const cutsBetweenFragments: Cut[] = keptFragments.flatMap((before, index) => {
  const after = keptFragments[index + 1];
  if (!after) return [];
  const pages = { from: before.page.to + 1, to: after.page.from - 1 };
  return [{ index, pages, count: pageCount(pages), isIndex: false, before, after }];
});

function indexCut(): Cut[] {
  const lastFragment = keptFragments.at(-1);
  if (!lastFragment) return [];
  return [
    {
      index: cutsBetweenFragments.length,
      pages: book.index,
      count: pageCount(book.index),
      isIndex: true,
      before: lastFragment,
      after: null,
    },
  ];
}

export const cuts: readonly Cut[] = [...cutsBetweenFragments, ...indexCut()];

export function cutsBeside(fragment: KeptFragment): { before?: Cut; after?: Cut } {
  return { before: cuts[fragment.index - 1], after: cuts[fragment.index] };
}

export const keptPageCount = keptFragments.reduce((pages, fragment) => pages + pageCount(fragment.page), 0);

export const cutPageCount = cuts.reduce((pages, cut) => pages + cut.count, 0);

export function stripSegment(cut: Cut) {
  return {
    left: `${((cut.pages.from - 1) / book.pages) * 100}%`,
    width: `${(cut.count / book.pages) * 100}%`,
  };
}

export function stripTick(fragment: KeptFragment) {
  return { left: `${((fragment.page.from - 0.5) / book.pages) * 100}%` };
}
