import type { Cut } from "./abridged-book";
import { BracketMark } from "./bracket-mark";
import { cutName } from "./format";
import { PANEL_ID } from "./ids";
import { pointHandlers } from "./point-handlers";
import type { Pointed, Target } from "./reader-types";

type CutBracketProps = {
  cut: Cut;
  isOpen: boolean;
  isMarked: boolean;
  onToggle: (target: Target) => void;
  onPoint: (pointed: Pointed) => void;
};

export function CutBracket({ cut, isOpen, isMarked, onToggle, onPoint }: CutBracketProps) {
  const target: Target = { kind: "cut", index: cut.index };

  return (
    <button
      type="button"
      className="brackets-cut"
      data-step="cut"
      data-marked={isMarked}
      aria-expanded={isOpen}
      aria-controls={PANEL_ID}
      aria-label={cutName(cut)}
      onClick={() => onToggle(target)}
      {...pointHandlers(onPoint, target)}
    >
      <BracketMark cut={cut} />
    </button>
  );
}
