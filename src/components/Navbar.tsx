"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e17]/90 backdrop-blur-md border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <Shield className="w-6 h-6 text-neon-green transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
            <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
              FHACH<span className="text-neon-green">.SEC</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-mono text-gray-400 hover:text-neon-green transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/federico-miguel-hach-saval-1458a114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono px-4 py-2 border border-neon-green/40 text-neon-green rounded hover:bg-neon-green/10 transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-neon-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0e17]/95 backdrop-blur-md border-b border-card-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono text-gray-400 hover:text-neon-green transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/federico-miguel-hach-saval-1458a114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono px-4 py-2 border border-neon-green/40 text-neon-green rounded hover:bg-neon-green/10 transition-all text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
