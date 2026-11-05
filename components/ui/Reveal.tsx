"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Aparición suave al entrar en pantalla. `variant` elige el gesto (sube,
 * funde, escala o entra de lado). Respeta prefers-reduced-motion vía CSS.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "fade" | "scale" | "left" | "right";
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      data-reveal={variant === "up" ? undefined : variant}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
