import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export default function GroupBrands() {
  return (
    <section className="bg-slate-100/70 py-14 lg:py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-800 mb-3">
            Corporate Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Part of Maxwell Group
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Maxwell Group integrates three distinct commercial engineering brands delivering specialized foodservice infrastructure, precision induction systems, and heavy-duty food processing machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Brand 1: Vector Food Equipments */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-slate-300">
            <div>
              <div className="relative h-12 w-full max-w-[200px] mb-5">
                <Image
                  src="/brands/vector-official-logo.png"
                  alt="Vector Food Equipments Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <span className="inline-block rounded-md bg-rose-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-800 border border-rose-200 mb-3">
                Complete Kitchen Engineering
              </span>

              <h3 className="text-base font-bold text-slate-900">
                Vector Food Equipments
              </h3>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Comprehensive commercial and industrial kitchen planning, 2D/3D layouts, customized stainless steel fabrication, turnkey refrigeration, and bakery equipment.
              </p>

              <div className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-600" />
                  <span>Custom SS Kitchen Fabrication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-600" />
                  <span>Turnkey Commercial Planning</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700">
                <span>Group Division</span>
              </span>
            </div>
          </div>

          {/* Brand 2: Maxwell Induction (Current) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-sky-600 bg-white p-6 shadow-md relative">
            <div className="absolute -top-3 right-5">
              <span className="rounded-full bg-sky-700 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                Current Brand
              </span>
            </div>

            <div>
              <div className="relative h-12 w-full max-w-[200px] mb-5">
                <Image
                  src="/brands/maxwell-induction.png"
                  alt="Maxwell Induction Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-800 border border-sky-200 mb-3">
                Induction Technology
              </span>

              <h3 className="text-base font-bold text-slate-900">
                Maxwell Induction
              </h3>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                High-efficiency commercial induction cooktops, woks, boiling pans, bratt pans, and steam boilers delivering ~90% efficiency and cool, flame-free kitchens.
              </p>

              <div className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" />
                  <span>28+ Commercial Induction Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" />
                  <span>Pan-India On-Site Technical Service</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-700">
                <span>Active Presence</span>
              </span>
            </div>
          </div>

          {/* Brand 3: SK Power Cook Machinery */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-slate-300">
            <div>
              <div className="relative h-12 w-full max-w-[200px] mb-5">
                <Image
                  src="/brands/sk-powercook-logo.png"
                  alt="SK Power Cook Machinery Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <span className="inline-block rounded-md bg-indigo-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-800 border border-indigo-200 mb-3">
                Mixing Machinery Specialist
              </span>

              <h3 className="text-base font-bold text-slate-900">
                SK Power Cook Machinery
              </h3>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                Specialized manufacturer of industrial heavy-duty planetary cooking mixers and mechanized tilting boiling kettles for sweets, gravies, and food processing plants.
              </p>

              <div className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Industrial Tilting Cooking Mixers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Planetary Agitators & Kettles</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700">
                <span>Group Division</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
