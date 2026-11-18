"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { openQuoteModal } from "@/components/GlobalQuoteModal";

interface NavbarProps {
  onOpenQuoteModal?: (preselectedCategory?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerQuote = (category?: string) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(category);
    } else {
      openQuoteModal(category);
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Machinery Fleet", href: "/machinery" },
    { label: "What We Do", href: "/services" },
    { label: "Import Journey", href: "/import-journey" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top micro bar in stylish warm yellow */}
      <div className="bg-yellow-50 text-stone-700 text-xs border-b border-yellow-200/80 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-bold text-amber-800">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Direct Heavy Machinery Importation &amp; Sales in Ethiopia
            </span>
            <span className="text-yellow-300">|</span>
            <span className="flex items-center gap-1 text-stone-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              Addis Ababa • Modjo Dry Port Clearance
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1 text-stone-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              Verified Sourcing (CAT, Komatsu, SANY, Volvo)
            </span>
            <span className="text-yellow-300">|</span>
            <a
              href="tel:+251911234567"
              className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-bold tracking-wide transition-colors"
            >
              <Phone className="w-3 h-3 fill-current" />
              +251 (0) 911 234 567
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation in crisp white & stylish yellow gradient accents */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHomePage && !scrolled
            ? "bg-black/30 backdrop-blur-[3px] text-white py-4 border-b border-white/15"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-yellow-300 py-3.5 text-stone-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with stylish yellow gradient */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 text-stone-950 font-bold shadow-md shadow-yellow-500/30 group-hover:scale-105 transition-all">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-extrabold tracking-tight font-mono ${isHomePage && !scrolled ? "text-white" : "text-stone-900"}`}>
                  GEO<span className="text-amber-500">CARVE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-yellow-400/20 text-amber-700 px-1.5 py-0.5 rounded border border-yellow-300">
                  ET
                </span>
              </div>
              <p className={`text-[10px] tracking-wider uppercase font-medium ${isHomePage && !scrolled ? "text-gray-300" : "text-stone-500"}`}>
                Heavy Machinery Import &amp; Sales
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-[14px] font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const linkClasses = isHomePage && !scrolled
                ? isActive
                  ? "text-yellow-400 font-bold bg-white/10"
                  : "text-white/90 hover:text-yellow-300 hover:bg-white/10"
                : isActive
                ? "text-amber-700 font-bold bg-yellow-100/70 border border-yellow-300/60"
                : "text-stone-700 hover:text-amber-600 hover:bg-yellow-50";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl transition-all ${linkClasses}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+251911234567"
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full transition-all border ${
                isHomePage && !scrolled
                  ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  : "bg-yellow-50 text-stone-800 border-yellow-300 hover:bg-yellow-100"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 fill-current" />
              <span>0911 234 567</span>
            </a>

            <button
              onClick={() => triggerQuote()}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-yellow-500/25 transition-all duration-200 transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isHomePage && !scrolled ? "text-white" : "text-stone-800"}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-yellow-300 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2.5 text-xs text-amber-800 font-medium">
              እንኳን ወደ ጂዮካርቭ በደህና መጡ • Let&apos;s carve our future together.
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-lg ${
                  pathname === link.href
                    ? "text-amber-700 font-bold bg-yellow-100/70"
                    : "text-stone-700 hover:text-amber-600 hover:bg-yellow-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-yellow-200 flex flex-col gap-2.5">
              <a
                href="tel:+251911234567"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-yellow-50 border border-yellow-300 text-stone-900 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-600 fill-current" />
                Call +251 911 234 567
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerQuote();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-stone-950 font-bold text-sm shadow-md text-center cursor-pointer"
              >
                Request Machinery Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
