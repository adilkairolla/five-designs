import { useRef } from "react";
import type { IntroPage } from "./book-position";
import { useKeepReadWordInView } from "./use-keep-read-word-in-view";
import { useReadProgress } from "./use-read-progress";
import { Words } from "./words";

type BookWindowProps = {
  page: IntroPage;
};

export function BookWindow({ page }: BookWindowProps) {
  const ref = useRef<HTMLDivElement>(null);
  useReadProgress(ref, page.firstWord, page.wordCount);
  useKeepReadWordInView(ref, page.firstWord, page.wordCount);

  return (
    <div ref={ref} className="clock-window">
      <blockquote className="clock-book">
        {page.paragraphs.map((paragraph, index) => (
          <p key={index} data-indent={paragraph.indented ? "" : undefined}>
            <Words words={paragraph.words} />
          </p>
        ))}
      </blockquote>
    </div>
  );
}
