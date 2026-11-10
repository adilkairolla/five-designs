import { cn } from "@/lib/cn";
import { BookPane } from "./book-pane";
import { BookStatus } from "./book-status";
import { ClockControls } from "./clock-controls";
import { ClosingLine } from "./closing-line";
import { Countdown } from "./countdown";
import { SummaryPane } from "./summary-pane";

const CAPTION = "text-[0.9375rem]/[1.4] font-medium text-clock-unread";

export function Fraction() {
  return (
    <section
      id="clock-sample"
      tabIndex={-1}
      aria-labelledby="clock-sample-title"
      className="-scroll-mt-4 outline-hidden"
    >
      <div className="clock-wrap px-4 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        <h2 id="clock-sample-title" className="sr-only">
          The book and its summary, read at the same pace
        </h2>
        <h3 className={CAPTION}>The book, read straight through.</h3>
        <BookPane />
        <BookStatus />
        <div aria-hidden className="mt-2 h-2.5 bg-clock-white md:h-3.5" />
        <div className="mt-1 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Countdown />
          <ClockControls />
        </div>
        {/* From xl the caption tucks into the countdown's empty descender space, so a 1280 by 800 window still shows what is counting down. */}
        <h3 className={cn("mt-6 xl:-mt-2", CAPTION)}>The summary, read at the same pace.</h3>
        <SummaryPane />
        <ClosingLine />
      </div>
    </section>
  );
}
