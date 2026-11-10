import { hints } from "@/content/origin-of-species";
import { capitalize, numberWord } from "./book-figures";
import { ANCHORED_HINTS, HINT_KIND_LABEL } from "./hint-anchors";
import type { HintAnchor } from "./hint-anchors";
import { PageCite } from "./page-cite";

function HintAnchorLine({ anchor }: { anchor: HintAnchor }) {
  switch (anchor.kind) {
    case "quote":
      return (
        <blockquote className="flow-root italic">
          {anchor.text} <PageCite pages={anchor.pages} />
        </blockquote>
      );
    case "chapter":
      return (
        <p className="flow-root italic">
          {`Chapter ${anchor.numeral}: ${anchor.title}`} <PageCite pages={anchor.pages} />
        </p>
      );
  }
}

export function HintsPage() {
  return (
    <>
      <ul className="space-y-8">
        {ANCHORED_HINTS.map(({ hint, anchor }) => (
          <li key={hint.title}>
            <HintAnchorLine anchor={anchor} />
            <div className="mt-2 ps-6 lg:ps-12">
              <p className="text-sm leading-normal">Hint: {HINT_KIND_LABEL[hint.kind]}</p>
              <p className="font-bold text-balance">{hint.title}</p>
              <p>{hint.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm leading-normal text-balance">
        {`${capitalize(numberWord(ANCHORED_HINTS.length))} of the ${numberWord(hints.length)} hints Ratio\u00A0Reader returns for this book.`}
      </p>
    </>
  );
}
