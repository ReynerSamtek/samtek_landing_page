import React from "react";
import { ComparisonRow } from "../model/data";
import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0D1316] overflow-hidden shadow-xl">
      {/* Table Header */}
      <div className="grid grid-cols-[1.1fr_1.4fr_1.2fr] bg-[#11181C] border-b border-white/[0.08] text-xs font-semibold">
        <div className="p-4 sm:p-5 text-[#8B9C9B] uppercase tracking-wider">
          Faktor Kritis
        </div>
        <div className="p-4 sm:p-5 text-white bg-[#141C21] border-x border-white/10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B62C2C]" />
          <span>SAMTEK (Edge On-Premise)</span>
        </div>
        <div className="p-4 sm:p-5 text-[#8B9C9B]">
          Solusi Cloud VMS Biasa
        </div>
      </div>

      {/* Table Rows */}
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-[1.1fr_1.4fr_1.2fr] border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.02] transition-colors text-xs sm:text-sm"
        >
          {/* Aspect Name */}
          <div className="p-4 sm:p-5 text-white font-medium flex items-center">
            {row.aspect}
          </div>

          {/* Samtek On-Prem Advantage */}
          <div className="p-4 sm:p-5 bg-[#0F161A] border-x border-white/10 text-[#E6F1F0] flex items-start gap-2.5 font-medium leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{row.onprem}</span>
          </div>

          {/* Cloud Drawback */}
          <div className="p-4 sm:p-5 text-[#8B9C9B] flex items-start gap-2.5 leading-relaxed">
            <XCircle className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
            <span>{row.cloud}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
