"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AscendWorks didn't just implement ServiceNow — they redesigned how our IT function operates. Within 90 days we had measurable reductions in MTTR and our board finally saw IT as a strategic investment, not a line item.",
    name: "Sarah Whitfield",
    title: "Chief Information Officer",
    company: "Meridian Health Systems",
    industry: "Healthcare",
    metric: "43% MTTR reduction in 90 days",
  },
  {
    quote:
      "Every ServiceNow partner promised fast deployment. AscendWorks was the only one that actually delivered in 6 weeks — without cutting corners. The knowledge transfer was exceptional. Our team owns the platform now.",
    name: "Marcus Chen",
    title: "VP of IT Operations",
    company: "Apex Financial Group",
    industry: "Financial Services",
    metric: "6-week deployment, on budget",
  },
  {
    quote:
      "We had ServiceNow for two years but were using 20% of its capability. AscendWorks' optimization engagement unlocked $1.8M in annual operational savings in the first year. I wish we'd called them sooner.",
    name: "Diana Okonkwo",
    title: "CTO",
    company: "NovaTech Manufacturing",
    industry: "Manufacturing",
    metric: "$1.8M annual savings unlocked",
  },
  {
    quote:
      "The Agentic AI deployment was unlike anything we'd seen from a ServiceNow partner. Sixty percent of our L1 tickets are now resolved autonomously. Our team handles strategic work instead of password resets.",
    name: "James Harrington",
    title: "Director of IT Service Management",
    company: "Pacific Energy Partners",
    industry: "Energy & Utilities",
    metric: "60% autonomous ticket resolution",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section ref={ref} className="section-navy-mid py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
            Client Voices
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight">
            Words That Matter. From Leaders{" "}
            <span className="text-gold-gradient">Who've Been There.</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-navy-light rounded-3xl border border-gold/10 p-8 md:p-12 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

            <Quote size={40} className="text-gold/20 mb-6" />

            <motion.blockquote
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="font-display font-500 text-xl md:text-2xl text-white leading-relaxed mb-8"
            >
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="font-700 text-white text-base">{t.name}</p>
                <p className="text-slate text-sm">{t.title}</p>
                <p className="text-slate text-sm">{t.company} · {t.industry}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="text-xs text-slate uppercase tracking-wider">Key Result</span>
                <span className="font-display font-700 text-gold text-base">{t.metric}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-gold w-8" : "bg-white/20 w-4 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate hover:text-white hover:border-white/30 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate hover:text-white hover:border-white/30 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
