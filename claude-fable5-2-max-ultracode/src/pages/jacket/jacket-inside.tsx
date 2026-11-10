import { useId } from "react";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { approxBookWords, summaryWordCount } from "./jacket-sample";
import { UploadAction } from "./upload-action";

type JacketInsideProps = {
  pick: PdfPick;
  onUpload: () => void;
};

const STEPS = [
  { numeral: "1", text: "Upload a PDF." },
  { numeral: "2", text: "Ratio Reader reads the whole thing." },
  { numeral: "3", text: "You get its jacket: a summary, hints, quotes and insights." },
] as const;

const DEMO_NOTE =
  "This is a demo page, so a file you pick here goes nowhere. The sample jacket above shows what comes back.";

export function JacketInside({ pick, onUpload }: JacketInsideProps) {
  const headlineId = useId();

  return (
    <section className="jacket-inside bg-jacket-white" aria-labelledby={headlineId}>
      <div className="jacket-inside-main">
        <h2 id={headlineId} className="jacket-statement jacket-statement--inside">
          Nobody writes a jacket for a PDF.
        </h2>
        <p className="jacket-lead mt-6">
          A book comes wrapped in its own short version. The report, the contract, the paper and the manual arrive
          bare. Ratio Reader writes the missing jacket in three steps.
        </p>
        <ol className="jacket-steps mt-10" role="list">
          {STEPS.map((step) => (
            <li key={step.numeral} className="jacket-step">
              <span>{step.numeral}</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="jacket-inside-side">
        <UploadAction className="jacket-action--closing" pick={pick} onUpload={onUpload} emptyNote={DEMO_NOTE} />
        <p className="jacket-deck mt-8 text-pretty">
          Ratio means proportion. For this book the proportion is {summaryWordCount} words to about {approxBookWords}.
        </p>
      </div>
    </section>
  );
}
