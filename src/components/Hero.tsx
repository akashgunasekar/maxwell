"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Gauge, Sparkles, CheckCircle2 } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function Hero() {
  const { openQuote } = useQuote();

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-200">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 bg-grid-tech opacity-60 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-ping"></span>
              Powering a Cleaner, Smarter Kitchen
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl leading-[1.15]">
              Commercial Induction Cooking Technology
            </h1>

            {/* Supporting Heading */}
            <p className="mt-3 text-lg font-bold text-sky-800 sm:text-xl">
              The Smart Choice for Modern Kitchens
            </p>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed max-w-2xl">
              Professional induction solutions for commercial kitchens, designed around efficient cooking, precise temperature control, safer operation and professional kitchen performance.
            </p>

            {/* Key Brochure Bullet Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700 max-w-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>~90% Thermal Energy Efficiency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>60% Cheaper than LPG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>Zero Open Flame & Cool Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                <span>12 Months Equipment Warranty</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-sky-800 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => openQuote()}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-800 shadow-xs transition hover:bg-slate-50 hover:border-slate-400 active:scale-95"
              >
                <span>Request a Quote</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Commercial Equipment Image Display */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                {/* Real Commercial Kitchen Banner from Brochure */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/maxwell-kitchen-hero.jpg"
                    alt="Maxwell Induction Commercial Kitchen Equipment with Tabletop Cooktops, Wok, and Hot Plate"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                      Maxwell Commercial Grade
                    </span>
                    <p className="text-sm font-extrabold leading-snug">
                      High-Power Heavy-Duty Induction Suites
                    </p>
                  </div>
                </div>

                {/* Micro Metrics Strip */}
                <div className="mt-3 grid grid-cols-3 divide-x divide-slate-100 rounded-lg bg-slate-50 py-2.5 text-center">
                  <div>
                    <span className="block text-base font-extrabold text-sky-800">20+</span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Models</span>
                  </div>
                  <div>
                    <span className="block text-base font-extrabold text-sky-800">~90%</span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Efficiency</span>
                  </div>
                  <div>
                    <span className="block text-base font-extrabold text-sky-800">12 Mo</span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
