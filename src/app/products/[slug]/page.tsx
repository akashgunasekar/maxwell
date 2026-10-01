import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Phone,
  FileDown,
  Layers,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductModels from "@/components/ProductModels";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { SITE_CONFIG } from "@/data/site";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all 28 product routes at build time
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Generate unique, keyword-rich SEO metadata
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found | Maxwell Induction",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: [
      product.name.toLowerCase(),
      product.categoryName.toLowerCase(),
      "commercial induction",
      "industrial induction cooking",
      "Maxwell Induction",
      ...product.models.map((m) => m.model.toLowerCase()),
    ],
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `${SITE_CONFIG.domain}/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} Commercial Induction Equipment`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  // Product JSON-LD schema
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: `${SITE_CONFIG.domain}${product.image}`,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: "Maxwell Induction",
    },
    category: product.categoryName,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "Contact for Quote",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: product.models.map((m) => ({
      "@type": "PropertyValue",
      name: m.model,
      value: `Power: ${m.power}, Voltage: ${m.voltage}, Frequency: ${m.frequency}${
        m.capacity ? `, Capacity: ${m.capacity}` : ""
      }${m.hotPlateThickness ? `, Plate: ${m.hotPlateThickness}` : ""}`,
    })),
  };

  return (
    <div className="w-full bg-slate-50 py-10 lg:py-14">
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            {
              label: product.categoryName,
              href: `/products?category=${product.category}`,
            },
            { label: product.name },
          ]}
        />

        {/* Product Hero Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs mb-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Product Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-2xs">
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Maxwell Commercial Induction Equipment`}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 shadow-2xs border border-slate-200">
                    Brochure Page {product.brochurePage}
                  </span>
                </div>
              </div>

              {/* Warranty & Origin micro-badges */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  12 Months Warranty
                </span>
                <span>Pan-India On-Site Support</span>
              </div>
            </div>

            {/* Right: Product Intro & CTAs */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3 border border-sky-200">
                <Sparkles className="h-3 w-3" />
                {product.categoryName}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {product.name}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Quick Specs Highlight Strip */}
              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Thermal Efficiency</span>
                    <span className="font-extrabold text-slate-900 text-sm">~90% Direct Heat</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Model Variants</span>
                    <span className="font-extrabold text-sky-800 text-sm">
                      {product.models.length} Model{product.models.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Safety Standard</span>
                    <span className="font-extrabold text-emerald-700 text-sm">Auto Pan Detection</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-sky-800 transition"
                >
                  <FileText className="h-4 w-4" />
                  <span>Request a Quote</span>
                </a>
                <a
                  href="#specifications"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Applications Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 mb-10">
          {/* Key Features */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
              Key Engineering Features
            </h2>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suitable Applications */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
              Typical Applications
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200"
                >
                  {app}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 block mb-1">
                Brochure Reference:
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Specifications for this product are verified directly against Maxwell Induction brochure Page {product.brochurePage}.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications & Model Table */}
        <div id="specifications" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs mb-10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Source Documented Specifications
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                Technical Specifications & Model Matrix
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Units: mm (W × D × H) • Power: kW • Voltage: V • Freq: Hz
            </span>
          </div>

          <ProductModels models={product.models} />
        </div>

        {/* Quote Request Section */}
        <div id="inquiry" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                Factory Direct Enquiry
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Request a Quotation for {product.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly with our commercial technical team for volume pricing, 3-phase electrical installation requirements, and Pan-India delivery timelines.
              </p>

              <div className="mt-6 space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-sky-700" />
                  <span>
                    Direct Hotline: <strong>{SITE_CONFIG.contact.primaryPhone}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Includes 12 Months Standard Equipment Warranty</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm initialProduct={product.name} />
            </div>
          </div>
        </div>

        {/* Related Category Equipment */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Similar Category Equipment
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  Related Products
                </h3>
              </div>
              <Link
                href={`/products?category=${product.category}`}
                className="text-xs font-bold text-sky-800 hover:text-sky-950 transition"
              >
                View Category ({product.categoryName}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
