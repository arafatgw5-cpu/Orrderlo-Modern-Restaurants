"use client";

import { motion } from "framer-motion";
import { trustedBy } from "@/lib/site-data";

/**
 * "Trusted by" strip — a calm, marquee-style row of restaurant names.
 * Dark mode optimized with Zinc palette.
 */
export function TrustedBy() {
  const row = [...trustedBy, ...trustedBy];

  return (
    <section
      aria-label="Trusted by leading restaurants"
      className="relative border-y border-border/60 dark:border-zinc-800/60 bg-card/30 dark:bg-zinc-900/30 py-12 sm:py-14"
    >
      {/* Subtle top/bottom hairline glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border dark:via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border dark:via-zinc-800 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-9 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground dark:text-zinc-500"
        >
          <span className="relative inline-flex items-center gap-2.5">
            <span className="h-px w-6 bg-border dark:bg-zinc-800" aria-hidden="true" />
            Trusted by 2,400+ restaurants in 14 cities
            <span className="h-px w-6 bg-border dark:bg-zinc-800" aria-hidden="true" />
          </span>
        </motion.p>

        <div className="group/marquee mask-fade-x relative overflow-hidden">
          <div className="flex w-max animate-marquee-slow items-center gap-14 group-hover/marquee:[animation-play-state:paused] sm:gap-16">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="select-none whitespace-nowrap font-display text-xl font-medium 
                           text-foreground/50 dark:text-zinc-500 
                           opacity-90 transition-all duration-300 ease-out 
                           hover:scale-[1.03] hover:text-foreground dark:hover:text-zinc-100 
                           hover:opacity-100 sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}