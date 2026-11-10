import { JumpLink } from "@/components/jump-link";
import { cn } from "@/lib/cn";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { HeroLines } from "./hero-lines";
import { LESSON_IDS } from "./lessons";
import { NewWords } from "./new-words";
import { UploadButton } from "./upload-button";
import { UploadStatus } from "./upload-status";
import { useUploadRetry } from "./use-upload-retry";

type LessonPdfProps = {
  pick: PdfPick;
  onUpload: () => void;
};

export function LessonPdf({ pick, onUpload }: LessonPdfProps) {
  const [uploadButton, chooseAnother] = useUploadRetry(onUpload);

  return (
    <section
      id={LESSON_IDS.pdf}
      tabIndex={-1}
      aria-label="Lesson 1: The PDF"
      className="primer-plain-spread px-4 pt-4 focus:outline-hidden sm:px-10 sm:pt-6 lg:px-12"
    >
      <div className="@container">
        <p className="primer-lesson-label mb-3">Lesson 1</p>
        <HeroLines />
        <p className="mt-6 max-w-[34rem] text-lg leading-normal text-balance sm:mt-7 sm:text-xl">
          Ratio Reader reads your whole PDF and gives you four things: a&nbsp;summary, hints, quotes
          and insights.
        </p>
        <div className="mt-6 grid justify-items-start gap-y-3 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6">
          <UploadButton ref={uploadButton} size="regular" onClick={onUpload} />
          <JumpLink
            to={LESSON_IDS.summary}
            className={cn(
              "primer-text-button inline-flex min-h-11 items-center text-lg",
              pick.status !== "empty" && "max-lg:invisible",
            )}
          >
            See a sample
          </JumpLink>
        </div>
        {/* Stacked, the message takes over the link's row: -mt-11 undoes its min-h-11. */}
        <UploadStatus className="max-lg:-mt-11" pick={pick} onChooseAnother={chooseAnother} />
      </div>
      <NewWords />
    </section>
  );
}
