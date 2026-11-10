import { useState } from "react";
import { usePdfPicker } from "@/lib/use-pdf-picker";
import { NO_PICK, UPLOAD_BUTTON_ID } from "./upload-slots";
import type { UploadSlot } from "./upload-slots";

export function useUploadSlots() {
  const picker = usePdfPicker();
  const [activeSlot, setActiveSlot] = useState<UploadSlot>("top");

  return {
    inputProps: picker.inputProps,
    pickIn: (slot: UploadSlot) => (slot === activeSlot ? picker.pick : NO_PICK),
    uploadFrom: (slot: UploadSlot) => {
      if (slot !== activeSlot) {
        picker.clear();
        setActiveSlot(slot);
      }
      picker.open();
    },
    pickAgain: picker.open,
    dismiss: () => {
      picker.clear();
      document.getElementById(UPLOAD_BUTTON_ID[activeSlot])?.focus();
    },
  };
}
