import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="bg-slate-100/60 py-20 dark:bg-white/[0.025] sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Education"
          title="Education"
          description="Academic foundation in computer engineering with a focus on practical software and AI projects."
        />

        <Reveal className="glass-card mx-auto max-w-4xl rounded-lg p-7 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
              <GraduationCap className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{education.degree}</h3>
              <p className="mt-2 text-lg font-semibold text-cyan-700 dark:text-cyan-200">{education.school}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>{education.date}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {education.location}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>GPA: {education.gpa}</Badge>
                <Badge>{education.status}</Badge>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
