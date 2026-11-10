import type { ReactNode } from "react";
import { isHit, tokens } from "./kwic";
import { useTrace } from "./trace-context";

type TracedTextProps = { text: string; own?: string };

function markToken(token: string, index: number, stem: string | null, own: string | undefined): ReactNode {
  if (stem !== null && isHit(token, stem)) {
    return (
      <mark className="axis-hit" key={index}>
        {token}
      </mark>
    );
  }
  if (token === own) {
    return (
      <strong className="axis-own" key={index}>
        {token}
      </strong>
    );
  }
  return token;
}

// Always token by token, traced or not: one long text node and many short ones round to
// slightly different widths, so switching between them could re-wrap a line.
export function TracedText({ text, own }: TracedTextProps) {
  const { state } = useTrace();
  const stem = state.status === "tracing" ? state.word.stem : null;

  return tokens(text).map((token, index) => markToken(token, index, stem, own));
}
