import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { formatClock, formatCount } from "./format-time";
import { clockLead } from "./page-copy";
import { BOOK_WORDS, wordsRead } from "./reading";
import { useClock } from "./use-clock";

export function LiveSentence() {
  const still = usePrefersReducedMotion();
  const reading = useClock((clock) => formatClock(clock.elapsedMs));
  const word = useClock((clock) => formatCount(Math.max(1, wordsRead(clock))));
  const touched = useClock((clock) => clock.touched);

  return (
    <p className="mt-1">
      <span className="clock-live clock-short">
        <span>{clockLead(still, touched)}</span> <span>{reading}.</span>
      </span>{" "}
      <span className="clock-live clock-long">
        <span>Of about {formatCount(BOOK_WORDS)} words,</span> <span>Darwin is on word {word}.</span>
      </span>
    </p>
  );
}
