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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border-2 border-yellow-300 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[95vh] overflow-y-auto">
        
        {/* Decorative subtle yellow gradient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-yellow-50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="relative z-10">
            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-yellow-800 font-bold bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300">
                <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
                <span>Direct Sourcing &amp; Quotation Builder</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                Request Heavy Machinery Quote
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Get transparent pricing, shipping schedules, and proforma consultation from our Addis Ababa machinery desk.
              </p>
            </div>

            {/* Stepper progress indicator */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-yellow-100">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= 1
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 shadow-sm"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  1
                </div>
                <span className="text-xs font-semibold text-gray-700 hidden sm:inline">
                  Machinery Specs
                </span>
              </div>

              <div className="w-12 h-0.5 bg-yellow-200" />

              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= 2
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 shadow-sm"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  2
                </div>
                <span className="text-xs font-semibold text-gray-700 hidden sm:inline">
                  Location &amp; Timing
                </span>
              </div>

              <div className="w-12 h-0.5 bg-yellow-200" />

              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= 3
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 shadow-sm"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  3
                </div>
                <span className="text-xs font-semibold text-gray-700 hidden sm:inline">
                  Contact Details
                </span>
              </div>
            </div>

            {/* Step 1: Equipment Selection */}
            {step === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-gray-800 mb-2">
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
                            ? "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-400 text-yellow-900 shadow-sm font-bold"
                            : "bg-white border-gray-200 text-gray-700 hover:border-yellow-300 hover:bg-yellow-50/30"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-gray-800 mb-2">
                    Preferred International Brand
                  </label>
                  <select
                    value={brandPreference}
                    onChange={(e) => setBrandPreference(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20"
                  >
                    {brandOptions.map((brand) => (
                      <option key={brand} value={brand} className="bg-white text-gray-900">
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-gray-800 mb-2">
                    Operating Scale / Tonnage
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["10 – 20 Ton", "20 – 35 Ton", "40+ Ton Heavy"].map((scale) => (
                      <button
                        type="button"
                        key={scale}
                        onClick={() => setTonnageScale(scale)}
                        className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                          tonnageScale === scale
                            ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-bold border-yellow-500 shadow-sm"
                            : "bg-white border-gray-200 text-gray-700 hover:border-yellow-300"
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
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-md shadow-yellow-500/20 cursor-pointer"
                  >
                    <span>Proceed to Delivery &amp; Timing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location & Timing */}
            {step === 2 && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-gray-800 mb-2">
                    Destination Project Region in Ethiopia
                  </label>
                  <select
                    value={deliveryRegion}
                    onChange={(e) => setDeliveryRegion(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20"
                  >
                    {regions.map((reg) => (
                      <option key={reg} value={reg} className="bg-white text-gray-900">
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono font-bold text-gray-800 mb-2">
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
                            ? "bg-yellow-50 border-yellow-400 text-yellow-950 font-semibold"
                            : "bg-white border-gray-200 text-gray-700 hover:border-yellow-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="procurementTimeline"
                          checked={procurementTimeline === time}
                          onChange={() => setProcurementTimeline(time)}
                          className="accent-yellow-500"
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
                    className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm flex items-center gap-1.5 cursor-pointer font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-md shadow-yellow-500/20 cursor-pointer"
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
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Abebe Kebede"
                        className="w-full bg-white border border-gray-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Afro-Tsion Construction / Private"
                        className="w-full bg-white border border-gray-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number (Ethiopia) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+251 911 000 000"
                        className="w-full bg-white border border-gray-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="abebe@company.et"
                        className="w-full bg-white border border-gray-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Specific Project Needs or Attachments
                  </label>
                  <textarea
                    rows={2}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="e.g. Need hydraulic rock breaker attachment, road cutting at 2,400m altitude..."
                    className="w-full bg-white border border-gray-300 rounded-xl p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20"
                  />
                </div>

                {/* Sourcing Summary Review */}
                <div className="p-3.5 rounded-xl bg-yellow-50 border border-yellow-200 text-xs text-gray-800 space-y-1 font-mono">
                  <div className="text-yellow-800 font-bold uppercase">Sourcing Summary:</div>
                  <div>Machine: <span className="font-bold text-gray-900">{equipmentType}</span> ({tonnageScale})</div>
                  <div>Brand Preference: <span className="font-bold text-gray-900">{brandPreference}</span></div>
                  <div>Destination: <span className="font-bold text-gray-900">{deliveryRegion}</span></div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-gray-500 hover:text-gray-900 text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-md shadow-yellow-500/20 cursor-pointer"
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
          <div className="relative z-10 text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 border border-yellow-300 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-yellow-800 font-bold bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                Inquiry Ref #{inquiryRef}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 pt-2">
                Thank You, {fullName || "Partner"}!
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                Your machinery request for <strong className="text-yellow-800 font-bold">{equipmentType}</strong> has been logged with our Addis Ababa commercial team. An equipment specialist will contact you at <strong className="text-gray-900">{phone}</strong> within 4 business hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-xs text-gray-700 max-w-sm mx-auto text-left space-y-1">
              <div>• Equipment: {equipmentType}</div>
              <div>• Region: {deliveryRegion}</div>
              <div>• Timeline: {procurementTimeline}</div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/251911234567?text=Hello%20GeoCarve,%20I%20just%20submitted%20a%20machinery%20quote%20request%20for%20${encodeURIComponent(equipmentType)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-yellow-50 text-gray-900 font-semibold text-xs border border-yellow-300 flex items-center gap-2 shadow-sm"
              >
                <span>WhatsApp Connect</span>
              </a>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-xs shadow-sm cursor-pointer"
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
