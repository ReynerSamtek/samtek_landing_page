"use client";

import React from "react";
import { siteConfig } from "@/shared/config/site";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  ShieldCheck,
  Video,
  Server,
  Zap,
  CheckCircle2,
  AlertCircle,
  Play,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-corporate-ambient pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-white/[0.08]">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="red" pulse className="px-3.5 py-1 text-xs">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Solusi Edge AI Vision Pertama di Indonesia
            </Badge>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
            Ubah CCTV Biasa Menjadi{" "}
            <span className="bg-gradient-to-r from-[#B62C2C] via-[#e54545] to-[#f87171] bg-clip-text text-transparent">
              Sistem AI Vision Cerdas
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#8B9C9B] leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
            Tanpa perlu mengganti kamera yang sudah terpasang. Pemrosesan video
            100% on-premise di server lokal Anda — bebas biaya langganan cloud,
            tanpa latensi internet, dan data rahasia tidak pernah bocor ke luar.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base font-semibold px-8 py-3.5 rounded-lg shadow-xl shadow-[#B62C2C]/25"
            >
              <a href="#demo" className="flex items-center justify-center gap-2">
                <span>Jadwalkan Live Demo On-Site</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base font-semibold px-6 py-3.5 rounded-lg"
            >
              <a href="#fitur" className="flex items-center justify-center gap-2">
                <Video className="w-4 h-4 text-[#0C6791]" />
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
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/15 bg-[#090E11] shadow-2xl shadow-black/80 overflow-hidden">
          {/* Top Window Navigation Bar */}
          <div className="px-4 py-3 bg-[#0D1418] border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-[#E6F1F0] font-medium font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SAMTEK Edge Console v2.4 · Multi-Channel Stream
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#8B9C9B]">
              <span className="hidden md:inline text-[11px]">MODE: AIR-GAPPED ON-PREM</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-[#0C6791]/20 text-[#7ec6ea] border border-[#0C6791]/40 font-semibold">
                LOCAL INFERENCE ACTIVE
              </span>
            </div>
          </div>

          {/* Console Content: CCTV Feeds Grid + Live Detection Log */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] bg-[#06090A]">
            {/* Left: Simulated Multi-Camera Grid with Visual Detection Overlays */}
            <div className="p-4 sm:p-5 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              {/* Primary Stream: Lobby & Entrance with Face Recognition */}
              <div className="relative aspect-[16/10] bg-[#0B1012] rounded-xl border border-white/10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none" />

                {/* Simulated CCTV Camera View Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg viewBox="0 0 400 250" className="w-full h-full stroke-white/20 fill-none" strokeWidth="1">
                    <line x1="0" y1="200" x2="400" y2="200" />
                    <line x1="100" y1="120" x2="0" y2="250" />
                    <line x1="300" y1="120" x2="400" y2="250" />
                    {/* Entrance door frame */}
                    <rect x="140" y="70" width="120" height="130" stroke="rgba(255,255,255,0.2)" />
                  </svg>
                </div>

                {/* Face Bounding Box Reticle */}
                <div className="absolute top-[28%] left-[44%] w-[22%] aspect-square border-2 border-[#B62C2C] rounded z-20 shadow-lg shadow-[#B62C2C]/30 animate-pulse">
                  <div className="absolute -top-6 left-0 bg-[#B62C2C] text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold whitespace-nowrap shadow">
                    MATCH: VIP GUEST (98.4%)
                  </div>
                  <div className="absolute -bottom-5 left-0 text-[10px] font-mono text-white/90 bg-black/70 px-1.5 py-0.5 rounded whitespace-nowrap">
                    Bpk. Hendra Pratama
                  </div>
                </div>

                {/* Second Bounding Box: PPE Detection on Guard */}
                <div className="absolute top-[42%] left-[16%] w-[16%] h-[35%] border border-[#0C6791] rounded z-20">
                  <div className="absolute -top-5 left-0 bg-[#0C6791] text-white text-[9px] font-mono px-1.5 py-0.5 rounded whitespace-nowrap">
                    APD LENGKAP ✓
                  </div>
                </div>

                {/* Camera OSD Overlays */}
                <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur px-2.5 py-1 rounded text-white text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#B62C2C] animate-ping" />
                    <span>CAM-01 · LOBBY UTAMA</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[#8B9C9B] text-[11px]">
                    FPS: 30 · 1080p H.265
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-[#8B9C9B]">
                  <span>LATENSI: 4.2ms (EDGE NPU)</span>
                  <span className="text-emerald-400 font-sans font-medium">● 2 Objek Terdeteksi</span>
                </div>
              </div>

              {/* Secondary Camera Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-video bg-[#0B1012] rounded-lg border border-white/10 p-2 relative flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] font-mono text-[#8B9C9B] z-10">CAM-02 · GERBANG PARKIR</span>
                  <div className="text-[10px] font-mono text-emerald-400 bg-black/70 px-1 py-0.5 rounded self-start z-10">
                    PLAT: B 1945 SAM
                  </div>
                </div>
                <div className="aspect-video bg-[#0B1012] rounded-lg border border-white/10 p-2 relative flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] font-mono text-[#8B9C9B] z-10">CAM-03 · GUDANG LOGISTIK</span>
                  <div className="text-[10px] font-mono text-[#0C6791] bg-black/70 px-1 py-0.5 rounded self-start z-10">
                    AREA AMAN (0 PENYUSUP)
                  </div>
                </div>
                <div className="aspect-video bg-[#0B1012] rounded-lg border border-white/10 p-2 relative flex flex-col justify-between overflow-hidden">
                  <span className="text-[10px] font-mono text-[#8B9C9B] z-10">CAM-04 · JALUR PRODUKSI</span>
                  <div className="text-[10px] font-mono text-[#B62C2C] bg-black/70 px-1 py-0.5 rounded self-start z-10">
                    K3: APD TERVERIFIKASI
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real-time Event Feed Log */}
            <div className="p-4 sm:p-5 flex flex-col justify-between bg-[#0B1012]/60">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#B62C2C]" />
                    Live Event Trigger (Real-Time)
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-mono">AKTIF</span>
                </div>

                {/* Event stream items */}
                <div className="flex flex-col gap-2.5">
                  <div className="p-2.5 rounded-lg bg-[#0D1519] border-l-2 border-[#B62C2C] text-xs">
                    <div className="flex items-center justify-between text-[#8B9C9B] font-mono text-[10px] mb-1">
                      <span>12:38:15 · CAM-01</span>
                      <span className="text-[#B62C2C] font-semibold">VIP FACE MATCH</span>
                    </div>
                    <div className="text-[#E6F1F0] font-medium">
                      Bpk. Hendra Pratama terdeteksi di Pintu Masuk
                    </div>
                    <div className="text-[11px] text-[#8B9C9B] mt-0.5">
                      Status: Diterima · Notifikasi dikirim ke Staff Resepsionis
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0D1519] border-l-2 border-emerald-500 text-xs">
                    <div className="flex items-center justify-between text-[#8B9C9B] font-mono text-[10px] mb-1">
                      <span>12:37:50 · CAM-02</span>
                      <span className="text-emerald-400 font-semibold">ANPR AKSES</span>
                    </div>
                    <div className="text-[#E6F1F0] font-medium">
                      Plat Nomor [B 1945 SAM] terdaftar
                    </div>
                    <div className="text-[11px] text-[#8B9C9B] mt-0.5">
                      Palang otomatis dibuka · Catatan log disimpan di server
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0D1519] border-l-2 border-[#0C6791] text-xs">
                    <div className="flex items-center justify-between text-[#8B9C9B] font-mono text-[10px] mb-1">
                      <span>12:36:20 · CAM-04</span>
                      <span className="text-[#7ec6ea] font-semibold">AUDIT K3</span>
                    </div>
                    <div className="text-[#E6F1F0] font-medium">
                      12 dari 12 Pekerja mengenakan Helm K3
                    </div>
                    <div className="text-[11px] text-[#8B9C9B] mt-0.5">
                      Tingkat Kepatuhan: 100% · Laporan shift otomatis diperbarui
                    </div>
                  </div>
                </div>
              </div>

              {/* Hardware Status Strip */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] font-mono text-[#8B9C9B] flex items-center justify-between">
                <span>LOCAL EDGE BOX: 38°C</span>
                <span className="text-white">CPU 18% · GPU 42%</span>
                <span className="text-emerald-400">STATUS: OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Numerical Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16">
          {siteConfig.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#B62C2C] mb-1 tracking-tight">
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
