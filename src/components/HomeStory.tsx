"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

interface HomeStoryProps {
  onOpenQuoteModal: () => void;
}

export default function HomeStory({ onOpenQuoteModal }: HomeStoryProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50/40 via-white to-yellow-50/30 border-b border-yellow-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The GeoCarve Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Building Ethiopia&apos;s Future Hand in Hand
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-yellow-200 shadow-xl shadow-yellow-500/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Handover Feature */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border-2 border-yellow-200 bg-yellow-50 group">
              <Image
                src="/images/partnership-handover.jpg"
                alt="GeoCarve machinery advisor and Ethiopian contractor client handshake handover"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-yellow-300 shadow-lg flex items-center justify-between text-stone-900">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block">
                    Customer Trust &amp; Handover
                  </span>
                  <p className="text-sm font-bold text-stone-900">
                    Depot Commissioning &amp; In-Country Delivery
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-sm">
                  <Handshake className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300 inline-block">
              Who We Are
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug">
              Connecting Ambition With Reliable Machinery
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              GeoCarve is an Ethiopian heavy machinery import and sales company committed to connecting the country&apos;s growing industries with equipment from international manufacturers.
            </p>

            <blockquote className="border-l-4 border-yellow-400 bg-yellow-50/70 p-3.5 rounded-r-2xl text-xs sm:text-sm italic text-stone-700 font-medium">
              &ldquo;At GeoCarve, we see every machine as part of a bigger picture: a road being built, a business expanding, an industry developing, or a new opportunity taking shape.&rdquo;
            </blockquote>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Multi-Brand International Sourcing &amp; LC Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Djibouti Maritime to Modjo Dry Port Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Developing After-Sales &amp; Genuine Parts Network</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about-us"
                className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 px-6 py-3 rounded-full font-bold text-sm shadow-md shadow-yellow-500/20 transition-all flex items-center gap-2"
              >
                <span>Read Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+251911234567"
                className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-stone-900 hover:bg-yellow-100 px-6 py-3 rounded-full font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Call 0911 234 567</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
