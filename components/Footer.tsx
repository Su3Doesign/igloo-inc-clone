"use client";

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/IglooInc",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/igloo-incorporated",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const ecosystemLinks = [
  { label: "Pudgy Penguins", href: "https://www.pudgypenguins.com/" },
  { label: "Abstract Chain", href: "https://www.abs.xyz/" },
  { label: "Pudgy World", href: "https://pudgypenguins.com/pudgyworld" },
];

export default function Footer() {
  return (
    <section
      id="links"
      className="snap-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32"
    >
      {/* Particle background */}
      <div className="absolute inset-0 opacity-40">
        <ParticleField count={60} speed={0.2} connectionDistance={100} />
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#060810] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="mb-6 inline-block text-[10px] font-medium uppercase tracking-[0.4em] text-ice-600">
            Connect
          </span>
          <h2 className="text-5xl font-bold tracking-[-0.02em] text-ice-100 sm:text-6xl">
            Join the Community
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-ice-500 to-transparent" />
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-ice-600">
              Follow Us
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-5 overflow-hidden rounded-xl border border-ice-700/10 bg-[#0c0f18]/60 px-7 py-5 backdrop-blur-md transition-all duration-500 hover:border-ice-600/20 hover:bg-[#0c0f18]/80"
                  aria-label={`Visit ${link.label}`}
                >
                  <span className="text-ice-500 transition-colors duration-500 group-hover:text-ice-200">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-ice-400 transition-colors duration-500 group-hover:text-ice-200">
                    {link.label}
                  </span>
                  <span className="ml-auto text-ice-700 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ice-400">
                    →
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ice-200/[0.02] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-ice-600">
              Ecosystem
            </h3>
            <div className="flex flex-col gap-4">
              {ecosystemLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-5 overflow-hidden rounded-xl border border-ice-700/10 bg-[#0c0f18]/60 px-7 py-5 backdrop-blur-md transition-all duration-500 hover:border-ice-600/20 hover:bg-[#0c0f18]/80"
                >
                  <span className="text-sm font-medium tracking-wide text-ice-400 transition-colors duration-500 group-hover:text-ice-200">
                    {link.label}
                  </span>
                  <span className="ml-auto text-ice-700 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ice-400">
                    →
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ice-200/[0.02] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <footer
        className="relative z-10 mx-auto mt-32 w-full max-w-4xl border-t border-ice-800/30 pt-8"
        role="contentinfo"
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span
            className="font-mono text-sm font-bold tracking-[0.15em] text-ice-700"
            style={{ animation: "chromatic 4s ease-in-out infinite" }}
          >
            IGLOO.INC
          </span>
          <p className="text-[11px] tracking-wide text-ice-800">
            © {new Date().getFullYear()} Igloo Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
