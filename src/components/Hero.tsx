"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, PhoneCall, Award, Globe, Shield } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: (category?: string) => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-8 pb-16">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-geocarve.jpg"
          alt="Ethiopian civil engineers and heavy machinery on mountain highway infrastructure project"
          fill
          priority
          className="object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        {/* Subtle glowing radial gradient in amber */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Ethiopian Heavy Machinery Import & Sales
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Powering Ethiopia&apos;s Growth.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Let&apos;s Carve Our Future Together.
              </span>
            </h1>

            {/* Sub-headline / Core Vision Statement */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              GeoCarve connects Ethiopia&apos;s contractors, mining operations, industrial businesses, and developers with world-class heavy machinery from leading international manufacturers. We make equipment acquisition transparent, dependable, and tailored to your project.
            </p>

            {/* Value Highlights Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Multi-Brand International Sourcing & LC Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Djibouti Transit to Modjo Dry Port & On-Site Delivery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rigorous Pre-Shipment Quality & Spec Verification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dedicated Technical Guidance & After-Sales Vision</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
              >
                <span>Request Equipment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#machinery"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 hover:border-amber-500/40 backdrop-blur-md transition-all duration-200 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Explore Fleet Catalog</span>
              </a>

              <a
                href="tel:+251911234567"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 text-sm font-semibold transition-colors py-2 px-1"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Direct Hotline: +251 911 234 567</span>
              </a>
            </div>

          </div>

          {/* Right Highlights Card / Spotlight Badge */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-6">
              
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                    GeoCarve Ethio-Hub
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Ethiopian Machinery Partner
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              {/* Company philosophy quote */}
              <blockquote className="text-sm italic text-slate-300 leading-relaxed border-l-2 border-amber-500 pl-3">
                &ldquo;At GeoCarve, we see every machine as part of a bigger picture: a road being built, a business expanding, an industry developing, or a new opportunity taking shape.&rdquo;
              </blockquote>

              {/* Rapid Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-white/5">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Transparent Import & LC Handling</div>
                </div>
                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-white/5">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">Multi</div>
                  <div className="text-xs text-slate-400 font-medium">Brand Global Manufacturer Access</div>
                </div>
                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-white/5">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">12+</div>
                  <div className="text-xs text-slate-400 font-medium">Ethiopian Regions Served</div>
                </div>
                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-white/5">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">End-to-End</div>
                  <div className="text-xs text-slate-400 font-medium">Port to Site Handover</div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  International Standards
                </span>
                <span className="text-amber-400/90 font-medium">
                  Addis Ababa • Djibouti Route
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
