"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Animated gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(56, 62, 78, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(182, 186, 197, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(182,186,197,1) 1px, transparent 1px), linear-gradient(90deg, rgba(182,186,197,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-ice-200/20"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              left: `${(i * 5.3) % 100}%`,
              top: `${(i * 7.1) % 100}%`,
              animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ice-700/30 bg-ice-800/30 px-4 py-1.5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ice-200" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
          <span className="text-xs font-medium tracking-wider text-ice-300">
            PARENT COMPANY OF PUDGY PENGUINS
          </span>
        </motion.div>

        <GlitchText as="h1" className="mb-6 text-5xl font-bold leading-tight tracking-tight text-ice-100 sm:text-6xl lg:text-7xl">
          Building the Largest Onchain Community
        </GlitchText>

        <motion.p
          className="mb-8 max-w-xl text-lg leading-relaxed text-ice-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ScrambleText text="Igloo Inc. is driving the consumer crypto revolution through Pudgy Penguins, OverpassIP, and Abstract Chain." />
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="#portfolio"
            className="group relative overflow-hidden rounded-full bg-ice-200 px-8 py-3 text-sm font-semibold text-ice-900 transition-all hover:bg-ice-100 hover:shadow-[0_0_30px_rgba(182,186,197,0.2)]"
          >
            Explore Our Portfolio
          </a>
          <a
            href="#links"
            className="rounded-full border border-ice-600/40 px-8 py-3 text-sm font-semibold text-ice-300 transition-all hover:border-ice-400/60 hover:text-ice-100"
          >
            Connect With Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ice-500">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-ice-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
