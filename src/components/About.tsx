import {
  BrainCircuit,
  Network,
  ShieldCheck,
  Code2,
  Award,
  GraduationCap,
  Briefcase,
  Building2,
  ChevronRight,
} from "lucide-react";
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

const certifications = [
  "CISSP",
  "CCIE Security #57675",
  "CCIE Routing & Switching #57675",
  "SCAZT",
  "DevNet Associate",
  "AWS Cloud Practitioner",
  "AI Technical Practitioner",
];

const education = [
  {
    institution: "Tecnologico de Monterrey - EGADE / ITESM",
    degree: "Master in Business Administration (MBA)",
    years: "2024 - 2026",
  },
  {
    institution: "Tecnologico de Monterrey",
    degree: "Master in Cybersecurity",
    years: "2021 - 2022",
  },
  {
    institution: "Tecnologico de Monterrey",
    degree: "Bachelor of Engineering in Computer Systems",
    years: "2003 - 2008",
  },
];

const ciscoExperience = [
  {
    company: "Cisco Systems - Professional Services CX",
    location: "Mexico City, MX",
    role: "Customer Delivery Security Architect",
    period: "Nov 2024 - May 2026",
    summary:
      "Lead Security Architect for enterprise customers across the Americas, responsible for security solution design, delivery, and post-deployment optimization across Cisco\u2019s security portfolio. Drive Zero Trust, Secure Access, microsegmentation, network visibility, and AI automation initiatives within the Security Consulting team.",
    bullets: [
      "Led AI adoption initiatives within the Security Consulting team by developing Python and AI-assisted automation tools that accelerated document processing and operational analysis.",
      "Designed and deployed Zero Trust microsegmentation architectures using Cisco Secure Workload for enterprise customers across LATAM.",
      "Supported early customer adoption of Cisco Secure Access, including migration scenarios from Cisco Umbrella to Secure Access.",
      "Delivered architecture guidance, validation, and optimization for environments involving Secure Workload, Secure Network Analytics, Secure Access, ISE, NGFW, and Umbrella.",
      "Recognized by Cisco CX leadership for innovation, automation, and measurable productivity impact.",
    ],
  },
  {
    company: "Cisco Systems - Professional Services CX",
    location: "Mexico City, MX",
    role: "Consulting Engineer, Security Solutions",
    period: "Oct 2016 - Nov 2024",
    summary:
      "Delivered end-to-end Cisco Security projects across the Americas, managing the full lifecycle from architecture design and implementation to documentation, validation, and operational handover.",
    bullets: [
      "Delivered 50+ enterprise security solution deployments across Canada, United States, Mexico, Brazil, Chile, and Argentina.",
      "Created HLD, LLD, NRFU, and NIP documentation for complex security engagements across Cisco\u2019s security portfolio.",
      "Implemented Cisco Secure Workload microsegmentation policies across multi-site enterprise environments.",
      "Delivered Cisco Secure Network Analytics projects, including flow collection, host group hierarchy design, custom security events, and response management integration.",
      "Served as Change Management lead for complex engagements, building lab environments to validate edge cases and coordinate escalations with Cisco TAC and Business Unit teams.",
    ],
  },
];

const earlierExperience = [
  {
    company: "Axtel - Nationwide Telecommunications Carrier",
    role: "Security Specialist",
    period: "Jun 2015 - Oct 2016",
    description:
      "Deployed ISE, VPN, ASA, and Sourcefire security solutions for enterprise carrier customers; led security technical initiatives and designed LAN/WAN architectures using BGP, OSPF, DMVPN, and Cisco Nexus platforms.",
  },
  {
    company: "Hola Innovacion - Network Services",
    role: "Field Engineer",
    period: "Dec 2013 - May 2015",
    description:
      "Deployed Cisco Unified Wireless Network solutions, including site surveys with Ekahau, LAN/WLAN integration, and security hardening for enterprise customers.",
  },
  {
    company: "Cuatro Networks - Network Services",
    role: "Solutions Architect & Systems Engineer",
    period: "Sep 2010 - Dec 2013",
    description:
      "Designed Cisco LAN, WLAN, Data Center, Security, and Meraki cloud solutions following the PDI lifecycle for enterprise and mid-market customers.",
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

        {/* Certifications */}
        <FadeIn delay={0.1}>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-neon-blue" />
            <h3 className="text-xl font-bold text-foreground">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-lg bg-card-bg border border-neon-blue/20 text-sm font-mono text-neon-blue hover:border-neon-blue/50 hover:shadow-[0_0_12px_rgba(0,212,255,0.15)] transition-all duration-300"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.1}>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-neon-purple" />
            <h3 className="text-xl font-bold text-foreground">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-lg bg-card-bg border border-card-border hover:border-neon-purple/30 transition-all duration-300"
              >
                <p className="text-xs font-mono text-neon-purple mb-2">{edu.years}</p>
                <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-sm text-gray-500">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Professional Experience */}
        <FadeIn delay={0.1}>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-neon-green" />
            <h3 className="text-xl font-bold text-foreground">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            {ciscoExperience.map((exp) => (
              <div
                key={exp.role}
                className="p-6 sm:p-8 rounded-lg bg-card-bg border border-card-border hover:border-neon-green/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{exp.role}</h4>
                    <p className="text-sm text-neon-blue">{exp.company} &middot; {exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-neon-green whitespace-nowrap px-3 py-1 rounded-full border border-neon-green/20 bg-neon-green/5 self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.summary}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-500">
                      <ChevronRight className="w-4 h-4 text-neon-green/60 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Earlier Experience */}
        <FadeIn delay={0.1}>
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-bold text-gray-400">Earlier Experience</h3>
          </div>
          <div className="space-y-4">
            {earlierExperience.map((exp) => (
              <div
                key={exp.company}
                className="p-5 rounded-lg bg-card-bg border border-card-border hover:border-card-border/80 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
