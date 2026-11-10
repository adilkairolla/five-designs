import { chaptersIn } from "@/content/book-math";
import type { PageSpan } from "@/content/origin-of-species";

export function thousands(value: number): string {
  return value.toLocaleString("en-US");
}

export function chaptersLabel(span: PageSpan): string {
  const numerals = chaptersIn(span).flatMap((chapter) => (chapter.numeral === null ? [] : [chapter.numeral]));
  const first = numerals[0];
  const last = numerals.at(-1);
  if (first === undefined || last === undefined) return "";
  return first === last ? `chapter ${first}` : `chapters ${first} to ${last}`;
}
