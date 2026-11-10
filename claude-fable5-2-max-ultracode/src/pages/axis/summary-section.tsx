import type { QuoteId } from "@/content/origin-of-species";
import { cn } from "@/lib/cn";
import { HEADS } from "./axis-copy";
import { SUMMARY_ROWS } from "./axis-rows";
import type { SummaryRow } from "./axis-rows";
import { LeftCell } from "./left-cell";
import { PageRef } from "./page-ref";
import { SectionHead } from "./section-head";
import { useRowDimmed } from "./trace-context";
import { TraceKey } from "./trace-key";
import { TracedText } from "./traced-text";

type RevealPassage = (id: QuoteId) => void;

function SummaryEntry({ row, onReveal }: { row: SummaryRow; onReveal: RevealPassage }) {
  const dimmed = useRowDimmed(row.text);

  return (
    <li className={cn("axis-row", dimmed && "axis-dim")}>
      <LeftCell className="axis-quiet">{row.locator}</LeftCell>
      <TraceKey word={row.key} />
      <p className="axis-right axis-context">
        <TracedText text={row.text} own={row.key} />
      </p>
      <PageRef cite={row.cite} quote={row.quote} onReveal={onReveal} />
    </li>
  );
}

export function SummarySection({ onReveal }: { onReveal: RevealPassage }) {
  return (
    <section className="axis-section" aria-labelledby={HEADS.summary.id}>
      <SectionHead {...HEADS.summary} />
      <ul role="list" className="axis-list axis-list--apart">
        {SUMMARY_ROWS.map((row) => (
          <SummaryEntry key={row.id} row={row} onReveal={onReveal} />
        ))}
      </ul>
    </section>
  );
}
