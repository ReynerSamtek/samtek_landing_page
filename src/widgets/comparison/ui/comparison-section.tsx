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
          badge="Perbandingan Arsitektur"
          title="Mengapa Perusahaan Memilih Edge On-Premise Dibanding Cloud?"
          description="Sistem VMS berbasis cloud membebani bandwidth kantor dan berisiko kebocoran data. Samtek memberikan performa analitik instan dengan kontrol total di tangan Anda."
        />

        <ComparisonTable rows={comparisonRows} />
      </div>
    </section>
  );
}
