import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "ITSM & Platform Optimization | AscendWorksNow",
  description:
    "Already on ServiceNow but not seeing the ROI? We audit, optimize, and unlock the capabilities your team paid for but never activated.",
};

const data: ServicePageData = {
  category: "ITSM & Platform Optimization",
  headline: "You're Not Getting What\nYou Paid For. We'll Fix That.",
  subheadline:
    "Most ServiceNow environments are running at a fraction of their licensed capability — not because the platform is limited, but because nobody's unlocked it. We've done this audit enough times to know exactly where the value is sitting.",
  heroStats: [
    { value: "40%", label: "Avg. MTTR reduction" },
    { value: "3×", label: "User adoption lift" },
    { value: "2 wks", label: "First sprint, first results" },
  ],

  problemHeading: "Two Years In. Twenty Percent Utilized.",
  problemBody:
    "In our first conversation, we'll ask you about five capabilities inside your ServiceNow environment. Most IT leaders can name two. That gap — between what you're licensed for and what you're running — is where your budget is going unrecovered every quarter.",
  painPoints: [
    {
      iconName: "CurrencyDollar",
      title: "Licensing costs without licensing value",
      description:
        "ServiceNow is one of the largest line items in enterprise IT spend. When the platform is underutilized, every renewal cycle is a hard conversation with the CFO — and you're defending spend you can't fully justify.",
    },
    {
      iconName: "ChartLineDown",
      title: "Incident volumes that won't come down",
      description:
        "If your MTTR hasn't moved in 12 months, the workflows haven't been optimized. Automation rules that aren't configured, routing logic that was 'good enough' at launch — these are fixable. They just haven't been.",
    },
    {
      iconName: "UsersThree",
      title: "Adoption that stalled after go-live",
      description:
        "User adoption doesn't happen automatically. When the training ends and the consultants leave, usage drops. If your portal utilization is under 60%, there's a change management problem sitting underneath a technology problem.",
    },
  ],

  capabilitiesHeading: "We Go Deep Where It Matters.",
  capabilitiesBody:
    "Platform optimization isn't a single engagement — it's a methodology. We audit, prioritize, and improve in structured sprints so you see results at week two, not month twelve.",
  capabilities: [
    {
      iconName: "MagnifyingGlass",
      title: "Platform Health Audit",
      description:
        "A comprehensive assessment of your current configuration: what's active, what's dormant, what's misconfigured, and what's costing you performance. You'll have a ranked remediation list by day five.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Lightning",
      title: "Workflow & Automation Optimization",
      description:
        "Business rules, flow designer workflows, and SLA logic reviewed and rebuilt for your current operational reality — not the version of your business that existed at implementation.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ChartBar",
      title: "Reporting & KPI Alignment",
      description:
        "Most ServiceNow dashboards report activity, not outcomes. We rebuild reporting around the metrics your leadership actually asks about — MTTR, cost per ticket, first-call resolution.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "Users",
      title: "Adoption & Utilization Programs",
      description:
        "Structured enablement programs — role-based, tied to real workflows — that move your utilization numbers. Not training for the sake of training. Training that changes behavior.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Gear",
      title: "CMDB Accuracy & Hygiene",
      description:
        "A stale CMDB is a liability. Incorrect CIs corrupt incident routing, break change impact analysis, and undermine every automated workflow built on top of it. We fix it at the root.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      title: "Continuous Improvement Cycles",
      description:
        "After the initial optimization, we run monthly improvement sprints tied to your KPI targets. The platform compounds in value over time — not just at launch.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],

  processHeading: "Audit. Prioritize. Optimize. Repeat.",
  processBody:
    "We don't drop a 200-page assessment and leave. Every phase produces something operational — something your team can act on before we start the next one.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      subtitle: "Week 1: Full platform assessment",
      description:
        "Configuration review, workflow analysis, utilization data, user feedback — everything we need to build a prioritized improvement backlog in five business days.",
      deliverable: "Prioritized optimization backlog + quick-win list",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "02",
      title: "Prioritize",
      subtitle: "Week 1–2: Business case, sequencing",
      description:
        "We rank improvements by impact and effort, align them to your top operational metrics, and build a roadmap your leadership team can approve — with cost and ROI projections for each item.",
      deliverable: "Optimization roadmap with ROI estimates",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "03",
      title: "Optimize",
      subtitle: "Weeks 2–8: Two-week sprint cycles",
      description:
        "We execute in two-week sprints, demo results at each checkpoint, and measure against your KPIs in real time. If a sprint doesn't move the needle, we adjust before the next one starts.",
      deliverable: "Improved workflows, updated dashboards, KPI movement",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "04",
      title: "Sustain",
      subtitle: "Month 3+: Ongoing improvement cycles",
      description:
        "The engagement doesn't end at eight weeks. We transition to monthly optimization reviews — keeping the platform current with your business, not frozen at its last major update.",
      deliverable: "Monthly KPI report + next-cycle improvements",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
  ],

  outcomeHeading: "What Changes in 90 Days.",
  outcomeBody:
    "Every metric below is a 90-day average from active optimization engagements — not projections, and not cherry-picked outliers.",
  outcomeStats: [
    { value: "40%", label: "Average MTTR reduction", color: "text-teal" },
    { value: "3×", label: "User adoption lift", color: "text-gold" },
    { value: "65%", label: "Avg. portal utilization increase", color: "text-purple" },
    { value: "2 wks", label: "First measurable results", color: "text-teal" },
  ],
};

export default function ITSMPage() {
  return <ServicePage data={data} />;
}
