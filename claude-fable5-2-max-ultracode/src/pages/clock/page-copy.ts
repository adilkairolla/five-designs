import type { PdfPick } from "@/lib/use-pdf-picker";
import { book } from "@/content/origin-of-species";
import type { Hint, Insight } from "@/content/origin-of-species";
import { countWords, secondsToRead } from "@/content/book-math";
import { formatCount, formatDuration } from "./format-time";
import { MAX_PACE, MIN_PACE, bookDuration, paceIsAverage, summaryDuration } from "./reading";
import { PACE_PASSAGE } from "./sample";
import type { TimelineEntry } from "./sample";
import type { PaceTest } from "./use-pace-test";

export function clockLead(still: boolean, touched: boolean) {
  if (still) return "The clock is set to";
  if (touched) return "The clock reads";
  return "You have been here";
}

export function offerText(pace: number) {
  return `Ratio Reader reads every page. You get a summary, hints, quotes and insights. The sample is Darwin’s ${book.title}: ${book.pages} pages, about ${bookDuration(pace)} at ${pace} words a minute. Its summary takes about ${summaryDuration(pace)}.`;
}

const NAME_LIMIT = 24;

export function shortFileName(name: string) {
  if (name.length <= NAME_LIMIT) return name;
  return `${name.slice(0, 14)}…${name.slice(-9)}`;
}

export function uploadMessage(pick: PdfPick) {
  switch (pick.status) {
    case "empty":
      return null;
    case "picked":
      return `${shortFileName(pick.name)}, ${pick.size}. Nothing was uploaded: this demo page does not process files, so yours never left the browser. The sample on this page shows what you would get.`;
    case "rejected":
      return `${shortFileName(pick.name)} is not a PDF. Pick a PDF instead.`;
  }
}

export function paceStatus(test: PaceTest, pace: number) {
  if (test.phase === "timing") return "Timing. Read the passage at your normal pace, then press Done.";
  if (test.phase === "result") {
    const measured = `${PACE_PASSAGE.wordCount} words in ${test.seconds.toFixed(1)} seconds is`;
    const times = `the book takes about ${bookDuration(pace)} and the summary about ${summaryDuration(pace)}.`;
    if (test.measured > MAX_PACE) {
      return `${measured} over ${MAX_PACE} words a minute. The page stops at ${MAX_PACE}, so it uses ${MAX_PACE}: ${times}`;
    }
    if (test.measured < MIN_PACE) {
      return `${measured} under ${MIN_PACE} words a minute. The page stops at ${MIN_PACE}, so it uses ${MIN_PACE}: ${times}`;
    }
    return `${measured} ${formatCount(test.measured)} words a minute. At that pace ${times}`;
  }
  if (paceIsAverage(pace)) return "Press Time my reading, read the passage that appears, then press Done.";
  return `This page is reading at ${pace} words a minute, the pace you measured. Press Time my reading to measure again.`;
}

export function faqItems(pace: number) {
  return [
    {
      id: "get",
      question: "What do I get?",
      answer:
        "Four things: a summary, hints, quotes and insights. All four are on this page for the sample book.",
    },
    {
      id: "kind",
      question: "What kind of PDF is it for?",
      answer:
        "Long, dense ones: papers, reports, contracts, textbooks, manuals. And whoever is handed one: students, researchers, analysts, anyone.",
    },
    {
      id: "replace",
      question: "Does it replace reading the PDF?",
      answer: `No. It shows where to slow down and read closely. The book on this page still takes about ${bookDuration(pace)}.`,
    },
    {
      id: "check",
      question: "How do I check its work?",
      answer:
        "By page number. Every quote says which page it came from, so you can open the PDF there and compare the words.",
    },
  ];
}

export function faqReadingTime(pace: number) {
  const words = faqItems(pace).reduce(
    (total, item) => total + countWords(item.question) + countWords(item.answer),
    0,
  );
  return formatDuration(secondsToRead(words, pace));
}

export const KIND_LABEL: Record<TimelineEntry["kind"], string> = {
  quote: "Quote",
  hint: "Hint",
  insight: "Insight",
  end: "The end",
};

export const HINT_FACET_LABEL: Record<Hint["kind"], string> = {
  first: "what to read first",
  term: "what a term means",
  watch: "what to watch for",
};

export const INSIGHT_FACET_LABEL: Record<Insight["kind"], string> = {
  theme: "a theme",
  connection: "a connection",
  missing: "what is missing",
};
