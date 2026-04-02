"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "@phosphor-icons/react";

const partners = [
  {
    name: "ServiceNow",
    role: "Build Partner",
    tier: "ServiceNow Build Partner Status",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/10",
    textColor: "text-teal",
    logoBg: "bg-white",
    logo: (
      <img
        src="https://cdn.simpleicons.org/servicenow/0D9B8A"
        alt="ServiceNow"
        width={36}
        height={36}
        className="w-9 h-9 object-contain"
      />
    ),
  },
  {
    name: "Microsoft",
    role: "Azure Partner",
    tier: "Microsoft Partner Network",
    borderColor: "border-purple/30",
    bgColor: "bg-purple/10",
    textColor: "text-purple",
    logoBg: "bg-white",
    logo: (
      <svg viewBox="0 0 21 21" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
        <rect x="0" y="0" width="10" height="10" fill="#F25022" />
        <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
        <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
        <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "AWS",
    role: "Technology Partner",
    tier: "AWS Partner Network",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/10",
    textColor: "text-gold",
    logoBg: "bg-white",
    logo: (
      <img
        src="https://cdn.simpleicons.org/amazonaws/C9A84C"
        alt="Amazon Web Services"
        width={36}
        height={36}
        className="w-9 h-9 object-contain"
      />
    ),
  },
  {
    name: "Databricks",
    role: "Data Partner",
    tier: "Databricks Partner Connect",
    borderColor: "border-amber/30",
    bgColor: "bg-amber/10",
    textColor: "text-amber",
    logoBg: "bg-white",
    logo: (
      <img
        src="https://cdn.simpleicons.org/databricks/F59E0B"
        alt="Databricks"
        width={36}
        height={36}
        className="w-9 h-9 object-contain"
      />
    ),
  },
  {
    name: "Snowflake",
    role: "Data Warehouse",
    tier: "Snowflake Partner Network",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/10",
    textColor: "text-teal",
    logoBg: "bg-white",
    logo: (
      <img
        src="https://cdn.simpleicons.org/snowflake/29B5E8"
        alt="Snowflake"
        width={36}
        height={36}
        className="w-9 h-9 object-contain"
      />
    ),
  },
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

        {/* Partner cards — colored boxes like How We Work */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col p-5 rounded-2xl border ${partner.borderColor} ${partner.bgColor} group hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Faint number watermark */}
              <span className={`font-display font-800 text-6xl ${partner.textColor} opacity-10 absolute top-3 right-4 leading-none select-none`}>
                0{i + 1}
              </span>

              {/* Logo box */}
              <div className={`w-14 h-14 rounded-xl border ${partner.borderColor} ${partner.logoBg} flex items-center justify-center mb-4 shadow-sm`}>
                {partner.logo}
              </div>

              {/* Name */}
              <h3 className={`font-display font-700 text-base ${partner.textColor} mb-0.5 leading-snug`}>
                {partner.name}
              </h3>

              {/* Role */}
              <p className="text-navy/60 text-xs mb-4 leading-snug">{partner.role}</p>

              {/* Tier */}
              <div className={`pt-3 border-t ${partner.borderColor}`}>
                <p className="text-navy/40 text-[10px] uppercase tracking-wider mb-1">Status</p>
                <p className={`text-xs font-600 ${partner.textColor} leading-snug`}>{partner.tier}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
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
                <ShieldCheck size={14} weight="duotone" className="text-gold" />
                <span className="text-navy/70 text-xs font-500">{cert.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
