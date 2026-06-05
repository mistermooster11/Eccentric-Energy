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
  title: "24/7 Emergency Electrical Services West Palm Beach — Eccentric Energy",
  description:
    "24/7 emergency electrical services in West Palm Beach and Palm Beach County. Eccentric Energy is always on call — call 561-904-1990 any time.",
};

export default function EmergencyElectricalServicesPage() {
  return (
    <>
      <PageHeroSection
        title="24/7 Emergency Electrical Services"
        subtitle="Always on call for you. Electrical emergencies don't wait — call Eccentric Energy any time for fast response across Palm Beach County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Electrical Services" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Electrical Services"
        sidebarImage="/images/service-4.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Emergency Electrical Service — 24/7"
        intro={[
          "Electrical emergencies — a tripped main breaker, a burning smell from an outlet, a sudden power loss to part of your home — require immediate attention from a licensed electrician. Eccentric Energy is always on call for emergency service across Palm Beach County.",
          "Call 561-904-1990 any time. We respond fast, diagnose the problem, and get it fixed safely. No extra charge for being on call.",
        ]}
        whatWeDo={[
          "Emergency panel and breaker issues",
          "Electrical burning smell or sparking outlets",
          "Sudden partial or full power loss",
          "Tripped GFCI and AFCI troubleshooting",
          "Storm damage electrical assessment",
          "Emergency marina and dock electrical issues",
        ]}
        whyChooseUs={[
          "Truly available 24/7 — call 561-904-1990 any time",
          "Licensed, insured electricians — not a dispatch service",
          "Fast response throughout Palm Beach County",
          "Honest assessment on arrival — no unnecessary upselling",
          "Florida State Certified Electrical Contractor EC-13012375",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
