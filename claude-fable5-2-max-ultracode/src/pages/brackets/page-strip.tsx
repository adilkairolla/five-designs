import { book } from "@/content/origin-of-species";
import {
  cutPageCount,
  cuts,
  keptFragments,
  keptPageCount,
  stripSegment,
  stripTick,
} from "./abridged-book";
import type { Cut } from "./abridged-book";
import { cutName } from "./format";
import { pointHandlers } from "./point-handlers";
import { isOpenAt } from "./reader-types";
import type { Marks, Opened, Pointed, Target } from "./reader-types";

type PageStripProps = {
  opened: Opened;
  marks: Marks;
  onToggle: (target: Target) => void;
  onPoint: (pointed: Pointed) => void;
};

export function PageStrip({ opened, marks, onToggle, onPoint }: PageStripProps) {
  return (
    <figure className="brackets-strip">
      <div className="brackets-strip-bar" aria-hidden="true">
        {cuts.map((cut) => (
          <StripSegment
            key={cut.pages.from}
            cut={cut}
            isOpen={isOpenAt(opened, { kind: "cut", index: cut.index })}
            isMarked={marks.cuts.includes(cut.index)}
            onToggle={onToggle}
            onPoint={onPoint}
          />
        ))}
        {keptFragments.map((fragment) => (
          <span key={fragment.quote} className="brackets-strip-kept" style={stripTick(fragment)} />
        ))}
      </div>
      <figcaption className="brackets-strip-caption">
        {keptPageCount} pages quoted (black) + {cutPageCount} cut = {book.pages}, drawn to scale.
      </figcaption>
    </figure>
  );
}

type StripSegmentProps = {
  cut: Cut;
  isOpen: boolean;
  isMarked: boolean;
  onToggle: (target: Target) => void;
  onPoint: (pointed: Pointed) => void;
};

function StripSegment({ cut, isOpen, isMarked, onToggle, onPoint }: StripSegmentProps) {
  const target: Target = { kind: "cut", index: cut.index };

  return (
    <button
      type="button"
      tabIndex={-1}
      className="brackets-strip-cut"
      style={stripSegment(cut)}
      data-open={isOpen}
      data-marked={isMarked}
      aria-label={cutName(cut)}
      // The bar is hidden from assistive technology, so a click must not move focus into it.
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => onToggle(target)}
      {...pointHandlers(onPoint, target)}
    />
  );
}
