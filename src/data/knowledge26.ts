// ─────────────────────────────────────────────────────────────────────────────
// Knowledge26 — AscendWorks ServiceNow Intelligence Feed
//
// HOW TO ADD NEW ITEMS:
//   1. Add a new KnowledgeItem object to the KNOWLEDGE_ITEMS array below.
//   2. Assign a unique `id` (slugified title), correct `category`, and `type`.
//   3. Set `leadSignal` based on sales relevance:
//      "high"   → prospect is evaluating / RFP signal
//      "medium" → platform news they care about
//      "low"    → general awareness
//   4. Run `npm run build` and push to deploy.
//
// CATEGORIES → service alignment:
//   knowledge26  → Conference / event content
//   agentic-ai   → Now Assist, AI Agents, Copilot integrations
//   itsm         → Incident, Change, Problem, CMDB, AIOps
//   wsd          → Workplace Service Delivery, Facilities, Space
//   platform     → Releases, Store, API, Architecture
//   industry     → Healthcare, Financial, Energy, Federal vertical news
//   staffing     → Talent, certifications, hiring market
// ─────────────────────────────────────────────────────────────────────────────

export type KnowledgeCategory =
  | "knowledge26"
  | "agentic-ai"
  | "itsm"
  | "wsd"
  | "platform"
  | "industry"
  | "staffing";

export type ContentType =
  | "news"
  | "announcement"
  | "trend"
  | "session"
  | "tip"
  | "viral"
  | "insight";

// Sales signal — visible only to AscendWorks / TechPeople team (subtle dot)
export type LeadSignal = "high" | "medium" | "low" | null;

export interface KnowledgeStat {
  label: string;
  value: string;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  summary: string;
  detail?: string;
  category: KnowledgeCategory;
  type: ContentType;
  date: string;
  source: string;
  sourceUrl?: string;
  tags: string[];
  leadSignal?: LeadSignal;
  trending?: boolean;
  featured?: boolean;
  stats?: KnowledgeStat[];
  /** Internal: maps to AscendWorks service line for CRM tagging */
  crmTag?: string;
}

// ─── Category metadata ────────────────────────────────────────────────────────

export const CATEGORIES: Record<
  KnowledgeCategory,
  { label: string; color: string; bg: string; description: string }
> = {
  "knowledge26":  { label: "Knowledge26",  color: "#C9A84C", bg: "#C9A84C18", description: "Conference sessions, announcements & highlights" },
  "agentic-ai":   { label: "Agentic AI",   color: "#8B5CF6", bg: "#8B5CF618", description: "Now Assist, AI Agents, autonomous workflows" },
  "itsm":         { label: "ITSM",         color: "#0D9B8A", bg: "#0D9B8A18", description: "Incident, Change, CMDB, AIOps" },
  "wsd":          { label: "WSD",          color: "#E87B45", bg: "#E87B4518", description: "Workplace Service Delivery & facilities" },
  "platform":     { label: "Platform",     color: "#64748B", bg: "#64748B18", description: "Releases, Store, APIs & architecture" },
  "industry":     { label: "Industry",     color: "#DC2626", bg: "#DC262618", description: "Vertical market insights & customer outcomes" },
  "staffing":     { label: "Staffing",     color: "#F59E0B", bg: "#F59E0B18", description: "Talent demand, certifications & hiring" },
};

export const TYPE_LABELS: Record<ContentType, string> = {
  news:         "News",
  announcement: "Announcement",
  trend:        "Trend",
  session:      "Session",
  tip:          "Pro Tip",
  viral:        "Viral",
  insight:      "Insight",
};

// ─── Knowledge feed ───────────────────────────────────────────────────────────

export const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  // ── Knowledge26 Conference ──────────────────────────────────────────────────
  {
    id: "k26-opens-las-vegas",
    title: "Knowledge 2026 Opens in Las Vegas — 25,000+ Attendees, Biggest Ever",
    summary:
      "ServiceNow's flagship annual conference returns to Mandalay Bay with a record attendance. The theme 'AI Built for Work' sets the tone for a platform fully oriented around agentic AI and autonomous enterprise operations.",
    detail:
      "Knowledge26 spans five days with 800+ sessions across 14 solution areas. The conference marks the first year ServiceNow dedicates an entire hall to its AI Agent ecosystem. Partners, ISVs, and customers are showcasing over 200 live demos of Now Assist in production.",
    category: "knowledge26",
    type: "news",
    date: "2026-05-04",
    source: "ServiceNow Newsroom",
    tags: ["Knowledge26", "Conference", "Las Vegas", "2026"],
    leadSignal: "medium",
    featured: true,
    trending: true,
    stats: [
      { label: "Attendees", value: "25,000+" },
      { label: "Sessions", value: "800+" },
      { label: "Partners", value: "350+" },
    ],
    crmTag: "event-awareness",
  },
  {
    id: "k26-mcdermott-keynote",
    title: "Bill McDermott Keynote: 'The Agentic Enterprise Is Here — Right Now'",
    summary:
      "ServiceNow CEO Bill McDermott declared at Knowledge26 that AI agents will handle 50% of IT operations tasks by 2028. He showcased live demos of Now Assist resolving a P1 incident end-to-end without human intervention.",
    category: "knowledge26",
    type: "session",
    date: "2026-05-04",
    source: "ServiceNow Keynote",
    tags: ["Keynote", "CEO", "Agentic AI", "Now Assist"],
    leadSignal: "medium",
    trending: true,
    stats: [
      { label: "AI Agent Tasks by 2028", value: "50% of IT Ops" },
      { label: "Live Customers on Now Assist", value: "4,000+" },
    ],
    crmTag: "thought-leadership",
  },
  {
    id: "k26-zurich-release-announced",
    title: "Now Platform Zurich: Every Major Feature Announced at Knowledge26",
    summary:
      "ServiceNow unveiled the Zurich release at K26 featuring AI-native process orchestration, a rebuilt CMDB with autonomous discovery, and Now Assist expanding to 28 workflow areas. IT Ops, HRSD, and Security all get native AI agent support.",
    category: "knowledge26",
    type: "announcement",
    date: "2026-05-05",
    source: "ServiceNow Product Blog",
    tags: ["Zurich Release", "Now Platform", "CMDB", "Now Assist"],
    leadSignal: "high",
    featured: true,
    stats: [
      { label: "New Workflow Areas", value: "28" },
      { label: "AI-Native Features", value: "65+" },
    ],
    crmTag: "implementation-opportunity",
  },
  {
    id: "k26-partner-showcase",
    title: "Knowledge26 Partner Showcase: 10 Ecosystem Announcements That Matter",
    summary:
      "From NVIDIA's GPU-accelerated AI inference integration to Microsoft Copilot's deep embedding in ServiceNow workflows, the partner ecosystem announcements signal a major acceleration in enterprise AI adoption on the Now Platform.",
    category: "knowledge26",
    type: "news",
    date: "2026-05-06",
    source: "ServiceNow Partner Blog",
    tags: ["Partners", "NVIDIA", "Microsoft", "Ecosystem"],
    leadSignal: "medium",
    crmTag: "ecosystem-intel",
  },
  {
    id: "k26-roi-study-release",
    title: "IDC Study Released at K26: ServiceNow Customers See $4.5M Avg. Annual Benefit",
    summary:
      "A commissioned IDC study presented at Knowledge26 found that enterprise ServiceNow customers averaged $4.5M in annual net benefit, with a 219% 3-year ROI and payback in under 6 months.",
    category: "knowledge26",
    type: "insight",
    date: "2026-05-07",
    source: "IDC / ServiceNow",
    tags: ["ROI", "IDC", "Business Case", "Enterprise"],
    leadSignal: "high",
    trending: true,
    stats: [
      { label: "Avg. Annual Benefit", value: "$4.5M" },
      { label: "3-Year ROI", value: "219%" },
      { label: "Payback Period", value: "<6 months" },
    ],
    crmTag: "business-case",
  },

  // ── Agentic AI ──────────────────────────────────────────────────────────────
  {
    id: "ai-agents-now-ga",
    title: "ServiceNow AI Agents Hit GA — Autonomous Multi-Step Task Execution Is Live",
    summary:
      "ServiceNow's AI Agents are now generally available, capable of planning and executing multi-step IT workflows without human intervention. Early adopters report 40–60% reduction in Level 1 ticket volume within 90 days of deployment.",
    category: "agentic-ai",
    type: "announcement",
    date: "2026-04-02",
    source: "ServiceNow Blog",
    tags: ["AI Agents", "Agentic", "ITSM", "Automation"],
    leadSignal: "high",
    featured: true,
    trending: true,
    stats: [
      { label: "L1 Ticket Reduction", value: "40–60%" },
      { label: "Time to Value", value: "90 days" },
    ],
    crmTag: "implementation-opportunity",
  },
  {
    id: "now-assist-40-deflection",
    title: "Now Assist Achieves 40% Ticket Deflection in Fortune 500 Deployments",
    summary:
      "ServiceNow published aggregate telemetry showing Now Assist-enabled tenants averaging 40% ticket deflection through intelligent self-service and AI-assisted resolution. Healthcare and financial services lead adoption.",
    category: "agentic-ai",
    type: "trend",
    date: "2026-03-18",
    source: "ServiceNow Customer Success",
    tags: ["Now Assist", "Deflection", "Self-Service", "ROI"],
    leadSignal: "high",
    trending: true,
    stats: [
      { label: "Avg Ticket Deflection", value: "40%" },
      { label: "Leading Sectors", value: "Healthcare, BFSI" },
    ],
    crmTag: "business-case",
  },
  {
    id: "servicenow-nvidia-partnership",
    title: "ServiceNow + NVIDIA Expand Partnership: On-Prem AI Models Now Platform-Native",
    summary:
      "ServiceNow and NVIDIA deepened their partnership at K26, enabling enterprises to run NVIDIA NIM microservices directly within ServiceNow tenants for low-latency, on-premises AI inference — critical for regulated industries.",
    category: "agentic-ai",
    type: "announcement",
    date: "2026-05-05",
    source: "NVIDIA / ServiceNow",
    tags: ["NVIDIA", "NIM", "On-Prem AI", "Partnership"],
    leadSignal: "medium",
    stats: [
      { label: "Latency vs Cloud AI", value: "70% lower" },
    ],
    crmTag: "technology-partner",
  },
  {
    id: "agentic-vs-traditional-automation",
    title: "Agentic AI vs. RPA: Why IT Leaders Are Switching — And What to Watch Out For",
    summary:
      "A new CIO survey shows 68% of IT leaders plan to replace or augment RPA with ServiceNow AI Agents by 2027. The shift promises higher adaptability but requires careful governance around AI decision boundaries.",
    category: "agentic-ai",
    type: "insight",
    date: "2026-03-29",
    source: "Gartner / ServiceNow",
    tags: ["RPA", "Agentic AI", "Governance", "CIO"],
    leadSignal: "high",
    trending: true,
    stats: [
      { label: "CIOs Planning Agent Adoption", value: "68%" },
      { label: "Target Timeline", value: "By 2027" },
    ],
    crmTag: "advisory-opportunity",
  },
  {
    id: "now-assist-hrsd-onboarding",
    title: "Now Assist for HRSD: Zero-Touch Employee Onboarding in 4 Hours Flat",
    summary:
      "A global pharma company using Now Assist for HRSD reduced employee onboarding from 3 days to under 4 hours by automating provisioning requests, policy acknowledgments, and equipment fulfillment through AI orchestration.",
    category: "agentic-ai",
    type: "insight",
    date: "2026-04-12",
    source: "ServiceNow Case Study",
    tags: ["HRSD", "Onboarding", "Now Assist", "Automation"],
    leadSignal: "medium",
    stats: [
      { label: "Onboarding Time Reduction", value: "3 days → 4 hrs" },
      { label: "Tasks Automated", value: "94%" },
    ],
    crmTag: "hrsd-opportunity",
  },

  // ── ITSM ────────────────────────────────────────────────────────────────────
  {
    id: "zero-touch-incident-65-pct",
    title: "Zero-Touch Incident Resolution: Enterprises Now Automating 65% of P2–P4 Incidents",
    summary:
      "New ServiceNow benchmark data reveals top-performing organizations are achieving 65% zero-touch resolution on P2–P4 incidents using AI routing, virtual agent deflection, and automated remediation runbooks — up from 31% in 2024.",
    category: "itsm",
    type: "viral",
    date: "2026-04-01",
    source: "ServiceNow Benchmark Report",
    tags: ["Incident", "Zero-Touch", "AI", "Benchmark"],
    leadSignal: "high",
    trending: true,
    featured: true,
    stats: [
      { label: "Zero-Touch Rate (Leaders)", value: "65%" },
      { label: "vs. 2024 Baseline", value: "+34 pts" },
    ],
    crmTag: "itsm-implementation",
  },
  {
    id: "cmdb-ai-powered-discovery",
    title: "ServiceNow CMDB Gets AI-Powered Discovery — No More Stale CIs",
    summary:
      "The Zurich release introduces AI-driven CMDB reconciliation that continuously validates CI accuracy against actual infrastructure state. Early pilots show 91% reduction in CMDB drift within 60 days.",
    category: "itsm",
    type: "announcement",
    date: "2026-05-05",
    source: "ServiceNow Product Blog",
    tags: ["CMDB", "Discovery", "AI", "Zurich"],
    leadSignal: "high",
    stats: [
      { label: "CMDB Drift Reduction", value: "91%" },
      { label: "Time to Stabilize", value: "60 days" },
    ],
    crmTag: "cmdb-opportunity",
  },
  {
    id: "change-management-ai-risk",
    title: "Change Management 2.0: AI Risk Scoring Is Replacing Manual CAB Reviews",
    summary:
      "ServiceNow's AI-powered change risk scoring is enabling organizations to auto-approve 78% of standard changes that previously required manual CAB review, dramatically accelerating release velocity without increasing risk.",
    category: "itsm",
    type: "trend",
    date: "2026-03-22",
    source: "ServiceNow Blog",
    tags: ["Change Management", "CAB", "AI Risk", "DevOps"],
    leadSignal: "medium",
    stats: [
      { label: "Changes Auto-Approved", value: "78%" },
      { label: "Release Velocity Gain", value: "3.2×" },
    ],
    crmTag: "itsm-implementation",
  },
  {
    id: "aiops-alert-correlation",
    title: "AIOps + ServiceNow: Correlating 10M Alerts Into 50 Actionable Incidents",
    summary:
      "A global bank processing 10 million monitoring alerts per day reduced their incident queue to 50 actionable items using ServiceNow's AIOps event correlation engine — a 99.999% compression ratio that saved 6 FTEs.",
    category: "itsm",
    type: "insight",
    date: "2026-04-08",
    source: "ServiceNow Customer Story",
    tags: ["AIOps", "Alert Correlation", "ITOM", "Banking"],
    leadSignal: "high",
    stats: [
      { label: "Alert Compression", value: "99.999%" },
      { label: "FTEs Saved", value: "6" },
    ],
    crmTag: "itom-opportunity",
  },
  {
    id: "servicenow-vs-jira-2026",
    title: "ServiceNow ITSM vs. Jira Service Management 2026: Analyst Head-to-Head",
    summary:
      "Forrester's latest Wave positions ServiceNow as a Leader with the highest score in AI capabilities, integration depth, and enterprise scalability. Jira leads in developer adoption but trails significantly in enterprise ITIL workflows.",
    category: "itsm",
    type: "insight",
    date: "2026-02-28",
    source: "Forrester Research",
    tags: ["Forrester", "ITSM", "Jira", "Analyst Report"],
    leadSignal: "high",
    trending: true,
    crmTag: "competitive-intel",
  },

  // ── Workplace Service Delivery ──────────────────────────────────────────────
  {
    id: "wsd-underutilized-module",
    title: "WSD: The Most Underutilized ServiceNow Module — And Why 2026 Changes That",
    summary:
      "A new survey of 400 ServiceNow customers finds that 61% own Workplace Service Delivery licenses but have deployed fewer than 30% of available capabilities. Return-to-office mandates and hybrid work optimization are finally driving activation.",
    category: "wsd",
    type: "viral",
    date: "2026-04-15",
    source: "ServiceNow Community",
    tags: ["WSD", "Utilization", "Hybrid Work", "ROI"],
    leadSignal: "high",
    trending: true,
    featured: true,
    stats: [
      { label: "WSD License Owners", value: "61% underutilized" },
      { label: "Avg Capabilities Deployed", value: "< 30%" },
    ],
    crmTag: "wsd-expansion",
  },
  {
    id: "wsd-space-management-banks",
    title: "Intelligent Space Management: Major Banks Cut Real Estate Costs by 22%",
    summary:
      "Three global banks using ServiceNow WSD's space analytics reduced their real estate footprint by 22% on average, optimizing desk booking, conference room utilization, and multi-site capacity planning with AI-driven recommendations.",
    category: "wsd",
    type: "trend",
    date: "2026-03-10",
    source: "ServiceNow Case Studies",
    tags: ["Space Management", "Real Estate", "BFSI", "Cost Reduction"],
    leadSignal: "high",
    stats: [
      { label: "Real Estate Cost Reduction", value: "22%" },
      { label: "Desk Utilization Improvement", value: "38%" },
    ],
    crmTag: "wsd-implementation",
  },
  {
    id: "wsd-healthcare-visitor-mgmt",
    title: "WSD Visitor Management: Healthcare's Quiet Compliance Win",
    summary:
      "Hospitals using ServiceNow WSD's Visitor Management module report HIPAA-compliant visitor tracking, reduced security incidents by 44%, and automated badge provisioning that eliminated 2,000+ manual check-ins per month.",
    category: "wsd",
    type: "insight",
    date: "2026-03-05",
    source: "ServiceNow Healthcare Blog",
    tags: ["Visitor Management", "Healthcare", "HIPAA", "Compliance"],
    leadSignal: "medium",
    stats: [
      { label: "Security Incidents Reduced", value: "44%" },
      { label: "Manual Check-ins Eliminated", value: "2,000/mo" },
    ],
    crmTag: "wsd-healthcare",
  },

  // ── Platform / Technical ────────────────────────────────────────────────────
  {
    id: "zurich-release-top-15",
    title: "Now Platform Zurich: 15 Changes Every ServiceNow Admin Must Know",
    summary:
      "The Zurich release ships with AI-native workflow orchestration, a new Flow Designer AI co-pilot, enhanced security for API access, CMDB improvements, and significant changes to scoped app architecture. Upgrade planning starts now.",
    category: "platform",
    type: "tip",
    date: "2026-05-08",
    source: "ServiceNow Developer Blog",
    tags: ["Zurich", "Release Notes", "Admin", "Flow Designer"],
    leadSignal: "medium",
    trending: true,
    crmTag: "platform-services",
  },
  {
    id: "servicenow-store-new-apps",
    title: "5 New ServiceNow Store Apps That Solve Real Enterprise Problems",
    summary:
      "From vendor risk management automation to ESG compliance tracking, this quarter's ServiceNow Store releases include five high-ROI apps that enterprises can deploy in under two weeks — no custom development required.",
    category: "platform",
    type: "tip",
    date: "2026-04-20",
    source: "ServiceNow Store",
    tags: ["Store", "Apps", "Low-Code", "Quick Win"],
    leadSignal: "medium",
    crmTag: "quick-win-implementation",
  },
  {
    id: "zurich-api-security-changes",
    title: "Zurich API Security Changes: What Breaks and What to Fix Before You Upgrade",
    summary:
      "Zurich introduces stricter OAuth 2.0 enforcement and deprecates several legacy REST endpoints. Organizations with custom integrations need to audit their inbound API usage before upgrading to avoid production disruptions.",
    category: "platform",
    type: "tip",
    date: "2026-05-09",
    source: "ServiceNow Developer Community",
    tags: ["API", "Security", "Upgrade", "OAuth", "Breaking Changes"],
    leadSignal: "medium",
    crmTag: "upgrade-services",
  },

  // ── Industry ────────────────────────────────────────────────────────────────
  {
    id: "healthcare-itsm-hrsd-2026-budgets",
    title: "Healthcare IT Leaders Prioritize ServiceNow HRSD and WSD in 2026 Budgets",
    summary:
      "A CHIME survey of 250 healthcare CIOs reveals ServiceNow HRSD and WSD are the top-funded IT platform investments for 2026, driven by workforce retention challenges, hybrid care models, and regulatory compliance pressures.",
    category: "industry",
    type: "trend",
    date: "2026-02-14",
    source: "CHIME / HIMSS",
    tags: ["Healthcare", "HRSD", "WSD", "CIO Survey", "Budget"],
    leadSignal: "high",
    stats: [
      { label: "Healthcare CIOs Surveyed", value: "250" },
      { label: "Top Funded Platform", value: "ServiceNow" },
    ],
    crmTag: "healthcare-vertical",
  },
  {
    id: "fortune500-servicenow-1-platform",
    title: "Fortune 500 CIOs Name ServiceNow #1 Enterprise Workflow Platform 4 Years Running",
    summary:
      "ServiceNow retained the top spot in the annual Fortune 500 CIO Technology Survey for the fourth consecutive year, with 91% of respondents calling it 'mission-critical' to their enterprise operations strategy.",
    category: "industry",
    type: "viral",
    date: "2026-03-01",
    source: "Fortune / ServiceNow",
    tags: ["Fortune 500", "CIO", "Enterprise", "Platform Leader"],
    leadSignal: "medium",
    trending: true,
    stats: [
      { label: "Mission-Critical Rating", value: "91%" },
      { label: "Years at #1", value: "4 consecutive" },
    ],
    crmTag: "market-positioning",
  },

  // ── Staffing / Talent ───────────────────────────────────────────────────────
  {
    id: "servicenow-csa-demand-up-34",
    title: "ServiceNow CSA & CIS Demand Surges 34% in Q1 2026 — Talent Gap Widens",
    summary:
      "LinkedIn and Indeed data shows ServiceNow-certified professional demand grew 34% year-over-year in Q1 2026, outpacing supply by a 3:1 ratio. Average salaries for CSA holders exceeded $125K for the first time.",
    category: "staffing",
    type: "trend",
    date: "2026-04-03",
    source: "LinkedIn Talent Insights",
    tags: ["Staffing", "CSA", "CIS", "Certification", "Talent Gap"],
    leadSignal: "high",
    trending: true,
    stats: [
      { label: "Demand Growth YoY", value: "+34%" },
      { label: "Supply/Demand Ratio", value: "1:3" },
      { label: "Avg CSA Salary", value: "$125K+" },
    ],
    crmTag: "staffing-opportunity",
  },
  {
    id: "agentic-ai-skills-shortage",
    title: "The Agentic AI Skills Shortage: Why 73% of ServiceNow Projects Stall at AI Activation",
    summary:
      "Despite broad Now Assist licensing, 73% of organizations report they lack internal skills to configure, govern, and optimize ServiceNow AI agents. Demand for certified AI workflow architects has tripled since Q3 2025.",
    category: "staffing",
    type: "insight",
    date: "2026-04-17",
    source: "ServiceNow Partner Survey",
    tags: ["AI Skills", "Talent", "Now Assist", "Implementation Gap"],
    leadSignal: "high",
    trending: true,
    featured: true,
    stats: [
      { label: "Projects Stalled at AI Activation", value: "73%" },
      { label: "Demand for AI Architects", value: "3× since Q3 2025" },
    ],
    crmTag: "staffing-opportunity",
  },
];

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const FEATURED_ITEMS = KNOWLEDGE_ITEMS.filter((i) => i.featured);
export const TRENDING_ITEMS = KNOWLEDGE_ITEMS.filter((i) => i.trending);

export const HIGH_LEAD_ITEMS = KNOWLEDGE_ITEMS.filter(
  (i) => i.leadSignal === "high"
);

export function getItemsByCategory(cat: KnowledgeCategory): KnowledgeItem[] {
  return KNOWLEDGE_ITEMS.filter((i) => i.category === cat);
}

export function searchItems(query: string): KnowledgeItem[] {
  const q = query.toLowerCase();
  return KNOWLEDGE_ITEMS.filter(
    (i) =>
      i.title.toLowerCase().includes(q) ||
      i.summary.toLowerCase().includes(q) ||
      i.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export const LAST_UPDATED = "2026-04-18";
export const TOTAL_ITEMS = KNOWLEDGE_ITEMS.length;
