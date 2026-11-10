import { useLayoutEffect } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { startClock, stopClock } from "./clock-store";

export function useClockLifecycle() {
  const still = usePrefersReducedMotion();

  // A layout effect: the store rests paused, so starting after paint would
  // show "Resume the clock" for a frame.
  useLayoutEffect(() => {
    if (!still) startClock();
    return stopClock;
  }, [still]);
}
