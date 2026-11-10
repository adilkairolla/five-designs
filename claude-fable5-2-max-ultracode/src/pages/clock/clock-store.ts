import { AVERAGE_WORDS_PER_MINUTE } from "@/content/book-math";

export type ClockState = {
  readonly status: "running" | "paused";
  readonly elapsedMs: number;
  readonly wordsPerMinute: number;
  readonly touched: boolean;
};

const RESTING: ClockState = {
  status: "paused",
  elapsedMs: 0,
  wordsPerMinute: AVERAGE_WORDS_PER_MINUTE,
  touched: false,
};

let state = RESTING;
let baseMs = 0;
let anchor = 0;
let frame = 0;
const listeners = new Set<() => void>();

export function monotonicNow() {
  return performance.now();
}

function publish(next: ClockState) {
  state = next;
  for (const listener of [...listeners]) listener();
}

// Elapsed time is always base + (now - anchor). The timestamp a frame callback
// receives can be earlier than an anchor taken in a click handler of the same
// frame, so it is never used.
function sync() {
  if (state.status !== "running") return;
  publish({ ...state, elapsedMs: Math.max(baseMs, baseMs + monotonicNow() - anchor) });
}

function tick() {
  sync();
  frame = requestAnimationFrame(tick);
}

function run() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(tick);
}

function syncWhenVisible() {
  if (document.visibilityState === "visible") sync();
}

export function getClockState() {
  return state;
}

export function subscribeClock(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function startClock() {
  baseMs = 0;
  anchor = monotonicNow();
  publish({ ...RESTING, status: "running" });
  document.addEventListener("visibilitychange", syncWhenVisible);
  run();
}

export function stopClock() {
  cancelAnimationFrame(frame);
  document.removeEventListener("visibilitychange", syncWhenVisible);
  publish(RESTING);
}

export function pauseClock() {
  if (state.status !== "running") return;
  cancelAnimationFrame(frame);
  baseMs = Math.max(baseMs, baseMs + monotonicNow() - anchor);
  publish({ ...state, status: "paused", elapsedMs: baseMs, touched: true });
}

export function resumeClock() {
  if (state.status !== "paused") return;
  anchor = monotonicNow();
  publish({ ...state, status: "running" });
  run();
}

export function seekClock(elapsedMs: number) {
  baseMs = elapsedMs;
  anchor = monotonicNow();
  publish({ ...state, elapsedMs, touched: true });
}

export function restartClock() {
  baseMs = 0;
  anchor = monotonicNow();
  publish({ ...state, status: "running", elapsedMs: 0, touched: true });
  run();
}

export function setClockPace(wordsPerMinute: number) {
  publish({ ...state, wordsPerMinute });
}
