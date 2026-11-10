import { book } from "@/content/origin-of-species";
import { HINT_FACET_LABEL, INSIGHT_FACET_LABEL, KIND_LABEL } from "./page-copy";
import type { TimelineEntry } from "./sample";

type TimelineRowProps = {
  entry: TimelineEntry;
  when: string;
  isHere: boolean;
};

const CITE = "clock-long mt-2 text-[1rem]/[1.4] font-medium text-clock-unread";
const TITLE = "text-[1.125rem]/[1.3] font-[650] md:text-[1.25rem]/[1.3]";

function facetOf(entry: TimelineEntry) {
  switch (entry.kind) {
    case "hint":
      return HINT_FACET_LABEL[entry.facet];
    case "insight":
      return INSIGHT_FACET_LABEL[entry.facet];
    case "quote":
    case "end":
      return null;
  }
}

function RowContent({ entry }: { entry: TimelineEntry }) {
  switch (entry.kind) {
    case "quote":
      return (
        <figure>
          <blockquote>
            <p className="clock-quote text-[1.0625rem]/[1.5] md:text-[1.25rem]/[1.5]">{entry.text}</p>
          </blockquote>
          <figcaption className={CITE}>{entry.cite}</figcaption>
        </figure>
      );
    case "hint":
    case "insight":
      return (
        <>
          <h3 className={TITLE}>{entry.title}</h3>
          <p className="mt-1">{entry.text}</p>
          <p className={CITE}>{entry.cite}</p>
        </>
      );
    case "end":
      return (
        <p>
          The text ends on page {book.text.to}. Pages {book.index.from} to {book.index.to} are the index.
        </p>
      );
  }
}

export function TimelineRow({ entry, when, isHere }: TimelineRowProps) {
  const facet = facetOf(entry);

  return (
    <li
      className="clock-row border-t border-clock-cell/55 py-7 md:grid md:grid-cols-[10rem_minmax(0,1fr)] md:items-baseline md:gap-x-8 lg:grid-cols-[11rem_9rem_minmax(0,38rem)]"
      data-here={isHere ? "" : undefined}
    >
      {isHere && <span className="clock-here">Darwin is here.</span>}
      <div className="flex items-baseline justify-between gap-4 md:block lg:contents">
        <p className="clock-when md:text-[1.25rem]">{when}</p>
        <p className="text-[0.9375rem]/[1.4] font-medium text-clock-unread max-md:text-right md:mt-1 lg:mt-0">
          {KIND_LABEL[entry.kind]}
          {facet && <span className="block">{facet}</span>}
        </p>
      </div>
      <div className="mt-3 min-w-0 max-w-[38rem] md:mt-0">
        <RowContent entry={entry} />
      </div>
    </li>
  );
}
