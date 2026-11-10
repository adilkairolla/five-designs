import { book } from "@/content/origin-of-species";
import type { CssVars } from "./css-vars";
import { bandLineCount, PAGES_PER_BAND_LINE } from "./jacket-sample";
import { SpineRuler } from "./spine-ruler";

type SpineProps = {
  side: "left" | "right";
  duplicate?: boolean;
};

const RULER_VARS: CssVars = {
  "--jacket-pages": String(book.pages),
  "--jacket-page-groups": String(bandLineCount),
};

const SIDE_CLASS = {
  left: "jacket-spine border-jacket-fold",
  right: "jacket-spine jacket-spine--right border-jacket-fold",
} as const;

export function Spine({ side, duplicate }: SpineProps) {
  return (
    <div className={SIDE_CLASS[side]} style={RULER_VARS} aria-hidden={duplicate ? true : undefined}>
      <div className="jacket-spine-band">
        <p className="jacket-spine-lettering">
          <span className="jacket-spine-title">{book.title}</span>
          <span className="jacket-spine-line">{book.author}</span>
          <span className="jacket-spine-line lg:hidden">
            {book.pages} pages, one line for every {PAGES_PER_BAND_LINE}.
          </span>
          <span className="jacket-spine-line jacket-spine-measure max-lg:hidden">{book.pages} pages, one line each.</span>
        </p>
        <SpineRuler />
      </div>
    </div>
  );
}
