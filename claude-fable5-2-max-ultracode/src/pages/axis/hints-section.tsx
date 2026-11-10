import type { QuoteId } from "@/content/origin-of-species";
import { HEADS } from "./axis-copy";
import { HINT_ROWS } from "./axis-rows";
import type { TitledRowModel } from "./axis-rows";
import { SectionHead } from "./section-head";
import { TitledList } from "./titled-list";

type RevealPassage = (id: QuoteId) => void;
type HintsSectionProps = { terms: readonly TitledRowModel[]; onReveal: RevealPassage };

function KeyTerms({ rows, onReveal }: { rows: readonly TitledRowModel[]; onReveal: RevealPassage }) {
  return (
    <>
      <div className="axis-gap-1">
        <SectionHead {...HEADS.terms} level={3} />
      </div>
      <TitledList rows={rows} onReveal={onReveal} />
    </>
  );
}

export function HintsSection({ terms, onReveal }: HintsSectionProps) {
  return (
    <section className="axis-section" aria-labelledby={HEADS.hints.id}>
      <SectionHead {...HEADS.hints} />
      <TitledList rows={HINT_ROWS} onReveal={onReveal} />
      {terms.length > 0 && <KeyTerms rows={terms} onReveal={onReveal} />}
    </section>
  );
}
