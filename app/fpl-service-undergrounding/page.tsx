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
  title: "FPL Service Undergrounding West Palm Beach — Eccentric Energy",
  description:
    "FPL service undergrounding in West Palm Beach and Palm Beach County. Remove unsightly overhead power, phone, and cable wires by moving them underground.",
};

export default function FplServiceUndergroundingPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/eccentric-service.webp"
        title="FPL Service Undergrounding"
        subtitle="Moving overhead power, phone, and cable wires underground — removing unsightly utility poles and improving storm resilience. Serving Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "FPL Service Undergrounding" },
        ]}
      />
      <ServiceDetailSection
        activeService="FPL Service Undergrounding"
        sidebarImage="/images/service-2.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Overhead to Underground Electrical Service"
        intro={[
          "FPL service undergrounding removes unsightly overhead power, phone, and cable lines and moves them underground — improving curb appeal, reducing storm damage risk, and modernizing your property's utility infrastructure.",
          "Eccentric Energy handles the full process for residential and commercial properties throughout Palm Beach County. We coordinate with FPL and the utility companies involved to make the transition as smooth as possible.",
        ]}
        whatWeDo={[
          "Overhead power service relocation underground",
          "Coordination with FPL and utility companies",
          "Underground conduit installation and trenching",
          "Service entrance upgrades to accommodate underground feed",
          "Phone and cable line undergrounding",
          "Residential and commercial undergrounding projects",
        ]}
        whyChooseUs={[
          "Experienced with FPL coordination and underground installation requirements",
          "Handles the full project — permits, trenching, and connection",
          "Florida State Certified Electrical Contractor EC-13012375",
          "Transparent pricing and timeline before work begins",
          "Serving West Palm Beach and all of Palm Beach County",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
