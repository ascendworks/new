import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight, CalendarBlank, Clock, Tag } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "The Knowledge26 2026 Intelligence Brief | AscendWorksNow",
  description:
    "Enterprise AI signals from Knowledge26 2026 that IT leaders need to act on — from AI agent governance to the activation gap, context layers, and the new CMDB imperative.",
};

const signals = [
  {
    number: "01",
    headline: "AI Agents Are No Longer Experimental — The Conversation Shifted to Scale",
    body: "The tone at K26 was unmistakable: ServiceNow's AI Agents moved from pilot to production mandate. Attendees weren't asking whether to deploy agents — they were negotiating how many and for which workflows first. With 4,000+ organizations now live on Now Assist, the adoption curve has bent sharply. Organizations still in evaluation mode are falling behind on measurable operational metrics.",
    stat: { value: "4,000+", label: "Organizations live on Now Assist" },
    color: "#C9A84C",
  },
  {
    number: "02",
    headline: "The Context Layer Is the Next Competitive Differentiator",
    body: "K26's Day 2 keynote argued convincingly that enterprise AI is evolving through three phases: automation → prediction → context. The organizations pulling ahead aren't those with the most powerful models — they're the ones whose AI systems understand organizational nuance, workflow history, and user intent. Building the context layer now is a two-year head start on competitors who will try to catch up later.",
    stat: { value: "3×", label: "Faster time-to-resolution with context-aware AI" },
    color: "#0D9B8A",
  },
  {
    number: "03",
    headline: "73% of Now Assist Customers Haven't Fully Activated — The Gap Is a Crisis",
    body: "The most alarming data point at K26 wasn't in a keynote. It surfaced in breakout sessions: 73% of organizations with Now Assist licensing have deployed fewer than half of available AI capabilities. The gap isn't a product problem — it's a skills and configuration problem. ServiceNow partners with proven AI activation playbooks are the scarcest resource in the enterprise IT market right now.",
    stat: { value: "73%", label: "Now Assist orgs below full activation" },
    color: "#DC2626",
  },
  {
    number: "04",
    headline: "Financial Services Is Writing the AI Governance Playbook — Everyone Else Will Follow",
    body: "A standing-room K26 session on BFSI revealed that financial services firms, under regulatory pressure, have developed the most rigorous AI governance frameworks in any industry. These frameworks — covering model risk, audit trails, decision explainability, and drift monitoring — will become the enterprise standard within 24 months. Healthcare and energy IT leaders should study them now rather than rebuild from scratch.",
    stat: { value: "61%", label: "Reduction in AI risk incidents for BFSI early adopters" },
    color: "#C9A84C",
  },
  {
    number: "05",
    headline: "Workflow Data Fabric Is the New CMDB — The Connective Tissue for Autonomous IT",
    body: "ServiceNow's Workflow Data Fabric emerged as one of K26's most technically significant announcements. It creates a unified, real-time data layer connecting ITSM, ITOM, HR, and operational systems — giving AI agents the live operational context required for fully autonomous decision-making. Organizations whose CMDB is unreliable won't be able to trust their AI agents. The Fabric makes data quality a hard prerequisite, not a nice-to-have.",
    stat: { value: "200+", label: "Data sources connectable via Workflow Data Fabric" },
    color: "#6B4FBB",
  },
  {
    number: "06",
    headline: "The AI Talent Shortage Is Structural — Certified Architects Have Tripled in Value",
    body: "K26's talent data was stark. Demand for ServiceNow-certified AI workflow architects has tripled since Q3 2025, while supply has barely moved. Average salaries for CSA holders crossed $125K for the first time. This isn't a temporary market imbalance — it reflects a fundamental restructuring of the IT org around AI operations roles that didn't exist 18 months ago. IT leaders who don't have a talent strategy now will face 9-month hiring cycles in 2027.",
    stat: { value: "3×", label: "Demand growth for AI workflow architects since Q3 2025" },
    color: "#0D9B8A",
  },
  {
    number: "07",
    headline: "CMDB Quality Is Now an AI Prerequisite, Not a Best Practice",
    body: "Zurich's AI-powered CMDB reconciliation — which continuously validates CI accuracy against actual infrastructure state — was one of the release's most-discussed capabilities. Early pilots showed 91% reduction in CMDB drift within 60 days. The deeper signal: ServiceNow is making the case that accurate operational data is the foundation all AI intelligence runs on. Organizations whose CMDBs are populated but unreliable will find AI agents making decisions on flawed premises.",
    stat: { value: "91%", label: "CMDB drift reduction in Zurich early pilots" },
    color: "#C9A84C",
  },
  {
    number: "08",
    headline: "HRSD and Field Service Are the Fastest Paths to Now Assist ROI",
    body: "Across multiple K26 sessions, two Now Assist deployment areas consistently showed the fastest time-to-value: HRSD and Field Service Management. HRSD implementations eliminating email-based HR workflows are seeing 68% ticket deflection and +31-point CSAT improvements in under six months. FSM deployments using AI-assisted dispatch and mobile guidance are reaching 79%+ first-time fix rates. Both are greenfield for most mid-market organizations.",
    stat: { value: "68%", label: "HR ticket deflection in Now Assist HRSD deployments" },
    color: "#6B4FBB",
  },
  {
    number: "09",
    headline: "NVIDIA Partnership Signals On-Prem AI Is a Serious Enterprise Path",
    body: "ServiceNow and NVIDIA deepened their partnership at K26 with a specific announcement most attendees underestimated: NVIDIA NIM microservices can now run directly within ServiceNow tenants, enabling on-premises AI inference with 70% lower latency than cloud alternatives. For regulated industries — healthcare, financial services, defense contractors — this eliminates the primary objection to GenAI at scale. On-prem AI is no longer a compromise; it's a performance advantage.",
    stat: { value: "70%", label: "Lower latency vs. cloud AI with NVIDIA NIM on-prem" },
    color: "#0D9B8A",
  },
  {
    number: "10",
    headline: "ServiceNow Is Repositioning — From Workflow Platform to AI Operating System",
    body: "This wasn't announced in a press release. It was visible across every product session, every demo, every partner conversation at K26: ServiceNow is no longer positioning itself as an enterprise workflow platform that added AI. It is positioning as the AI operating system for enterprise work — the layer where AI agents are orchestrated, governed, and measured across every business function. Partners who understand this shift will win. Those who don't will be left selling IT tickets in a world that's moved on.",
    stat: { value: "#1", label: "Enterprise workflow platform 4 years running — Fortune 500 CIO Survey" },
    color: "#C9A84C",
  },
  {
    number: "11",
    headline: "The 50% Rule Is Now a Planning Target, Not a Prediction",
    body: "Bill McDermott's keynote claim — that AI agents will handle 50% of IT operations tasks by 2028 — was the most-debated number at K26. Skeptics called it aspirational. The evidence on the conference floor argued otherwise: organizations already using AI agents for incident triage, change risk scoring, and zero-touch remediation are seeing 40–65% task automation within 90 days of deployment. The 50% rule isn't a 2028 problem. For organizations that start now, it's an 18-month reality.",
    stat: { value: "50%", label: "IT ops tasks projected AI-handled by 2028 — McDermott K26 keynote" },
    color: "#DC2626",
  },
];

export default function K26IntelligenceBriefPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold/8 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-teal/8 blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-slate text-sm font-medium hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={14} weight="bold" /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-700 uppercase tracking-widest text-gold">
                <Tag size={10} weight="fill" /> Knowledge26
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/8 px-3 py-1 text-[10px] font-700 uppercase tracking-widest text-teal">
                Intelligence Brief
              </span>
            </div>

            <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
              The Knowledge26 2026{" "}
              <span className="text-gold-gradient">Intelligence Brief</span>
            </h1>
            <p className="text-xl text-slate-light leading-8 mb-8 max-w-3xl">
              Enterprise AI signals from the conference floor that IT leadership needs to act on now — not as features to evaluate, but as strategic inflection points that are already reshaping competitive positioning.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate">
              <span className="flex items-center gap-1.5">
                <CalendarBlank size={14} /> May 8, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> 12 min read
              </span>
              <span>AscendWorksNow Editorial · Knowledge26 Las Vegas</span>
            </div>

            {/* Hero image */}
            <div className="mt-10 relative aspect-[16/6] overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85&auto=format&fit=crop"
                alt="Knowledge26 2026 conference floor, Las Vegas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-white/60 text-xs">
                Knowledge26 2026 · Mandalay Bay, Las Vegas · 25,000+ Attendees
              </div>
            </div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="section-light py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            {/* Lead paragraph */}
            <div className="mb-14 pb-14 border-b border-slate-200">
              <p className="text-xl text-navy leading-8 font-medium">
                Knowledge26 2026 was the largest ServiceNow conference in history. 25,000 attendees, 800+ sessions, a full hall dedicated to AI agents. The official announcements — Zurich release, AI Agents GA, NVIDIA partnership — received extensive coverage. What follows is not a recap of those announcements. It is an intelligence brief: the signals that were visible across the conference floor, in breakout sessions, and in partner conversations, that carry strategic weight for enterprise IT leadership over the next 18 to 36 months.
              </p>
            </div>

            {/* 11 signals */}
            <div className="space-y-14">
              {signals.map((signal) => (
                <div key={signal.number} className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-10">
                  {/* Number */}
                  <div className="flex items-start gap-4 lg:gap-0 lg:flex-col">
                    <span
                      className="font-display font-800 text-5xl leading-none"
                      style={{ color: signal.color, opacity: 0.18 }}
                    >
                      {signal.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="font-display font-800 text-navy text-xl md:text-2xl leading-tight mb-4">
                      {signal.headline}
                    </h2>
                    <p className="text-slate-600 leading-8 mb-5">{signal.body}</p>

                    {/* Stat callout */}
                    <div
                      className="inline-flex items-center gap-4 rounded-2xl border px-5 py-4"
                      style={{ borderColor: `${signal.color}25`, background: `${signal.color}08` }}
                    >
                      <div>
                        <div
                          className="font-display font-800 text-2xl leading-none"
                          style={{ color: signal.color }}
                        >
                          {signal.stat.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 max-w-[260px] leading-tight">
                          {signal.stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing */}
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="font-display font-800 text-navy text-2xl mb-4">
                What This Means for Your Organization
              </h3>
              <p className="text-slate-600 leading-8 mb-4">
                Knowledge26 2026 was not a product conference. It was a market signal. The organizations that left Las Vegas with a concrete activation plan — not another evaluation checklist — are the ones that will look back in 24 months and understand why they pulled ahead.
              </p>
              <p className="text-slate-600 leading-8">
                The gap between licensed and activated, between announced and deployed, between pilot and production — that gap is where competitive advantage is being created right now. AscendWorks exists to close it, in weeks, not quarters.
              </p>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-dark py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full border border-gold/25 text-gold text-xs font-700 uppercase tracking-widest mb-6">
              Act on What You Learned
            </span>
            <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-4">
              Ready to close the activation gap on your ServiceNow investment?
            </h2>
            <p className="text-slate-light text-base leading-7 mb-10 max-w-xl mx-auto">
              We specialize in taking organizations from licensed to fully activated — in 6 weeks, not 6 quarters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-700 text-navy transition hover:bg-gold-light"
              >
                Talk to an Expert <ArrowRight size={15} weight="bold" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-600 text-white transition hover:border-gold/30 hover:bg-white/5"
              >
                See Deployment Outcomes
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
