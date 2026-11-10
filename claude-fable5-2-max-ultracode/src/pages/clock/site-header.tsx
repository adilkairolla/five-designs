import { useRef } from "react";
import type { PdfPick } from "@/lib/use-pdf-picker";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { PauseButton } from "./pause-button";
import { UploadStatus } from "./upload-status";

type SiteHeaderProps = {
  pick: PdfPick;
  active: boolean;
  onUpload: () => void;
  onClose: () => void;
  onSeeSample: () => void;
};

export function SiteHeader({ pick, active, onUpload, onClose, onSeeSample }: SiteHeaderProps) {
  const still = usePrefersReducedMotion();
  const uploadRef = useRef<HTMLButtonElement>(null);

  const pickAgain = () => {
    uploadRef.current?.focus();
    onUpload();
  };
  const close = () => {
    onClose();
    uploadRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-20 border-b border-clock-pane bg-clock-ground">
      <div className="clock-wrap px-4 sm:px-8 lg:px-12">
        <div className="relative flex h-14 items-center justify-between gap-2">
          <p className="min-w-0 truncate text-[1rem]/[1.2] font-bold tracking-[-0.01em] sm:text-[1.0625rem]/[1.2]">
            Ratio Reader
          </p>
          <div className="flex shrink-0 gap-2">
            {!still && <PauseButton />}
            <button
              ref={uploadRef}
              type="button"
              className="clock-btn clock-btn-primary max-sm:px-3 max-sm:text-[0.875rem]"
              onClick={onUpload}
            >
              Upload a PDF
            </button>
          </div>
          <UploadStatus
            variant="overlay"
            pick={pick}
            active={active}
            onPickAgain={pickAgain}
            onClose={close}
            onSeeSample={onSeeSample}
          />
        </div>
      </div>
    </header>
  );
}
