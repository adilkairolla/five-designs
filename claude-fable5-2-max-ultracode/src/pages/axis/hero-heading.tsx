import { HERO_ROWS } from "./axis-copy";
import { heroRowVars } from "./css-vars";
import { LeftCell } from "./left-cell";

export function HeroHeading() {
  return (
    <h1 className="axis-hero">
      {HERO_ROWS.map((row, index) => (
        <span key={row.key} className="axis-row axis-head axis-hero-row" style={heroRowVars(index, row.left)}>
          <LeftCell>{row.left}</LeftCell>
          <span className="axis-key">{row.key}</span>
          <span className="axis-right">{row.right}</span>
        </span>
      ))}
    </h1>
  );
}
