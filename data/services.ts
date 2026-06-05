export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Electrical Panel Upgrades",      href: "/electrical-panel-upgrades/" },
  { label: "EV Car Chargers",                href: "/ev-car-chargers/" },
  { label: "Historic Rewires",               href: "/historic-rewires/" },
  { label: "Ceiling Fans & Lighting",        href: "/ceiling-fans-lighting/" },
  { label: "Dock & Marina Electrical",       href: "/dock-marina-electrical/" },
  { label: "FPL Service Undergrounding",     href: "/fpl-service-undergrounding/" },
  { label: "Bathroom Electrical Upgrades",   href: "/bathroom-electrical-upgrades/" },
  { label: "Emergency Electrical Services",  href: "/emergency-electrical-services/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Electrical Panel Upgrades",
    image: "/images/service-1.png",
    href: "/electrical-panel-upgrades/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "EV Car Chargers",
    image: "/images/service-2.png",
    href: "/ev-car-chargers/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Historic Rewires",
    image: "/images/service-3.webp",
    href: "/historic-rewires/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Dock & Marina Electrical",
    image: "/images/service-4.webp",
    href: "/dock-marina-electrical/",
    width: 535,
    height: 643,
  },
];
