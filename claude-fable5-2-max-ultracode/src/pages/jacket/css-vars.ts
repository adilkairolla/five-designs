import type { CSSProperties } from "react";

export type CssVars = CSSProperties & Record<`--jacket-${string}`, string>;
