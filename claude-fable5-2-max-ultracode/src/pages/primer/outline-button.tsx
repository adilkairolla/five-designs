import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const OUTLINE_CLASS =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-primer-button border-2 border-primer-blue bg-primer-paper px-5 pb-0.5 text-base leading-none font-bold text-primer-blue transition-transform duration-75 hover:bg-primer-blotter active:translate-y-px active:bg-primer-blotter motion-reduce:transition-none motion-reduce:active:translate-y-0";

export function OutlineButton({
  className,
  ...buttonProps
}: Omit<ComponentProps<"button">, "type">) {
  return <button type="button" className={cn(OUTLINE_CLASS, className)} {...buttonProps} />;
}
