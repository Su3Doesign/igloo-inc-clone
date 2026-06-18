"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
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
    <span ref={ref} className={className} style={{ position: "relative", display: "inline-block" }}>
      {children}
      {glitching && (
        <>
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              color: "#5566aa",
              animation: "glitch-1 0.2s infinite linear alternate-reverse",
              mixBlendMode: "multiply",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          >
            {children}
          </span>
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              color: "#8899cc",
              animation: "glitch-2 0.2s infinite linear reverse",
              mixBlendMode: "multiply",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
