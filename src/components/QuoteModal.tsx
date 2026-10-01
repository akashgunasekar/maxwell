"use client";

import React from "react";
import { X, Sparkles } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import ContactForm from "./ContactForm";

export default function QuoteModal() {
  const { isOpen, selectedProduct, closeQuote } = useQuote();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeQuote}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          aria-label="Close quote modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5 pr-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-sky-800">
            <Sparkles className="h-3 w-3" />
            Official Quotation Request
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-slate-900">
            Request Equipment Quotation
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Receive technical data sheets, electrical guidelines, and direct factory pricing.
          </p>
        </div>

        <ContactForm initialProduct={selectedProduct} onSuccess={closeQuote} />
      </div>
    </div>
  );
}
