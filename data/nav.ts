export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Electrical Panel Upgrades", href: "/electrical-panel-upgrades" },
      { label: "EV Car Chargers", href: "/ev-car-chargers" },
      { label: "Historic Rewires", href: "/historic-rewires" },
      { label: "Ceiling Fans & Lighting", href: "/ceiling-fans-lighting" },
      { label: "Dock & Marina Electrical", href: "/dock-marina-electrical" },
      { label: "FPL Service Undergrounding", href: "/fpl-service-undergrounding" },
      { label: "Bathroom Electrical Upgrades", href: "/bathroom-electrical-upgrades" },
      { label: "Emergency Electrical Services", href: "/emergency-electrical-services" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Electrical Panel Upgrades", href: "/electrical-panel-upgrades/" },
  { label: "EV Car Chargers", href: "/ev-car-chargers/" },
  { label: "Historic Rewires", href: "/historic-rewires/" },
  { label: "Ceiling Fans & Lighting", href: "/ceiling-fans-lighting/" },
  { label: "Dock & Marina Electrical", href: "/dock-marina-electrical/" },
  { label: "FPL Service Undergrounding", href: "/fpl-service-undergrounding/" },
  { label: "Bathroom Electrical Upgrades", href: "/bathroom-electrical-upgrades/" },
  { label: "Emergency Electrical Services", href: "/emergency-electrical-services/" },
];
