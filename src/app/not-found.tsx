import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-4 py-16 text-center">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm max-w-lg w-full">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 border border-sky-200">
          <Compass className="h-7 w-7 animate-pulse" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
          Error 404
        </span>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          The requested page could not be located. It may have been moved or updated within our commercial induction equipment catalogue.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/products"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-800 transition shadow-xs"
          >
            <span>Explore Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
