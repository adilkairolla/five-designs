import { useRef } from "react";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { AVERAGE_WORDS_PER_MINUTE } from "@/content/book-math";
import { LiveSentence } from "./live-sentence";
import { offerText } from "./page-copy";
import { UploadStatus } from "./upload-status";
import { useClock } from "./use-clock";

type HeroProps = {
  pick: PdfPick;
  active: boolean;
  onUpload: () => void;
  onSeeSample: () => void;
};

export function Hero({ pick, active, onUpload, onSeeSample }: HeroProps) {
  const pace = useClock((clock) => clock.wordsPerMinute);
  const uploadRef = useRef<HTMLButtonElement>(null);

  const pickAgain = () => {
    uploadRef.current?.focus();
    onUpload();
  };

  return (
    <section aria-labelledby="clock-h1">
      <div className="clock-wrap px-4 pt-5 sm:px-8 lg:px-12">
        <h1 id="clock-h1" className="clock-h1">
          <span>Upload a long PDF.</span> <span>Start with the summary.</span>
        </h1>
        <LiveSentence />
        {/* The negative margin lets the reserved status slot hang into the space beside the caption below. */}
        <div className="mt-5 lg:-mb-8 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-x-16 xl:-mb-4 xl:grid-cols-[36rem_minmax(0,1fr)]">
          {/* The hidden copy is the paragraph at its longest, so a faster pace cannot take a line away. */}
          <p className="grid max-w-[36rem]">
            <span aria-hidden className="invisible col-start-1 row-start-1">
              {offerText(AVERAGE_WORDS_PER_MINUTE)}
            </span>
            <span className="col-start-1 row-start-1">{offerText(pace)}</span>
          </p>
          <div className="mt-5 lg:mt-0">
            <div className="flex flex-wrap gap-2">
              <button
                ref={uploadRef}
                type="button"
                className="clock-btn clock-btn-primary px-5 max-sm:min-h-12"
                onClick={onUpload}
              >
                Upload a PDF
              </button>
              <button type="button" className="clock-btn clock-btn-ghost px-5 max-sm:min-h-12" onClick={onSeeSample}>
                See the sample
              </button>
            </div>
            <UploadStatus
              variant="inline"
              pick={pick}
              active={active}
              onPickAgain={pickAgain}
              className="mt-2 min-h-24 max-w-[36rem] sm:min-h-19 lg:min-h-24 xl:min-h-19"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
