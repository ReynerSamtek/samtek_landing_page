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
      className="w-full bg-[#0B1012] border-b border-white/[0.08] px-4 sm:px-8 py-1.5 text-xs text-[#8B9C9B] flex items-center justify-between flex-wrap gap-2 z-50"
    >
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <span className="flex items-center gap-1.5 text-[#0C6791] font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{siteConfig.systemStatus.version}</span>
        </span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="flex items-center gap-2 text-[#E6F1F0]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          {siteConfig.systemStatus.statusText}
        </span>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-[#8B9C9B] hover:text-white transition-colors p-0.5 ml-auto cursor-pointer"
        aria-label="Tutup bar status"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
