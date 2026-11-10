import type { PlainRowCopy } from "./axis-copy";
import { withTail } from "./kwic";
import { LeftCell } from "./left-cell";
import { TraceKey } from "./trace-key";

type PlainRowProps = { row: PlainRowCopy; traced?: boolean };

export function PlainRow({ row, traced = false }: PlainRowProps) {
  const parts = withTail(row);

  return (
    <li className="axis-row">
      {parts.left.trim() !== "" && <LeftCell>{parts.left}</LeftCell>}
      {traced ? (
        <TraceKey word={parts.key} tail={parts.tail} />
      ) : (
        <span className="axis-key">
          {parts.key}
          {parts.tail}
        </span>
      )}
      {parts.right.trim() !== "" && <span className="axis-right">{parts.right}</span>}
    </li>
  );
}
