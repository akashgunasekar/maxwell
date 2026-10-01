import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { INDUSTRIES } from "@/data/industries";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Commercial Induction Solutions for Professional Kitchens | Industries",
  description:
    "Explore how Maxwell Induction equipment powers commercial cooking in Hotels, Caterers, Institutions, Industrial Kitchens, Hospitals, Airlines, Marine Vessels, and QSR chains.",
  keywords: [
    "commercial induction for hotels",
    "induction for banquet halls",
    "institutional induction kitchens",
    "hospital commercial induction",
    "marine galley induction",
    "cloud kitchen induction",
  ],
  openGraph: {
    title: "Commercial Induction Solutions for Professional Kitchens | Maxwell Induction",
    description:
      "Engineered commercial induction equipment tailored for 8 major food production industries.",
    url: `${SITE_CONFIG.domain}/industries`,
  },
};

export default function IndustriesPage() {
  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industries Served" }]} />

        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 border border-sky-200">
            Sector Applications
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Commercial Induction for Professional Kitchens
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Maxwell Induction delivers tailored high-capacity equipment engineered for the specific operational rhythms, hygiene standards, and electrical loads of eight core food service sectors.
          </p>
        </div>

        {/* 8 Detailed Industry Sections */}
        <div className="space-y-12">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.id}
              className={`rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-2xs">
                  <Image
                    src={ind.image}
                    alt={`${ind.name} Commercial Induction Kitchen Installation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 shadow-2xs border border-slate-200">
                      Sector 0{idx + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-7/12">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {ind.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {ind.description}
                </p>

                {/* Key Sector Benefits */}
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Sector Advantages:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    {ind.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <Link
                    href={`/products`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-sky-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition"
                  >
                    <span>View Recommended Equipment</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition"
                  >
                    <FileText className="h-3.5 w-3.5 text-sky-700" />
                    <span>Request Sector Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-sky-900 p-8 sm:p-10 text-white text-center">
          <h3 className="text-2xl font-extrabold">
            Custom Industrial Kitchen Layouts & Consultation
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-sky-200 max-w-xl mx-auto">
            Discuss your project with Maxwell Induction engineers. We assist with electrical load planning, capacity requirements, and turnkey equipment supply.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-sky-900 hover:bg-sky-50 transition"
            >
              <span>Speak with an Induction Engineer</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
