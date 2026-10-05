import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Snowflake,
  Gauge,
  CheckCircle2,
  FileDown,
  Layers,
  Phone,
} from "lucide-react";
import Hero from "@/components/Hero";
import BenefitStrip from "@/components/BenefitStrip";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import WhyInduction from "@/components/WhyInduction";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import GroupBrands from "@/components/GroupBrands";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { SITE_CONFIG } from "@/data/site";

export default function HomePage() {
  // 8 Curated Featured Products per Section 44
  const featuredProductSlugs = [
    "induction-cooktop",
    "commercial-induction-hot-plate",
    "induction-oil-fry-kadai-wok",
    "commercial-induction-boiling-pan",
    "commercial-induction-bratt-pan",
    "induction-tabletop-wok",
    "induction-tabletop-cooktop",
    "multy-food-steamer",
  ];

  const featuredProducts = PRODUCTS.filter((p) =>
    featuredProductSlugs.includes(p.slug)
  );

  return (
    <div className="w-full">
      {/* 1. HERO */}
      <Hero />

      {/* 2. KEY BENEFITS STRIP (SAFE, FAST, CLEAN, COOL, EFFICIENT) */}
      <BenefitStrip />

      {/* 3. ABOUT / INTRODUCTION */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600"></span>
                About Maxwell Induction
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Powering a Cleaner, Smarter Kitchen
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                At Maxwell Induction, we believe in smarter technology for a better, sustainable future. Our commercial induction solutions help professional kitchens cook faster, save substantial energy, and create a safer, radically cooler work environment.
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                By replacing inefficient open fossil fuel flames with high-efficiency electromagnetic heat transfer, Maxwell equipment eliminates radiant heat spillover, eradicates toxic combustion gases, and provides instantaneous temperature repeatability across 28+ commercial models.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>~90% Thermal Transfer</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Direct electromagnetic energy eliminates surrounding radiant heat losses.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>60% Fuel Cost Reduction</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Significantly lower ongoing operating expenses compared to commercial LPG cylinders.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition"
                >
                  <span>Learn More About Maxwell</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE_CONFIG.catalogPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 hover:text-sky-950 underline"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Product Brochure</span>
                </a>
              </div>
            </div>

            {/* Right: Visual Kitchen Showcase */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/cooking_equipment_range.jpg"
                    alt="Maxwell Induction Commercial Kitchen Suite"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      Engineered for High-Output Brigades
                    </p>
                    <h3 className="text-base sm:text-lg font-extrabold mt-0.5">
                      Cleaner, Cooler, and Safer Commercial Kitchens
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="bg-slate-50 py-14 lg:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                Industry-Leading Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Commercial Induction Equipment
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                Curated selection of our most popular commercial cooktops, boiling pans, fryers, and tawas.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950 transition"
            >
              <span>View All 28 Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-sky-800 transition"
            >
              <span>Explore Complete 28-Product Catalogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES OVERVIEW */}
      <section className="bg-white py-14 lg:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Equipment Spectrum"
            title="Complete Product Categories"
            subtitle="Organized across five specialized commercial equipment divisions directly from the official Maxwell brochure."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-md ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-lg bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800 border border-sky-100">
                      Category 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {cat.productCount} Products
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition">
                    {cat.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-700 group-hover:text-sky-900">
                    Browse Category
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY INDUCTION */}
      <WhyInduction />

      {/* 7. INDUSTRIES SERVED */}
      <Industries />

      {/* 8. SERVICES & SUPPORT */}
      <Services />

      {/* 9. MAXWELL GROUP INTEGRATION */}
      <GroupBrands />

      {/* 10. FINAL CONVERSION CTA - HIGHLIGHTED */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white text-center border-y border-sky-500/20 shadow-2xl">
        {/* Glowing Ambient Backdrop Orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-[450px] h-[250px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Subtle luminous grid & top highlight line */}
        <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Luminous Pulsing Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-300 border border-sky-400/30 shadow-[0_0_20px_rgba(56,189,248,0.25)] mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>Partnering For A Cleaner, Healthier & More Efficient Tomorrow</span>
          </div>

          {/* Prominent High-Contrast Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight !text-white leading-tight drop-shadow-md">
            Ready to Upgrade Your Commercial Kitchen to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white">
              Induction?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Contact our factory sales team for model sizing, electrical load recommendations, direct B2B quotations, and Pan-India installation support.
          </p>

          {/* Value Highlights Pill Strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left sm:text-center">
            <div className="flex items-center justify-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm shadow-xs">
              <Zap className="h-4 w-4 text-sky-400 shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">~90% Thermal Transfer</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm shadow-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">12 Months OEM Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm shadow-xs">
              <Gauge className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Pan-India Technical Team</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:bg-sky-50 hover:shadow-[0_4px_35px_rgba(56,189,248,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <span>Request a Quotation</span>
              <ArrowRight className="h-4 w-4 text-sky-600" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-sky-400/40 bg-sky-500/10 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider !text-white backdrop-blur-md hover:bg-sky-500/20 hover:border-sky-300 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <Phone className="h-4 w-4 text-sky-300" />
              <span>Call: {SITE_CONFIG.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
