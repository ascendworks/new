import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Platform Architecture | AscendWorksNow",
  description:
    "Governance frameworks, multi-instance strategy, and integration architecture for enterprise ServiceNow environments at any scale.",
};

const data: ServicePageData = {
  category: "Platform Architecture",
  headline: "Built to Last.\nDesigned to Scale.",
  subheadline:
    "Enterprise ServiceNow environments fail in predictable ways — ungoverned growth, brittle integrations, no migration strategy. We design the architecture that eliminates each of those failure modes before they become incidents.",
  heroStats: [
    { value: "99.9%", label: "Uptime SLA delivered" },
    { value: "0", label: "Downtime migrations" },
    { value: "10K+", label: "Seat environments supported" },
  ],

  problemHeading: "Most ServiceNow Instances Weren't Designed. They Grew.",
  problemBody:
    "Feature by feature, integration by integration, until the platform became a liability. A governance gap doesn't announce itself — it surfaces as a critical integration failure, a six-month migration, or an upgrade that breaks everything downstream. By then, the cost of the original architecture decision has compounded significantly.",
  painPoints: [
    {
      iconName: "Warning",
      title: "Ungoverned customizations that block upgrades",
      description:
        "Every out-of-scope customization is technical debt. When the next ServiceNow release ships, those customizations break — and you're choosing between upgrading and staying functional.",
    },
    {
      iconName: "LinkBreak",
      title: "Integrations that aren't owned by anyone",
      description:
        "Point-to-point integrations built during the original engagement sit in production with no documentation, no owner, and no disaster recovery plan. Until they fail.",
    },
    {
      iconName: "Database",
      title: "CMDB that no one trusts",
      description:
        "A CMDB populated at go-live and never maintained is worse than no CMDB. It poisons incident routing, change impact analysis, and every automated workflow built on top of it.",
    },
  ],

  capabilitiesHeading: "Architecture That Earns Its Keep.",
  capabilitiesBody:
    "We don't document problems — we resolve them. Every architecture engagement ends with a platform that's better governed, better integrated, and more defensible to the next upgrade cycle.",
  capabilities: [
    {
      iconName: "Buildings",
      title: "Instance Strategy & Governance",
      description:
        "Single vs. multi-instance decisions, upgrade governance frameworks, customization standards — the policies that keep your platform manageable at enterprise scale.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "TreeStructure",
      title: "Integration Architecture",
      description:
        "MID server strategy, REST/SOAP integration design, event-driven architecture, and IntegrationHub implementation — built to your security and redundancy requirements.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "ArrowsOut",
      title: "Migration & Upgrade Planning",
      description:
        "Planned migration from legacy instances, cross-org consolidations, and major upgrade execution — all designed for zero-downtime outcomes with documented rollback plans.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "ShieldCheck",
      title: "Security Architecture Review",
      description:
        "Access control model review, data classification alignment, and security policy enforcement — with specific experience in HIPAA, SOX, PCI-DSS, and FedRAMP environments.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "Gear",
      title: "CMDB Design & Remediation",
      description:
        "Discovery configuration, CI class mapping, relationship modeling, and ongoing hygiene — so your CMDB works as the system of record it was intended to be.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "ChartBar",
      title: "Performance & Capacity Planning",
      description:
        "Load testing, performance baseline documentation, and capacity planning for environments that need to scale — before the next major event tests it for you.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],

  processHeading: "Assess. Design. Build. Validate.",
  processBody:
    "Architecture work without a clear handoff is just expensive documentation. Every phase ends with something your team can use — a decision, a working environment, or a validated test.",
  processSteps: [
    {
      number: "01",
      title: "Assess",
      subtitle: "Week 1–2: Current state, risk mapping",
      description:
        "We document your current architecture, identify the ten highest-risk elements, and quantify the cost of inaction for each one. The output is a board-presentable risk register.",
      deliverable: "Architecture risk register + priority matrix",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Weeks 2–4: Target state, governance model",
      description:
        "We design the target architecture with your constraints — budget, timeline, organizational tolerance for change — and model the path from current state to target state.",
      deliverable: "Architecture blueprint + governance framework",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Weeks 4–10: Implementation, testing",
      description:
        "Architecture changes executed in sequenced phases — never all at once. Each phase is tested in a non-production environment before any production change is approved.",
      deliverable: "Implemented architecture, test-verified",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "04",
      title: "Validate",
      subtitle: "Week 10+: Performance testing, documentation",
      description:
        "Load testing, security validation, and full documentation handed to your team — so the architecture you paid for is understood and maintainable without us.",
      deliverable: "Validation report + architecture documentation",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
  ],

  outcomeHeading: "What Sound Architecture Delivers.",
  outcomeBody:
    "These are the outcomes from architecture engagements where we rebuilt governance, integrations, and instance strategy for enterprise environments.",
  outcomeStats: [
    { value: "99.9%", label: "Uptime SLA achieved", color: "text-gold" },
    { value: "0", label: "Downtime migration incidents", color: "text-teal" },
    { value: "100%", label: "Upgrade success rate", color: "text-gold" },
    { value: "60%", label: "Reduction in integration incidents", color: "text-purple" },
  ],
};

export default function PlatformArchitecturePage() {
  return <ServicePage data={data} />;
}
