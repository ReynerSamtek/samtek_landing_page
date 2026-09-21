import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/widgets/navbar/ui/navbar";
import { Footer } from "@/widgets/footer/ui/footer";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Cpu,
  Eye,
  Factory,
  Truck,
  Pickaxe,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About PT Safanah Alvan Maksima — SAMTEK",
  description:
    "Building smart surveillance systems with AI to power industrial transformation. Leading on-premise AI Vision solutions in Indonesia.",
};

export default function AboutPage() {
  const offerings = [
    {
      title: "Modular AI Vision Platform",
      desc: "Adaptable to various workflows across industries, offering real-time process automation and deep visual intelligence directly at the edge.",
      icon: Cpu,
    },
    {
      title: "Key Capabilities",
      items: [
        "Anomaly and defect detection",
        "Safety & compliance monitoring (PPE/K3)",
        "Production tracking & automated reporting",
        "Perimeter security & facial recognition",
      ],
      icon: Eye,
    },
  ];

  const industries = [
    {
      title: "Manufacturing",
      desc: "Automate visual quality inspection, detect defects in real-time, and monitor production lines to improve product consistency and reduce waste.",
      icon: Factory,
      tag: "Precision & Quality",
    },
    {
      title: "Logistics",
      desc: "Track vehicle movement, monitor loading areas, and improve warehouse efficiency with smart surveillance and anomaly detection systems.",
      icon: Truck,
      tag: "Fleet & Warehouse",
    },
    {
      title: "Mining",
      desc: "Enhance safety compliance by detecting helmet and vest usage, monitor hazardous zones, and reduce operational risks with intelligent alerts.",
      icon: Pickaxe,
      tag: "Safety & Hazard",
    },
    {
      title: "Agriculture",
      desc: "Monitor crop health, detect pest or disease presence early, and track equipment and worker activity to optimize farming operations.",
      icon: Sprout,
      tag: "Smart Agri",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#06090A] text-[#E6F1F0] selection:bg-[#B62C2C]/30 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 sm:pt-24 pb-16 px-4 sm:px-8 border-b border-white/[0.08]">
          {/* Ambient light glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0C6791]/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="muted" className="px-3.5 py-1.5 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#0C6791]" />
                Company Overview & Profile
              </Badge>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6F1F0] to-[#0C6791]">
                PT Safanah Alvan Maksima
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#8B9C9B] max-w-2xl mx-auto leading-relaxed">
              Building smart surveillance systems with AI to power industrial transformation.
            </p>
          </div>
        </section>

        {/* Company Profile Card */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 border-b border-white/[0.08] bg-[#080D0F]">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-[#0D1316] border border-white/[0.1] shadow-2xl hover:border-white/20 transition-all">
              {/* Corner brackets motif */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#B62C2C]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0C6791]" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 shadow-inner">
                  <Image
                    src="/picture/512x512.png"
                    alt="SAM Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-[#E6F1F0] leading-relaxed">
                    <strong className="text-white font-semibold">
                      PT Safanah Alvan Maksima
                    </strong>{" "}
                    is an Indonesian technology enterprise established in{" "}
                    <span className="font-mono text-[#0C6791] font-bold">2020</span>,
                    specializing in next-generation surveillance systems powered by Artificial
                    Intelligence.
                  </p>

                  <p className="text-sm sm:text-base text-[#8B9C9B] leading-relaxed">
                    In an era of rapid industrial transformation, we deliver intelligent, flexible, and
                    integrated edge AI Vision solutions that push automation forward — efficiently,
                    securely, and reliably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0C6791] mb-2 block">
                Capabilities & Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                What We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Modular Platform Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0C6791]/20 border border-[#0C6791]/40 flex items-center justify-center text-[#38bdf8] mb-5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {offerings[0].title}
                  </h3>
                  <p className="text-sm text-[#8B9C9B] leading-relaxed">
                    {offerings[0].desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#0C6791]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% On-Premise Edge Execution</span>
                </div>
              </div>

              {/* Key Capabilities Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#B62C2C]/20 border border-[#B62C2C]/40 flex items-center justify-center text-[#f87171] mb-5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {offerings[1].title}
                  </h3>
                  <ul className="space-y-2.5">
                    {offerings[1].items?.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C2D1D0]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0C6791] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#8B9C9B]">
                  <ShieldCheck className="w-4 h-4 text-[#0C6791]" />
                  <span>Enterprise Grade Precision & Latency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Empower */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-white/[0.08] bg-[#080D0F]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B62C2C] mb-2 block">
                Sectoral Transformation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Industries We Empower
              </h2>
              <p className="text-xs sm:text-sm text-[#8B9C9B] leading-relaxed">
                Our AI Vision platform is built to adapt across diverse industries, empowering
                automation, safety, and operational excellence in any environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={i}
                    className="group relative p-6 sm:p-7 rounded-2xl bg-[#0D1316] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E6F1F0] group-hover:text-white group-hover:border-white/20 transition-colors">
                          <Icon className="w-5 h-5 text-[#38bdf8]" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-[#8B9C9B] border border-white/10">
                          {ind.tag}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#E6F1F0] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8B9C9B] leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#06090A]">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0D1316] to-[#080D0F] border border-white/[0.12] text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Upgrade Your CCTV Infrastructure?
            </h2>
            <p className="text-xs sm:text-sm text-[#8B9C9B] max-w-xl mx-auto mb-8 leading-relaxed">
              Consult your facility&apos;s specific computer vision requirements directly with our senior engineering team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="primary" size="lg" className="font-semibold">
                <Link href="/#demo" className="flex items-center gap-2">
                  <span>Request Technical Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
