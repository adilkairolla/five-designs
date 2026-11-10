import { HEADS, TRY_ROW } from "./axis-copy";
import { SAMPLE_ROWS } from "./axis-rows";
import { PlainRow } from "./plain-row";
import { SectionHead } from "./section-head";

export function SampleIntro() {
  return (
    <section
      id="axis-sample"
      tabIndex={-1}
      className="axis-section axis-section--flush"
      aria-labelledby={HEADS.sample.id}
    >
      <SectionHead {...HEADS.sample} />
      <ul role="list" className="axis-list axis-list--apart">
        {SAMPLE_ROWS.map((row) => (
          <PlainRow key={row.key} row={row} />
        ))}
        <PlainRow row={TRY_ROW} traced />
      </ul>
    </section>
  );
}
