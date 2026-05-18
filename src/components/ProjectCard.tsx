import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  tags: string[];
  icon: LucideIcon;
  screenshot?: string;
  featured?: boolean;
  github?: string;
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-xl bg-card-bg border border-card-border overflow-hidden card-glow transition-all duration-300 hover:border-neon-green/30">
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-neon-green/10 text-neon-green border border-neon-green/30 rounded-full">
          Featured
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {project.screenshot && (
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[360px] overflow-hidden">
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              fill
              unoptimized
              className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card-bg/80 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent lg:hidden" />
          </div>
        )}

        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <project.icon className="w-6 h-6 text-neon-green" />
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
          </div>

          <p className="text-gray-400 leading-relaxed mb-3">{project.description}</p>

          {project.longDescription && (
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {project.longDescription}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-neon-blue/5 text-neon-blue border border-neon-blue/20 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-neon-green hover:underline"
            >
              View on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-lg bg-card-bg border border-card-border overflow-hidden card-glow transition-all duration-300 hover:border-neon-blue/30">
      {project.screenshot && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            fill
            unoptimized
            className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <project.icon className="w-5 h-5 text-neon-blue" />
          <h3 className="font-semibold text-foreground">{project.title}</h3>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono bg-card-border/50 text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
