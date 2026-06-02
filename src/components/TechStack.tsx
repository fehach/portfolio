import FadeIn from "./FadeIn";

const groups = [
  {
    title: "Cisco Security",
    color: "text-neon-blue",
    border: "border-neon-blue/20",
    technologies: ["Secure Workload", "Secure Access", "ISE", "Secure Network Analytics", "Umbrella", "NGFW / FMC"],
  },
  {
    title: "Architecture Domains",
    color: "text-neon-green",
    border: "border-neon-green/20",
    technologies: ["Zero Trust", "Microsegmentation", "PCI-DSS", "Incident Response", "OT Visibility", "Network Security"],
  },
  {
    title: "Automation Stack",
    color: "text-neon-purple",
    border: "border-neon-purple/20",
    technologies: ["Python", "Claude AI", "REST APIs", "Dashboards", "CSV Reporting", "Next.js"],
  },
];

export default function TechStack() {
  return (
    <section id="technologies" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
            <span className="text-xs font-mono text-neon-purple tracking-widest uppercase">
              Technologies
            </span>
            <div className="h-px flex-1 max-w-12 bg-neon-purple/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Tools, Platforms & <span className="text-neon-purple">Domains</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((group, i) => (
            <FadeIn key={group.title} delay={0.08 * i}>
              <div className={`p-6 rounded-xl bg-card-bg border ${group.border} h-full`}>
                <h3 className={`font-bold mb-5 ${group.color}`}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded border border-card-border bg-background/40 text-xs font-mono text-gray-400"
                    >
                      {tech}
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
