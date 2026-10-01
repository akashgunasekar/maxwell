"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, FileDown, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { useQuote } from "@/context/QuoteContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Why Induction", href: "/why-induction" },
    { label: "Industries", href: "/industries" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Top Professional Utility Bar */}
      <div className="hidden border-b border-slate-100 bg-slate-50 py-1.5 text-xs text-slate-600 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Commercial Induction Cooking Technology
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">Pan-India Sales & Service Support</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-sky-700 transition hover:text-sky-900"
            >
              <Phone className="h-3.5 w-3.5 text-sky-600" />
              <span>{SITE_CONFIG.contact.primaryPhone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={SITE_CONFIG.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-sky-700 transition"
              title="Download Maxwell Induction Product Catalogue PDF"
            >
              <FileDown className="h-3.5 w-3.5 text-sky-600" />
              <span>Download Catalogue</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div
        className={`w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all duration-200 ${
          isScrolled ? "py-2.5 shadow-sm" : "py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Maxwell Induction Home">
            <div className="relative h-10 w-44 sm:h-11 sm:w-48 transition-transform hover:scale-[1.01]">
              <Image
                src="/brands/maxwell-induction.png"
                alt="Maxwell Induction Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors rounded-lg ${
                    isActive
                      ? "text-sky-700 bg-sky-50 font-bold"
                      : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuote()}
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-sky-800 active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-semibold transition ${
                    isActive ? "bg-sky-50 text-sky-800 font-bold" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-sky-800"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={SITE_CONFIG.catalogPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              <FileDown className="h-4 w-4 text-sky-700" />
              <span>Download Product Catalogue (PDF)</span>
            </a>

            <div className="pt-2 text-center text-xs text-slate-500">
              Direct Sales:{" "}
              <a href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`} className="font-semibold text-sky-700">
                {SITE_CONFIG.contact.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
