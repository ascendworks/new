"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "200+",
    label: "ServiceNow Deployments",
    color: "text-gold",
  },
  {
    value: "6 wks",
    label: "Avg. Time to Go-Live",
    color: "text-teal",
  },
  {
    value: "40%",
    label: "Avg. MTTR Reduction",
    color: "text-purple",
  },
  {
    value: "$2M+",
    label: "Annual Value Unlocked / Client",
    color: "text-gold",
  },
  {
    value: "98%",
    label: "Client Retention Rate",
    color: "text-teal",
  },
  {
    value: "15+",
    label: "Industries Served",
    color: "text-purple",
  },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-navy-mid py-16 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-1 group"
            >
              <span
                className={`font-display font-800 text-3xl lg:text-4xl ${stat.color} leading-none`}
              >
                {stat.value}
              </span>
              <span className="text-slate text-xs leading-snug mt-1 max-w-[120px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
