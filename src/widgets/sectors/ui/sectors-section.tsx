import React from "react";
import { sectorsData } from "@/entities/sector/model/data";
import { SectorCard } from "@/entities/sector/ui/sector-card";
import { SectionHeader } from "@/shared/ui/section-header";

export function SectorsSection() {
  return (
    <section
      id="industri"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08] bg-[#080D0F]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Industry-Tailored Solutions"
          title="Engineered to Solve Real-World Operational Challenges"
          description="Every vertical operates under distinct requirements. SAMTEK delivers domain-specific computer vision models ready to integrate directly with your operational SOPs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectorsData.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
