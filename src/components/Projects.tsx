import {
  Bot,
  AlertCircle,
  Globe,
  Bug,
} from "lucide-react";
import { FeaturedProjectCard, ProjectCard } from "./ProjectCard";
import type { Project } from "./ProjectCard";
import FadeIn from "./FadeIn";

const featuredProject: Project = {
  title: "CSW OpenAPI Agent",
  slug: "openapi-agent",
  description:
    "Cut analyst time on Cisco Secure Workload security queries from hours to under 5 minutes per investigation. AI-powered agent that interprets natural language questions, generates live API calls, and presents results in real-time.",
  longDescription:
    "Built to eliminate the manual CLI-diving that burns SOC analyst hours on recurring threat lookups. Features natural language Q&A about your CSW deployment, live API calls with sandbox validation, pre-built queries for common operations, safe mode that shows API calls before executing, and CSV export. Built with Python, Claude AI, and the Tetration REST API.",
  tags: ["Python", "Claude AI", "REST API", "Cisco CSW", "NLP", "Automation"],
  icon: Bot,
  screenshot: "/screenshots/openapi-agent.png",
  featured: true,
};

const otherProjects: Project[] = [
  {
    title: "CSW Red Button",
    slug: "red-button",
    description:
      "One-click forensic data collection during active security incidents \u2014 replacing a multi-step manual process that previously required Cisco TAC escalation. Gives IR teams same-day packet and flow context without waiting on ticket queues.",
    tags: ["Python", "Flask", "Cisco CSW", "Forensics"],
    icon: AlertCircle,
    screenshot: "/screenshots/red-button.png",
  },
  {
    title: "WSA Policy Review Dashboard",
    slug: "wsa-dashboard",
    description:
      "Automated review of Cisco WSA policy configurations \u2014 surfacing compliance gaps and misconfigured rules that manual review routinely misses. Displays access policies, identification profiles, HTTPS policies, custom categories, routing, and security features at a glance.",
    tags: ["Python", "Dashboard", "Cisco WSA", "XML Parsing"],
    icon: Globe,
    screenshot: "/screenshots/wsa-dashboard.png",
  },
  {
    title: "CSW Vulnerability Reports",
    slug: "vulnerability-reports",
    description:
      "Automated vulnerability analysis that processes CVE data across workloads and generates actionable security intelligence \u2014 replacing hours of manual report compilation with on-demand reporting by label.",
    tags: ["Python", "CVE", "Security", "Reporting"],
    icon: Bug,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-12 bg-neon-blue/40" />
          <span className="text-xs font-mono text-neon-blue tracking-widest uppercase">
            Portfolio
          </span>
          <div className="h-px flex-1 max-w-12 bg-neon-blue/40" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          What I&apos;ve <span className="text-neon-blue">Built</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Tools and solutions built with Windsurf IDE, combining cybersecurity
          expertise with AI-powered development to solve real enterprise challenges.
        </p>
        </FadeIn>

        <FadeIn delay={0.1}>
        <div className="mb-12">
          <FeaturedProjectCard project={featuredProject} />
        </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={0.05 * i}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
