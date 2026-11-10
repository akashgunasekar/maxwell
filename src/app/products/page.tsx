import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/data/products";
import { FileDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Commercial Induction Kitchen Equipment | Product Catalogue | Maxwell",
  description:
    "Explore Maxwell Induction's complete range of 20 commercial induction cooking equipment models: boiling pans, bratt pans, cooktops, hot plates, woks & steamers.",
  path: "/products",
  keywords: [
    "commercial induction kitchen equipment",
    "commercial induction cooking equipment",
    "commercial induction cooktop",
    "induction hot plate",
    "induction boiling pan",
    "induction bratt pan",
    "induction cooking mixer machine",
    "induction steamer",
    "heavy duty induction equipment",
    "industrial cooking equipment",
  ],
});

function ProductsContent() {
  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Products" }]} />

        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 mb-2 border border-sky-200">
              <Sparkles className="h-3 w-3" />
              Full Product Catalogue ({PRODUCTS.length} Commercial Models)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Induction Kitchen Equipment
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              Explore Maxwell Induction&apos;s complete range of commercial induction cooking, heating, frying, steaming and specialized kitchen equipment engineered for heavy-duty food service.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={SITE_CONFIG.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-sky-800 hover:bg-sky-50 transition shadow-2xs"
            >
              <FileDown className="h-4 w-4 text-sky-700" />
              <span>Download Full Brochure (PDF)</span>
            </a>
          </div>
        </div>

        {/* Product Grid with Instant Filter & Search */}
        <ProductGrid products={PRODUCTS} />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading equipment catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
