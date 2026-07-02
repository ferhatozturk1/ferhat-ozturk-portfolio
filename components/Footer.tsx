import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-8 dark:border-white/10 dark:bg-slate-950/80">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2026 Ferhat Öztürk. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-300/70 bg-white text-slate-600 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-200"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
