import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  x = 0,
  blur = false,
  once = true,
}: RevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      x,
      filter: blur ? "blur(10px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once, margin: "-70px" }}
    >
      {children}
    </motion.div>
  );
}
