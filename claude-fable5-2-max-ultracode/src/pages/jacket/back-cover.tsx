import { useId } from "react";
import type { QuoteId } from "@/content/origin-of-species";
import { CoverQuote } from "./cover-quote";
import { coverLines, quotedPageCount, unquotedPageCount } from "./jacket-sample";

type BackCoverProps = {
  markedQuote: QuoteId | null;
};

export function BackCover({ markedQuote }: BackCoverProps) {
  const titleId = useId();

  return (
    <section className="jacket-back-cover" aria-labelledby={titleId}>
      <h2 id={titleId} className="jacket-title">
        Quotes
      </h2>
      <p className="jacket-deck mt-2 text-pretty">
        A jacket prints its praise on the back cover. This one prints the book itself: {coverLines.length} passages,
        word for word, each with its page number.
      </p>
      <ol className="jacket-list jacket-list--quotes mt-8">
        {coverLines.map((line) => (
          <li key={line.id}>
            <CoverQuote line={line} marked={markedQuote === line.id} />
          </li>
        ))}
      </ol>
      <p className="jacket-blockhead text-balance">
        {coverLines.length}&nbsp;passages from {quotedPageCount}&nbsp;pages. The other {unquotedPageCount} are still
        yours to read.
      </p>
    </section>
  );
}
