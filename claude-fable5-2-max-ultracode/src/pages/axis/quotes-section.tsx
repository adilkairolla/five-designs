import { HEADS } from "./axis-copy";
import type { QuoteRow, WindowBudget } from "./axis-rows";
import { QuoteLine } from "./quote-line";
import { SectionHead } from "./section-head";
import type { Passages } from "./use-open-passages";

type QuotesSectionProps = { rows: readonly QuoteRow[]; budget: WindowBudget; passages: Passages };

export function QuotesSection({ rows, budget, passages }: QuotesSectionProps) {
  return (
    <section className="axis-section" aria-labelledby={HEADS.quotes.id}>
      <SectionHead {...HEADS.quotes} />
      <ul role="list" className="axis-list">
        {rows.map((row) => (
          <QuoteLine
            key={row.id}
            row={row}
            budget={budget}
            open={passages.isOpen(row.id)}
            onToggle={() => passages.toggle(row.id)}
          />
        ))}
      </ul>
    </section>
  );
}
