"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  MapPin,
  Wrench,
  UserCircle,
  ChartLineUp,
  HardDrives,
  GitFork,
  Cpu,
  Package,
  ArrowsClockwise,
  Lightning,
} from "@phosphor-icons/react";

// ─── shared fade wrapper ───────────────────────────────────────────────────
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

// ─── data ──────────────────────────────────────────────────────────────────

const wsdModules = [
  {
    Icon: CalendarBlank,
    color: "text-teal",
    ring: "border-teal/25 bg-teal/8",
    num: "01",
    title: "Reservation Management",
    desc: "Self-service desk and room booking with calendar sync, approval workflows, check-in/out controls, and configurable standard or flexible space services.",
  },
  {
    Icon: MapPin,
    color: "text-gold",
    ring: "border-gold/25 bg-gold/8",
    num: "02",
    title: "Space Mapping",
    desc: "3D virtual floor plans via ServiceNow's MappedIn integration — reserve desks, rooms, and parking with real-time updates and in-office turn-by-turn navigation.",
  },
  {
    Icon: Wrench,
    color: "text-purple",
    ring: "border-purple/25 bg-purple/8",
    num: "03",
    title: "Case Management",
    desc: "Every workplace issue and request — from plumbing to pest control — routed to the right team via manual assignment, Flow, or fully automated Service Activity.",
  },
  {
    Icon: UserCircle,
    color: "text-amber",
    ring: "border-amber/25 bg-amber/8",
    num: "04",
    title: "Visitor Management",
    desc: "End-to-end guest lifecycle: pre-registration, parking, Wi-Fi access, badge printing, and a real-time reception dashboard tracking expected and on-site visitors.",
  },
];

const wsdStats = [
  { value: "1", label: "Unified Portal" },
  { value: "4", label: "Deployable Modules" },
  { value: "3", label: "Fulfillment Types" },
  { value: "360°", label: "Visitor Tracking" },
];

const infraForces = [
  {
    Icon: Cpu,
    color: "text-red",
    ring: "border-red/20 bg-red/6",
    title: "AI & Hyperscaler Pre-Buying",
    desc: "Multi-billion-dollar, multi-year GPU and high-bandwidth memory orders that rarely reach the open market — leaving standard enterprise buyers locked out.",
  },
  {
    Icon: HardDrives,
    color: "text-gold",
    ring: "border-gold/20 bg-gold/6",
    title: "Silicon & Memory Reallocation",
    desc: "DDR5, HBM, NAND, and advanced CPUs are being prioritized for AI workloads, directly constraining standard server, storage, and networking availability.",
  },
  {
    Icon: Package,
    color: "text-teal",
    ring: "border-teal/20 bg-teal/6",
    title: "OEM Portfolio Rationalization",
    desc: "Vendors are narrowing SKUs and extending production cycles — better economics for them, but reduced configuration flexibility and longer lead times for you.",
  },
  {
    Icon: ChartLineUp,
    color: "text-purple",
    ring: "border-purple/20 bg-purple/6",
    title: "Pricing Behavior Change",
    desc: "Sustained inflation and compressed pricing cycles have replaced the predictable annual adjustments of the past decade — especially in memory and storage.",
  },
];

const infraStrategies = [
  {
    num: "01",
    title: "Design for Availability, Not Perfection",
    desc: "Broaden component standards to allow alternate platforms, port speeds, and memory profiles. Build modular repeatable units — pods or blocks — that can accept substitution when specific parts are constrained.",
  },
  {
    num: "02",
    title: "Shift to Intentional Pre-Purchase",
    desc: "In today's market, waiting rarely gives you a better price. Lock in GPUs, SSDs, and memory early. Treat inventory as a strategic asset tied to named programs — not speculative spend.",
  },
  {
    num: "03",
    title: "Use Cloud and On-Prem as Complementary",
    desc: "Cloud absorbs demand spikes and accelerates new workloads. On-prem handles stable, high-utilization capacity. Hybrid, done intentionally, is the most resilient posture.",
  },
  {
    num: "04",
    title: "Embed Financial & Supply Governance",
    desc: "Architecture, finance, and procurement can no longer operate in silos. Expand FinOps beyond cloud. Scenario-plan for DRAM swings and lead-time slippage before they happen.",
  },
];

const deployModels = [
  {
    title: "On-Premises",
    accent: "text-gold",
    border: "border-gold/25",
    highlight: false,
    pros: ["Maximum performance & data control", "Predictable for stable workloads", "Easier platform standardization"],
    cons: ["You absorb full supply-chain risk", "Projects stall if components delayed", "Large capital commitments to time"],
  },
  {
    title: "Public Cloud",
    accent: "text-teal",
    border: "border-teal/25",
    highlight: false,
    pros: ["No physical supply dependency", "Instant scale up or down", "Strong for experimentation & AI"],
    cons: ["OpEx escalates quickly at scale", "Egress and interconnect costs add up", "Indirectly exposed via cloud pricing"],
  },
  {
    title: "Hybrid",
    accent: "text-purple",
    border: "border-purple/30",
    highlight: true,
    badge: "Most Resilient",
    pros: ["Workload placement flexibility", "Cloud as supply-chain release valve", "Pull back on-prem when economics shift"],
    cons: ["Requires mature operating model", "More governance moving parts", "More teams and vendors to align"],
  },
];

const pipeline = [
  {
    step: "01",
    label: "Server Action",
    sub: "VMware blueprint defines CPU, memory, disk, and network via YAML",
    accent: "text-gold",
    bg: "bg-gold/6 border-gold/25",
  },
  {
    step: "02",
    label: "VMware Plugin",
    sub: "Aria Automation exports catalog items directly to ServiceNow",
    accent: "text-teal",
    bg: "bg-teal/6 border-teal/25",
  },
  {
    step: "03",
    label: "Service Catalog",
    sub: "Role-based self-service ordering portal for enterprise teams",
    accent: "text-purple",
    bg: "bg-purple/6 border-purple/25",
  },
  {
    step: "04",
    label: "ServiceNow Flow",
    sub: "Automated CAB change requests — zero manual engineer input",
    accent: "text-amber",
    bg: "bg-amber/6 border-amber/25",
  },
  {
    step: "05",
    label: "CMDB & Change",
    sub: "Discovery runs register servers and close change requests automatically",
    accent: "text-red",
    bg: "bg-red/6 border-red/20",
  },
];

const autoComponents = [
  {
    Icon: GitFork,
    color: "text-teal",
    ring: "border-teal/25 bg-teal/8",
    title: "VMware Aria Automation Plugin",
    desc: "Developed and maintained by VMware. Connects Aria blueprints to ServiceNow — supporting YAML-defined infrastructure with custom logic in JavaScript, PowerShell, or Python.",
  },
  {
    Icon: ArrowsClockwise,
    color: "text-gold",
    ring: "border-gold/25 bg-gold/8",
    title: "ServiceNow Service Catalog",
    desc: "All Aria items sync to ServiceNow automatically. Admins organize by category; users order servers with the options pre-configured in Aria — no additional customization required.",
  },
  {
    Icon: Lightning,
    color: "text-purple",
    ring: "border-purple/25 bg-purple/8",
    title: "ServiceNow Flow",
    desc: "Automates entire process sections: CAB change requests, CMDB discovery runs, AD group assignments, and software installation — without any manual engineer input.",
  },
];

// ─── page ──────────────────────────────────────────────────────────────────

export default function InsightsPageContent() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/3 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gold/8 blur-[160px]" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-teal/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple/8 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Insights & Perspectives
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert thinking for enterprise IT leaders.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-light">
              Deep dives on ServiceNow workplace delivery, infrastructure supply chain strategy, and IaaS workflow automation — grounded in the programs we run for enterprise clients every day.
            </p>
          </motion.div>

          {/* Article nav cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { cat: "Workplace", tag: "Guide", title: "ServiceNow Workplace Service Delivery Suite", href: "#workplace", accent: "text-teal", border: "border-teal/20 hover:border-teal/50", dot: "bg-teal" },
              { cat: "Infrastructure", tag: "Strategy", title: "Navigating Supply Chain Volatility Together", href: "#infrastructure", accent: "text-gold", border: "border-gold/20 hover:border-gold/50", dot: "bg-gold" },
              { cat: "Automation", tag: "Technical", title: "Leveraging VMware + ServiceNow to Automate IaaS", href: "#automation", accent: "text-purple", border: "border-purple/20 hover:border-purple/50", dot: "bg-purple" },
            ].map((card, i) => (
              <motion.a
                key={card.cat}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col gap-3 rounded-2xl border bg-white/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/6 ${card.border}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${card.dot}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${card.accent}`}>{card.cat}</span>
                  <span className="ml-auto rounded-full bg-white/8 px-2 py-0.5 text-[10px] text-slate">{card.tag}</span>
                </div>
                <p className="text-sm font-semibold leading-snug text-white">{card.title}</p>
                <span className={`mt-auto flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2 ${card.accent}`}>
                  Read Article <ArrowRight size={11} weight="bold" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE 1: WORKPLACE SERVICE DELIVERY ─────────────────────── */}
      <section id="workplace" className="section-light scroll-mt-20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header + image */}
          <Fade>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
              <div className="space-y-6 lg:w-[55%]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                    Workplace
                  </span>
                  <span className="text-xs text-slate-500">Guide</span>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl">
                  Get Acquainted with the ServiceNow Workplace Service Delivery Suite
                </h2>
                <p className="text-base leading-8 text-slate-600">
                  As organizations navigate the ever-changing ways of working, ServiceNow's WSD Suite delivers one portal for space reservations, 3D floor mapping, facility case management, and complete visitor lifecycle management. Each module deploys independently or as a fully integrated suite — so you adopt at your pace.
                </p>
                <Link
                  href="/services/servicenow"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
                >
                  Explore ServiceNow Services <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              <div className="relative lg:w-[45%]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-2xl">
                  <Image
                    src="/assets/case-studies/healthcare-ls.jpg"
                    alt="Enterprise team using ServiceNow workplace services"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-4 gap-2">
                      {wsdStats.map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/10 bg-navy/80 p-2.5 text-center backdrop-blur-sm">
                          <div className="font-display text-xl font-extrabold text-gold">{s.value}</div>
                          <div className="mt-0.5 text-[9px] leading-tight text-slate-light">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* 4-module infographic */}
          <div className="mt-16">
            <Fade>
              <h3 className="text-center font-display text-xl font-bold text-navy">Four Modules. One Unified Workspace Experience.</h3>
              <p className="mt-2 text-center text-sm text-slate-500">Each application can be deployed independently or as a complete, integrated suite</p>
            </Fade>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {wsdModules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(10,22,40,0.06)] transition-shadow hover:shadow-xl"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${mod.ring}`}>
                    <mod.Icon size={24} className={mod.color} weight="duotone" />
                  </div>
                  <span className="absolute right-5 top-5 font-display text-[11px] font-bold text-slate-200">{mod.num}</span>
                  <h4 className="mb-2 font-display text-base font-bold text-navy">{mod.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{mod.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Fulfillment types callout */}
            <Fade className="mt-10">
              <div className="rounded-2xl border border-teal/20 bg-teal/5 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal">Case Management — 3 Fulfillment Types</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Manual", desc: "Administrators assign tasks after submission — full control over every case." },
                    { label: "Flow", desc: "Cases move through a pre-designed process via ServiceNow Flow Designer." },
                    { label: "Service Activity", desc: "Pre-defined approvals, tasks, and child cases triggered automatically on submission." },
                  ].map((t) => (
                    <div key={t.label} className="rounded-xl border border-teal/15 bg-white/60 p-4">
                      <p className="mb-1 font-display text-sm font-bold text-navy">{t.label}</p>
                      <p className="text-xs leading-relaxed text-slate-500">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── ARTICLE 2: INFRASTRUCTURE ─────────────────────────────────── */}
      <section id="infrastructure" className="section-dark scroll-mt-20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header + image */}
          <Fade>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
              <div className="relative order-2 lg:order-1 lg:w-[45%]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/assets/case-studies/bfsi-control-tower.jpg"
                    alt="Infrastructure command center for supply chain visibility"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gold/15 bg-navy/60 p-4 backdrop-blur-md">
                    <p className="mb-1 text-[10px] uppercase tracking-wider text-slate">Market Signal · 2026</p>
                    <p className="font-display text-base font-bold leading-snug text-white">
                      "Lead times now swing by quarters, not weeks."
                    </p>
                    <p className="mt-1 text-xs text-gold">AscendWorks Infrastructure Advisory</p>
                  </div>
                </div>

                {/* Volatile component badges */}
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {["GPUs", "DRAM", "SSDs", "Optics"].map((c) => (
                    <div key={c} className="rounded-xl border border-red/20 bg-red/6 py-2 text-center">
                      <p className="text-[11px] font-semibold text-red">{c}</p>
                      <p className="text-[9px] text-slate">Constrained</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 space-y-6 lg:order-2 lg:w-[55%]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Infrastructure
                  </span>
                  <span className="text-xs text-slate">Strategy</span>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                  Navigating Supply Chain Volatility: Protecting Your Infrastructure Plans
                </h2>
                <p className="text-base leading-8 text-slate-light">
                  Over the past 18–24 months, the infrastructure planning playbook has broken down. AI-driven demand has created structural shortages across GPUs, DRAM, SSDs, and optics. The companies that come through this period strongest treat supply chain volatility as a design constraint — not a surprise.
                </p>
                <Link
                  href="/services/architecture"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-light"
                >
                  Infrastructure Advisory <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          </Fade>

          {/* 4 Forces */}
          <div className="mt-16">
            <Fade>
              <h3 className="font-display text-xl font-bold text-white">Four Forces Driving Today's Shortages</h3>
              <p className="mt-2 text-sm text-slate">Understanding what's converging — and why traditional procurement no longer works</p>
            </Fade>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {infraForces.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-2xl border p-5 ${f.ring}`}
                >
                  <f.Icon size={28} className={`mb-3 ${f.color}`} weight="duotone" />
                  <h4 className="mb-2 font-display text-sm font-bold text-white">{f.title}</h4>
                  <p className="text-xs leading-relaxed text-slate">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4 Strategies */}
          <div className="mt-14">
            <Fade>
              <h3 className="font-display text-xl font-bold text-white">Four Anchors for 2026–2028 Infrastructure Plans</h3>
              <p className="mt-2 text-sm text-slate">What the highest-performing IT leaders are doing differently right now</p>
            </Fade>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {infraStrategies.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 rounded-2xl border border-white/8 bg-white/4 p-6"
                >
                  <span className="shrink-0 font-display text-3xl font-extrabold leading-none text-gold/30">{s.num}</span>
                  <div>
                    <h4 className="mb-2 font-display text-sm font-bold text-white">{s.title}</h4>
                    <p className="text-xs leading-relaxed text-slate">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deployment Model Comparison */}
          <div className="mt-14">
            <Fade>
              <h3 className="font-display text-xl font-bold text-white">How Deployment Models Behave Under Stress</h3>
              <p className="mt-2 text-sm text-slate">Hybrid, done intentionally, is emerging as the most resilient model in today's environment</p>
            </Fade>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {deployModels.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-2xl border p-6 ${m.border} ${m.highlight ? "bg-white/6" : "bg-white/3"}`}
                >
                  {m.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-purple px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most Resilient
                    </div>
                  )}
                  <h4 className={`mb-5 font-display text-base font-bold ${m.accent}`}>{m.title}</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-wider text-teal">Advantages</p>
                      {m.pros.map((p) => (
                        <p key={p} className="mb-1 flex gap-2 text-xs leading-relaxed text-slate-light">
                          <span className="shrink-0 text-teal">+</span>{p}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-wider text-red/60">Constraints</p>
                      {m.cons.map((c) => (
                        <p key={c} className="mb-1 flex gap-2 text-xs leading-relaxed text-slate">
                          <span className="shrink-0 text-red/50">−</span>{c}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE 3: WORKFLOW & AUTOMATION ──────────────────────────── */}
      <section id="automation" className="section-light scroll-mt-20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header + image */}
          <Fade>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
              <div className="space-y-6 lg:w-[55%]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple">
                    Workflow & Automation
                  </span>
                  <span className="text-xs text-slate-500">Technical</span>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl">
                  A Powerful Combination: VMware + ServiceNow to Automate IaaS
                </h2>
                <p className="text-base leading-8 text-slate-600">
                  Organizations with high infrastructure maturity often struggle to shift from established manual practices to automation at scale. Using ServiceNow and VMware Aria Automation together, the move from manual server deployments to fully automated IaaS provisioning can be accomplished without disrupting established change management processes.
                </p>
                <Link
                  href="/services/agentic-ai"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
                >
                  Automation & AI Services <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              <div className="relative lg:w-[45%]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-2xl">
                  <Image
                    src="/assets/case-studies/logistics.jpg"
                    alt="Infrastructure workflow automation and orchestration"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-purple/20 bg-navy/70 p-4 backdrop-blur-md">
                    <p className="font-display text-sm font-bold text-white">
                      Zero manual change requests — from server order to CMDB, fully automated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* Pipeline infographic */}
          <div className="mt-16">
            <Fade>
              <h3 className="font-display text-xl font-bold text-navy">The IaaS Automation Pipeline</h3>
              <p className="mt-2 text-sm text-slate-500">
                From server request to fully provisioned, change-managed, CMDB-registered infrastructure — without a single manual step
              </p>
            </Fade>

            <div className="relative mt-10">
              {/* Connector line — desktop only */}
              <div className="pointer-events-none absolute top-9 left-[9%] right-[9%] hidden h-px bg-gradient-to-r from-gold/30 via-purple/40 to-red/25 lg:block" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {pipeline.map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex flex-col items-center rounded-2xl border p-5 text-center ${p.bg}`}
                  >
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-current/25 font-display text-sm font-extrabold ${p.accent}`}>
                      {p.step}
                    </div>
                    <h5 className={`mb-2 font-display text-sm font-bold ${p.accent}`}>{p.label}</h5>
                    <p className="text-xs leading-relaxed text-slate-500">{p.sub}</p>
                    {i < pipeline.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-slate-300 lg:hidden">↓</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3 components */}
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {autoComponents.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(10,22,40,0.06)]"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${c.ring}`}>
                    <c.Icon size={24} className={c.color} weight="duotone" />
                  </div>
                  <h4 className="mb-2 font-display text-sm font-bold text-navy">{c.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom callout */}
            <Fade className="mt-10">
              <div className="rounded-2xl border border-purple/20 bg-purple/5 p-6 text-center">
                <p className="text-sm font-semibold text-navy">
                  Using ServiceNow and VMware Aria Automation together, organizations deploy and manage infrastructure without interrupting established processes — leaving engineers free to focus on higher-priority work.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="section-dark py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Fade className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Ready to Transform
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Put these insights to work for your enterprise.
            </h2>
            <p className="mt-4 leading-7 text-slate-light">
              Whether you're modernizing workplace operations, shoring up infrastructure resilience, or automating manual IT processes — AscendWorks brings the ServiceNow expertise to execute with precision.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
              >
                Talk to an Expert <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                See Our Services
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
