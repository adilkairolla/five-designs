import { citePages } from "@/content/book-math";
import type { PageSpan } from "@/content/origin-of-species";

type DarwinQuoteProps = {
  text: string;
  pages: PageSpan;
};

export function DarwinQuote({ text, pages }: DarwinQuoteProps) {
  return (
    <blockquote className="brackets-darwin">
      <p>
        “{text}”{"\u00A0"}
        <span className="brackets-cite">{citePages(pages)}</span>
      </p>
    </blockquote>
  );
}
