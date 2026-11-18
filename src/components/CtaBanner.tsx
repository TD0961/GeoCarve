"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export default function CtaBanner({ onOpenQuoteModal }: CtaBannerProps) {
  return (
    <section className="bg-gradient-to-r from-yellow-100/90 via-amber-50 to-yellow-100/90 text-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y-2 border-yellow-300 shadow-sm">
      {/* Decorative yellow gradient lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative z-10">
        
        <div className="space-y-3 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase font-mono font-bold tracking-widest text-yellow-900 bg-yellow-200/80 border border-yellow-300 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>Let&apos;s Carve Our Future Together</span>
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900">
            Ready to Acquire Heavy Machinery for Your Project?
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            Contact our Addis Ababa commercial desk for transparent proforma invoices, verified LC guidance, and fast-track shipping via Djibouti.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href="tel:+251911234567"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-sm px-7 py-3.5 rounded-full shadow-md shadow-yellow-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0911 234 567</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 bg-white hover:bg-yellow-50 text-gray-900 border-2 border-yellow-300 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4 text-yellow-600" />
          </button>

          <a
            href="https://wa.me/251911234567?text=Hello%20GeoCarve,%20I%20would%20like%20to%20inquire%20about%20heavy%20machinery."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-yellow-50 text-gray-900 border-2 border-yellow-300 font-bold text-sm px-5 py-3.5 rounded-full transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-yellow-600" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
