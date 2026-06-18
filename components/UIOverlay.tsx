"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ScrambleText from "./ScrambleText";

const NAV_ITEMS = ["home", "projects", "links"] as const;
type Section = (typeof NAV_ITEMS)[number];

const PROJECTS = [
  {
    id: "pudgy",
    label: "PORTFOLIO_CO_01",
    name: "Pudgy Penguins",
    description:
      "The flagship NFT collection bridging Web3 to mainstream audiences through lovable characters, physical toys, and an engaged community of millions.",
    website: "https://www.pudgypenguins.com",
    socials: [
      { label: "X / Twitter", href: "https://x.com/pudgypenguins" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/pudgy-penguins",
      },
      { label: "Instagram", href: "https://instagram.com/pudgypenguins" },
      { label: "TikTok", href: "https://www.tiktok.com/@pudgypenguins" },
    ],
  },
  {
    id: "overpass",
    label: "PORTFOLIO_CO_02",
    name: "Overpass",
    description:
      "The intellectual property and licensing platform turning NFT holders into entrepreneurs who profit from the brand's IP.",
    website: "https://www.overpassip.com",
    socials: [
      { label: "X / Twitter", href: "https://twitter.com/OverpassIP" },
    ],
  },
  {
    id: "abstract",
    label: "PORTFOLIO_CO_03",
    name: "Abstract",
    description:
      "A consumer-focused Ethereum Layer 2 making onchain experiences accessible and delightful for everyday users.",
    website: "https://www.abs.xyz",
    socials: [
      { label: "X / Twitter", href: "https://x.com/abstractchain" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/abstract-foundation/about/",
      },
    ],
  },
];

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/igloo-incorporated",
  },
  { label: "X / Twitter", href: "https://twitter.com/iglooinc" },
  { label: "Medium", href: "https://medium.com/@iglooinc" },
];

interface UIOverlayProps {
  scrollProgress: number;
  onScroll: (progress: number) => void;
}

export default function UIOverlay({ scrollProgress, onScroll }: UIOverlayProps) {
  const [currentSection, setCurrentSection] = useState<Section>("home");
  const [currentProject, setCurrentProject] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const scrollAccumRef = useRef(0);
  const lastWheelTime = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollProgress < 0.15) setCurrentSection("home");
    else if (scrollProgress < 0.75) {
      setCurrentSection("projects");
      const projProgress = (scrollProgress - 0.15) / 0.6;
      setCurrentProject(
        Math.min(2, Math.floor(projProgress * 3))
      );
    } else setCurrentSection("links");
  }, [scrollProgress]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      const delta = e.deltaY * 0.0003;

      if (now - lastWheelTime.current > 50) {
        scrollAccumRef.current = Math.max(0, Math.min(1, scrollAccumRef.current + delta));
        onScroll(scrollAccumRef.current);
        lastWheelTime.current = now;
      }
    },
    [onScroll]
  );

  const goToSection = useCallback(
    (section: Section) => {
      let target = 0;
      if (section === "projects") target = 0.35;
      if (section === "links") target = 0.85;
      scrollAccumRef.current = target;
      onScroll(target);
    },
    [onScroll]
  );

  const project = PROJECTS[currentProject];

  return (
    <div
      onWheel={handleWheel}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "auto",
        fontFamily: '"IBM Plex Mono", monospace',
      }}
    >
      {/* IGLOO Logo - top left */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 40,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "0.15em",
            color: "#3c3c54",
            lineHeight: 1,
          }}
        >
          <ScrambleText text="IGLOO" trigger={loaded} delay={300} speed={40} />
        </div>
      </div>

      {/* Navigation - below logo */}
      <nav
        style={{
          position: "absolute",
          top: 72,
          left: 40,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease 0.3s",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => goToSection(item)}
            style={{
              background: "none",
              border: "none",
              padding: "3px 0",
              fontSize: 10,
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: currentSection === item ? "#3c3c54" : "#67707e",
              cursor: "pointer",
              textAlign: "left",
              transition: "color 0.3s ease",
              opacity: currentSection === item ? 1 : 0.6,
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Manifesto - top left, below nav */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 40,
          maxWidth: 260,
          opacity: loaded && currentSection === "home" ? 1 : 0,
          transform: `translateY(${currentSection === "home" ? 0 : -10}px)`,
          transition: "opacity 0.6s ease, transform 0.6s ease",
          pointerEvents: currentSection === "home" ? "auto" : "none",
        }}
      >
        <div
          style={{
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "#67707e",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          ////// Manifesto
        </div>
        <p
          style={{
            fontSize: 11,
            lineHeight: 1.6,
            color: "#3c3c54",
            fontWeight: 400,
          }}
        >
          Our mission is to build the next generation of consumer brands at the
          intersection of Community, AI, and crypto.
        </p>
      </div>

      {/* Right side panels - Project info */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 320,
          opacity: currentSection === "projects" ? 1 : 0,
          transform: `translateX(${currentSection === "projects" ? 0 : 20}px)`,
          transition: "opacity 0.5s ease, transform 0.5s ease",
          pointerEvents: currentSection === "projects" ? "auto" : "none",
        }}
      >
        {/* Project label header */}
        <div
          style={{
            background: "#3c3c54",
            color: "#a1aab7",
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.15em",
            padding: "8px 14px",
            marginBottom: 2,
          }}
        >
          <ScrambleText
            text={project.label}
            trigger={currentSection === "projects"}
            delay={100}
            speed={25}
          />
        </div>

        {/* Project content */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
            padding: 20,
          }}
        >
          <h2
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#3c3c54",
              marginBottom: 12,
              letterSpacing: "0.05em",
            }}
          >
            <ScrambleText
              text={project.name}
              trigger={currentSection === "projects"}
              delay={200}
              speed={30}
            />
          </h2>

          <div
            style={{
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#67707e",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            ////// Summary
          </div>

          <p
            style={{
              fontSize: 10,
              lineHeight: 1.7,
              color: "#67707e",
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", gap: 8 }}>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#3c3c54",
                textDecoration: "none",
                padding: "6px 12px",
                border: "1px solid #3c3c54",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3c3c54";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#3c3c54";
              }}
            >
              /// Visit
            </a>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#67707e",
                textDecoration: "none",
                padding: "6px 12px",
                border: "1px solid #67707e",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#67707e";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#67707e";
              }}
            >
              /// Discover
            </a>
          </div>
        </div>

        {/* Project nav dots */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          {PROJECTS.map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: i === currentProject ? "#3c3c54" : "#67707e",
                opacity: i === currentProject ? 1 : 0.4,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Links section */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
          opacity: currentSection === "links" ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: currentSection === "links" ? "auto" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredLink(i)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: hoveredLink === i ? "#ffffff" : "#3c3c54",
              textDecoration: "none",
              padding: "10px 24px",
              background:
                hoveredLink === i
                  ? "rgba(60, 60, 84, 0.8)"
                  : "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(8px)",
              transition: "all 0.4s ease",
              textTransform: "uppercase",
              minWidth: 200,
              textAlign: "center",
            }}
          >
            <ScrambleText
              text={link.label}
              trigger={currentSection === "links"}
              delay={i * 150}
              speed={25}
            />
          </a>
        ))}
      </div>

      {/* Bottom left - scroll hint / sound toggle area */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 40,
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        {currentSection === "home" && (
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.15em",
              color: "#3c3c54",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <ScrambleText
              text="Scroll down to discover."
              trigger={loaded}
              delay={1500}
              speed={25}
            />
          </div>
        )}
      </div>

      {/* Bottom right - copyright */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          right: 40,
          fontSize: 9,
          letterSpacing: "0.1em",
          color: "#67707e",
          fontWeight: 400,
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        © {new Date().getFullYear()} Igloo Inc. All rights reserved.
      </div>

      {/* Sound icon placeholder - bottom left */}
      <button
        style={{
          position: "absolute",
          bottom: 56,
          left: 40,
          background: "rgba(255,255,255,0.4)",
          border: "none",
          padding: "6px 12px",
          fontSize: 9,
          fontFamily: '"IBM Plex Mono", monospace',
          letterSpacing: "0.1em",
          color: "#3c3c54",
          cursor: "pointer",
          textTransform: "uppercase",
          fontWeight: 500,
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1s ease 0.8s",
        }}
      >
        Sound: Off
      </button>
    </div>
  );
}
