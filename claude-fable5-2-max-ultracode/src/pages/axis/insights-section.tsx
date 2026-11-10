import type { QuoteId } from "@/content/origin-of-species";
import { HEADS } from "./axis-copy";
import { INSIGHT_ROWS } from "./axis-rows";
import { SectionHead } from "./section-head";
import { TitledList } from "./titled-list";

export function InsightsSection({ onReveal }: { onReveal: (id: QuoteId) => void }) {
  return (
    <section className="axis-section" aria-labelledby={HEADS.insights.id}>
      <SectionHead {...HEADS.insights} />
      <TitledList rows={INSIGHT_ROWS} onReveal={onReveal} />
    </section>
  );
}
