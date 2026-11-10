import { useState } from "react";
import { usePdfPicker } from "@/lib/use-pdf-picker";
import type { PdfPick } from "@/lib/use-pdf-picker";

type UploadSpot = "front" | "inside";

const NOTHING_PICKED: PdfPick = { status: "empty" };

export function useJacketUpload() {
  const picker = usePdfPicker();
  const [spot, setSpot] = useState<UploadSpot>("front");

  const openFrom = (nextSpot: UploadSpot) => {
    // Otherwise cancelling the dialog would move the earlier result under the other button.
    if (nextSpot !== spot) picker.clear();
    setSpot(nextSpot);
    picker.open();
  };

  return {
    inputProps: picker.inputProps,
    frontPick: spot === "front" ? picker.pick : NOTHING_PICKED,
    insidePick: spot === "inside" ? picker.pick : NOTHING_PICKED,
    openFromFront: () => openFrom("front"),
    openFromInside: () => openFrom("inside"),
  };
}
