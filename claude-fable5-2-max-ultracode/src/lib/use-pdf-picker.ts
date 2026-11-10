import { useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";

export type PdfPick =
  | { status: "empty" }
  | { status: "picked"; name: string; size: string }
  | { status: "rejected"; name: string };

const EMPTY: PdfPick = { status: "empty" };

function isPdf(file: File) {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function toPick(file: File): PdfPick {
  return isPdf(file)
    ? { status: "picked", name: file.name, size: formatSize(file.size) }
    : { status: "rejected", name: file.name };
}

/**
 * Picks a PDF by file dialog or drag and drop. The file never leaves the
 * browser: this page has no reader behind it, so a pick only reports what was
 * chosen. Spread `inputProps` on a hidden <input> and `dropProps` on the zone.
 */
export function usePdfPicker() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pick, setPick] = useState<PdfPick>(EMPTY);
  const [isDragging, setIsDragging] = useState(false);

  const take = (file: File | undefined) => {
    if (file) setPick(toPick(file));
  };

  return {
    pick,
    isDragging,
    open: () => inputRef.current?.click(),
    clear: () => setPick(EMPTY),
    inputProps: {
      ref: inputRef,
      type: "file" as const,
      accept: "application/pdf,.pdf",
      hidden: true,
      tabIndex: -1,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        take(event.target.files?.[0]);
        // Lets the same file be picked again after `clear`.
        event.target.value = "";
      },
    },
    dropProps: {
      onDragOver: (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        setIsDragging(true);
      },
      onDragLeave: (event: DragEvent<HTMLElement>) => {
        // Moving onto a child also fires dragleave on the zone.
        const enteredElement = event.relatedTarget;
        if (enteredElement instanceof Node && event.currentTarget.contains(enteredElement)) return;
        setIsDragging(false);
      },
      onDrop: (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        setIsDragging(false);
        take(event.dataTransfer.files[0]);
      },
    },
  };
}
