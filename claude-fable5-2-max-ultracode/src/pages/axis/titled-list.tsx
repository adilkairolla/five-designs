import type { QuoteId } from "@/content/origin-of-species";
import { cn } from "@/lib/cn";
import type { TitledRowModel } from "./axis-rows";
import { LeftCell } from "./left-cell";
import { PageRef } from "./page-ref";
import { useRowDimmed } from "./trace-context";
import { TraceKey } from "./trace-key";
import { TracedText } from "./traced-text";

type RevealPassage = (id: QuoteId) => void;
type TitledListProps = { rows: readonly TitledRowModel[]; onReveal: RevealPassage };

function TitledRow({ row, onReveal }: { row: TitledRowModel; onReveal: RevealPassage }) {
  const dimmed = useRowDimmed(row.text);
  const { left, key, tail, right } = row.parts;

  return (
    <li className={cn("axis-row", dimmed && "axis-dim")}>
      {left.trim() !== "" && (
        <LeftCell className="axis-title axis-context">
          <TracedText text={left} />
        </LeftCell>
      )}
      <TraceKey word={key} tail={tail} />
      <div className="axis-right axis-context">
        <span className="axis-title axis-title-line">
          <TracedText text={right} />
        </span>
        <p>
          <TracedText text={row.body} />
        </p>
      </div>
      <PageRef cite={row.cite} quote={row.quote} onReveal={onReveal} />
    </li>
  );
}

export function TitledList({ rows, onReveal }: TitledListProps) {
  return (
    <ul role="list" className="axis-list axis-list--apart">
      {rows.map((row) => (
        <TitledRow key={row.id} row={row} onReveal={onReveal} />
      ))}
    </ul>
  );
}
