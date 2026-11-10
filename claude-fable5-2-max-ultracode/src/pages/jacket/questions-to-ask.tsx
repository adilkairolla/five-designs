import { citePages } from "@/content/book-math";
import { questions, quotes } from "@/content/origin-of-species";

export function QuestionsToAsk() {
  return (
    <>
      <h3 className="jacket-blockhead">Questions to ask</h3>
      <dl className="jacket-list mt-4">
        {questions.map((entry) => (
          <div key={entry.question}>
            <dt className="jacket-question">{entry.question}</dt>
            <dd className="jacket-body">
              {entry.answer} <span className="jacket-label">{citePages(quotes[entry.quote].pages)}</span>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
