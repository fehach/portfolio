import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

const principles = [
  "Design for enforcement, not slideware",
  "Automate evidence collection wherever possible",
  "Reduce analyst toil with safe, explainable workflows",
  "Move Zero Trust programs through visible, phased maturity",
  "Measure security controls by operational outcomes",
];

export default function ArchitecturePrinciples() {
  return (
    <section id="principles" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="rounded-2xl border border-card-border bg-card-bg/70 p-8 sm:p-10 text-center shadow-[0_0_60px_rgba(0,255,136,0.04)]">
            <div className="inline-flex px-3 py-1 rounded-full border border-neon-green/20 bg-neon-green/5 text-xs font-mono text-neon-green tracking-widest uppercase mb-5">
              Architecture Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              How I Approach <span className="text-neon-green">Security Architecture</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3 p-4 rounded-lg bg-background/40 border border-card-border">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 leading-relaxed">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
