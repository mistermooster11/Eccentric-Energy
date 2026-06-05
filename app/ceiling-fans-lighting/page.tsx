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
  title: "Ceiling Fans & Lighting Installation West Palm Beach — Eccentric Energy",
  description:
    "Ceiling fan and lighting installation in West Palm Beach and Palm Beach County. New or replacement, tall or sloped ceilings, small or tight attics — Eccentric Energy handles it.",
};

export default function CeilingFansLightingPage() {
  return (
    <>
      <PageHeroSection
        title="Ceiling Fans & Lighting"
        subtitle="New or replacement ceiling fans and lighting installations — including tall or sloped ceilings and tight attic access. Serving Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Ceiling Fans & Lighting" },
        ]}
      />
      <ServiceDetailSection
        activeService="Ceiling Fans & Lighting"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Ceiling Fan & Lighting Installation"
        intro={[
          "Whether you're adding new ceiling fans, replacing old fixtures, or installing lighting in a challenging space — tall vaulted ceilings, sloped surfaces, or tight attic access — Eccentric Energy handles the full installation safely and correctly.",
          "We install new circuits where needed, mount all fixture types, and ensure everything is wired to code. No job is too awkward.",
        ]}
        whatWeDo={[
          "New ceiling fan installation (all ceiling types)",
          "Ceiling fan replacement and upgrade",
          "Recessed and can lighting installation",
          "Pendant, chandelier, and fixture installation",
          "Outdoor and covered patio lighting",
          "Dimmer switches and lighting controls",
        ]}
        whyChooseUs={[
          "Experienced with vaulted, sloped, and difficult ceiling installs",
          "Clean work — we protect your finishes and clean up after",
          "Honest, upfront pricing before work begins",
          "Licensed and insured throughout Palm Beach County",
          "Family owned — we treat your home like our own",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
