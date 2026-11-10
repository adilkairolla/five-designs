import type { KeyboardEvent } from "react";

const STEP: Partial<Record<string, number>> = { ArrowDown: 1, ArrowUp: -1 };

export function moveAlongKeys(event: KeyboardEvent<HTMLElement>) {
  const step = STEP[event.key];
  const target = event.target;
  if (step === undefined || !(target instanceof HTMLButtonElement) || !target.hasAttribute("data-axis-key")) return;

  const keys = [...event.currentTarget.querySelectorAll<HTMLButtonElement>("button[data-axis-key]")];
  const next = keys[keys.indexOf(target) + step];
  if (!next) return;

  event.preventDefault();
  next.focus();
}
