import { useId } from "react";
import { book } from "@/content/origin-of-species";
import type { QuoteId } from "@/content/origin-of-species";
import { flapSentences, summaryWordCount } from "./jacket-sample";
import type { FlapSentence } from "./jacket-sample";

type FlapSummaryProps = {
  markedQuote: QuoteId | null;
  onCite: (sentence: FlapSentence) => void;
};

export function FlapSummary({ markedQuote, onCite }: FlapSummaryProps) {
  const titleId = useId();

  return (
    <section id="jacket-summary" tabIndex={-1} className="scroll-mt-6 focus:outline-hidden" aria-labelledby={titleId}>
      <h2 id={titleId} className="jacket-title">
        Summary
      </h2>
      <p className="jacket-deck mt-1.5">
        The front flap says what the book says, in {summaryWordCount} words for {book.pages} pages. Press a page number
        to see its quote on the back cover.
      </p>
      <p className="jacket-body mt-3.5">
        {flapSentences.map((sentence) => (
          <span key={sentence.anchor} id={sentence.anchor} tabIndex={-1} className="jacket-sentence">
            {sentence.opening}
            <span className="whitespace-nowrap">
              {sentence.lastWord}&nbsp;
              <button
                type="button"
                className="jacket-cite"
                aria-label={`${sentence.cite}: show this quote on the back cover`}
                aria-current={markedQuote === sentence.quote ? "true" : undefined}
                onClick={() => onCite(sentence)}
              >
                {sentence.cite}
              </button>
            </span>{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
