import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Agentic AI & Automation | AscendWorksNow",
  description:
    "Deploy AI agents that resolve 60% of L1/L2 tickets autonomously inside your ServiceNow environment. No new platforms. No moonshot promises.",
};

const data: ServicePageData = {
  category: "Agentic AI & Automation",
  headline: "Your L1 Desk Is Already\nAutomated. Deploy It.",
  subheadline:
    "The technology to resolve 60% of your service desk volume without a human exists — inside the ServiceNow platform you already own. We build and deploy the agents that run it. No new platforms. No 18-month AI roadmap.",
  heroStats: [
    { value: "60%", label: "Avg. ticket deflection" },
    { value: "24/7", label: "Autonomous resolution" },
    { value: "< 8 wks", label: "Agents live in production" },
  ],

  problemHeading: "Your Team Is Solving Problems a Machine Should Handle.",
  problemBody:
    "We've analyzed service desk data across 80+ enterprise environments. In every single one, the top 40 request categories accounted for over 70% of total volume — and the vast majority required no human judgment to resolve. That's not a technology problem. That's a deployment problem.",
  painPoints: [
    {
      iconName: "Robot",
      title: "Chatbots that don't actually do anything",
      description:
        "Most 'AI' service desk tools are sophisticated routing forms. They ask questions and open tickets. That's not automation — it's a prettier version of what you already have.",
    },
    {
      iconName: "ArrowsSplit",
      title: "Automation that stops at the ticket",
      description:
        "Real resolution means taking action: resetting the password, provisioning the access, restarting the service. Most tools hand the ticket to a human at that point. Agents don't.",
    },
    {
      iconName: "UsersThree",
      title: "Talent spending time on L1 work",
      description:
        "Every senior engineer answering a password reset is a problem. Not because the work is beneath them — because they were hired to do something harder. The capacity you're bleeding is compounding.",
    },
  ],

  capabilitiesHeading: "Agents That Take Action. Not Just Tickets.",
  capabilitiesBody:
    "We build AI agents natively inside ServiceNow — not bolted on top of it. They integrate with your identity provider, your monitoring stack, and your CMDB from day one.",
  capabilities: [
    {
      iconName: "Brain",
      title: "Intent Detection & Classification",
      description:
        "Agents identify what the user needs — not just what they typed — and route or resolve without escalation. Trained on your environment's ticket history, not generic datasets.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "Lightning",
      title: "Autonomous Resolution",
      description:
        "Password resets, access provisioning, software requests, account unlocks — the agent executes the action end-to-end and closes the ticket. No human in the loop unless escalation logic fires.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      title: "Intelligent Escalation Logic",
      description:
        "When a ticket needs a human, the agent hands off with full context — actions taken, systems checked, user history. Your team picks up where the agent left off, not from scratch.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Funnel",
      title: "Proactive Incident Prevention",
      description:
        "Agents monitor alert feeds and performance thresholds. When a pattern suggests a failure is coming, they trigger remediation workflows before the user calls the help desk.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "ChartLineUp",
      title: "Continuous Learning & Improvement",
      description:
        "Every interaction trains the model. Deflection rates improve week over week. We review performance data monthly and tune resolution logic to keep the numbers moving.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ShieldCheck",
      title: "Security & Compliance Guardrails",
      description:
        "Every agent operates within your access control framework. No agent takes an action your security policy doesn't permit. HIPAA, SOX, PCI — we've deployed in all of them.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
  ],

  processHeading: "From Zero to Autonomous in Eight Weeks.",
  processBody:
    "We don't need a year to prove ROI. Our deployment approach is built to show measurable deflection within the first sprint cycle — so the business case proves itself early.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      subtitle: "Week 1–2: Ticket data, automation candidates",
      description:
        "We analyze 12 months of ticket data to identify your highest-volume, highest-automatable request categories. You'll know your automation potential before we build a single agent.",
      deliverable: "Automation opportunity report + ROI projection",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "02",
      title: "Build",
      subtitle: "Weeks 2–5: Agent development, integration",
      description:
        "We build agents natively in ServiceNow, connect them to your identity and infrastructure stack, and test against real ticket scenarios — not synthetic data.",
      deliverable: "Agents in test environment, integration-verified",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "03",
      title: "Deploy",
      subtitle: "Weeks 6–7: Controlled rollout, monitoring",
      description:
        "Staged deployment — starting with your highest-volume categories. We monitor deflection rates, false positive rates, and escalation accuracy in real time.",
      deliverable: "Live agents, deflection dashboard active",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "04",
      title: "Expand",
      subtitle: "Week 8+: Category expansion, optimization",
      description:
        "Once the core agents are tuned, we expand scope — additional request categories, proactive monitoring, and cross-system workflows that compound the ROI.",
      deliverable: "Expansion roadmap + monthly optimization cycles",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
  ],

  outcomeHeading: "The Numbers After a Full Deployment.",
  outcomeBody:
    "Measured across production deployments, not pilot environments. This is what happens when agents run in a live enterprise environment for 90+ days.",
  outcomeStats: [
    { value: "60%", label: "Average L1 ticket deflection", color: "text-purple" },
    { value: "< 8 wks", label: "Time to production agents", color: "text-gold" },
    { value: "24/7", label: "Resolution without headcount", color: "text-teal" },
    { value: "3×", label: "Team capacity on strategic work", color: "text-purple" },
  ],
};

export default function AgenticAIPage() {
  return <ServicePage data={data} />;
}
