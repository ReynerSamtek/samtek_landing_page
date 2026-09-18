"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import { Menu, X, MessageSquare, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#06090A]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 shrink-0 select-none group"
        >
          <Image
            src="/picture/512x512.png"
            alt="SAMTEK"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg object-contain"
            priority
          />
          <span className="font-bold text-base sm:text-lg text-white tracking-tight">
            SAMTEK
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8B9C9B] hover:text-white transition-colors whitespace-nowrap px-1 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={siteConfig.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg text-[#8B9C9B] hover:text-white hover:bg-white/[0.04] transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>0877-4448-8999</span>
          </a>

          <Button asChild variant="primary" size="md" className="font-medium">
            <a href="#demo" className="flex items-center gap-1.5 whitespace-nowrap">
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
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0B1012] px-6 py-5 flex flex-col gap-3.5 text-sm">
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

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#121E1A] text-emerald-400 border border-white/10 text-xs font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {siteConfig.company.phone}</span>
            </a>

            <Button asChild variant="primary" size="md" className="w-full">
              <a href="#demo" onClick={() => setMobileMenuOpen(false)}>
                Jadwalkan Live Demo
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
