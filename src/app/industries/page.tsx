"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import CtaBanner from "@/components/CtaBanner";
import QuoteModal from "@/components/QuoteModal";

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteTopic, setQuoteTopic] = useState<string | undefined>(undefined);

  const iconMap: { [key: string]: React.ElementType } = {
    Building2,
    Truck,
    Pickaxe,
    Factory,
    Home,
    Landmark,
    HardHat
  };

  const handleOpenQuote = (topic?: string) => {
    setQuoteTopic(topic);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Sector Machinery Picture */}
      <section className="bg-gradient-to-b from-yellow-50/80 via-amber-50/30 to-white text-gray-900 pt-10 pb-16 relative overflow-hidden border-b border-yellow-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 uppercase tracking-widest bg-yellow-100 px-3.5 py-1.5 rounded-full border border-yellow-300">
                <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
                <span>Sectors &amp; Applications</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Target Industries We Serve
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Supplying heavy equipment tuned for Ethiopia&apos;s construction, road infrastructure, mining, quarrying, manufacturing, and real estate enterprises.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-yellow-900 pt-1">
                <span className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">7 Core Industrial Sectors</span>
                <span className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">High Altitude Configurations</span>
                <span className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">Project-Matched Fleets</span>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-yellow-300 shadow-xl bg-yellow-50">
              <Image
                src="/images/fleet-wheel-loader.jpg"
                alt="Heavy Machinery in Ethiopian Industry"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-yellow-300 flex items-center justify-between shadow-md">
                <span className="text-gray-900 text-xs font-bold">
                  Aggregate Loading &amp; Earthmoving Fleets
                </span>
                <span className="text-yellow-800 text-[11px] font-mono font-bold bg-yellow-100 px-2 py-0.5 rounded border border-yellow-200">
                  Industrial Scale
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* 2-Column Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Industry Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              const IconComp = iconMap[ind.iconName] || Building2;
              return (
                <button
                  key={ind.id}
                  id={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-5 rounded-3xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-400 shadow-md"
                      : "bg-white hover:bg-yellow-50/40 border-yellow-200/70 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-950 font-bold shadow-sm"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-yellow-900" : "text-gray-900"
                        }`}
                      >
                        {ind.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 truncate max-w-[240px]">
                        {ind.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-yellow-700 translate-x-1" : "text-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Industry Deep-Dive Card */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-yellow-200 shadow-sm space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-yellow-800 font-bold px-3 py-1 rounded-full bg-yellow-100 border border-yellow-300 inline-block">
                {selectedIndustry.subtitle}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                {selectedIndustry.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Recommended Fleet Box */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-gray-700">
                  Recommended Equipment Fleet:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.recommendedFleet.map((fleet, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 p-3.5 rounded-2xl bg-yellow-50/50 border border-yellow-200 text-xs text-gray-800 font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                      <span>{fleet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Advantage Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-50/60 border border-yellow-200 space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-yellow-800">
                  Operational Advantage in Ethiopia:
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {selectedIndustry.keyBenefit}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenQuote(`Industry Fleet: ${selectedIndustry.title}`)}
                  className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold px-6 py-3 rounded-full text-sm shadow-md shadow-yellow-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire for {selectedIndustry.title.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/machinery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-yellow-800 px-4 py-3"
                >
                  <span>Browse Available Models</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

      <CtaBanner onOpenQuoteModal={() => handleOpenQuote()} />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedItem={quoteTopic}
      />
    </div>
  );
}
