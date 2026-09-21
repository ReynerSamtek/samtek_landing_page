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
          <div className="w-9 h-9 rounded-lg bg-[#141C20] border border-white/10 flex items-center justify-center text-[#E6F1F0] group-hover:border-white/25 transition-colors">
            <IconComponent className="w-5 h-5 stroke-[1.8]" />
          </div>
          <span className="text-[11px] font-mono text-[#8B9C9B] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
            {capability.code}
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-semibold text-[#E6F1F0] group-hover:text-white transition-colors mb-1">
          {capability.name}
        </h3>

        <p className="text-xs text-[#8B9C9B] leading-relaxed">
          {capability.desc}
        </p>
      </div>
    </div>
  );
}
