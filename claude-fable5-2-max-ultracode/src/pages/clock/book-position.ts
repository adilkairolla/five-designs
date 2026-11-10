import { book } from "@/content/origin-of-species";
import { openingPages } from "@/content/origin-opening-pages";
import { approxWordsBefore } from "@/content/book-math";

export type IntroParagraph = {
  readonly words: readonly string[];
  readonly indented: boolean;
};
export type IntroPage = {
  readonly page: number;
  readonly paragraphs: readonly IntroParagraph[];
  readonly firstWord: number;
  readonly wordCount: number;
};
export type BookPhase = "intro" | "beyond" | "done";

// countWords splits the same way, so the highlight and the figures agree.
export function splitWords(text: string) {
  return text.split(/\s+/).filter(Boolean);
}

function buildIntroPages() {
  const pages: IntroPage[] = [];
  let firstWord = 0;
  for (const source of openingPages) {
    const opensFlush = source.continuesParagraph || source.page === book.text.from;
    const paragraphs: IntroParagraph[] = [];
    let wordCount = 0;
    for (const [index, text] of source.paragraphs.entries()) {
      const words = splitWords(text);
      paragraphs.push({ words, indented: !(index === 0 && opensFlush) });
      wordCount += words.length;
    }
    pages.push({ page: source.page, paragraphs, firstWord, wordCount });
    firstWord += wordCount;
  }
  return pages;
}

export const INTRO_PAGES: readonly IntroPage[] = buildIntroPages();
export const INTRO_WORDS = INTRO_PAGES.reduce((total, page) => total + page.wordCount, 0);

export function introPageAt(page: number) {
  return INTRO_PAGES.find((candidate) => candidate.page === page);
}

/** Words a straight read has behind it at the top of `page`: counted for the Introduction, estimated after it. */
export function wordsBeforePage(page: number) {
  const introPage = introPageAt(page);
  if (introPage) return introPage.firstWord;
  // The estimate rounds the Introduction down to a hundred, which would start
  // the next page a few words before the counted text runs out.
  return Math.max(INTRO_WORDS, approxWordsBefore(page));
}

const PAGE_STARTS = Array.from({ length: book.text.to }, (_, index) => wordsBeforePage(index + 1));

export function pageAtWord(word: number) {
  let page = 1;
  for (const [index, start] of PAGE_STARTS.entries()) {
    if (start > word) break;
    page = index + 1;
  }
  return page;
}

export function bookPhase(word: number): BookPhase {
  if (word < INTRO_WORDS) return "intro";
  if (word >= book.approxWords) return "done";
  return "beyond";
}
