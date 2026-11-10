import { useState } from "react";
import { usePdfPicker } from "@/lib/use-pdf-picker";
import type { PdfPick } from "@/lib/use-pdf-picker";

export type UploadPlace = "lesson-1" | "lesson-6";

const NOTHING_PICKED: PdfPick = { status: "empty" };

export function useUploadDesk() {
  const { pick, open, clear, inputProps } = usePdfPicker();
  const [askedFrom, setAskedFrom] = useState<UploadPlace>("lesson-1");

  return {
    inputProps,
    askFrom: (place: UploadPlace) => {
      clear();
      setAskedFrom(place);
      open();
    },
    pickAt: (place: UploadPlace) => (place === askedFrom ? pick : NOTHING_PICKED),
  };
}
