"use client";

import React from "react";
import Image from "next/image";
import { Wrench, Cpu, ShieldAlert, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

interface TechnicalSupportProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function TechnicalSupport({ onOpenQuoteModal }: TechnicalSupportProps) {
  const supportPoints = [
    {
      title: "Genuine Spare Parts Supply Chain",
      desc: "Direct access to OEM filters, hydraulic seals, track links, teeth, pins, and critical engine rebuild components."
    },
    {
      title: "Advanced Electronic & Hydraulic Diagnostics",
      desc: "Factory-grade diagnostic software and pressure testing tools to diagnose faults quickly and prevent downtime."
    },
    {
      title: "Maintenance Coordination & Service Schedules",
      desc: "Tailored 250h, 500h, and 1,000h operational maintenance schedules designed for Ethiopian dust and altitude conditions."
    },
    {
      title: "Operator Handover & Technical Training",
      desc: "Practical hands-on training for your site operators to optimize machine efficiency, fuel savings, and daily checks."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Wrench className="w-3.5 h-3.5" />
              <span>Service & Reliability</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Developing Dedicated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                After-Sales Capabilities
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We understand that the true value of heavy machinery is realized over years of dependable daily operation on site. That is why GeoCarve is committed to continuously developing support capabilities before and after your purchase.
            </p>

            <div className="space-y-4 pt-2">
              {supportPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal("Parts & Technical Support")}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-white/10 hover:border-amber-500/40 flex items-center gap-2 transition-all"
              >
                <span>Inquire About Spare Parts & Maintenance</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Workshop Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 group">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="/images/technical-support.jpg"
                  alt="Ethiopian heavy machinery technicians with diagnostic tablet servicing large industrial loader"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating diagnostic badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold">
                    <Cpu className="w-4 h-4" />
                    <span>DIAGNOSTIC EXCELLENCE</span>
                  </div>
                  <div className="text-white font-bold text-sm mt-0.5">
                    Rigorous Inspection & Pre-Commissioning
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
