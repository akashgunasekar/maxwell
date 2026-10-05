"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/site";

export default function WhatsAppButton() {
  const [showTooltip] = useState(true);

  const phoneRaw = SITE_CONFIG.contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    "Hello Maxwell Induction, I am interested in your commercial induction equipment and would like to request technical specifications and a quotation."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Pill (Desktop & Tablet) */}
      {showTooltip && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/80 transition-all hover:scale-105 hover:shadow-xl group/tooltip"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xs font-extrabold text-slate-800 group-hover/tooltip:text-[#25D366] transition-colors">
              Chat on WhatsApp
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              {SITE_CONFIG.contact.primaryPhone}
            </span>
          </div>
        </a>
      )}

      {/* Floating Action Button (Real Official WhatsApp Experience) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Maxwell Induction on WhatsApp at ${SITE_CONFIG.contact.primaryPhone}`}
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-[0_10px_35px_rgba(37,211,102,0.6)] active:scale-95 focus:outline-none"
      >
        {/* Continuous Ping Radar Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-60" />

        {/* Real Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-8 w-8 sm:h-9 sm:w-9 fill-white transition-transform duration-200 group-hover:scale-105"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.403 5.604A9.046 9.046 0 0 0 12.012 2.95C7.02 2.95 2.966 7.003 2.964 11.998c0 1.6.418 3.16 1.212 4.536L2.8 21.2l4.804-1.26a9.006 9.006 0 0 0 4.404 1.152h.004c4.992 0 9.046-4.053 9.048-9.048 0-2.418-.941-4.69-2.657-6.44zm-6.391 14.07h-.003a7.51 7.51 0 0 1-3.826-1.049l-.274-.163-2.845.746.759-2.773-.179-.285a7.487 7.487 0 0 1-1.15-4.148c0-4.147 3.374-7.521 7.524-7.521 2.01 0 3.9.784 5.321 2.206a7.478 7.478 0 0 1 2.2 5.32c-.002 4.149-3.376 7.524-7.526 7.524zm4.127-5.632c-.226-.113-1.339-.661-1.547-.737-.208-.075-.359-.113-.51.113-.151.226-.585.736-.717.887-.132.151-.264.17-.49.057-.226-.113-.956-.353-1.82-1.124-.673-.6-1.128-1.341-1.26-1.568-.132-.226-.014-.349.099-.461.102-.102.226-.264.339-.396.113-.132.151-.226.226-.377.075-.151.038-.283-.019-.396-.057-.113-.51-1.228-.698-1.682-.184-.441-.371-.381-.51-.388-.132-.007-.283-.008-.434-.008-.151 0-.396.057-.604.283-.207.226-.792.774-.792 1.888 0 1.114.811 2.19.924 2.341.113.151 1.597 2.439 3.869 3.419.541.233.963.373 1.292.477.543.173 1.037.149 1.427.09.435-.065 1.339-.548 1.528-1.077.189-.529.189-.982.132-1.077-.057-.094-.207-.151-.433-.264z"
          />
        </svg>

        {/* Online Status Live Dot */}
        <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-emerald-200 border-2 border-white shadow-xs" />
      </a>
    </div>
  );
}
