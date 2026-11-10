import type { Cut } from "./abridged-book";
import { countLabel } from "./format";

export function BracketMark({ cut }: { cut: Cut }) {
  return (
    <>
      <span aria-hidden="true">[</span>
      <span aria-hidden="true" className="brackets-cut-label">
        {"… "}
        <span className="brackets-cut-count">{countLabel(cut)}</span>
        {" …"}
      </span>
      <span aria-hidden="true">]</span>
    </>
  );
}
