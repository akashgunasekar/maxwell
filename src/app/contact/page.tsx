import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ShieldCheck,
  FileDown,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Maxwell Induction | Request a Quote",
  description:
    "Get in touch with Maxwell Induction headquarters in Chennai. Request product specifications, customized kitchen quotations, and Pan-India installation support.",
  keywords: [
    "contact Maxwell Induction",
    "commercial induction quote",
    "Maxwell induction Chennai address",
    "commercial induction price inquiry",
    "induction kitchen equipment manufacturers India",
  ],
  openGraph: {
    title: "Contact Maxwell Induction | Request a Quote",
    description:
      "Request equipment pricing, technical guidance, and factory-direct commercial induction solutions.",
    url: `${SITE_CONFIG.domain}/contact`,
  },
};

export default function ContactPage() {
  const phoneRaw = SITE_CONFIG.contact.primaryPhone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    "Hello Maxwell Induction, I am interested in your commercial induction equipment and would like to request technical specifications and a quotation."
  )}`;

  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 border border-sky-200">
            Factory Direct Sales & Support Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Maxwell Induction
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are outfitting a new hotel banquet, upgrading a school canteen, or seeking specialized induction kettles, our sales engineers are ready to assist.
          </p>
        </div>

        {/* Contact Grid: Form + Address Info */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start mb-14">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5">
                Headquarters & Factory
              </h2>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-sky-50 p-2 text-sky-700 border border-sky-100 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Postal Address
                    </span>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      MAXWELL INDUCTION
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {SITE_CONFIG.contact.address.full}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-sky-50 p-2 text-sky-700 border border-sky-100 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Sales & Service Hotlines
                    </span>
                    <div className="mt-0.5 flex flex-col font-semibold text-slate-900">
                      <a href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-sky-700">
                        {SITE_CONFIG.contact.primaryPhone}
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-sky-50 p-2 text-sky-700 border border-sky-100 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Inquiries
                    </span>
                    <a
                      href="mailto:sales@maxwellinduction.com"
                      className="font-semibold text-sky-800 hover:underline block mt-0.5"
                    >
                      sales@maxwellinduction.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="rounded-lg bg-sky-50 p-2 text-sky-700 border border-sky-100 mt-0.5">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Website
                    </span>
                    <span className="font-semibold text-slate-800 block mt-0.5">
                      www.maxwellinduction.com
                    </span>
                  </div>
                </li>
              </ul>

              {/* Instant WhatsApp Quick Connect */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] py-3.5 text-xs font-bold uppercase tracking-wider text-white transition shadow-md hover:shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.403 5.604A9.046 9.046 0 0 0 12.012 2.95C7.02 2.95 2.966 7.003 2.964 11.998c0 1.6.418 3.16 1.212 4.536L2.8 21.2l4.804-1.26a9.006 9.006 0 0 0 4.404 1.152h.004c4.992 0 9.046-4.053 9.048-9.048 0-2.418-.941-4.69-2.657-6.44zm-6.391 14.07h-.003a7.51 7.51 0 0 1-3.826-1.049l-.274-.163-2.845.746.759-2.773-.179-.285a7.487 7.487 0 0 1-1.15-4.148c0-4.147 3.374-7.521 7.524-7.521 2.01 0 3.9.784 5.321 2.206a7.478 7.478 0 0 1 2.2 5.32c-.002 4.149-3.376 7.524-7.526 7.524zm4.127-5.632c-.226-.113-1.339-.661-1.547-.737-.208-.075-.359-.113-.51.113-.151.226-.585.736-.717.887-.132.151-.264.17-.49.057-.226-.113-.956-.353-1.82-1.124-.673-.6-1.128-1.341-1.26-1.568-.132-.226-.014-.349.099-.461.102-.102.226-.264.339-.396.113-.132.151-.226.226-.377.075-.151.038-.283-.019-.396-.057-.113-.51-1.228-.698-1.682-.184-.441-.371-.381-.51-.388-.132-.007-.283-.008-.434-.008-.151 0-.396.057-.604.283-.207.226-.792.774-.792 1.888 0 1.114.811 2.19.924 2.341.113.151 1.597 2.439 3.869 3.419.541.233.963.373 1.292.477.543.173 1.037.149 1.427.09.435-.065 1.339-.548 1.528-1.077.189-.529.189-.982.132-1.077-.057-.094-.207-.151-.433-.264z"
                    />
                  </svg>
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Catalogue Download CTA */}
            <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 block mb-1">
                Technical Reference
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Official Maxwell Product Catalogue
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Contains complete model dimensions, power ratings, wiring voltages, and capacities for all 28 equipment models.
              </p>
              <a
                href={SITE_CONFIG.catalogPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-800 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-900 transition shadow-xs"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Complete Quotation Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
              B2B Commercial Quotation Request
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Request Equipment Pricing & Sizing
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 mb-6">
              Fill out the form below. Our commercial sales engineers will furnish model recommendations, 3-phase electrical guidance, and formal commercial pricing.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
