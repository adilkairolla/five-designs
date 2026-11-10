import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { AVERAGE_WORDS_PER_MINUTE } from "@/content/book-math";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { restartClock } from "./clock-store";
import { PacePassage } from "./pace-passage";
import { paceStatus } from "./page-copy";
import { paceIsAverage } from "./reading";
import { PACE_PASSAGE } from "./sample";
import { useClock } from "./use-clock";
import { usePaceTest } from "./use-pace-test";
import type { PaceTest } from "./use-pace-test";

const PRIMARY_LABEL: Record<PaceTest["phase"], string> = {
  idle: "Time my reading",
  timing: "Done",
  result: "Time me again",
};

type PaceSectionProps = {
  onSeeSample: () => void;
};

export function PaceSection({ onSeeSample }: PaceSectionProps) {
  const { test, start, finish, cancel, backToAverage } = usePaceTest(PACE_PASSAGE.wordCount);
  const still = usePrefersReducedMotion();
  const pace = useClock((clock) => clock.wordsPerMinute);
  const primaryRef = useRef<HTMLButtonElement>(null);

  const isTiming = test.phase === "timing";
  const usesOwnPace = !paceIsAverage(pace) && !isTiming;

  const cancelTiming = () => {
    cancel();
    primaryRef.current?.focus();
  };
  const cancelOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape" && isTiming) cancelTiming();
  };
  const returnToAverage = () => {
    backToAverage();
    primaryRef.current?.focus();
  };
  const watchAgain = () => {
    restartClock();
    onSeeSample();
  };

  return (
    <section
      id="clock-pace"
      tabIndex={-1}
      aria-labelledby="clock-pace-title"
      className="mt-20 -scroll-mt-4 bg-clock-pane py-16 outline-hidden md:mt-28 md:py-24"
      onKeyDown={cancelOnEscape}
    >
      <div className="clock-wrap px-4 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-12">
          <div>
            <h2 id="clock-pace-title" className="clock-h2">
              This page can read at your pace.
            </h2>
            <p className="mt-4 max-w-[36rem]">
              It starts at {AVERAGE_WORDS_PER_MINUTE} words a minute, an average pace for silent reading. Time
              yourself on {PACE_PASSAGE.wordCount} words of Darwin and every time on this page will use your pace
              instead.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                ref={primaryRef}
                type="button"
                className="clock-btn clock-btn-primary min-w-38"
                onClick={isTiming ? finish : start}
              >
                {PRIMARY_LABEL[test.phase]}
              </button>
              {isTiming && (
                <button type="button" className="clock-btn clock-btn-ghost" onClick={cancelTiming}>
                  Cancel
                </button>
              )}
            </div>
            <p role="status" className="mt-4 min-h-22 max-w-[36rem] text-[0.9375rem]/[1.45] sm:min-h-11 lg:min-h-17">
              {paceStatus(test, pace)}
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <PacePassage veiled={test.phase === "idle"} />
            <div className={cn("flex flex-wrap gap-2 lg:mt-4 lg:min-h-11", usesOwnPace && "mt-4")}>
              {usesOwnPace && (
                <button type="button" className="clock-btn clock-btn-ghost" onClick={returnToAverage}>
                  Use {AVERAGE_WORDS_PER_MINUTE} words a minute
                </button>
              )}
              {usesOwnPace && !still && (
                <button type="button" className="clock-btn clock-btn-ghost" onClick={watchAgain}>
                  Watch it again at my pace
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
