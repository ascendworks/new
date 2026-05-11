import type { Metadata } from "next";
import OpportunityContent from "@/components/sections/OpportunityContent";

export const metadata: Metadata = {
  title: "The Opportunity | AscendWorksNow Careers",
  description:
    "AscendWorks is opening 25 Charter Practice seats for elite ServiceNow professionals. Keep 85% of project profit, build a passive income network, and own your career trajectory. Complete confidentiality guaranteed.",
};

export default function OpportunityPage() {
  return <OpportunityContent />;
}
