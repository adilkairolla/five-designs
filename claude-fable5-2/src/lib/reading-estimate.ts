const MINUTES_PER_PAGE = 2;

export function fullReadMinutes(pages: number) {
  return pages * MINUTES_PER_PAGE;
}

// Summaries grow with the square root of the document, so longer PDFs compress better.
export function summaryReadMinutes(pages: number) {
  return Math.max(2, Math.round(1.1 * Math.sqrt(pages)));
}

export function compressionRatio(pages: number) {
  return Math.round(fullReadMinutes(pages) / summaryReadMinutes(pages));
}

export function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest} min`;
  if (rest === 0) return `${hours} h`;
  return `${hours} h ${rest} min`;
}

export function formatPages(pages: number) {
  return pages.toLocaleString("en-US");
}
