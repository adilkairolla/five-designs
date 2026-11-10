import type { PdfPick } from "@/lib/use-pdf-picker";

type UploadStatusProps = {
  pick: PdfPick;
  emptyNote: string;
  onRetry: () => void;
};

export function UploadStatus({ pick, emptyNote, onRetry }: UploadStatusProps) {
  return (
    <div role="status" className="jacket-status">
      <StatusLines pick={pick} emptyNote={emptyNote} onRetry={onRetry} />
    </div>
  );
}

function StatusLines({ pick, emptyNote, onRetry }: UploadStatusProps) {
  switch (pick.status) {
    case "empty":
      return <p className="jacket-note">{emptyNote}</p>;
    case "picked":
      return (
        <>
          <p className="jacket-note flex min-w-0 font-bold">
            <span className="truncate">{pick.name}</span>
            <span className="shrink-0">, {pick.size}</span>
          </p>
          <p className="jacket-note">
            This demo page does not process files, so nothing was uploaded and the file never left your browser. Read
            the sample on this page.
          </p>
        </>
      );
    case "rejected":
      return (
        <>
          <p className="jacket-note flex min-w-0 font-bold">
            <span className="truncate">{pick.name}</span>
            <span className="shrink-0">&nbsp;is not a PDF.</span>
          </p>
          <p className="jacket-note">
            Ratio Reader reads PDFs.{" "}
            <button type="button" className="jacket-textlink" onClick={onRetry}>
              Pick another file
            </button>
          </p>
        </>
      );
  }
}
