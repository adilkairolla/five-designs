import type { Ref } from "react";
import { cn } from "@/lib/cn";

type UploadButtonSize = "small" | "regular" | "sentence";

type UploadButtonProps = {
  size: UploadButtonSize;
  onClick: () => void;
  ref?: Ref<HTMLButtonElement>;
};

const BASE_CLASS =
  "cursor-pointer rounded-primer-button bg-primer-blue text-primer-paper transition-transform duration-75 hover:bg-primer-blue-deep active:translate-y-px active:bg-primer-blue-deep motion-reduce:transition-none motion-reduce:active:translate-y-0 forced-colors:border-2";

const SIZE_CLASS = {
  small: "inline-flex min-h-11 shrink-0 items-center px-4 pb-0.5 text-base leading-none font-bold",
  regular: "inline-flex min-h-13 items-center px-6 pb-0.5 text-lg leading-none font-bold",
  sentence: "primer-sentence-button",
} as const satisfies Record<UploadButtonSize, string>;

export function UploadButton({ size, onClick, ref }: UploadButtonProps) {
  return (
    <button ref={ref} type="button" className={cn(BASE_CLASS, SIZE_CLASS[size])} onClick={onClick}>
      Upload a PDF
    </button>
  );
}
