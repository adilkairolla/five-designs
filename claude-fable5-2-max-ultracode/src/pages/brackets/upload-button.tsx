import { UPLOAD_BUTTON_ID } from "./upload-slots";
import type { UploadSlot } from "./upload-slots";

type UploadButtonProps = {
  slot: UploadSlot;
  onUpload: (slot: UploadSlot) => void;
};

export function UploadButton({ slot, onUpload }: UploadButtonProps) {
  return (
    <button
      type="button"
      id={UPLOAD_BUTTON_ID[slot]}
      className="brackets-upload"
      onClick={() => onUpload(slot)}
    >
      Upload a PDF
    </button>
  );
}
