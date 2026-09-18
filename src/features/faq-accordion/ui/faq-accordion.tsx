"use client";

import React, { useState } from "react";
import { faqData } from "@/entities/faq/model/data";
import { ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.id}
            className="rounded-xl bg-[#0D1316] border border-white/[0.08] hover:border-white/20 transition-all duration-200 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-[#B62C2C] bg-[#B62C2C]/10 border-[#B62C2C]/30" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#8B9C9B] leading-relaxed border-t border-white/[0.05] pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
