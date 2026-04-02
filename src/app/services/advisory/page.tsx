import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Strategic IT Advisory | AscendWorksNow",
  description:
    "Board-ready IT roadmaps, operating model redesign, and technology investment strategy — with a former CIO in the room, not beneath it.",
};

const data: ServicePageData = {
  category: "Strategic IT Advisory",
  headline: "The Board Wants IT\nto Lead. Here's How.",
  subheadline:
    "The gap between an IT function that executes and one that leads isn't a technology gap — it's a strategy gap. We work alongside your leadership, not beneath it, to close it. Former CIOs. Board-ready deliverables. No slide decks full of frameworks you already know.",
  heroStats: [
    { value: "CIO", label: "Former CIO advisory team" },
    { value: "90 days", label: "To a board-ready roadmap" },
    { value: "100%", label: "Executive-level engagement" },
  ],

  problemHeading: "Being Right About Technology Isn't Enough.",
  problemBody:
    "When the CFO asks what IT's contribution to revenue growth was last year, there are two types of answers: a number backed by data, or uncomfortable silence. Most IT leaders have the data to answer that question — they just haven't built the narrative, the roadmap, or the operating model to make it visible.",
  painPoints: [
    {
      iconName: "Question",
      title: "A roadmap that's actually a project list",
      description:
        "A list of initiatives with timelines isn't a strategy. A real IT roadmap articulates how technology investment connects to business outcomes — and survives a CFO's scrutiny at budget time.",
    },
    {
      iconName: "ArrowDown",
      title: "IT positioned as a cost, not a contributor",
      description:
        "If your conversations with the C-suite are primarily about keeping costs flat, the operating model is broken. IT should be driving revenue conversations, not defending expense ones.",
    },
    {
      iconName: "Minus",
      title: "Transformation initiatives that lose momentum",
      description:
        "Every large IT transformation has a political dimension. Without executive sponsorship, a compelling narrative, and a governance model that survives personnel changes, the initiative stalls.",
    },
  ],

  capabilitiesHeading: "Strategy Work That Survives the Boardroom.",
  capabilitiesBody:
    "We've sat in the seats your leadership sits in. We know what the board actually asks, what the CFO actually fears, and what the CEO actually needs to see. We build the strategy around that reality — not around best-practice frameworks.",
  capabilities: [
    {
      iconName: "ChartLineUp",
      title: "IT Operating Model Redesign",
      description:
        "Structure, governance, and decision rights for an IT organization built to move at the speed the business now requires. Not a reorganization for its own sake — a model aligned to your strategic intent.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "Briefcase",
      title: "Board-Ready Technology Roadmaps",
      description:
        "A three-year technology investment plan with cost, risk, and business value modeled for each initiative — built to survive CFO review and board presentation without requiring an interpreter.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Lightbulb",
      title: "Technology Investment Strategy",
      description:
        "Build vs. buy decisions, vendor selection support, and portfolio rationalization — grounded in your organization's specific capability gaps and strategic priorities, not generic benchmarks.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "Handshake",
      title: "Executive Stakeholder Alignment",
      description:
        "We facilitate the conversations between IT, finance, operations, and the board that organizations avoid because they're hard. We've had them before. We know how they end well.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "Buildings",
      title: "IT Governance Framework",
      description:
        "Decision rights, investment approval processes, and program governance that scales with organizational complexity — without creating bureaucracy that slows everything down.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Users",
      title: "Ongoing CIO Advisory",
      description:
        "Monthly advisory engagement for IT leaders who want a thought partner — someone who's been in the role, has no stake in a particular outcome, and will tell you what they actually think.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],

  processHeading: "How We Build Strategy That Sticks.",
  processBody:
    "A strategy that doesn't survive the first budget cycle isn't a strategy. We build the narrative, the numbers, and the governance model together — so adoption isn't a separate initiative.",
  processSteps: [
    {
      number: "01",
      title: "Assess",
      subtitle: "Weeks 1–3: IT maturity, stakeholder interviews",
      description:
        "We interview your leadership team, your peers in the business, and your IT organization. We're mapping political reality as much as technical reality — both matter equally to a strategy's success.",
      deliverable: "IT maturity assessment + stakeholder alignment map",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "02",
      title: "Strategize",
      subtitle: "Weeks 3–7: Operating model, roadmap design",
      description:
        "We develop the operating model, the investment roadmap, and the governance framework in parallel — because they're the same decision viewed from three different angles.",
      deliverable: "Draft operating model + roadmap with financials",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "03",
      title: "Align",
      subtitle: "Weeks 7–10: Executive review, iteration",
      description:
        "We pressure-test the strategy with your executive team — not as a presentation, but as a working session. Every objection is better raised in a room with us than in a board meeting without us.",
      deliverable: "Approved strategy + executive commitment",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "04",
      title: "Activate",
      subtitle: "Month 3+: Execution support, quarterly reviews",
      description:
        "Strategy without execution support is a document. We stay engaged — quarterly reviews, initiative governance, and ongoing advisory to keep the roadmap current as the business evolves.",
      deliverable: "Quarterly strategy review + initiative tracking",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
  ],

  outcomeHeading: "What Changes When IT Leads.",
  outcomeBody:
    "These outcomes represent IT organizations that shifted from reactive service providers to strategic business drivers within 12 months of an advisory engagement.",
  outcomeStats: [
    { value: "90 days", label: "To board-approved roadmap", color: "text-gold" },
    { value: "2×", label: "IT budget approval speed", color: "text-teal" },
    { value: "100%", label: "C-suite engagement rate", color: "text-gold" },
    { value: "Ex-CIO", label: "Advisory team seniority", color: "text-purple" },
  ],
};

export default function StrategicAdvisoryPage() {
  return <ServicePage data={data} />;
}
