import React from "react";
import { Navbar } from "@/widgets/navbar/ui/navbar";
import { Hero } from "@/widgets/hero/ui/hero";
import { CapabilitiesSection } from "@/widgets/capabilities/ui/capabilities-section";
import { HowItWorksSection } from "@/widgets/how-it-works/ui/how-it-works-section";
import { ComparisonSection } from "@/widgets/comparison/ui/comparison-section";
import { SectorsSection } from "@/widgets/sectors/ui/sectors-section";
import { CompatibilitySection } from "@/widgets/compatibility/ui/compatibility-section";
import { SecuritySection } from "@/widgets/security/ui/security-section";
import { TrustSection } from "@/widgets/trust/ui/trust-section";
import { FaqSection } from "@/widgets/faq/ui/faq-section";
import { DemoRequestSection } from "@/widgets/demo-request/ui/demo-request-section";
import { Footer } from "@/widgets/footer/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#06090A] text-[#E6F1F0] selection:bg-[#B62C2C]/30 selection:text-white">
      <Navbar />
      <Hero />
      <CapabilitiesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <SectorsSection />
      <CompatibilitySection />
      <SecuritySection />
      <TrustSection />
      <FaqSection />
      <DemoRequestSection />
      <Footer />
    </main>
  );
}

