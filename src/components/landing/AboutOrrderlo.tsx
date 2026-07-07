// src/components/AboutOrrderlo.tsx
'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// ==================== DATA ====================
const teamPhotos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    alt: 'Team brainstorming session',
    category: 'Office Culture',
    size: 'medium',
    position: { top: '5%', left: '15%' },
    rotation: -3,
    zIndex: 2,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    alt: 'Product strategy meeting',
    category: 'Meetings',
    size: 'large',
    position: { top: '12%', left: '55%' },
    rotation: 2,
    zIndex: 3,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    alt: 'Restaurant partner collaboration',
    category: 'Partners',
    size: 'small',
    position: { top: '8%', left: '80%' },
    rotation: -4,
    zIndex: 1,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    alt: 'Modern workspace',
    category: 'Workspace',
    size: 'medium',
    position: { top: '35%', left: '5%' },
    rotation: 5,
    zIndex: 2,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
    alt: 'Team celebration',
    category: 'Celebrations',
    size: 'large',
    position: { top: '30%', left: '35%' },
    rotation: -2,
    zIndex: 4,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    alt: 'Customer collaboration',
    category: 'Customers',
    size: 'small',
    position: { top: '38%', left: '72%' },
    rotation: 3,
    zIndex: 1,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    alt: 'Product discussion',
    category: 'Product',
    size: 'medium',
    position: { top: '55%', left: '12%' },
    rotation: -5,
    zIndex: 2,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
    alt: 'Company event',
    category: 'Events',
    size: 'large',
    position: { top: '52%', left: '45%' },
    rotation: 1,
    zIndex: 3,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    alt: 'Casual Friday',
    category: 'Culture',
    size: 'small',
    position: { top: '58%', left: '78%' },
    rotation: -3,
    zIndex: 1,
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
    alt: 'Internal hackathon',
    category: 'Innovation',
    size: 'medium',
    position: { top: '75%', left: '8%' },
    rotation: 4,
    zIndex: 2,
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    alt: 'Team lunch',
    category: 'Culture',
    size: 'small',
    position: { top: '78%', left: '38%' },
    rotation: -2,
    zIndex: 1,
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    alt: 'Award ceremony',
    category: 'Achievements',
    size: 'medium',
    position: { top: '72%', left: '65%' },
    rotation: 3,
    zIndex: 2,
  },
];

// ==================== BACKGROUND EFFECTS (Theme Adaptive) ====================
function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient (Theme adaptive) */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient blobs using your Theme Variables */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--ember)) 0%, transparent 70%)',
          top: '10%',
          left: '20%',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(var(--saffron)) 0%, transparent 70%)',
          bottom: '20%',
          right: '15%',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--ember)) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-ember/30 rounded-full"
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
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark/Light Radial lighting */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 70%)',
        }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--ember) / 0.08) 0%, transparent 70%)',
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          filter: 'blur(40px)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      />
    </div>
  );
}

// ==================== TEAM PHOTO CARD ====================
interface TeamPhotoCardProps {
  photo: typeof teamPhotos[0];
  activeId: number | null;
  onHover: (id: number | null) => void;
}

function TeamPhotoCard({ photo, activeId, onHover }: TeamPhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const isActive = activeId === photo.id;
  const isInactive = activeId !== null && !isActive;

  const sizeClasses = {
    small: 'w-[200px] h-[200px] md:w-[240px] md:h-[240px]',
    medium: 'w-[260px] h-[260px] md:w-[320px] md:h-[320px]',
    large: 'w-[300px] h-[300px] md:w-[380px] md:h-[380px]',
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    onHover(null);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`absolute ${sizeClasses[photo.size]} cursor-pointer group`}
      style={{
        top: photo.position.top,
        left: photo.position.left,
        zIndex: isActive ? 50 : photo.zIndex,
        perspective: '1000px',
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation }}
      animate={{
        opacity: isInactive ? 0.4 : 1,
        scale: isActive ? 1.15 : isHovered ? 1.08 : 1,
        rotate: photo.rotation,
        filter: isInactive ? 'blur(4px)' : 'blur(0px)',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8, duration: 0.7 }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(photo.id);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          borderRadius: '28px',
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {/* Image */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow on active using Theme Variables */}
        {isActive && (
          <motion.div
            className="absolute -inset-2 rounded-[36px] opacity-60"
            style={{
              background: 'radial-gradient(circle, hsl(var(--ember) / 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Category label - Themed glass effect */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 px-3 py-2 bg-background/10 backdrop-blur-md rounded-xl border border-foreground/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered || isActive ? 1 : 0,
            y: isHovered || isActive ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="text-white text-xs font-medium truncate">{photo.category}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ==================== SPOTLIGHT CURSOR ====================
function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{
        left: position.x - 12,
        top: position.y - 12,
        background: 'radial-gradient(circle, hsl(var(--ember)) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  );
}

// ==================== MAIN COMPONENT ====================
export default function AboutOrrderlo() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] overflow-hidden bg-background"
      style={{ willChange: 'transform' }}
    >
      <BackgroundEffects />
      <SpotlightCursor />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="relative h-screen flex flex-col items-center justify-center px-6">
          <motion.div style={{ y: headingY, opacity }} className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-ember/20 bg-ember/5"
            >
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              <span className="text-ember text-sm font-medium tracking-wide">About Orrderlo</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Meet the Team
              <br />
              <span className="bg-gradient-to-r from-ember via-saffron to-ember bg-clip-text text-transparent">
                Behind Orrderlo
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            >
              We&apos;re a passionate team of designers, engineers, and restaurant enthusiasts building
              the future of restaurant technology. Every pixel, every line of code, every partnership —
              crafted with purpose.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="group relative px-8 py-4 bg-ember text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-ember/40">
                <span className="relative z-10 flex items-center gap-2">
                  Join Our Journey
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-saffron to-ember opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
              <span className="text-muted-foreground/70 text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-5 h-8 border border-muted-foreground/20 rounded-full flex justify-center">
                <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-ember rounded-full mt-1.5" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="relative min-h-[150vh] px-6 py-32">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
            <p className="text-ember text-sm font-medium tracking-[0.3em] uppercase">Our Culture</p>
          </motion.div>

          {/* Photos Container */}
          <div className="relative max-w-7xl mx-auto h-[1200px] md:h-[1400px]">
            <AnimatePresence>
              {teamPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TeamPhotoCard photo={photo} activeId={activeId} onHover={setActiveId} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="relative h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building the future,
              <br />
              <span className="text-muted-foreground">one restaurant at a time.</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Join 2,000+ restaurants already transforming their business with Orrderlo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}