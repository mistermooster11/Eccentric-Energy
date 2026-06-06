export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 0,
    note: "Most projects quoted remotely",
    title: "Free Estimate",
    features: [
      "Phone or on-site assessment",
      "Transparent written quote",
      "No obligation",
      "Residential & commercial",
    ],
    description:
      "Get a clear, upfront quote for your electrical project. We assess the job and provide honest pricing before any work begins.",
  },
  {
    price: 0,
    note: "Call 561-904-1990",
    title: "Emergency Service",
    features: [
      "24/7 availability",
      "Same-day response",
      "Residential & commercial",
      "Licensed technicians",
    ],
    description:
      "Electrical emergencies don't wait. We're always on call to diagnose and resolve urgent issues fast across Palm Beach County.",
    highlight: true,
  },
  {
    price: 0,
    note: "Pricing varies by project",
    title: "Full Project Install",
    features: [
      "Panel upgrades",
      "EV charger installation",
      "Historic rewires",
      "FPL undergrounding",
      "Dock & marina electrical",
    ],
    description:
      "From minor repairs to full rewires and specialty installs, we handle every scope with licensed, code-compliant craftsmanship.",
  },
  {
    price: 0,
    note: "Serving all of Palm Beach County",
    title: "Specialty & Marine",
    features: [
      "Dock & marina shore power",
      "FPL service undergrounding",
      "Historic knob-and-tube rewires",
      "Bathroom electrical upgrades",
      "Ceiling fans & lighting",
    ],
    description:
      "We take the jobs others won't — marina installations, FPL coordination, and historic rewires done with minimal wall damage.",
  },
];
