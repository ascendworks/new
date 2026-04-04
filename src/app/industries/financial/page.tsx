import type { Metadata } from "next";
import IndustryPage, { type IndustryPageData } from "@/components/templates/IndustryPage";

export const metadata: Metadata = {
  title: "ServiceNow for Financial Services | AscendWorksNow",
  description:
    "How banks, insurers, and capital markets firms use ServiceNow to meet DORA requirements, manage third-party risk, and modernize change management in regulated IT environments.",
};

const data: IndustryPageData = {
  industry: "Financial Services",
  accentColor: "gold",
  headline: "Regulation Is the Floor.\nOperational Resilience Is the Ceiling.",
  subheadline:
    "DORA is live. Third-party failures are accelerating. The regulators who used to accept a spreadsheet now want a real-time risk dashboard. ServiceNow is how financial institutions build the operational infrastructure to meet that bar — without doubling headcount.",
  heroStats: [
    { value: "$321B", label: "In fines levied globally since 2008 for non-compliance" },
    { value: "1,500+", label: "Regulatory changes tracked daily by major global banks" },
    { value: "68%", label: "Of firms disrupted by third-party vendor failure last year" },
  ],

  pulseHeading: "What the Risk Committee Sees. What IT Has to Solve.",
  pulseBody:
    "The pressure on financial services IT isn't new — but DORA, Basel IV, and a wave of third-party incidents have created a convergence of compliance, resilience, and operational demands that legacy processes simply cannot absorb.",
  pulseStats: [
    {
      value: "$321B",
      label: "Global banking fines since 2008",
      context: "Cumulative regulatory fines levied against financial institutions globally since 2008 for operational, compliance, and conduct failures — a number that continues to grow (Good Jobs First Violation Tracker).",
      severity: 92,
      color: "red",
    },
    {
      value: "1,500+",
      label: "Daily regulatory changes tracked",
      context: "Major global banks track over 1,500 regulatory changes per day across jurisdictions. Most are managing this with email threads, shared drives, and manual processes (Thomson Reuters Regulatory Intelligence).",
      severity: 78,
      color: "gold",
    },
    {
      value: "68%",
      label: "Third-party disruption rate",
      context: "68% of financial services firms experienced a material operational disruption caused by a third-party vendor in the past 12 months — yet most lack a systematic way to monitor, test, or respond (Gartner 2024).",
      severity: 68,
      color: "teal",
    },
    {
      value: "$5.9M",
      label: "Avg. financial data breach cost",
      context: "The average total cost of a data breach in financial services — the second-highest of any sector — including detection, notification, regulatory response, and reputational impact (IBM/Ponemon 2024).",
      severity: 74,
      color: "purple",
    },
  ],

  challengeHeading: "The Compliance and Resilience Pressures That Don't Wait for Q4 Planning.",
  challengeBody:
    "DORA came into force in January 2025. Third-party risk isn't slowing down. Change management built for quarterly releases doesn't work when engineering deploys weekly. These are the challenges financial IT leaders are actively navigating.",
  challenges: [
    {
      iconName: "Buildings",
      trend: "Enforcement began Jan 2025",
      severity: "critical",
      title: "DORA: ICT Risk and Operational Resilience",
      pullStat: "2%",
      pullLabel: "of global annual turnover — DORA maximum fine",
      body: "The EU Digital Operational Resilience Act requires documented ICT risk management frameworks, incident classification and reporting within 24 hours, regular resilience testing, and third-party ICT dependency mapping. The majority of affected institutions entered 2025 with significant gaps. Regulators have made clear they intend to enforce.",
    },
    {
      iconName: "NetworkSlash",
      trend: "+45% third-party incidents YoY",
      severity: "high",
      title: "Third-Party and Supply Chain Risk",
      pullStat: "4 of 5",
      pullLabel: "major financial outages trace back to a vendor",
      body: "The most significant operational failures in financial services over the past three years have had third-party root causes — payment processors, cloud providers, fintech dependencies. Most firms have a vendor register. Few have continuous monitoring, tested failover procedures, or a ServiceNow workflow that can trigger a response the moment a vendor SLA breaches.",
    },
    {
      iconName: "ChartLineDown",
      trend: "+23% regulatory change volume",
      severity: "high",
      title: "Regulatory Change Management Overload",
      pullStat: "62%",
      pullLabel: "of compliance teams say they cannot track changes manually",
      body: "The volume of regulatory change has reached a point where manual tracking is a control weakness in itself. When a regulation changes and the corresponding control test isn't updated within the required window, the organization has a gap — whether or not anyone noticed. Automation of the detection-to-remediation workflow is no longer a nice-to-have.",
    },
  ],

  impactHeading: "Where ServiceNow Closes the Gap Between Compliance and Operations.",
  impactBody:
    "The platform doesn't just document your controls — it runs them. These are the specific capabilities that financial services teams use to convert regulatory requirements into operational workflows.",
  impactRows: [
    {
      challenge: "DORA ICT risk documentation and resilience testing",
      module: "IT Risk Management",
      moduleColor: "gold",
      outcome: "Automated evidence collection, real-time risk posture dashboard, resilience test scheduling",
      metric: "DORA-ready in 90 days",
    },
    {
      challenge: "Third-party vendor health and contract monitoring",
      module: "Third-Party Risk Mgmt",
      moduleColor: "teal",
      outcome: "Continuous vendor scoring, automated SLA breach alerts, dependency mapping for critical services",
      metric: "48-hr vendor risk response time",
    },
    {
      challenge: "Change management for regulated environments",
      module: "Change Management",
      moduleColor: "purple",
      outcome: "CAB workflows with full audit trail, automated change advisory, zero-downtime change windows",
      metric: "100% change traceability",
    },
    {
      challenge: "ICT incident classification and regulatory reporting",
      module: "ITSM + SecOps",
      moduleColor: "gold",
      outcome: "Automated incident severity classification, 24-hour regulatory notification workflows, evidence packaging",
      metric: "90% faster incident reporting",
    },
  ],

  modulesHeading: "The ServiceNow Modules That Financial Services IT Actually Runs On.",
  modulesBody:
    "Financial services environments demand audit trails, change governance, and risk frameworks that general enterprise ITSM tools weren't built for. These modules are.",
  modules: [
    {
      iconName: "Scales",
      module: "GRC",
      description: "Governance, risk, and compliance automation for DORA, Basel IV, MiFID II, PCI-DSS, and SOX. Continuous control monitoring with automated evidence collection — no more manual audit prep every quarter.",
      color: "gold",
    },
    {
      iconName: "CloudWarning",
      module: "IT Risk Management",
      description: "Real-time risk posture tracking across IT and third-party ICT dependencies. Risk heat maps, automated control failure alerts, and resilience testing workflows built for DORA Article 26 requirements.",
      color: "teal",
    },
    {
      iconName: "Handshake",
      module: "Third-Party Risk Mgmt",
      description: "Continuous monitoring of critical ICT third-party providers — vendor health scoring, contract breach detection, automated response workflows, and dependency mapping for critical business services.",
      color: "purple",
    },
    {
      iconName: "ShieldCheck",
      module: "SecOps",
      description: "Threat intelligence integration and incident response for financial services environments — with automated DORA-compliant incident classification, severity tiering, and regulatory notification workflows.",
      color: "gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      module: "Change Management",
      description: "Full change governance with CAB workflows, automated change advisory, and complete audit trail for regulated environments. Designed for organizations where every change must be defensible to a regulator.",
      color: "teal",
    },
    {
      iconName: "Buildings",
      module: "Operational Resilience",
      description: "Business service dependency mapping and resilience impact testing. Identifies which IT failures trigger customer impact — so you can test your resilience posture before the regulator does.",
      color: "purple",
    },
  ],

  outcomeHeading: "What Financial Services Clients Achieve at 12 Months.",
  outcomeBody:
    "Outcomes from financial services ServiceNow engagements, measured against pre-deployment baselines.",
  outcomes: [
    { value: "90 days", label: "To DORA compliance baseline", color: "text-gold" },
    { value: "80%", label: "Reduction in audit prep time", color: "text-teal" },
    { value: "48 hrs", label: "Third-party risk response time", color: "text-gold" },
    { value: "100%", label: "Change auditability achieved", color: "text-purple" },
  ],
};

export default function FinancialServicesPage() {
  return <IndustryPage data={data} />;
}
