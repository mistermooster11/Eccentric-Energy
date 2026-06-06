"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function CTAFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".cta-form__left", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".cta-form__right", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const WHY_LEFT = [
    "24/7 emergency service",
    "Licensed & insured — EC-13012375",
    "Residential and commercial electrical",
    "Same-day response across Palm Beach County",
  ];
  const WHY_RIGHT = [
    "Panel upgrades, EV chargers & historic rewires",
    "Dock & marina and FPL undergrounding specialists",
    "Family owned — honest, transparent pricing",
    "20+ years of electrical expertise",
  ];

  return (
    <section className="cta-form" ref={sectionRef}>
      <div className="cta-form__container">
        {/* Left: image panel */}
        <div className="cta-form__left cta-form__left--image">
          <Image
            src="/images/eccentric-before-after.webp"
            alt="Eccentric Energy electrical work"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        {/* Right: dark transparent bg, info */}
        <div className="cta-form__right">
          <div className="cta-form__eyebrow">Fast Quote</div>
          <h2 className="cta-form__heading">Trusted When It Matters Most</h2>
          <p className="cta-form__text">
            Eccentric Energy provides licensed electrical services for homeowners and businesses
            across Palm Beach County — available 24/7 for emergency calls. Most projects can be
            quoted remotely. Call or fill out the form and we&apos;ll get back to you fast.
          </p>
          <p className="cta-form__text">
            From panel upgrades and EV charger installs to full historic rewires and dock electrical,
            we handle every scope with honest pricing and code-compliant work.
          </p>
          <h6 className="cta-form__why-title">Why Choose Us</h6>
          <div className="cta-form__why-grid">
            <ul className="cta-form__why-list">
              {WHY_LEFT.map((item, i) => (
                <li key={i} className="cta-form__why-item">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="cta-form__why-list">
              {WHY_RIGHT.map((item, i) => (
                <li key={i} className="cta-form__why-item">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className="cta-form__check-icon"
    >
      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
    </svg>
  );
}
