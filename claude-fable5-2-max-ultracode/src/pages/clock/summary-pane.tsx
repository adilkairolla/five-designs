import { useRef } from "react";
import { SUMMARY_WORDS } from "./reading";
import { SUMMARY_SENTENCES } from "./sample";
import { useReadProgress } from "./use-read-progress";
import { Words } from "./words";

export function SummaryPane() {
  const ref = useRef<HTMLDivElement>(null);
  useReadProgress(ref, 0, SUMMARY_WORDS);

  return (
    <div ref={ref} className="clock-summary mt-3 space-y-3">
      {SUMMARY_SENTENCES.map((sentence) => (
        <p key={sentence.id}>
          <Words words={sentence.words} /> <span className="clock-cite">{sentence.cite}</span>
        </p>
      ))}
    </div>
  );
}
