import type { Metadata } from "next";
import CareersClient from "@/components/sections/CareersClient";

export const metadata: Metadata = {
  title: "Careers | AscendWorksNow",
  description:
    "Join AscendWorksNow. We place elite ServiceNow architects and consultants with Fortune 1000 clients. View open contract and full-time roles.",
};

export default function CareersPage() {
  return <CareersClient />;
}
