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
              Keamanan Data & Regulasi
            </Badge>

            <SectionHeader
              title="Kedaulatan Data Penuh di Tangan Perusahaan Anda"
              description="Untuk institusi perbankan, manufaktur vital, BUMN, dan instalasi militer di mana kebocoran rekaman video ke server cloud adalah pelanggaran hukum berat."
              className="mb-6"
            />

            <div className="p-5 rounded-xl bg-[#0C6791]/10 border border-[#0C6791]/30 text-xs text-[#C2D1D0] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#7ec6ea]">
                <Lock className="w-4 h-4" />
                <span>Prinsip Zero-Trust Architecture</span>
              </div>
              <p className="leading-relaxed">
                Samtek tidak mewajibkan port forwarding, tidak membutuhkan akses publik internet, dan dapat beroperasi penuh pada jaringan lokal tertutup (air-gapped intranet).
              </p>
            </div>
          </div>

          <SecurityChecklist />
        </div>
      </div>
    </section>
  );
}
