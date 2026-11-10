import { book } from "@/content/origin-of-species";
import { INTRO_PAGES, bookPhase, introPageAt, pageAtWord } from "./book-position";
import { BookWindow } from "./book-window";
import { PageStrip } from "./page-strip";
import { wordsRead } from "./reading";
import { useClock } from "./use-clock";

const PAST_THE_SAMPLE = `The sample text ends here. This page carries the Introduction, pages ${book.text.from} to ${INTRO_PAGES.length}, and a straight read has gone past it. The counters go on.`;
const END_OF_TEXT = `A straight read has reached the end of the text on page ${book.text.to}. Pages ${book.index.from} to ${book.index.to} are the index.`;

export function BookPane() {
  const page = useClock((clock) => pageAtWord(wordsRead(clock)));
  const phase = useClock((clock) => bookPhase(wordsRead(clock)));
  const introPage = phase === "intro" ? introPageAt(page) : undefined;

  return (
    <div className="mt-2 grid gap-3 bg-clock-pane p-3 md:grid-cols-[24.5rem_minmax(0,1fr)] md:gap-x-6 md:p-4 xl:gap-x-10">
      {introPage ? (
        <BookWindow key={introPage.page} page={introPage} />
      ) : (
        <p className="clock-window text-[0.9375rem]/[1.3125rem]">{phase === "done" ? END_OF_TEXT : PAST_THE_SAMPLE}</p>
      )}
      <div className="flex min-w-0 flex-col justify-between gap-2">
        <PageStrip currentPage={page} />
        <p className="text-[0.875rem]/[1.4] text-clock-unread">One cell per page. The straight read is in amber.</p>
      </div>
    </div>
  );
}
