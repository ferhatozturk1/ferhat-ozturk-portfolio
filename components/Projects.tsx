import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A blend of production-style web applications and applied AI projects in medical image analysis, computer vision and generative AI."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.05}>
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
