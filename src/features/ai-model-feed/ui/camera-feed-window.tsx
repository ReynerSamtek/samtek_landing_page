"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiCapability } from "@/entities/capability/model/types";
import { Camera, AlertCircle } from "lucide-react";

interface CameraFeedWindowProps {
  capability: AiCapability;
}

export function CameraFeedWindow({ capability }: CameraFeedWindowProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const hasImagePath = Boolean(capability.image && capability.image.startsWith("/"));

  const colorClasses = {
    green: {
      border: "border-emerald-500",
      bg: "bg-emerald-500/10",
      badge: "bg-emerald-500 text-black font-mono",
      glow: "shadow-[0_0_12px_rgba(16,185,129,0.3)]",
    },
    red: {
      border: "border-red-500",
      bg: "bg-red-500/10",
      badge: "bg-red-600 text-white font-mono",
      glow: "shadow-[0_0_12px_rgba(239,68,68,0.3)]",
    },
    blue: {
      border: "border-cyan-400",
      bg: "bg-cyan-500/10",
      badge: "bg-cyan-500 text-black font-mono",
      glow: "shadow-[0_0_12px_rgba(6,182,212,0.3)]",
    },
    amber: {
      border: "border-amber-400",
      bg: "bg-amber-500/10",
      badge: "bg-amber-500 text-black font-mono",
      glow: "shadow-[0_0_12px_rgba(245,158,11,0.3)]",
    },
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-[#080D0F] shadow-2xl shadow-black/80 flex flex-col">
      {/* Window Top Bar: nama_kamera - ai_model */}
      <div className="px-4 py-3 bg-[#0D1518] border-b border-white/10 flex items-center justify-between text-xs text-[#8B9C9B]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold text-white/90 ml-2">
            CAM {capability.id} - {capability.name}
          </span>
        </div>
      </div>

      {/* Viewport Area */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#05080A] overflow-hidden select-none">
        {/* Real Image */}
        {hasImagePath && !imageFailed ? (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={capability.image!}
              alt={capability.name}
              fill
              className="object-cover"
              priority
              onError={() => setImageFailed(true)}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0B1215] to-[#05080A]">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-3">
                <Camera className="w-7 h-7 text-[#546867]" />
              </div>
              <span className="font-mono text-xs text-white/70 uppercase tracking-wider mb-1.5">
                Simulated Camera Feed
              </span>
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg max-w-sm">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Ready for: {capability.image}</span>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Object Detection Bounding Boxes */}
        {capability.detectionBoxes?.map((box, idx) => {
          const scheme = colorClasses[box.color || "green"];
          return (
            <div
              key={idx}
              className={`absolute z-20 pointer-events-none border-2 ${scheme.border} ${scheme.bg} ${scheme.glow}`}
              style={{
                top: box.top,
                left: box.left,
                width: box.width,
                height: box.height,
              }}
            >
              {/* Corner Bracket Accents */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white" />

              {/* Floating Confidence Tag */}
              <div
                className={`absolute -top-6 left-0 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-md ${scheme.badge}`}
              >
                <span>{box.label}</span>
                <span className="opacity-90">[{box.confidence}]</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

