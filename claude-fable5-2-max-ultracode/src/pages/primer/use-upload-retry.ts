import { useRef } from "react";

export function useUploadRetry(onUpload: () => void) {
  const uploadButton = useRef<HTMLButtonElement>(null);

  // Asking again clears the message, and with it the button that was pressed:
  // focus goes to the Upload button first so it is never left on a removed node.
  const retry = () => {
    uploadButton.current?.focus();
    onUpload();
  };

  return [uploadButton, retry] as const;
}
