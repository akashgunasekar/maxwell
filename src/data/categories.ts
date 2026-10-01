export interface Category {
  id: string;
  name: string;
  shortName: string;
  description: string;
  brochurePage: number;
  productCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "tabletop",
    name: "Tabletop Induction Equipment",
    shortName: "Tabletop",
    description: "Compact, high-efficiency countertop induction cookers, woks, fryers, and steamers for flexible commercial preparation.",
    brochurePage: 3,
    productCount: 12,
  },
  {
    id: "commercial",
    name: "Commercial Induction Equipment",
    shortName: "Commercial",
    description: "Heavy-duty freestanding commercial induction cooktops, oil fry kadai woks, hot plates, and high-heat Chinese woks.",
    brochurePage: 4,
    productCount: 4,
  },
  {
    id: "bulk-cooking",
    name: "Commercial Bulk Cooking",
    shortName: "Bulk Cooking",
    description: "Industrial-capacity boiling pans, tilting bratt pans, double Chinese ranges, and multi-pan food steamers for mass catering.",
    brochurePage: 5,
    productCount: 4,
  },
  {
    id: "specialized",
    name: "Specialized Induction Equipment",
    shortName: "Specialized",
    description: "High-volume idly steamers, motorized cooking mixers, multi-zone cooktops, and freestanding deep fryers.",
    brochurePage: 6,
    productCount: 4,
  },
  {
    id: "advanced",
    name: "Advanced / Special Application Equipment",
    shortName: "Advanced",
    description: "Multi-burner dual zones, live counter kadai & wok combinations, khoya sweet machines, and rapid steam boilers.",
    brochurePage: 7,
    productCount: 4,
  },
];
