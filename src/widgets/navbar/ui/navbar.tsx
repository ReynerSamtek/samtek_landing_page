"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import {
  Menu,
  X,
  MessageSquare,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  LayoutDashboard,
  BrainCircuit,
  Cpu,
  Layers,
  GitMerge,
  Scale,
  Building2,
  Camera,
  ShieldCheck,
  HelpCircle,
  CalendarCheck,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHomeExpanded, setMobileHomeExpanded] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
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

  const homeLinks = [
    { label: "AI Capabilities", href: "/#fitur", icon: Layers, desc: "24+ Computer vision modules" },
    { label: "How It Works", href: "/#cara-kerja", icon: GitMerge, desc: "Plug-and-play edge deployment" },
    { label: "Edge vs Cloud", href: "/#komparasi", icon: Scale, desc: "Cost & data privacy advantages" },
    { label: "Industry Solutions", href: "/#industri", icon: Building2, desc: "Industrial, retail & banking" },
    { label: "Compatibility", href: "/#kompatibilitas", icon: Camera, desc: "Supports 99% of IP cameras" },
    { label: "Security & Privacy", href: "/#keamanan", icon: ShieldCheck, desc: "100% On-premise air-gapped" },
    { label: "FAQ", href: "/#faq", icon: HelpCircle, desc: "Common questions & answers" },
    { label: "Request Demo", href: "/#demo", icon: CalendarCheck, desc: "Schedule live PoC assessment" },
  ];

  const productLinks = [
    { label: "VMS Dashboard", href: "/products#dashboard", icon: LayoutDashboard, desc: "Unified surveillance management" },
    { label: "AI Analytics", href: "/products#ai-analytics", icon: BrainCircuit, desc: "Real-time neural detection & tracking" },
    { label: "SmartBox Hardware", href: "/products#smartbox", icon: Cpu, desc: "Industrial edge AI appliance" },
  ];

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

        {/* Desktop Navigation Links with Hover Dropdowns */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {/* Home with Hover Dropdown */}
          <div className="relative group/home py-5">
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`flex items-center gap-1 transition-colors whitespace-nowrap ${
                pathname === "/" ? "text-white font-semibold" : "text-[#8B9C9B] group-hover/home:text-white"
              }`}
            >
              <span>Home</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8B9C9B] group-hover/home:text-white transition-transform group-hover/home:rotate-180" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 -translate-x-6 w-80 pt-2 opacity-0 pointer-events-none group-hover/home:opacity-100 group-hover/home:pointer-events-auto transition-all duration-150 z-50">
              <div className="rounded-xl bg-[#0D1418] border border-white/15 p-2.5 shadow-2xl shadow-black/80 flex flex-col gap-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B9C9B] px-2.5 py-1 border-b border-white/[0.06]">
                  Page Sections
                </div>
                <div className="grid grid-cols-1 gap-0.5 pt-1">
                  {homeLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.06] text-white/90 hover:text-white transition-colors group/item"
                      >
                        <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#8B9C9B] group-hover/item:text-cyan-400 group-hover/item:border-cyan-500/30 shrink-0 mt-0.5 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-[#8B9C9B] leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Products with Hover Dropdown */}
          <div className="relative group/products py-5">
            <Link
              href="/products"
              className={`flex items-center gap-1 transition-colors whitespace-nowrap ${
                pathname === "/products" ? "text-white font-semibold" : "text-[#8B9C9B] group-hover/products:text-white"
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8B9C9B] group-hover/products:text-white transition-transform group-hover/products:rotate-180" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 -translate-x-6 w-80 pt-2 opacity-0 pointer-events-none group-hover/products:opacity-100 group-hover/products:pointer-events-auto transition-all duration-150 z-50">
              <div className="rounded-xl bg-[#0D1418] border border-white/15 p-2.5 shadow-2xl shadow-black/80 flex flex-col gap-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B9C9B] px-2.5 py-1 border-b border-white/[0.06]">
                  Product Lineup
                </div>
                <div className="grid grid-cols-1 gap-0.5 pt-1">
                  {productLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.06] text-white/90 hover:text-white transition-colors group/item"
                      >
                        <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#8B9C9B] group-hover/item:text-cyan-400 group-hover/item:border-cyan-500/30 shrink-0 mt-0.5 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-[#8B9C9B] leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="pt-1.5 mt-1 border-t border-white/[0.06]">
                  <Link
                    href="/products"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-xs text-[#8B9C9B] hover:text-white transition-colors"
                  >
                    <span>View All Products Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className={`transition-colors whitespace-nowrap ${
              pathname === "/about" ? "text-white font-semibold" : "text-[#8B9C9B] hover:text-white"
            }`}
          >
            About
          </Link>

          {/* Contact with Hover Dropdown */}
          <div className="relative group/contact py-5">
            <a
              href="/#contact"
              className="flex items-center gap-1 text-[#8B9C9B] group-hover/contact:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Contact</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8B9C9B] group-hover/contact:text-white transition-transform group-hover/contact:rotate-180" />
            </a>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 opacity-0 pointer-events-none group-hover/contact:opacity-100 group-hover/contact:pointer-events-auto transition-all duration-150 z-50">
              <div className="rounded-xl bg-[#0D1418] border border-white/15 p-3.5 shadow-2xl shadow-black/80 flex flex-col gap-2.5">
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
                  className="text-[11px] text-center text-[#8B9C9B] hover:text-white pt-1 transition-colors"
                >
                  View full address & maps →
                </a>
              </div>
            </div>
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
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0B1012] px-6 py-5 flex flex-col gap-3.5 text-sm max-h-[85vh] overflow-y-auto">
          {/* Home Mobile Accordion */}
          <div>
            <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
              <Link
                href="/"
                onClick={(e) => {
                  handleHomeClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-[#C2D1D0] hover:text-white font-medium"
              >
                Home
              </Link>
              <button
                onClick={() => setMobileHomeExpanded(!mobileHomeExpanded)}
                className="p-1 text-[#8B9C9B] hover:text-white"
                aria-label="Toggle home sections"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileHomeExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
            {mobileHomeExpanded && (
              <div className="pl-3 py-2 flex flex-col gap-2 border-b border-white/[0.04]">
                {homeLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-[#8B9C9B] hover:text-white py-1 flex items-center gap-2"
                  >
                    <span>•</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products Mobile Accordion */}
          <div>
            <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#C2D1D0] hover:text-white font-medium"
              >
                Products
              </Link>
              <button
                onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                className="p-1 text-[#8B9C9B] hover:text-white"
                aria-label="Toggle product links"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
            {mobileProductsExpanded && (
              <div className="pl-3 py-2 flex flex-col gap-2 border-b border-white/[0.04]">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-[#8B9C9B] hover:text-white py-1 flex items-center gap-2"
                  >
                    <span>•</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About */}
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
