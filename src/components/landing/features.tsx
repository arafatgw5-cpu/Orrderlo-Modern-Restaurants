"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { features } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-6", // featured 1
  "lg:col-span-6", // featured 2
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 border-y border-border/60 bg-card/30 py-24 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Immersive ambient background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-dots [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" 
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything the floor needs.{" "}
              <span className="text-gradient-ember">Nothing it doesn&apos;t.</span>
            </>
          }
          description="Built for the pace of service — fast, calm, and quietly powerful. Tap the icons to see what we mean."
        />

        <Stagger
          className="mt-14 grid auto-rows-[1fr] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12"
          stagger={0.06}
        >
          {features.map((feature, i) => {
            const isFeatured = i < 2 || i >= 6;
            return (
              <StaggerItem
                key={feature.id}
                className={cn(spans[i], "col-span-1 sm:col-span-1")}
              >
                <FeatureCard feature={feature} isFeatured={isFeatured} />
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/**
 * Extracted FeatureCard for high-performance, isolated 3D motion tracking.
 * Implements mouse-follow spotlight and spring-based perspective tilt.
 */
function FeatureCard({ feature, isFeatured }: { feature: any; isFeatured: boolean }) {
  const Icon = feature.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Motion values for raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end fluid feeling
  const springConfig = { stiffness: 300, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Spotlight radial gradient mask
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.08), transparent 80%)`;

  // 3D rotation mappings (subtle 3-degree max tilt)
  const rotateX = useTransform(smoothY, [0, 500], [3, -3]);
  const rotateY = useTransform(smoothX, [0, 500], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset tilt elegantly to center when mouse leaves
    mouseX.set(cardRef.current?.offsetWidth ? cardRef.current.offsetWidth / 2 : 250);
    mouseY.set(cardRef.current?.offsetHeight ? cardRef.current.offsetHeight / 2 : 250);
  };

  // Center spotlight initially to avoid jarring pop-in
  useEffect(() => {
    if (cardRef.current) {
      mouseX.set(cardRef.current.offsetWidth / 2);
      mouseY.set(cardRef.current.offsetHeight / 2);
    }
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered && !prefersReducedMotion ? rotateX : 0,
        rotateY: isHovered && !prefersReducedMotion ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border-hairline bg-card/80 p-6 backdrop-blur transition-all duration-500",
        "hover:bg-card hover:shadow-premium",
        isFeatured && "sm:p-8"
      )}
    >
      {/* Interactive Spotlight Overlay */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:mix-blend-overlay"
          style={{ background: spotlight }}
        />
      )}

      {/* Static Hover Glow (Fallback & Core aesthetic) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 z-0 h-32 w-32 rounded-full bg-ember/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Z-Translated Content for 3D Depth Effect */}
      <motion.div
        style={{ transform: isHovered && !prefersReducedMotion ? "translateZ(30px)" : "translateZ(0px)" }}
        className="relative z-10 flex flex-1 flex-col transition-transform duration-500 ease-out"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:bg-ember group-hover:text-ember-foreground">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
          {isFeatured && (
            <span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md transition-colors duration-300 group-hover:border-ember/30 group-hover:text-foreground">
              Core
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h3
            className={cn(
              "font-display font-medium tracking-tight text-foreground transition-colors duration-300",
              isFeatured ? "text-2xl" : "text-lg"
            )}
          >
            {feature.title}
          </h3>
          <p
            className={cn(
              "text-pretty leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
              isFeatured ? "text-base" : "text-sm"
            )}
          >
            {feature.description}
          </p>
        </div>

        {isFeatured && (
          <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-ember opacity-80 transition-all duration-300 group-hover:opacity-100">
            Learn more
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}