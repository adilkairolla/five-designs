import { JumpLink } from "@/components/jump-link";
import type { CoverLine } from "./jacket-sample";

type CoverQuoteProps = {
  line: CoverLine;
  marked: boolean;
};

export function CoverQuote({ line, marked }: CoverQuoteProps) {
  return (
    <figure
      id={line.anchor}
      tabIndex={-1}
      className="jacket-quote"
      data-marked={marked}
      aria-label={`Quote, ${line.cite}`}
      aria-current={marked ? "true" : undefined}
    >
      <blockquote>
        <p className="jacket-quote-text">{line.text}</p>
      </blockquote>
      <figcaption className="jacket-quote-cite">
        <span className="jacket-label jacket-quote-page">{line.cite}</span>
        {line.sentence ? (
          <JumpLink to={line.sentence.anchor} className="jacket-textlink">
            See sentence {line.sentence.number} of the summary
          </JumpLink>
        ) : null}
      </figcaption>
    </figure>
  );
}
