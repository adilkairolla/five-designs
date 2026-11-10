import { citePages } from "@/content/book-math";
import type { KeptFragment } from "./abridged-book";
import { PANEL_ID } from "./ids";
import { pointHandlers } from "./point-handlers";
import type { Pointed, Target } from "./reader-types";

type PageButtonProps = {
  fragment: KeptFragment;
  isOpen: boolean;
  isMarked: boolean;
  onToggle: (target: Target) => void;
  onPoint: (pointed: Pointed) => void;
};

export function PageButton({ fragment, isOpen, isMarked, onToggle, onPoint }: PageButtonProps) {
  const target: Target = { kind: "fragment", index: fragment.index };

  return (
    <button
      type="button"
      className="brackets-page"
      data-marked={isMarked}
      aria-expanded={isOpen}
      aria-controls={PANEL_ID}
      onClick={() => onToggle(target)}
      {...pointHandlers(onPoint, target)}
    >
      {citePages(fragment.page)}
      <span className="sr-only">: show the whole sentence</span>
    </button>
  );
}
