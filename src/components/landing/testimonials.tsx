"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { testimonials, type Testimonial } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const accentClasses: Record<
  Testimonial["accent"],
  { ring: string; bg: string; text: string }
> = {
  ember: { ring: "bg-ember", bg: "bg-ember/10", text: "text-ember" },
  saffron: { ring: "bg-saffron", bg: "bg-saffron/15", text: "text-clay" },
  sage: { ring: "bg-sage", bg: "bg-sage/15", text: "text-sage" },
  clay: { ring: "bg-clay", bg: "bg-clay/12", text: "text-clay" },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by the line.{" "}
              <span className="text-gradient-ember">Trusted by the back office.</span>
            </>
          }
          description="Real restaurants, real Friday nights. Here's what teams say after their first month on Orrderlo."
        />

        <Stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {testimonials.map((t) => {
            const accent = accentClasses[t.accent];
            return (
              <StaggerItem key={t.id} className="h-full">
                <figure
                  className={cn(
                    "group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border-hairline bg-card/70 p-6 backdrop-blur transition-all duration-500",
                    "hover:-translate-y-1 hover:bg-card hover:shadow-premium",
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `var(--${t.accent})` }}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-saffron text-saffron"
                        />
                      ))}
                    </div>
                    <Quote
                      className="h-7 w-7 text-foreground/15"
                      strokeWidth={1.5}
                    />
                  </div>

                  <blockquote className="flex-1 text-pretty text-[15px] leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="flex items-center gap-3 border-t border-border/60 pt-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold",
                        accent.bg,
                        accent.text,
                      )}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
