import { cn } from "@/lib/utils";

/**
 * Soft animated gradient blobs used as decorative section backgrounds.
 * Purely ornamental — pointer-events disabled, hidden from screen readers.
 */
export function GradientBlob({
  className,
  variant = "warm",
}: {
  className?: string;
  variant?: "warm" | "cool" | "ember" | "sage";
}) {
  const palette: Record<string, string> = {
    warm:
      "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--saffron) 70%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklch, var(--ember) 60%, transparent), transparent 60%)",
    cool:
      "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--sage) 70%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklch, var(--saffron) 50%, transparent), transparent 60%)",
    ember:
      "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--ember) 75%, transparent), transparent 60%)",
    sage:
      "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--sage) 65%, transparent), transparent 60%)",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-3xl",
        className,
      )}
      style={{ background: palette[variant] }}
    />
  );
}
