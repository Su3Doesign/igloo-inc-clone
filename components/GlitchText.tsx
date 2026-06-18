"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function GlitchText({
  children,
  className = "",
  as: Tag = "span",
}: GlitchTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnter = () => setGlitching(true);
    const onLeave = () => setGlitching(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Tag ref={ref as never} className={`relative inline-block ${className}`}>
      {children}
      {glitching && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 text-[#ff0040] opacity-70"
            style={{
              animation: "glitch 0.3s infinite linear alternate-reverse",
              mixBlendMode: "screen",
            }}
          >
            {children}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 text-[#00d4ff] opacity-70"
            style={{
              animation: "glitch 0.3s infinite linear reverse",
              mixBlendMode: "screen",
            }}
          >
            {children}
          </span>
        </>
      )}
    </Tag>
  );
}
