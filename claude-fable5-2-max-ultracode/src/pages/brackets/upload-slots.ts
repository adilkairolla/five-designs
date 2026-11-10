import type { PdfPick } from "@/lib/use-pdf-picker";

export type UploadSlot = "top" | "closing";

export const NO_PICK: PdfPick = { status: "empty" };

export const UPLOAD_BUTTON_ID: Record<UploadSlot, string> = {
  top: "brackets-upload-top",
  closing: "brackets-upload-closing",
};
