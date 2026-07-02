import { aboutCopy, aboutStats } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Profile"
          title="About Me"
          description="A focused early-career engineer candidate building across web development, AI and computer vision."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-card rounded-lg p-7 sm:p-8">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{aboutCopy}</p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 0.04} className="glass-card rounded-lg p-5">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-7 text-slate-950 dark:text-white">
                    {stat.value}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
