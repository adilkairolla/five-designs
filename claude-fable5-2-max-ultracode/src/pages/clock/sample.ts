import { book, hints, insights, keyQuotes, quotes, summary } from "@/content/origin-of-species";
import type { Hint, Insight } from "@/content/origin-of-species";
import { citePages, countWords } from "@/content/book-math";
import { splitWords, wordsBeforePage } from "./book-position";

export const SUMMARY_SENTENCES = summary.map((sentence) => ({
  id: sentence.term,
  words: splitWords(sentence.text),
  cite: citePages(sentence.pages),
}));

type Placed = {
  readonly id: string;
  readonly page: number;
  readonly wordsBefore: number;
};
type Titled = {
  readonly title: string;
  readonly text: string;
  readonly cite: string;
};

export type TimelineEntry =
  | (Placed & { readonly kind: "quote"; readonly text: string; readonly cite: string })
  | (Placed & Titled & { readonly kind: "hint"; readonly facet: Hint["kind"] })
  | (Placed & Titled & { readonly kind: "insight"; readonly facet: Insight["kind"] })
  | (Placed & { readonly kind: "end" });

// One hint of each kind and one insight of each kind; every key quote is shown.
const SHOWN_HINTS = [0, 2, 4];
const SHOWN_INSIGHTS = [0, 2, 3];

function placedAt(id: string, page: number): Placed {
  return { id, page, wordsBefore: wordsBeforePage(page) };
}

const quoteEntries = keyQuotes.map((id): TimelineEntry => {
  const quote = quotes[id];
  return { ...placedAt(`quote-${id}`, quote.pages.from), kind: "quote", text: quote.text, cite: citePages(quote.pages) };
});

const hintEntries = SHOWN_HINTS.flatMap((index): TimelineEntry[] => {
  const hint = hints[index];
  if (!hint) return [];
  return [
    {
      ...placedAt(`hint-${index}`, hint.pages.from),
      kind: "hint",
      facet: hint.kind,
      title: hint.title,
      text: hint.text,
      cite: citePages(hint.pages),
    },
  ];
});

const insightEntries = SHOWN_INSIGHTS.flatMap((index): TimelineEntry[] => {
  const insight = insights[index];
  if (!insight) return [];
  return [
    {
      ...placedAt(`insight-${index}`, insight.pages.from),
      kind: "insight",
      facet: insight.kind,
      title: insight.title,
      text: insight.text,
      cite: citePages(insight.pages),
    },
  ];
});

const endEntry: TimelineEntry = { ...placedAt("end", book.text.to + 1), kind: "end" };

const KIND_ORDER: Record<TimelineEntry["kind"], number> = { quote: 0, hint: 1, insight: 2, end: 3 };

/** What Ratio Reader returned beside the summary, in the order a straight read reaches it. */
export const TIMELINE: readonly TimelineEntry[] = [...quoteEntries, ...hintEntries, ...insightEntries, endEntry].sort(
  (a, b) => a.page - b.page || KIND_ORDER[a.kind] - KIND_ORDER[b.kind],
);

export function reachedCount(words: number) {
  return TIMELINE.filter((entry) => entry.wordsBefore <= words).length;
}

export const SAMPLE_COUNTS = {
  hints: hints.length,
  quotes: keyQuotes.length,
  insights: insights.length,
  shownHints: hintEntries.length,
  shownInsights: insightEntries.length,
};

export const PACE_PASSAGE = {
  words: splitWords(quotes.bank.text),
  wordCount: countWords(quotes.bank.text),
  cite: citePages(quotes.bank.pages),
  page: quotes.bank.pages.from,
};
