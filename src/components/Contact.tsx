import { Mail, Shield } from "lucide-react";

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
          Let&apos;s <span className="text-neon-purple">Connect</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Interested in discussing security architecture, Zero Trust strategies,
          or AI-driven automation? I&apos;m always open to new opportunities and
          conversations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://www.linkedin.com/in/federico-miguel-hach-saval-1458a114/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] font-mono text-sm rounded-lg hover:bg-[#0077B5]/20 transition-all duration-300"
          >
            <LinkedinIcon className="w-5 h-5" />
            Connect on LinkedIn
          </a>
          <a
            href="mailto:ccie57676@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-card-border text-gray-300 font-mono text-sm rounded-lg hover:border-neon-green/40 hover:text-neon-green transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
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
          <Shield className="w-4 h-4 text-neon-green" />
          <span className="text-xs font-mono text-gray-500">
            FHACH<span className="text-neon-green">.SEC</span>
          </span>
        </div>

        <p className="text-xs text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} Federico Hach. Built with Next.js &amp; Windsurf.
        </p>

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
