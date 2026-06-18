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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ice-700/15 p-[1px] transition-all duration-700"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Animated border gradient */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(182,186,197,0.2) 0%, transparent 40%, transparent 60%, rgba(182,186,197,0.1) 100%)",
        }}
      />

      {/* Card inner */}
      <div className="relative z-10 flex h-full flex-col rounded-[15px] bg-[#0c0f18]/80 p-10 backdrop-blur-xl">
        {/* Ice shimmer sweep */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[15px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(182,186,197,0.04) 40%, rgba(182,186,197,0.08) 50%, rgba(182,186,197,0.04) 60%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s infinite linear",
          }}
        />

        {/* Frost glow top edge */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ice-400/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Icon */}
        <div className="relative mb-6">
          <span className="text-4xl">{icon}</span>
          <div
            className="absolute -inset-3 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(182,186,197,0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Title */}
        <h3
          className="mb-4 text-2xl font-bold tracking-tight text-ice-100 transition-all duration-500 group-hover:text-white"
          style={{
            transition: "text-shadow 0.5s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.textShadow = "-1px 0 #ff004030, 1px 0 #00d4ff30";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.textShadow = "none";
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 flex-1 text-sm leading-[1.8] text-ice-500 transition-colors duration-500 group-hover:text-ice-400">
          {description}
        </p>

        {/* Link row */}
        <div className="flex items-center gap-3 border-t border-ice-700/10 pt-6 text-xs font-medium uppercase tracking-[0.2em] text-ice-600 transition-colors duration-500 group-hover:text-ice-300">
          <span>Explore</span>
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
          <div className="ml-auto h-[1px] flex-1 bg-gradient-to-r from-ice-700/20 to-transparent transition-all duration-700 group-hover:from-ice-500/30" />
        </div>
      </div>
    </motion.a>
  );
}
