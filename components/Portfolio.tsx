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
    <section id="portfolio" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-ice-500">
            Our Ecosystem
          </span>
          <GlitchText
            as="h2"
            className="text-4xl font-bold tracking-tight text-ice-100 sm:text-5xl"
          >
            Portfolio
          </GlitchText>
          <p className="mx-auto mt-4 max-w-lg text-ice-400">
            Three pillars driving the consumer crypto revolution — from NFTs to
            infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <PortfolioCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
