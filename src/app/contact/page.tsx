import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactClient from "@/components/sections/ContactClient";

export const metadata: Metadata = {
  title: "Contact | AscendWorksNow",
  description:
    "Book a 30-minute Discovery Call or talk directly with an AscendWorks ServiceNow expert. We respond within one business day with a direct point of view — not a sales deck.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Suspense>
          <ContactClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
