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
  {
    label: "Website",
    href: "https://www.igloo.inc/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
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
    <section id="links" className="relative overflow-hidden px-6 py-32">
      <ParticleField />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-ice-500">
            Connect
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-ice-100 sm:text-5xl">
            Join the Community
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ice-400">
            Follow our journey as we build the future of onchain experiences.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-ice-400">
              Follow Us
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-ice-700/20 bg-ice-800/20 px-6 py-4 backdrop-blur-sm transition-all hover:border-ice-500/30 hover:bg-ice-800/40"
                  aria-label={`Visit ${link.label}`}
                >
                  <span className="text-ice-400 transition-colors group-hover:text-ice-200">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium text-ice-300 transition-colors group-hover:text-ice-100">
                    {link.label}
                  </span>
                  <span className="ml-auto text-ice-600 transition-transform group-hover:translate-x-1 group-hover:text-ice-400">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Ecosystem links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-ice-400">
              Ecosystem
            </h3>
            <div className="flex flex-col gap-3">
              {ecosystemLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-ice-700/20 bg-ice-800/20 px-6 py-4 backdrop-blur-sm transition-all hover:border-ice-500/30 hover:bg-ice-800/40"
                >
                  <span className="text-sm font-medium text-ice-300 transition-colors group-hover:text-ice-100">
                    {link.label}
                  </span>
                  <span className="ml-auto text-ice-600 transition-transform group-hover:translate-x-1 group-hover:text-ice-400">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Actual footer */}
      <footer className="relative z-10 mx-auto mt-24 max-w-6xl border-t border-ice-700/20 pt-8" role="contentinfo">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-mono text-sm font-bold tracking-wider text-ice-500">
            IGLOO<span className="text-ice-600">.</span>INC
          </span>
          <p className="text-xs text-ice-600">
            © {new Date().getFullYear()} Igloo Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
