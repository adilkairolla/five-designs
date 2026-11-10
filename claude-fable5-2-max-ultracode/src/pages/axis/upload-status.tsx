import type { ReactNode } from "react";
import { JumpLink } from "@/components/jump-link";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { UPLOAD } from "./axis-copy";

type UploadStatusProps = { pick: PdfPick; idle: ReactNode; onPickAgain: () => void };

function PickedStatus({ name, size }: { name: string; size: string }) {
  return (
    <>
      <p className="axis-status-name" title={name}>
        {UPLOAD.pickedLine(name, size)}
      </p>
      <p>{UPLOAD.pickedNote}</p>
      <p>
        <JumpLink to="axis-sample" className="axis-link">
          {UPLOAD.seeTheSample}
        </JumpLink>
      </p>
    </>
  );
}

function RejectedStatus({ name, onPickAgain }: { name: string; onPickAgain: () => void }) {
  return (
    <>
      <p className="axis-status-name" title={name}>
        {UPLOAD.rejectedLine(name)}
      </p>
      <p>{UPLOAD.rejectedNote}</p>
      <p>
        <button type="button" className="axis-link" onClick={onPickAgain}>
          {UPLOAD.pickAgain}
        </button>
      </p>
    </>
  );
}

function PickReport({ pick, idle, onPickAgain }: UploadStatusProps) {
  switch (pick.status) {
    case "empty":
      return idle;
    case "picked":
      return <PickedStatus name={pick.name} size={pick.size} />;
    case "rejected":
      return <RejectedStatus name={pick.name} onPickAgain={onPickAgain} />;
  }
}

export function UploadStatus(props: UploadStatusProps) {
  return (
    <div role="status" className="axis-right axis-status">
      <PickReport {...props} />
    </div>
  );
}
