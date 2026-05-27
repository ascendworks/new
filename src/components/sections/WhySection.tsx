"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Lightbulb,
  Trophy,
  ShieldCheck,
  Handshake,
  CheckCircle,
} from "@phosphor-icons/react";

const differentiators = [
  {
    Icon: Clock,
    title: "6-Week Deployment Guarantee",
    description:
      "We put it in writing. If we miss the go-live date due to our execution, we extend support at no charge. No excuses.",
    stat: "6 weeks, guaranteed",
  },
  {
    Icon: Lightbulb,
    title: "Agentic AI Capability",
    description:
      "Native AI engineering team — we build autonomous agents that integrate directly into your ServiceNow workflows and learn.",
    stat: "AI-native team",
  },
  {
    Icon: Trophy,
    title: "ServiceNow Build Partner",
    description:
      "Among the top 3% globally. Build Partner status requires demonstrated customer success — not just revenue.",
    stat: "Top 3% globally",
  },
  {
    Icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II certified. HIPAA, SOX, PCI-DSS, and FedRAMP experienced. Security review is standard, not optional.",
    stat: "SOC 2 Type II",
  },
  {
    Icon: Handshake,
    title: "CIO-Level Engagement",
    description:
      "Your executive sponsor is a former CIO — not a sales rep. We understand board rooms, budget cycles, and transformation politics.",
    stat: "C-level engagement",
  },
  {
    Icon: CheckCircle,
    title: "No-Disappear Guarantee",
    description:
      "Every client receives 90 days of post-deployment optimization, adoption tracking, and performance tuning — included.",
    stat: "90-day post-launch",
  },
];

export default function WhySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
            Why AscendWorks
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
            Six Reasons CIOs{" "}
            <span className="text-gold-gradient">Choose Us First</span>
          </h2>
          <p className="text-slate text-base leading-relaxed">
            Not a pitch deck. Verifiable differentiators that determine whether your transformation lands or stalls.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
                className="flex flex-col p-6 rounded-2xl border border-gold/10 bg-white/3 group hover:border-gold/25 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <Icon size={22} weight="duotone" className="text-gold" />
                </div>
                <h4 className="font-display font-700 text-base text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate text-sm leading-relaxed flex-1 mb-5">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gold/10">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-600">
                    {item.stat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
