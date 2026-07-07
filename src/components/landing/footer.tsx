"use client";

import { useState } from "react";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/shared/logo";
import { brand, footerColumns } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    // reset confirmation after a few seconds
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/60 bg-card/40">
      {/* top hairline gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, var(--ember) 40%, transparent), color-mix(in oklch, var(--saffron) 40%, transparent), transparent)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          {/* ---------- Brand + newsletter ---------- */}
          <div className="flex flex-col gap-7">
            <div className="space-y-4">
              <Logo />
              <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                {brand.description}
              </p>
            </div>

            {/* newsletter */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                The Orrderlo dispatch
              </p>
              <p className="text-sm text-muted-foreground">
                One short email a month on hospitality, operations, and product.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 sm:flex-row sm:items-center"
              >
                <div className="relative flex-1">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@restaurant.com"
                    className="h-11 rounded-xl border-border bg-background/60 pr-10 text-sm"
                    aria-label="Email address"
                  />
                  {subscribed && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sage">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  className="h-11 rounded-xl bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90"
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                  {!subscribed && <ArrowRight className="ml-1.5 h-4 w-4" />}
                </Button>
              </form>
              {subscribed && (
                <p className="text-xs text-sage">
                  You&apos;re in. Welcome to the dispatch.
                </p>
              )}
            </div>

            {/* location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-ember" />
              Lisbon · Mexico City · Singapore
            </div>
          </div>

          {/* ---------- Link columns ---------- */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {col.title}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-border/60 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <SocialLinks />
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex h-2 w-2 rounded-full bg-sage" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLinks() {
  // Compact inline SVG social icons — no external dependency.
  const links = [
    {
      label: "X / Twitter",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground"
        >
          {link.icon}
        </a>
      ))}
    </>
  );
}
