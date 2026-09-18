"use client";

import React, { useState } from "react";
import { aiCapabilities } from "@/entities/capability/model/data";
import { CapabilityCard } from "@/entities/capability/ui/capability-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { CapabilityCategory } from "@/entities/capability/model/types";
import { ShieldCheck, HardHat, Store, Car, Layers } from "lucide-react";

export function CapabilitiesSection() {
  const [activeCategory, setActiveCategory] = useState<CapabilityCategory | "all">("all");

  const categories = [
    { key: "all", label: "Semua Modul (24)", icon: Layers },
    { key: "security", label: "Keamanan & Akses", icon: ShieldCheck },
    { key: "safety", label: "K3 & Pabrik", icon: HardHat },
    { key: "business", label: "Ritel & Komersial", icon: Store },
    { key: "traffic", label: "Lalu Lintas & Parkir", icon: Car },
  ] as const;

  const filtered = activeCategory === "all"
    ? aiCapabilities
    : aiCapabilities.filter((c) => c.category === activeCategory);

  return (
    <section id="fitur" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeader
            badge="Katalog Kemampuan AI"
            title="24+ Solusi AI Vision Siap Pakai untuk Segala Kebutuhan"
            description="Setiap modul AI dapat diaktifkan atau dinonaktifkan per kamera sesuai kebutuhan spesifik titik lokasi Anda. Cukup sambungkan kamera yang ada, sistem langsung bekerja."
            className="mb-0"
          />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-[#B62C2C] text-white border-white/15 shadow-sm"
                    : "bg-[#12191D] text-[#C2D1D0] border-white/10 hover:border-white/20 hover:bg-[#1A2429] hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-10 p-6 rounded-xl bg-[#0E1518] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Butuh algoritma custom untuk industri Anda?</h4>
              <p className="text-xs text-[#8B9C9B]">Tim R&D Samtek dapat melatih model AI baru sesuai skenario unik operasional Anda.</p>
            </div>
          </div>
          <a
            href="#demo"
            className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#192429] hover:bg-[#202D33] text-white border border-white/15 hover:border-white/25 shadow-sm transition-colors shrink-0"
          >
            Konsultasikan Kebutuhan →
          </a>
        </div>
      </div>
    </section>
  );
}
