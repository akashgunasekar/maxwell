"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  isOpen: boolean;
  selectedProduct: string;
  openQuote: (productName?: string) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openQuote = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    }
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, selectedProduct, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
