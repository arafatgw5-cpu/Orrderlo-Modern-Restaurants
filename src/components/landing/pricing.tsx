"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { plans } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 border-y border-border/60 bg-card/30 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Flat per location.{" "}
              <span className="text-gradient-ember">No surprises.</span>
            </>
          }
          description="Pick a plan that fits your room today. Upgrade as you grow — your data, menus, and staff all move with you."
        />

        <Stagger
          className="mx-auto mt-14 grid max-w-6xl items-stretch gap-5 lg:grid-cols-3"
          stagger={0.1}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.id} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-7 transition-all duration-500",
                  plan.highlighted
                    ? "border-2 border-foreground bg-card shadow-premium lg:-translate-y-3 lg:scale-[1.02]"
                    : "border-hairline bg-card/60 backdrop-blur hover:border-foreground/20 hover:bg-card",
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                )}

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.cadence}</span>
                </div>

                <Button
                  asChild
                  variant={plan.highlighted ? "default" : "outline"}
                  className={cn(
                    "mt-6 h-11 w-full rounded-xl text-sm font-medium",
                    plan.highlighted &&
                      "bg-foreground text-background hover:bg-foreground/90",
                  )}
                >
                  <a href="#cta">
                    {plan.cta}
                    {!plan.highlighted && (
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    )}
                  </a>
                </Button>

                <ul className="mt-7 flex flex-col gap-3 border-t border-border/60 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                          plan.highlighted
                            ? "bg-ember/15 text-ember"
                            : "bg-foreground/8 text-foreground/70",
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          All plans include transparent interchange-plus payment processing.
          <br className="hidden sm:block" />
          No setup fees, no per-register fees, no annual true-up.
        </motion.p>
      </div>
    </section>
  );
}
