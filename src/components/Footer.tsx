"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 text-sm relative z-20">
      
      {/* Top Banner / Call to Action Strip */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-6 px-4 sm:px-6 lg:px-8 text-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to Expand Your Machinery Capabilities?
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
              Let&apos;s discuss equipment choices, proforma options, and import logistics for your project.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+251911234567"
              className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg"
            >
              Call +251 911 234 567
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20">
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
              <span className="text-2xl font-black tracking-tight text-white font-mono">
                GEO<span className="text-amber-400">CARVE</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              GeoCarve is an Ethiopian heavy machinery import and sales company committed to connecting the country&apos;s growing industries with reliable machinery from leading international manufacturers.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-xs text-amber-400 font-medium">
              &ldquo;Let&apos;s carve our future together.&rdquo;
            </div>

            <div className="text-xs text-slate-500 font-amharic">
              የኢትዮጵያን የመሠረተ ልማት እና የኢንዱስትሪ እድገት በጋራ እናፋጥናለን።
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#machinery" className="hover:text-amber-400 transition-colors">Equipment Fleet</a></li>
              <li><a href="#capabilities" className="hover:text-amber-400 transition-colors">What We Do</a></li>
              <li><a href="#import-journey" className="hover:text-amber-400 transition-colors">Import Journey</a></li>
              <li><a href="#industries" className="hover:text-amber-400 transition-colors">Target Industries</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About GeoCarve</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Desk</a></li>
            </ul>
          </div>

          {/* Target Industries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Target Industries
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Construction & Civil Engineering</li>
              <li>Road & Infrastructure Development</li>
              <li>Mining & Quarrying Operations</li>
              <li>Industrial & Manufacturing Plants</li>
              <li>Real Estate & Property Development</li>
              <li>Government & Institutional Projects</li>
              <li>Independent Machinery Buyers</li>
            </ul>
          </div>

          {/* Ethiopian Office Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Ethiopia Desk
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+251 911 234 567 / 911 890 123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>contact@geocarve.et</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-emerald-400/90 font-medium">
                  Modjo Dry Port Clearance & Nationwide Delivery
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 GeoCarve Heavy Machinery Import & Sales. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-mono text-[11px]">
              Addis Ababa • Modjo • Djibouti Corridor
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
