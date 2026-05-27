import { Presentation, Users, Calendar } from "lucide-react";
import FadeIn from "./FadeIn";

const talks = [
  {
    title: "CISSP Domain 7: Security Operations",
    program: "Route to Readiness Program",
    audience: "Cisco Internal",
    year: "2025 & 2026",
    description:
      "Delivered a deep-dive session on CISSP Domain 7 — covering incident management, disaster recovery, logging & monitoring, and change management — as part of Cisco\u2019s internal Route to Readiness certification program.",
    tags: ["CISSP", "Security Operations", "Certification Prep"],
  },
  {
    title: "AI Security Session: Cisco Secure Workload",
    program: "AI Security Sessions",
    audience: "Cisco Internal",
    year: "2026",
    description:
      "Presented innovative AI use cases for Cisco Secure Workload — demonstrating how Python and Claude AI agents can automate policy analysis, microsegmentation maturity assessments, and operational queries.",
    tags: ["AI", "Cisco Secure Workload", "Automation"],
  },
  {
    title: "AI Security Session: Cisco WSA",
    program: "AI Security Sessions",
    audience: "Cisco Internal",
    year: "2026",
    description:
      "Showcased AI-driven automation for Cisco Web Security Appliance — including automated policy review, configuration gap analysis, and compliance reporting using Python tooling.",
    tags: ["AI", "Cisco WSA", "Policy Review"],
  },
];

export default function Talks() {
  return (
    <section id="talks" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
            <span className="text-xs font-mono text-neon-purple tracking-widest uppercase">
              Presentations
            </span>
            <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Talks & <span className="text-neon-purple">Sessions</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talks.map((talk, i) => (
            <FadeIn key={talk.title} delay={0.1 * i}>
              <div className="group p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-purple/30 transition-all duration-300 h-full flex flex-col">
                <Presentation className="w-8 h-8 text-neon-purple mb-4 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all" />

                <h3 className="font-bold text-foreground mb-2 leading-tight">
                  {talk.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-mono text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {talk.audience}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {talk.year}
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  {talk.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {talk.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-neon-purple/5 border border-neon-purple/20 text-neon-purple/70 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
