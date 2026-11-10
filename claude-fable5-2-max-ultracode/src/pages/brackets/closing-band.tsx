import { useId } from "react";
import type { ReactNode } from "react";
import { JumpLink } from "@/components/jump-link";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { SAMPLE_ID } from "./ids";
import { OUTPUT_GLOSS, OUTPUTS } from "./product-copy";
import { UploadButton } from "./upload-button";
import { UploadNote } from "./upload-note";
import type { UploadSlot } from "./upload-slots";

type ClosingBandProps = {
  pick: PdfPick;
  onUpload: (slot: UploadSlot) => void;
  onPickAgain: () => void;
  onDismiss: () => void;
};

export function ClosingBand({ pick, onUpload, onPickAgain, onDismiss }: ClosingBandProps) {
  const headingId = useId();

  return (
    <section className="brackets-closing bg-brackets-shell" aria-labelledby={headingId}>
      <div className="brackets-wrap brackets-cols brackets-closing-grid">
        <h2 id={headingId} className="brackets-h2 brackets-closing-head">
          What happens to your PDF
        </h2>
        <ol role="list" className="brackets-steps">
          <Step numeral="1">You upload it.</Step>
          <Step numeral="2">Ratio&nbsp;Reader reads the whole thing.</Step>
          <Step numeral="3">
            You get four things back.
            <OutputDefinitions />
          </Step>
        </ol>
        <div className="brackets-actions brackets-closing-actions">
          <UploadButton slot="closing" onUpload={onUpload} />
          <JumpLink to={SAMPLE_ID} className="brackets-link">
            See the sample
          </JumpLink>
        </div>
        <UploadNote pick={pick} onPickAgain={onPickAgain} onDismiss={onDismiss}>
          Ratio&nbsp;Reader is for long, dense PDFs: papers, reports, contracts, textbooks, manuals.
          It is for students, researchers, analysts and anyone else handed a long document.
        </UploadNote>
      </div>
    </section>
  );
}

function Step({ numeral, children }: { numeral: string; children: ReactNode }) {
  return (
    <li>
      <span aria-hidden="true">{numeral}</span>
      <div>{children}</div>
    </li>
  );
}

function OutputDefinitions() {
  return (
    <dl className="brackets-outputs">
      {OUTPUTS.map(({ id, label }) => (
        <div key={id}>
          <dt className="brackets-apparatus">{label}</dt>
          <dd>{OUTPUT_GLOSS[id]}</dd>
        </div>
      ))}
    </dl>
  );
}
