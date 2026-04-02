"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ShieldCheck, Clock, Trophy, Handshake, Lightbulb } from "@phosphor-icons/react";

const differentiators = [
  {
    icon: Clock,
    title: "6-Week Deployment Guarantee",
    description:
      "We put it in writing. If we miss the go-live date due to our execution, we extend support at no charge. No excuses, no scope creep hidden in fine print.",
    stat: "200+ on-time deployments",
  },
  {
    icon: Trophy,
    title: "ServiceNow Build Partner",
    description:
      "Among the top ServiceNow Build partners globally. Build Partner status requires demonstrated customer success — not just revenue. Ours is earned, not bought.",
    stat: "Top 3% globally",
  },
  {
    icon: Handshake,
    title: "CIO-Level Engagement",
    description:
      "Your executive sponsor is a former CIO. Not a sales rep. We understand the board room, the budget cycle, and the politics of enterprise IT transformation.",
    stat: "Ex-CIO advisory team",
  },
  {
    icon: Lightbulb,
    title: "Agentic AI Capability",
    description:
      "Native AI engineering team — not third-party resellers. We build autonomous agents that integrate directly into your ServiceNow workflows and learn over time.",
    stat: "60% avg. ticket deflection",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II certified. HIPAA, SOX, PCI-DSS, FedRAMP experienced. Every engagement includes a security review — it's not optional, it's standard.",
    stat: "SOC 2 Type II certified",
  },
  {
    icon: CheckCircle,
    title: "No-Disappear Guarantee",
    description:
      "We don't go dark after go-live. Every client receives 90 days of post-deployment optimization, adoption tracking, and performance tuning — included.",
    stat: "90-day included support",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-dark py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple/8 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
            Why AscendWorks
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
            The Stats. The Facts.{" "}
            <span className="text-gold-gradient">The Difference.</span>
          </h2>
          <p className="text-slate text-base leading-relaxed">
            Every ServiceNow partner claims excellence. Here is what makes the
            claim concrete — specific commitments, verified outcomes, and a delivery
            model built for enterprise accountability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex flex-col p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-gold/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Icon size={20} weight="duotone" className="text-gold" />
                  </div>
                  <span className="text-xs font-600 text-gold/70 bg-gold/10 px-2.5 py-1 rounded-full">
                    {item.stat}
                  </span>
                </div>
                <h3 className="font-display font-700 text-base text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
