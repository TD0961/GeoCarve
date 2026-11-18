"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FleetCatalog from "@/components/FleetCatalog";
import Capabilities from "@/components/Capabilities";
import ImportProcess from "@/components/ImportProcess";
import TargetIndustries from "@/components/TargetIndustries";
import PartnershipStory from "@/components/PartnershipStory";
import TechnicalSupport from "@/components/TechnicalSupport";
import AboutValues from "@/components/AboutValues";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (preselected?: string) => {
    setSelectedMachine(preselected);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedMachine(undefined);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
      
      <main className="flex-1">
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        <StatsBar />
        <FleetCatalog onSelectMachineForQuote={handleOpenQuoteModal} />
        <Capabilities onOpenQuoteModal={handleOpenQuoteModal} />
        <ImportProcess onOpenQuoteModal={handleOpenQuoteModal} />
        <TargetIndustries onOpenQuoteModal={handleOpenQuoteModal} />
        <PartnershipStory onOpenQuoteModal={handleOpenQuoteModal} />
        <TechnicalSupport onOpenQuoteModal={handleOpenQuoteModal} />
        <AboutValues />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedItem={selectedMachine}
      />
    </div>
  );
}
