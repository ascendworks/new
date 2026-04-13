"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Lightning, Factory, Bank, Storefront,
  Truck, Buildings, Flame, Heartbeat,
} from "@phosphor-icons/react";

const cases = [
  {
    id: 1,
    client: "Global Energy Operator",
    industry: "Oil & Gas",
    icon: Flame,
    headline: "25% less downtime. 4x faster safety response.",
    description:
      "ServiceNow became the single control plane for offshore assets, safety notifications, field service work orders, and compliance escalation across 14 production sites.",
    stats: [
      { value: "25%", label: "Downtime reduction" },
      { value: "4x", label: "Faster safety response" },
      { value: "14", label: "Sites unified" },
    ],
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    border: "border-orange-500/20 hover:border-orange-500/50",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    tagBg: "bg-orange-500/10 border-orange-500/25 text-orange-400",
    accentColor: "text-orange-400",
    visual: "bg-gradient-to-br from-orange-900/40 via-red-950/60 to-navy",
  },
  {
    id: 2,
    client: "Regional Health System",
    industry: "Healthcare & Life Sciences",
    icon: Heartbeat,
    headline: "Clinical IT visibility that keeps care moving.",
    description:
      "A ServiceNow deployment aligned clinical device management, ITSM, and patient-facing service workflows so the system could manage incidents, assets, and compliance from a single platform.",
    stats: [
      { value: "48%", label: "Faster incident response" },
      { value: "100+", label: "Clinical systems monitored" },
      { value: "6 mo.", label: "Platform adoption" },
    ],
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    border: "border-teal-500/20 hover:border-teal-500/50",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    tagBg: "bg-teal-500/10 border-teal-500/25 text-teal-400",
    accentColor: "text-teal-400",
    visual: "bg-gradient-to-br from-teal-950/50 via-cyan-950/40 to-navy",
  },
  {
    id: 3,
    client: "National Bank",
    industry: "Banking & FinServ",
    icon: Bank,
    headline: "AI Control Tower on ServiceNow for real-time resilience.",
    description:
      "We built a ServiceNow AI Control Tower that predicts incident risk, coordinates compliance response, and keeps the control room synchronized across IT, risk, and business operations.",
    stats: [
      { value: "66%", label: "Reduction in manual triage" },
      { value: "12", label: "Critical dashboards" },
      { value: "90%", label: "Faster regulator reporting" },
    ],
    gradient: "from-gold/20 via-amber-500/10 to-transparent",
    border: "border-gold/20 hover:border-gold/50",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    tagBg: "bg-gold/10 border-gold/25 text-gold",
    accentColor: "text-gold",
    visual: "bg-gradient-to-br from-amber-950/50 via-yellow-950/40 to-navy",
  },
  {
    id: 4,
    client: "Global Logistics Network",
    industry: "Logistics",
    icon: Truck,
    headline: "72% fewer fulfillment exceptions. 40% faster recovery.",
    description:
      "ServiceNow linked warehouse operations, field service, and customer exception management to shrink delivery disruptions and automate cross-border transport approvals.",
    stats: [
      { value: "72%", label: "Exception reduction" },
      { value: "40%", label: "Faster recovery" },
      { value: "1200+", label: "Workflows automated" },
    ],
    gradient: "from-purple/20 via-violet-500/10 to-transparent",
    border: "border-purple/20 hover:border-purple/50",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    tagBg: "bg-purple/10 border-purple/25 text-purple",
    accentColor: "text-purple",
    visual: "bg-gradient-to-br from-purple-950/50 via-violet-950/40 to-navy",
  },
];

function CaseCard({ c, i }: { c: typeof cases[number]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = c.icon;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08 }}>
      <div className={`group relative flex flex-col h-full rounded-2xl border bg-gradient-to-br ${c.gradient} overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${c.border} bg-[rgba(9,15,82,0.6)]`}>

        {/* Industry visual bar */}
        <div className={`relative h-2 w-full ${c.visual} overflow-hidden`}>
          <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-transparent via-white/10 to-transparent
            translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        <div className="flex flex-col flex-1 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5 gap-3">
            <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
              <Icon size={20} weight="duotone" className={c.iconColor} />
            </div>
            <span className={`text-[10px] font-700 uppercase tracking-widest px-2.5 py-1 rounded-full border ${c.tagBg}`}>
              {c.industry}
            </span>
          </div>

          {/* Client */}
          <p className="text-slate text-xs uppercase tracking-widest mb-2">{c.client}</p>

          {/* Headline */}
          <h3 className="font-display font-700 text-base text-white leading-snug mb-3">
            {c.headline}
          </h3>

          {/* Description */}
          <p className="text-slate text-sm leading-relaxed flex-1 mb-6">{c.description}</p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/8 mb-5">
            {c.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className={`font-display font-800 text-xl leading-none ${c.accentColor}`}>
                  {s.value}
                </span>
                <span className="text-slate text-[10px] leading-tight">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/case-studies"
            className={`flex items-center gap-1.5 text-xs font-600 ${c.accentColor} hover:gap-3 transition-all`}>
            Read case study <ArrowRight size={12} weight="bold" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="csgrid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#csgrid)" />
        </svg>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight max-w-xl">
              Case studies for the industries we move with ServiceNow.
            </h2>
            <div className="flex flex-col gap-1 max-w-sm">
              <p className="text-slate text-base leading-relaxed">
                Real ServiceNow programs in Oil & Gas, Healthcare, Banking, and Logistics — each built around measurable outcomes and industry-tested execution.
              </p>
              <Link href="/case-studies"
                className="flex items-center gap-2 text-gold hover:text-white text-sm font-600 transition-colors mt-2 group">
                View all case studies
                <ArrowRight size={13} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Summary bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-5 rounded-2xl border border-white/8 bg-white/3">
          {[
            { icon: Lightning, value: "$198M+", label: "Client savings documented", color: "text-gold" },
            { icon: Buildings, value: "4", label: "Industries featured", color: "text-teal" },
            { icon: Factory, value: "1200+", label: "Workflows automated", color: "text-purple" },
            { icon: Truck, value: "98%", label: "Enterprise satisfaction", color: "text-gold" },
          ].map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <Icon size={16} weight="duotone" className={color} />
              </div>
              <div>
                <div className={`font-display font-800 text-lg leading-none ${color}`}>{value}</div>
                <div className="text-slate text-[11px] mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
