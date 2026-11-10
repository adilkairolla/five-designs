import { citePages } from "@/content/book-math";
import type { PageSpan } from "@/content/origin-of-species";
import { cn } from "@/lib/cn";
import { spokenPages } from "./book-figures";

type CitePlacement = "end" | "below";

type PageCiteProps = {
  pages: PageSpan;
  placement?: CitePlacement;
};

const PLACEMENT_CLASS = {
  end: "float-right ms-[1.5em]",
  below: "block text-right",
} as const satisfies Record<CitePlacement, string>;

export function PageCite({ pages, placement = "end" }: PageCiteProps) {
  return (
    <span
      className={cn("font-normal whitespace-nowrap not-italic", PLACEMENT_CLASS[placement])}
    >
      <span aria-hidden="true">{citePages(pages)}</span>
      <span className="sr-only">{spokenPages(pages)}</span>
    </span>
  );
}
