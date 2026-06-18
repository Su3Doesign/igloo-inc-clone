"use client";

import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import UIOverlay from "@/components/UIOverlay";

const IglooScene = dynamic(() => import("@/components/IglooScene"), {
  ssr: false,
});

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback((progress: number) => {
    setScrollProgress(progress);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#a0a5b1",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <IglooScene scrollProgress={scrollProgress} />
      </div>
      <UIOverlay scrollProgress={scrollProgress} onScroll={handleScroll} />
    </div>
  );
}
