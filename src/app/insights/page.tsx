import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InsightsPageContent from "@/components/sections/InsightsPageContent";

export const metadata: Metadata = {
  title: "Insights | AscendWorksNow",
  description:
    "Expert perspectives on ServiceNow Workplace Service Delivery, enterprise infrastructure supply chain strategy, and VMware + ServiceNow workflow automation.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <InsightsPageContent />
      </main>
      <Footer />
    </>
  );
}
