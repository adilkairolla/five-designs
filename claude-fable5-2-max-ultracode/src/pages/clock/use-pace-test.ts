import { useState } from "react";
import { AVERAGE_WORDS_PER_MINUTE } from "@/content/book-math";
import { monotonicNow, setClockPace } from "./clock-store";
import { clampPace } from "./reading";

export type PaceTest =
  | { phase: "idle" }
  | { phase: "timing"; startedAt: number }
  | { phase: "result"; seconds: number; measured: number; applied: number };

// A double press on the button must not be read as 66 words in a tenth of a second.
const ACCIDENTAL_PRESS_MS = 400;

export function usePaceTest(passageWords: number) {
  const [test, setTest] = useState<PaceTest>({ phase: "idle" });

  const start = () => setTest({ phase: "timing", startedAt: monotonicNow() });

  const finish = () => {
    if (test.phase !== "timing") return;
    const elapsedMs = monotonicNow() - test.startedAt;
    if (elapsedMs < ACCIDENTAL_PRESS_MS) return;
    const measured = Math.round((passageWords * 60_000) / elapsedMs);
    const applied = clampPace(measured);
    setClockPace(applied);
    setTest({ phase: "result", seconds: elapsedMs / 1000, measured, applied });
  };

  const cancel = () => setTest({ phase: "idle" });

  const backToAverage = () => {
    setClockPace(AVERAGE_WORDS_PER_MINUTE);
    setTest({ phase: "idle" });
  };

  return { test, start, finish, cancel, backToAverage };
}
