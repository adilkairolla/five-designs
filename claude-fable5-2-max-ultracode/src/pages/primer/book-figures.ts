import { countWords } from "@/content/book-math";
import { book, summary } from "@/content/origin-of-species";
import type { PageSpan } from "@/content/origin-of-species";

const NUMBER_WORDS: readonly string[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

export function numberWord(count: number) {
  return NUMBER_WORDS.at(count) ?? String(count);
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function spokenPages(pages: PageSpan) {
  return pages.from === pages.to ? `page ${pages.from}` : `pages ${pages.from} to ${pages.to}`;
}

export const SUMMARY_WORD_COUNT = countWords(summary.map((sentence) => sentence.text).join(" "));
export const BOOK_WORD_COUNT = book.approxWords.toLocaleString("en-US");
