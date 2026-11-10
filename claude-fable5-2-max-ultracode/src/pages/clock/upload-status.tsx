import type { PdfPick } from "@/lib/use-pdf-picker";
import { cn } from "@/lib/cn";
import { uploadMessage } from "./page-copy";

type UploadStatusProps = {
  pick: PdfPick;
  active: boolean;
  className?: string;
  onPickAgain: () => void;
} & ({ variant: "inline" } | { variant: "overlay"; onClose: () => void; onSeeSample: () => void });

const OVERLAY = "absolute right-0 top-full mt-2 w-[min(28rem,calc(100vw-2rem))]";
const OVERLAY_OPEN = "border-2 border-clock-white bg-clock-pane p-4";

export function UploadStatus(props: UploadStatusProps) {
  const { pick, active, className, onPickAgain } = props;
  const message = active ? uploadMessage(pick) : null;
  const isOverlay = props.variant === "overlay";
  const isRejected = active && pick.status === "rejected";
  const pointsToSample = active && pick.status === "picked";

  return (
    <div className={cn(isOverlay && OVERLAY, isOverlay && (message ? OVERLAY_OPEN : "pointer-events-none"), className)}>
      <p role="status" className="text-[0.9375rem]/[1.45] break-words">
        {message}
      </p>
      {message && (isRejected || isOverlay) && (
        <div className="mt-2 flex flex-wrap gap-2">
          {isRejected && (
            <button type="button" className="clock-btn clock-btn-ghost" onClick={onPickAgain}>
              Pick another file
            </button>
          )}
          {props.variant === "overlay" && pointsToSample && (
            <button type="button" className="clock-btn clock-btn-ghost" onClick={props.onSeeSample}>
              See the sample
            </button>
          )}
          {props.variant === "overlay" && (
            <button
              type="button"
              className="clock-btn clock-btn-ghost"
              aria-label="Close this message"
              onClick={props.onClose}
            >
              Close
            </button>
          )}
        </div>
      )}
    </div>
  );
}
