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
  title: "Bathroom Electrical Upgrades West Palm Beach — Eccentric Energy",
  description:
    "Bathroom electrical upgrades in West Palm Beach and Palm Beach County. Eccentric Energy installs vent fans, heated bidets, heated towel racks, and more.",
};

export default function BathroomElectricalUpgradesPage() {
  return (
    <>
      <PageHeroSection
        title="Bathroom Electrical Upgrades"
        subtitle="Reinvigorating bathrooms with new vent fans, heated bidets, heated towel racks, and modern electrical throughout Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Bathroom Electrical Upgrades" },
        ]}
      />
      <ServiceDetailSection
        activeService="Bathroom Electrical Upgrades"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Bathroom Electrical Upgrades & Installations"
        intro={[
          "A bathroom upgrade often means more than tile and fixtures — the electrical needs to support the new amenities. Eccentric Energy handles all bathroom electrical work, from new vent fans and GFCI outlets to heated bidet installations and towel warming racks.",
          "We work cleanly in finished spaces, installing circuits and devices without unnecessary wall damage. All work is code-compliant and inspected where required.",
        ]}
        whatWeDo={[
          "Exhaust and vent fan installation and replacement",
          "Heated bidet seat electrical installation",
          "Heated towel rack wiring",
          "GFCI outlet installation and replacement",
          "Vanity and mirror lighting installation",
          "Dedicated circuits for bathroom appliances",
        ]}
        whyChooseUs={[
          "Clean work in finished spaces — minimal disruption",
          "Experience with all bathroom electrical fixture types",
          "Licensed and insured — EC-13012375",
          "Honest pricing before any work starts",
          "Family owned — we take care of your home",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
