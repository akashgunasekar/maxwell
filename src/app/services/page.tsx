import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";
import { ShieldCheck, Phone, Mail, Wrench, Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Installation & After-Sales Support | Maxwell Induction",
  description:
    "Explore Maxwell Induction's Pan-India service support network, on-site commissioning, operator technical training, genuine OEM spares, and 12-month standard warranty.",
  keywords: [
    "commercial induction service India",
    "induction cooker repair service",
    "Maxwell induction installation",
    "commercial induction spare parts",
    "commercial induction warranty",
  ],
  openGraph: {
    title: "Installation & After-Sales Support | Maxwell Induction",
    description:
      "Pan-India on-site technical support, operator training, genuine spares, and 12 months equipment warranty.",
    url: `${SITE_CONFIG.domain}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services & Support" }]} />

        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 border border-sky-200">
            Lifecycle Technical Backing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Installation & After-Sales Support
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every Maxwell Induction system is engineered for industrial dependability and supported by experienced field technicians across India.
          </p>
        </div>

        {/* Services Component */}
        <Services showHeading={false} />

        {/* Warranty Section */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-800 border border-emerald-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Documented Assurance
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    12 Months Standard Equipment Warranty
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                As stated in our official technical documentation, Maxwell Induction provides a comprehensive 12 Months Warranty on commercial equipment. This covers manufacturing defects on induction generator modules, digital control circuit boards, and structural stainless steel assemblies under normal commercial operating conditions.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Coverage on factory electronic modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Pan-India service dispatch for warranty claims</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Original factory-certified replacement parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Preventive maintenance guidelines provided</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Have a Service or Warranty Query?
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Call our direct technical desk with your equipment model and serial number.
              </p>
              <a
                href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition"
              >
                <Phone className="h-4 w-4" />
                <span>Call {SITE_CONFIG.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
