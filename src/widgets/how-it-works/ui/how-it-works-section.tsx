import React from "react";
import { howItWorksSteps } from "@/entities/how-it-works/model/data";
import { StepCard } from "@/entities/how-it-works/ui/step-card";
import { SectionHeader } from "@/shared/ui/section-header";

export function HowItWorksSection() {
  return (
    <section
      id="cara-kerja"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08] bg-[#080D0F]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Alur Implementasi Cepat"
          title="Bagaimana Samtek Bekerja di Infrastruktur Anda"
          description="Pemasangan plug-and-play hanya dalam hitungan jam. Tanpa merombak kabel eksisting dan tanpa downtime pada operasional gedung."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
