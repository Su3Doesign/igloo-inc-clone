"use client";

import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  index: number;
}

export default function PortfolioCard({
  title,
  description,
  href,
  icon,
  index,
}: PortfolioCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ice-700/20 bg-ice-800/20 p-8 backdrop-blur-md transition-all duration-500 hover:border-ice-500/30 hover:bg-ice-800/40 hover:shadow-[0_0_40px_rgba(182,186,197,0.06)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Ice shimmer effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(182,186,197,0.06) 45%, rgba(182,186,197,0.12) 50%, rgba(182,186,197,0.06) 55%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite linear",
        }}
      />

      {/* Frost border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 30px rgba(182,186,197,0.05), 0 0 15px rgba(182,186,197,0.03)",
        }}
      />

      <div className="relative z-10">
        <span className="mb-4 block text-3xl">{icon}</span>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-ice-100 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ice-400 transition-colors group-hover:text-ice-300">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-medium tracking-wide text-ice-500 transition-colors group-hover:text-ice-300">
          <span>Explore</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.a>
  );
}
