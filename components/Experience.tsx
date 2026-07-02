import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="bg-slate-100/60 py-20 dark:bg-white/[0.025] sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Experience"
          title="Professional Experience"
          description="Practical full-stack development experience with modern backend, frontend and collaboration workflows."
        />

        <Reveal className="glass-card mx-auto max-w-4xl rounded-lg p-7 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{experience.role}</h3>
                <p className="mt-2 text-base font-semibold text-cyan-700 dark:text-cyan-200">
                  {experience.company}
                </p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {experience.location}
                </p>
              </div>
            </div>
            <p className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-100">
              {experience.date}
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
