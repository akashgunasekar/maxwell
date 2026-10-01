"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { useQuote } from "@/context/QuoteContext";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { openQuote } = useQuote();

  const phoneRaw = SITE_CONFIG.contact.primaryPhone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    "Hello Maxwell Induction, I am interested in your commercial induction equipment and would like to request technical specifications and a quotation."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200 w-64">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Maxwell Direct Desk
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-slate-100"
          >
            <Phone className="h-4 w-4 text-sky-700" />
            <span>Call {SITE_CONFIG.contact.primaryPhone}</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              openQuote();
            }}
            className="flex items-center gap-2.5 rounded-lg bg-sky-700 px-3 py-2 text-xs font-bold text-white transition hover:bg-sky-800"
          >
            <FileText className="h-4 w-4" />
            <span>Request Quotation</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-700 active:scale-95 focus:outline-none"
        aria-label="Contact Maxwell Induction on WhatsApp or Phone"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
