import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";

/** Build an absolute URL on the canonical (www) domain. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_CONFIG.domain).toString();
}

const DEFAULT_OG_IMAGE = {
  url: "/images/maxwell-kitchen-hero.jpg",
  width: 2480,
  height: 1772,
  alt: "Maxwell Induction commercial induction kitchen equipment",
};

interface PageMetadataInput {
  /** Full <title> (rendered with title.absolute, so include the brand). */
  title: string;
  description: string;
  /** Canonical path on the site, e.g. "/products". */
  path: string;
  keywords?: string[];
  image?: { url: string; width?: number; height?: number; alt: string };
}

/**
 * One place to build page metadata so every page gets a canonical URL and
 * complete Open Graph / Twitter tags. (Next.js replaces, not merges, nested
 * openGraph/twitter objects, so they must be complete on every page.)
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

/** BreadcrumbList structured data (Home is always the first item). */
export function breadcrumbJsonLd(items: BreadcrumbCrumb[]) {
  const all: BreadcrumbCrumb[] = [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

/** Organization + WebSite structured data, built from SITE_CONFIG. */
export function organizationJsonLd() {
  const { contact, social } = SITE_CONFIG;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.domain}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    logo: absoluteUrl("/brands/maxwell-induction.png"),
    description:
      "Chennai-based manufacturer of commercial induction kitchen equipment: boiling pans, bratt pans, hot plates, cooking mixers, steamers, woks, cooktops and heavy-duty induction ranges.",
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.parentGroup,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.primaryPhone,
      email: contact.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.state,
      postalCode: contact.address.pincode,
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Commercial induction kitchen equipment",
      "Industrial induction cooking equipment",
      "Induction boiling pans",
      "Induction bratt pans",
      "Induction cooking mixers",
    ],
    sameAs: Object.values(social),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.domain}/#website`,
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.name,
    publisher: { "@id": `${SITE_CONFIG.domain}/#organization` },
    inLanguage: "en-IN",
  };
}
