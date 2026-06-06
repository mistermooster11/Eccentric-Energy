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
  title: "Historic Rewires West Palm Beach — Eccentric Energy",
  description:
    "Historic rewiring in West Palm Beach and Palm Beach County. Eccentric Energy updates old knob-and-tube, asbestos, and cloth wiring with minimal wall damage.",
};

export default function HistoricRewiresPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/eccentric-outlet.webp"
        title="Historic Rewires"
        subtitle="Updating old knob-and-tube, asbestos, and cloth wiring with modern copper — with minimal damage to walls and ceilings. Serving Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Historic Rewires" },
        ]}
      />
      <ServiceDetailSection
        activeService="Historic Rewires"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Knob-and-Tube & Old Wiring Replacement"
        intro={[
          "Knob-and-tube, asbestos-sheathed, and cloth wiring are fire hazards — and insurers in Florida increasingly refuse to cover homes that still have them. Eccentric Energy specializes in updating old wiring in historic and older homes throughout Palm Beach County.",
          "Our technique is designed to minimize wall and ceiling damage during the process. We replace the hazardous wiring with modern copper, restore the electrical system to code, and leave your home in better condition than we found it.",
        ]}
        whatWeDo={[
          "Knob-and-tube wiring removal and replacement",
          "Asbestos and cloth wiring replacement",
          "Full-home rewires with minimal demolition",
          "Targeted rewires for specific circuits or areas",
          "Code-compliant copper wiring installation",
          "Coordination with insurance documentation requirements",
        ]}
        whyChooseUs={[
          "Specialists in minimal-damage rewire techniques",
          "20+ years of experience with historic and older Palm Beach County homes",
          "Florida State Certified — EC-13012375",
          "Honest scope assessments — we tell you what you actually need",
          "Fully insured for work in occupied homes",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
