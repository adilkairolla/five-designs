import { pauseClock, resumeClock } from "./clock-store";
import { useClock } from "./use-clock";

const TOGGLE = {
  running: { verb: "Pause", press: pauseClock },
  paused: { verb: "Resume", press: resumeClock },
} as const;

export function PauseButton() {
  const status = useClock((clock) => clock.status);
  const { verb, press } = TOGGLE[status];

  return (
    <button
      type="button"
      className="clock-btn clock-btn-ghost min-w-20 max-sm:px-3 max-sm:text-[0.875rem] sm:min-w-40"
      onClick={press}
    >
      <span>
        {verb}
        <span className="max-sm:sr-only"> the clock</span>
      </span>
    </button>
  );
}
