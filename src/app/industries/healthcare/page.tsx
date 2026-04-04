import type { Metadata } from "next";
import IndustryPage, { type IndustryPageData } from "@/components/templates/IndustryPage";

export const metadata: Metadata = {
  title: "ServiceNow for Healthcare & Life Sciences | AscendWorksNow",
  description:
    "How healthcare systems and life sciences organizations use ServiceNow to defend against ransomware, reduce clinical administrative burden, and execute M&A IT integration without disrupting patient care.",
};

const data: IndustryPageData = {
  industry: "Healthcare & Life Sciences",
  accentColor: "teal",
  headline: "Patient Care Starts\nWith Infrastructure That Works.",
  subheadline:
    "Healthcare IT isn't a back-office function. When the EHR goes down, care gets diverted. When the CMDB is wrong, a change breaks the wrong system. When ransomware hits, procedures get cancelled. The stakes here are different — and the IT operating model has to reflect that.",
  heroStats: [
    { value: "#1", label: "Most targeted industry for cyberattacks — 13 consecutive years" },
    { value: "$10.9M", label: "Average cost of a healthcare data breach (highest of any industry)" },
    { value: "34%", label: "Of clinical staff time spent on non-patient administrative work" },
  ],

  pulseHeading: "The Numbers That Keep Healthcare CIOs Awake.",
  pulseBody:
    "Healthcare IT operates under conditions that would be unacceptable in any other sector: the highest breach costs, the most aggressive ransomware targeting, staff burnout from administrative systems that don't work, and M&A timelines that assume 90-day IT integration.",
  pulseStats: [
    {
      value: "$10.9M",
      label: "Average healthcare breach cost",
      context: "Healthcare has held the highest per-breach cost of any industry for 13 consecutive years — 2.2× the global average — driven by regulatory penalties, litigation, notification requirements, and operational disruption (IBM/Ponemon 2024).",
      severity: 91,
      color: "red",
    },
    {
      value: "78%",
      label: "YoY increase in ransomware attacks",
      context: "Ransomware attacks against healthcare organizations increased 78% in the past year. Healthcare systems are prime targets because they cannot sustain downtime: patient diversion, cancelled procedures, and clinical decision delays create immediate pressure to pay (Sophos 2024).",
      severity: 85,
      color: "gold",
    },
    {
      value: "34%",
      label: "Clinical time lost to admin",
      context: "Clinical staff spend 34% of their working time on administrative tasks — IT service requests, HR workflows, supply ordering, credentialing — that have nothing to do with patient care. That is not a scheduling problem. It is a service delivery problem (McKinsey Health Institute).",
      severity: 70,
      color: "teal",
    },
    {
      value: "3.2 days",
      label: "Avg. clinical IT incident resolution",
      context: "Without a formal ITSM process, the average clinical IT incident takes 3.2 days to resolve — during which clinical staff may be working around broken systems in ways that create additional risk (Gartner Healthcare IT Survey 2024).",
      severity: 62,
      color: "purple",
    },
  ],

  challengeHeading: "The Challenges That Are Specific to Healthcare. And Getting Worse.",
  challengeBody:
    "Healthcare IT teams are navigating simultaneous pressure from adversaries who specifically target them, staff who are burning out on broken workflows, and M&A timelines that don't account for IT complexity.",
  challenges: [
    {
      iconName: "Virus",
      trend: "+78% ransomware volume YoY",
      severity: "critical",
      title: "Ransomware and Clinical Cyber Risk",
      pullStat: "$1.5M+",
      pullLabel: "average healthcare ransom payment in 2024",
      body: "Healthcare organizations are targeted because the calculus is simple: a system that cannot afford downtime will pay to restore it. The operational consequence of a successful attack — diverted ambulances, cancelled procedures, clinical staff working from paper — means the pressure to pay arrives within hours of an incident. Prevention and rapid response are the only alternatives.",
    },
    {
      iconName: "FirstAidKit",
      trend: "+19% clinical attrition rate",
      severity: "high",
      title: "Clinical Administrative Burden",
      pullStat: "1 in 3",
      pullLabel: "nurses cite poor IT systems as a burnout driver",
      body: "When a nurse submits an IT ticket, a supply request, or an HR inquiry, the answer should come back in minutes — not days. When it doesn't, they work around the broken process. They create shadow systems. They spend time on administration instead of care. The workforce shortage in healthcare is already severe. Administrative IT dysfunction is accelerating it.",
    },
    {
      iconName: "Buildings",
      trend: "+31% deal volume YoY in health systems M&A",
      severity: "high",
      title: "Healthcare M&A IT Integration",
      pullStat: "90 days",
      pullLabel: "typical board-mandated IT integration window",
      body: "Healthcare consolidation is at a historic pace, and every acquisition brings incompatible EHR systems, different Active Directory structures, separate service catalogs, and two IT organizations that need to function as one — usually with a 90-day integration mandate from the board. Most healthcare IT teams have not built the playbooks or the tooling to execute that reliably.",
    },
  ],

  impactHeading: "Where ServiceNow Directly Reduces Clinical and Operational Risk.",
  impactBody:
    "These aren't generic ITSM capabilities retrofitted for healthcare. They are specific ServiceNow workflows that address the patient safety, compliance, and operational challenges that are unique to this sector.",
  impactRows: [
    {
      challenge: "EHR and clinical system downtime during cyberattacks",
      module: "SecOps + BCM",
      moduleColor: "teal",
      outcome: "Automated clinical downtime procedures, attack containment workflows, coordinated response with CISO and clinical ops",
      metric: "55% faster mean time to contain",
    },
    {
      challenge: "HR and IT service delivery for clinical staff",
      module: "HR Service Delivery",
      moduleColor: "gold",
      outcome: "Self-service portal for IT requests, credentialing, onboarding, supply requests — all resolved without a phone call",
      metric: "40% reduction in administrative time",
    },
    {
      challenge: "Post-M&A IT integration (90-day mandate)",
      module: "ITSM + CMDB",
      moduleColor: "purple",
      outcome: "Single unified service catalog, asset registry spanning both organizations, consolidated helpdesk operations",
      metric: "90-day integration achievable",
    },
    {
      challenge: "Medical device and IoT asset tracking (HIPAA)",
      module: "Asset Management",
      moduleColor: "teal",
      outcome: "Complete medical device inventory with maintenance schedules, warranty tracking, and HIPAA-aligned disposal workflows",
      metric: "100% device visibility",
    },
  ],

  modulesHeading: "Six ServiceNow Capabilities That Protect Patients by Protecting Infrastructure.",
  modulesBody:
    "Healthcare ServiceNow deployments require HIPAA-compliant architecture, clinical workflow awareness, and integration depth with EHR platforms. These modules are built for it.",
  modules: [
    {
      iconName: "Virus",
      module: "SecOps",
      description: "Threat detection and incident response designed for healthcare environments — with EHR-aware incident classification, automated clinical downtime procedure activation, and HIPAA breach notification workflows.",
      color: "teal",
    },
    {
      iconName: "Heartbeat",
      module: "HR Service Delivery",
      description: "Clinical and administrative staff service portal — IT requests, credentialing, onboarding, supply requests, and HR inquiries resolved through a single interface. Measurably reduces non-patient-facing time per clinical FTE.",
      color: "gold",
    },
    {
      iconName: "Gear",
      module: "ITSM",
      description: "Clinical help desk operations with HIPAA-compliant ticket handling, EHR integration for incident context, and escalation paths that understand the difference between a payroll system outage and a clinical system outage.",
      color: "purple",
    },
    {
      iconName: "ShieldCheck",
      module: "Business Continuity Mgmt",
      description: "Automated clinical downtime procedures activated the moment a critical system fails — so staff know what to do without waiting for IT to call them. Includes recovery time tracking and post-incident review workflows.",
      color: "teal",
    },
    {
      iconName: "Database",
      module: "Asset Management",
      description: "Medical device inventory, IoT asset tracking, maintenance schedules, and HIPAA-aligned disposal workflows. Full visibility into every device on your clinical network — including the ones that aren't on your CMDB yet.",
      color: "gold",
    },
    {
      iconName: "TreeStructure",
      module: "CMDB + Discovery",
      description: "Full IT/OT topology mapping across hospital networks — including clinical systems, biomedical devices, building management systems, and third-party service dependencies. The foundation for safe change management.",
      color: "purple",
    },
  ],

  outcomeHeading: "What Healthcare Systems Report After Deployment.",
  outcomeBody:
    "Outcomes from healthcare ServiceNow engagements across acute care, ambulatory, and life sciences organizations.",
  outcomes: [
    { value: "55%", label: "Faster cyber incident containment", color: "text-teal" },
    { value: "40%", label: "Reduction in clinical admin burden", color: "text-gold" },
    { value: "90 days", label: "M&A integration timeline achieved", color: "text-teal" },
    { value: "100%", label: "Medical device inventory visibility", color: "text-purple" },
  ],
};

export default function HealthcarePage() {
  return <IndustryPage data={data} />;
}
