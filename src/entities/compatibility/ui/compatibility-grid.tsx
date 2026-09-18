import React from "react";
import { CheckCircle2, Cpu, Video, Network } from "lucide-react";

export function CompatibilityGrid() {
  const brands = [
    { name: "HIKVISION", desc: "IP Cam & NVR" },
    { name: "DAHUA", desc: "IP Cam & XVR" },
    { name: "AXIS", desc: "Enterprise Stream" },
    { name: "UNIVIEW", desc: "Uniview Series" },
    { name: "HANWHA", desc: "Wisenet Series" },
    { name: "BOSCH", desc: "Security Series" },
    { name: "CP PLUS", desc: "Indigo Series" },
    { name: "TIANDY", desc: "Starlight IP" },
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
              className="p-4 rounded-xl bg-[#0B1012] border border-white/[0.08] hover:border-white/20 text-center transition-colors"
            >
              <div className="text-xs font-bold font-mono tracking-wider text-white">
                {brand.name}
              </div>
              <div className="text-[10px] text-[#8B9C9B] mt-0.5">
                {brand.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
