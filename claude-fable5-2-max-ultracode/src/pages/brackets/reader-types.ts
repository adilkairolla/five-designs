export type OutputId = "summary" | "hints" | "quotes" | "insights";

export type Target = { kind: "cut"; index: number } | { kind: "fragment"; index: number };

export type Opened = { kind: "none" } | Target;

export type Pointed = { kind: "none" } | Target | { kind: "sentence"; index: number };

export type Marks = { cuts: readonly number[]; fragments: readonly number[] };

export const NOTHING = { kind: "none" } as const;

export function isOpenAt(opened: Opened, target: Target) {
  return opened.kind === target.kind && opened.index === target.index;
}
