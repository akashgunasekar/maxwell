import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function GroupBrands() {
  const brands = [
    {
      name: "Vector Food Equipments",
      badge: "Complete Kitchen Engineering",
      badgeStyle: "bg-rose-50 text-rose-800 border-rose-200",
      checkColor: "text-rose-600",
      accentColor: "text-rose-700 group-hover:text-rose-800",
      logo: "/brands/vector-official-logo.png",
      url: "https://www.vectorfoodequipments.com/",
      displayUrl: "vectorfoodequipments.com",
      description:
        "Comprehensive commercial and industrial kitchen planning, 2D/3D layouts, customized stainless steel fabrication, turnkey refrigeration, and bakery equipment.",
      points: [
        "Custom SS Kitchen Fabrication",
        "Turnkey Commercial Planning",
      ],
    },
    {
      name: "Maxwell Induction",
      badge: "Induction Technology",
      badgeStyle: "bg-sky-50 text-sky-800 border-sky-200",
      checkColor: "text-sky-600",
      accentColor: "text-sky-700 group-hover:text-sky-800",
      logo: "/brands/maxwell-induction.png",
      url: "https://www.maxwellinduction.com/",
      displayUrl: "maxwellinduction.com",
      description:
        "High-efficiency commercial induction cooktops, woks, boiling pans, bratt pans, and steam boilers delivering ~90% efficiency and cool, flame-free kitchens.",
      points: [
        "28+ Commercial Induction Models",
        "Pan-India On-Site Technical Service",
      ],
    },
    {
      name: "SK Power Cook Machinery",
      badge: "Mixing Machinery Specialist",
      badgeStyle: "bg-indigo-50 text-indigo-800 border-indigo-200",
      checkColor: "text-indigo-600",
      accentColor: "text-indigo-700 group-hover:text-indigo-800",
      logo: "/brands/sk-powercook-logo.png",
      url: "https://www.skpcm.com/",
      displayUrl: "skpcm.com",
      description:
        "Specialized manufacturer of industrial heavy-duty planetary cooking mixers and mechanized tilting boiling kettles for sweets, gravies, and food processing plants.",
      points: [
        "Industrial Tilting Cooking Mixers",
        "Planetary Agitators & Kettles",
      ],
    },
  ];

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
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-slate-300"
            >
              <div>
                <div className="relative h-12 w-full max-w-[200px] mb-5">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    fill
                    sizes="200px"
                    className="object-contain object-left"
                  />
                </div>

                <span
                  className={`inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border mb-3 ${brand.badgeStyle}`}
                >
                  {brand.badge}
                </span>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-950 transition">
                  {brand.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  {brand.description}
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
                  {brand.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${brand.checkColor}`} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className={`inline-flex items-center gap-1 text-xs font-bold ${brand.accentColor}`}>
                  <span>Group Division</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-[11px] text-slate-400 group-hover:text-slate-600 font-medium">
                  {brand.displayUrl}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
