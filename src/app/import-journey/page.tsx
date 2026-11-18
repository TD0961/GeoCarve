"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  SearchCheck,
  Ship,
  Train,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sparkles
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import QuoteModal from "@/components/QuoteModal";

export default function ImportJourneyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Equipment Selection & Proforma Issuance",
      timeline: "Days 1 – 5",
      location: "Addis Ababa Commercial Desk",
      summary:
        "We review your operational requirements, soil topography, and budget to match optimal equipment specifications across top international brands. We issue compliant international proforma invoices tailored for Ethiopian bank LC approval.",
      deliverables: [
        "Technical specification compliance document",
        "Official commercial proforma invoice with HS codes",
        "National Bank of Ethiopia (NBE) regulatory alignment"
      ]
    },
    {
      step: "02",
      icon: SearchCheck,
      title: "Factory Inspection & Pre-Shipment Audit",
      timeline: "Days 6 – 12",
      location: "Manufacturer Assembly Plant (China / Europe)",
      summary:
        "Before loading, our certified inspectors verify machinery serial numbers, engine dyno outputs, hydraulic pressure calibration, and paintwork. Pre-shipment certificates and high-resolution video audits are provided to you.",
      deliverables: [
        "Certified 48-point physical and mechanical audit",
        "Pre-shipment inspection certificate of quality",
        "Factory origin certificate and operational manuals"
      ]
    },
    {
      step: "03",
      icon: Ship,
      title: "Maritime Freight to Port of Djibouti",
      timeline: "Days 13 – 28",
      location: "Red Sea Maritime Transit Corridor",
      summary:
        "Machinery is secured on roll-on/roll-off (RoRo) or heavy flat-rack ocean carriers with full marine cargo insurance. We manage bill of lading (B/L) tracking and forward all shipping manifests to Ethiopian forwarding authorities.",
      deliverables: [
        "Clean Ocean Bill of Lading (B/L)",
        "Comprehensive marine transit insurance coverage",
        "Real-time GPS vessel tracking updates"
      ]
    },
    {
      step: "04",
      icon: Train,
      title: "Djibouti Port Discharge & Modjo Dry Port Transit",
      timeline: "Days 29 – 34",
      location: "Ethio-Djibouti Railway & Modjo Dry Port",
      summary:
        "Upon discharge at the Port of Djibouti, bonded customs transit documentation is processed immediately. Machinery travels smoothly via the Ethio-Djibouti standard gauge railway or heavy multi-axle lowbed transport straight to Modjo Dry Port.",
      deliverables: [
        "Djibouti port stevedoring & customs bonded transit",
        "Ethio-Djibouti railway freight booking & offloading",
        "Modjo Dry Port receiving tally and warehouse entry"
      ]
    },
    {
      step: "05",
      icon: Truck,
      title: "Customs Clearance & Job Site Handover",
      timeline: "Days 35 – 45",
      location: "Your Project Site Anywhere in Ethiopia",
      summary:
        "Following Ethiopian Customs Commission clearance, our technical team performs fluid checks, functional commissioning, and delivers the machine directly to your project site.",
      deliverables: [
        "Full customs release and ownership transfer",
        "On-site mechanical fluid, electrical, and hydraulic test",
        "Operator briefing and maintenance handbook handover"
      ]
    }
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Page Header (White & Yellow Gradient) */}
      <section className="bg-gradient-to-b from-yellow-100/70 via-amber-50/40 to-white text-gray-900 py-16 sm:py-20 relative overflow-hidden border-b border-yellow-200/60">
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
          <Image
            src="/images/infrastructure-road.jpg"
            alt="Corridor Transport"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 uppercase tracking-widest bg-yellow-400/20 px-3.5 py-1.5 rounded-full border border-yellow-300">
            <ShieldCheck className="w-3.5 h-3.5 text-yellow-600" />
            <span>Transparent Procurement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            The 5-Stage Import Journey
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From international factory gates to your job site in Ethiopia. Clear milestones, transparent documentation, zero surprises.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Step Selector Ribbon */}
        <div className="bg-yellow-50/40 rounded-3xl p-3 border border-yellow-200 shadow-sm grid grid-cols-2 sm:grid-cols-5 gap-2">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-yellow-500/20"
                    : "bg-white text-gray-700 hover:bg-yellow-50/80 border border-yellow-200/60"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                    isActive ? "bg-slate-950 text-yellow-300" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {s.step}
                </div>
                <div className="truncate text-xs font-semibold">
                  {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Card (White & Yellow Gradient) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-yellow-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs font-mono font-bold">
                STAGE {current.step} OF 05
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold">
                <Clock className="w-3.5 h-3.5 text-yellow-600" />
                {current.timeline}
              </span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span className="text-xs text-gray-600 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-yellow-600" />
                {current.location}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              {current.title}
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {current.summary}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-yellow-800">
                GeoCarve Deliverables at this Stage:
              </h4>
              <div className="space-y-2">
                {current.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-sm text-gray-800">
                    <CheckCircle className="w-4 h-4 text-yellow-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold px-6 py-3 rounded-full text-sm shadow-md shadow-yellow-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Inquire About Import Terms</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((p) => (p > 0 ? p - 1 : steps.length - 1))}
                  className="px-4 py-2.5 rounded-full bg-white hover:bg-yellow-50 text-gray-700 text-xs font-bold border border-yellow-200 cursor-pointer transition-colors"
                >
                  Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((p) => (p < steps.length - 1 ? p + 1 : 0))}
                  className="px-4 py-2.5 rounded-full bg-white hover:bg-yellow-50 text-gray-700 text-xs font-bold border border-yellow-200 cursor-pointer transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-5 bg-gradient-to-br from-yellow-50 via-amber-50/40 to-white rounded-2xl p-8 border border-yellow-200 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-400 text-slate-950 flex items-center justify-center shadow-sm">
              <StepIcon className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">
                Ethio-Djibouti Transit Corridor
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                We handle every legal and logistics requirement: foreign currency proformas, shipping line bookings, port stevedoring, and dry port transit so you can focus entirely on executing your project.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-yellow-200 space-y-2 shadow-sm">
              <div className="flex justify-between text-xs text-gray-700 font-mono">
                <span>Progress Through Journey</span>
                <span className="text-yellow-800 font-bold">{(activeStep + 1) * 20}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-yellow-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500"
                  style={{ width: `${(activeStep + 1) * 20}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>

      <CtaBanner onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
