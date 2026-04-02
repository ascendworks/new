"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ShieldCheck } from "@phosphor-icons/react";
import "swiper/css";

/* ── Inline SVG logos — no external CDN required ─────────────────────────── */
const ServiceNowLogo = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="ServiceNow">
    <circle cx="24" cy="24" r="23" fill="#62D84E" />
    <path d="M14 34V14l7 12V14h6v12l7-12v20h-6V22l-7 12V22l-7 12z" fill="white" />
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 21 21" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
    <rect x="0" y="0" width="10" height="10" fill="#F25022" />
    <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
    <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
    <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 80 44" width="56" height="32" xmlns="http://www.w3.org/2000/svg" aria-label="AWS">
    <text x="0" y="30" fontSize="32" fontWeight="900" fill="#FF9900" fontFamily="Arial Black, Arial, sans-serif">aws</text>
    <path d="M5 38 Q40 50 70 38" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M64 34 L70 38 L64 42" fill="none" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DatabricksLogo = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="Databricks">
    <polygon points="24,3 46,39 2,39" fill="none" stroke="#FF3621" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="24,16 36,36 12,36" fill="#FF3621" />
  </svg>
);

const SnowflakeLogo = () => (
  <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="Snowflake">
    <line x1="24" y1="3" x2="24" y2="45" stroke="#29B5E8" strokeWidth="5" strokeLinecap="round" />
    <line x1="4" y1="13.5" x2="44" y2="34.5" stroke="#29B5E8" strokeWidth="5" strokeLinecap="round" />
    <line x1="44" y1="13.5" x2="4" y2="34.5" stroke="#29B5E8" strokeWidth="5" strokeLinecap="round" />
    {/* branch ticks */}
    <line x1="24" y1="3" x2="19" y2="10" stroke="#29B5E8" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="3" x2="29" y2="10" stroke="#29B5E8" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="45" x2="19" y2="38" stroke="#29B5E8" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="45" x2="29" y2="38" stroke="#29B5E8" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ── Partner data ─────────────────────────────────────────────────────────── */
const partners = [
  {
    name: "ServiceNow",
    role: "Build Partner",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/10",
    textColor: "text-teal",
    Logo: ServiceNowLogo,
  },
  {
    name: "Microsoft",
    role: "Azure Partner",
    borderColor: "border-purple/30",
    bgColor: "bg-purple/10",
    textColor: "text-purple",
    Logo: MicrosoftLogo,
  },
  {
    name: "AWS",
    role: "Technology Partner",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/10",
    textColor: "text-gold",
    Logo: AWSLogo,
  },
  {
    name: "Databricks",
    role: "Data Partner",
    borderColor: "border-amber/30",
    bgColor: "bg-amber/10",
    textColor: "text-amber",
    Logo: DatabricksLogo,
  },
  {
    name: "Snowflake",
    role: "Data Warehouse",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/10",
    textColor: "text-teal",
    Logo: SnowflakeLogo,
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

        {/* Swiper auto-scroll ticker with colored cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={16}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3500}
            allowTouchMove={false}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {[...partners, ...partners].map((partner, i) => {
              const Logo = partner.Logo;
              return (
                <SwiperSlide key={`${partner.name}-${i}`}>
                  <div className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border ${partner.borderColor} ${partner.bgColor} h-36`}>
                    <div className="flex items-center justify-center h-10">
                      <Logo />
                    </div>
                    <div className="text-center">
                      <p className={`font-display font-700 text-sm ${partner.textColor} leading-tight`}>
                        {partner.name}
                      </p>
                      <p className="text-navy/50 text-xs mt-0.5">{partner.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
