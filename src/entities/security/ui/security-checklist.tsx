import React from "react";
import { ShieldCheck, Lock, FileText, Database, EyeOff } from "lucide-react";

export function SecurityChecklist() {
  const securityPillars = [
    {
      title: "100% Pemrosesan Lokal (Air-Gapped Ready)",
      desc: "Rekaman video dan analitik biometrik tidak pernah dikirim ke internet atau server pihak ketiga manapun.",
      icon: Database,
    },
    {
      title: "Kepatuhan Regulasi Privasi (UU PDP Indonesia)",
      desc: "Menjamin kedaulatan data sensitif perusahaan sesuai UU Perlindungan Data Pribadi No. 27/2022.",
      icon: ShieldCheck,
    },
    {
      title: "Role-Based Access Control (RBAC Bertingkat)",
      desc: "Pembatasan hak akses kamera dan fitur AI secara ketat berdasarkan wewenang jabatan karyawan.",
      icon: Lock,
    },
    {
      title: "Audit Log & Jejak Forensik Tamper-Proof",
      desc: "Setiap aktivitas login, akses kamera, dan ekspor rekaman tercatat otomatis dan tidak dapat diubah.",
      icon: FileText,
    },
    {
      title: "Enkripsi Menyeluruh (AES-256 & TLS 1.3)",
      desc: "Data video diamankan dengan enkripsi standar perbankan baik saat tersimpan maupun saat dialirkan di jaringan.",
      icon: EyeOff,
    },
  ];

  return (
    <div className="space-y-3">
      {securityPillars.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-[#0C6791]/50 transition-colors flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0C6791]/15 border border-[#0C6791]/30 flex items-center justify-center text-[#7ec6ea] shrink-0 mt-0.5">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-[#8B9C9B] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
