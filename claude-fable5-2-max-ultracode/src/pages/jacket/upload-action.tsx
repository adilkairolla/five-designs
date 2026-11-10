import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { UPLOAD_LABEL } from "./jacket-copy";
import { UploadStatus } from "./upload-status";

type UploadActionProps = {
  pick: PdfPick;
  onUpload: () => void;
  emptyNote: string;
  className?: string;
  children?: ReactNode;
};

export function UploadAction({ pick, onUpload, emptyNote, className, children }: UploadActionProps) {
  return (
    <div className={cn("jacket-action", className)}>
      <div className="jacket-action-buttons">
        <button type="button" className="jacket-button" onClick={onUpload}>
          {UPLOAD_LABEL}
        </button>
        {children}
      </div>
      <UploadStatus pick={pick} emptyNote={emptyNote} onRetry={onUpload} />
    </div>
  );
}
