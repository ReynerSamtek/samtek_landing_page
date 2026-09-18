import React from "react";
import { AiCapability } from "../model/types";
import {
  ScanFace,
  UserCheck,
  HardHat,
  Car,
  ShieldAlert,
  Clock,
  Users,
  UserPlus,
  Truck,
  Flame,
  Activity,
  PackageX,
  Maximize,
  Footprints,
  AlertTriangle,
  Crosshair,
  Navigation,
  CircleParking,
  Gauge,
  CigaretteOff,
  TimerReset,
  TrendingUp,
  DoorClosed,
  MapPin,
  Camera,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ScanFace,
  UserCheck,
  HardHat,
  Car,
  ShieldAlert,
  Clock,
  Users,
  UserPlus,
  Truck,
  Flame,
  Activity,
  PackageX,
  Maximize,
  Footprints,
  AlertTriangle,
  Crosshair,
  Navigation,
  CircleParking,
  Gauge,
  CigaretteOff,
  TimerReset,
  TrendingUp,
  DoorClosed,
  MapPin,
};

interface CapabilityCardProps {
  capability: AiCapability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const IconComponent = capability.iconName
    ? iconMap[capability.iconName] || Camera
    : Camera;

  return (
    <div className="group relative bg-[#0D1316] border border-white/[0.08] hover:border-white/20 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/50 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3.5">
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#B62C2C] group-hover:bg-[#B62C2C]/15 group-hover:text-white group-hover:border-[#B62C2C]/40 transition-colors">
            <IconComponent className="w-5 h-5 stroke-[1.8]" />
          </div>
          <span className="text-[11px] font-mono text-[#8B9C9B] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
            {capability.code}
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-semibold text-[#E6F1F0] group-hover:text-white transition-colors mb-1">
          {capability.nameId}
        </h3>
        <p className="text-xs text-[#8B9C9B] font-mono mb-2 text-white/50">
          {capability.name}
        </p>

        <p className="text-xs text-[#8B9C9B] leading-relaxed">
          {capability.descId}
        </p>
      </div>

      {capability.featured && (
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
          <span className="text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Populer Dipakai
          </span>
          <span className="text-xs text-white/40 group-hover:text-white/80 transition-colors">
            Siap Pakai →
          </span>
        </div>
      )}
    </div>
  );
}
