"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#links", label: "Connect" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#060810]/70 backdrop-blur-2xl border-b border-ice-700/10"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-mono text-sm font-bold tracking-[0.2em] text-ice-400 transition-colors hover:text-ice-200"
          style={{ animation: "chromatic 6s ease-in-out infinite" }}
        >
          IGLOO.INC
        </a>

        <ul className="hidden gap-10 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                  activeSection === link.href.slice(1)
                    ? "text-ice-200"
                    : "text-ice-600 hover:text-ice-400"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ice-400 to-transparent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-ice-500 transition-colors hover:text-ice-200 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-ice-800/20 bg-[#060810]/95 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-1 px-8 py-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ice-500 transition-colors hover:text-ice-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
