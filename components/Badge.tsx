import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100",
        className
      )}
    >
      {children}
    </span>
  );
}
