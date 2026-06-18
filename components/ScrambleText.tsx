"use client";

import { useState, useEffect, useRef } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  trigger?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  speed = 30,
  trigger = true,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (!trigger) {
      setDisplay("");
      setStarted(false);
      return;
    }

    const timeout = setTimeout(() => {
      setStarted(true);
      let iteration = 0;
      const maxIterations = text.length;

      intervalRef.current = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return text[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        iteration += 1 / 3;

        if (iteration >= maxIterations + 1) {
          setDisplay(text);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay, speed, trigger]);

  if (!started && !display) return <span className={className}>&nbsp;</span>;

  return <span className={className}>{display}</span>;
}
