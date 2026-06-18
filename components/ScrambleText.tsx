"use client";

import { useEffect, useRef, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function ScrambleText({
  text,
  className = "",
  speed = 30,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
          scramble();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();

    function scramble() {
      let frame = 0;
      const total = text.length;
      const interval = setInterval(() => {
        const resolved = text.slice(0, frame);
        const remaining = Array.from({ length: total - frame }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join("");
        setDisplay(resolved + remaining);
        frame++;
        if (frame > total) clearInterval(interval);
      }, speed);
    }
  }, [text, speed, hasAnimated]);

  return (
    <span ref={ref} className={`font-mono ${className}`} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}
