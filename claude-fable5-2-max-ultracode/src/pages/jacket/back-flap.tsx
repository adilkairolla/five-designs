import { useId } from "react";
import { ChapterRun } from "./chapter-run";
import { InsightList } from "./insight-list";
import { QuestionsToAsk } from "./questions-to-ask";
import { WordsToKnow } from "./words-to-know";

export function BackFlap() {
  const titleId = useId();

  return (
    <section className="jacket-back-flap" aria-labelledby={titleId}>
      <h2 id={titleId} className="jacket-title">
        Insights
      </h2>
      <p className="jacket-deck mt-2 text-pretty">
        A jacket uses its back flap to tell you about the author. This one tells you about the book: its themes, how
        its parts connect and what is missing.
      </p>
      <InsightList />
      <WordsToKnow />
      <QuestionsToAsk />
      <ChapterRun />
    </section>
  );
}
