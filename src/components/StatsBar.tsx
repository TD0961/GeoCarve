"use client";

import React from "react";
import { Truck, ShieldCheck, Clock, Award, Building, Sparkles } from "lucide-react";

export default function StatsBar() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      desc: "Clear proforma invoices, verified LC support, and honest pricing."
    },
    {
      icon: Truck,
      title: "Nationwide Site Delivery",
      desc: "From Djibouti Port / Modjo Dry Port directly to your job site in Ethiopia."
    },
    {
      icon: Award,
      title: "Multi-Brand Sourcing",
      desc: "Access premier brands: CAT, Komatsu, SANY, Volvo, XCMG, and Shantui."
    },
    {
      icon: Clock,
      title: "Pre & Post Purchase Guidance",
      desc: "Technical specification matching and developing long-term parts support."
    }
  ];

  const brandLogos = [
    "Caterpillar",
    "Komatsu",
    "Volvo CE",
    "SANY",
    "XCMG",
    "Shantui",
    "SDLG",
    "Sinotruk HOWO",
    "Zoomlion",
    "Liugong"
  ];

  return (
    <section className="bg-slate-900 border-y border-white/10 relative z-20">
      {/* 4 Feature Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-amber-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 group-hover:bg-amber-500/20 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Brand Network Ticker */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>International Manufacturer Network:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs font-mono font-bold text-slate-400">
            {brandLogos.map((brand, i) => (
              <span
                key={i}
                className="hover:text-amber-400 transition-colors cursor-default px-2 py-0.5 rounded bg-white/5"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
