import { keyTerms } from "@/content/origin-of-species";
import type { TraceRow, TraceSection } from "./axis-rows";
import { carries, stemOf } from "./kwic";

export type TraceWord = { stem: string; label: string };

export type TraceState =
  | { status: "idle"; last: TraceWord | null }
  | { status: "tracing"; word: TraceWord };

export type TraceAction = { type: "toggle"; word: TraceWord } | { type: "release" };

export type TraceReport = { countLine: string; tally: string; book: string | null; spoken: string };

export const IDLE: TraceState = { status: "idle", last: null };

const SECTION_ORDER: readonly TraceSection[] = ["summary", "hints", "quotes", "insights"];
// Keeps "p." with its number and "about" with its figure when the readout wraps.
const NBSP = "\u00a0";

export function traceReducer(state: TraceState, action: TraceAction): TraceState {
  if (state.status === "idle") {
    return action.type === "toggle" ? { status: "tracing", word: action.word } : state;
  }
  if (action.type === "toggle" && action.word.stem !== state.word.stem) {
    return { status: "tracing", word: action.word };
  }
  return { status: "idle", last: state.word };
}

export function traceWord(key: string): TraceWord {
  return { stem: stemOf(key), label: key.toLowerCase() };
}

export function describeTrace(word: TraceWord, rows: readonly TraceRow[]): TraceReport {
  const hits = rows.filter((row) => carries(row.text, word.stem));
  const verb = hits.length === 1 ? "line here carries" : "lines here carry";
  const tally = SECTION_ORDER.map((section) => ({
    section,
    count: hits.filter((row) => row.section === section).length,
  }))
    .filter((entry) => entry.count > 0)
    .map((entry) => `${entry.section} ${entry.count}`)
    .join(", ");
  const term = keyTerms.find((entry) => carries(entry.term, word.stem));
  const book = term
    ? `In the book: ${term.term}, from p.${NBSP}${term.firstPage}, about${NBSP}${term.approxUses}${NBSP}uses.`
    : null;

  return {
    countLine: `${hits.length} ${verb} `,
    tally,
    book,
    spoken: `${word.label}: ${hits.length} ${verb} it. ${tally}.${book ? ` ${book}` : ""}`,
  };
}
