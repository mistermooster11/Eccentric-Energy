import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Eccentric Energy | Free Electrical Estimate",
  description:
    "Contact Eccentric Energy for licensed electrical services in West Palm Beach and Palm Beach County. Available 24/7 for emergencies — call 561-904-1990.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Available 24/7 for emergencies. Call 561-904-1990 or fill out the form for a free estimate — most projects quoted remotely."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        {/* TODO: Replace with Google Maps embed for 5307 Spruce Ave, West Palm Beach, FL */}
        <iframe
          title="Eccentric Energy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4!2d-80.0534!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7f2b2b2b2b2%3A0x0!2s5307+Spruce+Ave%2C+West+Palm+Beach%2C+FL+33405!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
