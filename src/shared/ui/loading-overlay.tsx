"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // When client-side React hydration finishes, fade out quickly
    const timer = setTimeout(() => {
      setMounted(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  if (mounted) return null;

  return (
    <div
      id="global-page-loader"
      className="fixed inset-0 z-[99999] bg-[#06090A] flex flex-col items-center justify-center transition-opacity duration-300 ease-out"
      style={{ opacity: mounted ? 0 : 1, pointerEvents: mounted ? "none" : "all" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-[#0D1316] border border-white/15 flex items-center justify-center shadow-2xl p-2.5">
            <Image
              src="/picture/512x512.png"
              alt="SAMTEK"
              width={48}
              height={48}
              className="w-full h-full object-contain animate-pulse"
              priority
            />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#8B9C9B]">
          <span className="w-2 h-2 rounded-full bg-[#0C6791] animate-ping" />
          <span>INITIALIZING SAMTEK EDGE VMS...</span>
        </div>
      </div>
    </div>
  );
}

