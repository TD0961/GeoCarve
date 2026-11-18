"use client";

import React from "react";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import {
  Building2,
  Truck,
  Pickaxe,
  Factory,
  Home,
  Landmark,
  HardHat,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function HomeIndustriesPreview() {
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
    <section className="py-20 bg-white border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Target Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Serving Ethiopia&apos;s Essential Sectors
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            From national highway construction to regional quarries and urban development projects.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.slice(0, 6).map((ind) => {
            const Icon = iconMap[ind.iconName] || Building2;
            return (
              <div
                key={ind.id}
                className="p-6 rounded-3xl bg-gradient-to-b from-white to-yellow-50/20 border border-yellow-200/80 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-100 border border-yellow-300 text-amber-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-yellow-300 group-hover:to-amber-400 group-hover:text-stone-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-stone-500">{ind.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-yellow-100">
                  <Link
                    href={`/industries#${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider"
                  >
                    <span>View Recommended Fleet</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Industries Link */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-full shadow-md shadow-yellow-500/20 transition-all text-sm"
          >
            <span>Explore All 7 Target Industries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
