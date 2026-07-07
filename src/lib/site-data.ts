import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  ShoppingCart,
  ChefHat,
  BarChart3,
  Zap,
  ShieldCheck,
  Clock,
  Globe2,
  Smartphone,
  CreditCard,
  BellRing,
  Users,
  Receipt,
  UtensilsCrossed,
  Truck,
  LineChart,
  LayoutDashboard,
  Star,
  Sparkles,
  ArrowRight,
  Check,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

/* ----------------------------- Brand ----------------------------- */
export const brand = {
  name: "Orrderlo",
  tagline: "Commerce, orchestrated for hospitality.",
  description:
    "Orrderlo is the unified commerce platform that helps modern restaurants run point-of-sale, online ordering, kitchen operations, and analytics from a single, beautifully designed system.",
  email: "hello@orrrderlo.com",
  url: "https://orrrderlo.com",
} as const;

/* ----------------------------- Navigation ----------------------------- */
export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Features", href: "/#features" },
  { label: "AboutOrrderlo", href: "/about-us" },
  { label: "Customer-Stories", href: "/customer-stories" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

/* ----------------------------- Trusted by ----------------------------- */
export const trustedBy = [
  "Maison Verte",
  "Nori & Oak",
  "Caldera",
  "The Tidal Room",
  "Fleur Studio",
  "Otto Bottega",
  "Lumen Bakery",
  "Safran Bistro",
] as const;

/* ----------------------------- Products & Services ----------------------------- */
export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: "ember" | "saffron" | "sage" | "clay";
  features: string[];
};

export const products: Product[] = [
  {
    id: "pos",
    name: "Orrderlo POS",
    tagline: "Point of Sale",
    description:
      "A tactile, lightning-fast register built for the rush. Offline-ready, hardware-agnostic, and designed so a new server is fluent in five minutes.",
    icon: Monitor,
    accent: "ember",
    features: ["Offline-first sync", "Table & course management", "Split & merge checks"],
  },
  {
    id: "ordering",
    name: "Orrderlo Ordering",
    tagline: "Online Ordering",
    description:
      "Commission-free ordering for dine-in, pickup, and delivery. Branded storefronts that load in under a second and convert like a top-tier checkout.",
    icon: ShoppingCart,
    accent: "saffron",
    features: ["Branded storefront", "QR code dine-in", "Scheduled pickup"],
  },
  {
    id: "kitchen",
    name: "Orrderlo Kitchen",
    tagline: "Kitchen Display",
    description:
      "A calm, color-coded kitchen display that routes tickets by station, tracks prep times, and keeps the line moving even on a 400-cover night.",
    icon: ChefHat,
    accent: "sage",
    features: ["Station routing", "Prep-time tracking", "Allergy alerts"],
  },
  {
    id: "analytics",
    name: "Orrderlo Insights",
    tagline: "Analytics & Reporting",
    description:
      "Real-time dashboards that translate raw service data into menu, labor, and margin decisions — without a spreadsheet in sight.",
    icon: BarChart3,
    accent: "clay",
    features: ["Live service pulse", "Menu engineering", "Labor vs. sales"],
  },
];

/* ----------------------------- Features (bento) ----------------------------- */
export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    id: "offline",
    title: "Works through the outage",
    description:
      "Every transaction is queued locally and reconciled the moment connectivity returns. A dropped connection never costs you a check.",
    icon: ShieldCheck,
  },
  {
    id: "fast",
    title: "Sub-200ms checkout",
    description:
      "Tuned for the Friday-night rush. Tap to send, tap to settle — no spinners, no lag, no apologies.",
    icon: Zap,
  },
  {
    id: "omnichannel",
    title: "Every channel, one ledger",
    description:
      "In-store, online, QR, and third-party marketplaces all settle into a single source of truth for finance.",
    icon: Globe2,
  },
  {
    id: "payments",
    title: "Payments that just settle",
    description:
      "Tap, dip, swipe, and contactless with next-day payouts and transparent interchange-plus pricing. No hidden residuals.",
    icon: CreditCard,
  },
  {
    id: "mobile",
    title: "Run the floor from a phone",
    description:
      "Servers take orders tableside, managers comp on the fly, and owners check the night from anywhere.",
    icon: Smartphone,
  },
  {
    id: "alerts",
    title: "Alerts that actually matter",
    description:
      "Quiet by default. Orrderlo only pings you when a check is voided, a station is buried, or revenue moves off-trend.",
    icon: BellRing,
  },
  {
    id: "labor",
    title: "Labor built around covers",
    description:
      "Forecast staffing from reservation and walk-in patterns, then publish schedules your team actually wants.",
    icon: Users,
  },
  {
    id: "speed",
    title: "Open in a single tap",
    description:
      "Tableside ordering returns the floor to the floor — fewer terminals, more hospitality, faster table turns.",
    icon: Clock,
  },
];

/* ----------------------------- How it works ----------------------------- */
export type Step = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    id: "connect",
    number: "01",
    title: "Connect your floor",
    description:
      "Plug in terminals, printers, and KDS screens — or run entirely on iPads. Orrderlo auto-detects hardware and configures stations in minutes.",
    icon: LayoutDashboard,
  },
  {
    id: "menu",
    number: "02",
    title: "Compose your menu",
    description:
      "Import from a spreadsheet, drag modifiers into place, and push price changes to every channel at once. No re-printing, no re-training.",
    icon: UtensilsCrossed,
  },
  {
    id: "service",
    number: "03",
    title: "Open for service",
    description:
      "Take orders tableside, fire them to the right stations, and let guests pay on their own time. The floor keeps moving; the kitchen stays calm.",
    icon: Receipt,
  },
  {
    id: "grow",
    number: "04",
    title: "Grow with the data",
    description:
      "Wake up to a clean morning report: covers, average check, labor ratio, and the three menu items worth re-engineering this week.",
    icon: LineChart,
  },
];

/* ----------------------------- Why choose Orrderlo ----------------------------- */
export const whyChoose = [
  {
    title: "Designed by people who've worked the line",
    description:
      "Every screen has been pressure-tested in real service. Buttons sit where thumbs sit. Critical actions are one tap away; destructive ones are two.",
  },
  {
    title: "One platform, not five subscriptions",
    description:
      "POS, ordering, KDS, payments, and analytics ship together. No integration tax, no finger-pointing vendor calls at 9pm on a Saturday.",
  },
  {
    title: "Pricing you can forecast",
    description:
      "A flat per-location rate plus transparent interchange-plus processing. No tiered feature gates, no surprise modules, no annual true-up invoice.",
  },
  {
    title: "Support from hospitality people",
    description:
      "Reach a human who knows what a '87 on a three-top' means. Median first response under four minutes, every day of the year.",
  },
] as const;

/* ----------------------------- Stats ----------------------------- */
export type Stat = {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  {
    id: "locations",
    value: 2400,
    suffix: "+",
    label: "Restaurants running",
    description: "From single-room bistros to forty-location groups.",
  },
  {
    id: "orders",
    value: 180,
    suffix: "M+",
    label: "Orders processed",
    description: "Counted across dine-in, pickup, and delivery.",
  },
  {
    id: "uptime",
    value: 99.98,
    suffix: "%",
    label: "Platform uptime",
    description: "Measured across the trailing twelve months.",
  },
  {
    id: "time",
    value: 4,
    suffix: " min",
    label: "Median support response",
    description: "Staffed by hospitality people, day and night.",
  },
];

/* ----------------------------- Testimonials ----------------------------- */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: "ember" | "saffron" | "sage" | "clay";
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We cut our checkout time in half on the first night. The floor feels calmer, the kitchen hears fewer 'where's my check' questions, and our staff actually likes the register.",
    name: "Amara Okafor",
    role: "Owner",
    company: "Maison Verte",
    initials: "AO",
    accent: "ember",
  },
  {
    id: "t2",
    quote:
      "Orrderlo is the first platform where POS, online, and KDS feel like one product instead of three duct-taped together. The morning report alone paid for the switch.",
    name: "Daniel Reyes",
    role: "Operations Director",
    company: "Caldera Group",
    initials: "DR",
    accent: "saffron",
  },
  {
    id: "t3",
    quote:
      "A snowstorm took our internet down for six hours. We kept taking cards the entire time and synced everything the moment it came back. I will never go back.",
    name: "Mei Lin Chen",
    role: "General Manager",
    company: "Nori & Oak",
    initials: "ML",
    accent: "sage",
  },
  {
    id: "t4",
    quote:
      "Switching saved us roughly $3,800 a month in marketplace commissions and third-party POS add-ons. The math was almost offensive in hindsight.",
    name: "Theo Almeida",
    role: "Founder",
    company: "Otto Bottega",
    initials: "TA",
    accent: "clay",
  },
  {
    id: "t5",
    quote:
      "The KDS is the first one my line hasn't cursed at within a week. Color-coded, calm, and it routes allergies in a way no one can miss.",
    name: "Priya Anand",
    role: "Executive Chef",
    company: "The Tidal Room",
    initials: "PA",
    accent: "ember",
  },
  {
    id: "t6",
    quote:
      "Onboarding took an afternoon. We opened the next morning on a brand-new system with zero service disruption. That alone is worth a recommendation.",
    name: "Marcus Holt",
    role: "Managing Partner",
    company: "Lumen Bakery",
    initials: "MH",
    accent: "saffron",
  },
];

/* ----------------------------- Pricing ----------------------------- */
export type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    cadence: "/location / mo",
    description: "For a single room finding its feet.",
    cta: "Start free",
    features: [
      "1 register, 1 location",
      "POS + QR dine-in ordering",
      "Basic daily reports",
      "Email support",
      "Next-day payouts",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$149",
    cadence: "/location / mo",
    description: "For busy rooms ready to add online ordering.",
    cta: "Start 30-day trial",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Unlimited registers",
      "Branded online ordering",
      "Kitchen Display System",
      "Menu engineering analytics",
      "Priority chat support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "Custom",
    cadence: "annual",
    description: "For multi-location groups and franchises.",
    cta: "Talk to sales",
    features: [
      "Everything in Growth",
      "Multi-location rollups",
      "Custom integrations & API",
      "Labor forecasting",
      "Dedicated success manager",
      "99.99% uptime SLA",
    ],
  },
];

/* ----------------------------- FAQ ----------------------------- */
export const faqs = [
  {
    id: "f1",
    question: "Can Orrderlo run without an internet connection?",
    answer:
      "Yes. Every register operates fully offline — taking orders, firing to the kitchen, and processing cards. Transactions are queued locally and reconciled the moment connectivity returns, so a dropped connection never costs you a check.",
  },
  {
    id: "f2",
    question: "What hardware do I need to get started?",
    answer:
      "You can run Orrderlo on iPads you already own, on our certified terminal bundles, or on a mix of both. The platform auto-detects supported printers, cash drawers, and KDS screens, and most locations are fully configured in under an hour.",
  },
  {
    id: "f3",
    question: "How does pricing actually work?",
    answer:
      "A flat per-location monthly rate plus transparent interchange-plus payment processing. There are no tiered feature gates inside a plan, no per-register fees, and no annual true-up invoices. You see exactly what you'll pay before you sign up.",
  },
  {
    id: "f4",
    question: "Does online ordering charge commission on each sale?",
    answer:
      "No. Orrderlo Ordering is commission-free. You keep one hundred percent of every order placed through your branded storefront, pickup, or QR dine-in flow. You only pay the standard payment-processing rate on the card transaction itself.",
  },
  {
    id: "f5",
    question: "Can I migrate from my current POS without downtime?",
    answer:
      "Yes. Our onboarding team imports your menu, modifiers, and tax rules, then stages a parallel setup so you can rehearse service before going live. Most locations switch over a single afternoon with zero service disruption.",
  },
  {
    id: "f6",
    question: "What kind of support can my team expect?",
    answer:
      "Live chat, email, and phone support from people with hospitality backgrounds — staffed every day of the year. Median first response is under four minutes, and Growth plus Scale plans include priority routing during peak service hours.",
  },
] as const;

/* ----------------------------- Footer ----------------------------- */
export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "POS", href: "#products" },
      { label: "Online Ordering", href: "#products" },
      { label: "Kitchen Display", href: "#products" },
      { label: "Analytics", href: "#dashboard" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "#" },
      { label: "Onboarding guide", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
] as const;

/* ----------------------------- Icons used in CTA etc ----------------------------- */
export const ctaIcons = {
  Sparkles,
  ArrowRight,
  Check,
  Star,
} satisfies Record<string, ComponentType<LucideProps>>;