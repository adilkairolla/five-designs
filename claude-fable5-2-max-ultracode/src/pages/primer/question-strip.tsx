import { useId, useState } from "react";
import { quotes } from "@/content/origin-of-species";
import type { Question } from "@/content/origin-of-species";
import { OutlineButton } from "./outline-button";
import { PageCite } from "./page-cite";

type StripFace = "question" | "answer";

const FACES = {
  question: { action: "Show the answer", expanded: false, next: "answer" },
  answer: { action: "Show the question", expanded: true, next: "question" },
} as const satisfies Record<StripFace, { action: string; expanded: boolean; next: StripFace }>;

export function QuestionStrip({ question }: { question: Question }) {
  const [face, setFace] = useState<StripFace>("question");
  const answerId = useId();
  const shown = FACES[face];

  return (
    <div className="primer-strip">
      <div
        className="primer-strip-face primer-strip-face--question"
        data-shown={face === "question"}
      >
        <p className="font-primer-slab text-base leading-[1.3] font-medium italic">Question</p>
        <p className="mt-1 text-lg leading-[1.35] font-bold text-balance lg:text-xl">
          {question.question}
        </p>
      </div>
      <OutlineButton
        className="primer-strip-action"
        aria-expanded={shown.expanded}
        aria-controls={answerId}
        onClick={() => setFace(shown.next)}
      >
        {shown.action}
      </OutlineButton>
      <div
        id={answerId}
        className="primer-strip-face primer-strip-face--answer"
        data-shown={face === "answer"}
        aria-hidden={face !== "answer"}
      >
        <p className="font-primer-slab text-base leading-[1.3] font-medium italic">Answer</p>
        <p className="mt-1 flow-root text-base leading-[1.6] lg:text-[1.0625rem]">
          {question.answer} <PageCite pages={quotes[question.quote].pages} />
        </p>
      </div>
    </div>
  );
}
