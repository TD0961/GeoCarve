"use client";

import React, { useState } from "react";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/industriesData";
import {
  Building2,
  Truck,
  Pickaxe,
  Factory,
  Home,
  Landmark,
  HardHat,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface TargetIndustriesProps {
  onOpenQuoteModal: (industryTitle: string) => void;
}

export default function TargetIndustries({ onOpenQuoteModal }: TargetIndustriesProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);

  const iconMap: { [key: string]: React.ElementType } = {
    Building2,
    Truck,
    Pickaxe,
    Factory,
    Home,
    Landmark,
    HardHat
  };

  return (
    <section id="industries" className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Industries We Serve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Machinery Solutions Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Ethiopia&apos;s Essential Sectors
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From the rugged terrain of national highway corridors to heavy urban real estate and mineral quarries, GeoCarve supplies equipment tuned for every sector.
          </p>
        </div>

        {/* 2-Column Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Industry Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              const IconComp = iconMap[ind.iconName] || Building2;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group border cursor-pointer ${
                    isSelected
                      ? "bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/5"
                      : "bg-slate-950/60 hover:bg-slate-950 border-white/5 hover:border-white/15 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 font-bold"
                          : "bg-white/5 text-amber-400 group-hover:bg-amber-500/20"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold tracking-wide transition-colors ${
                          isSelected ? "text-amber-400" : "text-white group-hover:text-amber-300"
                        }`}
                      >
                        {ind.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 truncate max-w-[240px]">
                        {ind.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-amber-400 translate-x-1"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Industry Deep-Dive Card */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {selectedIndustry.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedIndustry.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Recommended Fleet Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-amber-400">
                  Recommended Equipment Fleets:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.recommendedFleet.map((fleet, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/90 border border-white/5 text-xs text-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{fleet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Advantage Callout */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-amber-300">
                  Operational Advantage:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedIndustry.keyBenefit}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(`Industry Fleet: ${selectedIndustry.title}`)}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2"
                >
                  <span>Inquire for {selectedIndustry.title.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
