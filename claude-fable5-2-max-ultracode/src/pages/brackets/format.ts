import type { PageSpan } from "@/content/origin-of-species";
import { cuts, keptFragments } from "./abridged-book";
import type { Cut } from "./abridged-book";
import { summaryStart } from "./cut-contents";
import type { Opened } from "./reader-types";

export const NONE_FOR_THESE_PAGES = "None for these pages.";

export function countLabel(cut: Cut) {
  const noun = cut.count === 1 ? "page" : "pages";
  return `${cut.count} ${noun}${cut.isIndex ? " of index" : ""}`;
}

export function pagesInWords(span: PageSpan) {
  return span.from === span.to ? `page ${span.from}` : `pages ${span.from} to ${span.to}`;
}

export function cutTitle(cut: Cut) {
  return `${countLabel(cut)} cut, ${pagesInWords(cut.pages)}`;
}

export function cutName(cut: Cut) {
  return `${cutTitle(cut)}. Show what they hold`;
}

function sentenceCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function readingTime(seconds: number) {
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  const toFiveMinutes = Math.round(minutes / 5) * 5;
  const hours = Math.floor(toFiveMinutes / 60);
  const rest = toFiveMinutes % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}

export function cutMeta(cut: Cut, readingSeconds: number | null) {
  const pages = sentenceCase(pagesInWords(cut.pages));
  if (cut.isIndex) return `${pages}. The index.`;
  if (readingSeconds === null) return `${pages}.`;
  return `${pages}. About ${readingTime(readingSeconds)} to read.`;
}

export function summaryGapNote(cut: Cut) {
  const start = summaryStart();
  if (cut.pages.to >= start.page) return NONE_FOR_THESE_PAGES;
  const chapter = start.chapter?.numeral;
  const where = chapter ? `, where Chapter ${chapter} begins` : "";
  return `The summary starts at page ${start.page}${where}.`;
}

const WHOLE_BOOK = "Showing the whole book.";

export function announcementFor(opened: Opened) {
  switch (opened.kind) {
    case "none":
      return WHOLE_BOOK;
    case "cut": {
      const cut = cuts[opened.index];
      return cut ? `Showing ${pagesInWords(cut.pages)}.` : WHOLE_BOOK;
    }
    case "fragment": {
      const fragment = keptFragments[opened.index];
      return fragment ? `Showing the sentence on ${pagesInWords(fragment.page)}.` : WHOLE_BOOK;
    }
  }
}

export function viewKey(opened: Opened) {
  return opened.kind === "none" ? "book" : `${opened.kind}-${opened.index}`;
}
