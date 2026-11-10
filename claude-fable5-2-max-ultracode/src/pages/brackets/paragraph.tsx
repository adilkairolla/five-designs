import { Fragment } from "react";
import { cuts, keptFragments } from "./abridged-book";
import { CutBracket } from "./cut-bracket";
import { PageButton } from "./page-button";
import { isOpenAt } from "./reader-types";
import type { Marks, Opened, Pointed, Target } from "./reader-types";
import { stepFocus } from "./step-focus";

type ParagraphProps = {
  opened: Opened;
  marks: Marks;
  onToggle: (target: Target) => void;
  onPoint: (pointed: Pointed) => void;
};

const CUT_STOPS = '[data-step="cut"]';

export function Paragraph({ opened, marks, onToggle, onPoint }: ParagraphProps) {
  return (
    <blockquote>
      <p
        className="brackets-para text-brackets-black"
        onKeyDown={(event) => stepFocus(event, CUT_STOPS)}
      >
        {keptFragments.map((fragment) => {
          const cut = cuts[fragment.index];
          const isFragmentOpen = isOpenAt(opened, { kind: "fragment", index: fragment.index });
          const isFragmentMarked = isFragmentOpen || marks.fragments.includes(fragment.index);

          return (
            <Fragment key={fragment.quote}>
              <span className="brackets-frag" data-marked={isFragmentMarked}>
                {fragment.lead}
              </span>
              <span className="brackets-keep">
                <span className="brackets-frag" data-marked={isFragmentMarked}>
                  {fragment.last}
                </span>
                {"\u00A0"}
                <PageButton
                  fragment={fragment}
                  isOpen={isFragmentOpen}
                  isMarked={isFragmentMarked}
                  onToggle={onToggle}
                  onPoint={onPoint}
                />
              </span>{" "}
              {cut?.isIndex ? <br /> : null}
              {cut ? (
                <CutBracket
                  cut={cut}
                  isOpen={isOpenAt(opened, { kind: "cut", index: cut.index })}
                  isMarked={marks.cuts.includes(cut.index)}
                  onToggle={onToggle}
                  onPoint={onPoint}
                />
              ) : null}{" "}
            </Fragment>
          );
        })}
      </p>
    </blockquote>
  );
}
