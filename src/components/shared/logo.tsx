import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
  wordmarkClassName?: string;
  /** Render the mark in a single tone (for dark backgrounds). */
  mono?: boolean;
};

/**
 * The Orrderlo brand mark — a stylised "O" formed by a plate ring
 * with a saffron order-ticket curling through it. Original SVG, no
 * third-party assets.
 */
export function Logo({
  className,
  withWordmark = true,
  wordmarkClassName,
  mono = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orrrderlo-mark-ember" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="var(--ember)" />
            <stop offset="100%" stopColor="var(--clay)" />
          </linearGradient>
          <linearGradient id="orrrderlo-mark-saffron" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="var(--saffron)" />
            <stop offset="100%" stopColor="var(--ember)" />
          </linearGradient>
        </defs>

        {/* plate ring */}
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke={mono ? "currentColor" : "url(#orrrderlo-mark-ember)"}
          strokeWidth="3.5"
        />
        {/* order-ticket curl */}
        <path
          d="M13 20 C13 14, 18 11, 23 13 C26 14, 27 17, 25 19 L20 24"
          stroke={mono ? "currentColor" : "url(#orrrderlo-mark-saffron)"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* saffron dot */}
        <circle cx="25" cy="24.5" r="2.6" fill="var(--saffron)" />
      </svg>

      {withWordmark && (
        <span
          className={cn(
            "font-display text-[1.45rem] leading-none font-medium tracking-tight",
            mono ? "text-current" : "text-foreground",
            wordmarkClassName,
          )}
        >
          Orrderlo
        </span>
      )}
    </span>
  );
}
