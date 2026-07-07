"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { GradientBlob } from "@/components/shared/gradient-blob";

const ease = [0.16, 1, 0.3, 1] as const;

export function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 lg:py-32 dark:bg-[#09090b]"
    >
      <GradientBlob variant="ember" className="right-[-12%] top-[10%] h-[440px] w-[440px] opacity-50 dark:opacity-30" />
      <GradientBlob variant="sage" className="left-[-10%] bottom-[5%] h-[360px] w-[360px] opacity-50 dark:opacity-30" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dashboard preview"
          title={
            <>
              Every service, in{" "}
              <span className="text-gradient-ember">one calm view.</span>
            </>
          }
          description="Live covers, active tickets, labor ratio, and menu performance — updated in real time, presented without the noise."
        />

        <Reveal delay={0.1} className="mt-14">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- Large dashboard mockup ------------------------- */
function DashboardMockup() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[2.5rem] opacity-60 blur-3xl dark:opacity-20"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 20%, color-mix(in oklch, var(--saffron) 35%, transparent), transparent 70%), radial-gradient(50% 50% at 80% 80%, color-mix(in oklch, var(--ember) 30%, transparent), transparent 70%)",
        }}
      />

      <div className="glass-card overflow-hidden rounded-2xl shadow-premium dark:shadow-none dark:bg-zinc-950 dark:border dark:border-zinc-800/80">
        {/* top bar */}
        <div className="flex items-center gap-3 border-b border-border/60 dark:border-zinc-800/80 bg-card/40 dark:bg-zinc-900/80 px-5 py-3.5 backdrop-blur-sm">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-saffron/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-sage/80" />
          </div>
          <div className="mx-auto hidden items-center gap-2 rounded-md bg-background/60 dark:bg-zinc-800/60 px-3 py-1 text-[11px] font-medium text-muted-foreground dark:text-zinc-400 sm:flex shadow-inner dark:shadow-black/20">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            app.orrrderlo.com / insights
          </div>
          <div className="ml-auto flex items-center gap-2 sm:ml-0">
            <span className="hidden rounded-md bg-foreground/5 dark:bg-zinc-800/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground dark:text-zinc-400 sm:inline">
              The Tidal Room · Fri
            </span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground dark:bg-zinc-200 text-[11px] font-semibold text-background dark:text-zinc-900">
              PA
            </div>
          </div>
        </div>

        {/* body grid */}
        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.6fr_1fr] dark:bg-[#0c0c0e]">
          {/* left column */}
          <div className="flex flex-col gap-4">
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <KpiCard label="Revenue" value="$18,420" delta="+12.4%" tone="sage" />
              <KpiCard label="Checks" value="312" delta="+8.1%" tone="sage" />
              <KpiCard label="Avg check" value="$59.04" delta="+4.2%" tone="sage" />
              <KpiCard label="Labor %" value="22.8%" delta="-1.6%" tone="sage" />
            </div>

            {/* chart card */}
            <div className="rounded-xl border border-border/60 dark:border-zinc-800/60 bg-card/50 dark:bg-zinc-900/60 p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground dark:text-zinc-500">
                    Revenue · last 7 days
                  </p>
                  <p className="font-display text-2xl font-medium text-foreground dark:text-zinc-100">
                    $124,820
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-sage/15 dark:bg-sage/20 px-2 py-1 text-[11px] font-medium text-sage dark:text-sage">
                    <TrendingUp className="h-3 w-3" />
                    +12.4%
                  </span>
                  <button
                    aria-label="More options"
                    className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground dark:text-zinc-400 hover:bg-accent dark:hover:bg-zinc-800 transition-colors"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <BarChart />
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground dark:text-zinc-500">
                {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>

            {/* top items */}
            <div className="rounded-xl border border-border/60 dark:border-zinc-800/60 bg-card/50 dark:bg-zinc-900/60 p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-zinc-500">
                  Top items tonight
                </p>
                <span className="text-[11px] font-medium text-ember cursor-pointer hover:underline">View menu →</span>
              </div>
              <div className="flex flex-col gap-3">
                <ItemRow name="Wood-fired octopus" sold="38" revenue="$1,406" pct={92} />
                <ItemRow name="Saffron risotto" sold="34" revenue="$1,020" pct={82} />
                <ItemRow name="Dry-aged ribeye" sold="22" revenue="$2,200" pct={64} />
                <ItemRow name="Burrata starter" sold="41" revenue="$779" pct={58} />
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-4">
            {/* live service */}
            <div className="rounded-xl border border-border/60 dark:border-zinc-800/60 bg-card/50 dark:bg-zinc-900/60 p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-zinc-500">
                  Live service
                </p>
                <span className="inline-flex items-center gap-1 rounded-md bg-ember/10 dark:bg-ember/20 px-2 py-0.5 text-[11px] font-medium text-ember border border-ember/20">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                  7 open
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <TicketRow table="T-12" course="Mains" time="4m" tone="ember" />
                <TicketRow table="T-04" course="Apps" time="1m" tone="sage" />
                <TicketRow table="T-21" course="Dessert" time="9m" tone="saffron" />
                <TicketRow table="T-08" course="Mains" time="6m" tone="ember" />
                <TicketRow table="T-15" course="Apps" time="2m" tone="sage" />
              </div>
            </div>

            {/* station load */}
            <div className="rounded-xl border border-border/60 dark:border-zinc-800/60 bg-card/50 dark:bg-zinc-900/60 p-5 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-zinc-500">
                Station load
              </p>
              <div className="flex flex-col gap-3">
                <StationBar name="Hot apps" value={62} tone="sage" />
                <StationBar name="Grill" value={88} tone="ember" />
                <StationBar name="Garde manger" value={44} tone="sage" />
                <StationBar name="Pastry" value={28} tone="saffron" />
              </div>
            </div>

            {/* payout summary */}
            <div className="rounded-xl border border-border/60 dark:border-zinc-800/80 bg-foreground dark:bg-zinc-800 p-5 text-background dark:text-zinc-100 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-background/60 dark:text-zinc-400">
                Next payout
              </p>
              <p className="mt-1 font-display text-2xl font-medium">$18,420.00</p>
              <p className="mt-1 text-[11px] text-background/60 dark:text-zinc-400">
                Settles Sat 06:00 · interchange-plus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- sub-components ----------------------------- */
function KpiCard({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "sage" | "ember";
}) {
  return (
    <div className="rounded-xl border border-border/60 dark:border-zinc-800/60 bg-card/50 dark:bg-zinc-900/60 p-4 shadow-sm hover:dark:bg-zinc-800/80 transition-colors">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground dark:text-zinc-500">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-medium text-foreground dark:text-zinc-100">{value}</p>
      <p className={`text-[11px] font-medium ${tone === "sage" ? "text-sage dark:text-emerald-500" : "text-ember dark:text-rose-500"}`}>
        {delta}
      </p>
    </div>
  );
}

function BarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const bars = [42, 56, 38, 48, 62, 70, 88];

  return (
    <div ref={ref} className="flex h-32 items-end justify-between gap-2 sm:gap-3 relative z-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="relative flex-1 overflow-hidden rounded-t-md"
          initial={{ height: 0 }}
          animate={inView ? { height: `${h}%` } : { height: 0 }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease }}
          style={{
            background:
              i === bars.length - 1
                ? "linear-gradient(180deg, var(--ember), var(--clay))"
                : "linear-gradient(180deg, color-mix(in oklch, var(--ember) 60%, transparent), color-mix(in oklch, var(--ember) 20%, transparent))",
          }}
        >
          {i === bars.length - 1 && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-md bg-foreground dark:bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-background dark:text-zinc-900 shadow-md">
              $18.4k
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ItemRow({
  name,
  sold,
  revenue,
  pct,
}: {
  name: string;
  sold: string;
  revenue: string;
  pct: number;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3">
      <div className="space-y-1.5 w-full">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-foreground dark:text-zinc-200">{name}</p>
          <p className="text-xs text-muted-foreground dark:text-zinc-400">
            {sold} sold · <span className="text-foreground dark:text-zinc-300">{revenue}</span>
          </p>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-foreground/8 dark:bg-zinc-800/80">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-ember to-saffron"
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease }}
          />
        </div>
      </div>
    </div>
  );
}

function TicketRow({
  table,
  course,
  time,
  tone,
}: {
  table: string;
  course: string;
  time: string;
  tone: "ember" | "saffron" | "sage";
}) {
  const toneClasses = {
    ember: "bg-ember",
    saffron: "bg-saffron",
    sage: "bg-sage",
  } as const;
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-background/40 dark:bg-zinc-950/50 border border-transparent dark:border-zinc-800/40 px-3 py-2 hover:dark:bg-zinc-800/60 transition-colors">
      <span className={`h-1.5 w-1.5 rounded-full ${toneClasses[tone]}`} />
      <span className="text-xs font-semibold text-foreground dark:text-zinc-200">{table}</span>
      <span className="text-xs text-muted-foreground dark:text-zinc-400">{course}</span>
      <span className="ml-auto text-[11px] font-medium text-muted-foreground dark:text-zinc-500 font-mono">
        {time}
      </span>
    </div>
  );
}

function StationBar({
  name,
  value,
  tone,
}: {
  name: string;
  value: number;
  tone: "sage" | "ember" | "saffron";
}) {
  const toneClasses = {
    sage: "bg-sage",
    ember: "bg-ember",
    saffron: "bg-saffron",
  } as const;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foreground dark:text-zinc-300">{name}</span>
        <span className="text-muted-foreground dark:text-zinc-500">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-foreground/8 dark:bg-zinc-800/80">
        <motion.div
          className={`h-full rounded-full ${toneClasses[tone]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease }}
        />
      </div>
    </div>
  );
}