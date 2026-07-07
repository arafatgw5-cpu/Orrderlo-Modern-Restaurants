// src/app/customer-stories/page.tsx
"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Play, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Globe, 
  Award, 
  ChevronRight,
  Quote,
  MapPin,
  BarChart3,
  Zap,
  Heart,
  ChefHat,
  Coffee,
  Utensils
} from "lucide-react";

// ==================== WORKING IMAGES (All Verified) ====================
const IMAGES = {
  featured: {
    restaurant: "https://picsum.photos/1200/700?random=1",
    owner: "https://picsum.photos/300/300?random=2",
  },

  stories: [
    "https://picsum.photos/800/600?random=11",
    "https://picsum.photos/800/600?random=12",
    "https://picsum.photos/800/600?random=13",
    "https://picsum.photos/800/600?random=14",
    "https://picsum.photos/800/600?random=15",
    "https://picsum.photos/800/600?random=16",
  ],

  videos: [
    "https://picsum.photos/1280/720?random=21",
    "https://picsum.photos/1280/720?random=22",
    "https://picsum.photos/1280/720?random=23",
  ],

  avatars: [
    "https://picsum.photos/200/200?random=31",
    "https://picsum.photos/200/200?random=32",
    "https://picsum.photos/200/200?random=33",
  ],
};

// ==================== DATA ====================
const featuredStory = {
  restaurant: "Hanoi Pho",
  owner: "Nguyen Tran",
  country: "Germany",
  type: "Vietnamese Cuisine",
  headline: "Traditional flavors, innovative service: Hanoi Pho's success story with Orrderlo",
  challenge: "Combining authentic Vietnamese flavors with modern efficiency",
  solution: "Orrderlo unified their POS, online ordering, and kitchen operations",
  timeline: "6 months",
  results: [
    { label: "Orders", value: "+45%", icon: TrendingUp },
    { label: "Efficiency", value: "-60% manual work", icon: Zap },
    { label: "Repeat Customers", value: "+32%", icon: Heart },
    { label: "Rating", value: "4.9/5", icon: Star },
  ],
};

const customerStories = [
  {
    id: 1,
    restaurant: "Hanoi Pho",
    category: "DINE IN",
    headline: "Traditional flavors, innovative service: Hanoi Pho's...",
    excerpt: "Hanoi Pho combines authentic Vietnamese flavors with modern efficiency.",
    country: "Germany",
  },
  {
    id: 2,
    restaurant: "Xá Xíu",
    category: "DINE IN",
    headline: "Xá Xíu: A Taste of Vietnam in the Heart of Munich",
    excerpt: "From retail tech to restaurant success—Huy transforms Xá Xíu.",
    country: "Germany",
  },
  {
    id: 3,
    restaurant: "Hou Tang Hotpot",
    category: "HOTPOT",
    headline: "Hou Tang Hotpot's Success Story: Authentic Sichuan...",
    excerpt: "Hou Tang Hotpot brings authentic flavors of Sichuan to Germany.",
    country: "Germany",
  },
  {
    id: 4,
    restaurant: "Sam Sushi",
    category: "SUSHI",
    headline: "From Family Eatery to Sushi Chain: allO Fuels...",
    excerpt: "Sam Sushi evolved from a local favorite to a growing chain.",
    country: "Germany",
  },
  {
    id: 5,
    restaurant: "King Loui",
    category: "DINE IN",
    headline: "King Loui: How Digital Transformation...",
    excerpt: "King Loui has two locations managed by Linh, and has...",
    country: "Germany",
  },
  {
    id: 6,
    restaurant: "Bella Italia",
    category: "FINE DINING",
    headline: "Italian Excellence Meets Modern Technology",
    excerpt: "How Bella Italia scaled to 5 locations with Orrderlo.",
    country: "Italy",
  },
];

const videoStories = [
  {
    id: 1,
    title: "The Journey of Hanoi Pho",
    duration: "4:32",
    category: "Success Story",
  },
  {
    id: 2,
    title: "Kitchen Transformation",
    duration: "3:15",
    category: "Behind the Scenes",
  },
  {
    id: 3,
    title: "Owner's Perspective",
    duration: "5:48",
    category: "Interview",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Orrderlo transformed our operations. We've seen a 45% increase in orders and our staff loves how intuitive it is.",
    author: "Nguyen Tran",
    restaurant: "Hanoi Pho",
    rating: 5,
  },
  {
    id: 2,
    quote: "The best investment we made for our restaurant. Manual work reduced by 60% and customer satisfaction is at an all-time high.",
    author: "Huy Nguyen",
    restaurant: "Xá Xíu",
    rating: 5,
  },
  {
    id: 3,
    quote: "From a single location to a growing chain—Orrderlo scaled with us every step of the way.",
    author: "Sam Chen",
    restaurant: "Sam Sushi",
    rating: 5,
  },
];

const categories = [
  { name: "Fine Dining", count: 234, icon: Star },
  { name: "Cafe", count: 567, icon: Coffee },
  { name: "Fast Food", count: 892, icon: Zap },
  { name: "Cloud Kitchen", count: 345, icon: Globe },
  { name: "Bar", count: 178, icon: Award },
  { name: "Bakery", count: 423, icon: ChefHat },
];

const stats = [
  { label: "Restaurants Served", value: 2400, suffix: "+", icon: Globe },
  { label: "Orders Processed", value: 180, suffix: "M+", icon: BarChart3 },
  { label: "Countries", value: 28, suffix: "", icon: MapPin },
  { label: "Customer Satisfaction", value: 4.9, suffix: "/5", icon: Star },
];

// ==================== COMPONENTS ====================

// Spotlight Cursor
function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-[100] hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
        left: position.x - 300,
        top: position.y - 300,
        filter: "blur(60px)",
        transition: "left 0.3s ease-out, top 0.3s ease-out",
      }}
    />
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/20 bg-primary/5"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium tracking-wide">
            Customer Stories
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
        >
          Restaurants That
          <br />
          <span className="text-primary">
            Grew With Orrderlo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
        >
          From independent cafés to multi-location restaurants, discover how businesses
          transformed operations, increased revenue, and delighted customers using Orrderlo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,107,53,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              Read Stories
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 border border-border text-foreground font-semibold rounded-2xl hover:bg-muted transition-all duration-300">
            Book Demo
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Featured Story
function FeaturedStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-card border border-border"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <motion.div
              className="relative h-[400px] lg:h-[700px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={IMAGES.featured.restaurant}
                alt={featuredStory.restaurant}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90 lg:bg-gradient-to-r lg:from-transparent lg:to-background" />
              
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-md text-primary-foreground text-sm font-medium">
                Featured Story
              </div>
            </motion.div>

            {/* Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <Image
                  src={IMAGES.featured.owner}
                  alt={featuredStory.owner}
                  width={56}
                  height={56}
                  className="rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-foreground font-semibold">{featuredStory.owner}</p>
                  <p className="text-muted-foreground text-sm">
                    {featuredStory.restaurant} • {featuredStory.country}
                  </p>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              >
                {featuredStory.headline}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 mb-8"
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Challenge:</span> {featuredStory.challenge}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Solution:</span> {featuredStory.solution}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Timeline:</span> {featuredStory.timeline}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {featuredStory.results.map((result, i) => {
                  const Icon = result.icon;
                  return (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="p-4 rounded-2xl bg-muted border border-border"
                    >
                      <Icon className="w-6 h-6 text-primary mb-2" />
                      <p className="text-2xl font-bold text-foreground mb-1">{result.value}</p>
                      <p className="text-sm text-muted-foreground">{result.label}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
              >
                Read Full Story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Video Stories
function VideoStories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Video Stories</h2>
          <p className="text-muted-foreground text-lg">Watch how restaurants transformed with Orrderlo</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videoStories.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={IMAGES.videos[i]}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </motion.div>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  {video.duration}
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  {video.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Customer Grid
function CustomerGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Entries
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Customer stories</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
            All categories
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={IMAGES.stories[i]}
                  alt={story.restaurant}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  {story.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {story.headline}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {story.country}
                  </div>
                  <button className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated Counter
function AnimatedCounter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * value);
      
      setDisplay(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}

// Results Dashboard
function ResultsDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Results That Speak
            <br />
            <span className="text-primary">For Themselves</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real numbers from real restaurants using Orrderlo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
              >
                <Icon className="w-8 h-8 text-primary mb-4 relative z-10" />
                <div className="flex items-baseline gap-1 mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-5xl font-bold text-foreground relative z-10"
                  />
                  <span className="text-2xl text-primary relative z-10">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground relative z-10">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Testimonials Marquee
function TestimonialsMarquee() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Restaurant Owners
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="flex-shrink-0 w-[400px] md:w-[500px] px-6"
            >
              <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={IMAGES.avatars[i % IMAGES.avatars.length]}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-foreground font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.restaurant}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary" fill="#FF6B35" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Categories Section
function CategoriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            From cafés to fine dining, Orrderlo powers them all
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.count}+ restaurants using Orrderlo
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-[120px]" />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Ready to Become the
            <br />
            <span className="text-primary">
              Next Success Story?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of restaurants already transforming their business with Orrderlo
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,107,53,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="px-10 py-5 border border-border text-foreground font-semibold rounded-2xl hover:bg-muted transition-all duration-300">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== MAIN PAGE ====================
export default function CustomerStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SpotlightCursor />
      <HeroSection />
      <FeaturedStory />
      <VideoStories />
      <CustomerGrid />
      <ResultsDashboard />
      <TestimonialsMarquee />
      <CategoriesSection />
      <CTASection />
    </div>
  );
}
