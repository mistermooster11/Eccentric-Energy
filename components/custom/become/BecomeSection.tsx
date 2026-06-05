"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

const BENEFITS = [
  {
    num: "01",
    title: "Competitive Pay",
    text: "We offer competitive wages and pay for IEC training so you grow while you work.",
  },
  {
    num: "02",
    title: "Real Field Experience",
    text: "Work on diverse projects — residential, commercial, dock & marina, and specialty installs — from day one.",
  },
  {
    num: "03",
    title: "Supportive Team",
    text: "Family-owned and operated. We invest in our people and maintain a culture of honesty and respect.",
  },
  {
    num: "04",
    title: "Growth Path",
    text: "We support licensing goals and promote from within. Start as a tech, grow into a lead or project role.",
  },
];

export default function BecomeSection() {
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
        gsap.from(".become-section__intro", {
          y: 30, opacity: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".become-card", {
          y: 50, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".become-section__grid", start: "top 85%", once: true },
        });
        gsap.from(".become-section__cta", {
          y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".become-section__cta", start: "top 92%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="become-section" ref={sectionRef}>
      <div className="become-section__inner">
        <p className="become-section__intro">
          Eccentric Energy is growing its team of licensed electricians across Palm Beach County.
          If you are a motivated, hands-on professional looking for a rewarding career in residential and commercial electrical work,
          we want to hear from you.
        </p>

        <div className="become-section__grid">
          {BENEFITS.map((b) => (
            <div key={b.num} className="become-card">
              <div className="become-card__num">{b.num}</div>
              <div className="become-card__title">{b.title}</div>
              <p className="become-card__text">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="become-section__cta">
          <Link href="/contact-us/" className="become-section__cta-btn">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
