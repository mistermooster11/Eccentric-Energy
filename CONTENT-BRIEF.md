# Eccentric Energy — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-06-05
Prospect: https://eccentricenergy561.com/
Template: Unclog-Template
Reference site: OConnor-Sons-Electric-V2 (in-house reference build)

---

## Source Material Summary

- **Business Name**: Eccentric Energy Electrical Contractor
- **Phone**: 561-904-1990
- **Email**: EccentricEnergy@yahoo.com
- **Address**: 5307 Spruce Ave, West Palm Beach, FL
- **License**: Florida State Certified Electrical Contractor EC-13012375
- **Founded**: 2023 (20+ years of industry experience)
- **Service Area**: Palm Beach, West Palm Beach, North Palm Beach, Lake Park, Riviera Beach, Singer Island, Palm Beach Shores, Palm Beach Gardens, Juno Beach, Jupiter, Tequesta
- **Differentiators**: Family owned, morally aimed, 20+ years experience, licensed & insured, 24/7 emergency, all employees attend IEC training
- **Testimonials**: 1 real testimonial extracted (Michael V., Nextdoor App). 2 placeholders generated.

---

## Service Inventory

1. Ceiling Fans & Lights
2. Dock & Marina (shore power — installing, maintaining, repairing)
3. FPL Service Undergrounding
4. Bathroom Upgrades (vent fans, heated bidet, heated towel racks)
5. Electrical Panel Upgrades
6. 24/7 Emergency Services
7. EV Car Chargers
8. Historic Rewires

All 8 services are represented as individual pages.

## Services Consolidated
None. All services kept separate.

---

## Pages Built & Content Decisions

| Page | Decision |
|------|----------|
| `/` (Homepage) | Standard homepage with all sections. Hero copy written from scratch (no video available). |
| `/about-us` | Standard about page. Copy extracted from prospect site "About Us" section. |
| `/services-page` | Standard services overview. All 4 grid slots used for top services. |
| `/faq` | 6 FAQs written from prospect content (services, service area, licensing). |
| `/contact-us` | Address, phone, email updated. Google Maps embed set to West Palm Beach — needs proper embed URL. |
| `/blog` | Blog renamed from `/blog-unclogme`. 3 placeholder posts written for electrician topics. |
| `/electrical-panel-upgrades` | Full service page. |
| `/ev-car-chargers` | Full service page. |
| `/historic-rewires` | Full service page. |
| `/ceiling-fans-lighting` | Full service page. |
| `/dock-marina-electrical` | Full service page. |
| `/fpl-service-undergrounding` | Full service page. |
| `/bathroom-electrical-upgrades` | Full service page. |
| `/emergency-electrical-services` | Full service page. |
| `/become-an-unclogger` | Removed. Page deleted, nav updated. |

---

## Navigation Changes

- Renamed "Homepage" to "Home"
- Replaced all template services with Eccentric Energy's 8 services
- Blog route changed from `/blog-unclogme` to `/blog`
- Removed "Become an unclogger" from nav entirely
- Footer quick links updated to match new nav

---

## Copy Generation Log

All extracted copy came directly from eccentricenergy561.com. The following was generated due to content gaps:

- **Hero headline & description** — prospect site has no video-ready hero copy. Generated using trade content library patterns.
- **About section paragraphs** — expanded from the "About Us" one-paragraph block on the prospect site.
- **FAQ items 2–6** — only question 1 (licensing) was directly answerable from site content. Others generated from trade/region context.
- **Blog posts (all 3)** — prospect has no blog. Generated realistic placeholder titles and excerpts relevant to Palm Beach County electrical work.
- **Testimonials 2 & 3** — prospect site has only 1 verified testimonial. Two placeholders added. Flag for replacement with real reviews.
- **Service page intro & bullet copy** — generated from service descriptions on prospect site and trade content library.

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | Created — disallows all crawlers on staging | TODO: flip to allow when on production domain |
| sitemap.ts | Created — covers all 8 service pages + standard routes | TODO: replace `[TODO: production-domain]` |
| LocalBusiness JSON-LD | Added to layout.tsx | Trade type: `Electrician` |
| Root metadata (title, description, OG, Twitter) | Done | metadataBase set to eccentricenergy561.com |
| Production domain | TODO: confirm | Currently using placeholder |
| Business hours | TODO: confirm with client | Site states "24/7" but hours not formally declared |
| OG image (1200x630) | TODO: provide image | `/og-image.jpg` placeholder |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Logo (header) | `public/logo.png` | Replace with Eccentric Energy logo (200×44) |
| Logo (footer) | `public/images/logo-image-50.png` | Replace with Eccentric Energy logo (239×58) |
| Hero video | `HeroSection.tsx` | Upload video to `/public/videos/hero.mp4` or use still image |
| Hero poster image | `HeroSection.tsx` | Replace `/images/hero-poster.jpg` with actual hero background |
| About section photo | `AboutSection.tsx` | Replace `/images/about-row.webp` with team or job photo |
| Work photos (fleet section) | `FleetSection.tsx` | Replace 3 work photos with actual Eccentric Energy job photos |
| Service card images (4×) | `data/services.ts` | Replace service-1 through service-4 with real electrician photos |
| Testimonials 2 & 3 | `data/testimonials.ts` | Replace generated placeholders with real Google/Nextdoor reviews |
| Testimonial avatars | `data/testimonials.ts` | Replace `/images/avatar-*.png` placeholders |
| Google Maps embed | `app/contact-us/page.tsx` | Replace with proper embed for 5307 Spruce Ave, West Palm Beach |
| Social links (footer) | `Footer.tsx` | Add real Facebook, Instagram, etc. URLs — currently `#` placeholders |
| Social links (contact) | `ContactSection.tsx` | Same as above |
| Blog post images | `data/blog.ts` | Replace blog-1, blog-2, blog-3 with real or stock electrical photos |
| OG image | `public/og-image.jpg` | Add 1200×630 social sharing image |
| Production domain | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` | Replace all `[TODO: production-domain]` placeholders |
| Business hours (JSON-LD) | `app/layout.tsx` | Confirm and update `openingHours` in LocalBusiness schema |
