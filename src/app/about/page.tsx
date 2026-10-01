import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Snowflake,
  Gauge,
  CheckCircle2,
  FileDown,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import GroupBrands from "@/components/GroupBrands";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "About Maxwell Induction | Commercial Induction Equipment",
  description:
    "Learn about Maxwell Induction's focus on commercial induction kitchen technology, engineering durable equipment with ~90% thermal efficiency, and cleaner kitchen operations.",
  keywords: [
    "about Maxwell Induction",
    "commercial induction manufacturer",
    "induction kitchen technology India",
    "industrial induction cooktop manufacturer",
    "clean commercial kitchens",
  ],
};

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Maxwell Induction" }]} />

        {/* Hero Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs mb-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 border border-sky-200">
                Commercial Induction Specialists
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                About Maxwell Induction
              </h1>
              <p className="mt-3 text-lg font-bold text-sky-800">
                Powering a Cleaner, Smarter Kitchen
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At Maxwell Induction, we believe in smarter technology for a better, sustainable future. Our induction solutions help commercial kitchens cook better, save energy and create a cleaner, safer working environment.
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                As a specialized division within the Maxwell Group, Maxwell Induction focuses exclusively on commercial induction engineering. From compact live counter cooktops to 400-liter tilting industrial bratt pans and high-output steam generators, every piece of Maxwell equipment is designed around thermal efficiency, precise digital control, and heavy-duty reliability.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition"
                >
                  <span>Explore Equipment Catalogue</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE_CONFIG.catalogPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 hover:text-sky-950 underline"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-md">
                <Image
                  src="/images/maxwell-kitchen-hero.jpg"
                  alt="Maxwell Induction Professional Commercial Kitchen Environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Engineering Pillars */}
        <div className="mb-14">
          <SectionHeading
            badge="Engineering Core"
            title="The Maxwell Technology Advantage"
            subtitle="Engineered to solve the fundamental challenges of modern commercial food service: high fuel costs, harsh working heat, and safety risks."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="rounded-xl bg-sky-100 p-3 text-sky-800 w-fit mb-4">
                <Gauge className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">~90% Thermal Efficiency</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Electromagnetic energy penetrates cookware directly, cutting standby losses and reducing fuel expenditure by up to 60% compared to traditional commercial LPG setups.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 w-fit mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Zero Open Flame Safety</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Eliminates volatile open flames and red-hot burner surfaces. With Auto Pan Detection, the system turns off instantly when pots are removed or when liquid boils out.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-800 w-fit mb-4">
                <Snowflake className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Significantly Cooler Kitchens</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Because almost no ambient heat radiates into the kitchen, chef fatigue is reduced, and facility exhaust hood CFM and air conditioning requirements are dramatically lower.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-800 w-fit mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Instant Heat Responsiveness</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Multi-stage power regulation allows instant transitions from rapid high-heat wok tossing to delicate low-temperature sauce simmering without heat latency.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-800 w-fit mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Easy Clean Ceran Glass</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Smooth flat surfaces with no grease grates, pilot lights, or deep crevices. Spills do not bake onto the cooler glass, allowing quick wipe-downs between shifts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-800 w-fit mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">12 Months Warranty & On-Site Care</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Every unit is backed by a 12-month standard warranty, factory genuine spares, and a dedicated Pan-India on-site technical support network.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Headquarters Strip */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Manufacturing & Corporate Office
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Chennai Headquarters & Factory
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Operating from the PKM Industrial Complex in Mel Ayanambakkam, Chennai, our facility houses commercial testing stations, assembly lines, and technical support teams serving customers across India.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-sky-700 shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.contact.address.full}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-sky-700 shrink-0" />
                  <span>{SITE_CONFIG.contact.phones.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-sky-700 shrink-0" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Corporate Assurance
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Part of Maxwell Group commercial kitchen engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>100% verified technical specifications directly from brochure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Pre-dispatch 3-phase electrical calibration testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Genuine OEM replacement spares maintained in stock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Group Integration */}
        <GroupBrands />
      </div>
    </div>
  );
}
