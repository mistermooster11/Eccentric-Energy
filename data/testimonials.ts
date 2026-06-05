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
    name: "Satisfied Customer",
    rating: 5,
    text: "Fast, professional, and honest. Eccentric Energy handled our panel upgrade and explained everything clearly before starting. No surprises on the bill.",
    avatar: "/images/avatar-customer2.png",
  },
  {
    name: "West Palm Beach Homeowner",
    rating: 5,
    text: "Called about a wiring concern and they were out the next morning. Knowledgeable team, fair pricing, and they cleaned up after themselves. Will use again.",
    avatar: "/images/avatar-customer3.png",
  },
];
