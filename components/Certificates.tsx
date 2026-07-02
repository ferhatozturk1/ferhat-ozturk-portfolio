"use client";

import { useMemo, useState } from "react";
import { CertificateCard } from "@/components/CertificateCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { certificateFilters, certificates } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Certificates() {
  const [activeFilter, setActiveFilter] = useState<(typeof certificateFilters)[number]>("All");

  const filteredCertificates = useMemo(() => {
    if (activeFilter === "All") {
      return certificates;
    }

    return certificates.filter((certificate) => certificate.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="certificates" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Growth"
          title="Certificates & Achievements"
          description="Training, workshops and recognitions that support Ferhat's development in AI, security and engineering practice."
        />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {certificateFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeFilter === filter
                  ? "border-cyan-400 bg-cyan-500 text-slate-950 shadow-glow"
                  : "border-slate-300/80 bg-white/70 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-200"
              )}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCertificates.map((certificate, index) => (
            <Reveal key={certificate.title} delay={(index % 3) * 0.04}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
