import { cn } from "@/lib/cn";
import { formatClock } from "./format-time";
import { summaryIsFinished, summarySecondsLeft } from "./reading";
import { useClock } from "./use-clock";

const TONE = {
  counting: "text-clock-white",
  finished: "text-clock-amber",
} as const;

export function Countdown() {
  const finished = useClock(summaryIsFinished);
  const left = useClock((clock) => formatClock(summarySecondsLeft(clock) * 1000));

  return (
    <p className={cn("clock-countdown", finished ? TONE.finished : TONE.counting)}>
      {finished ? "Finished." : `${left} left.`}
    </p>
  );
}
