export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  section.focus({ preventScroll: true });
}
