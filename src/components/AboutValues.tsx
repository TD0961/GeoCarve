"use client";

import React, { useState } from "react";
import {
  Eye,
  Target,
  Shield,
  Clock,
  Award,
  Heart,
  Briefcase,
  TrendingUp,
  Sparkles
} from "lucide-react";

export default function AboutValues() {
  const [activeTab, setActiveTab] = useState<"values" | "story">("values");

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      text: "We conduct our business with honesty, transparency, and respect, building relationships founded on trust."
    },
    {
      icon: Clock,
      title: "Reliability",
      text: "We understand the importance of dependable equipment and business commitments. We strive to be a company our customers can confidently work with."
    },
    {
      icon: Award,
      title: "Quality",
      text: "We place importance on equipment quality, product specifications, and suitability for the intended application."
    },
    {
      icon: Heart,
      title: "Customer Commitment",
      text: "We value every customer and take the time to understand their requirements, priorities, and expectations."
    },
    {
      icon: Briefcase,
      title: "Professionalism",
      text: "We approach our work with responsibility, attention to detail, and a commitment to maintaining high business standards."
    },
    {
      icon: TrendingUp,
      title: "Progress",
      text: "We believe in the power of machinery to create opportunities, strengthen industries, and contribute to a better future."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Profile & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who We Are & What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Stand For
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            GeoCarve is an Ethiopian heavy machinery import and sales company committed to connecting the country&apos;s growing industries with equipment from international manufacturers.
          </p>
        </div>

        {/* Vision & Mission Dual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/20 p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
              <Eye className="w-7 h-7" />
            </div>

            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
              Our Vision
            </span>

            <h3 className="text-2xl font-black text-white mt-1 mb-4">
              To Become Ethiopia&apos;s Most Trusted Machinery Partner
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To become one of Ethiopia&apos;s most trusted heavy machinery import and sales companies, recognized for providing access to international machinery brands, building lasting customer relationships, and contributing to the country&apos;s infrastructure and industrial development.
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/20 p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
              <Target className="w-7 h-7" />
            </div>

            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
              Our Mission
            </span>

            <h3 className="text-2xl font-black text-white mt-1 mb-4">
              Empowering Ethiopian Ambitions & Operations
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To import and supply heavy machinery that supports the ambitions and operational needs of Ethiopian businesses and individuals. We are committed to delivering a professional and transparent purchasing experience, offering suitable equipment choices, and continuously developing our capabilities to serve customers before and after their purchases.
            </p>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Core Values
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl mx-auto">
              These fundamental principles guide every proforma we issue, every machine we inspect, and every handshake we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-white/5 hover:border-amber-500/30 p-6 transition-all duration-300 group hover:bg-slate-900/90"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
