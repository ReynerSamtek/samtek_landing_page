import React from "react";
import { CheckCircle2, Cpu, Video, Network } from "lucide-react";

export function CompatibilityGrid() {
  const brands = [
    {
      name: "HIKVISION",
      desc: "IP Cam & NVR",
      logo: "/picture/brands/hikvision.png",
    },
    {
      name: "DAHUA",
      desc: "IP Cam & XVR",
      logo: "/picture/brands/dahua.svg",
    },
    {
      name: "AXIS",
      desc: "Enterprise Stream",
      logo: "/picture/brands/axis.png",
    },
    {
      name: "UNIVIEW",
      desc: "Uniview Series",
      logo: "/picture/brands/uniview.png",
    },
    {
      name: "HANWHA",
      desc: "Wisenet Series",
      logo: "/picture/brands/hanwha.png",
    },
    {
      name: "BOSCH",
      desc: "Security Series",
      logo: "/picture/brands/bosch.png",
    },
    {
      name: "CP PLUS",
      desc: "Indigo Series",
      logo: "/picture/brands/cpplus.png",
    },
    {
      name: "TIANDY",
      desc: "Starlight IP",
      logo: "/picture/brands/tiandy.png",
    },
  ];

  const protocols = [
    {
      title: "ONVIF Profile S / T / G",
      desc: "Universal industry standard for video, audio, PTZ, and metadata telemetry.",
      icon: Network,
    },
    {
      title: "RTSP & RTMP Streaming",
      desc: "High-efficiency real-time video ingestion supporting H.264 & H.265 codecs.",
      icon: Video,
    },
    {
      title: "NVR / DVR Passthrough",
      desc: "Direct secondary stream decoding from installed video recorders.",
      icon: Cpu,
    },
    {
      title: "Generic IP & Webcams",
      desc: "Broadband HTTP/MJPEG streaming for specialized industrial optical sensors.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Brands Grid */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[#8B9C9B] mb-4 text-center sm:text-left">
          Verified Camera Brands:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col items-center justify-center text-center group min-h-[96px]"
            >
              <div className="h-10 w-full rounded-lg bg-white/95 border border-white/40 flex items-center justify-center mb-2 px-2 shadow-sm transition-all duration-200 group-hover:bg-white group-hover:shadow-md">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-7 max-w-[84px] object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-bold text-white font-mono tracking-tight leading-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#8B9C9B] font-mono leading-tight mt-0.5">
                {brand.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Protocols Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
        {protocols.map((proto, idx) => {
          const Icon = proto.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0B1013] border border-white/[0.06] flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#8B9C9B] shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-[#0C6791]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {proto.title}
                </h4>
                <p className="text-xs text-[#8B9C9B] leading-relaxed">
                  {proto.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
