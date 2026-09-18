"use client";

import React from "react";
import { siteConfig } from "@/shared/config/site";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Video,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06090A] pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-white/[0.08]">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B62C2C]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <Badge variant="muted" className="px-3 py-1 text-xs">
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

        {/* Live VMS Interactive Surveillance Console Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-[#090E11] shadow-2xl overflow-hidden">
          {/* Top Window Navigation Bar */}
          <div className="px-4 py-3 bg-[#0D1418] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="text-[#E6F1F0] font-medium font-sans flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                SAMTEK Edge Console v2.4 · Multi-Channel Stream
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#8B9C9B]">
              <span className="hidden md:inline text-[11px]">MODE: AIR-GAPPED ON-PREM</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/[0.05] text-[#C2D1D0] border border-white/10 font-sans">
                Local Inference Active
              </span>
            </div>
          </div>

          {/* Console Content: CCTV Feeds Grid + Live Detection Log */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] bg-[#06090A]">
            {/* Left: Multi-Camera Grid with Visual Detection Overlays */}
            <div className="p-4 sm:p-5 flex flex-col gap-3.5 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              {/* Primary Stream: Lobby & Entrance */}
              <div className="relative aspect-[16/10] bg-[#0B1012] rounded-lg border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none" />

                {/* CCTV Camera Background Graphic */}
                <div className="absolute inset-0 flex items-center justify-center opacity-25">
                  <svg viewBox="0 0 400 250" className="w-full h-full stroke-white/20 fill-none" strokeWidth="1">
                    <line x1="0" y1="200" x2="400" y2="200" />
                    <line x1="100" y1="120" x2="0" y2="250" />
                    <line x1="300" y1="120" x2="400" y2="250" />
                    <rect x="140" y="70" width="120" height="130" stroke="rgba(255,255,255,0.2)" />
                  </svg>
                </div>

                {/* Clean Professional Target Bounding Box */}
                <div className="absolute top-[28%] left-[44%] w-[22%] aspect-square border border-white/40 bg-black/30 rounded z-20 shadow-sm">
                  <div className="absolute -top-5 left-0 bg-[#B62C2C] text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                    VIP GUEST · 98.4%
                  </div>
                  <div className="absolute -bottom-5 left-0 text-[10px] text-white/95 bg-[#090E11]/90 border border-white/10 px-2 py-0.5 rounded whitespace-nowrap">
                    Bpk. Hendra Pratama
                  </div>
                </div>

                {/* Second Target Box: PPE Detection */}
                <div className="absolute top-[42%] left-[16%] w-[16%] h-[35%] border border-white/35 bg-black/30 rounded z-20 shadow-sm">
                  <div className="absolute -top-5 left-0 bg-[#0C6791] text-white text-[9px] font-medium px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
                    APD Terverifikasi ✓
                  </div>
                </div>

                {/* Camera OSD Overlays */}
                <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 bg-black/70 backdrop-blur px-2.5 py-1 rounded text-white text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B62C2C]" />
                    <span>CAM-01 · LOBBY UTAMA</span>
                  </div>
                  <div className="bg-black/70 backdrop-blur px-2 py-1 rounded text-[#8B9C9B] text-[11px] font-mono">
                    30 FPS · H.265
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] text-[#8B9C9B]">
                  <span>Latensi: 4.2ms (Edge NPU)</span>
                  <span className="text-emerald-400 font-medium">● 2 Objek Terdeteksi</span>
                </div>
              </div>

              {/* Secondary Camera Thumbnails */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="aspect-video bg-[#0B1012] rounded-md border border-white/10 p-2 relative flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] text-[#8B9C9B]">CAM-02 · GERBANG</span>
                  <div className="text-[10px] font-mono text-emerald-400 bg-black/80 px-1 py-0.5 rounded self-start">
                    B 1945 SAM
                  </div>
                </div>
                <div className="aspect-video bg-[#0B1012] rounded-md border border-white/10 p-2 relative flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] text-[#8B9C9B]">CAM-03 · GUDANG</span>
                  <div className="text-[10px] text-[#7ec6ea] bg-black/80 px-1 py-0.5 rounded self-start">
                    Area Aman
                  </div>
                </div>
                <div className="aspect-video bg-[#0B1012] rounded-md border border-white/10 p-2 relative flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] text-[#8B9C9B]">CAM-04 · PABRIK</span>
                  <div className="text-[10px] text-[#fca5a5] bg-black/80 px-1 py-0.5 rounded self-start">
                    APD Terverifikasi
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real-time Event Feed Log */}
            <div className="p-4 sm:p-5 flex flex-col justify-between bg-[#0B1012]/60">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#B62C2C]" />
                    Notifikasi Deteksi Terkini
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-medium">REAL-TIME</span>
                </div>

                {/* Event stream items */}
                <div className="flex flex-col gap-2">
                  <div className="p-3 rounded-lg bg-[#0E1518] border border-white/[0.08] text-xs">
                    <div className="flex items-center justify-between text-[#8B9C9B] text-[10px] mb-1">
                      <span>12:38:15 · CAM-01</span>
                      <span className="text-white font-medium bg-[#B62C2C] px-1.5 py-0.5 rounded text-[9px] tracking-wide">
                        VIP MATCH
                      </span>
                    </div>
                    <div className="text-white font-medium">
                      Bpk. Hendra Pratama di Pintu Masuk
                    </div>
                    <div className="text-[11px] text-[#8B9C9B] mt-0.5">
                      Notifikasi otomatis dikirim ke Resepsionis
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E1518] border border-white/[0.08] text-xs">
                    <div className="flex items-center justify-between text-[#8B9C9B] text-[10px] mb-1">
                      <span>12:37:50 · CAM-02</span>
                      <span className="text-white font-medium bg-emerald-700 px-1.5 py-0.5 rounded text-[9px] tracking-wide">
                        ANPR AKSES
                      </span>
                    </div>
                    <div className="text-white font-medium">
                      Plat [B 1945 SAM] terdaftar
                    </div>
                    <div className="text-[11px] text-[#8B9C9B] mt-0.5">
                      Palang otomatis terbuka
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E1518] border border-white/[0.08] text-xs">
                    <div className="flex items-center justify-between text-[#8B9C9B] text-[10px] mb-1">
                      <span>12:36:20 · CAM-04</span>
                      <span className="text-white font-medium bg-[#0C6791] px-1.5 py-0.5 rounded text-[9px] tracking-wide">
                        AUDIT K3
                      </span>
                    </div>
                    <div className="text-white font-medium">
                      12/12 Pekerja mengenakan Helm K3
                    </div>
                    <div className="text-[11px] text-[#8B9C9B] mt-0.5">
                      Kepatuhan 100% · Laporan shift tersimpan
                    </div>
                  </div>
                </div>
              </div>

              {/* Hardware Status Strip */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-[#8B9C9B] flex items-center justify-between">
                <span>Edge Box: 38°C</span>
                <span className="text-white">CPU 18% · GPU 42%</span>
                <span className="text-emerald-400">Status: Optimal</span>
              </div>
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
