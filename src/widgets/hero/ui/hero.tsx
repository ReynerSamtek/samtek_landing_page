"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Video,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function Hero() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"demo" | "dashboard">("demo");
  return (
    <section className="relative overflow-hidden bg-[#06090A] pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-white/[0.08]">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B62C2C]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <Badge variant="muted" className="flex-1 px-3 py-2 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#8B9C9B]" />
              Solusi Edge AI Vision On-Premise Indonesia
            </Badge>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 text-balance">
            Ubah CCTV Biasa Menjadi{" "}
            <span className="text-[#B62C2C]">
              Sistem AI Vision Cerdas
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#8B9C9B] leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
            Tanpa perlu mengganti kamera yang sudah terpasang. Pemrosesan video
            100% on-premise di server lokal Anda — bebas biaya langganan cloud,
            tanpa latensi internet, dan data rahasia tidak pernah bocor ke luar.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-medium"
            >
              <a href="#demo" className="flex items-center justify-center gap-2">
                <span>Jadwalkan Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-medium"
            >
              <a href="#fitur" className="flex items-center justify-center gap-2">
                <Video className="w-4 h-4 text-[#8B9C9B]" />
                <span>Pelajari 24+ Modul AI</span>
              </a>
            </Button>
          </div>

          {/* Quick Value Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#C2D1D0]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B62C2C]" />
              Kompatibel Semua Brand CCTV
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0C6791]" />
              Zero Cloud Bandwidth Cost
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Deteksi Cepat &lt; 10ms
            </span>
          </div>
        </div>

        {/* Live VMS & Dashboard Showcase Console */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#090E11] shadow-2xl overflow-hidden">
          {/* Top Window Navigation Bar */}
          <div className="px-4 py-3 bg-[#0D1418] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="text-[#E6F1F0] font-medium hidden md:inline text-xs">
                SAMTEK Edge VMS Platform
              </span>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center bg-[#070B0D] p-1 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setActiveConsoleTab("demo")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  activeConsoleTab === "demo"
                    ? "bg-[#182328] text-white shadow-sm border border-white/15"
                    : "text-[#8B9C9B] hover:text-white"
                }`}
              >
                <Video className="w-3.5 h-3.5 text-[#B62C2C]" />
                <span>Live VMS & Deteksi AI</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveConsoleTab("dashboard")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  activeConsoleTab === "dashboard"
                    ? "bg-[#182328] text-white shadow-sm border border-white/15"
                    : "text-[#8B9C9B] hover:text-white"
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-[#0C6791]" />
                <span>Executive Dashboard</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-[#8B9C9B]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-[#C2D1D0]">
                {activeConsoleTab === "demo" ? "Multi-Channel Live Feed" : "Telemetry Active"}
              </span>
            </div>
          </div>

          {/* Screenshot Display Area */}
          <div className="relative bg-[#06090A] overflow-hidden">
            {activeConsoleTab === "demo" ? (
              <div className="relative aspect-[16/9] w-full bg-[#090E11]">
                <Image
                  src="/picture/demo.png"
                  alt="SAMTEK VMS Live Camera Layout & Object Detection Demo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full bg-[#090E11]">
                <Image
                  src="/picture/dashboard.png"
                  alt="SAMTEK Executive Analytics & K3 Incident Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            )}
          </div>

          {/* Bottom Bar Details */}
          <div className="px-4 sm:px-6 py-3 bg-[#0B1013] border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#8B9C9B]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">
                {activeConsoleTab === "demo" ? "Tampilan Antarmuka VMS:" : "Tampilan Dashboard Analitik:"}
              </span>
              <span>
                {activeConsoleTab === "demo"
                  ? "Streaming multi-channel CCTV dengan inferensi AI Edge & pelacakan objek lokal secara real-time."
                  : "Rekapitulasi kepatuhan APD/K3, tren insiden harian/mingguan, dan visualisasi summary deteksi."}
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#C2D1D0] shrink-0">
              100% On-Premise · Air-Gapped
            </div>
          </div>
        </div>

        {/* 4 Numerical Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-12 sm:mt-16">
          {siteConfig.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/15 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#B62C2C] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#8B9C9B]">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
