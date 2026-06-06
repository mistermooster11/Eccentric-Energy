import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — Eccentric Energy | Licensed Electrician West Palm Beach",
  description:
    "Learn about Eccentric Energy — a family owned, Florida State Certified Electrical Contractor serving West Palm Beach and Palm Beach County since 2023.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        bgImage="/images/electrician-inspecting-electrical-panel-installation.jpg"
        title="About Us"
        subtitle="Family owned electrical contractor serving West Palm Beach and Palm Beach County — licensed, insured, and morally aimed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
