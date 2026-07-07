// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Orrderlo — The commerce platform for modern restaurants",
  description:
    "Orrderlo unifies point-of-sale, online ordering, kitchen display, and real-time analytics into one elegant platform. Built for restaurants that refuse to compromise.",
  keywords: [
    "Orrderlo",
    "restaurant POS",
    "online ordering",
    "kitchen display system",
    "restaurant analytics",
    "hospitality software",
    "restaurant commerce platform",
  ],
  authors: [{ name: "Orrderlo" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Orrderlo — The commerce platform for modern restaurants",
    description:
      "Unify POS, online ordering, kitchen display, and analytics into one elegant platform built for hospitality.",
    siteName: "Orrderlo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orrderlo — The commerce platform for modern restaurants",
    description:
      "Unify POS, online ordering, kitchen display, and analytics into one elegant platform built for hospitality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}