"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-2 border-yellow-200 text-gray-600 text-sm relative z-20 shadow-inner">
      {/* Decorative top yellow ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black shadow-md shadow-yellow-500/20">
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
              <span className="text-2xl font-black tracking-tight text-gray-900 font-mono">
                GEO<span className="text-yellow-600">CARVE</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              GeoCarve is an Ethiopian heavy machinery import and sales company committed to connecting the country&apos;s growing industries with reliable machinery from leading international manufacturers.
            </p>

            <div className="p-3.5 rounded-2xl bg-yellow-50 border border-yellow-200 text-xs text-yellow-900 font-bold">
              &ldquo;Let&apos;s carve our future together.&rdquo;
            </div>

            <div className="text-xs text-gray-500 font-medium">
              የኢትዮጵያን የመሠረተ ልማት እና የኢንዱስትሪ እድገት በጋራ እናፋጥናለን።
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-yellow-700 transition-colors font-medium">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-yellow-700 transition-colors font-medium">About Us</Link></li>
              <li><Link href="/machinery" className="hover:text-yellow-700 transition-colors font-medium">Machinery Fleet</Link></li>
              <li><Link href="/services" className="hover:text-yellow-700 transition-colors font-medium">What We Do</Link></li>
              <li><Link href="/import-journey" className="hover:text-yellow-700 transition-colors font-medium">Import Journey</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Target Industries</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-700 transition-colors font-medium">Contact Desk</Link></li>
            </ul>
          </div>

          {/* Target Industries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Target Industries
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Construction &amp; Civil Works</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Road &amp; Infrastructure</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Mining &amp; Quarrying</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Industrial &amp; Manufacturing</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Real Estate &amp; Property</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Government Projects</Link></li>
              <li><Link href="/industries" className="hover:text-yellow-700 transition-colors font-medium">Independent Contractors</Link></li>
            </ul>
          </div>

          {/* Ethiopian Office Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
              Ethiopia Desk
            </h4>
            <div className="space-y-2.5 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                <span className="font-mono">+251 911 234 567 / 911 890 123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                <span className="font-mono">contact@geocarve.et</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 font-semibold">
                  Modjo Dry Port Clearance &amp; Site Delivery
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-12 pt-8 border-t border-yellow-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 GeoCarve Heavy Machinery Import &amp; Sales. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-yellow-800 font-mono text-[11px] font-semibold bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200">
              Addis Ababa • Modjo • Djibouti Corridor
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-600 hover:text-yellow-700 transition-colors cursor-pointer font-bold"
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
