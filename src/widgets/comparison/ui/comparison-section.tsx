import React from "react";
import { comparisonRows } from "@/entities/comparison/model/data";
import { ComparisonTable } from "@/entities/comparison/ui/comparison-table";
import { SectionHeader } from "@/shared/ui/section-header";

export function ComparisonSection() {
  return (
    <section
      id="komparasi"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Architecture Comparison"
          title="Why Enterprises Choose On-Premise Edge Over Cloud VMS"
          description="Cloud-dependent surveillance systems congest internet bandwidth and introduce data leakage liabilities. SAMTEK delivers real-time computer vision with total sovereign control."
        />

        <ComparisonTable rows={comparisonRows} />
      </div>
    </section>
  );
}
