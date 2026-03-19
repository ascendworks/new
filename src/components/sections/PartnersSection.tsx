"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "ServiceNow", role: "Build Partner" },
  { name: "Microsoft", role: "Azure Partner" },
  { name: "AWS", role: "Technology Partner" },
  { name: "Databricks", role: "Data Partner" },
  { name: "Snowflake", role: "Data Warehouse" },
];

const certifications = [
  { label: "ServiceNow Certified Implementation Specialist", short: "CIS" },
  { label: "ServiceNow Certified Application Developer", short: "CAD" },
  { label: "ServiceNow Certified System Administrator", short: "CSA" },
  { label: "AWS Solutions Architect", short: "AWS-SA" },
  { label: "ITIL v4 Foundation", short: "ITIL 4" },
  { label: "SOC 2 Type II Certified", short: "SOC 2" },
];

export default function PartnersSection() {
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
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-semibold uppercase tracking-widest mb-4">
            Partners & Credentials
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight mb-3">
            With Capability Comes{" "}
            <span className="relative">
              Credibility
              <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gold" />
            </span>
          </h2>
          <p className="text-navy/60 text-base max-w-xl mx-auto">
            Our partnerships and certifications aren&apos;t logos on a slide — they represent
            the deep technical standards your enterprise deserves.
          </p>
        </motion.div>

        {/* Partner logos grid — centered for 5 items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="flex flex-col items-center justify-center gap-1 p-6 rounded-2xl border border-navy/10 bg-white hover:border-navy/25 hover:shadow-md transition-all w-44"
            >
              <div className="w-12 h-12 rounded-xl bg-off-white flex items-center justify-center mb-1">
                <span className="font-display font-800 text-navy text-xs tracking-tight">
                  {partner.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-600 text-navy text-sm text-center">{partner.name}</span>
              <span className="text-navy/40 text-xs text-center">{partner.role}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-navy/10 pt-12"
        >
          <p className="text-center text-navy/50 text-xs uppercase tracking-widest mb-8">
            Team Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.short}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy/15 bg-white hover:border-gold/50 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold text-[9px] font-800">{cert.short.slice(0, 1)}</span>
                </span>
                <span className="text-navy/70 text-xs font-500">{cert.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
