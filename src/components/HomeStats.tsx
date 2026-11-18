"use client";

import React from "react";
import { ShieldCheck, Truck, Globe, Award } from "lucide-react";

export default function HomeStats() {
  const stats = [
    {
      icon: ShieldCheck,
      number: "100%",
      label: "Transparent LC Support",
      sub: "Compliant proforma & NBE documentation"
    },
    {
      icon: Globe,
      number: "Multi",
      label: "Global Brand Sourcing",
      sub: "CAT, Komatsu, SANY, Volvo, XCMG"
    },
    {
      icon: Truck,
      number: "12+",
      label: "Ethiopian Regions Served",
      sub: "Addis Ababa, Oromia, Amhara, Tigray, Sidama"
    },
    {
      icon: Award,
      number: "End-to-End",
      label: "Port to Job Site Handover",
      sub: "Djibouti corridor to Modjo Dry Port"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50/20 via-white to-yellow-50/20 border-y border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-yellow-200/80 shadow-sm text-center flex flex-col items-center group hover:shadow-lg hover:shadow-yellow-500/10 hover:border-yellow-400 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 border border-yellow-300 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-1">
                  {s.number}
                </div>
                <div className="text-sm font-bold text-stone-900 mb-1">
                  {s.label}
                </div>
                <p className="text-xs text-stone-500 hidden sm:block">
                  {s.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
