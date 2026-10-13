"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { PRODUCTS } from "@/data/products";

interface ContactFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ initialProduct = "", onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    productInterest: initialProduct || "All Products",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        productInterest: formData.productInterest,
        message: formData.message,
        page_url: typeof window !== "undefined" ? window.location.href : "",
      };

      await fetch("https://crm.vfegroups.com/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "mx_07320adb2e93465fba0730616c7039fddaaf28fbacfa8540",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("[Maxwell CRM] Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2500);
      }
    }
  };

  const productOptions = [
    "All Products",
    "Induction Tabletop Cooktop",
    "Induction Tabletop Wok",
    "Induction Tabletop Inbuilt Kadai",
    "Induction Tabletop Idli Steamer",
    "Induction Tabletop Induction Hot Plate",
    "Induction Tabletop Deep Fat Fryer",
    "Induction Tabletop Pav Bhaji",
    "Induction Tabletop Jalebi Machine",
    "Induction Drop-in Buffet Warmer",
    "Induction Tabletop Dual Zone Cooktop / Wok",
    "Induction Tabletop Multi-Food Steamer",
    "Induction Tabletop Fried Rice Machine",
    "Induction Cooktop",
    "Commercial Induction Hot Plate",
    "Induction Oil Fry Kadai Wok",
    "Chinese Wok",
    "Commercial Induction Boiling Pan",
    "Commercial Induction Bratt Pan",
    "Commercial Double Chinese Range",
    "Multy Food Steamer",
    "Idly Steamer",
    "Cooking Mixer",
    "Four Zone",
    "Standing Oil Fryer",
    "Dual Zone Burner Range",
    "Live Counter Kadai + Wok",
    "Induction Khoya Machine",
    "Induction Steam Generator Boiler",
    "Other Commercial Requirement",
  ];

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center animate-in fade-in">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-3" />
        <h3 className="text-xl font-bold text-slate-900">Quotation Request Received</h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our commercial engineering desk will review your technical requirement for{" "}
          <strong className="text-sky-800">{formData.productInterest}</strong> and get in touch within 24 business hours.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-800 transition"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call Directly: {SITE_CONFIG.contact.primaryPhone}</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-slate-600 underline hover:text-slate-900"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form data-maxwell-crm="" onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Company / Kitchen Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Grand Palace Hotel / Caterers"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="chef@kitchen.com"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            City / Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Chennai, Bangalore, Mumbai"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
          />
        </div>

        {/* Product Interest */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            Product Interest <span className="text-rose-500">*</span>
          </label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
          >
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
          Requirement / Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your cooking capacity, voltage setup, kitchen type, or model preference..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
        ></textarea>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>Your technical enquiry is sent directly to Maxwell Induction factory engineers.</span>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-sky-800 disabled:opacity-75"
      >
        <Send className="h-4 w-4" />
        <span>{isSubmitting ? "Submitting Quotation..." : "Request a Quote"}</span>
      </button>
    </form>
  );
}
