"use client";

import React, { useState, useRef, useEffect } from "react";
import { aiCapabilities } from "@/entities/capability/model/data";
import { CapabilityCard } from "@/entities/capability/ui/capability-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { CapabilityCategory } from "@/entities/capability/model/types";
import { ShieldCheck, HardHat, Store, Car, Layers, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

export function CapabilitiesSection() {
  const [activeCategory, setActiveCategory] = useState<CapabilityCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    { key: "all", label: "All Modules (24)", icon: Layers },
    { key: "security", label: "Security & Access", icon: ShieldCheck },
    { key: "safety", label: "Industrial & Safety", icon: HardHat },
    { key: "business", label: "Retail & Commercial", icon: Store },
    { key: "traffic", label: "Traffic & Parking", icon: Car },
  ] as const;

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 160, behavior: "smooth" });
    }
  };

  const filteredByCategory = activeCategory === "all"
    ? aiCapabilities
    : aiCapabilities.filter((c) => c.category === activeCategory);

  // If showing "all" and not expanded, show only featured/most popular models (8 models)
  const displayedCapabilities = !showAll && activeCategory === "all"
    ? filteredByCategory.filter((c) => c.featured)
    : filteredByCategory;

  return (
    <section id="fitur" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeader
            badge="AI Capabilities Catalog"
            title="24+ Specialized Computer Vision Modules"
            description="Each AI module can be independently enabled or customized per camera stream according to specific operational needs. Connect your existing cameras, and the system immediately goes to work."
            className="mb-0"
          />
        </div>

        {/* Filter Category Tabs with Mobile Scroll Arrow */}
        <div className="relative mb-8">
          <div
            ref={tabsRef}
            onScroll={checkScroll}
            className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none pr-10 sm:pr-0"
          >
            {categories.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveCategory(tab.key);
                    if (tab.key !== "all") {
                      setShowAll(true);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer border ${
                    isActive
                      ? "bg-[#B62C2C] text-white border-white/15 shadow-sm"
                      : "bg-[#12191D] text-[#C2D1D0] border-white/10 hover:border-white/20 hover:bg-[#1A2429] hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right swipe indicator arrow for mobile */}
          {canScrollRight && (
            <button
              onClick={handleScrollRight}
              aria-label="Scroll right to see more categories"
              className="sm:hidden absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#06090A] via-[#06090A]/90 to-transparent flex items-center justify-end pr-0.5 z-10 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-[#12191D] border border-white/20 flex items-center justify-center text-white shadow-lg animate-pulse">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          )}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedCapabilities.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>

        {/* See More Toggle Button */}
        {activeCategory === "all" && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12191D] hover:bg-[#1A2429] text-white text-sm font-semibold border border-white/10 hover:border-white/25 transition-all shadow-md cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "See More AI Modules (24)"}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#0E1518] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Need a bespoke AI model for your industry?</h4>
              <p className="text-xs text-[#8B9C9B]">SAMTEK&apos;s R&D engineering team can train custom computer vision models tailored to your exact facility SOP.</p>
            </div>
          </div>
          <a
            href="/#demo"
            className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#192429] hover:bg-[#202D33] text-white border border-white/15 hover:border-white/25 shadow-sm transition-colors shrink-0"
          >
            Request Custom Assessment →
          </a>
        </div>
      </div>
    </section>
  );
}
