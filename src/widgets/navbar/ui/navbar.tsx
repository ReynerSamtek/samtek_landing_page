"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import { Menu, X, MessageSquare, Mail, Phone, ArrowRight, ChevronDown } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close contact popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setContactDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#06090A]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={handleHomeClick}
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
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          <Link
            href="/"
            onClick={handleHomeClick}
            className={`transition-colors whitespace-nowrap px-1 py-1 ${
              pathname === "/" ? "text-white font-semibold" : "text-[#8B9C9B] hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`transition-colors whitespace-nowrap px-1 py-1 ${
              pathname === "/products" ? "text-white font-semibold" : "text-[#8B9C9B] hover:text-white"
            }`}
          >
            Products
          </Link>

          <Link
            href="/about"
            className={`transition-colors whitespace-nowrap px-1 py-1 ${
              pathname === "/about" ? "text-white font-semibold" : "text-[#8B9C9B] hover:text-white"
            }`}
          >
            About
          </Link>

          {/* Contact Popover Menu */}
          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
              className="flex items-center gap-1.5 text-[#8B9C9B] hover:text-white transition-colors whitespace-nowrap px-1 py-1 cursor-pointer"
            >
              <span>Contact</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${contactDropdownOpen ? "rotate-180 text-white" : ""}`} />
            </button>

            {contactDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl bg-[#0D1418] border border-white/15 p-3.5 shadow-2xl shadow-black/80 flex flex-col gap-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[11px] font-mono uppercase text-[#8B9C9B] px-1 pb-1 border-b border-white/[0.08]">
                  Get In Touch
                </div>
                
                {/* Phone / WhatsApp */}
                <a
                  href={siteConfig.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8B9C9B]">WhatsApp / Phone</div>
                    <div className="text-xs font-mono font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {siteConfig.company.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8B9C9B]">Official Email</div>
                    <div className="text-xs font-mono font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {siteConfig.company.email}
                    </div>
                  </div>
                </a>

                <a
                  href="/#contact"
                  onClick={() => setContactDropdownOpen(false)}
                  className="text-[11px] text-center text-[#8B9C9B] hover:text-white pt-1 transition-colors"
                >
                  View full address & maps →
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Button asChild variant="primary" size="md" className="font-medium">
            <a href="/#demo" className="flex items-center gap-1.5 whitespace-nowrap">
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#8B9C9B] hover:text-white bg-white/[0.03] border border-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0B1012] px-6 py-5 flex flex-col gap-3.5 text-sm">
          <Link
            href="/"
            onClick={(e) => {
              handleHomeClick(e);
              setMobileMenuOpen(false);
            }}
            className="text-[#C2D1D0] hover:text-white py-1.5 border-b border-white/[0.04]"
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#C2D1D0] hover:text-white py-1.5 border-b border-white/[0.04]"
          >
            Products
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#C2D1D0] hover:text-white py-1.5 border-b border-white/[0.04]"
          >
            About
          </Link>

          {/* Contact Details in Mobile */}
          <div className="py-2 flex flex-col gap-2 border-b border-white/[0.04]">
            <span className="text-xs font-mono uppercase text-[#8B9C9B]">Contact Us</span>
            <a
              href={siteConfig.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.company.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="flex items-center gap-2 text-xs text-white"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{siteConfig.company.email}</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button asChild variant="primary" size="md" className="w-full">
              <a href="/#demo" onClick={() => setMobileMenuOpen(false)}>
                Request Demo
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
