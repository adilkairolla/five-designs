import type { ReactNode } from "react";

type FrontFlapProps = {
  children: ReactNode;
};

export function FrontFlap({ children }: FrontFlapProps) {
  return (
    <div className="jacket-flap-cell">
      <div className="jacket-flap lg:motion-safe:animate-jacket-flap-out">{children}</div>
    </div>
  );
}
