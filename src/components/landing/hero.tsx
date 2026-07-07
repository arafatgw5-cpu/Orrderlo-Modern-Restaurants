"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Receipt, Clock, Star } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // আপনার প্রজেক্টের utils পাথ ঠিক রাখুন

// ==============================================================
// 1. PREMIUM MOTION VARIANTS (Apple/Linear/Stripe Style)
// ==============================================================
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

const staggerContainer = (stagger: number = 0.1, delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay, ease },
  },
});

// ==============================================================
// 2. BUTTON COMPONENT (Recreated from your provided code)
// ==============================================================
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

// ==============================================================
// 3. GRADIENT BLOB (Recreated from your provided code)
// ==============================================================
function GradientBlob({
  className,
  variant = "warm",
}: {
  className?: string;
  variant?: "warm" | "cool" | "ember" | "sage";
}) {
  const palette: Record<string, string> = {
    warm: "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--saffron) 70%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklch, var(--ember) 60%, transparent), transparent 60%)",
    cool: "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--sage) 70%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklch, var(--saffron) 50%, transparent), transparent 60%)",
    ember: "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--ember) 75%, transparent), transparent 60%)",
    sage: "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--sage) 65%, transparent), transparent 60%)",
  };
  return <div aria-hidden="true" className={cn("pointer-events-none absolute -z-10 rounded-full blur-3xl", className)} style={{ background: palette[variant] }} />;
}

// ==============================================================
// 4. MAIN HERO COMPONENT (ANIMATION ENHANCED)
// ==============================================================
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-aurora pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <GradientBlob variant="warm" className="left-[-10%] top-[-10%] h-[460px] w-[460px] animate-float-slow opacity-70" />
      <GradientBlob variant="sage" className="right-[-8%] top-[20%] h-[380px] w-[380px] animate-float opacity-60" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          
          {/* ========== LEFT: COPY (Stagger Page Load) ========== */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-7"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ember" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              Now onboarding restaurants across 14 cities
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-balance text-[2.6rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.4rem]"
            >
              The commerce platform for{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-gradient-ember">restaurants</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-saffron/70"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C40 3 80 3 120 6C150 8 175 7 198 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              that refuse to compromise.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Orrderlo unifies point-of-sale, online ordering, kitchen display, and
              real-time analytics into one elegant platform. Built for the rush,
              designed for the guest, loved by the line.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* Button with Magnetic Hover, Ripple & Press */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="group h-12 rounded-xl bg-foreground px-6 text-sm font-medium text-background shadow-premium transition-all hover:bg-foreground/90"
                >
                  <a href="#cta">
                    Start free trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group h-12 rounded-xl border-border bg-card/50 px-6 text-sm font-medium backdrop-blur hover:bg-card"
                >
                  <a href="#dashboard">
                    <Play className="mr-2 h-4 w-4 fill-current" />
                    Watch 2-min tour
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Star className="h-3.5 w-3.5 fill-saffron text-saffron" />
                    </motion.div>
                  ))}
                </span>
                4.9 on Capterra
              </span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>14-day free trial</span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>No card required</span>
            </motion.div>
          </motion.div>

          {/* ========== RIGHT: FLOATING DASHBOARD (Scroll Reveal) ========== */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25, duration: 0.9, ease }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <HeroDashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   4. DASHBOARD MOCKUP (ENHANCED MICRO-INTERACTIONS & PARALLAX)
   ===================================================================== */
function HeroDashboardMockup() {
  return (
    <div className="relative">
      {/* glow under the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 20%, color-mix(in oklch, var(--saffron) 50%, transparent), transparent 70%), radial-gradient(60% 60% at 80% 80%, color-mix(in oklch, var(--ember) 45%, transparent), transparent 70%)",
        }}
      />

      {/* main browser frame */}
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.4, ease }}
        className="glass-card relative overflow-hidden rounded-2xl shadow-premium"
      >
        {/* top bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-card/40 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-saffron/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-sage/80" />
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            app.orrrderlo.com / live-service
          </div>
        </div>

        {/* body */}
        <div className="grid gap-4 p-4 sm:gap-4 sm:p-5 lg:grid-cols-[1.4fr_1fr]">
          {/* KPI + chart */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-2.5">
              <KpiPill
                icon={<TrendingUp className="h-3.5 w-3.5" />}
                label="Revenue"
                value="$18,420"
                delta="+12.4%"
              />
              <KpiPill
                icon={<Receipt className="h-3.5 w-3.5" />}
                label="Checks"
                value="312"
                delta="+8.1%"
              />
              <KpiPill
                icon={<Clock className="h-3.5 w-3.5" />}
                label="Avg turn"
                value="42m"
                delta="-6.0%"
                good
              />
            </div>

            {/* chart */}
            <div className="rounded-xl border border-border/60 bg-card/50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Tonight&apos;s covers
                  </p>
                  <p className="font-display text-lg font-medium text-foreground">
                    208 / 240
                  </p>
                </div>
                <motion.span
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-md bg-sage/15 px-2 py-0.5 text-[11px] font-medium text-sage"
                >
                  Live
                </motion.span>
              </div>
              <MiniAreaChart />
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                <span>5pm</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
            </div>
          </div>

          {/* live orders */}
          <div className="flex flex-col gap-2.5 rounded-xl border border-border/60 bg-card/50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Active tickets
              </p>
              <span className="rounded-md bg-ember/10 px-2 py-0.5 text-[11px] font-medium text-ember">
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
        </div>
      </motion.div>

      {/* floating accent card 1 — top right (Infinite Gentle Float) */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
        transition={{ delay: 0.7, duration: 0.7, ease, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -right-3 -top-5 hidden rounded-2xl border border-border/60 bg-card p-3 shadow-premium sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage/15 text-sage">
            <Receipt className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Check closed
            </p>
            <p className="text-sm font-semibold text-foreground">$84.20 · T-12</p>
          </div>
        </div>
      </motion.div>

      {/* floating accent card 2 — bottom left (Infinite Gentle Float) */}
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.9 }}
        animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
        transition={{ delay: 0.85, duration: 0.7, ease, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
        className="absolute -bottom-6 -left-3 hidden rounded-2xl border border-border/60 bg-card p-3 shadow-premium sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember/15 text-ember">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Avg check
            </p>
            <p className="text-sm font-semibold text-foreground">
              $59.04 · +12.4%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* 5. DASHBOARD SUB-COMPONENTS (WITH MICRO-INTERACTIONS)                  */
/* ---------------------------------------------------------------------- */

function KpiPill({
  icon,
  label,
  value,
  delta,
  good,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
  good?: boolean;
}) {
  const isPositive = delta.trim().startsWith("+");
  const tone = good ? "text-sage" : isPositive ? "text-sage" : "text-ember";
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.04)" }}
      transition={{ duration: 0.2, ease }}
      className="rounded-xl border border-border/60 bg-card/50 p-2.5"
    >
      <div className="mb-1 flex items-center gap-1.5 text-muted-foreground">
        <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ duration: 0.2 }}>
          {icon}
        </motion.div>
        <span className="text-[10px] font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p className="font-display text-base font-medium text-foreground">{value}</p>
      <p className={`text-[10px] font-medium ${tone}`}>{delta} vs last Fri</p>
    </motion.div>
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
    <motion.div
      whileHover={{ x: 4, backgroundColor: "var(--card)", transition: { duration: 0.2 } }}
      className="flex items-center gap-2.5 rounded-lg bg-background/40 px-2.5 py-2"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${toneClasses[tone]}`} />
      <span className="text-xs font-semibold text-foreground">{table}</span>
      <span className="text-xs text-muted-foreground">{course}</span>
      <span className="ml-auto text-[11px] font-medium text-muted-foreground">
        {time}
      </span>
    </motion.div>
  );
}

function MiniAreaChart() {
  // A tasteful hand-tuned area chart drawn purely in SVG.
  const points = [12, 18, 16, 28, 24, 38, 34, 48, 44, 56, 62, 58, 72];
  const max = Math.max(...points);
  const w = 100;
  const h = 44;
  const stepX = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * stepX;
      const y = h - (p / max) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-16 w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ember)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--ember)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Animated Gradient Fill */}
      <motion.path
        d={area}
        fill="url(#hero-area)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Animated Drawing Line */}
      <motion.path
        d={path}
        fill="none"
        stroke="var(--ember)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease, delay: 0.3 }}
      />

      {/* Animated End Dot */}
      <motion.circle
        cx={(points.length - 1) * stepX}
        cy={h - (points[points.length - 1] / max) * h}
        r="2"
        fill="var(--ember)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
    </svg>
  );
}