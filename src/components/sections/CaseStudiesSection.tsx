"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, Lightning, Factory, Bank, Storefront,
  Truck, Buildings, Flame,
} from "@phosphor-icons/react";

const cases = [
  {
    id: 1,
    client: "Global Energy Major",
    industry: "Oil & Gas",
    icon: Flame,
    headline: "67% fewer incidents. $120M back to the business.",
    description:
      "Offshore operations running on fragmented legacy tooling. ServiceNow unified asset management, incident workflows, and compliance reporting across 14 operational sites — in 9 months.",
    stats: [
      { value: "67%", label: "Incident reduction" },
      { value: "$120M", label: "Annual savings" },
      { value: "9 mo.", label: "Deployment" },
    ],
    gradient: "from-orange-500/20 via-red/10 to-transparent",
    border: "border-orange-500/20 hover:border-orange-500/50",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    tagBg: "bg-orange-500/10 border-orange-500/25 text-orange-400",
    accentColor: "text-orange-400",
    visual: "bg-gradient-to-br from-orange-900/40 via-red-950/60 to-navy",
  },
  {
    id: 2,
    client: "Top-5 U.S. Bank",
    industry: "Banking & FinServ",
    icon: Bank,
    headline: "54% faster MTTR. 28,000 users. 4 months.",
    description:
      "A compliance-heavy ITSM overhaul with SOX, PCI-DSS, and internal audit requirements baked in. Deployed across 28,000 users with zero rollback incidents at go-live.",
    stats: [
      { value: "54%", label: "MTTR reduction" },
      { value: "28K", label: "Users onboarded" },
      { value: "4 mo.", label: "Go-live" },
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
    id: 3,
    client: "Automotive OEM",
    industry: "Manufacturing",
    icon: Factory,
    headline: "38% quality improvement. $78M in waste eliminated.",
    description:
      "Field service management and asset lifecycle automation deployed across 12 plants simultaneously. OT/IT integration unlocked real-time operational visibility the business had never had.",
    stats: [
      { value: "38%", label: "Quality improvement" },
      { value: "12", label: "Plants deployed" },
      { value: "$78M", label: "Waste eliminated" },
    ],
    gradient: "from-teal/20 via-cyan-500/10 to-transparent",
    border: "border-teal/20 hover:border-teal/50",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    tagBg: "bg-teal/10 border-teal/25 text-teal",
    accentColor: "text-teal",
    visual: "bg-gradient-to-br from-teal-950/50 via-cyan-950/40 to-navy",
  },
  {
    id: 4,
    client: "Global Shipping Co.",
    industry: "Logistics",
    icon: Truck,
    headline: "400+ workflows automated. $22M cost avoided.",
    description:
      "Supply chain complexity at global scale. We automated 400+ manual workflows, integrated warehouse and freight systems, and delivered 72% faster delivery exception resolution.",
    stats: [
      { value: "72%", label: "Faster resolution" },
      { value: "400+", label: "Workflows automated" },
      { value: "$22M", label: "Cost avoided" },
    ],
    gradient: "from-purple/20 via-violet-500/10 to-transparent",
    border: "border-purple/20 hover:border-purple/50",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    tagBg: "bg-purple/10 border-purple/25 text-purple",
    accentColor: "text-purple",
    visual: "bg-gradient-to-br from-purple-950/50 via-violet-950/40 to-navy",
  },
  {
    id: 5,
    client: "Global Retailer",
    industry: "Retail",
    icon: Storefront,
    headline: "45% CSAT increase. 3,200 locations. 6-month ROI.",
    description:
      "Unified service operations across 3,200 retail locations with a single ServiceNow platform. Customer satisfaction jumped 45 points within two quarters of go-live.",
    stats: [
      { value: "45%", label: "CSAT increase" },
      { value: "3,200", label: "Locations served" },
      { value: "6 mo.", label: "ROI achieved" },
    ],
    gradient: "from-teal/15 via-emerald-500/10 to-transparent",
    border: "border-teal/15 hover:border-teal/40",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    tagBg: "bg-teal/10 border-teal/25 text-teal",
    accentColor: "text-teal",
    visual: "bg-gradient-to-br from-emerald-950/50 via-teal-950/40 to-navy",
  },
  {
    id: 6,
    client: "Investment Bank",
    industry: "Risk & Compliance",
    icon: Buildings,
    headline: "80% of audit hours reclaimed. 100% filing compliance.",
    description:
      "Risk and compliance operations automated across 14 jurisdictions. Every filing deadline met, every audit trail complete — with 80% less manual effort.",
    stats: [
      { value: "80%", label: "Audit hours saved" },
      { value: "100%", label: "Filing compliance" },
      { value: "14", label: "Jurisdictions" },
    ],
    gradient: "from-gold/15 via-yellow-500/10 to-transparent",
    border: "border-gold/15 hover:border-gold/40",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    tagBg: "bg-gold/10 border-gold/25 text-gold",
    accentColor: "text-gold",
    visual: "bg-gradient-to-br from-yellow-950/50 via-amber-950/40 to-navy",
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
      <div className={`group relative flex flex-col h-full rounded-2xl border bg-gradient-to-br ${c.gradient} overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${c.border}`}
        style={{ background: "rgba(9,15,82,0.6)" }}>

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
            Proven Results
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight max-w-xl">
              Proven Results for{" "}
              <span className="text-gold">Global Enterprises</span>
            </h2>
            <div className="flex flex-col gap-1 max-w-sm">
              <p className="text-slate text-base leading-relaxed">
                Every number here is real. Every client is a household name.
                We let outcomes speak — not slides.
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
            { icon: Lightning, value: "$220M+", label: "Client savings documented", color: "text-gold" },
            { icon: Buildings, value: "50+", label: "Enterprise deployments", color: "text-teal" },
            { icon: Factory, value: "6 sectors", label: "Industries served", color: "text-purple" },
            { icon: Truck, value: "98%", label: "Client retention rate", color: "text-gold" },
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
