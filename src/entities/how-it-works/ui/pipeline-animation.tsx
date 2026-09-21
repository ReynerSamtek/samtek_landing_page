"use client";

import React, { useEffect, useState } from "react";
import { Camera, Cpu, BrainCircuit, LayoutDashboard } from "lucide-react";

interface PipelineStep {
  id: number;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: PipelineStep[] = [
  {
    id: 0,
    label: "CCTV Camera",
    sub: "RTSP / ONVIF stream",
    icon: Camera,
  },
  {
    id: 1,
    label: "SmartBox Edge",
    sub: "Edge local computing",
    icon: Cpu,
  },
  {
    id: 2,
    label: "AI Engine",
    sub: "Real-time inference",
    icon: BrainCircuit,
  },
  {
    id: 3,
    label: "VMS Dashboard",
    sub: "Instant alerts & view",
    icon: LayoutDashboard,
  },
];

export function PipelineAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mb-12 sm:mb-16 p-6 sm:p-10 rounded-2xl bg-[#0A0F12] border border-white/[0.1] shadow-2xl relative overflow-hidden">
      {/* Subtle ambient beam under active step */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-48 h-32 bg-[#0C6791]/15 blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${(activeStep / (steps.length - 1)) * 80 + 10}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <React.Fragment key={s.id}>
              {/* Step Node */}
              <div
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center text-center cursor-pointer group flex-1"
              >
                {/* Icon Box */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative ${
                    isActive
                      ? "bg-[#0C6791]/25 border-2 border-[#0C6791] text-white shadow-[0_0_24px_rgba(12,103,145,0.45)] scale-110"
                      : isPassed
                      ? "bg-[#0D1316] border border-white/20 text-[#C2D1D0]"
                      : "bg-[#0D1316]/60 border border-white/10 text-[#8B9C9B]/60"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                      isActive ? "text-[#E6F1F0]" : "text-[#8B9C9B]"
                    }`}
                  />
                  {isActive && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0C6791] opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38bdf8]" />
                    </span>
                  )}
                </div>

                {/* Node Labels */}
                <div className="mt-3.5 space-y-0.5">
                  <p
                    className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#C2D1D0]"
                    }`}
                  >
                    {s.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#8B9C9B] font-mono">
                    {s.sub}
                  </p>
                </div>
              </div>

              {/* Connecting Data Line (aligned with the center of the icon box) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center flex-1 max-w-[90px] relative -translate-y-5 sm:-translate-y-6">
                  <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
                    {/* Animated moving packet */}
                    {activeStep === idx && (
                      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#38bdf8] to-[#0C6791] animate-[movePacket_1.2s_ease-in-out_infinite]" />
                    )}
                    {isPassed && (
                      <div className="absolute inset-0 bg-[#0C6791]/60" />
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes movePacket {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}

