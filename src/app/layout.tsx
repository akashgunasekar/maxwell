import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteModal from "@/components/QuoteModal";
import { QuoteProvider } from "@/context/QuoteContext";
import { SITE_CONFIG } from "@/data/site";

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
    "commercial induction cooking equipment",
    "commercial induction equipment",
    "commercial induction cooktop",
    "commercial induction cooker",
    "commercial induction kitchen equipment",
    "industrial induction cooking equipment",
    "commercial induction hot plate",
    "commercial induction wok",
    "commercial induction boiling pan",
    "commercial induction bratt pan",
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
        width: 1200,
        height: 630,
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
        {/* Organization Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.domain,
              logo: `${SITE_CONFIG.domain}/brands/maxwell-induction.png`,
              description:
                "Manufacturer of commercial induction kitchen equipment, boiling pans, bratt pans, tabletop cookers, and heavy-duty cooking ranges.",
              parentOrganization: {
                "@type": "Organization",
                name: SITE_CONFIG.parentGroup,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-89258-57824",
                contactType: "sales and customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Tamil", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_CONFIG.contact.address.line1,
                addressLocality: SITE_CONFIG.contact.address.locality,
                postalCode: SITE_CONFIG.contact.address.pincode,
                addressRegion: SITE_CONFIG.contact.address.state,
                addressCountry: "IN",
              },
            }),
          }}
        />
        {/* Maxwell CRM Embed Script */}
        <script
          src="https://crm.vfegroups.com/embed.js"
          data-key="mx_07320adb2e93465fba0730616c7039fddaaf28fbacfa8540"
          defer
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-600 selection:text-white"
      >
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
