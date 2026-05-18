import { BrainCircuit, Network, ShieldCheck, Code2 } from "lucide-react";
import FadeIn from "./FadeIn";

const skills = [
  {
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    description: "Designing and implementing Zero Trust frameworks with microsegmentation for enterprise customers.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Cisco Secure Workload, Secure Network Analytics, Umbrella, Secure Access, Firewall, and ISE across banking, telecom, and government.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Automation",
    description: "Building intelligent agents with Claude AI and Python to reduce manual security operations from hours to seconds.",
  },
  {
    icon: Code2,
    title: "Python & DevSecOps",
    description: "Developing dashboards, API integrations, MCP servers, and automated reporting tools.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-12 bg-neon-green/40" />
          <span className="text-xs font-mono text-neon-green tracking-widest uppercase">
            About Me
          </span>
          <div className="h-px flex-1 max-w-12 bg-neon-green/40" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Who I <span className="text-neon-green">Am</span>
        </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-400 leading-relaxed text-center text-base sm:text-lg">
            Cybersecurity and Zero Trust Architect with{" "}
            <span className="text-neon-green font-semibold">16+ years</span> of
            experience designing and delivering enterprise security, network
            visibility, microsegmentation, and infrastructure solutions across the
            Americas. Proven track record leading{" "}
            <span className="text-neon-blue font-semibold">
              Cisco Security engagements
            </span>{" "}
            for banking, insurance, telecommunications, government, and enterprise
            customers. Recognized for combining deep architecture expertise with{" "}
            <span className="text-neon-purple font-semibold">
              Python and AI-driven automation
            </span>{" "}
            to reduce manual security operations from hours to seconds.
          </p>
        </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <FadeIn key={skill.title} delay={0.1 * i}>
            <div
              className="group p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-green/30 transition-all duration-300 card-glow h-full"
            >
              <skill.icon className="w-8 h-8 text-neon-green mb-4 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)] transition-all" />
              <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {skill.description}
              </p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
