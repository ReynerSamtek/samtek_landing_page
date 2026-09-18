import React from "react";
import { FaqAccordion } from "@/features/faq-accordion/ui/faq-accordion";
import { SectionHeader } from "@/shared/ui/section-header";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          align="center"
          badge="Pertanyaan Umum (FAQ)"
          title="Hal yang Kerap Ditanyakan Mengenai Samtek VMS"
          description="Jawaban transparan seputar arsitektur on-premise, kompatibilitas perangkat CCTV, dan skema kemitraan."
        />

        <FaqAccordion />
      </div>
    </section>
  );
}
