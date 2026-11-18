"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  Building,
  Sparkles
} from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    <section id="contact" className="py-24 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with GeoCarve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Machinery Investment
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you are evaluating equipment choices for an upcoming infrastructure tender or need immediate ex-depot machinery in Addis Ababa, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-wide">
                GeoCarve Ethiopia Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Head Office & Commercial Desk</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      Bole Sub-City, Near Cameroon Street<br />
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Machinery Yard & Storage Depot</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      Kality Industrial Corridor / Modjo Dry Port Interchange<br />
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Direct Telephone Hotlines</div>
                    <div className="text-slate-400 text-xs mt-0.5 space-y-0.5 font-mono">
                      <div><a href="tel:+251911234567" className="hover:text-amber-400 transition-colors">+251 (0) 911 234 567</a> (Sales & Sourcing)</div>
                      <div><a href="tel:+251911890123" className="hover:text-amber-400 transition-colors">+251 (0) 911 890 123</a> (Logistics & LC)</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Official Email Communications</div>
                    <div className="text-slate-400 text-xs mt-0.5 space-y-0.5">
                      <div>contact@geocarve.et</div>
                      <div>imports@geocarve.et</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Operational Hours</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      Monday – Friday: 8:30 AM – 5:30 PM (EAT)<br />
                      Saturday: 8:30 AM – 1:00 PM (EAT)
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://wa.me/251911234567?text=Hello%20GeoCarve,%20I%20would%20like%20to%20inquire%20about%20heavy%20machinery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with an Equipment Specialist on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl relative">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-6">
                    <h3 className="text-2xl font-extrabold text-white">
                      Send a Message or Project Request
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Fill out this quick form and our equipment team will provide a tailored reply.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dawit Haile"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number (Ethiopia) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 911 000 000"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Haile Construction PLC"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="dawit@company.et"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Machinery Category of Interest
                    </label>
                    <select
                      value={formData.machineryInterest}
                      onChange={(e) => setFormData({ ...formData, machineryInterest: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
                    >
                      <option value="Excavators & Earthmoving">Crawler Excavator & Earthmoving</option>
                      <option value="Wheel Loaders">Wheel Loaders (3-7 Ton)</option>
                      <option value="Mobile Cranes">Mobile Cranes & Lifting Equipment</option>
                      <option value="Dump Trucks">Heavy Dump & Tipper Trucks (6x4 / 8x4)</option>
                      <option value="Road Construction">Motor Graders & Asphalt Rollers</option>
                      <option value="Mining & Quarrying">Mining & Quarrying Heavy Equipment</option>
                      <option value="General Import Consultation">General Importation & LC Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project location in Ethiopia, required tonnage, preferred brands, or timeframe..."
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to GeoCarve Desk</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Message Delivered
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to GeoCarve. A senior machinery specialist will contact you shortly at <span className="text-amber-400 font-bold">{formData.phone}</span>.
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
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
