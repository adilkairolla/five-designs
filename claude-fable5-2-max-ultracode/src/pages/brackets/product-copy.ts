import type { OutputId } from "./reader-types";

export const OUTPUTS: readonly { id: OutputId; label: string }[] = [
  { id: "summary", label: "Summary" },
  { id: "hints", label: "Hints" },
  { id: "quotes", label: "Quotes" },
  { id: "insights", label: "Insights" },
];

export const OUTPUT_GLOSS: Record<OutputId, string> = {
  summary: "The most important information, in plain language.",
  hints: "Nudges for the hard parts: what to read first, what a term means, what to watch for.",
  quotes: "The key passages word for word, with page numbers.",
  insights: "Themes, how the parts connect, what is missing, questions worth asking.",
};

export const HOW_TO =
  "Open any bracket in the paragraph to see what those pages hold. Black is Darwin, word for word; this color is Ratio\u00A0Reader.";
