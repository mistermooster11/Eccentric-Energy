import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Dock & Marina Electrical West Palm Beach — Eccentric Energy",
  description:
    "Dock and marina electrical services in West Palm Beach and Palm Beach County. Eccentric Energy installs, maintains, and repairs shore power for docks and marinas.",
};

export default function DockMarinaElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Dock & Marina Electrical"
        subtitle="Installing, maintaining, and repairing shore power for docks and marinas throughout Palm Beach County. Eccentric Energy are the local marina electrical experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Dock & Marina Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Dock & Marina Electrical"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Shore Power & Marina Electrical Services"
        intro={[
          "Marine electrical work requires a different level of expertise than standard residential or commercial electrical. Eccentric Energy specializes in dock and marina electrical — installing, maintaining, and repairing shore power systems throughout Palm Beach County.",
          "From single dock pedestals to full marina service upgrades, we understand the code requirements, corrosion considerations, and safety standards specific to waterfront electrical work.",
        ]}
        whatWeDo={[
          "Shore power installation and pedestal wiring",
          "Marina service panel installation and upgrades",
          "Dock lighting installation",
          "Electrical maintenance programs for marinas",
          "Shore power repair and troubleshooting",
          "Code compliance inspections for marine electrical systems",
        ]}
        whyChooseUs={[
          "Specialists in dock and marina shore power — not a secondary service",
          "Familiar with NFPA 303 and marine electrical code requirements",
          "Florida State Certified Electrical Contractor EC-13012375",
          "Serving waterfront properties throughout Palm Beach County",
          "Available for scheduled maintenance contracts and emergency repairs",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
