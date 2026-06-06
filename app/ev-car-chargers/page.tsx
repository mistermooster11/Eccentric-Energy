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
  title: "EV Car Charger Installation West Palm Beach — Eccentric Energy",
  description:
    "EV charger installation and maintenance in West Palm Beach and Palm Beach County. Eccentric Energy installs and services all types of EV chargers — Level 1, Level 2, and hardwired.",
};

export default function EvCarChargersPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/electric-vehicle-charging-home-driveway.jpg"
        title="EV Car Charger Installation"
        subtitle="Installing and maintaining EV car chargers of all types throughout Palm Beach County. We ensure your panel has the capacity and your charger is installed correctly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "EV Car Chargers" },
        ]}
      />
      <ServiceDetailSection
        activeService="EV Car Chargers"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="EV Charger Installation & Maintenance"
        intro={[
          "A Level 2 EV charger requires a dedicated 240V circuit — and if your panel is undersized, it may need an upgrade first. Eccentric Energy installs and maintains all types of EV chargers for homes and businesses across Palm Beach County.",
          "We assess your panel capacity, run the dedicated circuit, install the charger, and verify everything is code-compliant. If your panel needs upgrading to support the charger, we handle that too.",
        ]}
        whatWeDo={[
          "Level 1 and Level 2 EV charger installation",
          "Hardwired and NEMA 14-50 outlet installations",
          "Panel capacity assessment and upgrade coordination",
          "Dedicated 240V circuit installation",
          "EV charger maintenance and repair",
          "Residential and commercial EV charging stations",
        ]}
        whyChooseUs={[
          "Experience with all major EV charger brands and types",
          "Full assessment before installation — no guesswork",
          "Licensed, insured, and code-compliant throughout Florida",
          "Transparent pricing — quoted before work begins",
          "Same-day response available across Palm Beach County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
