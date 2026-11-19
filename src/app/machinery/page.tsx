"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MACHINERY_DATA, CATEGORIES, MachineItem } from "@/data/machineryData";
import {
  Search,
  Filter,
  Check,
  ArrowRight,
  Info,
  Phone,
  ArrowUpRight,
  Weight,
  Zap,
  Gauge,
  Layers,
  Sparkles,
  X
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import QuoteModal from "@/components/QuoteModal";

function MachineryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialBrand = searchParams.get("brand") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpecModal, setActiveSpecModal] = useState<MachineItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteMachine, setQuoteMachine] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (searchParams.get("category")) {
      setSelectedCategory(searchParams.get("category") || "all");
    }
    if (searchParams.get("brand")) {
      setSelectedBrand(searchParams.get("brand") || "");
    }
  }, [searchParams]);

  const brands = [
    "All Brands",
    "Caterpillar",
    "Komatsu",
    "SANY",
    "Volvo",
    "XCMG",
    "Shantui",
    "SDLG",
    "Sinotruk HOWO",
    "Zoomlion"
  ];

  const filtered = MACHINERY_DATA.filter((m) => {
    const matchCat = selectedCategory === "all" || m.category === selectedCategory;
    const matchBrand =
      !selectedBrand ||
      selectedBrand === "All Brands" ||
      m.brandOptions.some((b) => b.toLowerCase().includes(selectedBrand.toLowerCase()));
    const matchQuery =
      !searchQuery ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.brandOptions.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      m.idealFor.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCat && matchBrand && matchQuery;
  });

  const handleOpenQuote = (name?: string) => {
    setQuoteMachine(name);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Fleet Picture */}
      <section className="bg-gradient-to-b from-yellow-50/80 via-amber-50/30 to-white text-gray-900 pt-10 pb-16 relative overflow-hidden border-b border-yellow-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-yellow-800 uppercase tracking-widest bg-yellow-100 px-3.5 py-1.5 rounded-full border border-yellow-300">
                <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
                <span>Heavy Equipment Fleet</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Machinery Fleet &amp; Equipment Catalog
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Explore crawler excavators, heavy wheel loaders, all-terrain mobile cranes, and mining dump trucks available for import and site delivery across Ethiopia.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-yellow-900 pt-1">
                <span className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">10+ Multi-Brand Options</span>
                <span className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">Modjo Dry Port Clearance</span>
                <span className="bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">Pre-Shipment Inspected</span>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-yellow-300 shadow-xl bg-yellow-50">
              <Image
                src="/images/fleet-excavator.jpg"
                alt="Excavator & Heavy Fleet in Ethiopia"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-yellow-300 flex items-center justify-between shadow-md">
                <span className="text-gray-900 text-xs font-bold">
                  Tier-1 International Brands (CAT, Komatsu, SANY, Volvo)
                </span>
                <span className="text-yellow-800 text-[11px] font-mono font-bold bg-yellow-100 px-2 py-0.5 rounded border border-yellow-200">
                  Ready Import
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter and Search Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search Toolbar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-yellow-200 shadow-sm space-y-6 mb-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by machinery name, model, spec, or application..."
                className="w-full bg-yellow-50/30 border border-yellow-200 rounded-2xl pl-11 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Brand Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-yellow-50/30 border border-yellow-200 rounded-2xl px-4 py-3 text-sm text-gray-900 font-medium focus:outline-none focus:border-yellow-400"
              >
                {brands.map((b) => (
                  <option key={b} value={b === "All Brands" ? "" : b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters */}
            <div className="md:col-span-3 flex justify-end">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("");
                  setSearchQuery("");
                }}
                className="px-5 py-3 rounded-2xl bg-yellow-50 hover:bg-yellow-100 text-yellow-900 border border-yellow-200 text-xs font-bold w-full md:w-auto text-center cursor-pointer transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-yellow-100">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 shadow-sm"
                      : "bg-white hover:bg-yellow-50 text-gray-700 border border-yellow-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500 font-medium">
          <span>Showing <strong className="text-gray-900">{filtered.length}</strong> equipment series</span>
          <span className="text-yellow-800 font-semibold bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
            Nationwide Ethiopian Site Handover
          </span>
        </div>

        {/* Fleet Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-yellow-200 p-8 shadow-sm">
            <Filter className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">No machinery matching your filter</h3>
            <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
              We specialize in custom multi-brand international sourcing. Tell us what machine you need and we will locate and import it for you.
            </p>
            <button
              onClick={() => handleOpenQuote("Custom Equipment Sourcing")}
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:brightness-105 text-slate-950 font-bold text-sm shadow-md cursor-pointer"
            >
              Request Custom Sourcing
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-3xl overflow-hidden border border-yellow-200/90 shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-yellow-50">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/90 text-gray-900 backdrop-blur-md border border-yellow-300 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                      {machine.status}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-slate-950 font-bold text-[11px] px-2.5 py-1 rounded-full shadow-sm">
                      {machine.categoryLabel}
                    </span>
                  </div>

                  {/* Machine Name */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold drop-shadow-md group-hover:text-yellow-300 transition-colors">
                      {machine.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Brand tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-gray-500 font-medium">Brands:</span>
                    {machine.brandOptions.map((brand, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-yellow-50 text-yellow-900 border border-yellow-200 px-2 py-0.5 rounded font-semibold"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {machine.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-yellow-100 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <Weight className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span className="truncate">{machine.operatingWeight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span className="truncate">{machine.enginePower.split("@")[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span className="truncate">{machine.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span className="truncate text-yellow-800 font-bold">{machine.idealFor[0]}</span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setActiveSpecModal(machine)}
                      className="text-xs font-bold text-gray-700 hover:text-yellow-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-yellow-600" />
                      <span>Detailed Specs</span>
                    </button>

                    <button
                      onClick={() => handleOpenQuote(machine.name)}
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:brightness-105 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm shadow-yellow-500/20 cursor-pointer"
                    >
                      <span>Inquire / Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Sourcing Banner (White & Yellow Gradient) */}
        <div className="mt-16 bg-gradient-to-br from-yellow-100/90 via-amber-50 to-white rounded-3xl p-8 sm:p-12 border-2 border-yellow-300 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider bg-yellow-200/80 px-3 py-1 rounded-full border border-yellow-300">
              Tailored Equipment Procurement
            </span>
            <h3 className="text-2xl font-black text-gray-900">
              Need a Model Not Listed Here?
            </h3>
            <p className="text-gray-700 text-sm max-w-2xl leading-relaxed">
              We maintain direct relationships with global manufacturers. We source, inspect, and import exact equipment specifications, heavy mining rigs, or specialized hydraulic attachments.
            </p>
          </div>

          <button
            onClick={() => handleOpenQuote("Custom Specification Sourcing")}
            className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm whitespace-nowrap shadow-md shadow-yellow-500/20 cursor-pointer shrink-0"
          >
            Consult Sourcing Desk
          </button>
        </div>

      </div>

      {/* Full Specs Modal (White and Yellow Gradient) */}
      {activeSpecModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-yellow-300 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-yellow-800 font-bold bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                  {activeSpecModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mt-2">
                  {activeSpecModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveSpecModal(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-yellow-50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {activeSpecModal.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-700 font-bold">
                Available International Brands
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeSpecModal.brandOptions.map((brand, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-900 text-xs font-bold"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-gray-700 font-bold">
                Detailed Engineering Specifications
              </h4>
              <div className="bg-yellow-50/40 rounded-2xl border border-yellow-200 divide-y divide-yellow-100 text-sm">
                <div className="flex justify-between p-3">
                  <span className="text-gray-500">Operating Weight</span>
                  <span className="font-bold text-gray-900">{activeSpecModal.operatingWeight}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-gray-500">Engine Power</span>
                  <span className="font-bold text-gray-900">{activeSpecModal.enginePower}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-gray-500">Capacity / Bucket</span>
                  <span className="font-bold text-gray-900">{activeSpecModal.capacity}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-gray-500">Fuel &amp; Powertrain</span>
                  <span className="font-bold text-gray-900">{activeSpecModal.fuelEfficiency}</span>
                </div>
                {Object.entries(activeSpecModal.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between p-3">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-bold text-gray-900">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-gray-700 font-bold">
                Ideal Ethiopian Project Applications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {activeSpecModal.idealFor.map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-yellow-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveSpecModal(null)}
                className="px-5 py-2.5 rounded-full text-gray-600 hover:text-gray-900 text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const mName = activeSpecModal.name;
                  setActiveSpecModal(null);
                  handleOpenQuote(mName);
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:brightness-105 text-slate-950 font-bold text-sm shadow-md shadow-yellow-500/20 cursor-pointer"
              >
                Request Quotation for this Machine
              </button>
            </div>
          </div>
        </div>
      )}

      <CtaBanner onOpenQuoteModal={() => handleOpenQuote()} />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedItem={quoteMachine}
      />
    </div>
  );
}

export default function MachineryPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-gray-500">Loading catalog...</div>}>
      <MachineryContent />
    </Suspense>
  );
}
