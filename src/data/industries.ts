export interface Industry {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  recommendedCategories: string[];
  keyBenefits: string[];
  image: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "hotels-restaurants",
    name: "Hotels & Restaurants",
    shortDescription: "Precision à la carte cooking, continuous banquet service, and cool kitchen comfort for hotel culinary teams.",
    description: "High-end hotels and fine-dining restaurants demand absolute temperature control, rapid boiling and sautéing, and a safe, cool working environment for long shifts. Maxwell induction eliminates radiant heat and toxic combustion fumes.",
    recommendedCategories: ["tabletop", "commercial", "specialized"],
    keyBenefits: ["Immediate heat control", "Zero open flame", "Massive kitchen ambient temperature reduction"],
    image: "/images/ind_hotel_restaurant.jpg",
  },
  {
    id: "caterers-banquet-halls",
    name: "Caterers & Banquet Halls",
    shortDescription: "High-volume bulk food production with prompt batch turnaround and easy drop-in buffet holding.",
    description: "Banquet operations and large-scale caterers require consistent batch results without food burning or hot spots. Maxwell boiling pans, bratt pans, and buffet warmers keep service fast, clean, and continuous.",
    recommendedCategories: ["bulk-cooking", "tabletop", "advanced"],
    keyBenefits: ["Rapid batch cycle times", "Uniform heating without scorching", "Portable tabletop and drop-in buffet warmers"],
    image: "/images/ind_catering_banquet.jpg",
  },
  {
    id: "institutions",
    name: "Institutions (Educational & Corporate)",
    shortDescription: "Heavy-duty mass feeding systems for university campuses, corporate cafeterias, and training centers.",
    description: "Educational institutions and corporate pantries serve thousands of meals within tight lunch windows. High-capacity induction steamers, cooktops, and boiling pans guarantee safe, scheduled, and energy-efficient meal deliveries.",
    recommendedCategories: ["bulk-cooking", "specialized", "commercial"],
    keyBenefits: ["60% lower operating cost vs LPG", "Automated pan detection and timer controls", "Highest food safety and worker security"],
    image: "/images/ind_institutions_hospitals.jpg",
  },
  {
    id: "industrial-kitchens",
    name: "Industrial Kitchens",
    shortDescription: "Central production units, packaged food manufacturers, and large-scale commissary kitchens.",
    description: "Industrial food processing operations require rugged stainless steel construction, 3-phase heavy power modules, and continuous heavy-duty reliability. Maxwell tilting pans, khoya machines, and cooking mixers handle continuous industrial duties.",
    recommendedCategories: ["bulk-cooking", "specialized", "advanced"],
    keyBenefits: ["Continuous heavy-duty duty cycle", "Precision motorized stirring and tilting", "Steam generation on demand"],
    image: "/images/ind_industrial_central.jpg",
  },
  {
    id: "hospitals-healthcare",
    name: "Hospitals & Healthcare",
    shortDescription: "Hygienic, zero-combustion dietary kitchens meeting strict medical sanitation standards.",
    description: "Healthcare facilities prioritize patient safety, sterile prep surfaces, and minimal exhaust noise. Maxwell induction eliminates carbon monoxide, soot, and gas line hazards while delivering smooth, wipe-clean stainless steel surfaces.",
    recommendedCategories: ["bulk-cooking", "tabletop", "specialized"],
    keyBenefits: ["Zero gas emissions or toxic combustion byproduct", "Hygienic sealed ceran glass surfaces", "Silent and vibration-free cooking"],
    image: "/images/ind_institutions_hospitals.jpg",
  },
  {
    id: "airlines-flight-kitchens",
    name: "Airlines & Flight Kitchens",
    shortDescription: "Rapid batch cooking and exacting temperature uniformity complying with airline catering hygiene.",
    description: "Inflight catering centers require precise portion reproducibility, HACCP compliance, and ultra-high reliability across 24/7 flight departure cycles.",
    recommendedCategories: ["commercial", "bulk-cooking", "specialized"],
    keyBenefits: ["Strict HACCP temperature reproducibility", "Rapid bulk steaming and simmering", "High electrical energy efficiency"],
    image: "/images/ind_hotel_restaurant.jpg",
  },
  {
    id: "cruise-ships-marine",
    name: "Cruise Ships & Marine",
    shortDescription: "Flame-free, safety-critical galley solutions certified for marine vessels and offshore setups.",
    description: "Marine kitchens have strict fire prevention rules forbidding open flames and volatile gas tanks. Maxwell full-electric commercial induction is the industry gold standard for offshore platforms and cruise liners.",
    recommendedCategories: ["commercial", "tabletop", "bulk-cooking"],
    keyBenefits: ["100% flame-free fire prevention", "Automatic pan detection shutdown", "Durable marine-grade stainless steel fabrication"],
    image: "/images/ind_catering_banquet.jpg",
  },
  {
    id: "food-courts-qsr",
    name: "Food Courts & QSR Chains",
    shortDescription: "Compact, fast-turnaround induction cookers, wok stations, and fryers for quick-service restaurants.",
    description: "Mall food courts and quick-service restaurant chains operate in tight kitchen footprints with restricted ventilation. Maxwell induction cooktops, woks, and deep fryers deliver instant heat without heating up the service counter.",
    recommendedCategories: ["tabletop", "commercial", "advanced"],
    keyBenefits: ["Instant recovery and rapid cooking speed", "Minimal heat emission keeps counters cool", "Compact tabletop footprints"],
    image: "/images/ind_qsr_foodcourts.jpg",
  },
];
