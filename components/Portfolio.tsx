"use client";

import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import GlitchText from "./GlitchText";

const projects = [
  {
    title: "Pudgy Penguins",
    description:
      "The flagship NFT collection and cultural phenomenon bridging Web3 to mainstream audiences through lovable characters, physical toys, and an engaged community of millions.",
    href: "https://www.pudgypenguins.com/",
    icon: "🐧",
  },
  {
    title: "OverpassIP",
    description:
      "The intellectual property and licensing arm managing the Pudgy Penguins brand across physical products, partnerships, and global retail distribution.",
    href: "https://www.igloo.inc/",
    icon: "🏗️",
  },
  {
    title: "Abstract Chain",
    description:
      "A custom-built Ethereum Layer 2 designed for consumer-facing applications, making onchain experiences accessible and delightful for everyday users.",
    href: "https://www.abs.xyz/",
    icon: "⛓️",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="snap-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(56,62,78,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Top fade from hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#060810] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="mb-6 inline-block text-[10px] font-medium uppercase tracking-[0.4em] text-ice-600"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Ecosystem
          </motion.span>
          <GlitchText
            as="h2"
            className="text-5xl font-bold tracking-[-0.02em] text-ice-100 sm:text-6xl"
          >
            Portfolio
          </GlitchText>
          <motion.div
            className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-ice-500 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ice-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Three pillars driving the consumer crypto revolution — from NFTs to
            infrastructure.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <PortfolioCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060810] to-transparent" />
    </section>
  );
}
