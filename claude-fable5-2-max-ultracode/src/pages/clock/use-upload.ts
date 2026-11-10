import { useState } from "react";
import { usePdfPicker } from "@/lib/use-pdf-picker";

export type UploadSite = "header" | "hero" | "closing";

/**
 * One file picker shared by the page's three Upload buttons. `site` is the
 * button pressed last: only its status region shows the result.
 */
export function useUpload() {
  const { pick, open, clear, inputProps } = usePdfPicker();
  const [site, setSite] = useState<UploadSite>("hero");

  // Clearing first means a second pick of the same file is announced again,
  // and an old message never moves to another button.
  const openFrom = (from: UploadSite) => {
    setSite(from);
    clear();
    open();
  };

  return { pick, site, openFrom, clear, inputProps };
}
