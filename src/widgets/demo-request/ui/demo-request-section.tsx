import React from "react";
import { DemoRequestForm } from "@/features/demo-request-form/ui/demo-request-form";
import { SectionHeader } from "@/shared/ui/section-header";
import { siteConfig } from "@/shared/config/site";
import { MessageSquare, Mail, MapPin, CheckCircle2 } from "lucide-react";

export function DemoRequestSection() {
  return (
    <section
      id="demo"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Reassurance & Direct Contact */}
          <div>
            <SectionHeader
              badge="Complimentary On-Site Assessment"
              title="Experience SAMTEK VMS Live on Your Own Facility"
              description="Our deployment engineers will perform an on-site Proof of Concept (PoC) by hooking a demo edge server to your existing camera network. Validate model accuracy before making any commitments."
            />

            {/* Proof checklist */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#E6F1F0]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero disruption to existing CCTV recordings and ongoing operations</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E6F1F0]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate live detection accuracy visible on your monitoring monitors</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E6F1F0]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent OPEX savings and infrastructure sizing report provided</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8B9C9B] mb-2">
                Or Reach Out Directly:
              </div>

              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#121E1A] border border-white/10 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8B9C9B]">WhatsApp Business (Rapid Response)</div>
                    <div className="text-sm font-semibold text-white font-mono">{siteConfig.company.phone}</div>
                  </div>
                </div>
                <span className="text-xs text-[#C2D1D0] group-hover:text-white font-medium group-hover:translate-x-0.5 transition-all">
                  Chat Now →
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.company.email}`}
                className="p-4 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F161A] border border-white/10 text-[#0C6791] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8B9C9B]">Procurement & RFQ Email</div>
                    <div className="text-sm font-semibold text-white font-mono">{siteConfig.company.email}</div>
                  </div>
                </div>
                <span className="text-xs text-[#C2D1D0] group-hover:text-white font-medium group-hover:translate-x-0.5 transition-all">
                  Send Inquiry →
                </span>
              </a>

              <div className="p-4 rounded-xl bg-[#0D1316]/50 border border-white/[0.05] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8B9C9B] shrink-0 mt-0.5" />
                <div className="text-xs text-[#8B9C9B] leading-relaxed">
                  <strong className="text-white font-medium">Headquarters:</strong> {siteConfig.company.address}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <DemoRequestForm />
        </div>
      </div>
    </section>
  );
}
