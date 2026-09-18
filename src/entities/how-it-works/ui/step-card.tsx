import React from "react";

interface StepCardProps {
  step: {
    num: string;
    step: string;
    title: string;
    desc: string;
    badge: string;
  };
}

export function StepCard({ step }: StepCardProps) {
  return (
    <div className="relative bg-[#0D1316] border border-white/[0.08] hover:border-white/20 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl sm:text-3xl font-extrabold text-[#B62C2C] font-mono">
            {step.num}
          </span>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#121A1E] text-[#C2D1D0] border border-white/10">
            {step.badge}
          </span>
        </div>

        <div className="text-xs text-[#8B9C9B] font-mono mb-1">
          {step.step}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#E6F1F0] mb-2 leading-snug">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#8B9C9B] leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
