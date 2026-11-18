"use client";

import React from "react";
import Link from "next/link";
import { Ship, Store, Boxes, Wrench, ArrowRight, Sparkles } from "lucide-react";

export default function HomeCapabilities() {
  const capabilities = [
    {
      icon: Ship,
      title: "Heavy Machinery Importation",
      desc: "Direct import from premier international manufacturers with complete maritime logistics via Djibouti to Modjo Dry Port."
    },
    {
      icon: Store,
      title: "Heavy Machinery Sales",
      desc: "Supplying new and verified equipment with in-depot stock in Addis Ababa and custom tender procurement."
    },
    {
      icon: Boxes,
      title: "Multi-Brand Sourcing",
      desc: "Access premier brands (CAT, Komatsu, SANY, Volvo, XCMG, Shantui) with unbiased comparison tailored to your terrain."
    },
    {
      icon: Wrench,
      title: "Developing After-Sales",
      desc: "Progressive expansion into genuine spare parts supply, electronic diagnostics, and field maintenance support."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Complete Machinery Solutions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Making the machinery purchasing process as straightforward, transparent, and dependable as possible.
          </p>
        </div>

        {/* 4 Cards Grid in White & Yellow Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-b from-white via-white to-yellow-50/40 rounded-3xl p-8 border border-yellow-200/90 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-400 text-stone-950 font-bold flex items-center justify-center mb-6 shadow-md shadow-yellow-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-yellow-100">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-full shadow-md shadow-yellow-500/20 transition-all text-sm"
          >
            <span>Explore All 6 Core Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
