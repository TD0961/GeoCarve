"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: (preselectedCategory?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Machinery Fleet", href: "#machinery" },
    { label: "What We Do", href: "#capabilities" },
    { label: "Import Journey", href: "#import-journey" },
    { label: "Target Industries", href: "#industries" },
    { label: "Why GeoCarve", href: "#about" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <>
      {/* Top micro bar for Ethiopian contact info and verified import status */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-white/5 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct International Heavy Machinery Importation & Sales
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Addis Ababa, Ethiopia • Modjo Dry Port Clearance
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Verified Global Sourcing (CAT, Komatsu, SANY, Volvo)
            </span>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+251911234567"
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3 h-3" />
              +251 (0) 911 234 567 / 911 890 123
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-3"
            : "bg-slate-950/70 backdrop-blur-sm border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all">
              {/* Geometric Carve Symbol */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-slate-950 transform group-hover:scale-110 transition-transform"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                  GEO<span className="text-amber-400">CARVE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">
                  ET
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase font-medium text-slate-400">
                Heavy Machinery Import & Sales
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+251911234567"
              className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Line</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all duration-300 transform active:scale-95 flex items-center gap-2"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 mt-2">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-2.5 text-xs text-amber-300 font-medium">
              እንኳን ወደ ጂዮካርቭ በደህና መጡ • Let's carve our future together.
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:+251911234567"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call +251 911 234 567
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm shadow-md text-center"
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
