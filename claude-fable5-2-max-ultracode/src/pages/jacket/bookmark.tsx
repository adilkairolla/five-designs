import { useId, useState } from "react";
import { bookmarkHints } from "./jacket-sample";
import type { BookmarkHint } from "./jacket-sample";

type BookmarkPosition = "tucked" | "out";

const PULL_LABEL = {
  tucked: "Pull out the bookmark",
  out: "Tuck the bookmark back",
} as const satisfies Record<BookmarkPosition, string>;

const HINTS_NOTE =
  "The bookmark carries hints for this book: what to read first, what a term means, what to watch for.";

export function Bookmark() {
  const titleId = useId();
  const stripId = useId();
  const [position, setPosition] = useState<BookmarkPosition>("tucked");
  const toggle = () => setPosition(position === "out" ? "tucked" : "out");

  return (
    <section className="jacket-bookmark" data-position={position} aria-labelledby={titleId}>
      <button
        type="button"
        className="jacket-bookmark-pull"
        aria-expanded={position === "out"}
        aria-controls={stripId}
        onClick={toggle}
      >
        <span className="sr-only">{PULL_LABEL[position]}</span>
      </button>
      <div className="jacket-bookmark-slit" aria-hidden="true" />
      <div className="jacket-bookmark-lane">
        <p className="jacket-bookmark-note jacket-lead text-balance italic">{HINTS_NOTE}</p>
        <div className="jacket-bookmark-peek lg:motion-safe:animate-jacket-peek">
          <div id={stripId} className="jacket-bookmark-strip bg-jacket-magenta text-jacket-white">
            <div className="jacket-bookmark-end">
              <h2 id={titleId} className="jacket-bookmark-name">
                Hints
              </h2>
              <span className="jacket-label max-lg:hidden" aria-hidden="true">
                {PULL_LABEL.out}
              </span>
            </div>
            <p className="jacket-bookmark-deck jacket-deck text-pretty lg:hidden">{HINTS_NOTE}</p>
            <ul className="jacket-bookmark-hints">
              {bookmarkHints.map((hint) => (
                <BookmarkHintItem key={hint.title} hint={hint} />
              ))}
            </ul>
            <div className="jacket-bookmark-end max-lg:hidden" aria-hidden="true">
              <span className="jacket-bookmark-name">Hints</span>
              <span className="jacket-label jacket-bookmark-action">{PULL_LABEL.tucked}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type BookmarkHintItemProps = {
  hint: BookmarkHint;
};

function BookmarkHintItem({ hint }: BookmarkHintItemProps) {
  return (
    <li>
      <h3 className="jacket-subhead">{hint.title}</h3>
      <p className="jacket-body mt-1">
        {hint.text} <span className="jacket-label">{hint.cite}</span>
      </p>
    </li>
  );
}
