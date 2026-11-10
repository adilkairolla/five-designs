import { useSyncExternalStore } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { getClockState, subscribeClock } from "./clock-store";
import type { ClockState } from "./clock-store";
import { viewOf } from "./reading";

/**
 * Subscribes a component to one value derived from the clock. The store
 * publishes every frame, so `select` must return a primitive: the component
 * then re-renders only when that value changes.
 */
export function useClock<T extends string | number | boolean>(select: (clock: ClockState) => T): T {
  const still = usePrefersReducedMotion();
  return useSyncExternalStore(subscribeClock, () => select(viewOf(getClockState(), still)));
}
