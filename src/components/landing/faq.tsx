"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { faqs } from "@/lib/site-data";

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Questions, briefly{" "}
                  <span className="text-gradient-ember">answered.</span>
                </>
              }
              description="Can't find what you're looking for? Our hospitality-people support team replies in under four minutes, day or night."
            />
            <Reveal delay={0.15}>
              <a
                href="#cta"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember hover:underline"
              >
                Talk to a human →
              </a>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <Reveal delay={0.1}>
            <Accordion
              type="single"
              collapsible
              defaultValue={faqs[0]?.id}
              className="flex flex-col gap-3"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="overflow-hidden rounded-2xl border-hairline bg-card/60 px-5 backdrop-blur transition-colors data-[state=open]:bg-card data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-medium text-foreground hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
