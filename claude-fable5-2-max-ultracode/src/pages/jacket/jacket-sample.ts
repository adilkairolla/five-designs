import { citePages, countWords, pageCount } from "@/content/book-math";
import { book, chapters, hints, insights, keyQuotes, quotes, summary } from "@/content/origin-of-species";
import type { Hint, PageSpan, QuoteId } from "@/content/origin-of-species";

export const PAGES_PER_BAND_LINE = 4;

const MAX_KEY_QUOTES_ON_COVER = 4;
const BOOKMARK_HINT_KINDS: readonly Hint["kind"][] = ["first", "term", "watch"];

export type FlapSentence = {
  number: number;
  anchor: string;
  opening: string;
  lastWord: string;
  quote: QuoteId;
  quoteAnchor: string;
  cite: string;
};
export type CoverLine = {
  id: QuoteId;
  anchor: string;
  text: string;
  cite: string;
  sentence: FlapSentence | null;
};
export type BookmarkHint = { title: string; text: string; cite: string };
export type ChapterRow = { numeral: string; title: string; opensOn: number };

function quoteAnchor(id: QuoteId) {
  return `jacket-quote-${id}`;
}

function splitLastWord(text: string) {
  const start = text.lastIndexOf(" ") + 1;
  return { opening: text.slice(0, start), lastWord: text.slice(start) };
}

function pagesIn(span: PageSpan) {
  return Array.from({ length: pageCount(span) }, (_, index) => span.from + index);
}

export const summaryWordCount = countWords(summary.map((sentence) => sentence.text).join(" "));

export const flapSentences: readonly FlapSentence[] = summary.map((sentence, index) => ({
  number: index + 1,
  anchor: `jacket-sentence-${index + 1}`,
  ...splitLastWord(sentence.text),
  quote: sentence.cite,
  quoteAnchor: quoteAnchor(sentence.cite),
  cite: citePages(quotes[sentence.cite].pages),
}));

export const bookmarkHints: readonly BookmarkHint[] = BOOKMARK_HINT_KINDS.flatMap((kind) => {
  const hint = hints.find((candidate) => candidate.kind === kind);
  return hint ? [{ title: hint.title, text: hint.text, cite: citePages(hint.pages) }] : [];
});

// The back cover prints what the two flaps cite: the passage behind each summary sentence,
// then any key quote an insight points to.
const quotesCitedByInsights = new Set<QuoteId | undefined>(insights.map((insight) => insight.quote));
const keyQuotesOnCover = keyQuotes.filter((id) => quotesCitedByInsights.has(id)).slice(0, MAX_KEY_QUOTES_ON_COVER);
const coverQuoteIds = Array.from(
  new Set<QuoteId>([...summary.map((sentence) => sentence.cite), ...keyQuotesOnCover]),
).sort((a, b) => quotes[a].pages.from - quotes[b].pages.from);

export const coverLines: readonly CoverLine[] = coverQuoteIds.map((id) => ({
  id,
  anchor: quoteAnchor(id),
  text: quotes[id].text,
  cite: citePages(quotes[id].pages),
  sentence: flapSentences.find((sentence) => sentence.quote === id) ?? null,
}));

export const quotedPageCount = new Set(coverQuoteIds.flatMap((id) => pagesIn(quotes[id].pages))).size;
export const unquotedPageCount = book.pages - quotedPageCount;

export const numberedChapterCount = chapters.filter((chapter) => chapter.numeral !== null).length;
export const chapterRows: readonly ChapterRow[] = chapters.map((chapter) => ({
  numeral: chapter.numeral ?? "",
  title: chapter.title,
  opensOn: chapter.pages.from,
}));

export const rulerMarks = Array.from({ length: Math.floor(book.pages / 100) }, (_, index) => (index + 1) * 100);
export const bandLineCount = Math.ceil(book.pages / PAGES_PER_BAND_LINE);
export const approxBookWords = book.approxWords.toLocaleString("en-US");
