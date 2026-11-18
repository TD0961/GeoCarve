"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MACHINERY_DATA, CATEGORIES, MachineItem } from "@/data/machineryData";
import {
  Search,
  Filter,
  Check,
  ArrowRight,
  Shield,
  Zap,
  Gauge,
  Weight,
  Layers,
  Sparkles,
  Info
} from "lucide-react";

interface FleetCatalogProps {
  onSelectMachineForQuote: (machineName: string) => void;
}

export default function FleetCatalog({ onSelectMachineForQuote }: FleetCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSpecModal, setActiveSpecModal] = useState<MachineItem | null>(null);

  // Filter items based on category and search query
  const filteredMachines = MACHINERY_DATA.filter((machine) => {
    const matchesCategory =
      selectedCategory === "all" || machine.category === selectedCategory;
    const matchesSearch =
      machine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.brandOptions.some((b) =>
        b.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      machine.idealFor.some((app) =>
        app.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="machinery" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle radial backdrop glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-widest text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Heavy Equipment Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            International Machinery Tailored to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Ethiopian Operations
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We source, inspect, and supply heavy machinery from premier global manufacturers. Explore our core equipment classes built to withstand high altitudes, basalt rock, and rigorous project cycles.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold"
                      : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/5 hover:border-amber-500/30"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model, brand, or application..."
              className="w-full bg-slate-900/90 border border-white/10 focus:border-amber-500/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Machinery Grid */}
        {filteredMachines.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-white/5">
            <Filter className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No machinery matches your filter</h3>
            <p className="text-slate-400 text-sm mt-1">
              Looking for a custom machine or specific manufacturer? We source on request.
            </p>
            <button
              onClick={() => onSelectMachineForQuote("Custom Specification Sourcing")}
              className="mt-4 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Request Custom Sourcing
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide backdrop-blur-md ${
                        machine.status.includes("In Stock")
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {machine.status}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-slate-950/80 backdrop-blur-md text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10">
                      {machine.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Machine Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {machine.name}
                    </h3>

                    {/* Brand Options Chips */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] text-slate-400 font-medium">Brands:</span>
                      {machine.brandOptions.map((brand, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono bg-white/5 text-amber-300/90 px-2 py-0.5 rounded border border-white/5"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {machine.description}
                    </p>

                    {/* Technical Specs Pill Matrix */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="bg-slate-950/70 p-2.5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-mono">
                          <Weight className="w-3 h-3 text-amber-400" />
                          <span>Weight</span>
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5 truncate">
                          {machine.operatingWeight}
                        </div>
                      </div>

                      <div className="bg-slate-950/70 p-2.5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-mono">
                          <Zap className="w-3 h-3 text-amber-400" />
                          <span>Power</span>
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5 truncate">
                          {machine.enginePower.split("@")[0]}
                        </div>
                      </div>

                      <div className="bg-slate-950/70 p-2.5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-mono">
                          <Gauge className="w-3 h-3 text-amber-400" />
                          <span>Capacity</span>
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5 truncate">
                          {machine.capacity}
                        </div>
                      </div>

                      <div className="bg-slate-950/70 p-2.5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-mono">
                          <Layers className="w-3 h-3 text-amber-400" />
                          <span>Application</span>
                        </div>
                        <div className="text-xs font-bold text-amber-400 mt-0.5 truncate">
                          {machine.idealFor[0]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveSpecModal(machine)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-amber-400" />
                      <span>Full Specs</span>
                    </button>

                    <button
                      onClick={() => onSelectMachineForQuote(machine.name)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95"
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

        {/* Bottom Banner for Custom Machinery Requirements */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900 border border-amber-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Need a Specific International Manufacturer or Custom Machine?
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              We specialize in custom multi-brand equipment procurement. Whether you need specialized piling rigs, asphalt pavers, long-reach excavators, or tunnel mining machinery, our international sourcing team will find and import the exact model for your project.
            </p>
          </div>
          <button
            onClick={() => onSelectMachineForQuote("Custom Sourcing Request")}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 shrink-0"
          >
            Consult Sourcing Specialist
          </button>
        </div>

      </div>

      {/* Full Specs Modal */}
      {activeSpecModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                  {activeSpecModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeSpecModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveSpecModal(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {activeSpecModal.description}
            </p>

            {/* Available Brands */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Available International Brands
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeSpecModal.brandOptions.map((brand, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Detailed Engineering Specifications
              </h4>
              <div className="bg-slate-950 rounded-xl border border-white/5 divide-y divide-white/5 text-sm">
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">Operating Weight</span>
                  <span className="font-semibold text-white">{activeSpecModal.operatingWeight}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">Engine Power</span>
                  <span className="font-semibold text-white">{activeSpecModal.enginePower}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">Capacity / Bucket</span>
                  <span className="font-semibold text-white">{activeSpecModal.capacity}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">Fuel & Powertrain</span>
                  <span className="font-semibold text-white">{activeSpecModal.fuelEfficiency}</span>
                </div>
                {Object.entries(activeSpecModal.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between p-3">
                    <span className="text-slate-400">{key}</span>
                    <span className="font-semibold text-white">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Ideal Project Applications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeSpecModal.idealFor.map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveSpecModal(null)}
                className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white text-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const targetName = activeSpecModal.name;
                  setActiveSpecModal(null);
                  onSelectMachineForQuote(targetName);
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
              >
                Request Quotation for this Machine
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
