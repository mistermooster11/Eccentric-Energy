"use client";

import { useRef, useEffect } from "react";

export default function TrustedLogos() {
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
        gsap.fromTo(
          ".trusted__heading",
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: ".trusted__heading", start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          ".trusted__logo-item",
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12, clearProps: "all",
            scrollTrigger: { trigger: ".trusted__logos", start: "top 92%", once: true },
          }
        );
      }, sectionRef);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="trusted" ref={sectionRef}>
      <div className="trusted__inner">
        <h2 className="trusted__heading">
          Florida State Certified &amp; Trusted Across Palm Beach County
        </h2>
        <div className="trusted__logos">
          <div className="trusted__logo-item trusted__credential">
            <div className="trusted__credential-icon">🏛️</div>
            <div className="trusted__credential-text">
              <strong>State Certified</strong>
              <span>EC-13012375</span>
            </div>
          </div>
          <div className="trusted__logo-item trusted__credential">
            <div className="trusted__credential-icon">⚡</div>
            <div className="trusted__credential-text">
              <strong>IEC Trained</strong>
              <span>All Technicians</span>
            </div>
          </div>
          <div className="trusted__logo-item trusted__credential">
            <div className="trusted__credential-icon">🛡️</div>
            <div className="trusted__credential-text">
              <strong>Licensed &amp; Insured</strong>
              <span>Florida</span>
            </div>
          </div>
          <div className="trusted__logo-item trusted__credential">
            <div className="trusted__credential-icon">⏰</div>
            <div className="trusted__credential-text">
              <strong>24/7 Emergency</strong>
              <span>Always On Call</span>
            </div>
          </div>
          <div className="trusted__logo-item trusted__credential">
            <div className="trusted__credential-icon">🏠</div>
            <div className="trusted__credential-text">
              <strong>Family Owned</strong>
              <span>Since 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
