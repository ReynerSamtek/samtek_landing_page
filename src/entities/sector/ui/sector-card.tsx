import React from "react";
import { SectorItem } from "../model/data";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

interface SectorCardProps {
  sector: SectorItem;
}

export function SectorCard({ sector }: SectorCardProps) {
  return (
    <div className="group rounded-2xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60">
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#131B1F] text-[#C2D1D0] border border-white/10">
            {sector.category}
          </span>
          <span className="text-xs font-mono text-[#8B9C9B]">
            SECTOR {sector.id}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-[#E6F1F0] transition-colors">
          {sector.name}
        </h3>
        <div className="text-xs font-medium text-[#0C6791] mb-3">
          {sector.tagline}
        </div>
        <p className="text-xs sm:text-sm text-[#8B9C9B] leading-relaxed mb-6">
          {sector.desc}
        </p>

        {/* Business Impact Metric Box */}
        <div className="p-3.5 rounded-xl bg-[#090E11] border border-white/[0.06] mb-6 flex items-center justify-between">
          <div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
              {sector.impactMetric}
            </div>
            <div className="text-[11px] text-[#8B9C9B]">
              {sector.impactLabel}
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-emerald-400/50" />
        </div>

        {/* Use Cases List */}
        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
          <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">
            Frequently Deployed Modules:
          </div>
          {sector.usecases.map((uc, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-[#E6F1F0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B62C2C] shrink-0" />
              <span>{uc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06]">
        <a
          href="/#demo"
          className="text-xs font-medium text-[#0C6791] group-hover:text-[#38bdf8] flex items-center gap-1 transition-colors"
        >
          <span>Explore Architecture</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
