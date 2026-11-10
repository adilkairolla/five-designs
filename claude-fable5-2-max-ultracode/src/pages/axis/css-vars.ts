import type { CSSProperties } from "react";

type HeroRowVars = CSSProperties & { "--axis-i": number; "--axis-len": number };

export function heroRowVars(index: number, left: string): HeroRowVars {
  return { "--axis-i": index, "--axis-len": left.trimEnd().length };
}
