/* eslint-disable react-refresh/only-export-components -- intentional shared utility module, not component-only */
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "span" | "li";
};

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Shared scroll-triggered reveal wrapper used across all five designs.
 * Kept intentionally generic (opacity + y) so each design's own motion
 * variants (scale, rotate, blur, etc.) can be layered on top via className
 * or by wrapping with a design-local component.
 */
export function Reveal({ children, delay = 0, y = 24, duration = 0.7, className, once = true, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </Component>
  );
}

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
