import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteModal from "@/components/QuoteModal";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { QuoteProvider } from "@/context/QuoteContext";
import { SITE_CONFIG } from "@/data/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Maxwell Induction | Commercial Induction Kitchen Equipment",
    template: "%s | Maxwell Induction",
  },
  description:
    "Professional induction solutions for commercial kitchens, designed around efficient cooking, precise temperature control, safer operation and professional kitchen performance.",
  keywords: [
    "commercial induction kitchen equipment",
    "commercial induction cooking equipment",
    "commercial induction equipment",
    "commercial induction cooktop",
    "commercial induction cooker",
    "industrial induction cooking equipment",
    "induction hot plate",
    "induction boiling pan",
    "induction bratt pan",
    "induction cooking mixer machine",
    "induction steamer",
    "commercial kitchen equipment manufacturer",
    "induction cooking equipment",
    "commercial kitchen induction",
    "Maxwell Induction",
  ],
  authors: [{ name: "Maxwell Induction" }],
  creator: "Maxwell Induction",
  publisher: "Maxwell Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Maxwell Induction | Commercial Induction Kitchen Equipment",
    description:
      "Powering a Cleaner, Smarter Kitchen. Discover Maxwell Induction's complete range of tabletop, commercial, bulk cooking, and steam induction equipment.",
    url: SITE_CONFIG.domain,
    siteName: "Maxwell Induction",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/maxwell-kitchen-hero.jpg",
        width: 2480,
        height: 1772,
        alt: "Maxwell Induction Commercial Kitchen Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Induction | Commercial Induction Kitchen Equipment",
    description:
      "Powering a Cleaner, Smarter Kitchen. High-efficiency commercial induction suites with 90% thermal transfer.",
    images: ["/images/maxwell-kitchen-hero.jpg"],
  },
  // Google Search Console HTML-tag verification (set NEXT_PUBLIC_GSC_VERIFICATION)
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brands/maxwell-icon.png", type: "image/png" },
    ],
    apple: "/brands/maxwell-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow.variable} ${barlowCondensed.variable} bg-white text-slate-900 scroll-smooth`}
    >
      <head>
        {/* Organization + WebSite structured data */}
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {/* Maxwell CRM Embed Script */}
        <script
          src="https://crm.vfegroups.com/embed.js"
          data-key="mx_07320adb2e93465fba0730616c7039fddaaf28fbacfa8540"
          defer
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#1d4a98] selection:text-white"
      >
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <QuoteModal />
        </QuoteProvider>
        <Analytics />
      </body>
    </html>
  );
}
