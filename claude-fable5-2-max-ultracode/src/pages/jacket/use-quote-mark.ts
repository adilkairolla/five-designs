import { useState } from "react";
import type { QuoteId } from "@/content/origin-of-species";
import { scrollToSection } from "@/lib/scroll-to-section";
import type { FlapSentence } from "./jacket-sample";

export function useQuoteMark() {
  const [markedQuote, setMarkedQuote] = useState<QuoteId | null>(null);

  const markQuote = (sentence: FlapSentence) => {
    setMarkedQuote(sentence.quote);
    scrollToSection(sentence.quoteAnchor);
  };

  return { markedQuote, markQuote };
}
