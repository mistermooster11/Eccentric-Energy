export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/do-i-need-a-200-amp-panel-upgrade/",
    image: "/images/blog-1.png",
    date: "05",
    monthYear: "Jun '26",
    category: "Panel Upgrades",
    categoryHref: "/blog/",
    title: "Do I Need a 200-Amp Panel Upgrade? A Palm Beach Homeowner's Guide",
    excerpt:
      "Breakers tripping constantly? Planning an EV charger or home addition? Here's how to know if your panel is the bottleneck — and what an upgrade actually involves.",
  },
  {
    slug: "/blog/ev-charger-installation-what-to-expect/",
    image: "/images/blog-2.png",
    date: "05",
    monthYear: "Jun '26",
    category: "EV Chargers",
    categoryHref: "/blog/",
    title: "What to Expect During a Home EV Charger Installation",
    excerpt:
      "Level 1 vs. Level 2, NEMA outlets vs. hardwired — we break down the process so you know exactly what happens when an electrician installs your home charging station.",
  },
  {
    slug: "/blog/knob-and-tube-wiring-south-florida/",
    image: "/images/blog-3.png",
    date: "04",
    monthYear: "Jun '26",
    category: "Historic Rewires",
    categoryHref: "/blog/",
    title: "Knob-and-Tube Wiring in South Florida: When It's Time to Rewire",
    excerpt:
      "Old wiring isn't just an inconvenience — insurers increasingly refuse to cover it. Here's what you need to know if your Palm Beach home still has original wiring.",
  },
];
