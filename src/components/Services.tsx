import React from "react";
import Link from "next/link";
import {
  Wrench,
  GraduationCap,
  Headphones,
  Settings,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Phone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE_CONFIG } from "@/data/site";

export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  const servicePillars = [
    {
      title: "On-Site After-Sales Service",
      description:
        "Maxwell Induction deploys trained field technical engineers directly to your commercial kitchen premises for rapid diagnostics, preventive maintenance, and repairs.",
      icon: Wrench,
      highlight: "Direct Kitchen Site Attendance",
    },
    {
      title: "Installation & Technical Training",
      description:
        "Professional commissioning, 3-phase electrical load verification, circuit calibration, and comprehensive hands-on operational training for executive chefs and culinary staff.",
      icon: GraduationCap,
      highlight: "Chef & Maintenance Staff Onboarding",
    },
    {
      title: "Dedicated Sales & Kitchen Sizing Support",
      description:
        "Our engineering team assists culinary consultants, hospitality developers, and kitchen contractors in selecting optimal kW power modules, pan sizes, and circuit configurations.",
      icon: Headphones,
      highlight: "Engineering Consultation & Layout Guidance",
    },
    {
      title: "Pan-India Service Network",
      description:
        "Broad national technical footprint across Tier 1, Tier 2, and major regional commercial hubs ensuring responsive turnaround times and minimal kitchen downtime.",
      icon: MapPin,
      highlight: "National Support Coverage",
    },
    {
      title: "Genuine Spares Availability",
      description:
        "Guaranteed availability of OEM factory-tested components—including high-frequency IGBT power modules, cooling fan assemblies, Ceran glass decks, and control potentiometers.",
      icon: Settings,
      highlight: "OEM Factory Certified Spares",
    },
    {
      title: "12 Months Equipment Warranty",
      description:
        "Every Maxwell Induction commercial unit is supplied with 12 months standard manufacturer equipment warranty covering industrial manufacturing defects.",
      icon: ShieldCheck,
      highlight: "12 Months Documented Coverage",
    },
  ];

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Pan-India Service Support"
            title="Comprehensive Services & Technical Backing"
            subtitle="Commercial kitchens operate on zero-downtime schedules. Maxwell Induction backs every piece of equipment with comprehensive technical support and genuine spares."
          />
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-sky-300 hover:bg-white hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-sky-100 p-3 text-sky-800 border border-sky-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {s.highlight}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Helpdesk Strip */}
        <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Need Technical Assistance or Spares?
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Connect With Maxwell Induction Technical Desk
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct factory support for new equipment commissioning, electrical specifications, and warranty requests.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-800 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-sky-900 transition"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {SITE_CONFIG.contact.primaryPhone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-100 transition shadow-2xs"
            >
              <span>Contact Service Desk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
