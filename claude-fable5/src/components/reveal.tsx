import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms */
  delay?: number;
  /** px the element travels while fading in */
  distance?: number;
  style?: CSSProperties;
};

/** Fade-and-rise scroll reveal. Intentionally style-agnostic so every design can use it. */
export function Reveal({ children, className, delay = 0, distance = 26, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateY(${distance}px)`,
        transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
