export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Michael V.",
    rating: 5,
    text: "Had issues with my car charger tripping the breaker. James came out the same day, diagnosed and repaired the problem and was very fair with the cost. Happy Customer!",
    avatar: "/images/avatar-michael.png",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Needed a full panel upgrade before selling the house. Eccentric Energy was on time, pulled the permit, and passed inspection first try. Exactly what I needed.",
    avatar: "/images/avatar-customer2.png",
  },
  {
    name: "Lisa T.",
    rating: 5,
    text: "Had them install two EV chargers in our garage. Clean install, no mess, and they walked me through everything. Pricing was upfront with no surprises.",
    avatar: "/images/avatar-customer3.png",
  },
  {
    name: "Mark S.",
    rating: 5,
    text: "Called late on a Friday with a tripped breaker that wouldn't reset. They were at my house within two hours. Problem solved, didn't overcharge. That's how it should be done.",
    avatar: "/images/avatar-michael.png",
  },
  {
    name: "Karen B.",
    rating: 5,
    text: "We have an older home with knob and tube wiring and were having trouble getting homeowner's insurance. Eccentric Energy rewired the critical areas with minimal wall damage. Highly recommend.",
    avatar: "/images/avatar-customer2.png",
  },
  {
    name: "Tom F.",
    rating: 5,
    text: "Family owned business and it shows — they actually care. Fixed our dock electrical issues that two other contractors couldn't figure out. Very satisfied.",
    avatar: "/images/avatar-customer3.png",
  },
];
