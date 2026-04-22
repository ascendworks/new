"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  ShieldCheck,
  UserGear,
  Robot,
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

const industryStats = [
  { value: "$38B+", label: "Annual industry losses from unplanned downtime", source: "ARC Advisory Group" },
  { value: "30–50%", label: "Downtime reduction potential via predictive maintenance AI", source: "McKinsey & Company" },
  { value: "45%", label: "Faster EHS incident resolution with integrated platforms", source: "Deloitte" },
  { value: "34%", label: "Field productivity gain from AI-augmented FSM", source: "IDC Research" },
];

type AICapability = { label: string; desc: string };
type Outcome = { metric: string; label: string };
type ProblemStat = { value: string; label: string; sub: string };

type UseCase = {
  id: string;
  badge: string;
  color: string;
  border: string;
  bg: string;
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  context: string;
  problemStats: ProblemStat[];
  solution: string;
  modules: string[];
  aiCapabilities: AICapability[];
  outcomes: Outcome[];
  source: string;
  whyAwn: string;
};

const useCases: UseCase[] = [
  {
    id: "upstream-asset",
    badge: "Upstream Operations",
    color: "text-gold",
    border: "border-gold/20",
    bg: "bg-gold/6",
    Icon: Gauge,
    title: "Predictive Asset Health for a Global E&P Operator",
    subtitle: "How a supermajor unified 26 production sites and cut unplanned downtime by 31%.",
    context:
      "A global E&P company operating 14 offshore platforms and 12 onshore compression stations managed asset health across three disconnected CMMS systems. Unplanned equipment failures generated 8–12 hours of production downtime per event. Technician dispatch averaged 6.8 hours from alarm to on-site arrival due to manual work order creation and contractor coordination delays.",
    problemStats: [
      { value: "3", label: "Disconnected CMMS systems", sub: "no unified asset view" },
      { value: "6.8h", label: "Avg. dispatch-to-arrival time", sub: "manual process" },
      { value: "140+", label: "Annual unplanned failure events", sub: "production impact" },
    ],
    solution:
      "AscendWorks unified asset lifecycle management, real-time OT data integration via OSIsoft PI, and field service dispatch on ServiceNow — creating a single operational command center across all 26 sites.",
    modules: ["Asset Management (HAM)", "ITOM Visibility", "Field Service Management", "Predictive Intelligence", "IntegrationHub"],
    aiCapabilities: [
      {
        label: "Now Assist for ITSM",
        desc: "Field technicians receive AI-generated repair procedures matched to equipment model and fault code — reducing time-to-diagnosis by 44% on first contact.",
      },
      {
        label: "Predictive Intelligence ML",
        desc: "Trained on 36 months of OSIsoft PI sensor data, ML models forecast rotating equipment failures 72–96 hours in advance with 87% precision.",
      },
      {
        label: "Flow-Triggered Dispatch",
        desc: "Work orders and technician dispatch trigger automatically when sensor readings cross pre-configured risk thresholds — zero manual intervention.",
      },
    ],
    outcomes: [
      { metric: "31%", label: "Reduction in unplanned downtime" },
      { metric: "62%", label: "MTTR improvement (8.2h → 3.1h)" },
      { metric: "$4.2M", label: "Estimated avoided production losses, Year 1" },
      { metric: "26", label: "Sites on one unified asset platform" },
    ],
    source:
      "McKinsey & Company: Predictive maintenance in process industries reduces unplanned downtime by 30–50% and maintenance costs by 10–25%.",
    whyAwn:
      "AscendWorks brought pre-built OSIsoft PI integration accelerators, upstream domain expertise, and a 6-week deployment model — taking the operator from 3 siloed CMMS systems to one ServiceNow asset command center without disrupting live production.",
  },
  {
    id: "hse-compliance",
    badge: "Safety & EHS Compliance",
    color: "text-teal",
    border: "border-teal/20",
    bg: "bg-teal/6",
    Icon: ShieldCheck,
    title: "HSE Incident Automation & PSM Compliance for an Integrated Energy Company",
    subtitle: "From 3 FTE-days to 2 automated hours per OSHA 300 log. PSM audit readiness: 68% → 94%.",
    context:
      "An integrated energy company spanning upstream, midstream, and downstream across 8 states managed safety incidents through email chains, spreadsheets, and a 15-year-old legacy EHS system. OSHA 300 log compilation consumed 3 FTE-days per quarter. Incident investigation closure averaged 22 days against a 14-day industry target. PSM documentation was fragmented across 140+ SharePoint folders with no version control or change tracking.",
    problemStats: [
      { value: "22d", label: "Avg. incident investigation closure", sub: "vs. 14-day target" },
      { value: "3 FTEs", label: "OSHA 300 prep time per quarter", sub: "entirely manual" },
      { value: "140+", label: "PSM document folders in SharePoint", sub: "no version control" },
    ],
    solution:
      "AscendWorks built a unified EHS and compliance platform on ServiceNow GRC — connecting incident reporting, corrective action automation, PSM document management, and regulatory compliance into one auditable system of record.",
    modules: ["GRC — Governance, Risk & Compliance", "Risk Management", "Employee Center Pro", "Document Management", "Now Assist for GRC"],
    aiCapabilities: [
      {
        label: "Now Assist — Corrective Actions",
        desc: "Automatically suggests corrective actions based on incident type, location, and historical resolutions — cutting investigation initiation time from hours to under 15 minutes.",
      },
      {
        label: "ML Risk Scoring",
        desc: "Open corrective actions are auto-prioritized using a severity × recurrence × age model, surfacing the highest-risk items to responsible leaders in real time.",
      },
      {
        label: "Leading Indicator Analytics",
        desc: "Predictive Intelligence correlates near-miss patterns and inspection deficiencies with historical safety events, flagging elevated-risk sites 30–60 days before lagging metrics detect them.",
      },
    ],
    outcomes: [
      { metric: "4×", label: "Faster incident notification (4.2h → 45 min)" },
      { metric: "50%", label: "Investigation closure time (22d → 11d)" },
      { metric: "2 hrs", label: "OSHA 300 log automated (was 3 FTE-days)" },
      { metric: "94%", label: "PSM audit readiness (was 68%)" },
    ],
    source:
      "Deloitte: Organizations with integrated EHS platforms resolve safety incidents 45–55% faster and achieve a 30%+ improvement in regulatory audit pass rates.",
    whyAwn:
      "AscendWorks delivered a pre-configured EHS accelerator purpose-built for OSHA, PSM, and API RP 754 compliance — migrating 15 years of legacy incident data without loss and deploying AI-assisted corrective action workflows in week 3 of a 6-week program.",
  },
  {
    id: "field-workforce",
    badge: "Field Operations",
    color: "text-purple",
    border: "border-purple/20",
    bg: "bg-purple/6",
    Icon: UserGear,
    title: "Field Workforce Intelligence for a Midstream Pipeline Operator",
    subtitle: "1,800 technicians. First-time fix rate from 52% to 79%. Dispatched by AI, not phone calls.",
    context:
      "A midstream pipeline and gathering company with 1,800 field technicians across 5 operating regions dispatched work through phone calls, text messages, and paper-based work orders. First-time fix rate stood at 52% — nearly half of all field visits required a return trip. Parts availability was invisible at the field level. Training and certification compliance was managed through quarterly spreadsheet audits.",
    problemStats: [
      { value: "52%", label: "First-time fix rate", sub: "before optimization" },
      { value: "1,800", label: "Field technicians managed", sub: "across 5 regions" },
      { value: "Phone/SMS", label: "Primary dispatch method", sub: "no digital visibility" },
    ],
    solution:
      "AscendWorks deployed ServiceNow Field Service Management with the mobile app — integrating AI-driven dispatch, real-time parts forecasting, and DOT certification tracking into one connected field operations platform.",
    modules: ["Field Service Management", "FSM Mobile App (Now Assist)", "HR Service Delivery", "Supply Chain Visibility", "Predictive Intelligence"],
    aiCapabilities: [
      {
        label: "Now Assist Mobile",
        desc: "Field technicians receive AI-generated repair guidance, safety checklists, and required parts lists before arriving on-site — cutting return trips and unplanned parts runs significantly.",
      },
      {
        label: "Intelligent Dispatch (ML Scheduling)",
        desc: "ML-based scheduling matches technician skills, active certifications, and geographic proximity to each work order — optimizing field utilization across all 5 regions in real time.",
      },
      {
        label: "Parts Demand Forecasting",
        desc: "Predictive Intelligence analyzes 24 months of work order history to pre-position high-demand parts at regional depots, reducing parts-related field delays by 38%.",
      },
    ],
    outcomes: [
      { metric: "79%", label: "First-time fix rate (up from 52%)" },
      { metric: "34%", label: "More work orders completed per technician/day" },
      { metric: "28%", label: "Reduction in mean travel time per work order" },
      { metric: "Real-time", label: "Certification compliance visibility (was quarterly)" },
    ],
    source:
      "IDC Research: Organizations using AI-augmented field service management achieve 20–30% improvement in first-time fix rates and 25–35% increase in technician productivity.",
    whyAwn:
      "AscendWorks configured ServiceNow FSM with pre-built midstream workflows — pipeline integrity inspection routing, valve maintenance scheduling, and DOT compliance checklists — deployed and adopted across 1,800 field technicians in 8 weeks.",
  },
];

export default function OilGasInsightSection() {
  return (
    <section id="oilgas" className="section-dark scroll-mt-20 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <Fade>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Energy & Utilities
            </span>
            <span className="text-xs text-slate">Executive Use Cases</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl max-w-3xl">
            How ServiceNow + AI Is Rewriting Oil &amp; Gas Operations
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-light">
            Three high-impact programs across upstream asset management, EHS compliance, and field workforce optimization — implemented by AscendWorks with production-scale outcomes and C-suite visibility.
          </p>
        </Fade>

        <Fade className="mt-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {industryStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-gold/15 bg-gold/5 p-4">
                <p className="font-display text-2xl font-extrabold text-gold">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-slate-light">{s.label}</p>
                <p className="mt-1 text-[10px] text-slate">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </Fade>

        <div className="mt-16 space-y-14">
          {useCases.map((uc, ucIdx) => (
            <motion.div
              key={uc.id}
              id={uc.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: ucIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl border ${uc.border} ${uc.bg} p-7 lg:p-10`}
            >
              <div className="flex items-start gap-4 mb-7">
                <div className={`shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border ${uc.border} bg-white/5`}>
                  <uc.Icon size={24} className={uc.color} weight="duotone" />
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full border ${uc.border} bg-white/5 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] ${uc.color}`}>
                    {uc.badge}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-white leading-tight md:text-2xl">
                    {uc.title}
                  </h3>
                  <p className={`mt-1 text-sm font-medium ${uc.color}`}>{uc.subtitle}</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_200px] mb-8">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate mb-2">The Challenge</p>
                  <p className="text-sm leading-7 text-slate-light">{uc.context}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {uc.problemStats.map((ps) => (
                    <div key={ps.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                      <p className={`font-display text-xl font-extrabold ${uc.color}`}>{ps.value}</p>
                      <p className="text-[10px] font-medium text-white leading-tight mt-0.5">{ps.label}</p>
                      <p className="text-[9px] text-slate mt-0.5">{ps.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-widest text-slate mb-2">AscendWorks + ServiceNow Solution</p>
                <p className="text-sm leading-7 text-slate-light mb-4">{uc.solution}</p>
                <div className="flex flex-wrap gap-2">
                  {uc.modules.map((m) => (
                    <span key={m} className={`rounded-full border ${uc.border} bg-white/5 px-3 py-1 text-[11px] font-medium ${uc.color}`}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-7">
                <p className="text-[11px] uppercase tracking-widest text-slate mb-4">AI &amp; Automation Layer</p>
                <div className="grid gap-3 md:grid-cols-3">
                  {uc.aiCapabilities.map((ai) => (
                    <div key={ai.label} className="rounded-xl border border-white/8 bg-white/4 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Robot size={14} className={uc.color} weight="fill" />
                        <p className={`text-xs font-bold ${uc.color}`}>{ai.label}</p>
                      </div>
                      <p className="text-xs leading-relaxed text-slate">{ai.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-widest text-slate mb-4">Business Outcomes</p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {uc.outcomes.map((o) => (
                    <div key={o.label} className="rounded-xl border border-gold/15 bg-gold/5 p-4">
                      <p className="font-display text-2xl font-extrabold text-gold">{o.metric}</p>
                      <p className="mt-1 text-[11px] leading-tight text-white">{o.label}</p>
                    </div>
                  ))}
                </div>
                {uc.source && (
                  <p className="mt-3 text-[10px] italic text-slate">{uc.source}</p>
                )}
              </div>

              <div className={`rounded-xl border ${uc.border} bg-white/5 p-5`}>
                <p className={`text-[11px] font-bold uppercase tracking-widest ${uc.color} mb-2`}>
                  Why AscendWorks
                </p>
                <p className="text-sm leading-6 text-slate-light">{uc.whyAwn}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Fade className="mt-14 text-center">
          <p className="text-slate mb-5 text-sm">See these programs with full before/after operational breakdowns.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/case-studies#upstream-asset"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
            >
              View Oil &amp; Gas Case Studies <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Talk to an Energy Expert
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}
