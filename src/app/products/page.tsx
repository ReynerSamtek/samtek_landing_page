import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/widgets/navbar/ui/navbar";
import { Footer } from "@/widgets/footer/ui/footer";
import { Button } from "@/shared/ui/button";
import {
  LayoutDashboard,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  Server,
  Lock,
  ChevronRight,
  BarChart3,
  BellRing,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Platform Ecosystem — SAMTEK",
  description:
    "Explore the SAMTEK On-Premise Edge AI surveillance ecosystem: SmartBox edge servers, Centralized VMS Dashboard, and 24+ AI Computer Vision Analytics modules.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#06090A] text-[#E6F1F0] selection:bg-[#B62C2C]/30 selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Breadcrumb & Hero Header */}
        <section className="pt-10 pb-16 px-4 sm:px-8 border-b border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#B62C2C]/10 via-[#0C6791]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-[#8B9C9B] mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white font-medium">Products</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8B9C9B] mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>INTEGRATED HARDWARE & SOFTWARE ECOSYSTEM</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Edge AI Hardware & Intelligence Software Built to Scale
              </h1>
              <p className="text-sm sm:text-base text-[#8B9C9B] leading-relaxed">
                Seamlessly unify your physical camera infrastructure with high-performance edge compute units, central management dashboards, and specialized neural vision algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: DASHBOARD */}
        <section id="dashboard" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8B9C9B] mb-3">
                <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" />
                <span>UNIFIED VMS INTERFACE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Manage Your Surveillance System from One Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-[#8B9C9B] leading-relaxed">
                Monitor, analyze, and act — all in one place. Our Dashboard brings your entire surveillance system into a single, unified interface.
              </p>
            </div>

            {/* Dashboard Visual Frame */}
            <div className="relative rounded-2xl border border-white/15 bg-[#090E11] p-2 sm:p-4 shadow-2xl shadow-black/90 overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0C6791]/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-[#06090A]">
                <Image
                  src="/picture/dashboard.png"
                  alt="SAMTEK Surveillance Management Dashboard"
                  fill
                  className="object-contain sm:object-cover"
                  priority
                />
              </div>
            </div>

            {/* Dashboard Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Daily, Weekly & Monthly Analytics
                </h3>
                <p className="text-xs text-[#8B9C9B] leading-relaxed">
                  Interactive trend graphs categorizing incidents, PPE violations, perimeter intrusions, and footfall counts across your entire camera fleet.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 mb-4">
                  <BellRing className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Instant Event Notifications
                </h3>
                <p className="text-xs text-[#8B9C9B] leading-relaxed">
                  Real-time popup alerts and webhook triggers dispatching immediate notifications to on-site security personnel tablets, WhatsApp, and Telegram.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#B62C2C] mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Server & Stream Telemetry
                </h3>
                <p className="text-xs text-[#8B9C9B] leading-relaxed">
                  Active monitoring of edge appliance CPU/GPU load, RAM utilization, stream FPS, and local storage retention without third-party agent tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: AI ANALYTICS */}
        <section id="ai-analytics" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08] bg-[#080D0F]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8B9C9B]">
                  <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                  <span>COMPUTER VISION MODELS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Supercharge Your Surveillance with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    AI Analytics
                  </span>
                </h2>

                <p className="text-sm text-[#8B9C9B] leading-relaxed">
                  Whether you need smarter surveillance, real-time alerts, or intelligent insights, our custom AI solutions are built to fit your exact operational needs.
                </p>

                {/* Pill capabilities */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-white/90">
                    Detection
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-white/90">
                    Recognition
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-white/90">
                    Tracking
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button asChild variant="primary" size="md">
                    <Link href="/#fitur" className="flex items-center justify-center gap-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <a
                    href="/#demo"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#141C20] hover:bg-[#1A2429] text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all text-center"
                  >
                    <span>Request Demo</span>
                  </a>
                </div>
              </div>

              {/* Right Media: Video Demo */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl border border-white/15 bg-[#06090A] shadow-2xl shadow-black/90 overflow-hidden">
                  <video
                    src="/video/video_demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full aspect-[16/9] object-cover"
                  />

                  {/* Bottom bar inside video player */}
                  <div className="px-4 py-2.5 bg-[#0B1113] border-t border-white/10 flex items-center justify-between text-xs text-[#8B9C9B] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-white/80">LIVE MODEL INFERENCE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">&lt;12ms Latency</span>
                      <span>|</span>
                      <span>On-Premise TensorRT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SMARTBOX */}
        <section id="smartbox" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8B9C9B]">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ON-PREMISE EDGE HARDWARE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SmartBox</span>, Your Connected Companion
                </h2>

                <p className="text-sm text-[#8B9C9B] leading-relaxed">
                  Designed for modern surveillance, SmartBox is an edge AI server that enables real-time detection, object tracking, and event alerts.
                </p>

                {/* Specs Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#0C1215] border border-white/[0.08]">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span>ENERGY EFFICIENT</span>
                    </div>
                    <div className="text-xs text-[#8B9C9B]">
                      Low power consumption (&lt;35W TDP) for continuous 24/7 industrial uptime.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0C1215] border border-white/[0.08]">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                      <Lock className="w-3.5 h-3.5" />
                      <span>100% AIR-GAPPED</span>
                    </div>
                    <div className="text-xs text-[#8B9C9B]">
                      Operates fully on local LAN without requiring public cloud exposure.
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button asChild variant="primary" size="md">
                    <Link href="/#fitur" className="flex items-center justify-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <a
                    href="/#demo"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#141C20] hover:bg-[#1A2429] text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all text-center"
                  >
                    <span>Try Demo</span>
                  </a>
                </div>
              </div>

              {/* Right Image: SmartBox */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden p-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-radial from-cyan-500/10 via-transparent to-transparent blur-2xl pointer-events-none" />
                  <Image
                    src="/picture/smartbox.png"
                    alt="SAMTEK SmartBox Edge Server"
                    width={520}
                    height={520}
                    className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 px-4 sm:px-8 bg-[#090E11]">
          <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0E161A] to-[#121E23] border border-white/15 text-center flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Ready to Upgrade Your Surveillance System?
            </h3>
            <p className="text-xs sm:text-sm text-[#8B9C9B] max-w-2xl mb-6">
              Connect your existing CCTV cameras to SAMTEK SmartBox and unlock real-time edge AI computer vision analytics today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <a href="/#demo" className="flex items-center gap-2">
                  <span>Schedule an On-Premise Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium border border-white/10 transition-colors"
              >
                About PT Safanah Alvan Maksima
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
