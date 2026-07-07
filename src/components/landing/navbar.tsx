"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { navLinks, brand, products } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
    }
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "relative mt-3 flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass shadow-premium border border-border/50 bg-background/80 backdrop-blur-md"
              : "border border-transparent bg-transparent",
          )}
          aria-label="Primary"
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${brand.name} home`}
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isProducts = link.label.toLowerCase() === "products";
              const isExternal = link.href.startsWith("http");
              const isInternalPage = link.href.startsWith("/");

              if (isProducts) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleCloseMega}
                  >
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      onFocus={openMega}
                      className={cn(
                        "group relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300",
                        megaOpen
                          ? "text-foreground bg-accent/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/30",
                      )}
                      aria-expanded={megaOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          megaOpen && "rotate-180",
                        )}
                      />
                      <motion.span
                        className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-ember"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: megaOpen ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </button>

                    {/* ★ CLEAN MEGA MENU */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 top-full mt-3 w-[min(92vw,720px)] -translate-x-1/2"
                          onMouseEnter={openMega}
                          onMouseLeave={scheduleCloseMega}
                        >
                          <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl">
                            <div className="p-5">
                              {/* Header */}
                              <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
                                <div>
                                  <h3 className="text-sm font-semibold text-foreground">
                                    Products
                                  </h3>
                                  <p className="mt-0.5 text-xs text-muted-foreground">
                                    All-in-one restaurant platform
                                  </p>
                                </div>
                              </div>

                              {/* Products Grid - Simple Data Display */}
                              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                                {products.map((product, i) => {
                                  const Icon = product.icon;
                                  return (
                                    <motion.div
                                      key={product.id}
                                      initial={{ opacity: 0, y: 8 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        delay: 0.04 * i,
                                        duration: 0.3,
                                        ease: [0.16, 1, 0.3, 1],
                                      }}
                                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent/50"
                                    >
                                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-ember">
                                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-foreground truncate">
                                          {product.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground truncate">
                                          {product.tagline}
                                        </p>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Footer CTA */}
                              <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
                                <p className="text-xs text-muted-foreground">
                                  Everything on one ledger.
                                </p>
                                <Link
                                  href="/products"
                                  onClick={() => setMegaOpen(false)}
                                  className="group flex items-center gap-1 text-xs font-medium text-ember transition-colors hover:text-ember/80"
                                >
                                  View all
                                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Internal page links
              if (isInternalPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                );
              }

              // External links
              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                );
              }

              // Anchor links
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Link href="/login">Sign in</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="group h-10 rounded-xl bg-foreground px-4 text-sm font-medium text-background shadow-premium transition-all hover:bg-foreground/90"
            >
              <Link href="/pricing">
                Get started
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-sm border-l-0 bg-background p-0"
            >
              <SheetHeader className="space-y-0 px-6 pb-4 pt-6 text-left">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>

              <div className="flex flex-col gap-1 px-4 py-2">
                {navLinks.map((link, i) => {
                  const isInternalPage = link.href.startsWith("/");

                  if (isInternalPage) {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i + 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05 }}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-6">
                <Button
                  variant="outline"
                  asChild
                  className="h-11 rounded-xl text-sm font-medium"
                >
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button
                  asChild
                  className="h-11 rounded-xl bg-foreground text-sm font-medium text-background"
                >
                  <Link href="/pricing" onClick={() => setOpen(false)}>
                    Get started
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}