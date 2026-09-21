import React from "react";
import { CompatibilityGrid } from "@/entities/compatibility/ui/compatibility-grid";
import { SectionHeader } from "@/shared/ui/section-header";

export function CompatibilitySection() {
  return (
    <section
      id="kompatibilitas"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Seamless Integration"
          title="Works Flawlessly with Your Existing Cameras"
          description="Avoid wasteful capital expenditures on hardware overhauls. SAMTEK ingests live video streams from any brand currently installed across your facilities."
        />

        <CompatibilityGrid />
      </div>
    </section>
  );
}
