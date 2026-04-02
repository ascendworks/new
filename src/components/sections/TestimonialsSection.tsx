"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
            <span className="text-gold-gradient">Who&apos;ve Been There.</span>
          </h2>
        </motion.div>

        {/* Swiper carousel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={32}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            navigation={{ nextEl: ".testimonial-next", prevEl: ".testimonial-prev" }}
            breakpoints={{ 1024: { slidesPerView: 2 } }}
            className="pb-4"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="relative bg-navy-light rounded-3xl border border-gold/10 p-8 md:p-10 overflow-hidden h-full flex flex-col">
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

                  <Quotes size={36} weight="fill" className="text-gold/20 mb-5 shrink-0" />

                  <blockquote className="font-display font-500 text-lg md:text-xl text-white leading-relaxed flex-1 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-5 border-t border-white/8">
                    <div>
                      <p className="font-700 text-white text-sm">{t.name}</p>
                      <p className="text-slate text-xs">{t.title}</p>
                      <p className="text-slate text-xs">{t.company} · {t.industry}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="text-xs text-slate uppercase tracking-wider">Key Result</span>
                      <span className="font-display font-700 text-gold text-sm">{t.metric}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="testimonial-pagination flex gap-2 [&_.swiper-pagination-bullet]:w-4 [&_.swiper-pagination-bullet]:h-1.5 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-white/20 [&_.swiper-pagination-bullet-active]:w-8 [&_.swiper-pagination-bullet-active]:bg-gold [&_.swiper-pagination-bullet]:transition-all" />
            <div className="flex gap-2">
              <button
                type="button"
                className="testimonial-prev w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate hover:text-white hover:border-white/30 transition-colors"
                aria-label="Previous"
              >
                <CaretLeft size={16} weight="bold" />
              </button>
              <button
                type="button"
                className="testimonial-next w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate hover:text-white hover:border-white/30 transition-colors"
                aria-label="Next"
              >
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
