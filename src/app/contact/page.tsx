"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Building,
  Sparkles
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import QuoteModal from "@/components/QuoteModal";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+251 ",
    email: "",
    company: "",
    machineryInterest: "Excavators & Earthmoving",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Page Header (White & Yellow Gradient) */}
      <section className="bg-gradient-to-b from-yellow-100/70 via-amber-50/40 to-white text-gray-900 py-16 sm:py-20 relative overflow-hidden border-b border-yellow-200/60">
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
          <Image
            src="/images/hero-geocarve.jpg"
            alt="GeoCarve Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 uppercase tracking-widest bg-yellow-400/20 px-3.5 py-1.5 rounded-full border border-yellow-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>Ethiopia Commercial Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Contact GeoCarve Ethiopia
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to our Addis Ababa team for machinery consultations, proforma requests, or depot inspections.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-gray-900">
                Headquarters &amp; Machinery Yard
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0 border border-yellow-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Commercial Office</div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                      Bole Sub-City, Cameroon Street Corridor<br />
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0 border border-yellow-200">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Machinery Depot &amp; Yard</div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                      Kality Industrial Zone / Modjo Dry Port Interchange<br />
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0 border border-yellow-200">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Direct Telephone Hotlines</div>
                    <div className="text-gray-600 text-xs mt-0.5 space-y-0.5 font-mono">
                      <div><a href="tel:+251911234567" className="hover:text-yellow-700 font-semibold">+251 (0) 911 234 567</a> (Sales &amp; Import)</div>
                      <div><a href="tel:+251911890123" className="hover:text-yellow-700 font-semibold">+251 (0) 911 890 123</a> (Logistics &amp; LC)</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0 border border-yellow-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Official Inquiries</div>
                    <div className="text-gray-600 text-xs mt-0.5 space-y-0.5 font-mono">
                      <div>contact@geocarve.et</div>
                      <div>sourcing@geocarve.et</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0 border border-yellow-200">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Working Hours</div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      Monday – Friday: 8:30 AM – 5:30 PM (EAT)<br />
                      Saturday: 8:30 AM – 1:00 PM (EAT)
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <div className="pt-4 border-t border-yellow-100">
                <a
                  href="https://wa.me/251911234567?text=Hello%20GeoCarve,%20I%20would%20like%20to%20inquire%20about%20heavy%20machinery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-yellow-50 text-gray-900 font-bold text-xs flex items-center justify-center gap-2 transition-all border-2 border-yellow-300 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-yellow-600" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-yellow-200 shadow-sm relative">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-6">
                    <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                      Send an Inquiry
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-900 pt-2">
                      Request Equipment Consultation
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Our machinery advisors will review your project requirements and respond within 4 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Solomon Berhe"
                        className="w-full bg-yellow-50/20 border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone Number (Ethiopia) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 911 000 000"
                        className="w-full bg-yellow-50/20 border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-900 font-mono placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Berhe Engineering PLC"
                        className="w-full bg-yellow-50/20 border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="solomon@company.et"
                        className="w-full bg-yellow-50/20 border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Machinery Category of Interest
                    </label>
                    <select
                      value={formData.machineryInterest}
                      onChange={(e) => setFormData({ ...formData, machineryInterest: e.target.value })}
                      className="w-full bg-yellow-50/20 border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-yellow-400 font-medium"
                    >
                      <option value="Excavators & Earthmoving">Crawler Excavator &amp; Earthmoving</option>
                      <option value="Wheel Loaders">Wheel Loaders (3-7 Ton)</option>
                      <option value="Mobile Cranes">Mobile Cranes &amp; Lifting Equipment</option>
                      <option value="Dump Trucks">Heavy Dump &amp; Tipper Trucks (6x4 / 8x4)</option>
                      <option value="Road Construction">Motor Graders &amp; Asphalt Rollers</option>
                      <option value="Mining & Quarrying">Mining &amp; Quarrying Heavy Equipment</option>
                      <option value="General Import Consultation">General Importation &amp; LC Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Project Location &amp; Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required tonnage, destination in Ethiopia, timeline, or preferred brand..."
                      className="w-full bg-yellow-50/20 border border-gray-300 rounded-2xl p-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-sm shadow-md shadow-yellow-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 border border-yellow-300 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Message Received
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-gray-900">{formData.name}</span>. A GeoCarve equipment specialist will contact you at <span className="text-yellow-800 font-bold">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "+251 ",
                        email: "",
                        company: "",
                        machineryInterest: "Excavators & Earthmoving",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-900 border border-yellow-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
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
