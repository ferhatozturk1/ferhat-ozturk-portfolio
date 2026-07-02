import { Badge } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="bg-slate-100/60 py-20 dark:bg-white/[0.025] sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Stack"
          title="Technical Skills"
          description="Tools and technologies used across full-stack development, AI experiments and security-focused learning."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={(index % 3) * 0.04} className="glass-card rounded-lg p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
