"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

const SLIDES = [
  {
    src: "/images/hero_commercial_kitchen.jpg",
    alt: "Professional commercial kitchen with chefs cooking under a stainless steel exhaust hood",
    label: "Commercial Kitchens",
  },
  {
    src: "/images/ind_hotel_restaurant.jpg",
    alt: "Chefs plating dishes in a hotel and restaurant kitchen",
    label: "Hotels & Restaurants",
  },
  {
    src: "/images/ind_catering_banquet.jpg",
    alt: "Large catering and banquet kitchen with chefs plating meals",
    label: "Caterers & Banquet Halls",
  },
  {
    src: "/images/ind_industrial_central.jpg",
    alt: "Industrial central kitchen with bulk cooking equipment",
    label: "Industrial & Central Kitchens",
  },
];

const SLIDE_INTERVAL_MS = 6000;

export default function Hero() {
  const { openQuote } = useQuote();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, active]);

  return (
    <section
      className="relative overflow-hidden bg-slate-950 pt-10 pb-24 lg:pt-16 lg:pb-28 border-b border-slate-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Maxwell Induction featured kitchens"
    >
      {/* Background image slider */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover object-center ${i === active ? "hero-kenburns" : ""}`}
            />
          </div>
        ))}
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-slate-950/20"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-100 backdrop-blur-sm mb-5">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping"></span>
              Powering a Cleaner, Smarter Kitchen
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-5xl leading-[1.15]">
              Commercial Induction Cooking Technology
            </h1>

            {/* Supporting Heading */}
            <p className="mt-3 text-lg font-bold text-sky-300 sm:text-xl">
              The Smart Choice for Modern Kitchens
            </p>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-base text-slate-200 sm:text-lg leading-relaxed max-w-2xl">
              Professional induction solutions for commercial kitchens, designed around efficient cooking, precise temperature control, safer operation and professional kitchen performance.
            </p>

            {/* Key Brochure Bullet Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-100 max-w-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>~90% Thermal Energy Efficiency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>60% Cheaper than LPG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Zero Open Flame & Cool Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900 active:scale-95"
              >
                <span>Request a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="hidden sm:block text-xs font-bold uppercase tracking-wider text-white/80">
              {SLIDES[active].label}
            </span>
          </div>

          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-sky-400" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
