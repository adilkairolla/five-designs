import { useRef } from "react";
import type { ReactNode } from "react";
import { usePdfPicker } from "@/lib/use-pdf-picker";
import { UPLOAD } from "./axis-copy";
import { UploadStatus } from "./upload-status";

type UploadRowProps = { idle: ReactNode };

export function UploadRow({ idle }: UploadRowProps) {
  const { pick, open, inputProps } = usePdfPicker();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // "Pick again" disappears when the next pick succeeds, so focus moves to the button first.
  const pickAgain = () => {
    buttonRef.current?.focus();
    open();
  };

  return (
    <div className="axis-row axis-upload-row">
      <button ref={buttonRef} type="button" className="axis-upload" onClick={open}>
        <span className="axis-upload-lead">{UPLOAD.lead}</span>{" "}
        <span className="axis-upload-key">{UPLOAD.key}</span>
      </button>
      <input {...inputProps} />
      <UploadStatus pick={pick} idle={idle} onPickAgain={pickAgain} />
    </div>
  );
}
