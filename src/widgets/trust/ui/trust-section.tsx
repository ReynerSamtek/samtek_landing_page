"use client";

import React, { useRef, useState, useEffect } from "react";
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
    { src: "/picture/partners/1.webp", name: "Jasa Marga Related Business" },
    { src: "/picture/partners/2.webp", name: "Multi Kontrol Nusantara" },
    { src: "/picture/partners/3.webp", name: "Unilever" },
    { src: "/picture/partners/4.webp", name: "Wastec International" },
    { src: "/picture/partners/5.webp", name: "Blibli" },
    { src: "/picture/partners/6.webp", name: "Citra Caraka Tani (CCT)" },
    { src: "/picture/partners/7.webp", name: "PLN ICON+" },
    { src: "/picture/partners/8.webp", name: "United Tractors" },
    { src: "/picture/partners/9.webp", name: "Garuda Yamato Steel" },
    { src: "/picture/partners/10.webp", name: "Pupuk Kujang Cikampek" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll loop when not hovered or dragged
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animId: number;
    const speed = 0.8;

    const scrollLoop = () => {
      if (!isDragging && !isHovered && container) {
        container.scrollLeft += speed;
        // Seamless loop back when half the replicated content is passed
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(scrollLoop);
    };

    animId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = carouselRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = carouselRef.current;
    if (!isDragging || !container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;

    // Loop bounds protection during drag
    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Deployments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {deployments.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0D1316] transition-all duration-300 hover:border-white/25 hover:shadow-xl"
              >
                <img
                  src={d.image}
                  alt={d.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06090A] via-[#06090A]/75 to-black/35" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                  <div className="w-9 h-9 rounded-lg bg-[#0C6791]/30 border border-[#0C6791]/50 backdrop-blur-md flex items-center justify-center text-[#E6F1F0] shadow-md mb-3 group-hover:bg-[#0C6791]/50 group-hover:border-[#0C6791]/70 transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-1.5 leading-snug">
                    {d.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#C2D1D0] leading-relaxed line-clamp-2">
                    {d.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted by Industry Leaders Partner Carousel */}
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

          {/* Right Draggable + Auto-scroll Carousel */}
          <div
            className="relative overflow-hidden w-full pt-14 pb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUpOrLeave();
            }}
          >
            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-r from-[#06090A] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-l from-[#06090A] to-transparent z-20" />

            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
              className={`flex items-center gap-3.5 overflow-x-auto select-none py-3 [&::-webkit-scrollbar]:hidden ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={index}
                  className="group/partner relative w-28 h-24 sm:w-32 sm:h-28 rounded-2xl bg-[#0D1418] border border-white/[0.08] hover:border-white/25 hover:bg-[#121B20] p-3 flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain pointer-events-none"
                    loading="lazy"
                  />

                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/partner:opacity-100 transition-all duration-200 pointer-events-none z-30">
                    <div className="relative bg-[#141E22] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20 shadow-xl whitespace-nowrap">
                      {partner.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-[#141E22] border-r border-b border-white/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
