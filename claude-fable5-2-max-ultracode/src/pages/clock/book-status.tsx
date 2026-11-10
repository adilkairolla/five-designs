import { book } from "@/content/origin-of-species";
import { bookPhase, pageAtWord } from "./book-position";
import { formatDuration } from "./format-time";
import { bookSecondsLeft, wordsRead } from "./reading";
import { useClock } from "./use-clock";

export function BookStatus() {
  const page = useClock((clock) => pageAtWord(wordsRead(clock)));
  const done = useClock((clock) => bookPhase(wordsRead(clock)) === "done");
  const left = useClock((clock) => formatDuration(Math.max(1, bookSecondsLeft(clock))));

  return (
    <p className="clock-status mt-3 md:text-[1.0625rem] xl:text-[1.1875rem]">
      <span>{done ? "Finished." : "Still reading."}</span>{" "}
      <span>
        Page {page} of {book.pages}.
      </span>{" "}
      <span>{done ? "Nothing left." : `About ${left} left.`}</span>
    </p>
  );
}
