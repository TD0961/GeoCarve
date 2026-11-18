"use client";

import React, { useState, useEffect } from "react";
import QuoteModal from "@/components/QuoteModal";

export function openQuoteModal(item?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: { item } }));
  }
}

export default function GlobalQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ item?: string }>;
      setItem(customEvent.detail?.item);
      setIsOpen(true);
    };
    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  return (
    <QuoteModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      preselectedItem={item}
    />
  );
}

