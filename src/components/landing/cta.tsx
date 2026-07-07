"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function CTA() {
  return (
    // Section: Light mode-এ সাদা (bg-white), Dark mode-এ Deep Black (bg-[#050505])
    <section id="cta" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 bg-white dark:bg-[#050505]">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal variants={fadeUp}>
          {/* Card: Light mode-এ হালকা গ্রে (bg-zinc-100), Dark mode-এ গাঢ় (bg-zinc-900) */}
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-16 text-zinc-900 dark:text-cream sm:px-12 sm:py-20 lg:px-20 lg:py-24 shadow-sm">
            
            {/* Texture/Pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.1] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:22px_22px]"
            />

            <motion.div
              variants={staggerContainer(0.1, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
            >
              {/* Badge */}
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/20 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-orange-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                Ready when you are
              </motion.span>

              {/* Headline */}
              <motion.h2
                variants={fadeUp}
                className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl"
              >
                Open your next service{" "}
                <span className="text-orange-600 dark:text-orange-500">on Orrderlo.</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
              >
                Spin up a register in minutes, migrate your menu in an afternoon,
                and run Friday night on a calmer floor by the weekend.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-zinc-900 dark:bg-white px-6 text-sm font-semibold text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md"
                >
                  Start 14-day free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-zinc-300 dark:border-zinc-700 bg-white dark:bg-transparent px-6 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a live demo
                </Button>
              </motion.div>

              {/* Features List */}
              <motion.ul
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400"
              >
                {["No card required", "Cancel anytime", "14-day free trial"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-orange-600 dark:text-orange-500" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}