import { useId } from "react";
import type { ReactNode } from "react";
import type { SpreadLesson } from "./lessons";
import { QuestionStrip } from "./question-strip";

type LessonSpreadProps = {
  lesson: SpreadLesson;
  children: ReactNode;
};

function LessonText({ lesson, headingId }: { lesson: SpreadLesson; headingId: string }) {
  return (
    <div className="px-4 pt-8 pb-8 sm:px-10 lg:col-start-1 lg:row-start-1 lg:px-12 lg:pt-12 lg:pb-10">
      <div className="@container">
        <h2 id={headingId}>
          <span className="primer-lesson-label mb-2 block">Lesson {lesson.number}</span>{" "}
          <span className="primer-lesson-title">{lesson.title}</span>
        </h2>
        <div className="primer-lesson-lines">
          {lesson.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutputPage({ statement, children }: { statement: string; children: ReactNode }) {
  return (
    <div className="bg-primer-blotter px-4 py-10 text-base leading-[1.6] sm:px-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:px-12 lg:py-12 lg:text-[1.0625rem]">
      <div className="max-w-[34rem]">
        <h3 className="mb-5 text-2xl leading-tight font-bold text-balance lg:-mt-1">{statement}</h3>
        {children}
      </div>
    </div>
  );
}

export function LessonSpread({ lesson, children }: LessonSpreadProps) {
  const headingId = useId();

  return (
    <section
      id={lesson.id}
      tabIndex={-1}
      aria-labelledby={headingId}
      className="mt-16 border-t-2 border-primer-ink focus:outline-hidden lg:mt-24 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr]"
    >
      <LessonText lesson={lesson} headingId={headingId} />
      <OutputPage statement={lesson.statement}>{children}</OutputPage>
      {lesson.question ? (
        <div className="px-4 pt-8 sm:px-10 lg:col-start-1 lg:row-start-2 lg:px-12 lg:pt-0 lg:pb-12 xl:self-end">
          <QuestionStrip question={lesson.question} />
        </div>
      ) : null}
    </section>
  );
}
