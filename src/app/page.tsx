import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WhySection from "@/components/sections/WhySection";
import InsightsSection from "@/components/sections/InsightsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero — full-screen dark */}
        <HeroSection />

        {/* 2. Stats ticker — navy mid */}
        <StatsBar />

        {/* 3. Services — light */}
        <ServicesSection />

        {/* 4. Process — dark */}
        <ProcessSection />

        {/* 5. Industries — light */}
        <IndustriesSection />

        {/* 6. Testimonials — navy mid */}
        <TestimonialsSection />

        {/* 7. Why AscendWorks — dark */}
        <WhySection />

        {/* 8. Partners & Credentials — light */}
        <PartnersSection />

        {/* 9. Insights — navy mid */}
        <InsightsSection />

        {/* 10. CTA — light with dark card */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
