"use client";

import React, { useEffect, useState } from "react";
import { X, ExternalLink, ShieldCheck, FileText } from "lucide-react";

interface LegalModalProps {
  buttonLabel: string;
  modalTitle: string;
  modalSubtitle?: string;
  htmlContent: string;
  externalLink?: string;
  externalLinkLabel?: string;
  icon?: "shield" | "file";
}

export function LegalModal({
  buttonLabel,
  modalTitle,
  modalSubtitle,
  htmlContent,
  externalLink,
  externalLinkLabel = "Buka Tautan",
  icon = "shield",
}: LegalModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-[#8B9C9B] hover:text-[#E6F1F0] hover:underline transition-colors text-xs text-left"
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0F12] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D1316]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0C6791]/20 border border-[#0C6791]/40 flex items-center justify-center text-[#38bdf8]">
                  {icon === "file" ? (
                    <FileText className="w-4 h-4" />
                  ) : (
                    <ShieldCheck className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {modalTitle}
                  </h3>
                  {modalSubtitle && (
                    <p className="text-[11px] text-[#8B9C9B]">{modalSubtitle}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {externalLink && (
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-[#C2D1D0] hover:text-white border border-white/10 transition-colors"
                  >
                    <span>{externalLinkLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-[#8B9C9B] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable HTML Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-xs sm:text-sm text-[#C2D1D0] leading-relaxed space-y-4">
              <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose prose-invert prose-sm max-w-none 
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-3
                  [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-6 [&_h2]:mb-2.5 [&_h2]:border-b [&_h2]:border-white/10 [&_h2]:pb-1.5
                  [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-4 [&_h3]:mb-2
                  [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-[#E6F1F0] [&_h4]:mt-3 [&_h4]:mb-1.5
                  [&_p]:mb-3 [&_p]:text-[#C2D1D0] [&_p]:leading-relaxed
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_ul]:space-y-1
                  [&_li]:text-[#C2D1D0]
                  [&_a]:text-[#38bdf8] [&_a]:underline hover:[&_a]:text-white
                  [&_strong]:text-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-[#0D1316] flex items-center justify-between text-xs text-[#8B9C9B]">
              <span className="truncate">
                Terakhir diperbarui: 21 September 2026
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Backwards compatibility alias
export function PrivacyPolicyModal({ htmlContent }: { htmlContent: string }) {
  return (
    <LegalModal
      buttonLabel="Kebijakan Privasi (Privacy Policy)"
      modalTitle="Kebijakan Privasi (Privacy Policy)"
      modalSubtitle="PT Safanah Alvan Maksima · Kepatuhan UU PDP No. 27/2022"
      htmlContent={htmlContent}
      externalLink="https://www.termsfeed.com/live/3e762256-6e0e-4797-9ef7-4a5e872e6806"
      externalLinkLabel="Buka di TermsFeed"
      icon="shield"
    />
  );
}
