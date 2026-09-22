"use client";

import React, { useEffect, useState } from "react";
import { Camera, Cpu, BrainCircuit, BellRing, ArrowRight, CheckCircle2 } from "lucide-react";
import { AiCapability } from "@/entities/capability/model/types";

interface ModelWorkflowPipelineProps {
  capability: AiCapability;
}

export function ModelWorkflowPipeline({ capability }: ModelWorkflowPipelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "RTSP Camera Feed",
      subtitle: "IP Camera Video Stream",
      description:
        "Your existing RTSP / ONVIF IP camera streams high-definition video over your local Gigabit LAN without requiring internet connectivity.",
      icon: Camera,
      tag: "1080p / 4K @ 25-30 FPS",
    },
    {
      num: "02",
      title: "SAMTEK Edge Box",
      subtitle: "On-Premise Ingestion",
      description:
        "The on-site edge unit ingests the uncompressed frames with zero cloud roundtrip, maintaining sub-15ms processing latency and absolute data sovereignty.",
      icon: Cpu,
      tag: "Zero Cloud Bandwidth",
    },
    {
      num: "03",
      title: `${capability.name} AI`,
      subtitle: "Neural Inference Engine",
      description: `Optimized TensorRT neural network analyzes incoming frames specifically for ${capability.name.toLowerCase()} triggers with high precision and low false positives.`,
      icon: BrainCircuit,
      tag: "TensorRT FP16 / <15ms",
    },
    {
      num: "04",
      title: "VMS Alert & Analytics",
      subtitle: "Action & Automated Reports",
      description:
        "The VMS console dispatches immediate push alerts to security tablets, triggers dry-contact access relays, and generates timestamped compliance reports.",
      icon: BellRing,
      tag: "Instant Webhooks & Telemetry",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full rounded-2xl bg-[#090E11] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-64 h-40 bg-[#B62C2C]/10 blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${(activeStep / (steps.length - 1)) * 80 + 10}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8B9C9B] mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PIPELINE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            How {capability.name} Processes Data on the Edge
          </h3>
        </div>
        <div className="text-xs font-mono text-[#8B9C9B]">
          Step {activeStep + 1} of {steps.length} Active
        </div>
      </div>

      {/* Interactive Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-[#111B1F] border-[#B62C2C]/60 shadow-lg shadow-[#B62C2C]/10 scale-[1.02]"
                  : "bg-[#0C1215] border-white/[0.08] hover:border-white/20 hover:bg-[#0F171A]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-[#B62C2C] text-white"
                        : "bg-white/[0.05] text-[#8B9C9B]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${
                      isActive
                        ? "bg-[#B62C2C]/20 text-white font-semibold border border-[#B62C2C]/40"
                        : "bg-white/[0.04] text-[#8B9C9B] border border-white/[0.06]"
                    }`}
                  >
                    {step.num}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-cyan-400 font-mono mb-2.5">
                  {step.subtitle}
                </p>
                <p className="text-xs text-[#8B9C9B] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8B9C9B]">
                <span>{step.tag}</span>
                {isActive && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

