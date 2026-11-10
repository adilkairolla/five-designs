import { useId } from "react";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { LESSON_IDS, YOUR_PDF_LINES } from "./lessons";
import { UploadButton } from "./upload-button";
import { UploadStatus } from "./upload-status";
import { useUploadRetry } from "./use-upload-retry";

type LessonYourPdfProps = {
  pick: PdfPick;
  onUpload: () => void;
};

function WhatHappensNext() {
  return (
    <div className="max-w-[34rem] text-base leading-[1.6] lg:text-[1.0625rem]">
      <h3 className="text-2xl leading-tight font-bold text-balance lg:-mt-1">
        Here is what happens next.
      </h3>
      <ol className="mt-5 list-decimal space-y-2 ps-5">
        <li>You upload a PDF.</li>
        <li>Ratio Reader reads the whole thing.</li>
        <li>You get a summary, hints, quotes and insights.</li>
      </ol>
      <p className="mt-6">
        It suits long, dense PDFs: papers, reports, contracts, textbooks and manuals, and the
        students, researchers, analysts and others who are handed them.
      </p>
      <p className="mt-4">
        You still do the reading. Ratio Reader tells you which pages need it most, and you can
        check its work against the page numbers.
      </p>
    </div>
  );
}

export function LessonYourPdf({ pick, onUpload }: LessonYourPdfProps) {
  const headingId = useId();
  const [uploadButton, chooseAnother] = useUploadRetry(onUpload);

  return (
    <section
      id={LESSON_IDS.yourPdf}
      tabIndex={-1}
      aria-labelledby={headingId}
      className="primer-plain-spread mt-16 border-t-2 border-primer-ink px-4 pt-8 focus:outline-hidden sm:px-10 lg:mt-24 lg:px-12 lg:pt-12"
    >
      <div className="@container">
        <h2 id={headingId} className="primer-lesson-label mb-3">
          Lesson 6<span className="sr-only">: Your PDF</span>
        </h2>
        <div className="primer-big-lines">
          {YOUR_PDF_LINES.map((line) => (
            <p key={line} className="primer-big-line">
              {line}
            </p>
          ))}
          <UploadButton ref={uploadButton} size="sentence" onClick={onUpload} />
        </div>
        <UploadStatus pick={pick} onChooseAnother={chooseAnother} />
      </div>
      <WhatHappensNext />
    </section>
  );
}
