"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
}

export default function ProductGrid({
  products,
  initialCategory = "all",
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category Match
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;

      // Search Query Match (checks Name, CategoryName, Slug, Model numbers, description)
      const q = searchQuery.toLowerCase().trim();
      if (!q) return categoryMatch;

      const nameMatch = product.name.toLowerCase().includes(q);
      const catMatch = product.categoryName.toLowerCase().includes(q);
      const descMatch = product.shortDescription.toLowerCase().includes(q);
      const modelMatch = product.models.some((m) =>
        m.model.toLowerCase().includes(q)
      );

      return categoryMatch && (nameMatch || catMatch || descMatch || modelMatch);
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search & Category Filter Controls Bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs md:flex-row md:items-center md:justify-between">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by equipment, wok, boiler, fryer, or model (MI-FR)..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-600"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="md:hidden">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Filter by Category:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 focus:border-sky-600 focus:outline-none"
          >
            <option value="all">All Equipment ({products.length})</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.productCount})
              </option>
            ))}
          </select>
        </div>

        {/* Product Count Indicator */}
        <div className="hidden md:flex items-center text-xs font-semibold text-slate-500">
          Showing <span className="mx-1 text-sky-800 font-bold">{filteredProducts.length}</span> of {products.length} Products
        </div>
      </div>

      {/* Desktop Category Tabs */}
      <div className="hidden md:flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
            selectedCategory === "all"
              ? "bg-sky-700 text-white shadow-xs"
              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          All Equipment ({products.length})
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
              selectedCategory === c.id
                ? "bg-sky-700 text-white shadow-xs"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {c.name} ({c.productCount})
          </button>
        ))}
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
          <p className="text-base font-bold text-slate-800">No equipment found matching &quot;{searchQuery}&quot;</p>
          <p className="mt-1 text-xs text-slate-500">
            Try checking for different terms like &quot;cooktop&quot;, &quot;boiler&quot;, &quot;fryer&quot;, &quot;steamer&quot;, or clear your filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-700 px-4 py-2 text-xs font-bold text-white hover:bg-sky-800 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
