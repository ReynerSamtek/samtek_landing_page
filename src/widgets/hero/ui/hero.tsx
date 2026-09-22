"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { GlobeLive } from "@/shared/ui/globe";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Video,
  LayoutDashboard,
} from "lucide-react";

export function Hero() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"video" | "demo" | "dashboard">("video");
  return (
    <section className="relative overflow-hidden bg-[#06090A] pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-white/[0.08]">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B62C2C]/5 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Background 3D Rotating Globe Animation on Left Side */}
      <div className="absolute left-0 -translate-x-1/2 top-[-60px] sm:top-[-100px] lg:top-[-140px] w-[800px] sm:w-[1050px] lg:w-[1250px] aspect-square pointer-events-none opacity-90 select-none z-10 rotate-[-30deg]">
        <GlobeLive className="w-full h-full" speed={0.002} />
      </div>

      <div className="max-w-7xl mx-auto relative z-30">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <Badge variant="muted" className="flex-1 px-3 py-2 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#8B9C9B]" />
              Enterprise On-Premise Edge AI Vision Solution
            </Badge>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 text-balance">
            Turn Existing CCTV into an{" "}
            <span className="text-[#B62C2C]">
              Intelligent AI Vision System
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#8B9C9B] leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
            No need to replace your installed cameras. 100% on-premise video
            processing on your local edge server — zero recurring cloud fees,
            sub-second neural latency, and zero risk of confidential footage leaving your building.
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
                <span>Schedule Live Demo</span>
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
                <span>Explore 24+ AI Modules</span>
              </a>
            </Button>
          </div>

          {/* Quick Value Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#C2D1D0]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B62C2C]" />
              Compatible with Any CCTV Brand
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0C6791]" />
              Zero Cloud Bandwidth Overhead
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Sub-10ms Real-Time Inference
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
                onClick={() => setActiveConsoleTab("video")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  activeConsoleTab === "video"
                    ? "bg-[#182328] text-white shadow-sm border border-white/15"
                    : "text-[#8B9C9B] hover:text-white"
                }`}
              >
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                <span>Video Demo</span>
              </button>
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
                <span>Live VMS & AI Vision</span>
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
                {activeConsoleTab === "video"
                  ? "Live Demo Recording"
                  : activeConsoleTab === "demo"
                  ? "Multi-Channel Live Feed"
                  : "Telemetry Active"}
              </span>
            </div>
          </div>

          {/* Media Display Area */}
          <div className="relative bg-[#06090A] overflow-hidden">
            {activeConsoleTab === "video" ? (
              <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
                <video
                  src="/video/video_demo.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            ) : activeConsoleTab === "demo" ? (
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
                {activeConsoleTab === "video"
                  ? "Live Demonstration:"
                  : activeConsoleTab === "demo"
                  ? "VMS Operator Interface:"
                  : "Analytics Dashboard:"}
              </span>
              <span>
                {activeConsoleTab === "video"
                  ? "Real-world footage demonstrating SAMTEK's high-speed computer vision detection across diverse environments."
                  : activeConsoleTab === "demo"
                  ? "Multi-channel CCTV streaming with on-device edge AI inference & local real-time object tracking."
                  : "PPE/safety compliance recaps, historical incident trends, and real-time operational KPI summaries."}
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#C2D1D0] shrink-0">
              100% On-Premise · Air-Gapped Ready
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
