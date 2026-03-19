"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    subtitle: "Discover What's Holding IT Back",
    description:
      "We map your current-state architecture, identify capability gaps, and quantify the cost of inaction. Our assessment produces a board-ready business case in 2 weeks.",
    deliverable: "IT Maturity Report + ROI Business Case",
    color: "text-gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/5",
  },
  {
    number: "02",
    icon: Compass,
    title: "Architect",
    subtitle: "Design for Transformation, Not Just Today",
    description:
      "Our enterprise architects design a platform blueprint that scales with you — integrations, governance model, data strategy, and a phased roadmap built around your constraints.",
    deliverable: "Platform Blueprint + Phased Roadmap",
    color: "text-purple",
    borderColor: "border-purple/30",
    bgColor: "bg-purple/5",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Activate",
    subtitle: "Deploy Fast. Land Right.",
    description:
      "Agile sprints, certified engineers, and a 6-week deployment model that doesn't sacrifice quality. Zero-downtime go-lives with full knowledge transfer to your team.",
    deliverable: "Live Platform + Team Enablement",
    color: "text-teal",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/5",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Accelerate",
    subtitle: "Sustain the Gains",
    description:
      "Post-go-live optimization, adoption programs, and continuous improvement cycles that compound value over time. We don't disappear at launch.",
    deliverable: "KPI Dashboard + Optimization Cycles",
    color: "text-gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/5",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
            Four Phases. One{" "}
            <span className="text-gold-gradient">Continuous Arc</span>
          </h2>
          <p className="text-slate text-base leading-relaxed">
            Our methodology is built from 200+ enterprise deployments. Each phase
            delivers standalone value — together they produce transformation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className={`relative flex flex-col p-6 rounded-2xl border ${step.borderColor} ${step.bgColor} group`}
              >
                {/* Number */}
                <span className={`font-display font-800 text-6xl ${step.color} opacity-20 absolute top-4 right-5 leading-none select-none`}>
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border ${step.borderColor} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={step.color} />
                </div>

                {/* Content */}
                <h3 className={`font-display font-800 text-2xl ${step.color} mb-1`}>
                  {step.title}
                </h3>
                <p className="text-white font-600 text-sm mb-3 leading-snug">
                  {step.subtitle}
                </p>
                <p className="text-slate text-sm leading-relaxed flex-1 mb-5">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className={`pt-4 border-t ${step.borderColor}`}>
                  <p className="text-xs text-slate uppercase tracking-wider mb-1">
                    Deliverable
                  </p>
                  <p className={`text-sm font-600 ${step.color}`}>{step.deliverable}</p>
                </div>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-navy-mid border border-white/10 flex items-center justify-center">
                      <span className="text-slate text-xs">→</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
