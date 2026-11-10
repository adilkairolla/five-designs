import { chapters } from "./origin-of-species";
import type { Chapter, PageSpan } from "./origin-of-species";

// Average silent reading speed for English nonfiction (Brysbaert, 2019).
export const AVERAGE_WORDS_PER_MINUTE = 238;

export function pageCount(span: PageSpan) {
  return span.to - span.from + 1;
}

export function sharedPages(a: PageSpan, b: PageSpan) {
  return Math.max(0, Math.min(a.to, b.to) - Math.max(a.from, b.from) + 1);
}

export function chaptersIn(span: PageSpan): Chapter[] {
  return chapters.filter((chapter) => sharedPages(chapter.pages, span) > 0);
}

/** Words of the book that come before the top of `page`, to within a few hundred. */
export function approxWordsBefore(page: number) {
  let words = 0;
  for (const chapter of chapters) {
    if (page > chapter.pages.to) {
      words += chapter.approxWords;
      continue;
    }
    const pagesIntoChapter = Math.max(0, page - chapter.pages.from);
    words += (chapter.approxWords * pagesIntoChapter) / pageCount(chapter.pages);
    break;
  }
  return Math.round(words);
}

export function countWords(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

export function secondsToRead(words: number, wordsPerMinute = AVERAGE_WORDS_PER_MINUTE) {
  return (words / wordsPerMinute) * 60;
}

export function citePages(span: PageSpan) {
  return span.from === span.to ? `p. ${span.from}` : `pp. ${span.from}–${span.to}`;
}
