"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
  style?: CSSProperties;
};

/** Fades + lifts its children into view once, via IntersectionObserver. */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  id,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.classList.contains("is-shown")) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-shown");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} id={id} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
