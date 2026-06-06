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
  title: "Electrical Panel Upgrades West Palm Beach — Eccentric Energy",
  description:
    "Licensed panel upgrades in West Palm Beach and Palm Beach County. Eccentric Energy installs 200A service, adds circuits, and replaces outdated meters with code-compliant work.",
};

export default function ElectricalPanelUpgradesPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/eccentric-panel.webp"
        title="Electrical Panel Upgrades"
        subtitle="Changing or adding panels, electric meters, and installing circuits throughout Palm Beach County. Licensed, insured, and code-compliant."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Electrical Panel Upgrades" },
        ]}
      />
      <ServiceDetailSection
        activeService="Electrical Panel Upgrades"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Panel Upgrades & Electrical Service Changes"
        intro={[
          "An outdated or undersized electrical panel is one of the most common reasons homes and businesses in Palm Beach County can't support modern demand. Whether you're adding an EV charger, a home addition, or your current panel simply trips too often, Eccentric Energy handles the full upgrade.",
          "We change or add panels, replace electric meters, install new circuits, and ensure every job passes inspection. We are a Florida State Certified Electrical Contractor (EC-13012375), fully licensed and insured.",
        ]}
        whatWeDo={[
          "Panel replacements and service upgrades",
          "Electric meter installation and replacement",
          "New circuit installation throughout the home",
          "Subpanel installation and load balancing",
          "Capacity assessments for EV chargers and home additions",
          "Code-compliant work across Palm Beach County",
        ]}
        whyChooseUs={[
          "Florida State Certified Electrical Contractor EC-13012375",
          "20+ years of residential and commercial panel experience",
          "Honest, upfront pricing — you approve before we start",
          "Family owned and morally aimed",
          "24/7 availability for urgent service calls",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
