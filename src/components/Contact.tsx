import { Mail, Shield, Briefcase } from "lucide-react";
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
          <span className="text-xs font-mono text-neon-purple tracking-widest uppercase">
            Contact
          </span>
          <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Let&apos;s <span className="text-neon-purple">Talk</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-green/30 transition-all duration-300 text-left">
            <Briefcase className="w-6 h-6 text-neon-green mb-3" />
            <h3 className="font-bold text-foreground mb-2">Looking to hire me full-time?</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              I&apos;m open to senior architect and security leadership roles &mdash;
              CISO, Principal Architect, Head of Security. Connect on LinkedIn
              and mention the role.
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

          <div className="p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-blue/30 transition-all duration-300 text-left">
            <Shield className="w-6 h-6 text-neon-blue mb-3" />
            <h3 className="font-bold text-foreground mb-2">Need a consulting engagement?</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              If your team is navigating Zero Trust, microsegmentation, PCI-DSS,
              or security automation and you want someone who has done it before
              &mdash; I&apos;m available for project-based work.
            </p>
            <a
              href="mailto:ccie57676@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-mono text-neon-green hover:text-neon-green/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              ccie57676@gmail.com
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-500 font-mono">
          Based in Mexico City &middot; Available across Latin America and remote globally
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo-fhs.png" alt="FHS" className="w-6 h-6" />
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
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
