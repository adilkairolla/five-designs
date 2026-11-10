import type { FocusEvent, PointerEvent } from "react";
import { NOTHING } from "./reader-types";
import type { Pointed } from "./reader-types";

function isKeyboardFocus(element: Element) {
  try {
    return element.matches(":focus-visible");
  } catch {
    return true;
  }
}

// A finger tap also fires pointerenter and focus, and neither is undone when the
// finger lifts, so only a mouse, a pen or the keyboard may point.
export function pointHandlers(onPoint: (pointed: Pointed) => void, target: Pointed) {
  return {
    onPointerEnter: (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType !== "touch") onPoint(target);
    },
    onPointerLeave: () => onPoint(NOTHING),
    onFocus: (event: FocusEvent<HTMLElement>) => {
      if (isKeyboardFocus(event.currentTarget)) onPoint(target);
    },
    onBlur: () => onPoint(NOTHING),
  };
}
