import { COVER_LINES, LETTERING_BOX } from "./lettering";

export function CoverLettering() {
  return (
    <svg className="jacket-lettering" viewBox={LETTERING_BOX} aria-hidden="true" focusable="false">
      {COVER_LINES.map((line) => (
        <text
          key={line.text}
          x={line.x}
          y={line.baseline}
          fontSize={line.fontSize}
          textLength={line.textLength}
          lengthAdjust="spacingAndGlyphs"
        >
          {line.text}
        </text>
      ))}
    </svg>
  );
}
