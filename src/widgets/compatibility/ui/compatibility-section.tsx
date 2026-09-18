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
          badge="Integrasi Tanpa Hambatan"
          title="Bekerja Sempurna dengan CCTV yang Sudah Anda Miliki"
          description="Hindari pemborosan budget untuk peremajaan kamera baru. SAMTEK langsung mengenali video stream dari brand apapun yang saat ini sedang aktif di gedung Anda."
        />

        <CompatibilityGrid />
      </div>
    </section>
  );
}
