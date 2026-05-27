"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Flame, Heartbeat, Bank, Truck,
} from "@phosphor-icons/react";

const cases = [
  {
    id: 1,
    industry: "Oil & Gas",
    Icon: Flame,
    headline: "25% less downtime. 4x faster safety response.",
    description:
      "ServiceNow became the single control plane for offshore assets, safety notifications, and compliance escalation across 14 production sites.",
    stats: [
      { value: "25%", label: "Downtime Reduction" },
      { value: "4×",  label: "Faster Safety Response" },
      { value: "14",  label: "Sites Unified" },
    ],
    color: "text-orange",
    borderColor: "border-orange/30",
    bgColor: "bg-orange/5",
    iconBg: "bg-orange/10",
    tag: "Energy",
  },
  {
    id: 2,
    industry: "Banking & FinServ",
    Icon: Bank,
    headline: "AI Control Tower for real-time resilience.",
    description:
      "We built an AI Control Tower that predicts incident risk, coordinates compliance, and keeps the control room synchronized.",
    stats: [
      { value: "66%", label: "Triage Reduction" },
      { value: "12",  label: "Critical Dashboards" },
      { value: "90%", label: "Reporting Speed" },
    ],
    color: "text-gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/5",
    iconBg: "bg-gold/10",
    tag: "Financial Services",
  },
  {
    id: 3,
    industry: "Healthcare",
    Icon: Heartbeat,
    headline: "Clinical IT visibility that keeps care moving.",
    description:
      "A ServiceNow deployment aligned clinical device management, ITSM, and patient-facing service workflows from a single platform.",
    stats: [
      { value: "48%",  label: "Faster Incident Response" },
      { value: "100+", label: "Systems Monitored" },
      { value: "6 mo", label: "Full Adoption" },
    ],
    color: "text-teal",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/5",
    iconBg: "bg-teal/10",
    tag: "Healthcare",
  },
  {
    id: 4,
    industry: "Logistics",
    Icon: Truck,
    headline: "72% fewer fulfillment exceptions. 40% faster recovery.",
    description:
      "ServiceNow linked warehouse operations, field service, and customer exception management to shrink delivery disruptions.",
    stats: [
      { value: "72%",   label: "Exception Reduction" },
      { value: "40%",   label: "Faster Recovery" },
      { value: "1,200+", label: "Workflows Automated" },
    ],
    color: "text-purple",
    borderColor: "border-purple/30",
    bgColor: "bg-purple/5",
    iconBg: "bg-purple/10",
    tag: "Logistics",
  },
];

function CaseCard({ c, i }: { c: typeof cases[number]; i: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon   = c.Icon;

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`flex flex-col h-full p-6 rounded-2xl border ${c.borderColor} ${c.bgColor} group hover:-translate-y-1 transition-all duration-300`}>
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
            <Icon size={22} weight="duotone" className={c.color} />
          </div>
          <span className={`text-xs font-600 uppercase tracking-wider pt-1 ${c.color} opacity-70`}>
            {c.tag}
          </span>
        </div>

        <h3 className="font-display font-700 text-base text-white leading-snug mb-3">
          {c.headline}
        </h3>
        <p className="text-slate text-sm leading-relaxed flex-1 mb-6">
          {c.description}
        </p>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-3 border-t ${c.borderColor} pt-5 mb-5`}>
          {c.stats.map((s) => (
            <div key={s.label}>
              <div className={`font-display font-800 text-xl ${c.color} leading-none`}>{s.value}</div>
              <div className="text-slate text-[10px] mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        <Link
          href="/case-studies"
          className={`flex items-center gap-1.5 text-sm font-600 ${c.color} hover:gap-2.5 transition-all`}
        >
          Read Case Study <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => { updateScrollState(); }, [updateScrollState]);

  const scroll = (dir: "left" | "right") => {
    const el   = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : 420;
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
    setTimeout(updateScrollState, 450);
  };

  return (
    <section ref={ref} className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
              Client Outcomes
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight">
              Results Across Every<br />
              <span className="text-gold-gradient">Industry We Touch</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-sm font-600 text-slate hover:text-white hover:gap-3 transition-all shrink-0"
          >
            View All Case Studies <ArrowRight size={14} weight="bold" />
          </Link>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-navy-light border border-gold/20 shadow-lg items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:border-gold/50"
          >
            <ArrowLeft size={16} weight="bold" className="text-slate" />
          </button>

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          >
            {cases.map((c, i) => (
              <div
                key={c.id}
                data-card
                className="snap-start shrink-0 w-[82vw] sm:w-[calc(50%-10px)] lg:w-[calc(50%-10px)]"
              >
                <CaseCard c={c} i={i} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-navy-light border border-gold/20 shadow-lg items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:border-gold/50"
          >
            <ArrowRight size={16} weight="bold" className="text-slate" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {cases.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </section>
  );
}
