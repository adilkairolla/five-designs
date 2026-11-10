import { cn } from "@/lib/cn";
import { PACE_PASSAGE } from "./sample";
import { Words } from "./words";

type PacePassageProps = {
  veiled: boolean;
};

export function PacePassage({ veiled }: PacePassageProps) {
  return (
    <figure className="bg-clock-ground p-4 md:p-6">
      {/* Always rendered, so the box is passage-sized before the timer starts and cannot grow under the button. */}
      <blockquote aria-hidden={veiled || undefined} className={cn(veiled && "clock-veiled")}>
        <p className="clock-quote text-[1.0625rem]/[1.6] md:text-[1.25rem]/[1.6]">
          <Words words={PACE_PASSAGE.words} />
        </p>
      </blockquote>
      <figcaption className="clock-long mt-3 text-[1rem]/[1.4] font-medium text-clock-unread">
        {veiled
          ? `${PACE_PASSAGE.wordCount} words from page ${PACE_PASSAGE.page} appear here when you start.`
          : PACE_PASSAGE.cite}
      </figcaption>
    </figure>
  );
}
