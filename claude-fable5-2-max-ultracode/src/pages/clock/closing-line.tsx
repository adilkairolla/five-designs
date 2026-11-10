import { book } from "@/content/origin-of-species";
import { pageAtWord } from "./book-position";
import { SUMMARY_WORDS, summaryDuration, summaryIsFinished } from "./reading";
import { useClock } from "./use-clock";

const FINISH_PAGE = pageAtWord(SUMMARY_WORDS);

export function ClosingLine() {
  const finished = useClock(summaryIsFinished);
  const pace = useClock((clock) => clock.wordsPerMinute);

  return (
    <p
      role="status"
      className="mt-6 min-h-20 max-w-[44rem] text-[1.0625rem]/[1.5] font-semibold md:min-h-14 md:text-[1.25rem]/[1.4]"
    >
      {finished && (
        <span className="block animate-clock-arrive motion-reduce:animate-none">
          <span className="inline-block">Summary read in about {summaryDuration(pace)}.</span>{" "}
          <span className="inline-block">
            Darwin was still on page {FINISH_PAGE} of {book.pages}, with {book.pages - FINISH_PAGE} to go.
          </span>
        </span>
      )}
    </p>
  );
}
