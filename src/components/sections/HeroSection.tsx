"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";

const badges = [
  "ServiceNow Build Partner",
  "6-Week Deployment Guarantee",
  "SOC 2 Type II Certified",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg grain">
      {/* Geometric background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-teal/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-white/3" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-medium tracking-wide"
              >
                {b}
              </span>
            ))}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="font-display font-800 text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-tight text-white mb-6"
          >
            Architects of
            <br />
            <span className="text-gold-gradient">Enterprise IT</span>
            <br />
            Transformation
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="text-slate-light text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            AscendWorksNow turns ServiceNow into the operating system of your enterprise.
            We deploy faster, optimize deeper, and stay until transformation is real —
            not just reported.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-display font-700 text-base rounded-xl hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20"
            >
              Book a Discovery Call
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium text-base rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-200"
            >
              See Client Outcomes
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
          >
            {[
              { value: "6", unit: "weeks", label: "Average time to go-live" },
              { value: "40%", unit: "", label: "Avg. MTTR reduction" },
              { value: "$2M+", unit: "", label: "Unlocked per client annually" },
              { value: "98%", unit: "", label: "Client retention rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-800 text-3xl md:text-4xl text-white">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-gold font-600 text-lg">{stat.unit}</span>
                  )}
                </div>
                <span className="text-slate text-sm leading-snug">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <CaretDown size={16} weight="bold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
