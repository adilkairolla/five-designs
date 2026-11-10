import { scrollToSection } from "@/lib/scroll-to-section";
import { PANEL_ID } from "./ids";

const LOWEST_TOP_IN_VIEW = 0.6;

export function revealPanel(moveFocus: boolean) {
  const panel = document.getElementById(PANEL_ID);
  if (!panel) return;

  const { top } = panel.getBoundingClientRect();
  const isHeadInView = top >= 0 && top <= window.innerHeight * LOWEST_TOP_IN_VIEW;
  if (!isHeadInView) {
    scrollToSection(PANEL_ID);
    return;
  }
  if (moveFocus) panel.focus({ preventScroll: true });
}

export function focusPanelIfFocusInside() {
  const panel = document.getElementById(PANEL_ID);
  if (panel?.contains(document.activeElement)) panel.focus({ preventScroll: true });
}
