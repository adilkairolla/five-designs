import { useSyncExternalStore } from "react";
import { CITED_QUOTE_ROWS, pageIndex, QUOTE_ROWS, TERM_ROWS } from "./axis-rows";
import type { PageIndex } from "./axis-rows";

// One narrow column, so the phone form keeps to the quotes the page itself cites and leaves
// the key terms out.
const PHONE = pageIndex([], CITED_QUOTE_ROWS, { left: 22, right: 22 });

// Widest first. 48rem and 74rem are where the stylesheet changes the page's form; the steps
// between only widen the quote windows with the text column. Each right budget is that column
// at the step's narrowest width, less a classic scrollbar and the page reference beside it.
const STEPS: readonly { query: string; index: PageIndex }[] = [
  { query: "(min-width: 74rem)", index: pageIndex(TERM_ROWS, QUOTE_ROWS, { left: 32, right: 56 }) },
  { query: "(min-width: 64rem)", index: pageIndex(TERM_ROWS, QUOTE_ROWS, { left: 26, right: 45 }) },
  { query: "(min-width: 60rem)", index: pageIndex(TERM_ROWS, QUOTE_ROWS, { left: 26, right: 39 }) },
  { query: "(min-width: 54rem)", index: pageIndex(TERM_ROWS, QUOTE_ROWS, { left: 26, right: 29 }) },
  { query: "(min-width: 48rem)", index: pageIndex(TERM_ROWS, QUOTE_ROWS, { left: 26, right: 19 }) },
];

function subscribe(onChange: () => void) {
  const lists = STEPS.map(({ query }) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () => lists.forEach((list) => list.removeEventListener("change", onChange));
}

function currentIndex(): PageIndex {
  return STEPS.find(({ query }) => window.matchMedia(query).matches)?.index ?? PHONE;
}

function widestIndex(): PageIndex {
  return STEPS[0]?.index ?? PHONE;
}

/** What the index holds at the current width: its key terms, quote lines and their windows. */
export function useIndexForWidth(): PageIndex {
  return useSyncExternalStore(subscribe, currentIndex, widestIndex);
}
