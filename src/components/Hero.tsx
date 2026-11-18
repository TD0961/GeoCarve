"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Phone,
  ArrowRight,
  Pause,
  Play,
  Search,
  Layers,
  Award,
  Weight
} from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: (category?: string) => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const router = useRouter();

  // Search Bar state
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedScale, setSelectedScale] = useState("");

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (selectedBrand) params.set("brand", selectedBrand);
    if (selectedScale) params.set("scale", selectedScale);
    router.push(`/machinery?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black pt-28 pb-16">
      
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-geocarve.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-700"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dual stylish gradient overlays: transitions smoothly to white at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10 pointer-events-none" />
      </div>

      {/* Video Play/Pause Toggle Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-24 right-6 z-20 hidden md:flex items-center gap-2 bg-black/40 hover:bg-black/70 text-white/90 hover:text-white px-3.5 py-1.5 rounded-full text-xs backdrop-blur-md transition-all border border-white/20 cursor-pointer"
        aria-label="Toggle Hero Video"
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 text-yellow-400" />
            <span>Pause Video</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 text-yellow-400" />
            <span>Play Video</span>
          </>
        )}
      </button>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full text-center">
        
        {/* Stylish Pill Badge */}
        <div className="inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400/25 to-amber-400/25 text-yellow-300 border border-yellow-400/40 text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-md mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Ethiopia&apos;s Leading Heavy Machinery Import &amp; Sales
          </span>
        </div>

        {/* Subtitle */}
        <h4 className="text-white/90 text-sm sm:text-xl lg:text-2xl font-light tracking-[0.25em] uppercase mb-3 drop-shadow-md">
          LET&apos;S CARVE OUR FUTURE TOGETHER
        </h4>

        {/* Grand Headline with stylish yellow gradient text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6 drop-shadow-lg">
          GEOCARVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300">HEAVY MACHINERY</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-100 text-sm sm:text-base md:text-lg mb-8 leading-relaxed drop-shadow-md font-normal">
          Connecting Ethiopia&apos;s contractors, mining operations, road infrastructure, and industrial developers with world-class heavy machinery from premier international manufacturers.
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a
            href="tel:+251911234567"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 px-8 py-3.5 rounded-full font-extrabold text-base shadow-xl shadow-yellow-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>0911 234 567</span>
          </a>

          <Link
            href="/machinery"
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/35 backdrop-blur-md px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:border-yellow-400"
          >
            <span>Explore Machinery Fleet</span>
            <ArrowRight className="w-4 h-4 text-yellow-400" />
          </Link>

          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200 cursor-pointer"
          >
            <span>Request Proforma Quote</span>
          </button>
        </div>

      </div>

      {/* Floating Quick Search Bar in stylish white with yellow gradient border */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-6">
        <form
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-6 border-2 border-yellow-300 text-stone-900 shadow-yellow-500/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-center">
            
            {/* Category Dropdown */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wide">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Machinery Category</span>
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-yellow-50/60 border border-yellow-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 font-medium focus:outline-none focus:border-amber-500"
              >
                <option value="">All Categories</option>
                <option value="excavator">Excavators &amp; Bulldozers</option>
                <option value="loader">Wheel Loaders</option>
                <option value="crane">Mobile Cranes &amp; Lifting</option>
                <option value="dumptruck">Heavy Dump &amp; Tipper Trucks</option>
                <option value="roadwork">Road Graders &amp; Rollers</option>
              </select>
            </div>

            {/* Brand Dropdown */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wide">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Preferred Brand</span>
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-yellow-50/60 border border-yellow-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 font-medium focus:outline-none focus:border-amber-500"
              >
                <option value="">All Brands</option>
                <option value="Caterpillar">Caterpillar (CAT)</option>
                <option value="Komatsu">Komatsu</option>
                <option value="SANY">SANY Heavy</option>
                <option value="Volvo">Volvo CE</option>
                <option value="XCMG">XCMG</option>
                <option value="Shantui">Shantui</option>
                <option value="SDLG">SDLG</option>
              </select>
            </div>

            {/* Operating Scale Dropdown */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wide">
                <Weight className="w-3.5 h-3.5 text-amber-600" />
                <span>Operating Scale</span>
              </label>
              <select
                value={selectedScale}
                onChange={(e) => setSelectedScale(e.target.value)}
                className="w-full bg-yellow-50/60 border border-yellow-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 font-medium focus:outline-none focus:border-amber-500"
              >
                <option value="">Any Capacity</option>
                <option value="medium">Medium Duty (15 - 25 Ton)</option>
                <option value="heavy">Heavy Duty (30 - 45 Ton)</option>
                <option value="extreme">High Capacity Mining (50+ Ton)</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="sm:col-span-2 md:col-span-1 pt-2 sm:pt-4 md:pt-0">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-extrabold px-4 py-3 rounded-xl transition-all shadow-md shadow-yellow-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Find Machinery</span>
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}
