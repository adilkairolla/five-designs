import { cn } from "@/lib/cn";
import type { HeadCopy, PlainRowCopy } from "./axis-copy";
import { PlainRow } from "./plain-row";
import { SectionHead } from "./section-head";

type PlainSectionProps = {
  head: HeadCopy;
  rows: readonly PlainRowCopy[];
  ordered?: boolean;
  apart?: boolean;
};

export function PlainSection({ head, rows, ordered = false, apart = false }: PlainSectionProps) {
  const items = rows.map((row) => <PlainRow key={row.key} row={row} />);

  return (
    <section className="axis-section" aria-labelledby={head.id}>
      <SectionHead {...head} />
      {ordered ? (
        <ol role="list" className="axis-list">
          {items}
        </ol>
      ) : (
        <ul role="list" className={cn("axis-list", apart && "axis-list--apart")}>
          {items}
        </ul>
      )}
    </section>
  );
}
