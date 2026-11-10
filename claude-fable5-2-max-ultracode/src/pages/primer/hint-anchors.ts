import { chaptersIn } from "@/content/book-math";
import { hints, keyQuotes, quotes } from "@/content/origin-of-species";
import type { Hint, PageSpan } from "@/content/origin-of-species";

export type HintAnchor =
  | { kind: "quote"; text: string; pages: PageSpan }
  | { kind: "chapter"; numeral: string; title: string; pages: PageSpan };

export type AnchoredHint = { hint: Hint; anchor: HintAnchor };

const KINDS_IN_ORDER: readonly Hint["kind"][] = ["first", "term", "watch"];

export const HINT_KIND_LABEL = {
  first: "what to read first",
  term: "what a term means",
  watch: "what to watch for",
} as const satisfies Record<Hint["kind"], string>;

function sitsOnKeyPassage(hint: Hint) {
  return hint.quote !== undefined && keyQuotes.includes(hint.quote);
}

function hintToShow(kind: Hint["kind"]) {
  const ofKind = hints.filter((hint) => hint.kind === kind);
  return ofKind.find(sitsOnKeyPassage) ?? ofKind.at(0);
}

function anchorFor(hint: Hint): HintAnchor | undefined {
  if (hint.quote) {
    const quote = quotes[hint.quote];
    return { kind: "quote", text: quote.text, pages: quote.pages };
  }
  const chapter = chaptersIn(hint.pages).at(0);
  if (!chapter || chapter.numeral === null) return undefined;
  return { kind: "chapter", numeral: chapter.numeral, title: chapter.title, pages: hint.pages };
}

export const ANCHORED_HINTS: readonly AnchoredHint[] = KINDS_IN_ORDER.flatMap((kind) => {
  const hint = hintToShow(kind);
  if (!hint) return [];
  const anchor = anchorFor(hint);
  return anchor ? [{ hint, anchor }] : [];
});
