"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { whyChoose } from "@/lib/site-data";

const orrrderloRow = [
  "One unified platform, one invoice",
  "Flat per-location pricing",
  "Offline-first by default",
  "Live human support in < 4 min",
];

const legacyRow = [
  "Five vendors, five logins",
  "Per-register & per-feature fees",
  "Goes dark without internet",
  "Bot queue, callback in 24h",
];

export function WhyChoose() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 border-y border-border/60 bg-background/50 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* ---------- Left: Copy Section ---------- */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Orrderlo"
              title={
                <>
                  The platform that{" "}
                  <span className="text-gradient-ember">respects your margin.</span>
                </>
              }
              description="Switching costs are real. We earn them back in the first month — then keep compounding."
            />

            <Stagger className="mt-10 flex flex-col gap-6" stagger={0.08}>
              {whyChoose.map((item, i) => (
                <StaggerItem
                  key={item.title}
                  className="flex gap-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                    <span className="font-display text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* ---------- Right: Comparison Card (Perfect Clean Dark Mode) ---------- */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="relative">
              {/* Glow Effect */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-3xl opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 20%, color-mix(in oklch, var(--ember) 30%, transparent), transparent 70%)",
                }}
              />

              <div className="glass-card overflow-hidden rounded-2xl shadow-premium border border-border/60 bg-card/40">
                
                {/* Top Header (Dark Gray) */}
                <div className="bg-muted/40 border-b border-border/60 px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/90">
                    Orrderlo vs. the usual stack
                  </p>
                </div>

                {/* Columns Layout */}
                <div className="grid grid-cols-2">
                  
                  {/* Left Column (Orrderlo - Deep Dark Gray) */}
                  <div className="bg-card/90 border-r border-border/60 p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ember/15 text-ember">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="font-display text-lg font-medium text-foreground">
                        Orrderlo
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3.5">
                      {orrrderloRow.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm font-medium text-foreground"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-sage"
                            strokeWidth={2.5}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column (The usual - Light/Mid Gray, ঠিক আপনার ছবির মতো) */}
                  <div className="bg-muted/40 p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground/5 text-muted-foreground/50">
                        <X className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="font-display text-lg font-medium text-muted-foreground/50">
                        The usual
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3.5">
                      {legacyRow.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm font-medium text-muted-foreground/60 line-through decoration-ember/30"
                        >
                          <X
                            className="mt-0.5 h-4 w-4 shrink-0 text-ember/50"
                            strokeWidth={2.5}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Footer (Dark Gray) */}
                <div className="bg-muted/30 border-t border-border/60 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-2xl font-medium text-foreground">
                        $3,820
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        avg. monthly savings vs. prior stack
                      </p>
                    </div>
                    <a
                      href="#pricing"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-ember"
                    >
                      See pricing
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}