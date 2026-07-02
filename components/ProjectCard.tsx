import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: {
    title: string;
    category: string;
    date?: string;
    description: string;
    technologies: string[];
    href: string | null;
  };
  featured?: boolean;
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "glass-card group flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-glow",
        featured && "lg:col-span-2"
      )}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
        <span>{project.category}</span>
        {project.date ? (
          <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {project.date}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-950 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
      <div className="mt-7">
        {project.href ? (
          <a
            href={project.href}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
          >
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-300/70 px-4 py-2 text-sm font-semibold text-slate-500 dark:border-white/10 dark:text-slate-500"
          >
            Coming Soon
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
}
