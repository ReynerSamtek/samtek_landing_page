"use client";

import React, { useState } from "react";
import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import { Menu, X, MessageSquare, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#06090A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#B62C2C] flex items-center justify-center font-bold text-white text-base shadow-md shadow-[#B62C2C]/30">
            S
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-white">
              <span>{siteConfig.name}</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#0C6791]/20 text-[#7ec6ea] border border-[#0C6791]/40">
                VMS
              </span>
            </div>
            <div className="text-[10px] text-[#8B9C9B] -mt-1 hidden sm:block">
              Edge AI Video Management
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8B9C9B] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-[#8B9C9B] hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">WhatsApp:</span>
            <span>{siteConfig.company.phone}</span>
          </a>

          <Button asChild variant="primary" size="sm" className="font-semibold shadow-md">
            <a href="#demo" className="flex items-center gap-1.5">
              <span>Jadwalkan Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#8B9C9B] hover:text-white bg-white/[0.03] border border-white/10 transition-colors"
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0B1012] px-6 py-6 flex flex-col gap-4 text-sm">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#C2D1D0] hover:text-white py-1.5 border-b border-white/[0.04]"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp: {siteConfig.company.phone}</span>
            </a>

            <Button asChild variant="primary" size="md" className="w-full font-semibold">
              <a href="#demo" onClick={() => setMobileMenuOpen(false)}>
                Jadwalkan Live Demo →
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
