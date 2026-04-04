import type { Metadata } from "next";
import IndustryPage, { type IndustryPageData } from "@/components/templates/IndustryPage";

export const metadata: Metadata = {
  title: "ServiceNow for Energy & Utilities | AscendWorksNow",
  description:
    "How energy and utility companies use ServiceNow to unify OT/IT operations, manage NERC CIP compliance, and close the workforce knowledge gap before the generation clock runs out.",
};

const data: IndustryPageData = {
  industry: "Energy & Utilities",
  accentColor: "teal",
  headline: "The Grid Is Changing.\nYour IT Operating Model Has to Change With It.",
  subheadline:
    "Renewable integration, OT/IT convergence, and a retiring generation of engineers are creating simultaneous pressure on infrastructure, security, and institutional knowledge. ServiceNow sits at the center of every one of those problems.",
  heroStats: [
    { value: "4.2×", label: "Increase in ICS/OT cyberattacks since 2020" },
    { value: "43%", label: "Of utility engineers eligible for retirement this decade" },
    { value: "$2.9M", label: "Avg. cost of unplanned ICS downtime" },
  ],

  pulseHeading: "The Operational Reality No One Puts in the Annual Report.",
  pulseBody:
    "Energy and utility IT teams are managing the most complex infrastructure convergence in a generation — while simultaneously facing talent attrition, regulatory escalation, and adversaries who have specifically targeted their sector.",
  pulseStats: [
    {
      value: "4.2×",
      label: "OT/IT cyberattack surge",
      context: "ICS and SCADA attacks have quadrupled since 2020 as operational technology becomes Internet-connected without commensurate security tooling (Dragos ICS Threat Report 2024).",
      severity: 84,
      color: "red",
    },
    {
      value: "43%",
      label: "Workforce retirement cliff",
      context: "Nearly half of skilled utility engineers and tradespeople are within 10 years of retirement — taking undocumented knowledge, vendor relationships, and institutional process with them (CEWD 2024).",
      severity: 72,
      color: "gold",
    },
    {
      value: "$2.9M",
      label: "Avg. ICS downtime cost",
      context: "A single unplanned industrial control system outage costs the average utility $2.9M when accounting for restoration labor, regulatory notifications, SLA penalties, and customer impact (ARC Advisory Group).",
      severity: 68,
      color: "teal",
    },
    {
      value: "68%",
      label: "No unified OT asset inventory",
      context: "68% of utility operators report they cannot produce an accurate, real-time inventory of their OT assets — a NERC CIP audit trigger and a basic prerequisite for incident response (Claroty 2024).",
      severity: 68,
      color: "purple",
    },
  ],

  challengeHeading: "What's Breaking — Before It Becomes an Outage.",
  challengeBody:
    "These aren't theoretical risks. They're the operational and security challenges that utility IT and OT teams report as active, unresolved, and getting worse every quarter.",
  challenges: [
    {
      iconName: "ShieldCheck",
      trend: "+67% YoY attack volume",
      severity: "critical",
      title: "OT/IT Convergence Security",
      pullStat: "1 in 3",
      pullLabel: "utilities had OT network breach in 2023",
      body: "SCADA and DCS systems were designed for air-gapped environments. Grid modernization and remote monitoring have eliminated that isolation without replacing it with adequate security architecture. Most OT environments have zero visibility into lateral movement. When an adversary crosses the IT/OT boundary, the first sign is typically an incident.",
    },
    {
      iconName: "Users",
      trend: "+12% annual attrition",
      severity: "high",
      title: "Workforce Knowledge Cliff",
      pullStat: "10 yrs",
      pullLabel: "until 50% of utility skills leave the workforce",
      body: "The engineers who built your substations, configured your SCADA integrations, and know why certain processes run the way they do are retiring. That knowledge is not in any system of record. When the next critical failure happens, the people who would have known the fix instinctively will be gone.",
    },
    {
      iconName: "Lightning",
      trend: "+28% DER integration volume",
      severity: "high",
      title: "Grid Modernization Complexity",
      pullStat: "900+",
      pullLabel: "new DER connection requests per large utility per month",
      body: "Every distributed energy resource — rooftop solar, battery storage, EV charging infrastructure — adds a new integration point, a new data stream, and a new failure mode to manage. The operational complexity is scaling faster than the tooling to manage it. Incident response built for centralized generation doesn't work for distributed architecture.",
    },
  ],

  impactHeading: "Where ServiceNow Changes the Equation.",
  impactBody:
    "Not theoretical capability — specific platform modules mapped to the operational problems energy and utility teams are actively trying to solve.",
  impactRows: [
    {
      challenge: "No unified visibility across IT and OT assets",
      module: "CMDB + Discovery",
      moduleColor: "teal",
      outcome: "Single asset registry across IT, OT, and field devices — NERC CIP audit-ready",
      metric: "60% faster incident response",
    },
    {
      challenge: "NERC CIP, TSA directive, and NRC compliance tracking",
      module: "GRC",
      moduleColor: "gold",
      outcome: "Automated evidence collection, continuous control monitoring, audit trail generation",
      metric: "80% reduction in audit prep time",
    },
    {
      challenge: "Field crew dispatch and work order management",
      module: "Field Service Management",
      moduleColor: "purple",
      outcome: "Optimized crew routing, mobile work orders, parts availability integration",
      metric: "35% reduction in mean time to repair",
    },
    {
      challenge: "Knowledge retention before workforce retirement",
      module: "HR Service Delivery",
      moduleColor: "teal",
      outcome: "Structured knowledge capture workflows, mentorship program management, skills gap tracking",
      metric: "40% of critical knowledge formalized",
    },
  ],

  modulesHeading: "Six ServiceNow Capabilities. One Platform. Built for Utility Scale.",
  modulesBody:
    "Energy and utility environments require both the breadth to span IT and OT and the depth to handle critical infrastructure compliance. These are the modules that do the work.",
  modules: [
    {
      iconName: "Database",
      module: "CMDB + Discovery",
      description: "Unified asset inventory spanning IT infrastructure, OT endpoints, field devices, and smart grid components. The foundation for NERC CIP asset documentation and incident impact analysis.",
      color: "teal",
    },
    {
      iconName: "ShieldCheck",
      module: "SecOps",
      description: "Threat detection and response workflows designed for OT/IT convergence environments. Integration with industrial security platforms (Claroty, Dragos) to route OT alerts into a single response workflow.",
      color: "gold",
    },
    {
      iconName: "Gear",
      module: "Field Service Management",
      description: "Field crew scheduling, mobile work orders, and parts management for transmission, distribution, and generation maintenance teams — with real-time dispatch and SLA tracking.",
      color: "purple",
    },
    {
      iconName: "Scales",
      module: "GRC",
      description: "Compliance management for NERC CIP, TSA cybersecurity directives, NRC regulations, and state PUC requirements. Continuous control monitoring with automated evidence packages for audit cycles.",
      color: "teal",
    },
    {
      iconName: "ArrowsCounterClockwise",
      module: "ITSM",
      description: "Incident, problem, and change management for NOC operations — configured for critical infrastructure change windows, emergency change protocols, and 24/7 operations workflows.",
      color: "gold",
    },
    {
      iconName: "Users",
      module: "HR Service Delivery",
      description: "Knowledge capture, structured succession planning, and workforce transition management — built to document institutional knowledge before it walks out with a retiring generation of engineers.",
      color: "purple",
    },
  ],

  outcomeHeading: "What Utility Organizations Report After Deployment.",
  outcomeBody:
    "Outcomes from energy and utility ServiceNow engagements measured at 12 months post-implementation.",
  outcomes: [
    { value: "60%", label: "Faster OT incident response", color: "text-teal" },
    { value: "80%", label: "Reduction in NERC CIP audit prep time", color: "text-gold" },
    { value: "35%", label: "MTTR improvement for field crews", color: "text-teal" },
    { value: "100%", label: "OT/IT asset visibility achieved", color: "text-purple" },
  ],
};

export default function EnergyPage() {
  return <IndustryPage data={data} />;
}
