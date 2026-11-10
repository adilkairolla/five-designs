import { useState } from "react";
import type { ChangeEvent } from "react";

export function usePdfPicker() {
  const [fileName, setFileName] = useState<string | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files?.[0]?.name ?? null);
  };

  return { fileName, inputProps: { type: "file", accept: "application/pdf", onChange } as const };
}
