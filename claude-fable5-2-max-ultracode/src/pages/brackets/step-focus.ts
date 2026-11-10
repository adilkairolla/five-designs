import type { KeyboardEvent } from "react";

const STEP_BY_KEY: Partial<Record<string, number>> = { ArrowRight: 1, ArrowLeft: -1 };

export function stepFocus(event: KeyboardEvent<HTMLElement>, selector: string) {
  const step = STEP_BY_KEY[event.key];
  if (step === undefined) return;
  const stops = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(selector));
  const from = stops.findIndex((stop) => stop === event.target);
  const next = from === -1 ? undefined : stops[from + step];
  if (!next) return;
  event.preventDefault();
  next.focus();
}
