"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does GeoCarve assist with import permits and Letter of Credit (LC)?",
      a: "We provide complete documentation support including compliant international proforma invoices, Harmonized System (HS) customs codes, certified manufacturer certificates of origin, and inspection documentation required by commercial banks in Ethiopia and the National Bank of Ethiopia (NBE). We also work with clients exploring supplier credit or direct import frameworks."
    },
    {
      q: "Which international manufacturers and brands can GeoCarve source?",
      a: "We maintain direct sourcing channels with global heavy machinery leaders across China, Japan, and Europe. This includes Tier-1 manufacturers such as Caterpillar, Komatsu, and Volvo Construction Equipment, as well as proven Asian industrial powerhouses like SANY, XCMG, Shantui, SDLG, Sinotruk (HOWO), and Zoomlion."
    },
    {
      q: "How does delivery work from Djibouti Port to the project site in Ethiopia?",
      a: "Our logistics coordinators supervise vessel discharge at the Port of Djibouti, customs transit bonding, and intermodal transport via the Ethio-Djibouti Railway or heavy-duty multi-axle lowbed trucks directly to Modjo Dry Port or Kality Dry Port. Following final Ethiopian Customs clearance, we coordinate direct lowbed haulage to your job site anywhere in Ethiopia."
    },
    {
      q: "Are the machines pre-inspected before shipment?",
      a: "Yes. Every machine procured through GeoCarve undergoes a mandatory pre-shipment quality and functional audit at the manufacturing plant. We verify engine serial numbers, hydraulic pressure benchmarks, electronic systems, and cabin specifications before loading onto international maritime cargo carriers."
    },
    {
      q: "What after-sales and spare parts assistance is provided?",
      a: "We are actively developing long-term after-sales capabilities. For all equipment imported through GeoCarve, we bundle initial preventive maintenance packages (filters, belts, seals) and provide direct fast-track procurement for genuine OEM components. Our technical team also coordinates with specialized Ethiopian heavy equipment mechanics for commissioning and troubleshooting."
    },
    {
      q: "Do you supply both ready depot stock and custom ordered machinery?",
      a: "Yes. We maintain select high-demand units (such as 30-ton crawler excavators, 5-ton wheel loaders, and heavy tipper trucks) at our equipment depot in Addis Ababa for immediate delivery. In addition, we execute custom procurement for specialized specifications, heavy cranes, or fleet orders with delivery within 25 to 45 days."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Questions
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about importing and purchasing heavy machinery in Ethiopia with GeoCarve.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-950/70 border border-white/5 hover:border-amber-500/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-white text-sm sm:text-base tracking-wide">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? "bg-amber-500 text-slate-950 rotate-180"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
