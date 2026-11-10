import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type LeftCellProps = { className?: string; children: ReactNode };

// Always exactly one child: in a flex cell, loose text runs and marks would each
// become an item and lose the spaces between them.
export function LeftCell({ className, children }: LeftCellProps) {
  return (
    <span className={cn("axis-left", className)}>
      <span className="axis-left-text">{children}</span>
    </span>
  );
}
