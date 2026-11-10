import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { getClockState, subscribeClock } from "./clock-store";
import { viewOf, wordsRead } from "./reading";

/**
 * Pages a fixed-height viewport forward a screen at a time so the word being
 * read is always visible. The last line read opens the next screen, so the eye
 * keeps its place. The viewport must be positioned, a whole number of lines
 * tall, and hold its text in one child element.
 */
export function useKeepReadWordInView(
  viewport: RefObject<HTMLElement | null>,
  firstWord: number,
  wordCount: number,
) {
  const still = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const box = viewport.current;
    const text = box?.firstElementChild;
    if (!box || !text) return;

    const words = box.querySelectorAll<HTMLElement>(".clock-word");
    const currentIndex = () =>
      Math.min(wordCount - 1, Math.max(0, wordsRead(viewOf(getClockState(), still)) - firstWord));

    let shown = -1;
    const place = () => {
      const word = words[currentIndex()];
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
      if (!word || box.clientHeight === 0 || !(lineHeight > 0)) return;
      const linesShown = Math.round(box.clientHeight / lineHeight);
      const linesForward = Math.max(1, linesShown - 1);
      // The word's centre, not its top: half-leading rounding cannot push it onto the wrong line.
      const line = Math.floor((word.offsetTop + word.offsetHeight / 2) / lineHeight);
      const screen = Math.max(0, Math.ceil(line / linesForward) - 1);
      box.scrollTop = screen * linesForward * lineHeight;
    };
    const follow = () => {
      const index = currentIndex();
      if (index === shown) return;
      shown = index;
      place();
    };

    follow();
    const unsubscribe = subscribeClock(follow);
    const observer = new ResizeObserver(place);
    observer.observe(box);
    observer.observe(text);
    return () => {
      unsubscribe();
      observer.disconnect();
    };
  }, [viewport, firstWord, wordCount, still]);
}
