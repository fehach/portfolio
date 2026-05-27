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
  Landmark,
  Quote,
  Languages,
  Flag,
} from "lucide-react";
import FadeIn from "./FadeIn";

const skills = [
  {
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    description: "Designed and delivered Zero Trust microsegmentation architectures for 60+ LATAM enterprises across banking, telecom, and government — from architecture design through phased rollout and full handover documentation.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Firewall policy, VPN architecture, and threat detection with Cisco Secure Workload, Secure Network Analytics, Umbrella, Secure Access, and ISE across 6 countries.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Automation",
    description: "Built Python + AI agents (including Claude-powered API tools) that reduced manual SOC query time from hours to under 5 minutes — transforming what was hours of manual work into seconds.",
  },
  {
    icon: Code2,
    title: "Python & DevSecOps",
    description: "Developing dashboards, API integrations, MCP servers, and automated reporting tools that eliminate repetitive analyst work across customer environments.",
  },
  {
    icon: Landmark,
    title: "PCI-DSS Compliance",
    description: "Led PCI-DSS scoping, segmentation design, and compliance delivery for 4 payment-processing environments in LATAM banking using Cisco Secure Workload and Secure Network Analytics.",
  },
];

const recognitions = [
  {
    quote: "We would like to express our sincere gratitude for your proactive use of AI tools to enhance our team\u2019s efficiency. By streamlining our document processing, you have transformed what was once an activity of a couple of hours of manual work into a result achieved in mere seconds. We also want to commend you not only for developing this solution but for your dedication to sharing this knowledge and empowering others to learn.",
    attribution: "Cisco CX Leadership",
  },
  {
    quote: "Thanks for all your efforts to drive AI adoption in Security by ideating new and innovative use cases, thoroughly testing, and presenting on the AI Security sessions. We could not have come this far in our AI adoption journey without your individual support and dedication!",
    attribution: "Cisco CX Leadership",
  },
];

const certifications = [
  {
    name: "CCIE Security",
    badge: "https://images.credly.com/images/726a322c-efb3-42d7-b87e-8ce8a587ec57/cisco_ccie_security.png",
  },
  {
    name: "CCIE Enterprise",
    badge: "https://images.credly.com/images/838c1e62-78d4-4214-a51e-f136beabf891/CCIE_Enterprise_large.png",
  },
  {
    name: "CISSP",
    badge: "https://images.credly.com/images/de7e10b8-25a9-420b-834c-1e9cffd3b2fa/image.png",
  },
  {
    name: "AWS Cloud Practitioner",
    badge: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    name: "AI Technical Practitioner",
    badge: "https://images.credly.com/images/ef187a35-68d1-48ea-85f2-0ac1fbdd0b5f/blob",
  },
  {
    name: "Secure Cloud Access",
    badge: "https://images.credly.com/images/b873bef6-d866-4464-8e33-6c5b051513dd/blob",
  },
  {
    name: "CCNA Automation",
    badge: "https://images.credly.com/images/6226d25d-d002-4de7-92bc-4263b44483b5/blob",
  },
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
      "Led AI adoption within the Security Consulting team by building Python + Claude AI automation tools \u2014 transforming document processing from hours of manual work into results achieved in seconds, recognized by Cisco CX leadership for measurable productivity impact.",
      "Designed and deployed Zero Trust microsegmentation architectures using Cisco Secure Workload for enterprise banking customers across LATAM \u2014 enabling 4 banks to achieve PCI-DSS compliance without disrupting live payment infrastructure.",
      "Supported early customer adoption of Cisco Secure Access, including migration scenarios from Cisco Umbrella to Secure Access \u2014 reducing transition risk through phased rollout and validation.",
      "Delivered architecture guidance, validation, and optimization for environments involving Secure Workload, Secure Network Analytics, Secure Access, ISE, NGFW, and Umbrella across multiple enterprise accounts.",
      "Built an AI-powered security query agent (CSW OpenAPI Agent) that cut recurring SOC analyst query time from hours to under 5 minutes per investigation \u2014 eliminating manual CLI-diving for threat lookups.",
    ],
  },
  {
    company: "Cisco Systems - Professional Services CX",
    location: "Mexico City, MX",
    role: "Consulting Engineer, Security Solutions",
    period: "Oct 2016 - Nov 2024",
    summary:
      "Delivered end-to-end Cisco Security projects across the Americas, managing the full lifecycle from architecture design and implementation to documentation, validation, and operational handover. 60+ enterprise deployments across 6 countries.",
    bullets: [
      "Delivered 60+ enterprise security solution deployments across Canada, United States, Mexico, Brazil, Chile, and Argentina \u2014 spanning banking, telecom, government, and insurance verticals.",
      "Created HLD, LLD, NRFU, and NIP documentation for complex security engagements \u2014 used as reference templates across the CX Security team for subsequent engagements.",
      "Implemented Cisco Secure Workload microsegmentation policies across multi-site enterprise environments \u2014 including PCI-DSS scoping and QSA evidence packaging for banking customers.",
      "Delivered Cisco Secure Network Analytics projects end-to-end: flow collection, host group hierarchy design, custom security events, and response management integration \u2014 giving SOC teams real-time visibility they previously lacked.",
      "Served as Change Management lead for complex engagements, building lab environments to validate edge cases and coordinate escalations with Cisco TAC and Business Unit teams \u2014 reducing deployment risk on high-stakes accounts.",
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
          <p className="text-gray-400 leading-relaxed text-center text-base sm:text-lg mb-6">
            When LATAM banks needed to reach{" "}
            <span className="text-neon-green font-semibold">PCI-DSS compliance</span>{" "}
            without disrupting live payment infrastructure, I designed and delivered
            full microsegmentation architectures using Cisco Secure Workload
            &mdash; leveraging the integration with{" "}
            <span className="text-neon-blue font-semibold">Cisco FMC</span>{" "}
            so firewall policies are updated dynamically, enabling agentless
            segmentation and traffic control across different zones within the
            Data Center. That kind of engagement &mdash; high-stakes, technically complex,
            timeline-constrained &mdash; is what I&apos;ve been doing across{" "}
            <span className="text-neon-blue font-semibold">
              60+ enterprise customers in 6 countries
            </span>{" "}
            for 16 years.
          </p>
          <p className="text-gray-400 leading-relaxed text-center text-base sm:text-lg mb-6">
            I also deployed{" "}
            <span className="text-neon-blue font-semibold">
              Cisco Secure Network Analytics
            </span>{" "}
            to provide full traffic visibility between IT and OT environments
            &mdash; enabling compliance-driven segmentation and integrating with{" "}
            <span className="text-neon-green font-semibold">Cisco ISE</span>{" "}
            for automated threat response and containment actions in real time.
          </p>
          <p className="text-gray-400 leading-relaxed text-center text-base sm:text-lg">
            I&apos;m a security architect who also likes vibe coding and writes
            code. My{" "}
            <span className="text-neon-purple font-semibold">
              Python and AI automations
            </span>{" "}
            have cut manual configuration during maintenance windows and
            operations from hours to minutes across multiple customer
            environments. I think in systems &mdash; architecture, policy,
            workflow &mdash; but I stay close to the implementation because
            that&apos;s where security programs actually succeed or fail.
          </p>
        </div>
        </FadeIn>

        {/* Recognition Quotes */}
        <FadeIn delay={0.15}>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((rec, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-card-bg border border-neon-green/10 relative"
              >
                <Quote className="w-6 h-6 text-neon-green/20 absolute top-4 right-4" />
                <p className="text-sm text-gray-400 leading-relaxed italic mb-4">
                  &ldquo;{rec.quote}&rdquo;
                </p>
                <p className="text-xs font-mono text-neon-green">&mdash; {rec.attribution}</p>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href="https://www.credly.com/users/federico-hach"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card-bg border border-card-border hover:border-neon-blue/40 hover:shadow-[0_0_16px_rgba(0,212,255,0.1)] transition-all duration-300"
              >
                <img
                  src={cert.badge}
                  alt={cert.name}
                  width={80}
                  height={80}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs font-mono text-gray-400 text-center leading-tight group-hover:text-neon-blue transition-colors">
                  {cert.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Languages */}
        <FadeIn delay={0.1}>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Languages className="w-5 h-5 text-neon-green" />
            <h3 className="text-xl font-bold text-foreground">Languages & Citizenship</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="px-5 py-3 rounded-lg bg-card-bg border border-neon-green/20 hover:border-neon-green/50 hover:shadow-[0_0_12px_rgba(0,255,136,0.15)] transition-all duration-300">
              <span className="text-sm font-mono text-neon-green">English</span>
              <span className="text-xs text-gray-500 ml-2">B2 High-Mid &middot; EF SET</span>
            </div>
            <div className="px-5 py-3 rounded-lg bg-card-bg border border-neon-green/20 hover:border-neon-green/50 hover:shadow-[0_0_12px_rgba(0,255,136,0.15)] transition-all duration-300">
              <span className="text-sm font-mono text-neon-green">Spanish</span>
              <span className="text-xs text-gray-500 ml-2">Native</span>
            </div>
            <div className="px-5 py-3 rounded-lg bg-card-bg border border-neon-purple/20 hover:border-neon-purple/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)] transition-all duration-300 flex items-center gap-2">
              <Flag className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-mono text-neon-purple">German Citizenship</span>
            </div>
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
