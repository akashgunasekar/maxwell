import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { INDUSTRIES } from "@/data/industries";

export default function Industries({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-slate-50 py-14 lg:py-20 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Serving a Wide Range of Industries"
            title="Commercial Induction for Professional Kitchens"
            subtitle="Engineered to meet the relentless duty cycles and stringent hygiene requirements of major hospitality, institutional, and transport food production sectors."
          />
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <div>
                {/* Industry Photo */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-slate-100 mb-4 border border-slate-100">
                  <Image
                    src={ind.image}
                    alt={`${ind.name} Commercial Kitchen Operations`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-800 transition">
                  {ind.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  {ind.shortDescription}
                </p>

                {/* Key Benefits */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  {ind.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View equipment CTA */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href={`/products`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 transition"
                >
                  <span>Explore Equipment</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
