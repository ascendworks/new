import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OilGasCaseStudySection from "@/components/sections/OilGasCaseStudySection";

export const metadata: Metadata = {
  title: "Case Studies | AscendWorksNow",
  description:
    "Explore ServiceNow case studies for Oil & Gas, Healthcare, Banking, and Logistics, including AI Control Tower deployment for BFSI and industry-specific operational outcomes.",
};

const caseStudies = [
  {
    id: "oil-gas",
    industry: "Oil & Gas",
    title: "Operational reliability and safety visibility for a global energy operator.",
    image: "/assets/case-studies/oil-gas.jpg",
    alt: "Oil and gas production facility operations",
    summary:
      "We unified EHS, asset health, field service, and compliance workflows on ServiceNow so the operator could manage incidents, maintenance, and safety from one platform.",
    impact: [
      "25% reduction in unplanned equipment downtime",
      "4x faster safety notification and incident response",
      "14 offshore and onshore sites on one asset management platform",
    ],
    modules: [
      "Asset Management",
      "Field Service Management",
      "Environmental Health & Safety",
      "ITOM",
      "Operational Technology Management",
    ],
    outcome:
      "A single live model of production assets and safety processes reduced site risk and created a scalable control plane for operations and incident response.",
  },
  {
    id: "healthcare",
    industry: "Healthcare & Life Sciences",
    title: "Clinical IT operations and device governance for a regional health system.",
    image: "/assets/case-studies/healthcare-ls.jpg",
    alt: "Healthcare team reviewing clinical IT service status",
    summary:
      "ServiceNow delivered a clinical operations platform that combined device management, ITSM, and patient-facing service requests so care teams spend less time waiting for technology support.",
    impact: [
      "48% faster incident resolution for clinical systems",
      "100+ connected clinical and imaging devices monitored",
      "6-month adoption across IT and clinical service teams",
    ],
    modules: [
      "HealthCare and Life Sciences",
      "Clinical Device Management",
      "IT Service Management",
      "Service Catalog",
      "HR Service Delivery",
    ],
    outcome:
      "The health system reduced clinical downtime and delivered a consistent, auditable service experience for patients and staff.",
  },
  {
    id: "banking",
    industry: "Banking & Financial Services",
    title: "ServiceNow AI Control Tower for predictive risk and regulator-ready operations.",
    image: "/assets/case-studies/bfsi-control-tower.jpg",
    alt: "Bank trading floor with AI dashboard overlay",
    summary:
      "We built an AI Control Tower on ServiceNow that links incident risk, change exposure, compliance controls, and model drift monitoring into one operational command center.",
    impact: [
      "66% reduction in manual triage and ticket escalation",
      "90% faster production-ready regulator reporting",
      "12 real-time dashboards for business, risk, and IT leaders",
    ],
    modules: [
      "AI Control Tower",
      "Governance, Risk, and Compliance (GRC)",
      "IT Risk Management",
      "Change Management",
      "Security Operations",
    ],
    outcome:
      "The bank gained a joint view of operational resilience and compliance, making it possible to act on high-risk conditions before they became service disruptions.",
  },
  {
    id: "logistics",
    industry: "Logistics",
    title: "Supply chain exception control and delivery recovery for a global network.",
    image: "/assets/case-studies/logistics.jpg",
    alt: "Logistics warehouse and transport management dashboard",
    summary:
      "ServiceNow connected order management, field service dispatch, and exception workflows so the logistics network could resolve delivery disruptions 40% faster.",
    impact: [
      "72% fewer fulfillment exceptions",
      "40% faster recovery for delayed or damaged shipments",
      "1,200+ automation workflows across warehouse and transport operations",
    ],
    modules: [
      "Customer Service Management",
      "Field Service Management",
      "Order Management",
      "IntegrationHub",
      "IT Operations Management",
    ],
    outcome:
      "The network moved from reactive firefighting to proactive supply chain control, with service-level visibility across warehouse, transport, and customer operations.",
  },
];

function SectionCard({ study, reverse }: { study: typeof caseStudies[number]; reverse?: boolean }) {
  return (
    <section className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
      <div className={reverse ? "lg:col-start-2" : ""}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10 bg-navy-light shadow-[0_26px_70px_rgba(9,15,82,0.18)]">
          <Image
            src={study.image}
            alt={study.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-6 lg:pr-6">
        <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-600 uppercase tracking-[0.16em] text-gold">
          {study.industry}
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-800 text-white leading-tight">
          {study.title}
        </h2>
        <p className="text-slate-light leading-8 text-base">{study.summary}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {study.impact.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-display font-700 text-lg text-white leading-snug">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-navy-light p-5">
          <p className="text-slate text-sm leading-relaxed mb-4">Relevant ServiceNow modules used in this deployment.</p>
          <div className="flex flex-wrap gap-3">
            {study.modules.map((module) => (
              <span key={module} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-slate-light">
                {module}
              </span>
            ))}
          </div>
        </div>
        <p className="text-slate text-sm leading-relaxed">{study.outcome}</p>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-teal/10 blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-600 uppercase tracking-[0.18em] text-gold">
                Case Studies
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-800 text-white leading-tight">
                Industry case studies built around ServiceNow outcomes.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-light max-w-2xl">
                Explore proven ServiceNow programs in Oil & Gas, Healthcare & Life Sciences, Banking, and Logistics. The banking case study centers on AI Control Tower deployment for BFSI; the others lean on the highest-value ServiceNow modules for their industry today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
                >
                  Talk to an Expert
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold/30 hover:bg-white/5"
                >
                  See our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {caseStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`#${study.id}`}
                  className="group overflow-hidden rounded-[32px] border border-navy-light bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">{study.industry}</p>
                  <h2 className="text-2xl font-display font-800 text-navy leading-tight mb-3">{study.title}</h2>
                  <p className="text-slate-600 leading-7 mb-5">{study.summary}</p>
                  <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {study.modules.slice(0, 3).map((module) => (
                      <span key={module} className="rounded-full border border-slate-200 px-3 py-1 bg-slate-50">{module}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-600">
                    <span>Read the story</span>
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id} id={study.id} className="scroll-mt-24">
                <SectionCard study={study} reverse={index % 2 === 1} />
              </div>
            ))}
          </div>
        </section>

        <OilGasCaseStudySection />
      </main>
      <Footer />
    </>
  );
}
