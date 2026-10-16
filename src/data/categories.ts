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
    id: "advanced",
    name: "Advanced / Special Application Equipment",
    shortName: "Advanced",
    description: "Heavy-duty dual zone burner ranges and front-of-house live counter kadai & wok combinations.",
    brochurePage: 7,
    productCount: 2,
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
    id: "tabletop",
    name: "Tabletop Induction Equipment",
    shortName: "Tabletop",
    description: "Compact, high-efficiency countertop induction cookers, woks, fryers, and steamers for flexible commercial preparation.",
    brochurePage: 3,
    productCount: 8,
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
    description: "Industrial motorized cooking mixers and heavy-duty multi-zone commercial cooktops.",
    brochurePage: 6,
    productCount: 2,
  },
];
