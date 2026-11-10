import { JumpLink } from "@/components/jump-link";
import { cn } from "@/lib/cn";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { LESSON_IDS } from "./lessons";
import { OutlineButton } from "./outline-button";

type UploadMessageProps = {
  pick: PdfPick;
  onChooseAnother: () => void;
};

type UploadStatusProps = UploadMessageProps & {
  className?: string;
};

// Declared outside the component so its identity never changes: React then calls it
// once when a message mounts, not on every render.
function revealMessage(message: HTMLDivElement | null) {
  message?.scrollIntoView({ block: "nearest" });
}

function UploadMessage({ pick, onChooseAnother }: UploadMessageProps) {
  switch (pick.status) {
    case "empty":
      return null;
    case "picked":
      return (
        <div ref={revealMessage} className="scroll-my-2">
          <p className="truncate font-bold">{pick.name}</p>
          <p>
            You picked this file ({pick.size}). This demo page does not process files, so nothing
            was uploaded and the file never left your browser.{" "}
            <JumpLink
              to={LESSON_IDS.summary}
              className="primer-text-button primer-text-button--inline"
            >
              See the sample
            </JumpLink>{" "}
            for what Ratio Reader returns.
          </p>
        </div>
      );
    case "rejected":
      return (
        <div ref={revealMessage} className="scroll-my-2">
          <p className="truncate font-bold">{pick.name}</p>
          <p>This file is not a PDF, so it was not picked.</p>
          <OutlineButton className="mt-2" onClick={onChooseAnother}>
            Choose another file
          </OutlineButton>
        </div>
      );
  }
}

export function UploadStatus({ pick, onChooseAnother, className }: UploadStatusProps) {
  return (
    <div
      role="status"
      className={cn(
        "mt-4 min-h-28 max-w-[30rem] text-sm leading-normal text-wrap sm:min-h-24",
        className,
      )}
    >
      <UploadMessage pick={pick} onChooseAnother={onChooseAnother} />
    </div>
  );
}
