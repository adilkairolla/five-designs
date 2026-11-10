import { useRef } from "react";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { bookDuration, summaryDuration } from "./reading";
import { UploadStatus } from "./upload-status";
import { useClock } from "./use-clock";

type ClosingProps = {
  pick: PdfPick;
  active: boolean;
  onUpload: () => void;
  onSeeSample: () => void;
};

export function Closing({ pick, active, onUpload, onSeeSample }: ClosingProps) {
  const pace = useClock((clock) => clock.wordsPerMinute);
  const uploadRef = useRef<HTMLButtonElement>(null);

  const pickAgain = () => {
    uploadRef.current?.focus();
    onUpload();
  };

  return (
    <section aria-labelledby="clock-closing-title">
      <div className="clock-wrap px-4 pt-20 pb-6 sm:px-8 md:pt-28 md:pb-10 lg:px-12">
        <p className="text-clock-unread">Ratio is Latin for reckoning. This page’s reckoning, in full:</p>
        <h2 id="clock-closing-title" className="mt-4">
          <span className="clock-premise clock-long">The book takes about {bookDuration(pace)}.</span>{" "}
          <span className="clock-premise clock-short">The summary takes about {summaryDuration(pace)}.</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            ref={uploadRef}
            type="button"
            className="clock-btn clock-btn-primary min-h-14 px-6 text-[1.125rem]"
            onClick={onUpload}
          >
            Upload a PDF
          </button>
          {active && pick.status === "picked" && (
            <button type="button" className="clock-btn clock-btn-ghost" onClick={onSeeSample}>
              See the sample
            </button>
          )}
        </div>
        <UploadStatus
          variant="inline"
          pick={pick}
          active={active}
          onPickAgain={pickAgain}
          className="mt-2 min-h-24 max-w-[36rem] sm:min-h-19"
        />
      </div>
    </section>
  );
}
