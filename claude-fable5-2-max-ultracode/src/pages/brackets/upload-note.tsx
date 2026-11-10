import type { ReactNode } from "react";
import type { PdfPick } from "@/lib/use-pdf-picker";

type UploadNoteProps = {
  pick: PdfPick;
  whereToLook?: ReactNode;
  onPickAgain: () => void;
  onDismiss: () => void;
  children: ReactNode;
};

const NEXT_STEP_LABEL = { picked: "Dismiss", rejected: "Pick another file" } as const;

export function UploadNote({ pick, whereToLook, onPickAgain, onDismiss, children }: UploadNoteProps) {
  return (
    <div className="brackets-note">
      <div className="brackets-note-box">
        <div>
          {pick.status === "empty" ? <p className="text-balance">{children}</p> : null}
          <div role="status" className="brackets-said">
            <UploadMessage pick={pick} />
          </div>
          {pick.status === "empty" ? null : (
            <div className="brackets-note-actions">
              {whereToLook}
              <button
                type="button"
                className="brackets-link"
                onClick={pick.status === "picked" ? onDismiss : onPickAgain}
              >
                {NEXT_STEP_LABEL[pick.status]}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UploadMessage({ pick }: { pick: PdfPick }) {
  switch (pick.status) {
    case "empty":
      return null;
    case "picked":
      return (
        <>
          <span className="brackets-file">
            {pick.name} ({pick.size})
          </span>{" "}
          <span className="brackets-said-why">
            Not uploaded: this demo page does not process files, so the file never left your browser.
          </span>
        </>
      );
    case "rejected":
      return (
        <>
          <span className="brackets-file">{pick.name}</span>{" "}
          <span className="brackets-said-why">This file is not a PDF. Pick a PDF instead.</span>
        </>
      );
  }
}
