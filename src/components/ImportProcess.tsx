"use client";

import React, { useState } from "react";
import {
  FileSearch,
  Factory,
  CreditCard,
  Ship,
  Truck,
  CheckCircle,
  Clock,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

interface ImportProcessProps {
  onOpenQuoteModal: (stepName?: string) => void;
}

export default function ImportProcess({ onOpenQuoteModal }: ImportProcessProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      icon: FileSearch,
      title: "Project Consultation & Spec Match",
      timeline: "Days 1 – 3",
      location: "Addis Ababa Consultation Office",
      summary:
        "We analyze your project specifications (tonnage, terrain altitude, soil density, attachments needed) and recommend ideal machinery models across top global manufacturers.",
      deliverables: [
        "Project specification breakdown",
        "Multi-brand comparative proforma options",
        "Total landing cost & timeline estimate"
      ]
    },
    {
      step: "02",
      icon: Factory,
      title: "Global Sourcing & Factory Inspection",
      timeline: "Days 4 – 10",
      location: "International Manufacturer Plant",
      summary:
        "GeoCarve works directly with certified manufacturer plants in China, Japan, and Europe. Each unit undergoes pre-shipment quality checks and operational testing.",
      deliverables: [
        "Certified manufacturer origin inspection report",
        "High-definition video & serial number audit",
        "Factory warranty documentation"
      ]
    },
    {
      step: "03",
      icon: CreditCard,
      title: "LC & Financial Documentation Guidance",
      timeline: "Days 7 – 15",
      location: "Ethiopian Commercial Banking System",
      summary:
        "We assist with compliant Letter of Credit (LC) documentation, proforma verification, and foreign currency import compliance aligned with National Bank of Ethiopia guidelines.",
      deliverables: [
        "Compliant proforma invoices for bank LC opening",
        "Customs tariff classification (HS Code optimization)",
        "Marine cargo insurance underwriting"
      ]
    },
    {
      step: "04",
      icon: Ship,
      title: "Maritime Freight to Djibouti & Modjo Dry Port",
      timeline: "Days 20 – 35",
      location: "Djibouti Port ➔ Modjo Dry Port Corridor",
      summary:
        "Machines are safely secured on RO-RO (Roll-on/Roll-off) or flat-rack vessels, tracked across the Red Sea corridor, discharged at Djibouti Port, and railed/trucked to Modjo Dry Port.",
      deliverables: [
        "Real-time vessel tracking updates",
        "Port handling and transit customs transit permits",
        "Heavy-haul lowbed transport coordination"
      ]
    },
    {
      step: "05",
      icon: Truck,
      title: "Customs Clearance & Job Site Handover",
      timeline: "Days 35 – 45",
      location: "Your Project Site Anywhere in Ethiopia",
      summary:
        "Following Ethiopian Customs Commission clearance, our team performs final fluid checks, functional commissioning, and delivers the machine directly to your project site with operator briefing.",
      deliverables: [
        "Full customs release and ownership transfer",
        "On-site mechanical fluid and hydraulic test",
        "Operator briefing and maintenance handbook"
      ]
    }
  ];

  return (
    <section id="import-journey" className="py-24 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>End-to-End Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The GeoCarve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              5-Stage Import Journey
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Importing heavy machinery shouldn&apos;t be an uncertain gamble. We replace guesswork with transparent milestones from international factory gates to your job site in Ethiopia.
          </p>
        </div>

        {/* Step Navigation Pill Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 mb-10">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            const Icon = s.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 p-3 rounded-xl text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                    isActive ? "bg-slate-950 text-amber-400" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {s.step}
                </div>
                <div className="truncate text-xs font-medium">
                  {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        {(() => {
          const current = steps[activeStep];
          const StepIcon = current.icon;
          return (
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Step Overview */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                      STAGE {current.step} OF 05
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Estimated Time: {current.timeline}
                    </span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="text-xs text-slate-400">
                      Location: {current.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {current.summary}
                  </p>

                  {/* Deliverables box */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400">
                      What GeoCarve Delivers at this Stage:
                    </h4>
                    <div className="space-y-2">
                      {current.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-sm text-slate-200">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation controls */}
                  <div className="pt-6 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenQuoteModal(`Import Stage: ${current.title}`)}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2"
                    >
                      <span>Inquire About Import Terms</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                      >
                        Previous Stage
                      </button>
                      <button
                        onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                      >
                        Next Stage
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Visual Representation */}
                <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <StepIcon className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      Clear Milestones, Zero Hidden Costs
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Every step is tracked with documented confirmation. We handle foreign currency proformas, shipping line bookings, port stevedoring, and dry port transit so you can focus entirely on executing your project.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Import Progress</span>
                      <span className="text-amber-400 font-bold">{(activeStep + 1) * 20}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                        style={{ width: `${(activeStep + 1) * 20}%` }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
