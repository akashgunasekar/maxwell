"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Zap } from "lucide-react";
import { Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openQuote } = useQuote();

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
      <div>
        {/* Product Image Container */}
        <Link href={`/products/${product.slug}`} className="block relative aspect-4/3 w-full overflow-hidden rounded-lg bg-slate-50 border border-slate-100 p-3">
          <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src={product.image}
              alt={`${product.name} - Commercial Induction Equipment`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="absolute top-2.5 left-2.5">
            <span className="inline-block rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-800 shadow-xs border border-slate-200 backdrop-blur-xs">
              {product.categoryName.replace(" Equipment", "")}
            </span>
          </div>
        </Link>

        {/* Product Details */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
            <Zap className="h-3 w-3 text-sky-600" />
            <span>
              {product.models.length > 1
                ? `${product.models.length} Models Available`
                : product.models[0]?.capacity || product.models[0]?.power || "Commercial Induction"}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition line-clamp-1">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>

          <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
        >
          <span>Specs & Details</span>
          <ArrowRight className="h-3 w-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <button
          onClick={() => openQuote(product.name)}
          className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-3 py-2 text-xs font-bold text-white hover:bg-sky-800 transition shadow-xs"
          title="Request a quotation for this product"
        >
          <FileText className="h-3.5 w-3.5" />
          <span className="hidden sm:inline sm:ml-1">Quote</span>
        </button>
      </div>
    </div>
  );
}
