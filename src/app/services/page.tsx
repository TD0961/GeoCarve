"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  Store,
  Boxes,
  Compass,
  Headphones,
  Wrench,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import QuoteModal from "@/components/QuoteModal";

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const services = [
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
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Page Header (White & Yellow Gradient) */}
      <section className="bg-gradient-to-b from-yellow-100/70 via-amber-50/40 to-white text-gray-900 py-16 sm:py-20 relative overflow-hidden border-b border-yellow-200/60">
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
          <Image
            src="/images/technical-support.jpg"
            alt="Technical workshop"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 uppercase tracking-widest bg-yellow-400/20 px-3.5 py-1.5 rounded-full border border-yellow-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>Capabilities &amp; Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            What We Do: Heavy Machinery Solutions
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From international factory sourcing and LC handling to nationwide delivery and developing after-sales support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Intro Highlight Box */}
        <div className="bg-gradient-to-br from-yellow-50/50 via-white to-amber-50/30 rounded-3xl p-8 sm:p-12 border border-yellow-200 shadow-sm text-center max-w-3xl mx-auto space-y-4">
          <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
            Our Business Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            Professional, Transparent, and End-to-End
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our approach is centered on providing access to suitable equipment, maintaining transparent business relationships, and making the machinery purchasing process as straightforward as possible.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-yellow-200/90 shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-yellow-800 font-bold bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-200">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-yellow-800 font-mono tracking-wider uppercase font-bold">
                      {svc.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-yellow-800 transition-colors">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-yellow-100">
                    {svc.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-yellow-100">
                  <button
                    onClick={() => handleOpenQuote(svc.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-800 hover:text-yellow-950 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* After-Sales Technical Feature (White & Yellow Gradient) */}
        <div className="bg-gradient-to-br from-yellow-100/90 via-amber-50 to-white rounded-3xl p-8 sm:p-12 text-gray-900 border-2 border-yellow-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-200/80 px-3 py-1 rounded-full border border-yellow-300">
              Service Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              Developing Long-Term After-Sales Capabilities
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We plan to progressively expand our customer support capabilities, with a dedicated long-term focus on genuine spare parts supply, maintenance coordination, and technical assistance.
            </p>
            <div className="space-y-2 text-xs text-gray-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                <span>Genuine OEM filters, seals, and hydraulic components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                <span>Factory-grade diagnostic software and pressure testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-600 shrink-0" />
                <span>Operator handover briefings and safety protocols</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleOpenQuote("After-Sales & Parts")}
                className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md shadow-yellow-500/20 cursor-pointer"
              >
                Inquire About Parts &amp; Support
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden bg-yellow-50 border border-yellow-300 shadow-md">
            <Image
              src="/images/technical-support.jpg"
              alt="Technicians performing diagnostics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-yellow-300 flex items-center justify-between text-xs shadow-md">
              <span className="text-gray-900 font-bold flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-yellow-600" />
                Addis Ababa Diagnostic Desk
              </span>
              <span className="text-yellow-800 font-mono font-bold bg-yellow-100 px-2.5 py-0.5 rounded-full border border-yellow-300">
                Active Support
              </span>
            </div>
          </div>
        </div>

      </div>

      <CtaBanner onOpenQuoteModal={() => handleOpenQuote()} />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedItem={quoteService}
      />
    </div>
  );
}
