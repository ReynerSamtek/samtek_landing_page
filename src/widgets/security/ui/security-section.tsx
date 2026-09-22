import React from "react";
import { SecurityChecklist } from "@/entities/security/ui/security-checklist";
import { SectionHeader } from "@/shared/ui/section-header";
import { Badge } from "@/shared/ui/badge";
import { Shield, Lock } from "lucide-react";

export function SecuritySection() {
  return (
    <section
      id="keamanan"
      className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08] bg-[#080D0F]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div>
            <Badge variant="blue" pulse className="mb-4">
              <Shield className="w-3.5 h-3.5 mr-1" />
              Data Security & Compliance
            </Badge>

            <SectionHeader
              title="Full Data Sovereignty in Your Enterprise Hands"
              description="Designed specifically for critical banking, industrial manufacturing, defense, and state enterprises where leaking video footage to cloud vendors is a strict regulatory violation."
              className="mb-6"
            />

            <div className="p-5 rounded-xl bg-[#0E1519] border border-white/10 text-xs text-[#C2D1D0] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-white">
                <Lock className="w-4 h-4 text-[#8B9C9B]" />
                <span>Zero-Trust Architecture Principles</span>
              </div>
              <p className="leading-relaxed text-[#8B9C9B]">
                SAMTEK does not require port forwarding, never opens inbound public internet ports, and operates flawlessly within fully air-gapped corporate intranets.
              </p>
            </div>
          </div>

          <SecurityChecklist />
        </div>
      </div>
    </section>
  );
}
