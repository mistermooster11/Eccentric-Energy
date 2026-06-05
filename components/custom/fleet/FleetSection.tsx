"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
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
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Work</div>
          <h2 className="fleet-section__heading">
            Equipped for Every Electrical Job
          </h2>
          <p className="fleet-section__intro">
            From residential panel upgrades to complex marina installations and FPL
            undergrounding projects, our team arrives with the right tools for every job.
            We serve homeowners and businesses across West Palm Beach, Palm Beach Gardens,
            Jupiter, and the entire Palm Beach County area.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          {/* TODO: Replace with Eccentric Energy job/work photos */}
          <Image
            src="/images/work-photo-1.jpg"
            alt="Eccentric Energy electrical work"
            width={1024}
            height={909}
            className="fleet-section__img"
          />
          <Image
            src="/images/work-photo-2.jpg"
            alt="Eccentric Energy panel upgrade"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/work-photo-3.jpg"
            alt="Eccentric Energy EV charger installation"
            width={1024}
            height={541}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
