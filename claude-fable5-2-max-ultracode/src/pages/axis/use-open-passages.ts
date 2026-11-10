import { useState } from "react";
import type { QuoteId } from "@/content/origin-of-species";
import { scrollToSection } from "@/lib/scroll-to-section";

export type Passages = {
  isOpen: (id: QuoteId) => boolean;
  toggle: (id: QuoteId) => void;
  reveal: (id: QuoteId) => void;
};

const INITIALLY_OPEN: ReadonlySet<QuoteId> = new Set<QuoteId>(["name"]);

export function quoteLineId(id: QuoteId): string {
  return `axis-quote-${id}`;
}

export function useOpenPassages(): Passages {
  const [open, setOpen] = useState(INITIALLY_OPEN);

  return {
    isOpen: (id) => open.has(id),
    toggle: (id) =>
      setOpen((previous) => {
        const next = new Set(previous);
        if (!next.delete(id)) next.add(id);
        return next;
      }),
    reveal: (id) => {
      setOpen((previous) => new Set(previous).add(id));
      scrollToSection(quoteLineId(id));
    },
  };
}
