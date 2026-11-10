import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { getClockState, subscribeClock } from "./clock-store";
import { viewOf, wordsRead } from "./reading";

/**
 * Marks the words of a pane that the clock has already read, by writing one
 * `data-read` attribute per word outside React. `firstWord` is the pane's
 * first word counted from the start of the text being read.
 */
export function useReadProgress(pane: RefObject<HTMLElement | null>, firstWord: number, wordCount: number) {
  const still = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const element = pane.current;
    if (!element) return;

    const words = element.querySelectorAll<HTMLElement>(".clock-word");
    const readNow = () => Math.min(wordCount, Math.max(0, wordsRead(viewOf(getClockState(), still)) - firstWord));

    let marked = readNow();
    words.forEach((word, index) => word.toggleAttribute("data-read", index < marked));

    const mark = () => {
      const read = readNow();
      for (; marked < read; marked += 1) words[marked]?.setAttribute("data-read", "");
      for (; marked > read; marked -= 1) words[marked - 1]?.removeAttribute("data-read");
    };

    return subscribeClock(mark);
  }, [pane, firstWord, wordCount, still]);
}
