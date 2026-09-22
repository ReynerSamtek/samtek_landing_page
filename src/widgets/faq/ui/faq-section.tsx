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
          badge="Frequently Asked Questions"
          title="Common Inquiries About SAMTEK VMS"
          description="Transparent details regarding our on-premise edge architecture, multi-brand CCTV compatibility, and enterprise deployment models."
        />

        <FaqAccordion />

        {/* WhatsApp Help Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#0D1316] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Have Specific Questions?
            </h3>
            <p className="text-xs sm:text-sm text-[#8B9C9B]">
              Our technical engineering team is available to clarify specifications and sizing for your site.
            </p>
          </div>

          <a
            href="https://wa.me/6287744488999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all shrink-0 hover:border-emerald-500/50 shadow-lg shadow-emerald-950/20"
          >
            <span>Chat via WhatsApp: SAMTEK Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
