"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  Building,
  MapPin,
  Calendar,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Send,
  Sparkles
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedItem
}: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState("GC-ET-84920");

  // Form State
  const [equipmentType, setEquipmentType] = useState<string>("Crawler Excavator");
  const [tonnageScale, setTonnageScale] = useState<string>("20 – 35 Ton Standard");
  const [brandPreference, setBrandPreference] = useState<string>("Best Spec Recommendation");
  const [deliveryRegion, setDeliveryRegion] = useState<string>("Addis Ababa / Surrounding");
  const [procurementTimeline, setProcurementTimeline] = useState<string>("Within 30 Days (Urgent)");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("+251 ");
  const [email, setEmail] = useState("");
  const [projectNotes, setProjectNotes] = useState("");

  useEffect(() => {
    if (preselectedItem) {
      setEquipmentType(preselectedItem);
    }
  }, [preselectedItem]);

  if (!isOpen) return null;

  const equipmentOptions = [
    "Crawler Excavator",
    "Heavy Wheel Loader",
    "All-Terrain Mobile Crane",
    "Heavy Dump / Tipper Truck",
    "Precision Motor Grader",
    "Track-Type Bulldozer",
    "Mining & Quarrying Rig",
    "Custom International Sourcing"
  ];

  const brandOptions = [
    "Best Spec Recommendation",
    "Caterpillar (CAT)",
    "Komatsu",
    "SANY Heavy Industry",
    "XCMG",
    "Volvo Construction",
    "Shantui",
    "Sinotruk HOWO",
    "Zoomlion"
  ];

  const regions = [
    "Addis Ababa / Surrounding",
    "Modjo Dry Port Clearance",
    "Oromia (Adama, Bishoftu, Shashemene)",
    "Sidama (Hawassa)",
    "Amhara (Bahir Dar, Gondar, Dessie)",
    "Tigray (Mekelle)",
    "Dire Dawa / Harar",
    "Afar / Semera Corridor",
    "South Ethiopia / SNNP",
    "Somali Region (Jijiga)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryRef(`GC-ET-${Math.floor(10000 + Math.random() * 90000)}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Sourcing & Quotation Builder</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Request Heavy Machinery Quote
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Get transparent pricing, shipping schedules, and proforma consultation from our Addis Ababa machinery desk.
              </p>
            </div>

            {/* Stepper progress indicator */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 1 ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  1
                </div>
                <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                  Machinery Specs
                </span>
              </div>

              <div className="w-12 h-0.5 bg-white/10" />

              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 2 ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  2
                </div>
                <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                  Location & Timing
                </span>
              </div>

              <div className="w-12 h-0.5 bg-white/10" />

              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 3 ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  3
                </div>
                <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                  Contact Details
                </span>
              </div>
            </div>

            {/* Step 1: Equipment Selection */}
            {step === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-amber-400 mb-2">
                    Select Equipment Category
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {equipmentOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setEquipmentType(opt)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                          equipmentType === opt
                            ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm"
                            : "bg-slate-950 border-white/5 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-slate-300 mb-2">
                    Preferred International Brand
                  </label>
                  <select
                    value={brandPreference}
                    onChange={(e) => setBrandPreference(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
                  >
                    {brandOptions.map((brand) => (
                      <option key={brand} value={brand} className="bg-slate-900 text-white">
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-slate-300 mb-2">
                    Operating Scale / Tonnage
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["10 – 20 Ton", "20 – 35 Ton", "40+ Ton Heavy"].map((scale) => (
                      <button
                        type="button"
                        key={scale}
                        onClick={() => setTonnageScale(scale)}
                        className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all ${
                          tonnageScale === scale
                            ? "bg-amber-500 text-slate-950 font-bold border-amber-500"
                            : "bg-slate-950 border-white/5 text-slate-300"
                        }`}
                      >
                        {scale}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <span>Proceed to Delivery & Timeline</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location & Timing */}
            {step === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-amber-400 mb-2">
                    Destination Project Region in Ethiopia
                  </label>
                  <select
                    value={deliveryRegion}
                    onChange={(e) => setDeliveryRegion(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
                  >
                    {regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-slate-900 text-white">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-slate-300 mb-2">
                    Required Procurement Timeline
                  </label>
                  <div className="space-y-2">
                    {[
                      "Immediate (In-Stock Addis Ababa Depot)",
                      "Within 30 Days (Fast-Track Maritime Transit)",
                      "45 – 60 Days (Standard Factory Sourcing via LC)"
                    ].map((time) => (
                      <label
                        key={time}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          procurementTimeline === time
                            ? "bg-amber-500/10 border-amber-500 text-amber-300"
                            : "bg-slate-950 border-white/5 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="procurementTimeline"
                          checked={procurementTimeline === time}
                          onChange={() => setProcurementTimeline(time)}
                          className="accent-amber-500"
                        />
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white text-sm flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <span>Proceed to Contact Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Abebe Kebede"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Afro-Tsion Construction / Private"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (Ethiopia) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+251 911 000 000"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="abebe@company.et"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Specific Project Needs or Attachments
                  </label>
                  <textarea
                    rows={2}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="e.g. Need hydraulic rock breaker attachment, road cutting at 2,400m altitude..."
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-amber-500"
                  />
                </div>

                {/* Sourcing Summary Review */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/20 text-xs text-slate-300 space-y-1 font-mono">
                  <div className="text-amber-400 font-bold uppercase">Sourcing Summary:</div>
                  <div>Machine: <span className="text-white">{equipmentType}</span> ({tonnageScale})</div>
                  <div>Brand Preference: <span className="text-white">{brandPreference}</span></div>
                  <div>Destination: <span className="text-white">{deliveryRegion}</span></div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-slate-400 hover:text-white text-xs flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Machinery Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                Inquiry Ref #{inquiryRef}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Thank You, {fullName || "Partner"}!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your machinery request for <strong className="text-amber-400">{equipmentType}</strong> has been logged with our Addis Ababa commercial team. An equipment specialist will contact you at <strong className="text-white">{phone}</strong> within 4 business hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/5 text-xs text-slate-400 max-w-sm mx-auto text-left space-y-1">
              <div>• Equipment: {equipmentType}</div>
              <div>• Region: {deliveryRegion}</div>
              <div>• Timeline: {procurementTimeline}</div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/251911234567?text=Hello%20GeoCarve,%20I%20just%20submitted%20a%20machinery%20quote%20request%20for%20${encodeURIComponent(equipmentType)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
              >
                <span>Instant WhatsApp Connect</span>
              </a>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
