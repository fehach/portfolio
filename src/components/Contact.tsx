"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Shield, Briefcase, Send, CheckCircle2, AlertCircle } from "lucide-react";
import ViewCounter from "./ViewCounter";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email me directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 rounded-lg bg-card-bg border border-neon-green/30 text-center">
        <CheckCircle2 className="w-10 h-10 text-neon-green mx-auto mb-3" />
        <p className="font-bold text-foreground mb-1">Message received!</p>
        <p className="text-sm text-gray-400">I&apos;ll get back to you within 48 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs font-mono text-neon-green hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-purple/30 transition-all duration-300 space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-gray-500 mb-1">
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            className="w-full bg-background/60 border border-card-border rounded px-3 py-2 text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-neon-purple/40 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-gray-500 mb-1">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={200}
            className="w-full bg-background/60 border border-card-border rounded px-3 py-2 text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-neon-purple/40 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-gray-500 mb-1">
          Message *
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={2000}
          rows={4}
          className="w-full bg-background/60 border border-card-border rounded px-3 py-2 text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-neon-purple/40 transition-colors resize-none"
          placeholder="Tell me about your project or role..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-xs font-mono">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 font-mono text-sm transition-all duration-200 disabled:opacity-50"
      >
        {status === "sending" ? (
          <>
            <span className="inline-block w-3 h-3 border border-neon-purple/60 border-t-neon-purple rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
            <span className="text-xs font-mono text-neon-purple tracking-widest uppercase">
              Contact
            </span>
            <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Let&apos;s <span className="text-neon-purple">Talk</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-2">
            Open to senior architect roles and consulting engagements.
          </p>
          <p className="text-xs text-gray-500 font-mono">
            Based in Mexico City &middot; Available across Latin America and remote globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-green/30 transition-all duration-300">
              <Briefcase className="w-6 h-6 text-neon-green mb-3" />
              <h3 className="font-bold text-foreground mb-2">Full-time roles</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Senior architect and security leadership — CISO, Principal Architect,
                Head of Security. Connect on LinkedIn and mention the role.
              </p>
              <a
                href="https://www.linkedin.com/in/federico-miguel-hach-saval-1458a114/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#0077B5] hover:text-[#00a0dc] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>

            <div className="p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-blue/30 transition-all duration-300">
              <Shield className="w-6 h-6 text-neon-blue mb-3" />
              <h3 className="font-bold text-foreground mb-2">Consulting</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Zero Trust, microsegmentation, PCI-DSS, and security automation.
                Project-based engagements across LATAM and remote globally.
              </p>
              <a
                href="mailto:ccie57675@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-mono text-neon-green hover:text-neon-green/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                ccie57675@gmail.com
              </a>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Senior Security Architect roles",
              "Principal Architect opportunities",
              "Zero Trust advisory",
              "PCI-DSS segmentation consulting",
              "AI security automation projects",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-xs font-mono text-neon-purple/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo-fhs.png" alt="FHS" width={24} height={24} className="w-6 h-6" />
          <span className="text-xs font-mono text-gray-500">
            FHS<span className="text-neon-green">.SEC</span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Federico Hach. Built with Next.js &amp; Windsurf.
          </p>
          <ViewCounter />
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/federico-miguel-hach-saval-1458a114/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-neon-green transition-colors"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
