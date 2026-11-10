import { secondsToRead } from "@/content/book-math";
import { formatDuration } from "./format-time";
import { wordsRead } from "./reading";
import { SAMPLE_COUNTS, TIMELINE, reachedCount } from "./sample";
import type { TimelineEntry } from "./sample";
import { TimelineRow } from "./timeline-row";
import { useClock } from "./use-clock";

function whenReached(entry: TimelineEntry, pace: number) {
  if (entry.wordsBefore === 0) return "At the start";
  return `About ${formatDuration(secondsToRead(entry.wordsBefore, pace))} in`;
}

export function Timeline() {
  const pace = useClock((clock) => clock.wordsPerMinute);
  const reached = useClock((clock) => reachedCount(wordsRead(clock)));
  const next = TIMELINE.at(reached);

  return (
    <section aria-labelledby="clock-map-title">
      <div className="clock-wrap px-4 pt-20 sm:px-8 md:pt-28 lg:px-12">
        <h2 id="clock-map-title" className="clock-h2">
          Hints, quotes and insights, where a straight read finds them.
        </h2>
        <div className="mt-4 max-w-[36rem] space-y-3">
          <p>
            For this book Ratio Reader returned {SAMPLE_COUNTS.hints} hints, {SAMPLE_COUNTS.quotes} quotes and{" "}
            {SAMPLE_COUNTS.insights} insights, all together with the summary. Here are all {SAMPLE_COUNTS.quotes}{" "}
            quotes, {SAMPLE_COUNTS.shownHints} of the hints and {SAMPLE_COUNTS.shownInsights} of the insights, each
            placed where a straight read would reach it.
          </p>
          <p className="text-clock-unread">
            A hint is a nudge for a hard part: what to read first, what a term means, what to watch for. A quote is
            a key passage, word for word, with its page number. An insight is a theme, a link between parts, or
            something that is missing.
          </p>
        </div>
        <ol className="mt-10">
          {TIMELINE.map((entry) => (
            <TimelineRow
              key={entry.id}
              entry={entry}
              when={whenReached(entry, pace)}
              isHere={entry.id === next?.id}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
