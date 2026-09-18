import React from "react";
import { SectionHeader } from "@/shared/ui/section-header";
import { Building2, Factory, Landmark, Truck, ShoppingBag, Shield } from "lucide-react";

export function TrustSection() {
  const deployments = [
    { title: "Kawasan Industri & Pabrik", icon: Factory },
    { title: "Perbankan & Lembaga Keuangan", icon: Landmark },
    { title: "Pusat Ritel & Pusat Belanja", icon: ShoppingBag },
    { title: "Hub Logistik & Pergudangan", icon: Truck },
    { title: "Fasilitas Publik & Gedung Bertingkat", icon: Building2 },
    { title: "Objek Vital Nasional (Obvitnas)", icon: Shield },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          align="center"
          badge="Implementasi & Skalabilitas"
          title="Teruji untuk Pengawasan Skala Enterprise"
          description="Arsitektur edge Samtek siap menangani puluhan hingga ratusan channel video secara stabil dan tangguh."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {deployments.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col items-center justify-center gap-3 text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8B9C9B] group-hover:text-[#B62C2C] group-hover:border-[#B62C2C]/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-[#C2D1D0] leading-snug">
                  {d.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
