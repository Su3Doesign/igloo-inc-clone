"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import ScrambleText from "./ScrambleText";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section
      id="hero"
      className="snap-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[#060810]" />

      {/* Animated radial gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(56,62,78,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 70%, rgba(30,34,48,0.4) 0%, transparent 70%),
            radial-gradient(ellipse 100% 40% at 50% 100%, rgba(182,186,197,0.04) 0%, transparent 50%)
          `,
          animation: "gradient-morph 15s ease-in-out infinite",
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(182,186,197,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(182,186,197,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particle canvas */}
      <div className="absolute inset-0 opacity-60">
        <ParticleField count={100} speed={0.4} connectionDistance={150} />
      </div>

      {/* Scan line effect */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
      >
        <div
          className="absolute left-0 h-[2px] w-full bg-ice-200"
          style={{ animation: "scanline 8s linear infinite" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-ice-700/20 bg-ice-900/40 px-5 py-2 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span
            className="h-2 w-2 rounded-full bg-ice-200"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-ice-400">
            Parent Company of Pudgy Penguins
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <GlitchText
            as="h1"
            className="mb-8 text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-ice-100"
          >
            Building the Largest
            <br />
            <span className="bg-gradient-to-r from-ice-200 via-ice-300 to-ice-500 bg-clip-text text-transparent">
              Onchain Community
            </span>
          </GlitchText>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <p className="text-lg leading-relaxed text-ice-400">
            <ScrambleText
              text="Igloo Inc. is driving the consumer crypto revolution through Pudgy Penguins, OverpassIP, and Abstract Chain."
              speed={20}
            />
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <a
            href="#portfolio"
            className="group relative overflow-hidden rounded-full border border-ice-200/20 bg-ice-200/10 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ice-100 backdrop-blur-sm transition-all duration-500 hover:border-ice-200/40 hover:bg-ice-200/20 hover:shadow-[0_0_60px_rgba(182,186,197,0.15)]"
          >
            <span className="relative z-10">Explore Portfolio</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ice-200/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#links"
            className="rounded-full border border-ice-700/30 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ice-500 transition-all duration-500 hover:border-ice-600/50 hover:text-ice-300"
          >
            Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-ice-600">
            Scroll
          </span>
          <div className="relative h-10 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-ice-600 to-transparent" />
            <motion.div
              className="absolute top-0 h-3 w-[1px] bg-ice-300"
              animate={{ y: [0, 28, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060810] to-transparent" />
    </section>
  );
}
