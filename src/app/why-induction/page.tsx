import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhyInduction from "@/components/WhyInduction";
import { ArrowRight, FileDown, CheckCircle2, ShieldCheck, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Why Choose Commercial Induction Cooking? | Maxwell Induction",
  description:
    "Discover the documented benefits of commercial induction cooking: safe flame-free operation, fast heat transfer, cool ambient kitchens, easy cleaning, and ~90% energy efficiency.",
  keywords: [
    "why induction cooking",
    "commercial induction vs gas",
    "benefits of induction cooking",
    "energy efficient commercial kitchen",
    "induction efficiency 90 percent",
    "cool kitchen technology",
  ],
  openGraph: {
    title: "Why Choose Commercial Induction Cooking? | Maxwell Induction",
    description:
      "Safe, Fast, Clean, Cool, Efficient. Discover why modern commercial kitchens are switching to Maxwell Induction technology.",
    url: `${SITE_CONFIG.domain}/why-induction`,
  },
};

export default function WhyInductionPage() {
  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Why Induction" }]} />

        {/* Top Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 border border-sky-200">
            Source-Derived Operational Advantages
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Induction Cooking?
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The Maxwell brochure outlines five core principles that make induction the smart, clean, and cost-effective choice for modern high-output commercial kitchens.
          </p>
        </div>

        {/* Why Induction Main Component */}
        <WhyInduction showHeading={false} />

        {/* Comparative Operational Metric Card */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Comparing Commercial Induction vs Conventional Commercial Gas
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
              <thead className="bg-slate-50 font-bold uppercase tracking-wider text-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left">Key Evaluation Factor</th>
                  <th className="px-4 py-3 text-left text-sky-800">Maxwell Induction</th>
                  <th className="px-4 py-3 text-left text-slate-500">Commercial Gas / LPG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Thermal Energy Efficiency</td>
                  <td className="px-4 py-3 font-bold text-sky-800">~90% Direct Pan Transfer</td>
                  <td className="px-4 py-3 text-slate-500">35% - 40% (60% lost to room)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Operating Cost Comparison</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">Up to 60% Cheaper than LPG</td>
                  <td className="px-4 py-3 text-slate-500">High recurring cylinder refill costs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Open Flame & Fire Risk</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">Zero Open Flame / Safe on Spills</td>
                  <td className="px-4 py-3 text-slate-500">Volatile flame & gas leak danger</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Kitchen Ambient Temperature</td>
                  <td className="px-4 py-3 font-bold text-sky-800">Cool Kitchen / Minimal Heat Spill</td>
                  <td className="px-4 py-3 text-slate-500">Extreme radiant heat & high exhaust load</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Cleaning & Maintenance</td>
                  <td className="px-4 py-3 font-bold text-sky-800">Smooth Ceran Glass / Wipe Clean</td>
                  <td className="px-4 py-3 text-slate-500">Heavy iron grates & baked grease traps</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Auto Safety Shut-Off</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">Instant shut-down on pan removal</td>
                  <td className="px-4 py-3 text-slate-500">Continuous flame burns regardless of pan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-8 text-white text-center border border-sky-500/20 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-extrabold !text-white">
            Ready to Transition Your Kitchen to Induction?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-sky-200 max-w-xl mx-auto">
            Our engineers provide free kitchen electrical requirement assessments and return-on-investment calculations for your commercial setup.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-sky-900 hover:bg-sky-50 transition"
            >
              Request a Quotation
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-sky-400 bg-sky-800/60 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition"
            >
              Browse 28 Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
