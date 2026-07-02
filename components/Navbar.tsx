"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);

      const current = navItems
        .map((item) => item.href.replace("#", ""))
        .findLast((id) => {
          const section = document.getElementById(id);
          return section ? section.offsetTop <= window.scrollY + 120 : false;
        });

      if (current) {
        setActive(current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75"
          : "bg-transparent"
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="focus-ring rounded-md text-base font-bold tracking-tight text-slate-950 dark:text-white"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-3 py-2 text-sm font-medium transition",
                  active === id
                    ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-200"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-200 lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          <div className="section-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-cyan-500/10 hover:text-cyan-700 dark:text-slate-200 dark:hover:text-cyan-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
