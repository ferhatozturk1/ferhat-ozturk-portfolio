import { Award } from "lucide-react";
import { Badge } from "@/components/Badge";

type CertificateCardProps = {
  certificate: {
    title: string;
    institution: string;
    date: string;
    category: string;
    description: string;
  };
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="glass-card flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-glow">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
          <Award className="h-5 w-5" aria-hidden="true" />
        </div>
        <Badge>{certificate.category}</Badge>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-slate-950 dark:text-white">
        {certificate.title}
      </h3>
      <p className="mt-3 text-sm font-medium text-cyan-700 dark:text-cyan-200">
        {certificate.institution}
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{certificate.date}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {certificate.description}
      </p>
    </article>
  );
}
