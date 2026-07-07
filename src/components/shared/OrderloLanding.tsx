// OrderloLanding.tsx
import React from 'react';
import { motion } from 'framer-motion';

// এনিমেশন ভেরিয়েন্টস (স্ক্রল করার সময় স্ট্যাগার রিভিল)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const OrderloLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf5ed] via-[#fefcf9] to-[#fcf5ed] font-sans overflow-x-hidden flex items-center justify-center py-20 px-6">
      
      {/* প্রধান কন্টেইনার */}
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* টপ পিল (নোটিফিকেশন) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-[#e5e0db] mb-12"
        >
          <span className="w-2.5 h-2.5 bg-[#e06c4a] rounded-full animate-pulse" />
          <span className="text-[#1a1a1a] text-sm font-medium">
            Now onboarding restaurants across 14 cities
          </span>
        </motion.div>

        {/* গ্রিড লেআউট (টেক্সট + ড্যাশবোর্ড) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* বাম দিকের টেক্সট সেকশন */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h1 variants={itemVariants} className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#1a1a1a]">
              The commerce platform for <br />
              <span className="relative inline-block text-[#e6744c] after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-[6px] after:bg-[#e6744c]/30 after:rounded-full after:-rotate-1">
                restaurants
              </span>
              <br />
              that refuse to <br />
              compromise.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed max-w-lg">
              allO unifies point-of-sale, online ordering, kitchen display, and real-time analytics into one elegant platform. Built for the rush, designed for the guest, loved by the line.
            </motion.p>

            {/* বাটন গ্রুপ (বেসিক CSS ট্রানজিশন ব্যবহার করা হয়েছে) */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg shadow-black/10">
                Start free trial
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <button className="flex items-center gap-3 bg-white border border-[#dcd5cd] px-8 py-3.5 rounded-full text-base font-medium text-[#1a1a1a] hover:border-[#1a1a1a] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch 2-min tour
              </button>
            </motion.div>
          </motion.div>

          {/* ডান দিকের ড্যাশবোর্ড মকআপ (স্ট্যাগার অ্যানিমেশন) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex justify-center lg:justify-end w-full"
          >
            {/* মেইন ড্যাশবোর্ড কার্ড */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full max-w-[560px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-[#f0ebe5] p-5"
            >
              {/* উইন্ডো কন্ট্রোল (ডটস) */}
              <div className="flex items-center gap-2 mb-4 px-1">
                <div className="w-3 h-3 rounded-full bg-[#ed6a5e]" />
                <div className="w-3 h-3 rounded-full bg-[#f5bd4f]" />
                <div className="w-3 h-3 rounded-full bg-[#61c454]" />
                <div className="ml-8 text-xs bg-[#faf8f6] px-3 py-1 rounded-full text-[#4a4a4a] border border-[#e5e0db]">
                  app.orrderlo.com / live-service
                </div>
              </div>

              {/* স্ট্যাটিস্টিক্স গ্রিড */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'REVENUE', value: '$18,420', change: '+12.4% vs last Fri' },
                  { label: 'CHECKS', value: '512', change: '+8.1% vs last Fri' },
                  { label: 'AVG TURN', value: '42m', change: '-6.0% vs last Fri' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#faf8f6] rounded-xl p-3 border border-[#f0ebe5]">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#4a4a4a] uppercase tracking-wide mb-1">
                      <span className="text-[#e6744c]">↗</span> {stat.label}
                    </div>
                    <div className="text-lg font-semibold text-[#1a1a1a]">{stat.value}</div>
                    <div className={`text-[10px] ${stat.change.includes('+') ? 'text-[#61c454]' : 'text-[#ed6a5e]'}`}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* গ্রাফ সেকশন + টিকেট লিস্ট */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* গ্রাফ এরিয়া */}
                <div className="flex-1 bg-[#faf8f6] rounded-xl p-4 border border-[#f0ebe5] relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-medium text-[#1a1a1a]">Tonight's covers</div>
                    <div className="flex items-center gap-1 text-[10px] font-medium text-[#1a1a1a] bg-[#e9e5df] px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#61c454]" /> Live
                    </div>
                  </div>
                  <div className="flex justify-between items-end mb-1">
                    <div className="text-2xl font-semibold text-[#1a1a1a]">208 <span className="text-[#4a4a4a] font-normal text-sm">/ 240</span></div>
                  </div>
                  
                  {/* SVG কাস্টম লাইন চার্ট */}
                  <svg className="w-full h-24 md:h-32" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#e6744c" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#e6744c" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,65 C20,60 40,70 60,55 C80,40 100,50 120,45 C140,40 160,25 180,20 L200,15"
                      fill="none"
                      stroke="#e6744c"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0,65 C20,60 40,70 60,55 C80,40 100,50 120,45 C140,40 160,25 180,20 L200,15 L200,80 L0,80 Z"
                      fill="url(#gradient)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                  
                  <div className="flex justify-between text-[10px] text-[#4a4a4a] mt-1">
                    <span>5pm</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                  </div>
                </div>

                {/* একটিভ টিকেট লিস্ট */}
                <div className="w-full lg:w-32 bg-[#faf8f6] rounded-xl p-4 border border-[#f0ebe5]">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xs font-semibold text-[#1a1a1a]">ACTIVE TICKETS</div>
                    <div className="bg-[#fde4df] text-[#e6744c] text-[10px] font-medium px-2 py-0.5 rounded-full">
                      7 open
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { id: 'T-12', name: 'Mains', time: '4m', dot: 'bg-[#e6744c]' },
                      { id: 'T-04', name: 'Apps', time: '1m', dot: 'bg-[#6a8b70]' },
                      { id: 'T-21', name: 'Dessert', time: '9m', dot: 'bg-[#f5bd4f]' },
                      { id: 'T-08', name: 'Mains', time: '6m', dot: 'bg-[#e6744c]' },
                    ].map((ticket, i) => (
                      <div key={i} className="flex items-center justify-between text-xs bg-white rounded-lg p-2 border border-[#f0ebe5]">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${ticket.dot}`} />
                          <span className="font-medium text-[#1a1a1a]">{ticket.id}</span>
                          <span className="text-[#4a4a4a]">{ticket.name}</span>
                        </div>
                        <span className="text-[#4a4a4a]">{ticket.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ফ্লোটিং টুলটিপ ১ (ডানদিকে উপরে) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 lg:-right-12 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f0ebe5] p-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#faf8f6] border border-[#e5e0db] flex items-center justify-center text-[#e6744c] text-xs font-bold">🧾</div>
              <div>
                <div className="text-[10px] font-medium text-[#4a4a4a]">CHECK CLOSED</div>
                <div className="text-sm font-semibold text-[#1a1a1a]">$84.20 <span className="text-[#4a4a4a] text-xs font-normal">· T-12</span></div>
              </div>
            </motion.div>

            {/* ফ্লোটিং টুলটিপ ২ (বামদিকে নিচে) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="absolute -bottom-10 -left-6 lg:-left-12 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f0ebe5] p-3 flex items-center gap-3 max-w-[180px]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#faf8f6] border border-[#e5e0db] flex items-center justify-center text-[#e6744c] text-sm">📈</div>
              <div>
                <div className="text-[10px] font-medium text-[#4a4a4a]">AVG CHECK</div>
                <div className="text-sm font-semibold text-[#1a1a1a]">$59.04 <span className="text-[#61c454] text-xs font-normal">+12.4%</span></div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderloLanding;