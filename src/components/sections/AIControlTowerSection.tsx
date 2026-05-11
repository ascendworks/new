"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Sliders,
  Robot,
  ChartLineUp,
} from "@phosphor-icons/react";

function Fade({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const capabilities = [
  {
    Icon: Brain,
    color: "text-gold",
    ring: "border-gold/25 bg-gold/8",
    num: "01",
    title: "Predictive Incident Risk",
    desc: "AI models score every active incident and change request against CMDB health, historical failure patterns, and business impact — surfacing risks before they cascade.",
  },
  {
    Icon: ShieldCheck,
    color: "text-teal",
    ring: "border-teal/25 bg-teal/8",
    num: "02",
    title: "Compliance Coordination",
    desc: "Regulatory events trigger automatic escalation to the right teams, evidence collection workflows, and a full audit trail — without a single manual handoff.",
  },
  {
    Icon: Sliders,
    color: "text-purple",
    ring: "border-purple/25 bg-purple/8",
    num: "03",
    title: "Unified Control Room",
    desc: "IT, risk, and business operations share one synchronized dashboard — 12 configurable views spanning incident queues, change risk, SLA posture, and regulatory readiness.",
  },
  {
    Icon: Robot,
    color: "text-navy",
    ring: "border-navy/15 bg-navy/5",
    num: "04",
    title: "AI-Assisted Triage",
    desc: "AI agents classify, route, and escalate tickets autonomously — cutting manual triage by 66% and freeing senior engineers to focus on resolution, not dispatch.",
  },
  {
    Icon: ChartLineUp,
    color: "text-red",
    ring: "border-red/20 bg-red/6",
    num: "05",
    title: "Regulator Reporting",
    desc: "Audit-ready reports are generated on demand — compressing regulatory response from weeks to hours by pulling structured data directly from ServiceNow records.",
  },
];

const steps = [
  {
    num: "01",
    label: "Detect",
    sub: "AI agents continuously monitor all incidents, changes, and compliance signals across IT, risk, and operational data in real time",
    accent: "text-gold",
    bg: "bg-gold/6 border-gold/25",
  },
  {
    num: "02",
    label: "Coordinate",
    sub: "Risk scores trigger automated workflows — routing escalations, assembling evidence, and synchronizing teams without manual handoffs",
    accent: "text-teal",
    bg: "bg-teal/6 border-teal/25",
  },
  {
    num: "03",
    label: "Act",
    sub: "Control room dashboards surface the right intelligence to the right person — from engineer to CRO to regulator — at the right moment",
    accent: "text-purple",
    bg: "bg-purple/6 border-purple/25",
  },
];

const outcomes = [
  { value: "66%", label: "Reduction in manual triage", color: "text-gold" },
  { value: "90%", label: "Faster regulator reporting", color: "text-teal" },
  { value: "12", label: "Critical dashboards unified", color: "text-purple" },
];

export default function AIControlTowerSection() {
  return (
    <section id="ai-control-tower" className="section-light scroll-mt-20 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header + Image */}
        <Fade>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="space-y-6 lg:w-[55%]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
                  Banking &amp; FinServ
                </span>
                <span className="text-xs text-slate-500">Product Deep Dive</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl">
                The AI Control Tower: Real-Time Resilience on ServiceNow
              </h2>
              <p className="text-base leading-8 text-slate-600">
                Enterprise operations produce more signals than any human team can process in real time. The AscendWorks AI Control Tower transforms ServiceNow into a predictive intelligence layer — one that detects incident risk before it fires, coordinates compliance without manual escalation, and keeps IT, risk, and business operations synchronized in a single control room.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Built for regulated industries where the cost of a missed signal is measured in regulatory penalties and reputational exposure — not just SLA violations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
              >
                Request a Control Tower Demo <ArrowRight size={14} weight="bold" />
              </Link>
            </div>

            <div className="relative lg:w-[45%]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/case-studies/bfsi-control-tower.jpg"
                  alt="AI Control Tower — unified command center for enterprise IT and risk operations"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-2">
                    {outcomes.map((o) => (
                      <div key={o.label} className="rounded-xl border border-white/10 bg-navy/80 p-2.5 text-center backdrop-blur-sm">
                        <div className={`font-display text-xl font-extrabold ${o.color}`}>{o.value}</div>
                        <div className="mt-0.5 text-[9px] leading-tight text-slate-light">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* 5 Capabilities */}
        <div className="mt-16">
          <Fade>
            <h3 className="font-display text-xl font-bold text-navy">Five Intelligence Layers. One Platform.</h3>
            <p className="mt-2 text-sm text-slate-500">Built natively on ServiceNow — no new infrastructure required</p>
          </Fade>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(10,22,40,0.06)] transition-shadow hover:shadow-xl"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${cap.ring}`}>
                  <cap.Icon size={24} className={cap.color} weight="duotone" />
                </div>
                <span className="absolute right-5 top-5 font-display text-[11px] font-bold text-slate-200">{cap.num}</span>
                <h4 className="mb-2 font-display text-base font-bold text-navy">{cap.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3-Step Pipeline */}
        <div className="mt-14">
          <Fade>
            <h3 className="font-display text-xl font-bold text-navy">How It Works: Detect → Coordinate → Act</h3>
            <p className="mt-2 text-sm text-slate-500">
              Three autonomous stages that transform raw operational data into governed, coordinated response
            </p>
          </Fade>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute top-9 left-[15%] right-[15%] hidden h-px bg-gradient-to-r from-gold/30 via-teal/40 to-purple/30 lg:block" />
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col items-center rounded-2xl border p-6 text-center ${step.bg}`}
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-current/25 font-display text-sm font-extrabold ${step.accent}`}>
                    {step.num}
                  </div>
                  <h5 className={`mb-2 font-display text-base font-bold ${step.accent}`}>{step.label}</h5>
                  <p className="text-xs leading-relaxed text-slate-500">{step.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom callout */}
          <Fade className="mt-10">
            <div className="rounded-2xl border border-amber/20 bg-amber/5 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm font-semibold text-navy max-w-2xl">
                  Built for national banks, regional lenders, and any enterprise where operational risk sits alongside regulatory obligation — the AI Control Tower turns your ServiceNow instance into your most valuable risk asset.
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-light whitespace-nowrap"
                >
                  See It in Action <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          </Fade>
        </div>

      </div>
    </section>
  );
}
