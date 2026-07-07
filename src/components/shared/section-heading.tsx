"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Optional inline node (e.g. a small badge) rendered above the title. */
  kicker?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  kicker,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {(kicker || eyebrow) && (
        <Reveal>
          {kicker ?? (
            <span className="inline-flex items-center gap-2 rounded-full border-hairline bg-card/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              {eyebrow}
            </span>
          )}
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-balance text-3xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[2.85rem]",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}