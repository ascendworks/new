"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  ShieldCheck,
  UserGear,
  CheckCircle,
} from "@phosphor-icons/react";

const oilGasCases = [
  {
    id: "upstream-asset",
    badge: "Upstream E&P",
    color: "text-gold",
    border: "border-gold/20",
    bg: "bg-gold/5",
    Icon: Gauge,
    client: "Global E&P Supermajor",
    modules: ["Asset Management (HAM)", "ITOM Visibility", "Field Service Management", "Predictive Intelligence"],
    title: "Predictive Asset Health Platform",
    challenge:
      "Unplanned equipment failures across 26 production sites managed by 3 disconnected CMMS systems — no unified view, 6.8-hour average dispatch delays, and 140+ annual production-impacting events.",
    outcome:
      "31% reduction in unplanned downtime. MTTR cut from 8.2 to 3.1 hours. $4.2M in avoided production losses in Year 1. All 26 sites unified on one ServiceNow platform.",
    before: [
      "140+ annual unplanned failure events",
      "6.8h avg. dispatch-to-arrival (manual process)",
      "3 siloed CMMS platforms with no unified view",
    ],
    after: [
      "31% fewer production-impacting failures",
      "Sensor-threshold automated dispatch via Flow",
      "26 sites on one ServiceNow asset command center",
    ],
  },
  {
    id: "hse-compliance",
    badge: "Safety & Compliance",
    color: "text-teal",
    border: "border-teal/20",
    bg: "bg-teal/5",
    Icon: ShieldCheck,
    client: "Integrated Energy Company",
    modules: ["GRC", "Risk Management", "Employee Center Pro", "Now Assist for GRC"],
    title: "HSE Incident Automation & PSM Compliance",
    challenge:
      "Safety incidents managed in email and spreadsheets. OSHA 300 log requiring 3 FTE-days per quarter. PSM documentation fragmented across 140+ SharePoint folders with zero version control.",
    outcome:
      "4× faster incident notification. Investigation closure from 22 to 11 days. OSHA 300 log automated to 2 hours. PSM audit readiness from 68% to 94%.",
    before: [
      "22-day avg. incident investigation closure",
      "3 FTE-days/quarter for OSHA 300 log",
      "68% PSM audit readiness score",
    ],
    after: [
      "11-day avg. closure — 50% improvement",
      "2 automated hours for OSHA 300",
      "94% PSM audit readiness score",
    ],
  },
  {
    id: "field-workforce",
    badge: "Field Operations",
    color: "text-purple",
    border: "border-purple/20",
    bg: "bg-purple/5",
    Icon: UserGear,
    client: "Midstream Pipeline Operator",
    modules: ["Field Service Management", "FSM Mobile (Now Assist)", "HR Service Delivery", "Predictive Intelligence"],
    title: "Field Workforce Intelligence & AI Dispatch",
    challenge:
      "1,800 field technicians dispatched by phone and paper. 52% first-time fix rate. Zero parts visibility at the field level. Certification compliance tracked in quarterly spreadsheet audits.",
    outcome:
      "First-time fix rate from 52% to 79%. Technician productivity up 34%. Mean travel time per work order reduced 28%. Real-time certification compliance across all 1,800 technicians.",
    before: [
      "52% first-time fix rate",
      "Phone/SMS-based dispatch with no digital visibility",
      "Quarterly manual certification audits",
    ],
    after: [
      "79% first-time fix rate (+27 points)",
      "AI-matched intelligent dispatch across 5 regions",
      "Real-time certification compliance dashboard",
    ],
  },
];

export default function OilGasCaseStudySection() {
  return (
    <section className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold mb-4">
            Oil &amp; Gas Deep Dive
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy md:text-4xl max-w-2xl">
            Three ServiceNow programs engineered for energy sector outcomes.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 max-w-xl">
            Asset reliability, EHS compliance, and field workforce intelligence — with measurable before-and-after results at operating scale.
          </p>
        </motion.div>

        <div className="space-y-8">
          {oilGasCases.map((c, i) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 lg:p-9 shadow-[0_8px_40px_rgba(10,22,40,0.06)]"
            >
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className={`shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border ${c.border} ${c.bg}`}>
                    <c.Icon size={24} className={c.color} weight="duotone" />
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${c.color}`}>{c.badge}</span>
                    <h3 className="font-display text-xl font-extrabold text-navy leading-tight mt-0.5">{c.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{c.client}</p>
                  </div>
                </div>
                <div className="hidden md:flex flex-wrap gap-2 max-w-sm">
                  {c.modules.map((m) => (
                    <span key={m} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-500">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 mb-6">
                <div className="rounded-2xl border border-red/10 bg-red/3 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-red/60 mb-2">Challenge</p>
                  <p className="text-sm leading-6 text-slate-700">{c.challenge}</p>
                </div>
                <div className="rounded-2xl border border-teal/15 bg-teal/4 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-teal mb-2">Outcome</p>
                  <p className="text-sm leading-6 text-slate-700">{c.outcome}</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">Before</p>
                  <div className="space-y-1.5">
                    {c.before.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red/40 shrink-0" />
                        <span className="text-xs text-slate-500">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">After</p>
                  <div className="space-y-1.5">
                    {c.after.map((a) => (
                      <div key={a} className="flex items-center gap-2">
                        <CheckCircle size={12} weight="fill" className="text-teal shrink-0" />
                        <span className="text-xs text-slate-600">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-gold/20 bg-gold/5 p-6"
        >
          <div>
            <p className="font-display text-base font-bold text-navy">Want the full AI and technical breakdown?</p>
            <p className="text-sm text-slate-500 mt-1">Read the Oil &amp; Gas executive article in our Insights section.</p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <Link
              href="/insights#oilgas"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
            >
              Read the Article <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/20"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
