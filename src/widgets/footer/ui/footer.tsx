import React from "react";
import { siteConfig } from "@/shared/config/site";
import { MessageSquare, Mail, MapPin, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#06090A] pt-16 pb-12 px-4 sm:px-8 border-t border-white/[0.08] text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10 lg:gap-14 pb-14 border-b border-white/[0.08]">
          {/* Company Brand & Address */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#B62C2C] flex items-center justify-center font-bold text-white text-base">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {siteConfig.name} <span className="text-[#0C6791] text-xs font-mono">VMS</span>
              </span>
            </div>

            <div className="font-semibold text-white mb-2">
              {siteConfig.company.name}
            </div>
            <p className="text-xs text-[#8B9C9B] leading-relaxed max-w-sm mb-4">
              Penyedia solusi Edge AI Video Management System terdepan di Indonesia. Menghadirkan kecerdasan buatan langsung di fasilitas fisik Anda tanpa ketergantungan cloud.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-[#8B9C9B] max-w-sm">
              <MapPin className="w-4 h-4 shrink-0 text-[#8B9C9B] mt-0.5" />
              <span>{siteConfig.company.address}</span>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
              Kontak Resmi
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
              <div className="text-xs text-[#8B9C9B]">Email Pengadaan:</div>
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
              <span>Kepatuhan UU PDP No. 27/2022</span>
            </div>
          </div>

          {/* Quick Nav Sitemap */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold uppercase tracking-wider text-white mb-3">
              Navigasi Halaman
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
                href="#demo"
                className="text-[#B62C2C] font-semibold hover:underline"
              >
                Jadwalkan Live Demo →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B9C9B]">
          <div>
            © 2026 {siteConfig.company.name}. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Sistem & Layanan On-Premise Beroperasi Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
