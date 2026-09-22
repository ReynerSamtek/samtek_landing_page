import React from "react";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { MessageSquare, Mail, MapPin, Shield } from "lucide-react";
import { getPrivacyPolicyHtml, getTermsConditionsHtml } from "@/shared/lib/privacy-policy-loader";
import { PrivacyPolicyModal, LegalModal } from "@/features/privacy-policy-modal/ui/privacy-policy-modal";

export function Footer() {
  const privacyHtml = getPrivacyPolicyHtml();
  const termsHtml = getTermsConditionsHtml();
  return (
    <footer className="w-full bg-[#06090A] pt-16 pb-12 px-4 sm:px-8 border-t border-white/[0.08] text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.1fr_0.9fr_1fr] gap-10 lg:gap-10 pb-14 border-b border-white/[0.08]">
          {/* Company Brand & Address */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/picture/512x512.png"
                alt="SAMTEK"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                SAMTEK
              </span>
            </div>

            <div className="font-semibold text-white mb-2">
              {siteConfig.company.name}
            </div>
            <p className="text-xs text-[#8B9C9B] leading-relaxed max-w-sm mb-4">
              Leading provider of Enterprise Edge AI Video Management Systems. Bringing computer vision intelligence directly to on-premise physical infrastructure without cloud dependencies.
            </p>

            <a
              href={siteConfig.company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-xs text-[#8B9C9B] hover:text-[#E6F1F0] transition-colors max-w-sm group"
            >
              <MapPin className="w-4 h-4 shrink-0 text-[#8B9C9B] group-hover:text-[#B62C2C] transition-colors mt-0.5" />
              <span className="group-hover:underline">{siteConfig.company.address}</span>
            </a>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
              Official Inquiries
            </div>
            <div>
              <div className="text-xs text-[#8B9C9B]">WhatsApp Business:</div>
              <a
                href={siteConfig.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-emerald-400 hover:underline flex items-center gap-1.5 mt-0.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{siteConfig.company.phone}</span>
              </a>
            </div>

            <div>
              <div className="text-xs text-[#8B9C9B]">Procurement & Sales:</div>
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="text-sm font-mono text-[#E6F1F0] hover:text-[#B62C2C] flex items-center gap-1.5 mt-0.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.company.email}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#8B9C9B] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#0C6791]" />
              <span>Compliant with PDP Act No. 27/2022</span>
            </div>
          </div>

          {/* Perusahaan Column */}
          <div className="space-y-2.5 text-xs">
            <div className="font-semibold uppercase tracking-wider text-white mb-3">
              Company
            </div>
            <div>
              <a
                href="/about"
                className="text-[#8B9C9B] hover:text-white transition-colors"
              >
                About Us
              </a>
            </div>
            <div>
              <PrivacyPolicyModal htmlContent={privacyHtml} />
            </div>
            <div>
              <LegalModal
                buttonLabel="Terms & Conditions"
                modalTitle="Terms & Conditions"
                modalSubtitle="PT Safanah Alvan Maksima · Edge VMS Service & License Agreement"
                htmlContent={termsHtml}
                icon="file"
              />
            </div>
            <div className="pt-2 border-t border-white/[0.06] space-y-2">
              <div className="text-[11px] font-medium text-white/70">Connect With Us:</div>
              <div>
                <a
                  href={siteConfig.company.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B9C9B] hover:text-[#38bdf8] flex items-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.65 1.65 0 0 0 1.65-1.66 1.65 1.65 0 0 0-1.65-1.66Z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B9C9B] hover:text-[#f43f5e] flex items-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigasi Halaman Column */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold uppercase tracking-wider text-white mb-3">
              Navigation
            </div>
            {siteConfig.navLinks.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  className="text-[#8B9C9B] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="pt-2">
              <a
                href="/#demo"
                className="text-[#B62C2C] font-semibold hover:underline"
              >
                Schedule Live Demo →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B9C9B]">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 {siteConfig.company.name}. All Rights Reserved.</span>
            <span className="text-white/20">|</span>
            <PrivacyPolicyModal htmlContent={privacyHtml} />
            <span className="text-white/20">|</span>
            <LegalModal
              buttonLabel="Terms & Conditions"
              modalTitle="Terms & Conditions"
              modalSubtitle="PT Safanah Alvan Maksima · Edge VMS Service & License Agreement"
              htmlContent={termsHtml}
              icon="file"
            />
          </div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>On-Premise Infrastructure Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
