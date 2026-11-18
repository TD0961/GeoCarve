"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Target,
  Shield,
  Clock,
  Award,
  Heart,
  Briefcase,
  TrendingUp,
  Handshake,
  CheckCircle2,
  PhoneCall,
  ChevronDown,
  ArrowRight,
  Sparkles
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import QuoteModal from "@/components/QuoteModal";

export default function AboutUsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      q: "How does GeoCarve assist with import permits and Letter of Credit (LC)?",
      a: "We provide complete documentation support including compliant international proforma invoices, Harmonized System (HS) customs codes, manufacturer certificates of origin, and inspection reports aligned with National Bank of Ethiopia guidelines."
    },
    {
      q: "Which international brands can GeoCarve source?",
      a: "We source directly from leading global manufacturers across China, Japan, and Europe: Caterpillar, Komatsu, Volvo CE, SANY, XCMG, Shantui, SDLG, Sinotruk HOWO, and Zoomlion."
    },
    {
      q: "How does transport work from Djibouti Port to project sites in Ethiopia?",
      a: "We manage discharge at the Port of Djibouti, customs transit bonding, rail freight on the Ethio-Djibouti Railway or heavy multi-axle lowbed transport directly to Modjo Dry Port, followed by site delivery across all Ethiopian regions."
    },
    {
      q: "Can clients inspect machinery before taking delivery?",
      a: "Yes. For in-stock units, clients can inspect machines at our depot in Addis Ababa. For imported units, we provide certified factory pre-shipment audit reports and conduct joint physical commissioning at Modjo Dry Port or your job site."
    }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Page Header (White & Yellow Gradient) */}
      <section className="bg-gradient-to-b from-yellow-100/70 via-amber-50/40 to-white text-gray-900 py-16 sm:py-20 relative overflow-hidden border-b border-yellow-200/60">
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
          <Image
            src="/images/infrastructure-road.jpg"
            alt="Ethiopian Infrastructure"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 uppercase tracking-widest bg-yellow-400/20 px-3.5 py-1.5 rounded-full border border-yellow-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            About GeoCarve Heavy Machinery
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connecting Ethiopia&apos;s growing industries with reliable machinery from leading international manufacturers. Let&apos;s carve our future together.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Profile Card (2-column rounded-3xl card with yellow gradient accents) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-yellow-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-yellow-50 shadow-md border border-yellow-200">
            <Image
              src="/images/hero-geocarve.jpg"
              alt="GeoCarve Ethiopian Engineers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-yellow-300 shadow-lg">
              <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider block">
                Empowering Ethiopian Growth
              </span>
              <p className="text-sm font-bold text-gray-900">
                Multi-Brand Heavy Machinery Importation &amp; Sales
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-800 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
              Who We Are
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              Connecting Ethiopia&apos;s Industries with International Machinery
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              GeoCarve is an Ethiopian heavy machinery import and sales company committed to connecting the country&apos;s growing industries with machinery from international manufacturers.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We specialize in importing and supplying heavy equipment to meet the needs of construction companies, contractors, mining operations, government institutions, industrial businesses, real estate developers, and individual machinery buyers throughout Ethiopia.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We understand that heavy machinery represents a significant investment and plays an essential role in the success of projects and business operations. Our approach is therefore centered on providing access to suitable equipment, maintaining transparent business relationships, and making the machinery purchasing process as straightforward as possible.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 px-6 py-3 rounded-full font-bold text-sm shadow-md shadow-yellow-500/20 transition-all cursor-pointer"
              >
                Request Equipment Consultation
              </button>
              <a
                href="tel:+251911234567"
                className="inline-flex items-center gap-2 border-2 border-yellow-300 text-gray-800 hover:bg-yellow-50 px-6 py-3 rounded-full font-bold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-yellow-600" />
                <span>Call 0911 234 567</span>
              </a>
            </div>
          </div>
        </div>

        {/* Vision & Mission (2-card grid with yellow gradient) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-50/50 via-white to-amber-50/30 p-8 sm:p-10 rounded-3xl border border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-400 text-slate-950 flex items-center justify-center mb-6 shadow-sm">
              <Eye className="w-7 h-7" />
            </div>
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-2.5 py-1 rounded-full border border-yellow-200">
              Our Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-3 mb-3">
              To Become Ethiopia&apos;s Most Trusted Partner
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To become one of Ethiopia&apos;s most trusted heavy machinery import and sales companies, recognized for providing access to international machinery brands, building lasting customer relationships, and contributing to the country&apos;s infrastructure and industrial development.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50/50 via-white to-amber-50/30 p-8 sm:p-10 rounded-3xl border border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-400 text-slate-950 flex items-center justify-center mb-6 shadow-sm">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-2.5 py-1 rounded-full border border-yellow-200">
              Our Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-3 mb-3">
              Empowering Ethiopian Businesses &amp; Individuals
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To import and supply heavy machinery that supports the ambitions and operational needs of Ethiopian businesses and individuals. We are committed to delivering a professional and transparent purchasing experience, offering suitable equipment choices, and continuously developing our capabilities to serve customers before and after their purchases.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-yellow-200 shadow-sm space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              The fundamental standards that guide how we conduct business, interact with partners, and deliver equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-yellow-50/40 border border-yellow-200/80 hover:border-yellow-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-950 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
                      {v.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment Card (White & Yellow Gradient instead of dark slate) */}
        <div className="bg-gradient-to-br from-yellow-100/90 via-amber-50 to-white rounded-3xl p-8 sm:p-12 text-gray-900 border-2 border-yellow-300 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-200/80 px-3 py-1 rounded-full border border-yellow-300">
              Our Commitment
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              More than a Transaction. An Investment in Ethiopia&apos;s Growth.
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We believe successful business relationships are built through trust, consistency, and a genuine understanding of customer needs.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              At GeoCarve, we recognize that purchasing heavy machinery is not simply a transaction. It is an investment in productivity, growth, and future opportunities. We aim to make that investment easier by connecting customers with international equipment options and providing a professional purchasing experience.
            </p>
            <p className="text-yellow-800 text-sm font-bold italic">
              &ldquo;We are not just looking at the next machine we import. We are looking at the future we can help build together.&rdquo;
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold px-6 py-3.5 rounded-full text-center text-sm shadow-md shadow-yellow-500/20 transition-all cursor-pointer"
            >
              Partner with GeoCarve
            </button>
            <Link
              href="/machinery"
              className="bg-white hover:bg-yellow-50 text-gray-900 font-bold px-6 py-3.5 rounded-full text-center text-sm border-2 border-yellow-300 transition-all shadow-sm"
            >
              Browse Equipment Fleet
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-yellow-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Helpful answers on how we handle machinery sourcing, customs clearance, and delivery in Ethiopia.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-yellow-200/80 overflow-hidden bg-yellow-50/30 transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-yellow-50/60"
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-yellow-600 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-yellow-100 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
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
