"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Shield, Terminal } from "lucide-react";

const titles = [
  "Security Architect",
  "Zero Trust Strategist",
  "Python & AI Automation",
  "Microsegmentation Expert",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon-green/20 bg-neon-green/5">
          <Shield className="w-4 h-4 text-neon-green" />
          <span className="text-xs font-mono text-neon-green tracking-wider uppercase">
            16+ Years in Cybersecurity
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">Federico</span>{" "}
          <span className="glow-text text-neon-green">Hach</span>
        </h1>

        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 font-mono text-lg sm:text-xl text-neon-blue">
            <Terminal className="w-5 h-5" />
            <span>{displayed}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12">
          Designing and delivering enterprise security, network visibility,
          microsegmentation, and AI-driven automation solutions across the Americas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neon-green/10 border border-neon-green/40 text-neon-green font-mono text-sm rounded hover:bg-neon-green/20 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-card-border text-gray-300 font-mono text-sm rounded hover:border-neon-blue/40 hover:text-neon-blue transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-neon-green transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
