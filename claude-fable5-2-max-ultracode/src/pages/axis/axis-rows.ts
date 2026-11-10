import { citePages, countWords } from "@/content/book-math";
import { book, hints, insights, keyQuotes, keyTerms, quotes, summary } from "@/content/origin-of-species";
import type { QuoteId } from "@/content/origin-of-species";
import type { PlainRowCopy } from "./axis-copy";
import { chaptersLabel, thousands } from "./format";
import { splitAtHit, splitAtKey, stemOf, trimLeftContext, trimRightContext, withTail } from "./kwic";
import type { KeyParts, KeySplit } from "./kwic";

export type TraceSection = "summary" | "hints" | "quotes" | "insights";
export type TraceRow = { section: TraceSection; text: string };
export type WindowBudget = { left: number; right: number };

export type SummaryRow = {
  id: string;
  section: "summary";
  locator: string;
  key: string;
  text: string;
  cite: string;
  quote: QuoteId;
};

export type TitledRowModel = {
  id: string;
  section: "hints" | "insights";
  parts: KeyParts;
  body: string;
  text: string;
  cite: string;
  quote: QuoteId | null;
};

export type QuoteRow = { id: QuoteId; section: "quotes"; own: KeySplit; text: string; cite: string };

// The word each line turns on. It is the first whole-word, case-sensitive match in the line's
// own text, and with the punctuation that rides on it never longer than the band holds (KEY_SLOT).
const HINT_KEYS = ["Chapter", "diagram", "metaphor", "theory", "eye", "chapter"] as const;
const INSIGHT_KEYS = ["summary", "argument", "quarter", "evolution", "origins"] as const;
const TERM_KEYS = ["variation", "struggle", "selection", "species", "divergence", "descent"] as const;

// Every quote has a key, indexed or not, so the index can follow whatever the page comes to cite.
const QUOTE_KEYS: Record<QuoteId, string> = {
  beagle: "Beagle",
  abstract: "Abstract",
  born: "struggle",
  immutable: "species",
  inheritance: "laws",
  breeders: "selection",
  name: "Selection",
  metaphor: "Struggle",
  struggle: "struggle",
  definition: "Selection",
  scrutinising: "selection",
  tree: "Life",
  difficulties: "crowd",
  eye: "eye",
  record: "history",
  argument: "argument",
  primordial: "form",
  ennobled: "creations",
  man: "origin",
  bank: "bank",
  grandeur: "evolved",
};

type TitledSource = Omit<TitledRowModel, "parts" | "text"> & { title: string; key: string };

function titledRow({ title, key, ...row }: TitledSource): TitledRowModel {
  return { ...row, parts: withTail(splitAtKey(title, key)), text: `${title} ${row.body}` };
}

const summaryWords = summary.reduce((total, sentence) => total + countWords(sentence.text), 0);
const bookWordsPerSummaryWord = Math.round(book.approxWords / summaryWords / 100) * 100;

export const SAMPLE_ROWS: readonly PlainRowCopy[] = [
  {
    left: "one book of ",
    key: `${book.pages} pages`,
    right: `: ${book.title}, ${book.author}, ${book.edition}, ${book.year}. About ${thousands(book.approxWords)} words.`,
  },
  {
    left: "one summary of ",
    key: `${summaryWords} words`,
    right: `: one word for about every ${thousands(bookWordsPerSummaryWord)} in the book.`,
  },
];

export const SUMMARY_ROWS: readonly SummaryRow[] = summary.map((sentence, index) => ({
  id: `axis-summary-${index}`,
  section: "summary",
  locator: chaptersLabel(sentence.pages),
  key: sentence.term,
  text: sentence.text,
  cite: citePages(sentence.pages),
  quote: sentence.cite,
}));

export const HINT_ROWS: readonly TitledRowModel[] = hints.map((hint, index) =>
  titledRow({
    id: `axis-hint-${index}`,
    section: "hints",
    title: hint.title,
    key: HINT_KEYS[index] ?? "",
    body: hint.text,
    cite: citePages(hint.pages),
    quote: hint.quote ?? null,
  }),
);

export const TERM_ROWS: readonly TitledRowModel[] = keyTerms.map((term, index) =>
  titledRow({
    id: `axis-term-${index}`,
    section: "hints",
    title: term.term,
    key: TERM_KEYS[index] ?? "",
    body: term.gloss,
    cite: `from p. ${term.firstPage}`,
    quote: null,
  }),
);

export const INSIGHT_ROWS: readonly TitledRowModel[] = insights.map((insight, index) =>
  titledRow({
    id: `axis-insight-${index}`,
    section: "insights",
    title: insight.title,
    key: INSIGHT_KEYS[index] ?? "",
    body: insight.text,
    cite: citePages(insight.pages),
    quote: insight.quote ?? null,
  }),
);

function isQuoteId(id: string): id is QuoteId {
  return id in quotes;
}

const citedIds = new Set<QuoteId>([
  ...summary.map((sentence) => sentence.cite),
  ...[...hints, ...insights].flatMap((entry) => (entry.quote ? [entry.quote] : [])),
]);
const indexedIds = new Set<QuoteId>([...citedIds, ...keyQuotes]);

export const QUOTE_ROWS: readonly QuoteRow[] = Object.keys(quotes)
  .filter(isQuoteId)
  .filter((id) => indexedIds.has(id))
  .sort((a, b) => quotes[a].pages.from - quotes[b].pages.from)
  .map((id) => ({
    id,
    section: "quotes",
    own: splitAtKey(quotes[id].text, QUOTE_KEYS[id]),
    text: quotes[id].text,
    cite: citePages(quotes[id].pages),
  }));

/** The quotes something on the page cites: a summary sentence, a hint or an insight. */
export const CITED_QUOTE_ROWS: readonly QuoteRow[] = QUOTE_ROWS.filter((row) => citedIds.has(row.id));

export type PageIndex = {
  terms: readonly TitledRowModel[];
  quotes: readonly QuoteRow[];
  /** Characters a quote line may show on each side of its key. */
  quoteWindow: WindowBudget;
  /** Every line a trace can light, in page order. */
  traceRows: readonly TraceRow[];
};

export function pageIndex(
  terms: readonly TitledRowModel[],
  quoteRows: readonly QuoteRow[],
  quoteWindow: WindowBudget,
): PageIndex {
  const traceRows = [...SUMMARY_ROWS, ...HINT_ROWS, ...terms, ...quoteRows, ...INSIGHT_ROWS].map(
    ({ section, text }) => ({ section, text }),
  );
  return { terms, quotes: quoteRows, quoteWindow, traceRows };
}

/** The line in its current state: turned to the traced word when it carries it under another key. */
export function quoteParts(row: QuoteRow, stem: string | null): KeyParts {
  const turned = stem !== null && stemOf(row.own.key) !== stem ? splitAtHit(row.text, stem) : null;
  return withTail(turned ?? row.own);
}

export function windowOf(parts: KeyParts, budget: WindowBudget): { left: string; right: string } {
  return { left: trimLeftContext(parts.left, budget.left), right: trimRightContext(parts.right, budget.right) };
}
