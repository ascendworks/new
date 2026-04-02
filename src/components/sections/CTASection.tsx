"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden bg-navy p-10 md:p-16 text-center mesh-bg"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple/10 blur-3xl" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctogrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctogrid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-6">
              Let&apos;s Build What&apos;s Next
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto">
              Ready to See What Your{" "}
              <span className="text-gold-gradient">IT Investment Is Worth?</span>
            </h2>
            <p className="text-slate-light text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Book a 30-minute discovery call with our enterprise team. We&apos;ll
              identify your highest-value transformation opportunity — and tell you
              exactly how we&apos;d go after it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-display font-700 text-base rounded-xl hover:bg-gold-light transition-all shadow-xl shadow-gold/20"
              >
                <CalendarBlank size={16} weight="bold" />
                Book a Discovery Call
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/8 hover:border-white/40 transition-all"
              >
                View Case Studies
              </Link>
            </div>
            <p className="text-slate text-sm mt-6">
              No sales pitch. No commitment. Just a direct conversation about your goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
