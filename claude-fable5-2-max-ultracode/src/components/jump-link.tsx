import type { ComponentProps } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

type JumpLinkProps = Omit<ComponentProps<"button">, "type" | "onClick"> & {
  to: string;
};

// A button, not <a href="#id">: the showcase build swaps BrowserRouter for
// HashRouter, where "#id" is read as a route and blanks the page.
export function JumpLink({ to, ...buttonProps }: JumpLinkProps) {
  return <button type="button" onClick={() => scrollToSection(to)} {...buttonProps} />;
}
