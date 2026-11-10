import { cn } from "@/lib/cn";
import type { HeadCopy } from "./axis-copy";
import { LeftCell } from "./left-cell";

type HeadLevel = 2 | 3;
type SectionHeadProps = HeadCopy & { level?: HeadLevel };

function HeadWord({ id, word, level }: { id: string; word: string; level: HeadLevel }) {
  if (level === 3) {
    return (
      <h3 id={id} className="axis-key">
        {word}
      </h3>
    );
  }
  return (
    <h2 id={id} className="axis-key">
      {word}
    </h2>
  );
}

export function SectionHead({ id, lead, word, note, level = 2 }: SectionHeadProps) {
  return (
    <>
      <div className={cn("axis-row axis-section-head", level === 2 ? "axis-head" : "axis-subhead")}>
        <LeftCell>{lead}</LeftCell>
        <HeadWord id={id} word={word} level={level} />
      </div>
      {note && (
        <div className="axis-row">
          <p className="axis-right">{note}</p>
        </div>
      )}
    </>
  );
}
