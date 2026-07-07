"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats, type Stat } from "@/lib/site-data";

/**
 * Statistics band — responsive rhythm break.
 * Full Light and Dark Mode compatibility.
 */
export function Statistics() {
  return (
    <section
      aria-label="Orrderlo by the numbers"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32
                 bg-slate-50 text-slate-900
                 dark:bg-[#0A0A0A] dark:text-white
                 transition-colors duration-500"
    >
      {/* Dotted Texture - Light/Dark Mode */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-20
                   bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-[size:24px_24px]
                   [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
                   dark:bg-[radial-gradient(rgba(255,107,53,0.3)_1px,transparent_1px)]
                   transition-opacity duration-500"
      />

      {/* Gradient Glow - Dark Mode Only */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF6B35]/5 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em]
                       border border-slate-200 bg-slate-100 text-slate-600
                       dark:border-[#FF6B35]/20 dark:bg-[#FF6B35]/5 dark:text-[#FF6B35]
                       backdrop-blur transition-colors duration-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            By the numbers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-medium leading-tight tracking-tight
                       text-slate-900
                       dark:text-white
                       sm:text-4xl md:text-[2.85rem]
                       transition-colors duration-300"
          >
            Numbers the line cooks{" "}
            <span className="text-[#FF6B35] dark:text-[#FF8C42]">
              and the CFO
            </span>{" "}
            both respect.
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatTile key={stat.id} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatTile({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  const formatted =
    stat.value >= 1000 && stat.id !== "uptime"
      ? Math.round(display).toLocaleString()
      : Number.isInteger(stat.value)
        ? Math.round(display).toString()
        : display.toFixed(2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Card Background - Dark Mode */}
      <div className="absolute inset-0 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 transition-colors duration-300" />

      <div className="relative flex items-baseline py-6 px-4">
        {stat.prefix && (
          <span className="text-3xl font-medium
                           text-slate-400
                           dark:text-white/50
                           sm:text-4xl
                           transition-colors duration-300">
            {stat.prefix}
          </span>
        )}
        <span className="text-5xl font-medium tracking-tight
                         text-slate-900
                         dark:text-white
                         sm:text-6xl
                         transition-colors duration-300">
          {formatted}
        </span>
        <span className="text-3xl font-medium
                         text-[#FF6B35]
                         dark:text-[#FF8C42]
                         sm:text-4xl
                         transition-colors duration-300">
          {stat.suffix}
        </span>
      </div>
      <p className="relative mt-3 text-sm font-semibold uppercase tracking-[0.14em]
                    text-slate-900
                    dark:text-white
                    transition-colors duration-300">
        {stat.label}
      </p>
      <p className="relative mt-1.5 max-w-[18ch] text-sm
                    text-slate-500
                    dark:text-white/50
                    transition-colors duration-300">
        {stat.description}
      </p>
    </motion.div>
  );
}