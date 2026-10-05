import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Flame,
  Zap,
  Sparkles,
  Snowflake,
  TrendingDown,
  Wrench,
  CheckCircle,
  FileDown,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE_CONFIG } from "@/data/site";

export default function WhyInduction({ showHeading = true }: { showHeading?: boolean }) {
  const corePillars = [
    {
      title: "Safe Operation",
      tagline: "Flame-Free & Zero Radiant Heat",
      description:
        "Induction is exceptionally safe for commercial kitchen staff. There is no open flame, red-hot electric coil, or radiant heat source. When cookware is removed or when vessel contents boil out, the system automatically shuts down within seconds, completely preventing flare-ups and oil fire risks.",
      icon: ShieldAlert,
      color: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      brochureHighlight: "Auto Pan Detection & Instant Safety Shut-Off",
    },
    {
      title: "Fast Heating",
      tagline: "Direct Energy Transfer into Pan Metal",
      description:
        "Energy is directly transferred within the pan metal through electromagnetic oscillation. Induction heating is extremely fast—it starts instantly and heat remains accurately controllable across fine simmer and boiling power stages with zero lag.",
      icon: Zap,
      color: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      brochureHighlight: "Instant Heat Response & Micro-Level Temperature Control",
    },
    {
      title: "Clean Kitchen",
      tagline: "Seamless Wipe-Clean Ceran Glass",
      description:
        "With no cast-iron grates, burner rings, or grease catches to worry about, cleaning the cooking surface is effortless. Because the ceramic glass surrounding the cooking vessel stays relatively cool, accidental spills do not bake on, reducing labor and kitchen sanitation time.",
      icon: Sparkles,
      color: "text-sky-700",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      brochureHighlight: "No Baked-On Spills & Zero Soot or Toxic Exhaust Byproducts",
    },
    {
      title: "Cool Environment",
      tagline: "Almost Zero Ambient Heat Generation",
      description:
        "Almost no ambient heat is produced into the kitchen workspace because heat is generated solely inside the cooking vessel itself. The chef work environment remains markedly cooler, dramatically reducing kitchen exhaust fan CFM requirements and HVAC cooling power costs.",
      icon: Snowflake,
      color: "text-cyan-700",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      brochureHighlight: "Reduces Kitchen Exhaust Hood & Fresh Air Circulation Loads",
    },
    {
      title: "High Efficiency (~90%)",
      tagline: "60% Lower Operating Cost vs LPG",
      description:
        "Conventional commercial gas stoves waste over 55-60% of their heat energy escaping into surrounding air. Maxwell Induction achieves approximately 90% thermal efficiency as energy passes directly into food, yielding documented operational savings up to 60% compared to LPG cylinders.",
      icon: TrendingDown,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      brochureHighlight: "~90% Heat Transfer with Minimal Energy Loss",
    },
  ];

  const additionalBenefits = [
    "Flame Free Operation",
    "No Toxic Gases (Zero CO / CO2 combustion)",
    "Auto Pan Detection System",
    "Instant Multi-Stage Temperature Control",
    "60%* Cheaper than L.P.G",
    "No Overheated Surface, Hence Absolutely Safe On Oil Spill",
    "Suitable for All Commercial Cooking Types",
    "Reduces Risk of Burn Injuries & Kitchen Illness",
    "Easy Installation & Intuitive Operation",
    "High Quality Durable Stainless Steel Equipment",
    "Exhaust Hood & Fresh Air Circulation Can Be Reduced",
    "12 Months Standard Equipment Warranty",
    "On-Site After-Sales Services Provided",
  ];

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Brochure-Documented Advantages"
            title="Why Choose Commercial Induction Cooking?"
            subtitle="Commercial induction replaces inefficient open flames with precision electromagnetic thermal transfer—creating a safer, cleaner, and radically cooler kitchen."
          />
        )}

        {/* 5 Core Brochure Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corePillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`flex flex-col justify-between rounded-2xl border ${p.borderColor} bg-white p-6 shadow-xs transition hover:shadow-md ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${p.bgColor} ${p.color} border ${p.borderColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {p.tagline}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{p.brochureHighlight}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brochure Fact-Based Additional Benefits Checklist */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Verified Operational Impact
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Brochure Technical & Operational Benefits
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Documented directly from the Maxwell commercial equipment manual for professional hospitality and catering decision makers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {additionalBenefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs"
              >
                <CheckCircle className="h-4 w-4 text-sky-600 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <div className="text-xs text-slate-500">
              Backed by Maxwell&apos;s Pan-India Technical Service Network & 12 Months Warranty.
            </div>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.catalogPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 hover:text-sky-950 underline"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Technical Catalogue</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
