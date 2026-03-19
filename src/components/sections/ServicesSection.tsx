"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Brain, Settings, Building2, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "ServiceNow Implementation",
    tag: "Core Platform",
    description:
      "Full-lifecycle deployments — from discovery to go-live in 6 weeks. ITSM, ITOM, HRSD, CSM, and SecOps modules handled by certified architects.",
    metrics: "Avg. 6-week deployment · 30% under-budget delivery",
    color: "from-gold/20 to-transparent",
    borderColor: "border-gold/20 hover:border-gold/50",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    href: "/services/servicenow",
  },
  {
    icon: Brain,
    title: "Agentic AI & Automation",
    tag: "AI-First",
    description:
      "Deploy AI agents that handle L1/L2 tickets, auto-route incidents, and trigger remediation — without a human in the loop.",
    metrics: "60% ticket deflection · 24/7 autonomous resolution",
    color: "from-purple/20 to-transparent",
    borderColor: "border-purple/20 hover:border-purple/50",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    href: "/services/agentic-ai",
  },
  {
    icon: Zap,
    title: "ITSM & Platform Optimization",
    tag: "Optimization",
    description:
      "Already on ServiceNow but not seeing ROI? We audit, optimize, and unlock the capabilities your team paid for but never activated.",
    metrics: "Avg. 40% MTTR reduction · 3× user adoption lift",
    color: "from-teal/20 to-transparent",
    borderColor: "border-teal/20 hover:border-teal/50",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    href: "/services/itsm",
  },
  {
    icon: Building2,
    title: "Platform Architecture",
    tag: "Enterprise Scale",
    description:
      "Governance frameworks, multi-instance strategies, and integration architectures designed for 10,000+ seat enterprises.",
    metrics: "99.9% uptime SLA · Zero-downtime migrations",
    color: "from-gold/20 to-transparent",
    borderColor: "border-gold/20 hover:border-gold/50",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    href: "/services/architecture",
  },
  {
    icon: BarChart3,
    title: "Strategic IT Advisory",
    tag: "C-Suite",
    description:
      "Board-ready roadmaps, IT operating model redesign, and technology investment strategy. We work alongside your leadership, not below it.",
    metrics: "CIO-to-CIO engagement model",
    color: "from-purple/20 to-transparent",
    borderColor: "border-purple/20 hover:border-purple/50",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    href: "/services/advisory",
  },
  {
    icon: Users,
    title: "Talent & Staffing",
    tag: "On-Demand",
    description:
      "Certified ServiceNow engineers, architects, and project managers embedded in your team — available in 72 hours.",
    metrics: "72-hour placement · 500+ vetted engineers",
    color: "from-teal/20 to-transparent",
    borderColor: "border-teal/20 hover:border-teal/50",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    href: "/services/staffing",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-600 uppercase tracking-widest mb-4">
            What We Do
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-800 text-4xl md:text-5xl text-navy leading-tight max-w-xl">
              Services. Built for{" "}
              <span className="relative">
                Enterprise Scale
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gold" />
              </span>
            </h2>
            <p className="text-navy/60 text-base max-w-md leading-relaxed">
              Six integrated capabilities that cover every phase of enterprise IT
              transformation — from strategy through sustained performance.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" }}
              >
                <Link
                  href={service.href}
                  className={`group flex flex-col h-full p-6 rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.borderColor}`}
                >
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                      <Icon size={22} className={service.iconColor} />
                    </div>
                    <span className="text-xs font-600 text-navy/40 uppercase tracking-wider pt-1">
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-700 text-lg text-navy mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-navy/8">
                    <p className="text-xs text-navy/40 mb-3">{service.metrics}</p>
                    <span className="flex items-center gap-1 text-sm font-600 text-navy group-hover:gap-2 transition-all">
                      Explore Service{" "}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
