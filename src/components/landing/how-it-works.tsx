"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { steps } from "@/lib/site-data";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From boxed-up POS to a running floor in{" "}
              <span className="text-gradient-ember">one afternoon.</span>
            </>
          }
          description="No multi-week implementation. No consultants on retainer. Plug in, compose your menu, open for service, and grow."
        />

        <div className="relative mt-16">
          {/* connecting line on desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />

          <Stagger
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            stagger={0.12}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.id}>
                  <div className="group relative flex h-full flex-col gap-5">
                    {/* number + icon medallion */}
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="relative flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl border-hairline bg-card text-foreground shadow-premium transition-transform duration-500 group-hover:-translate-y-1">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-background">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
