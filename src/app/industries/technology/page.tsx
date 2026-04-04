import type { Metadata } from "next";
import IndustryPage, { type IndustryPageData } from "@/components/templates/IndustryPage";

export const metadata: Metadata = {
  title: "ServiceNow for Technology & Media | AscendWorksNow",
  description:
    "How technology and media companies use ServiceNow to control SaaS sprawl, accelerate change velocity without losing governance, and integrate acquired companies in 60 days instead of 18 months.",
};

const data: IndustryPageData = {
  industry: "Technology & Media",
  accentColor: "purple",
  headline: "You Move Fast.\nYour Governance Has to Keep Up.",
  subheadline:
    "Technology companies outgrow their IT operating models faster than any other sector. 900 SaaS apps no one fully controls. Engineering deploying hundreds of times a week. An M&A that needs IT integration in 60 days. ServiceNow is how you scale operations without scaling headcount.",
  heroStats: [
    { value: "900+", label: "Avg. SaaS apps running in a mid-size tech company" },
    { value: "$5.7M", label: "Cost per hour of infrastructure downtime for SaaS businesses" },
    { value: "68%", label: "Of tech M&As cite IT integration failure as the reason synergies were missed" },
  ],

  pulseHeading: "The Scale Problems That Come With Moving Fast.",
  pulseBody:
    "Technology companies prioritize velocity — and they should. But the operational debt that accumulates when tooling doesn't scale with growth shows up predictably: in outages, in acquisition integrations that take 18 months instead of 60 days, and in SaaS bills that are 30% higher than they should be.",
  pulseStats: [
    {
      value: "900+",
      label: "SaaS apps per mid-size tech org",
      context: "The average mid-size technology company runs over 900 distinct SaaS applications. Security teams don't know half of them exist. Procurement is paying for 30% more seats than are being actively used. Shadow IT is a budget problem as much as a security problem (BetterCloud SaaS Report 2024).",
      severity: 82,
      color: "purple",
    },
    {
      value: "$5.7M",
      label: "Cost per hour of downtime",
      context: "For an average SaaS business, one hour of unplanned infrastructure downtime costs $5.7M when including lost revenue, customer SLA penalties, engineering remediation time, and reputational impact on renewal rates (Gartner 2024).",
      severity: 77,
      color: "red",
    },
    {
      value: "68%",
      label: "M&A IT integration failure rate",
      context: "68% of technology company acquisitions fail to achieve their synergy targets, and the acquirers specifically cite IT integration failure as the primary cause — incompatible identity systems, duplicate tooling, and no consolidated CMDB (McKinsey M&A Research 2024).",
      severity: 68,
      color: "gold",
    },
    {
      value: "4.3 yrs",
      label: "Average tech CIO tenure",
      context: "The shortest average tenure of any C-suite role — tech CIOs face simultaneous pressure from engineering teams who want autonomy, finance teams who want cost control, and a board that wants operational resilience without slowing velocity (Gartner CIO Research 2024).",
      severity: 54,
      color: "teal",
    },
  ],

  challengeHeading: "What Hypergrowth Creates. And What It Leaves Behind.",
  challengeBody:
    "The operational challenges in technology and media are specific to the sector: they're the direct result of prioritizing speed — and then discovering that the operating model didn't scale with the product.",
  challenges: [
    {
      iconName: "CloudWarning",
      trend: "+41% SaaS app proliferation YoY",
      severity: "high",
      title: "SaaS Sprawl and Shadow IT",
      pullStat: "30%",
      pullLabel: "of SaaS seats are inactive but billed",
      body: "Every team that needed a tool bought one. Every integration that needed a connector added one. The result is an application portfolio that no single person can describe, a security surface area that can't be audited, and a renewal cycle where finance is approving spend for tools that stopped being used two quarters ago. It's not a procurement failure — it's a visibility failure.",
    },
    {
      iconName: "Lightning",
      trend: "+28% deployment frequency YoY",
      severity: "high",
      title: "Change Velocity vs. Change Governance",
      pullStat: "400+",
      pullLabel: "production deployments per week at a typical SaaS company",
      body: "ITSM processes designed for monthly release cycles become bottlenecks when engineering deploys hundreds of times per week. The response in most technology companies is to bypass ITSM entirely — which means no audit trail for SOC 2, no change history for incident response, and no way to answer 'what changed?' when something breaks at 2am. The velocity is right. The governance architecture isn't.",
    },
    {
      iconName: "Robot",
      trend: "Emerging risk — no established framework",
      severity: "elevated",
      title: "AI Governance and Model Risk",
      pullStat: "72%",
      pullLabel: "of tech companies have deployed internal AI with no governance policy",
      body: "Internal AI tools are being deployed faster than governance frameworks can catch up. Undocumented model updates, unreviewed training data, hallucinated outputs in customer-facing workflows, and AI agents that interact with production systems without change management oversight — these are becoming material risk events. For publicly traded tech companies, they're also a disclosure question.",
    },
  ],

  impactHeading: "Where ServiceNow Gives Technology Teams Control Without Slowing Them Down.",
  impactBody:
    "The goal isn't to add process overhead — it's to give engineering, security, and finance the visibility they need to move fast without leaving governance gaps. These are the specific platform capabilities that do that.",
  impactRows: [
    {
      challenge: "SaaS license sprawl across 900+ applications",
      module: "Software Asset Management",
      moduleColor: "purple",
      outcome: "Complete license inventory, usage analytics, consolidation recommendations, automated renewal workflows",
      metric: "25–40% SaaS spend reduction",
    },
    {
      challenge: "High-velocity change management for CI/CD pipelines",
      module: "DevOps + Change Mgmt",
      moduleColor: "gold",
      outcome: "Pipeline-integrated change tracking, automated risk scoring, SOC 2 and ISO 27001 audit trail generation",
      metric: "3× change velocity maintained",
    },
    {
      challenge: "Post-M&A IT consolidation in 60 days",
      module: "ITSM + CMDB",
      moduleColor: "teal",
      outcome: "Single unified service catalog, consolidated asset registry, merged helpdesk operations within acquisition timeline",
      metric: "60-day integration achievable",
    },
    {
      challenge: "Internal AI tool governance and risk tracking",
      module: "GRC + IT Risk",
      moduleColor: "purple",
      outcome: "AI model registry, governance workflow for model updates and deployments, automated risk assessment for AI change events",
      metric: "100% AI change traceability",
    },
  ],

  modulesHeading: "The ServiceNow Capabilities That Scale With a Technology Company.",
  modulesBody:
    "Technology and media organizations need a platform that can match engineering velocity while giving finance and security the visibility they need. These modules are built for that balance.",
  modules: [
    {
      iconName: "Database",
      module: "Software Asset Management",
      description: "Complete visibility into your SaaS portfolio — what's deployed, what's actively used, what's being renewed automatically, and where you're paying for seats no one is using. The average ROI from SAM alone covers the cost of the ServiceNow platform.",
      color: "purple",
    },
    {
      iconName: "Lightning",
      module: "DevOps + Change Mgmt",
      description: "CI/CD pipeline integration that captures every deployment as a change event — automatically, without requiring engineers to file tickets. SOC 2, ISO 27001, and internal audit requirements satisfied without slowing deployment frequency.",
      color: "gold",
    },
    {
      iconName: "Cpu",
      module: "App Engine",
      description: "Internal workflow automation built on the ServiceNow platform — no separate tooling, no shadow IT. Engineering and operations teams build custom workflows in a governed environment, with IT maintaining visibility and security control.",
      color: "teal",
    },
    {
      iconName: "Robot",
      module: "Customer Service Mgmt",
      description: "Scalable customer support operations for high-volume SaaS businesses — AI-assisted ticket triage, customer portal, integration with engineering workflows so customer-reported incidents trigger the right internal response automatically.",
      color: "purple",
    },
    {
      iconName: "Scales",
      module: "GRC + IT Risk",
      description: "AI governance frameworks, SOC 2 continuous monitoring, ISO 27001 control management, and IT risk tracking for organizations that need to demonstrate compliance without dedicating a team to spreadsheet maintenance.",
      color: "gold",
    },
    {
      iconName: "ShieldCheck",
      module: "ITSM + SecOps",
      description: "Incident management built for high-frequency production environments — with security event correlation, automated severity classification, on-call routing, and post-incident review workflows that feed back into change management.",
      color: "teal",
    },
  ],

  outcomeHeading: "What Technology and Media Organizations Achieve at 12 Months.",
  outcomeBody:
    "Outcomes from technology company ServiceNow engagements measured against pre-deployment baselines across SaaS, infrastructure, and M&A contexts.",
  outcomes: [
    { value: "35%", label: "Average SaaS spend reduction", color: "text-purple" },
    { value: "3×", label: "Change velocity with full audit trail", color: "text-gold" },
    { value: "60 days", label: "M&A IT integration timeline", color: "text-teal" },
    { value: "100%", label: "SOC 2 change traceability", color: "text-purple" },
  ],
};

export default function TechnologyMediaPage() {
  return <IndustryPage data={data} />;
}
