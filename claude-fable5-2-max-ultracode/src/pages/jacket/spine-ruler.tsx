import type { CssVars } from "./css-vars";
import { rulerMarks } from "./jacket-sample";

function markAt(page: number): CssVars {
  return { "--jacket-at": String(page) };
}

export function SpineRuler() {
  return (
    <div className="jacket-ruler" aria-hidden="true">
      {rulerMarks.map((page) => (
        <span key={page} className="jacket-ruler-mark" style={markAt(page)}>
          {page}
        </span>
      ))}
    </div>
  );
}
