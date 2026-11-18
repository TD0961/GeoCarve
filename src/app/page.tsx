"use client";

import React from "react";
import Hero from "@/components/Hero";
import FeaturedFleet from "@/components/FeaturedFleet";
import HomeStory from "@/components/HomeStory";
import HomeCapabilities from "@/components/HomeCapabilities";
import HomeStats from "@/components/HomeStats";
import HomeIndustriesPreview from "@/components/HomeIndustriesPreview";
import CtaBanner from "@/components/CtaBanner";
import { openQuoteModal } from "@/components/GlobalQuoteModal";

export default function Home() {
  return (
    <>
      <Hero onOpenQuoteModal={(m) => openQuoteModal(m)} />
      <FeaturedFleet onOpenQuoteModal={(m) => openQuoteModal(m)} />
      <HomeStory onOpenQuoteModal={() => openQuoteModal()} />
      <HomeCapabilities />
      <HomeStats />
      <HomeIndustriesPreview />
      <CtaBanner onOpenQuoteModal={() => openQuoteModal()} />
    </>
  );
}
