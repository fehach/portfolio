import { ArrowRight, Gauge, ShieldCheck, TimerReset } from "lucide-react";
import FadeIn from "./FadeIn";

const caseStudies = [
  {
    title: "CSW OpenAPI Agent",
    metric: "Under 5 min",
    metricLabel: "security query turnaround",
    icon: TimerReset,
    problem:
      "SOC and architecture teams spent hours navigating dashboards and manually collecting Cisco Secure Workload context.",
    approach:
      "Built a Claude-powered Python agent that interprets natural language, validates generated API calls, and returns real-time operational answers.",
    impact:
      "Reduced recurring investigation workflows from hours to minutes while preserving a safe mode for API visibility before execution.",
  },
  {
    title: "PCI-DSS Microsegmentation",
    metric: "4 banks",
    metricLabel: "enabled for compliance",
    icon: ShieldCheck,
    problem:
      "Payment environments needed PCI-DSS segmentation without disrupting live transaction infrastructure.",
    approach:
      "Designed phased Cisco Secure Workload segmentation architectures with dependency mapping, policy validation, and QSA-oriented evidence.",
    impact:
      "Enabled compliance progress with lower operational risk and a clearer path from visibility to enforcement.",
  },
  {
    title: "AI Security Automation Adoption",
    metric: "Seconds",
    metricLabel: "for repeated document tasks",
    icon: Gauge,
    problem:
      "Security teams were spending repeated manual effort on document processing, reviews, and operational reporting.",
    approach:
      "Created Python and AI-assisted workflows that convert structured and unstructured inputs into reusable analysis outputs.",
    impact:
      "Transformed multi-hour manual activities into repeatable workflows measured in seconds and recognized by Cisco CX leadership.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px flex-1 max-w-12 bg-neon-blue/40" />
            <span className="text-xs font-mono text-neon-blue tracking-widest uppercase">
              Case Studies
            </span>
            <div className="h-px flex-1 max-w-12 bg-neon-blue/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Security Work with <span className="text-neon-blue">Measurable Impact</span>
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A business-focused view of how architecture, automation, and operational execution translate into faster decisions and lower risk.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.title} delay={0.08 * i}>
              <article className="h-full p-6 rounded-xl bg-card-bg border border-card-border hover:border-neon-blue/30 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <study.icon className="w-8 h-8 text-neon-blue" />
                  <div className="text-right">
                    <p className="text-2xl font-bold text-neon-green">{study.metric}</p>
                    <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wide">
                      {study.metricLabel}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-4">{study.title}</h3>

                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-xs font-mono text-neon-purple uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-neon-blue uppercase tracking-wider mb-1">Approach</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-neon-green uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{study.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-neon-blue">
                  Outcome-oriented security delivery <ArrowRight className="w-3 h-3" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
