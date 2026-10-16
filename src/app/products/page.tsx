import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/data/products";
import { FileDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Commercial Induction Equipment | Complete Product Catalogue",
  description:
    "Explore Maxwell Induction's complete range of commercial induction cooking, heating, frying, steaming and specialized kitchen equipment. 20+ heavy-duty models.",
  keywords: [
    "commercial induction equipment",
    "commercial induction cooktop",
    "commercial induction wok",
    "commercial induction hot plate",
    "commercial induction boiling pan",
    "commercial induction bratt pan",
    "induction steamer",
    "commercial kitchen induction",
  ],
  openGraph: {
    title: "Commercial Induction Equipment | Maxwell Induction",
    description:
      "Explore Maxwell Induction's full 28-product commercial catalogue across tabletop, freestanding, bulk cooking, and specialized steam equipment.",
    url: `${SITE_CONFIG.domain}/products`,
  },
};

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
              Full Product Catalogue (28 Equipment Types)
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
