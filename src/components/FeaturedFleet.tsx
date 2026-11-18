"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MACHINERY_DATA, CATEGORIES } from "@/data/machineryData";
import {
  ArrowRight,
  Phone,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

interface FeaturedFleetProps {
  onOpenQuoteModal: (machineName?: string) => void;
}

export default function FeaturedFleet({ onOpenQuoteModal }: FeaturedFleetProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const displayedMachines = MACHINERY_DATA.filter(
    (m) => selectedCategory === "all" || m.category === selectedCategory
  ).slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-yellow-50/20 to-white border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with stylish yellow accent */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Equipment Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Featured Heavy Machinery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            High-performance machinery selected for Ethiopia&apos;s demanding highlands, basalt quarries, and national road construction corridors.
          </p>

          {/* Category Filter Pills in White & Yellow */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-stone-950 font-bold shadow-md shadow-yellow-500/20"
                      : "bg-white text-stone-700 hover:bg-yellow-50 border border-yellow-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Machinery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMachines.map((machine) => (
            <div
              key={machine.id}
              className="bg-white rounded-3xl overflow-hidden border border-yellow-200/80 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-400 transition-all duration-300 flex flex-col group"
            >
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden bg-yellow-50">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Stylish Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/95 text-stone-950 shadow-md border border-yellow-300">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    {machine.status}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 backdrop-blur-md text-yellow-300 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                    {machine.categoryLabel}
                  </span>
                </div>

                {/* Machine Name */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold drop-shadow group-hover:text-yellow-300 transition-colors">
                    {machine.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Brand Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-stone-500 font-medium">Brands:</span>
                  {machine.brandOptions.map((brand, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-yellow-50 text-amber-900 border border-yellow-200/80 px-2 py-0.5 rounded font-semibold"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                  {machine.description}
                </p>

                {/* 3 Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-yellow-100 text-xs text-stone-700">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase font-mono">Weight</span>
                    <span className="font-bold text-stone-900 mt-0.5 truncate">{machine.operatingWeight.split("–")[0]}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase font-mono">Power</span>
                    <span className="font-bold text-stone-900 mt-0.5 truncate">{machine.enginePower.split("@")[0].split("(")[0]}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase font-mono">Capacity</span>
                    <span className="font-bold text-stone-900 mt-0.5 truncate">{machine.capacity.split(" ")[0]} m³</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                      Procurement
                    </span>
                    <span className="text-xs font-bold text-amber-700">
                      Proforma on Request
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenQuoteModal(machine.name)}
                      className="bg-yellow-50 hover:bg-yellow-400 hover:text-stone-950 text-stone-800 border border-yellow-300 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Phone className="w-3 h-3 text-amber-600" />
                      <span>Inquire</span>
                    </button>

                    <Link
                      href="/machinery"
                      className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-stone-950 p-2 rounded-xl transition-all flex items-center justify-center shadow-sm"
                      aria-label={`View details of ${machine.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="text-center mt-12">
          <Link
            href="/machinery"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-full shadow-md shadow-yellow-500/20 transition-all text-sm"
          >
            <span>Explore All Machinery Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
