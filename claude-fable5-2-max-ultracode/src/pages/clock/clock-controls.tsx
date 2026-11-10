import { JumpLink } from "@/components/jump-link";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { restartClock, seekClock } from "./clock-store";
import { formatClock } from "./format-time";
import { summaryFinishMs, summaryIsFinished } from "./reading";
import { useClock } from "./use-clock";

export function ClockControls() {
  const still = usePrefersReducedMotion();
  const finished = useClock(summaryIsFinished);
  const pace = useClock((clock) => clock.wordsPerMinute);

  const skipOrStartAgain = () => {
    if (finished) restartClock();
    else seekClock(summaryFinishMs(pace));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {!still && (
        <button
          type="button"
          className="clock-btn clock-btn-ghost min-w-34"
          aria-label={finished ? `Start again from ${formatClock(0)}` : "Skip to the end of the summary"}
          onClick={skipOrStartAgain}
        >
          {finished ? "Start again" : "Skip to the end"}
        </button>
      )}
      <JumpLink to="clock-pace" className="clock-btn clock-btn-ghost">
        Use my pace
      </JumpLink>
    </div>
  );
}
