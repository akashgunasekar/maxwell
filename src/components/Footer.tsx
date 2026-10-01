import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, FileDown, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { CATEGORIES } from "@/data/categories";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      {/* Upper Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Brochure */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-52">
                <Image
                  src="/brands/maxwell-induction.png"
                  alt="Maxwell Induction Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-800">
              Powering a Cleaner, Smarter Kitchen
            </p>
            <p className="max-w-sm text-sm text-slate-600 leading-relaxed">
              Maxwell Induction is an established commercial induction equipment manufacturer engineering professional cooking, boiling, frying, and steaming solutions with 90% thermal efficiency and flame-free reliability.
            </p>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.catalogPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-sky-300 bg-sky-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-sky-800 hover:bg-sky-100 transition shadow-sm"
              >
                <FileDown className="h-4 w-4 text-sky-700" />
                <span>Download Product Catalogue (PDF)</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>12 Months Standard Equipment Warranty Included</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-700 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-700 transition">
                  About Maxwell
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-700 transition">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/why-induction" className="hover:text-sky-700 transition">
                  Why Induction?
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-sky-700 transition">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-700 transition">
                  Services & Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-700 transition">
                  Contact & Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Equipment Categories
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-sky-700 transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Headquarters
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-sky-700 mt-1" />
                <span>
                  No. 7, PKM Industrial Complex, School Road, Mel Ayanambakkam, Chennai – 600 095, Tamil Nadu, India.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-sky-700" />
                <div className="flex flex-col">
                  <a href="tel:+918925857821" className="hover:text-sky-700">
                    +91 89258 57821
                  </a>
                  <a href="tel:+918925857823" className="hover:text-sky-700">
                    +91 89258 57823
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-sky-700" />
                <a href="mailto:sales@maxwellinduction.com" className="hover:text-sky-700">
                  sales@maxwellinduction.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-sky-700" />
                <span className="text-slate-700 font-medium">www.maxwellinduction.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Maxwell Group Division Strip */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Part of Maxwell Group
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Integrated Commercial Kitchen & Food Processing Engineering
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {SITE_CONFIG.groupBrands.map((brand) => (
                <div key={brand.name} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-700"></span>
                  <span className="text-xs font-semibold text-slate-800">{brand.name}</span>
                  <span className="text-[11px] text-slate-500">({brand.badge})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-200 bg-slate-100 py-5 text-center text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {currentYear} Maxwell Induction. All Rights Reserved. Commercial Induction Cooking Technology.</p>
          <p className="text-slate-600 font-medium">Powering a Cleaner, Smarter Kitchen</p>
        </div>
      </div>
    </footer>
  );
}
