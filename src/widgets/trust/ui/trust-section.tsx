import React from "react";
import { SectionHeader } from "@/shared/ui/section-header";
import { Building2, Factory, Landmark, Truck, ShoppingBag, Shield } from "lucide-react";

export function TrustSection() {
  const deployments = [
    {
      title: "Manufacturing & Industrial Lines",
      desc: "Automated PPE checks and zone safety enforced on every line, every shift.",
      icon: Factory,
      image: "/picture/places/pabrik.jpg",
    },
    {
      title: "Logistics Hubs & Warehousing",
      desc: "Count pallets, monitor forklifts, and inspect loading docks in real time.",
      icon: Truck,
      image: "/picture/places/warehouse.jpg",
    },
    {
      title: "Retail Stores & Shopping Malls",
      desc: "Mitigate inventory shrinkage and count footfall without adding guard headcount.",
      icon: ShoppingBag,
      image: "/picture/places/mall.jpg",
    },
    {
      title: "Commercial Towers & Public Sites",
      desc: "Helmets, high-vis vests, and site access verified automatically all day.",
      icon: Building2,
      image: "/picture/places/gedung.jpg",
    },
    {
      title: "Critical Infrastructure & Energy",
      desc: "Intrusion perimeter alerts and PPE compliance in zones that cannot afford a miss.",
      icon: Shield,
      image: "/picture/places/objek vital nasional.jpg",
    },
    {
      title: "Banking & Corporate Offices",
      desc: "Facial verification at access portals — no badges, no bottleneck queues.",
      icon: Landmark,
      image: "/picture/places/bank.jpg",
    },
  ];

  const partnerLogos = [
    { src: "/picture/partners/1.webp", alt: "Partner Blibli" },
    { src: "/picture/partners/2.webp", alt: "Partner CCT" },
    { src: "/picture/partners/3.webp", alt: "Partner ICON+" },
    { src: "/picture/partners/4.webp", alt: "Partner United Tractors" },
    { src: "/picture/partners/5.webp", alt: "Partner GYS" },
    { src: "/picture/partners/6.webp", alt: "Partner 6" },
    { src: "/picture/partners/7.webp", alt: "Partner 7" },
    { src: "/picture/partners/8.webp", alt: "Partner 8" },
    { src: "/picture/partners/9.webp", alt: "Partner 9" },
    { src: "/picture/partners/10.webp", alt: "Partner 10" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          align="center"
          badge="Deployment & Scalability"
          title="Battle-Tested for Enterprise-Scale Surveillance"
          description="SAMTEK SmartBox adapts to diverse operational environments with specialized AI vision models and detection rules."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {deployments.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0D1316] transition-all duration-300 hover:border-white/25 hover:shadow-xl"
              >
                {/* Background Image */}
                <img
                  src={d.image}
                  alt={d.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090A] via-[#06090A]/75 to-black/35" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  {/* Icon Badge */}
                  <div className="w-9 h-9 rounded-lg bg-[#0C6791]/30 border border-[#0C6791]/50 backdrop-blur-md flex items-center justify-center text-[#E6F1F0] shadow-md mb-3 group-hover:bg-[#0C6791]/50 group-hover:border-[#0C6791]/70 transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-1.5 leading-snug">
                    {d.title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-[13px] text-[#C2D1D0] leading-relaxed line-clamp-2">
                    {d.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted by Industry Leaders Partner Marquee */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-center text-left">
          {/* Left Description */}
          <div className="space-y-3.5 max-w-md">
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.06] text-[#C2D1D0] border border-white/10">
                Trusted Partners
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xs sm:text-sm text-[#8B9C9B] leading-relaxed">
              We focus on building systems that deliver tangible ROI. From frictionless on-premise integration to custom edge AI models, ensuring your facility&apos;s security and operational oversight with precision.
            </p>
          </div>

          {/* Right Auto-rotate Carousel Marquee */}
          <div className="relative overflow-hidden w-full">
            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#06090A] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#06090A] to-transparent z-10" />

            <div className="animate-marquee flex items-center gap-3.5 py-2">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={index}
                  className="w-28 h-24 sm:w-32 sm:h-28 rounded-2xl bg-[#0D1418] border border-white/[0.08] hover:border-white/20 p-3 flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
