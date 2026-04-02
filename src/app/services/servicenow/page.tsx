import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "ServiceNow Implementation | AscendWorksNow",
  description:
    "Full-lifecycle ServiceNow deployments in 6 weeks. Certified architects, zero-scope-creep methodology, and 90 days of post-go-live optimization included.",
};

const data: ServicePageData = {
  category: "ServiceNow Implementation",
  headline: "Implementation That Sticks.\nROI That Shows Up.",
  subheadline:
    "Most ServiceNow projects go live and then stall. Ours don't. We've built a deployment methodology from 200+ enterprise engagements that gets you live in six weeks — and keeps the platform earning long after launch.",
  heroStats: [
    { value: "6 wks", label: "Average time to go-live" },
    { value: "200+", label: "Deployments completed" },
    { value: "30%", label: "Avg. under-budget delivery" },
  ],

  problemHeading: "The Platform Isn't the Problem. The Approach Is.",
  problemBody:
    "The average ServiceNow implementation runs over budget, behind schedule, and at 40% utilization within a year. We've audited enough of them to know exactly why — and none of those reasons have anything to do with the technology.",
  painPoints: [
    {
      iconName: "Clock",
      title: "Discovery that drags into deployment",
      description:
        "Vague requirements at the start become rework at the end. Most engagements spend months in 'analysis' before a line of configuration is written. That's not rigor — it's risk.",
    },
    {
      iconName: "Target",
      title: "Go-live metrics that miss the point",
      description:
        "A system that's technically live but not adopted isn't a success. Ticket volume, MTTR, and user satisfaction are the metrics that matter — not whether the portal loads.",
    },
    {
      iconName: "UsersThree",
      title: "Knowledge transfer that never actually transfers",
      description:
        "When the implementation partner walks out, your team should own the platform — not just have access to it. Most don't. That dependency is expensive.",
    },
  ],

  capabilitiesHeading: "Every Module. Every Integration. One Accountable Team.",
  capabilitiesBody:
    "We don't hand off and disappear. Our architects stay with the engagement through go-live, adoption, and the first 90 days of optimization — because that's when the real work happens.",
  capabilities: [
    {
      iconName: "Gear",
      title: "ITSM, ITOM & HRSD",
      description:
        "Core module deployments executed by architects who've done each one dozens of times. No generalists. No learning on your dime.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      title: "CSM, SecOps & Field Service",
      description:
        "Complex modules that most partners treat as afterthoughts. We treat them as primary workstreams with dedicated certification depth.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Wrench",
      title: "Integration Architecture",
      description:
        "MID server configuration, REST/SOAP integrations, and third-party connectors built to your security and governance standards — not ours.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "Handshake",
      title: "Change Management & Adoption",
      description:
        "Platform success is 40% configuration and 60% people. We run change programs alongside technical delivery because utilization is the real metric.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ChartBar",
      title: "Reporting & Performance Dashboards",
      description:
        "Board-ready dashboards built from day one — so the ROI conversation happens at month three, not month eighteen.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Rocket",
      title: "90-Day Post-Go-Live Optimization",
      description:
        "Included in every engagement. We track adoption metrics, tune performance, and run optimization sprints for three months after you launch. No additional statement of work.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],

  processHeading: "Six Weeks Is Not a Slogan.",
  processBody:
    "It's a commitment backed by a structured methodology, a dedicated project team, and a contract clause that holds us to it. Here's exactly how we spend those six weeks.",
  processSteps: [
    {
      number: "01",
      title: "Discover",
      subtitle: "Weeks 1–2: Requirements, architecture, business case",
      description:
        "We interview your stakeholders, audit your existing environment, and finalize the scope in writing. Nothing moves to configuration until alignment is documented.",
      deliverable: "Signed scope document + architecture blueprint",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "02",
      title: "Configure",
      subtitle: "Weeks 2–4: Agile sprints, daily standups",
      description:
        "Configuration happens in two-day sprint cycles with live demos at each checkpoint. You see progress every 48 hours — not at the end of the month.",
      deliverable: "Working environment, integration-tested",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "03",
      title: "Deploy",
      subtitle: "Weeks 5–6: UAT, training, go-live",
      description:
        "User acceptance testing with your team, role-based training, and a zero-downtime cutover. Your team goes live informed — not surprised.",
      deliverable: "Live platform + trained users",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "04",
      title: "Optimize",
      subtitle: "Days 7–90: Adoption, tuning, ROI tracking",
      description:
        "We stay. We track adoption metrics weekly, run optimization sprints monthly, and deliver a 90-day ROI report to your leadership team.",
      deliverable: "ROI report + optimization roadmap",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
  ],

  outcomeHeading: "What Our Clients Report After 90 Days.",
  outcomeBody:
    "These aren't projections. They're the averages from client outcome reports filed 90 days post-go-live across our last 50 engagements.",
  outcomeStats: [
    { value: "6 wks", label: "Average go-live timeline", color: "text-gold" },
    { value: "40%", label: "Average MTTR reduction", color: "text-teal" },
    { value: "98%", label: "Client retention rate", color: "text-gold" },
    { value: "30%", label: "Under-budget delivery avg.", color: "text-purple" },
  ],
};

export default function ServiceNowImplementationPage() {
  return <ServicePage data={data} />;
}
