import { citePages } from "@/content/book-math";
import { quotes } from "@/content/origin-of-species";
import type { QuoteId } from "@/content/origin-of-species";

type PageRefProps = { cite: string; quote: QuoteId | null; onReveal: (id: QuoteId) => void };

export function PageRef({ cite, quote, onReveal }: PageRefProps) {
  if (quote === null) return <span className="axis-ref axis-quiet">{cite}</span>;

  return (
    <button
      type="button"
      className="axis-ref axis-link axis-ref-link"
      aria-label={`${cite}: show the passage on ${citePages(quotes[quote].pages)}`}
      onClick={() => onReveal(quote)}
    >
      {cite}
    </button>
  );
}
