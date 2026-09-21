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
      desc: "Standar universal industri untuk kendali video, audio, dan metadata.",
      icon: Network,
    },
    {
      title: "RTSP & RTMP Streaming",
      desc: "Menerima aliran video real-time dengan kompresi hemat H.264 & H.265.",
      icon: Video,
    },
    {
      title: "NVR / DVR Passthrough",
      desc: "Ambil feed langsung dari recorder pusat tanpa mengganggu sistem monitor.",
      icon: Cpu,
    },
    {
      title: "Generic IP Camera",
      desc: "Kompatibel dengan segala jenis kamera IP lokal yang memiliki alamat IP dan stream URL.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-10">
      {/* 4 Protocol Support Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {protocols.map((proto, idx) => {
          const Icon = proto.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#141C20] border border-white/10 flex items-center justify-center text-white mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {proto.title}
                </h4>
                <p className="text-xs text-[#8B9C9B] leading-relaxed">
                  {proto.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Kompatibel & Teruji</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Brand Logos / Text Badge Grid */}
      <div>
        <div className="text-center text-xs font-mono uppercase tracking-widest text-[#8B9C9B] mb-4">
          Didukung Penuh untuk Berbagai Merek Kamera & NVR Dunia
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, i) => (
            <div
              key={i}
              title={`${brand.name} · ${brand.desc}`}
              className="group relative p-2.5 rounded-xl bg-[#0B1012] border border-white/[0.08] hover:border-white/20 hover:bg-[#10171A] text-center transition-all duration-200 flex flex-col items-center justify-center min-h-[96px]"
            >
              <div className="w-full h-11 bg-white rounded-lg px-2.5 py-1.5 flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-[0.96]">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-7 max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mt-1.5 text-[10px] text-[#C2D1D0] font-medium leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-200 truncate w-full px-1">
                {brand.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
