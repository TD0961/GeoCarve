"use client";

import React from "react";
import Image from "next/image";
import { Handshake, HeartHandshake, ShieldCheck, Trophy, Sparkles, ArrowRight } from "lucide-react";

interface PartnershipStoryProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function PartnershipStory({ onOpenQuoteModal }: PartnershipStoryProps) {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Humanized Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 group">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="/images/partnership-handover.jpg"
                  alt="GeoCarve machinery advisor and Ethiopian contractor client shaking hands in front of heavy machinery"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 shadow-xl space-y-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
                  <Handshake className="w-4 h-4" />
                  <span>Real Partnerships • Real Growth</span>
                </div>
                <p className="text-white text-sm font-semibold">
                  Equipment Handover & Site Commissioning in Addis Ababa
                </p>
                <p className="text-slate-400 text-xs">
                  Standing behind every machine from proforma negotiation to first engine ignition.
                </p>
              </div>
            </div>

            {/* Accent tag behind card */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Company Commitment */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Our Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              More Than a Transaction.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                An Investment in Ethiopia&apos;s Future.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We believe successful business relationships are built through trust, consistency, and a genuine understanding of customer needs.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              At GeoCarve, we recognize that purchasing heavy machinery is not simply buying metal and steel. It is an investment in productivity, growth, and future opportunities. We aim to make that investment easier by connecting customers with international equipment options and providing a professional purchasing experience.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Trust & Consistency</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Transparent contracts, honest import schedules, and zero surprise fees.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Trophy className="w-4 h-4" />
                  <span>Long-Term Relationship</span>
                </div>
                <p className="text-slate-400 text-xs">
                  We grow alongside the people and businesses contributing to Ethiopia&apos;s development.
                </p>
              </div>
            </div>

            <blockquote className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-white font-medium text-sm italic">
              &ldquo;We are not just looking at the next machine we import. We are looking at the future we can help build together.&rdquo;
            </blockquote>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal("Partnership Consultation")}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                <span>Partner With GeoCarve</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
