import { Bot, ClipboardCheck, Network, Shield, Target, Workflow } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Shield,
    title: "Zero Trust & Microsegmentation Assessment",
    description:
      "Assess application dependency maps, segmentation maturity, enforcement readiness, and rollout risk against NIST SP 800-207 and Zero Trust maturity models.",
    outcomes: ["NIST 800-207 alignment", "Phased roadmap", "Policy enforcement model"],
  },
  {
    icon: ClipboardCheck,
    title: "PCI-DSS & Compliance Advisory",
    description:
      "Help payment environments reduce PCI-DSS scope, validate segmentation controls, and prepare QSA-ready evidence — with control mapping to NIST CSF and ISO 27001 where needed.",
    outcomes: ["Scope reduction strategy", "QSA-ready evidence", "Framework control mapping"],
  },
  {
    icon: Bot,
    title: "Security Automation & AI Agents",
    description:
      "Build Python tools, AI-assisted workflows, dashboards, and API integrations that reduce repetitive analyst and architect work.",
    outcomes: ["API-driven workflows", "AI-assisted triage", "Executive reporting"],
  },
  {
    icon: Network,
    title: "Cisco Security Architecture Review",
    description:
      "Review Secure Workload, Secure Access, ISE, Secure Network Analytics, Umbrella, NGFW, and FMC designs for operational readiness.",
    outcomes: ["Architecture gaps", "Optimization backlog", "Deployment risk reduction"],
  },
];

const engagementModels = [
  { icon: Target, label: "Executive advisory", detail: "Strategy, roadmap, and risk framing for security leaders." },
  { icon: Workflow, label: "Hands-on delivery", detail: "Architecture, implementation support, validation, and handover." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px flex-1 max-w-12 bg-neon-green/40" />
            <span className="text-xs font-mono text-neon-green tracking-widest uppercase">
              Services
            </span>
            <div className="h-px flex-1 max-w-12 bg-neon-green/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Consulting <span className="text-neon-green">Offerings</span>
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Practical security architecture services for teams that need Zero Trust,
            compliance, and automation programs to move from strategy into production.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.08 * i}>
              <div className="group p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-green/30 transition-all duration-300 h-full card-glow">
                <service.icon className="w-8 h-8 text-neon-green mb-4 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)] transition-all" />
                <h3 className="font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="text-xs px-2 py-1 rounded bg-neon-green/5 border border-neon-green/20 text-neon-green/80 font-mono"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl border border-card-border bg-card-bg/60 p-4 sm:p-6">
            {engagementModels.map((model) => (
              <div key={model.label} className="flex gap-4 text-left">
                <model.icon className="w-6 h-6 text-neon-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{model.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{model.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
