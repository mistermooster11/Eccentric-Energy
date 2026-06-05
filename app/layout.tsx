import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const SITE_URL = "https://[TODO: production-domain]";

export const metadata: Metadata = {
  metadataBase: new URL("https://eccentricenergy561.com"),
  title: {
    default: "Eccentric Energy — Licensed Electrician in West Palm Beach & Palm Beach County",
    template: "%s | Eccentric Energy",
  },
  description:
    "Florida State Certified Electrical Contractor serving West Palm Beach and Palm Beach County. Panel upgrades, EV chargers, historic rewires, dock & marina electrical, and 24/7 emergency service.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Eccentric Energy",
    title: "Eccentric Energy — Licensed Electrician in West Palm Beach & Palm Beach County",
    description:
      "Florida State Certified Electrical Contractor serving West Palm Beach and Palm Beach County. Panel upgrades, EV chargers, historic rewires, and 24/7 emergency service.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Eccentric Energy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eccentric Energy — Licensed Electrician in West Palm Beach",
    description:
      "Florida State Certified Electrical Contractor serving Palm Beach County. 24/7 emergency service.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Eccentric Energy",
  url: SITE_URL,
  telephone: "+15619041990",
  email: "EccentricEnergy@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5307 Spruce Ave",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    "Palm Beach", "West Palm Beach", "North Palm Beach", "Lake Park",
    "Riviera Beach", "Singer Island", "Palm Beach Shores", "Palm Beach Gardens",
    "Juno Beach", "Jupiter", "Tequesta",
  ],
  openingHours: "[TODO: Mo-Su 00:00-23:59 — confirm hours with client]",
  priceRange: "$$",
  hasCredential: "Florida State Certified Electrical Contractor EC-13012375",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
