"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { end: 200, suffix: "+", label: "ServiceNow Deployments", color: "text-gold" },
  { end: 6, suffix: " wks", label: "Avg. Time to Go-Live", color: "text-teal" },
  { end: 40, suffix: "%", label: "Avg. MTTR Reduction", color: "text-purple" },
  { prefix: "$", end: 2, suffix: "M+", label: "Annual Value Unlocked / Client", color: "text-gold" },
  { end: 98, suffix: "%", label: "Client Retention Rate", color: "text-teal" },
  { end: 15, suffix: "+", label: "Industries Served", color: "text-purple" },
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
              className="flex flex-col items-center text-center gap-1"
            >
              <span className={`font-display font-800 text-3xl lg:text-4xl ${stat.color} leading-none tabular-nums`}>
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.2}
                    delay={i * 0.1}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix}
                    useEasing
                  />
                ) : (
                  `${stat.prefix ?? ""}0${stat.suffix}`
                )}
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
