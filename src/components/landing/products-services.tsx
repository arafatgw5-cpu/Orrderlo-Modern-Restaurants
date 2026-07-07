"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { products, type Product } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type AccentStyle = {
  bg: string;
  text: string;
  ring: string;
  dot: string;
};

const accentMap: Record<Product["accent"], AccentStyle> = {
  ember: {
    bg: "bg-ember/10",
    text: "text-ember",
    ring: "group-hover:ring-ember/30",
    dot: "bg-ember",
  },
  saffron: {
    bg: "bg-saffron/15",
    text: "text-clay",
    ring: "group-hover:ring-saffron/30",
    dot: "bg-saffron",
  },
  sage: {
    bg: "bg-sage/15",
    text: "text-sage",
    ring: "group-hover:ring-sage/30",
    dot: "bg-sage",
  },
  clay: {
    bg: "bg-clay/12",
    text: "text-clay",
    ring: "group-hover:ring-clay/30",
    dot: "bg-clay",
  },
};

export default function ProductsServices() {
  return (
    <section id="products" className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products & services"
          title={
            <>
              Four products.{" "}
              <span className="text-gradient-ember">One ledger.</span>
            </>
          }
          description="Each Orrderlo product stands on its own — and they all speak the same language. No more reconciling five dashboards on Monday morning."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {products.map((product) => {
            const accent = accentMap[product.accent];
            const Icon = product.icon;
            return (
              <StaggerItem key={product.id}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border-hairline bg-card/70 p-6 shadow-sm backdrop-blur transition-all duration-500 ease-out",
                    "hover:-translate-y-1.5 hover:bg-card hover:shadow-premium",
                    "ring-1 ring-transparent",
                    accent.ring,
                  )}
                >
                  {/* soft radial sheen on hover, using the card's own background tone */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-foreground/[0.03] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* corner arrow */}
                  <div className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-border/0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:border-border/60 group-hover:bg-card group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ring-black/[0.03] transition-transform duration-500 group-hover:scale-105",
                      accent.bg,
                      accent.text,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {product.tagline}
                    </p>
                    <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-auto flex flex-col gap-2.5 border-t border-border/60 pt-4">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                      >
                        <span
                          className={cn(
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            accent.bg,
                          )}
                        >
                          <Check className={cn("h-2.5 w-2.5", accent.text)} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}