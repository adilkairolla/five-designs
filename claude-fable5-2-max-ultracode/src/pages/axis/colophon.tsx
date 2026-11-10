import { FOOTER_ROWS } from "./axis-copy";
import { PlainRow } from "./plain-row";
import { Wordmark } from "./wordmark";

export function Colophon() {
  return (
    <footer className="axis-colophon">
      <ul role="list" className="axis-list--apart">
        {FOOTER_ROWS.map((row) => (
          <PlainRow key={row.key} row={row} />
        ))}
      </ul>
      <div className="axis-row axis-gap-1">
        <Wordmark />
      </div>
    </footer>
  );
}
