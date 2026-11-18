"use client";

import React from "react";
import {
  Ship,
  Store,
  Boxes,
  Compass,
  Headphones,
  Wrench,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface CapabilitiesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Capabilities({ onOpenQuoteModal }: CapabilitiesProps) {
  const capabilities = [
    {
      icon: Ship,
      title: "Heavy Machinery Importation",
      subtitle: "End-to-End International Logistics",
      description:
        "We import heavy machinery directly from international manufacturers and certified global suppliers, connecting Ethiopian businesses with dependable equipment suited to demanding local conditions.",
      bullets: [
        "Djibouti Maritime Corridor to Modjo Dry Port coordination",
        "Ethiopian customs, clearance, and import tax tariff compliance",
        "Letter of Credit (LC) documentation & proforma support",
        "Pre-shipment verification and sea freight insurance"
      ]
    },
    {
      icon: Store,
      title: "Heavy Machinery Sales",
      subtitle: "Nationwide Supply Network",
      description:
        "We supply heavy machinery to construction companies, road contractors, regional government bureaus, mining developers, and independent machinery buyers across all regions of Ethiopia.",
      bullets: [
        "In-depot ready stock available in Addis Ababa",
        "Custom procurement tailored to commercial tender requirements",
        "Transparent handover and equipment commissioning",
        "Flexible payment milestones and verified ownership transfer"
      ]
    },
    {
      icon: Boxes,
      title: "Multi-Brand Equipment Supply",
      subtitle: "Unbiased International Choices",
      description:
        "We aim to offer machinery from multiple international brands, giving customers genuine opportunities to compare different manufacturers, models, and specifications to maximize ROI.",
      bullets: [
        "Tier-1 Global Brands: Caterpillar, Komatsu, Volvo CE",
        "High-Value Asian Leaders: SANY, XCMG, Shantui, SDLG",
        "Objective comparison of lifecycle costs and fuel efficiency",
        "Engine configurations tuned for Ethiopian high altitudes"
      ]
    },
    {
      icon: Compass,
      title: "Targeted Equipment Sourcing",
      subtitle: "Custom Matchmaking for Your Project",
      description:
        "We work closely with clients to identify suitable equipment options based on project topography, soil density, operating hours, and investment considerations.",
      bullets: [
        "Specification matching for specialized rock or earth conditions",
        "Access to hard-to-find attachments (breakers, rippers, augers)",
        "Manufacturer direct custom builds and special adaptations",
        "Comprehensive total cost of ownership (TCO) estimation"
      ]
    },
    {
      icon: Headphones,
      title: "Customer Pre-Purchase Guidance",
      subtitle: "Informed Decision Support",
      description:
        "Heavy machinery is a major capital investment. We help customers thoroughly understand specifications, warranty terms, and operational feasibility before finalizing purchases.",
      bullets: [
        "Transparent engineering breakdowns in plain language",
        "Comparison of hydraulic pressures, cycle times, and fuel rates",
        "Guidance on local operator familiarity and maintenance ease",
        "Pre-investment consultation meetings in Addis Ababa"
      ]
    },
    {
      icon: Wrench,
      title: "Developing After-Sales Capabilities",
      subtitle: "Long-Term Operational Support",
      description:
        "We plan to progressively expand our customer support capabilities, with a dedicated long-term focus on spare parts supply, maintenance coordination, and technical assistance.",
      bullets: [
        "Direct fast-track ordering for genuine manufacturer spare parts",
        "Field diagnostic coordination with certified mechanics",
        "Routine filter, seal, and wear-part package bundling",
        "Operator safety and basic maintenance onboarding"
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span>What We Do</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Machinery Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Ethiopian Enterprises
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Our approach is centered on providing access to suitable equipment, maintaining transparent business relationships, and making the machinery purchasing process as straightforward as possible.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-b from-slate-950/80 to-slate-950/50 border border-white/5 hover:border-amber-500/40 p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="space-y-4">
                  {/* Icon & Subtitle */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-amber-400 font-mono tracking-wider uppercase font-semibold">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {cap.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => onOpenQuoteModal(cap.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire About {cap.title.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
