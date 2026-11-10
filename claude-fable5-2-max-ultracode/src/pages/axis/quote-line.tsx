import { book } from "@/content/origin-of-species";
import { quoteParts, windowOf } from "./axis-rows";
import type { QuoteRow, WindowBudget } from "./axis-rows";
import { LeftCell } from "./left-cell";
import { useRowDimmed, useTrace } from "./trace-context";
import { TraceKey } from "./trace-key";
import { TracedText } from "./traced-text";
import { quoteLineId } from "./use-open-passages";

type QuoteLineProps = { row: QuoteRow; budget: WindowBudget; open: boolean; onToggle: () => void };

function passageId(row: QuoteRow) {
  return `axis-passage-${row.id}`;
}

function QuotePassage({ row }: { row: QuoteRow }) {
  return (
    <div className="axis-row axis-passage-row">
      <blockquote id={passageId(row)} className="axis-passage">
        <p className="axis-context">
          <TracedText text={row.text} />
        </p>
        <footer className="axis-quiet">
          {book.author}, {book.title}, <span className="axis-ref">{row.cite}</span>
        </footer>
      </blockquote>
    </div>
  );
}

export function QuoteLine({ row, budget, open, onToggle }: QuoteLineProps) {
  const { state } = useTrace();
  const dimmed = useRowDimmed(row.text);
  const parts = quoteParts(row, state.status === "tracing" ? state.word.stem : null);
  const shown = windowOf(parts, budget);

  return (
    <li className={dimmed ? "axis-dim" : undefined}>
      <q id={quoteLineId(row.id)} tabIndex={-1} className="axis-row axis-line">
        <LeftCell className="axis-context">
          <TracedText text={shown.left} />
        </LeftCell>
        <TraceKey word={parts.key} tail={parts.tail} />
        {shown.right.trim() !== "" && (
          <span className="axis-right axis-context">
            <TracedText text={shown.right} />
          </span>
        )}
        <button
          type="button"
          className="axis-ref axis-link axis-open"
          aria-expanded={open}
          aria-controls={open ? passageId(row) : undefined}
          aria-label={`${row.cite}: the whole passage`}
          onClick={onToggle}
        >
          {row.cite}
        </button>
      </q>
      {open && <QuotePassage row={row} />}
    </li>
  );
}
