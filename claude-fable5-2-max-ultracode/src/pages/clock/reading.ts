import { book, summary } from "@/content/origin-of-species";
import { AVERAGE_WORDS_PER_MINUTE, countWords, secondsToRead } from "@/content/book-math";
import type { ClockState } from "./clock-store";
import { formatDuration } from "./format-time";

export const BOOK_WORDS = book.approxWords;
export const SUMMARY_WORDS = summary.reduce((total, sentence) => total + countWords(sentence.text), 0);
export const MIN_PACE = 80;
export const MAX_PACE = 700;

export function clampPace(pace: number) {
  return Math.min(MAX_PACE, Math.max(MIN_PACE, pace));
}

export function paceIsAverage(pace: number) {
  return pace === AVERAGE_WORDS_PER_MINUTE;
}

export function summaryFinishMs(pace: number) {
  return Math.ceil(secondsToRead(SUMMARY_WORDS, pace) * 1000);
}

export function summaryWholeSeconds(pace: number) {
  return Math.round(secondsToRead(SUMMARY_WORDS, pace));
}

// The instant shown when nothing may tick: the summary has just finished, and
// the clock reads the same whole seconds the closing line names.
export function stillInstantMs(pace: number) {
  return Math.max(summaryFinishMs(pace), summaryWholeSeconds(pace) * 1000);
}

export function viewOf(clock: ClockState, still: boolean): ClockState {
  if (!still) return clock;
  return { ...clock, status: "paused", elapsedMs: stillInstantMs(clock.wordsPerMinute) };
}

// The epsilon and the ceil in summaryFinishMs each stop floating point from
// leaving the summary one word short at its own finish instant.
export function wordsRead(clock: ClockState) {
  return Math.min(BOOK_WORDS, Math.floor((clock.elapsedMs * clock.wordsPerMinute) / 60_000 + 1e-9));
}

export function summaryIsFinished(clock: ClockState) {
  return wordsRead(clock) >= SUMMARY_WORDS;
}

// Whole seconds, floored like the headline clock, so the two readouts change in one frame.
export function summarySecondsLeft(clock: ClockState) {
  return Math.max(1, summaryWholeSeconds(clock.wordsPerMinute) - Math.floor(clock.elapsedMs / 1000));
}

export function bookSecondsLeft(clock: ClockState) {
  return secondsToRead(BOOK_WORDS - wordsRead(clock), clock.wordsPerMinute);
}

export function bookDuration(pace: number) {
  return formatDuration(secondsToRead(BOOK_WORDS, pace));
}

export function summaryDuration(pace: number) {
  return formatDuration(secondsToRead(SUMMARY_WORDS, pace));
}
