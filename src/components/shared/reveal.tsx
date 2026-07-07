"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Use a custom variant instead of the default fadeUp. */
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "span";
  amount?: number;
  once?: boolean;
};

/**
 * Scroll-triggered reveal wrapper built on Framer Motion.
 * Defaults to a soft fade + rise + blur, but accepts any variant.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
  amount = 0.2,
  once = true,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
};

/**
 * Wrap a group of <Reveal> children to stagger their entrance.
 * Each direct child should be a motion element with `variants`.
 */
export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  amount = 0.2,
  once = true,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

/** A single motion item meant to live inside a <Stagger>. */
export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}

export { viewportOnce };
