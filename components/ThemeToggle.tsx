"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme !== "light";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-200"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
