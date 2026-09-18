"use client";

import React, { useState } from "react";
import { siteConfig } from "@/shared/config/site";
import { X, ShieldCheck } from "lucide-react";

export function StatusBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside
      aria-label="System status bar"
      className="w-full bg-[#090E10] border-b border-white/[0.06] text-xs text-[#8B9C9B] z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-[#0C6791] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{siteConfig.systemStatus.version}</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="flex items-center gap-2 text-[#C2D1D0]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {siteConfig.systemStatus.statusText}
          </span>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-[#8B9C9B] hover:text-white transition-colors p-1 rounded hover:bg-white/[0.05] cursor-pointer"
          aria-label="Tutup bar status"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
