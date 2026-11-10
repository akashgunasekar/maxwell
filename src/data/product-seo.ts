import { PRODUCTS, type Product } from "./products";

/**
 * Search-focused content for each product page.
 *
 * Keyed by Product.id (stable) rather than slug, so slugs can be changed
 * without touching this file. Every specification quoted here comes from
 * src/data/products.ts / the Maxwell brochure data. Do not add performance
 * claims here that are not supported by the brochure.
 */
export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductSeo {
  /** Single H1 shown on the product page (cards still use Product.name). */
  h1: string;
  /** Full <title>. Includes the brand; rendered with title.absolute. */
  title: string;
  /** Meta description, ~150-160 characters. */
  description: string;
  /** Descriptive, non-stuffed ALT text for the product image. */
  imageAlt: string;
  /** Unique 150-250 word overview, one string per paragraph. */
  intro: string[];
  /** Buyer-intent questions answered from the product specifications. */
  faqs: ProductFaq[];
  /** Product ids to link to as related equipment (cross-category). */
  related: string[];
  /** Extra keyword variations for the keywords meta tag. */
  keywords: string[];
}

export const PRODUCT_SEO: Record<string, ProductSeo> = {
  "dual-zone-burner-range": {
    h1: "Dual Zone Induction Burner Range – 8+8, 12+12 & 15+15 kW",
    title: "Dual Zone Induction Burner Range, 8+8 to 15+15 kW | Maxwell",
    description:
      "Heavy-duty dual zone induction burner range by Maxwell Induction, Chennai. Two independent burners, 8+8, 12+12 or 15+15 kW, 415 V 3-phase. Request a quote.",
    imageAlt:
      "Maxwell dual zone commercial induction burner range with two heavy-duty burners on a stainless steel platform",
    intro: [
      "The Maxwell Dual Zone Burner Range is a freestanding commercial induction range for kitchens that cook in large pots every day. Two independent induction burners sit side by side on a 1500 mm wide, 750 mm deep stainless steel platform, so one chef can run a stock or soup on one burner while a sauce or sauté runs on the other, each with its own power setting. It is offered in three configurations, 8+8 kW, 12+12 kW and 15+15 kW, so you can size the range to your cookware and menu volume. The rear backsplash is available in 600 mm and 800 mm heights.",
      "As an alternative to a two-burner LPG range, this heavy duty induction equipment removes the open flame and reduces the radiant heat that comes with it, which makes long cooking sessions more comfortable for kitchen staff. It runs on a 415 V, 50 Hz three-phase supply, so your electrician should confirm the connected load before installation. Typical uses include heavy stock boiling, simultaneous soup and sauce preparation, banquet battery cooking and high-volume prep kitchens. Maxwell Induction manufactures the range in Chennai and supplies it across India with a 12-month equipment warranty.",
    ],
    faqs: [
      {
        q: "What power options does the Dual Zone Burner Range come in?",
        a: "Three options are available: 8+8 kW (MI-IDR-8), 12+12 kW (MI-IDR-12) and 15+15 kW (MI-IDR-15). Each burner is independent, and all models use a 415 V, 50 Hz three-phase supply.",
      },
      {
        q: "What are the dimensions of the dual zone induction range?",
        a: "All three models are 1500 mm wide and 750 mm deep. The 8+8 kW and 12+12 kW models are listed with a 600 + 600 mm height and the 15+15 kW model with an 800 + 800 mm height, including the rear backsplash.",
      },
      {
        q: "Which kitchens use a dual zone induction burner range?",
        a: "It suits heavy stock boiling, simultaneous soup and sauce cooking, banquet battery cooking and high-volume prep kitchens in hotels, caterers and institutions.",
      },
    ],
    related: [
      "induction-cooktop",
      "four-zone",
      "commercial-double-chinese-range",
      "commercial-induction-boiling-pan",
    ],
    keywords: [
      "dual zone induction burner range",
      "two burner commercial induction range",
      "heavy duty induction equipment",
      "commercial induction stove",
    ],
  },

  "live-counter-kadai-wok": {
    h1: "Induction Live Counter Kadai + Wok for Hotels & Buffets",
    title: "Induction Live Counter Kadai + Wok Station | Maxwell Induction",
    description:
      "Live counter induction kadai and wok stations for hotels, buffets and caterers. Dual flat, dual wok, flat + wok or triple zone, 5+5 to 5+5+5 kW. Get a quote.",
    imageAlt:
      "Maxwell induction live counter with kadai and wok cooking zones on a stainless steel buffet counter",
    intro: [
      "The Maxwell Live Counter Kadai + Wok series is commercial induction cooking equipment built for front-of-house use, where guests watch the food being prepared. The counter comes in four layouts: dual flat zones (MI-IC2F), dual wok zones (MI-IC2W), one flat plus one wok zone (MI-ICFW) and a triple-zone station (MI-ICFWH). A hotel or caterer can therefore choose the mix of pan and wok cooking that suits the live menu. The 5+5 kW models run on 220 V and are 1200 mm wide; the triple-zone model offers 5+5+5 kW on 440 V and is 1500 mm wide.",
      "With no open flame and a low-profile 100 mm front splash, the counter keeps the cooking surface clean and the area comfortable for chefs and guests alike. It suits hotel live buffet counters, wedding live food stations, interactive chef tables and exhibition cooking. Because the supply voltage differs between the 5+5 kW and 5+5+5 kW models, confirm the power available at your venue before ordering. Maxwell Induction, a commercial kitchen equipment manufacturer based in Chennai, can advise on layout and supplies the counter across India with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "What configurations are available for the live counter?",
        a: "Four: dual flat zones (MI-IC2F), dual wok zones (MI-IC2W), flat plus wok (MI-ICFW) and a triple-zone station (MI-ICFWH).",
      },
      {
        q: "What voltage does the live counter kadai and wok station need?",
        a: "The 5+5 kW models (MI-IC2F, MI-IC2W, MI-ICFW) are listed for 220 V, 50 Hz. The 5+5+5 kW triple-zone model (MI-ICFWH) is listed for 440 V, 50 Hz.",
      },
      {
        q: "Where is an induction live counter used?",
        a: "Typical uses are hotel live buffet counters, wedding live food stations, interactive chef tables and exhibition cooking.",
      },
    ],
    related: [
      "induction-tabletop-cooktop",
      "induction-tabletop-dual-zone-cooktop-wok",
      "induction-tabletop-wok",
      "induction-drop-in-buffet-warmer",
    ],
    keywords: [
      "induction live counter",
      "live cooking induction station",
      "hotel kitchen induction equipment",
      "buffet induction cooktop",
    ],
  },

  "induction-cooktop": {
    h1: "Commercial Induction Cooktop – Freestanding Flat Range, 8–18 kW",
    title: "Commercial Induction Flat Range Cooktop, 8–18 kW | Maxwell",
    description:
      "Freestanding commercial induction cooktop (flat range) in 8, 12, 15 and 18 kW. Ceran glass deck, auto pan detection, 415 V 3-phase. Made in Chennai. Get a quote.",
    imageAlt:
      "Maxwell freestanding commercial induction cooktop flat range with stainless steel body and rear backsplash",
    intro: [
      "The Maxwell Commercial Induction Cooktop is a freestanding induction flat range for hotel, hospital and institutional kitchens that need continuous, high-capacity cooking. It is built on a heavy stainless steel body with a 600 mm rear backsplash and a wipe-clean flat Ceran glass deck with no grease grates to clean. Four power ratings are offered: 8 kW (MI-FR-08), 12 kW (MI-FR-12), 15 kW (MI-FR-15) and 18 kW (MI-FR-18). All share a 650 mm x 700 mm footprint, so you can match output to your largest pots without changing the layout of the cooking line.",
      "Auto Pan Detection switches heating off when cookware is removed, and the 415 V three-phase supply is designed for commercial loads. Compared with a conventional gas burner, an induction flat range puts the heat into the pan rather than into the kitchen, and Maxwell rates the technology at around 90% thermal efficiency. Typical uses are stock pot simmering, high-capacity soup boiling and general commercial cooking in hotel main kitchens. Maxwell Induction manufactures the cooktop in Chennai and supplies it Pan-India with a 12-month equipment warranty.",
    ],
    faqs: [
      {
        q: "Is the Maxwell commercial induction cooktop a flat range?",
        a: "Yes. It is a freestanding unit with a flat Ceran glass cooking deck, a stainless steel body and a 600 mm rear backsplash, offered in 8, 12, 15 and 18 kW models.",
      },
      {
        q: "What electrical supply does the commercial induction cooktop need?",
        a: "All four models (MI-FR-08, MI-FR-12, MI-FR-15, MI-FR-18) are listed for 415 V, 50 Hz three-phase supply. Have your electrician confirm the load for the model you choose.",
      },
      {
        q: "Do I need special cookware for an induction cooktop?",
        a: "Induction heats magnetic cookware such as stainless steel or cast iron pots. The cooktop has Auto Pan Detection and shuts off heating when the pan is removed.",
      },
    ],
    related: [
      "dual-zone-burner-range",
      "four-zone",
      "commercial-induction-boiling-pan",
      "chinese-wok",
    ],
    keywords: [
      "commercial induction flat range",
      "induction flat range",
      "commercial induction stove",
      "commercial induction cooktop",
    ],
  },

  "induction-oil-fry-kadai-wok": {
    h1: "Commercial Induction Frying Pan – Oil Fry Kadai Wok, 10–80 L",
    title: "Commercial Induction Oil Fry Kadai Wok, 10–80 L | Maxwell",
    description:
      "Freestanding commercial induction oil fry kadai wok in 10 L to 80 L and 8–25 kW for snack and catering frying. Thermostatic control, 415 V 3-phase. Get a quote.",
    imageAlt:
      "Maxwell freestanding commercial induction oil fry kadai wok with deep concave vessel and rear splash guard",
    intro: [
      "The Maxwell Induction Oil Fry Kadai Wok is a freestanding commercial induction frying pan in the form of a deep concave kadai, made for snack production, catering batches and large-scale frying. Six models cover oil capacities from 10 L (MI-FP-500, 8 kW) to 80 L (MI-FP-1000, 25 kW), with 18 L, 32 L, 48 L and 60 L sizes at 10, 12, 15 and 20 kW in between. All models run on 415 V three-phase power and stand 800 mm high with a 400 mm rear splash guard.",
      "The induction field heats the kadai directly, with no open flame under the oil, and a thermostatic control holds the temperature steady between batches. The deep concave vessel is designed to contain the oil during boiling batches. It suits high-volume samosa, vada and pakora frying, namkeen and snack processing, banquet live frying and catering production. For smaller outlets, Maxwell also makes a tabletop induction deep fryer and an inbuilt tabletop kadai, linked below. Maxwell Induction supplies these frying kadais from Chennai across India.",
    ],
    faqs: [
      {
        q: "What capacities does the induction oil fry kadai wok come in?",
        a: "Six sizes: 10 L (8 kW), 18 L (10 kW), 32 L (12 kW), 48 L (15 kW), 60 L (20 kW) and 80 L (25 kW), models MI-FP-500 to MI-FP-1000.",
      },
      {
        q: "Can the induction kadai be used for frying snacks like samosas and vadas?",
        a: "Yes. It is intended for high-volume samosa, vada and pakora frying, namkeen and snack processing, banquet live frying and catering production.",
      },
      {
        q: "What power supply does the oil fry kadai wok require?",
        a: "All six models are listed for 415 V, 50 Hz three-phase supply, with ratings from 8 kW to 25 kW.",
      },
    ],
    related: [
      "induction-tabletop-deep-fat-fryer",
      "induction-tabletop-inbuilt-kadai",
      "commercial-induction-bratt-pan",
      "commercial-induction-hot-plate",
    ],
    keywords: [
      "induction frying pan",
      "commercial induction frying pan",
      "induction kadai",
      "industrial induction fryer",
    ],
  },

  "commercial-induction-hot-plate": {
    h1: "Commercial Induction Hot Plate – 20 mm Griddle, 12–30 kW",
    title: "Commercial Induction Hot Plate, 12–30 kW, 20 mm | Maxwell",
    description:
      "Freestanding commercial induction hot plate with a 20 mm steel plate in 12 to 30 kW models, 1010–2020 mm wide, for dosa and paratha production. Get a quote.",
    imageAlt:
      "Maxwell commercial induction hot plate with a thick polished steel griddle plate on a stainless steel stand",
    intro: [
      "The Maxwell Commercial Induction Hot Plate is a freestanding induction griddle for kitchens that cook flatbreads, dosas and breakfast items continuously. The cooking surface is a 20 mm thick polished steel plate, heated by induction across independent zones so that the plate holds its temperature as batter or dough is placed on it. Five models are available: 12 kW (1010 mm wide), 15 kW (1490 mm), 20 kW (1715 mm), 25 kW (1715 mm) and 30 kW (2020 mm). All run on 415 V three-phase power with an 800 mm deck height and a 150 mm rear splash guard.",
      "Choose the width by the number of items you need to cook at once. A narrow plate suits a single dosa or paratha station, while the wider 25 kW and 30 kW models are built for continuous production. This industrial induction hot plate is used for dosa and uttapam production, roti and paratha griddling, burger patties and steaks, and hotel breakfast lines. Maxwell Induction manufactures the plates in Chennai, and the sales team can help you choose a model and confirm the electrical load. A smaller 3-foot tabletop version is linked below.",
    ],
    faqs: [
      {
        q: "How thick is the commercial induction hot plate?",
        a: "All five models (MI-HP-12, MI-HP-15, MI-HP-20, MI-HP-25 and MI-HP-30) have a 20 mm thick polished steel hot plate.",
      },
      {
        q: "Which size of induction hot plate should I choose for dosa production?",
        a: "Choose by volume. The 12 kW model is 1010 mm wide, while the 25 kW and 30 kW models are 1715 mm and 2020 mm wide for continuous, high-volume cooking. Maxwell's sales team can advise on sizing.",
      },
      {
        q: "What can be cooked on an induction hot plate?",
        a: "Typical uses are dosa and uttapam, rotis and parathas, burger patties and steaks, and hotel breakfast lines.",
      },
    ],
    related: [
      "induction-tabletop-induction-hot-plate",
      "induction-oil-fry-kadai-wok",
      "commercial-induction-bratt-pan",
      "induction-cooktop",
    ],
    keywords: [
      "induction hot plate",
      "commercial induction hot plate",
      "induction tawa",
      "induction griddle",
    ],
  },

  "chinese-wok": {
    h1: "Commercial Induction Chinese Wok Range – 8 kW",
    title: "Commercial Induction Chinese Wok Range, 8 kW | Maxwell",
    description:
      "8 kW commercial induction Chinese wok range with water tap, wok wash trough and rear backsplash. Standard and wide models, 415 V 3-phase. Get a quote.",
    imageAlt:
      "Maxwell commercial induction Chinese wok range with concave wok well, water tap and stainless steel backsplash",
    intro: [
      "The Maxwell Commercial Chinese Wok is a freestanding 8 kW induction wok station for Asian and Chinese cooking lines. A concave induction well heats a round-bottom wok directly, so a chef can toss noodles, rice and vegetables at high heat without a gas flame. The station includes an integrated swing-spout water tap, a wok wash trough and a deep drain, and the all-welded stainless steel body has an 800 mm working height and a 400 mm rear backsplash.",
      "Two sizes are offered: the standard MI-ICR-08 (630 mm wide, 850 mm deep) and the wider MI-ICRS-08 (1105 mm wide, 1040 mm deep). Both are rated 8 kW on a 415 V three-phase supply. This commercial induction stove is used in Chinese restaurants, hotel oriental kitchens, noodle and stir-fry stations and food courts. If you need two wok stations side by side, see the Commercial Double Chinese Range; for compact counters, see the Induction Tabletop Wok. Maxwell Induction supplies Chinese wok ranges across India from its Chennai factory with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "What sizes does the commercial induction Chinese wok come in?",
        a: "Two: the standard MI-ICR-08 at 630 x 850 mm and the wider MI-ICRS-08 at 1105 x 1040 mm. Both are rated 8 kW and have an 800 mm deck with a 400 mm rear backsplash.",
      },
      {
        q: "Does the induction Chinese wok range have a water tap?",
        a: "Yes. It includes an integrated swing-spout water tap, a wok wash trough and a deep drain trough.",
      },
      {
        q: "Which kitchens use an induction Chinese wok range?",
        a: "It is used in Chinese restaurants, hotel oriental kitchens, noodle and stir-fry stations and food courts.",
      },
    ],
    related: [
      "commercial-double-chinese-range",
      "induction-tabletop-wok",
      "induction-tabletop-dual-zone-cooktop-wok",
      "induction-cooktop",
    ],
    keywords: [
      "induction chinese wok range",
      "commercial induction wok",
      "induction wok cooker",
      "restaurant kitchen equipment",
    ],
  },

  "induction-tabletop-cooktop": {
    h1: "Induction Tabletop Cooktop – Commercial 3.5 kW & 5 kW",
    title: "Commercial Induction Tabletop Cooktop, 3.5 & 5 kW | Maxwell",
    description:
      "Commercial tabletop induction cooktop in 3.5 kW and 5 kW with auto pan detection and digital temperature control. Compact, flame-free cooking. Get a quote.",
    imageAlt:
      "Maxwell commercial tabletop induction cooktop with flat glass cooking zone and digital control panel",
    intro: [
      "The Maxwell Induction Tabletop Cooktop is a compact commercial induction cooker that sits on a counter, making it a practical choice for hotel live stations, à la carte preparation, pantries and small commercial kitchens. A flat Ceran glass cooking zone is housed in a heavy-duty stainless steel body, with instant multi-level digital temperature control and Auto Pan Detection that shuts the unit off when the pan is lifted. Two models are available: the 3.5 kW MI-TT-3.5 and the 5 kW MI-TT-5.0, both on a 220 V, 50 Hz supply.",
      "Maxwell states that up to 90% of the energy is transferred into the cookware, and because there is no flame the surrounding kitchen stays cooler. This energy efficient induction cooking equipment is used for à la carte cooking, live buffet stations, pantry cooking and catering or banquet service. When you need more than one zone, the Dual Zone Tabletop Cooktop / Wok or the Four Zone range may suit better. Maxwell Induction, a commercial kitchen equipment manufacturer in Chennai, supplies tabletop cooktops across India with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "What power ratings are available for the tabletop induction cooktop?",
        a: "Two: 3.5 kW (MI-TT-3.5) and 5 kW (MI-TT-5.0). Both run on a 220 V, 50 Hz supply.",
      },
      {
        q: "Is the tabletop cooktop safe if the pan is removed?",
        a: "Yes. Auto Pan Detection switches the unit off automatically when cookware is removed from the cooking zone.",
      },
      {
        q: "Where is a commercial tabletop induction cooktop used?",
        a: "Typical uses are à la carte cooking, live buffet stations, pantry cooking, catering and banquets.",
      },
    ],
    related: [
      "induction-tabletop-dual-zone-cooktop-wok",
      "induction-tabletop-wok",
      "four-zone",
      "induction-cooktop",
    ],
    keywords: [
      "commercial induction cooker",
      "tabletop induction cooktop",
      "energy efficient induction cooking equipment",
      "hotel kitchen induction equipment",
    ],
  },

  "induction-tabletop-wok": {
    h1: "Induction Tabletop Wok – 5 kW Commercial Concave Wok Cooker",
    title: "Induction Tabletop Wok, 5 kW Commercial Wok Cooker | Maxwell",
    description:
      "5 kW commercial induction tabletop wok with a concave Ceran glass bowl for round-bottom woks. Fast heat response and auto shutdown. Request a quote.",
    imageAlt:
      "Maxwell tabletop induction wok with concave glass bowl and control knob in a stainless steel casing",
    intro: [
      "The Maxwell Induction Tabletop Wok is a 5 kW commercial wok cooker for live stations and compact Asian kitchens. A concave Ceran glass bowl is shaped to the base of a standard round-bottom wok, so the induction field heats the wok directly and responds quickly to the power knob. The heavy stainless steel casing includes a grease barrier, and an auto safety shutdown stops heating when the wok is lifted. The single model, MI-TT-WOK-5, runs on 220 V, 50 Hz.",
      "Because there is no open flame, a tabletop induction wok produces far less radiant heat around the chef than a gas wok burner, which helps in open kitchens and food courts. It is used for Asian stir-frying, noodle and rice tossing, live wok stations and QSR outlets. For a floor-standing station with a water tap and drain, choose the Commercial Chinese Wok range instead. Maxwell Induction supplies tabletop woks across India from Chennai with a 12-month equipment warranty and can help you decide between tabletop and freestanding formats.",
    ],
    faqs: [
      {
        q: "What size of wok does the induction tabletop wok take?",
        a: "It has a concave Ceran glass bowl made for standard round-bottom woks. The unit is rated 5 kW (model MI-TT-WOK-5).",
      },
      {
        q: "Does the tabletop wok shut off automatically?",
        a: "Yes. An auto safety shutdown stops heating when the wok is lifted from the bowl.",
      },
      {
        q: "Is the induction tabletop wok suitable for food courts and QSR kitchens?",
        a: "Yes. Typical uses include Asian stir-frying, noodle and rice tossing, live wok stations and QSR or food court counters.",
      },
    ],
    related: [
      "chinese-wok",
      "induction-tabletop-cooktop",
      "induction-tabletop-dual-zone-cooktop-wok",
      "commercial-double-chinese-range",
    ],
    keywords: [
      "induction wok",
      "commercial induction wok",
      "tabletop wok cooker",
      "restaurant kitchen equipment",
    ],
  },

  "induction-tabletop-inbuilt-kadai": {
    h1: "Induction Tabletop Inbuilt Kadai for Oil Frying & Dry Cooking",
    title: "Induction Tabletop Inbuilt Kadai, 5 kW Commercial | Maxwell",
    description:
      "5 kW commercial induction tabletop unit with inbuilt stainless steel kadai for oil frying, masala roasting and curries. Thermostatic control. Get a quote.",
    imageAlt:
      "Maxwell induction tabletop unit with an inbuilt stainless steel kadai bowl for frying and dry cooking",
    intro: [
      "The Maxwell Induction Tabletop Inbuilt Kadai brings traditional Indian kadai cooking to a clean, compact induction unit. A heavy-gauge stainless steel kadai bowl is built into the 5 kW unit, so oil frying, dry masala roasting, curry reductions and sweet preparation can be done on a counter without a gas stove. Heat is distributed evenly across the bowl to avoid scorched hot spots, and a thermostatic control makes frying temperatures repeatable from batch to batch. The model is MI-TT-IK-5, rated 5 kW on a 220 V, 50 Hz supply.",
      "The outer perimeter of the unit is designed not to overheat, which makes it safer around oil spills, and the easy-drain design keeps clean-up quick and hygienic. This commercial induction kadai suits continuous snack frying, curry preparation, dry masala roasting and Indian gravies in small restaurants, snack counters and catering units. If you need larger frying volumes, see the freestanding Induction Oil Fry Kadai Wok in 10 L to 80 L sizes, or the 10 L Tabletop Deep Fat Fryer. Maxwell Induction manufactures these units in Chennai for kitchens across India.",
    ],
    faqs: [
      {
        q: "What can I cook in the induction tabletop inbuilt kadai?",
        a: "It is designed for continuous oil frying, dry masala roasting, curry reductions and sweet preparation.",
      },
      {
        q: "What is the power rating of the inbuilt kadai?",
        a: "The model MI-TT-IK-5 is rated 5 kW on a 220 V, 50 Hz supply.",
      },
      {
        q: "Is the inbuilt kadai safe around oil spills?",
        a: "The outer perimeter is designed not to overheat, and the unit has an easy-drain design for quick, hygienic clean-up.",
      },
    ],
    related: [
      "induction-oil-fry-kadai-wok",
      "induction-tabletop-deep-fat-fryer",
      "cooking-mixer",
      "induction-tabletop-cooktop",
    ],
    keywords: [
      "induction kadai",
      "induction frying pan",
      "tabletop induction kadai",
      "commercial induction cooker",
    ],
  },

  "induction-tabletop-idli-steamer": {
    h1: "Induction Tabletop Idli Steamer – 60 Idlis per Batch",
    title: "Induction Tabletop Idli Steamer, 60 Idlis per Batch | Maxwell",
    description:
      "Commercial tabletop induction idli steamer, 60 idlis per batch, with fast steam generation and dry-boil safety shutoff. 5 kW, 220 V. Request a quote.",
    imageAlt:
      "Maxwell tabletop induction idli steamer with insulated stainless steel steaming cabinet",
    intro: [
      "The Maxwell Induction Tabletop Idli Steamer is a commercial induction steamer designed for South Indian restaurants, breakfast pantries and buffets. Each batch steams 60 idlis in an insulated stainless steel cabinet, and induction steam generation starts quickly without waiting for a separate boiler to warm up. A heavy silicone door gasket with a positive latch keeps steam inside the cabinet, and an automatic dry-boil shutoff protects the unit if the water runs out. The model MI-TT-IDLI-60 is rated 5 kW on a 220 V, 50 Hz supply.",
      "Besides idlis, the steamer is used for dhokla and momos, and it fits neatly on breakfast counters in hotels, canteens and South Indian restaurants. Because induction heats only when needed and the cabinet is insulated, it is a practical alternative to LPG or boiler-fed idli steamers in smaller kitchens. For bulk steaming in institutional kitchens, Maxwell also offers the Multy Food Steamer in 8-pan and 12-pan versions. Maxwell Induction supplies the tabletop idli steamer across India from its Chennai factory with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "How many idlis does the induction tabletop idli steamer make per batch?",
        a: "The MI-TT-IDLI-60 steams 60 idlis per batch.",
      },
      {
        q: "Does the idli steamer have a safety feature if the water runs dry?",
        a: "Yes. It has an automatic dry-boil safety shutoff, along with a silicone door gasket and positive latch.",
      },
      {
        q: "Can the induction steamer be used for anything other than idlis?",
        a: "Yes. Typical uses include idli steaming, dhokla and momos, breakfast counters and South Indian restaurants.",
      },
    ],
    related: [
      "multy-food-steamer",
      "induction-tabletop-cooktop",
      "commercial-induction-boiling-pan",
      "induction-drop-in-buffet-warmer",
    ],
    keywords: [
      "induction steamer",
      "idli steamer",
      "commercial induction steamer",
      "restaurant kitchen equipment",
    ],
  },

  "induction-tabletop-induction-hot-plate": {
    h1: "Induction Tabletop Hot Plate – 3 Feet, 5 kW Commercial Griddle",
    title: "Induction Tabletop Hot Plate, 3 Feet, 5 kW | Maxwell Induction",
    description:
      "3-foot commercial tabletop induction hot plate, 5 kW, with a polished steel griddle plate and grease gutter for dosas and parathas. Request a quote today.",
    imageAlt:
      "Maxwell 3-foot tabletop induction hot plate with polished steel griddle plate and grease gutter",
    intro: [
      "The Maxwell Tabletop Induction Hot Plate is a 3-foot-wide commercial griddle for counters where dosas, parathas and chapatis are cooked to order. Induction coils sit beneath a heavy polished food-grade steel plate, and dual-zone thermostatic sensors help the plate heat evenly from edge to edge. A perimeter grease gutter with a collection drawer catches oil and batter, which keeps the station tidy during long breakfast services. The model MI-TT-HP-3F is rated 5 kW on a 220 V, 50 Hz supply.",
      "Because the surface is heated by induction rather than a flame, the plate recovers quickly when chilled dough or batter is placed on it, and there is much less radiant heat around the cook. Typical uses are dosa and uttapam, tawa paratha and chapati, breakfast griddling, and burger patties and sandwiches in cafes, hotels and QSR kitchens. If you need continuous high-volume production, the freestanding Commercial Induction Hot Plate offers a 20 mm thick plate in widths up to 2020 mm and power up to 30 kW. Maxwell Induction supplies both from Chennai.",
    ],
    faqs: [
      {
        q: "How wide is the tabletop induction hot plate?",
        a: "The model MI-TT-HP-3F is a 3-foot wide commercial cooking surface rated 5 kW on a 220 V, 50 Hz supply.",
      },
      {
        q: "What can I cook on a tabletop induction hot plate?",
        a: "Typical uses are dosa and uttapam, tawa paratha and chapati, breakfast griddling, and burger patties and sandwiches.",
      },
      {
        q: "What is the difference between the tabletop and the commercial induction hot plate?",
        a: "The tabletop model is a 3-foot, 5 kW counter unit. The freestanding Commercial Induction Hot Plate has a 20 mm plate in five models from 12 kW to 30 kW for higher-volume production.",
      },
    ],
    related: [
      "commercial-induction-hot-plate",
      "induction-tabletop-cooktop",
      "induction-tabletop-inbuilt-kadai",
      "induction-tabletop-deep-fat-fryer",
    ],
    keywords: [
      "induction hot plate",
      "tabletop induction griddle",
      "induction tawa",
      "commercial induction cooker",
    ],
  },

  "induction-tabletop-deep-fat-fryer": {
    h1: "Induction Tabletop Deep Fat Fryer – 10 L, 5 kW",
    title: "Induction Tabletop Deep Fat Fryer, 10 L, 5 kW | Maxwell",
    description:
      "10-litre commercial tabletop induction deep fat fryer, 5 kW, with cool-zone design, fast oil recovery and front drain valve. Get a quote from Maxwell.",
    imageAlt:
      "Maxwell 10 litre tabletop induction deep fat fryer with stainless steel frying basket and front drain valve",
    intro: [
      "The Maxwell Tabletop Deep Fat Fryer is a 10-litre commercial induction fryer for snack counters, cafes and QSR kitchens. Instead of an immersion element that can collect burnt sediment, induction heats the bottom of the vessel directly, and the cool-zone design keeps sediment from burning onto a hot surface. Fast oil recovery between batches helps keep fried food crisp during busy periods. The model MI-TT-DF-10 is rated 5 kW on a 220 V, 50 Hz supply.",
      "The fryer comes with a heavy stainless steel basket with an insulated handle and a front oil drainage valve so that oil can be drained and filtered safely. It is suited to french fries and finger foods, samosas, vadas and cutlets, and to cafe and QSR counters. For higher volumes, Maxwell's freestanding Induction Oil Fry Kadai Wok ranges from 10 L to 80 L, and the Tabletop Inbuilt Kadai suits Indian-style kadai frying. All three are manufactured by Maxwell Induction in Chennai and supplied across India with a 12-month equipment warranty.",
    ],
    faqs: [
      {
        q: "What is the oil capacity of the induction tabletop deep fat fryer?",
        a: "The model MI-TT-DF-10 has a 10 litre oil tank and a 5 kW induction heating system on a 220 V, 50 Hz supply.",
      },
      {
        q: "How is oil drained from the induction deep fryer?",
        a: "A front oil drainage valve allows safe, easy draining and filtering. The fryer also includes a heavy stainless steel basket with an insulated handle.",
      },
      {
        q: "What foods suit a tabletop induction fryer?",
        a: "Typical uses are french fries and finger foods, samosas, vadas and cutlets at QSR snack counters and cafe kitchens.",
      },
    ],
    related: [
      "induction-oil-fry-kadai-wok",
      "induction-tabletop-inbuilt-kadai",
      "induction-tabletop-induction-hot-plate",
      "induction-tabletop-cooktop",
    ],
    keywords: [
      "induction deep fryer",
      "induction frying pan",
      "commercial induction fryer",
      "restaurant kitchen equipment",
    ],
  },

  "induction-drop-in-buffet-warmer": {
    h1: "Induction Drop-in Buffet Warmer – 10 L, 3.5 kW",
    title: "Induction Drop-in Buffet Warmer, 10 L, 3.5 kW | Maxwell",
    description:
      "Flush-fit drop-in induction buffet warmer, 10 L, 3.5 kW, with simmer holding modes and no chafing fuel. For hotel and banquet buffets. Request a quote.",
    imageAlt:
      "Maxwell drop-in induction buffet warmer with black Ceran glass surface set flush into a buffet counter",
    intro: [
      "The Maxwell Drop-in Buffet Warmer is built into the counter so that it sits flush with the buffet line, a clean look for hotels, banquets and premium food service. A 3.5 kW induction unit holds a 10-litre vessel of soup, curry or sauce at serving temperature, with low-temperature simmer holding modes that help avoid scorching. The black Ceran glass surface is controlled from a remote touch panel, and there is no need for water or canned chafing fuel. The model MI-DI-BW-10 runs on 220 V, 50 Hz.",
      "Waterless, flameless holding avoids the smell of chafing fuel gels and keeps the buffet counter easy to wipe down. The warmer is used on hotel buffet lines, at banquet dining events, on corporate cafeteria serving counters and in luxury catering. Pair it with a tabletop induction cooktop or a Live Counter Kadai + Wok station to cook and hold food at the same counter. Maxwell Induction is a Chennai-based manufacturer of commercial induction kitchen equipment and supplies the buffet warmer across India with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "Does the induction buffet warmer need water or chafing fuel?",
        a: "No. It is waterless and uses 3.5 kW induction heating, so there are no canned chafing fuel gels.",
      },
      {
        q: "What size vessel does the drop-in buffet warmer hold?",
        a: "The model MI-DI-BW-10 is designed for a 10-litre vessel and runs on 220 V, 50 Hz.",
      },
      {
        q: "How is the drop-in induction warmer controlled?",
        a: "It has a sleek black Ceran glass surface with a remote touch panel and precise low-temperature simmer holding modes.",
      },
    ],
    related: [
      "induction-tabletop-cooktop",
      "live-counter-kadai-wok",
      "induction-tabletop-dual-zone-cooktop-wok",
      "induction-tabletop-idli-steamer",
    ],
    keywords: [
      "induction buffet warmer",
      "hotel kitchen induction equipment",
      "drop in induction warmer",
      "commercial induction equipment",
    ],
  },

  "induction-tabletop-dual-zone-cooktop-wok": {
    h1: "Induction Tabletop Dual Zone Cooktop / Wok – 5 kW + 5 kW",
    title: "Induction Tabletop Dual Zone Cooktop & Wok, 5+5 kW | Maxwell",
    description:
      "Countertop dual zone induction unit combining a flat cooktop and a wok, 5 kW + 5 kW, with independent digital controls. Made by Maxwell. Request a quote.",
    imageAlt:
      "Maxwell tabletop dual zone induction unit with one flat cooking zone and one concave wok zone",
    intro: [
      "The Maxwell Induction Tabletop Dual Zone Cooktop / Wok puts a flat induction zone and a concave wok zone on one compact countertop station. Each zone has its own 5 kW power module and its own digital power and temperature controls, so a chef can sauté or simmer on the flat plate while stir-frying in the wok at the same time. The chassis is heavy 304-grade stainless steel with a space-saving footprint for small commercial kitchens. The model MI-TT-DZ-5X2 is rated 5 kW + 5 kW, and the product listing specifies a 415 V, 50 Hz supply.",
      "The unit suits multi-dish à la carte cooking, QSR kitchen lines, restaurant service preparation and live cooking displays where counter space is limited. Because the two zones are independent, one zone can be switched off while the other keeps working. If you only need a single zone, Maxwell offers separate 3.5 kW and 5 kW Tabletop Cooktops and a 5 kW Tabletop Wok. Maxwell Induction manufactures all of these commercial induction cooking units in Chennai and supplies them across India with a 12-month equipment warranty.",
    ],
    faqs: [
      {
        q: "What zones does the tabletop dual zone induction unit have?",
        a: "One flat induction cooking plate and one concave induction wok bowl, each with its own 5 kW module (5 kW + 5 kW) and independent digital controls.",
      },
      {
        q: "Can both zones be used at the same time?",
        a: "Yes. The zones are independent, so a chef can sauté or boil stocks on the flat zone while stir-frying on the wok zone.",
      },
      {
        q: "What electrical supply does the dual zone tabletop unit use?",
        a: "The model MI-TT-DZ-5X2 is listed for a 415 V, 50 Hz supply. Confirm requirements with Maxwell's sales team before installation.",
      },
    ],
    related: [
      "induction-tabletop-cooktop",
      "induction-tabletop-wok",
      "live-counter-kadai-wok",
      "four-zone",
    ],
    keywords: [
      "dual zone induction cooktop",
      "induction cooktop and wok",
      "tabletop induction cooker",
      "restaurant kitchen equipment",
    ],
  },

  "commercial-induction-boiling-pan": {
    h1: "Industrial Induction Boiling Pan – 100 L to 300 L",
    title: "Industrial Induction Boiling Pan, 100–300 L | Maxwell",
    description:
      "Industrial induction boiling pans in 100, 150, 200, 250 and 300 L (12–30 kW) for bulk rice, dal and sambar. 415 V 3-phase, made in Chennai. Get a quote.",
    imageAlt:
      "Maxwell industrial induction boiling pan with insulated lid and front discharge valve for bulk cooking",
    intro: [
      "The Maxwell Commercial Induction Boiling Pan is an industrial induction boiling pan for kitchens that cook rice, dal, sambar, soups and stocks in bulk. Five models are available, from 100 L (12 kW) through 150 L (15 kW), 200 L (20 kW) and 250 L (25 kW) to 300 L (30 kW), all on a 415 V, 50 Hz three-phase supply. Heat is applied directly at the bottom and through a jacketed design, which spreads the heat evenly and helps prevent food from scorching on the pan floor.",
      "A spring-balanced, double-walled insulated lid makes the pan easier and safer to open, and a front brass discharge valve allows large volumes to be drained without lifting. Institutions, prisons, catering colleges, hospital kitchens and central commissaries use these pans for bulk rice boiling, dal and sambar preparation and stock boiling. When choosing a size, work back from the number of meals per batch and confirm the three-phase load with your electrician. Maxwell Induction, a commercial kitchen equipment manufacturer in Chennai, can help you size a boiling pan and supplies it across India with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "What capacities are available for the induction boiling pan?",
        a: "Five: 100 L (12 kW), 150 L (15 kW), 200 L (20 kW), 250 L (25 kW) and 300 L (30 kW), models MI-BPID-100 to MI-BPID-300.",
      },
      {
        q: "How do I choose the right size of industrial induction boiling pan?",
        a: "Start from the quantity of food you cook per batch, then choose the capacity and kW rating that match it. Maxwell's team can help size the pan and confirm the 415 V three-phase electrical load.",
      },
      {
        q: "What is an induction boiling pan used for?",
        a: "It is used for bulk rice boiling, dal and sambar preparation, stock and broth boiling and central commissary production.",
      },
    ],
    related: [
      "commercial-induction-bratt-pan",
      "cooking-mixer",
      "multy-food-steamer",
      "induction-cooktop",
    ],
    keywords: [
      "induction boiling pan",
      "industrial induction boiling pan",
      "commercial induction boiling pan",
      "industrial cooking equipment",
    ],
  },

  "commercial-induction-bratt-pan": {
    h1: "Commercial Induction Bratt Pan – Tilting, 100 L to 400 L",
    title: "Commercial Induction Bratt Pan, Tilting, 100–400 L | Maxwell",
    description:
      "Commercial tilting induction bratt pan in 100–400 L and 12–40 kW for braising, frying and stewing. Bi-metallic pan bottom, 415 V 3-phase. Request a quote.",
    imageAlt:
      "Maxwell commercial tilting induction bratt pan with stainless steel pan, water tap and counter-balanced lid",
    intro: [
      "The Maxwell Commercial Induction Bratt Pan, also called a tilting braising pan, is a multi-purpose bulk cooking machine for braising, shallow frying, boiling, stewing and steaming. Six models cover 100 L (12 kW), 150 L (15 kW), 200 L (20 kW), 250 L (25 kW), 300 L (30 kW) and 400 L (40 kW), all on a 415 V three-phase supply. A heavy stainless steel bi-metallic compound pan bottom spreads induction heat evenly across the pan floor, which helps avoid scorching when sautéing or reducing large quantities.",
      "A tilting mechanism, manual or motorized, lets operators pour out large volumes in a controlled way, and an integrated water tap and counter-balanced lid make the pan quicker to use and clean. Bratt pans are used for bulk braising and stewing, curry base sautéing, bulk shallow frying and mass cooking in institutional, hospital and central kitchens. If your menu is mostly boiling, a Commercial Induction Boiling Pan may be the better fit; for thick sweets and sauces, see the Induction Cooking Mixer Machine. Maxwell Induction manufactures bratt pans in Chennai and supplies them across India.",
    ],
    faqs: [
      {
        q: "What sizes does the commercial induction bratt pan come in?",
        a: "Six sizes: 100 L, 150 L, 200 L, 250 L, 300 L and 400 L, from 12 kW up to 40 kW (models MI-TBP-100 to MI-TBP-400).",
      },
      {
        q: "What is the difference between an induction bratt pan and a boiling pan?",
        a: "A bratt pan is a tilting, multi-purpose pan for braising, shallow frying, boiling, stewing and steaming. A boiling pan is mainly for bulk boiling of rice, dal, soups and stocks. See both product pages to compare.",
      },
      {
        q: "How does the bratt pan tilt?",
        a: "It has a smooth manual or motorized tilting mechanism for controlled pouring, plus an integrated water tap and a counter-balanced lid.",
      },
    ],
    related: [
      "commercial-induction-boiling-pan",
      "cooking-mixer",
      "induction-oil-fry-kadai-wok",
      "multy-food-steamer",
    ],
    keywords: [
      "induction bratt pan",
      "commercial induction bratt pan",
      "tilting braising pan",
      "benefits of induction bratt pans",
    ],
  },

  "commercial-double-chinese-range": {
    h1: "Commercial Double Chinese Range – 8+8 kW Induction Wok Station",
    title: "Commercial Double Chinese Induction Range, 8+8 kW | Maxwell",
    description:
      "Heavy-duty double Chinese induction wok range, 8+8 kW, 1800 mm wide with swing taps and 400 mm backsplash. Made in Chennai by Maxwell. Request a quote.",
    imageAlt:
      "Maxwell commercial double Chinese induction range with two concave wok wells and rear backsplash",
    intro: [
      "The Maxwell Commercial Double Chinese Range gives two chefs their own induction wok well in a single 1800 mm wide stainless steel station. Each concave well is rated 8 kW (8+8 kW in total) with its own power lever, so both woks can be run at full heat independently. The station has swing taps, a cold water wash-down spray and a perimeter grease trough, plus an 800 mm working height with a 400 mm rear backsplash. The model MI-ICDR-2X8 is 1800 mm wide and 1040 mm deep and runs on a 415 V, 50 Hz three-phase supply.",
      "By replacing gas wok burners with induction, the range removes the open flame and reduces radiant heat at the wok station, which is useful in busy Chinese restaurants, Asian banquet kitchens, food court Asian stations and hotel specialty kitchens. If you only need a single station, the Commercial Chinese Wok range is available in standard and wide sizes. Maxwell Induction manufactures the Double Chinese Range in Chennai and supplies it across India with a 12-month equipment warranty; the sales team can confirm electrical requirements before delivery.",
    ],
    faqs: [
      {
        q: "How many wok burners does the double Chinese induction range have?",
        a: "Two concave induction wok wells, each rated 8 kW (8+8 kW), with independent power levers.",
      },
      {
        q: "What are the dimensions of the commercial double Chinese range?",
        a: "The model MI-ICDR-2X8 is 1800 mm wide and 1040 mm deep, with an 800 mm working height plus a 400 mm rear backsplash.",
      },
      {
        q: "What is the difference between the Chinese Wok and the Double Chinese Range?",
        a: "The Commercial Chinese Wok is a single 8 kW station in standard (630 mm) or wide (1105 mm) sizes. The Double Chinese Range has two 8 kW wells in one 1800 mm station for two chefs.",
      },
    ],
    related: [
      "chinese-wok",
      "induction-tabletop-wok",
      "dual-zone-burner-range",
      "four-zone",
    ],
    keywords: [
      "double chinese induction range",
      "commercial induction wok range",
      "commercial kitchen equipment manufacturer",
      "heavy duty induction equipment",
    ],
  },

  "multy-food-steamer": {
    h1: "Commercial Induction Steamer – Multi Food Steamer, 8 & 12 Pan",
    title: "Commercial Induction Steamer, 8 & 12 Pan, 12 kW | Maxwell",
    description:
      "Vertical commercial induction steamer for 8 or 12 pans (600 x 600 mm) with 12 kW steam generation and boil-dry protection. Request a quote from Maxwell.",
    imageAlt:
      "Maxwell vertical commercial induction multi food steamer cabinet with pressure-sealed door",
    intro: [
      "The Maxwell Multy Food Steamer is a heavy-duty vertical commercial induction steamer for institutional and catering kitchens that steam in bulk. It is offered in two sizes: an 8-pan model (MI-IS-08, 1350 mm high) and a 12-pan model (MI-IS-12, 1845 mm high). Both take 600 x 600 mm steam pans and use a 12 kW induction steam generator on a 415 V, 50 Hz three-phase supply to fill the cabinet with steam. The cabinet is heavily insulated so that less heat escapes into the kitchen.",
      "A pressure-sealed door latch with food-grade silicone seals keeps steam inside, and an automatic water inlet with boil-dry protection looks after the water supply and protects the unit. Typical uses include bulk rice and grain steaming, vegetables and legumes, large batches of momos and dim sum, and hospital dietary preparation. Choose the 8-pan or 12-pan model according to your batch size and available floor and ceiling height. For smaller breakfast outlets, see the 60-idli Tabletop Idli Steamer. Maxwell Induction supplies steamers across India from its Chennai factory with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "How many pans does the commercial induction steamer hold?",
        a: "The MI-IS-08 holds 8 pans and the MI-IS-12 holds 12 pans, in both cases 600 x 600 mm steam pans.",
      },
      {
        q: "What power does the induction steamer use?",
        a: "Both models use a 12 kW induction steam generator on a 415 V, 50 Hz three-phase supply.",
      },
      {
        q: "What can be steamed in the multi food steamer?",
        a: "Typical uses are bulk rice and grains, vegetables and legumes, momos and dim sum in large batches, and hospital dietary preparation.",
      },
    ],
    related: [
      "induction-tabletop-idli-steamer",
      "commercial-induction-boiling-pan",
      "commercial-induction-bratt-pan",
      "cooking-mixer",
    ],
    keywords: [
      "induction steamer",
      "commercial induction steamer",
      "industrial steamer",
      "commercial food processing equipment",
    ],
  },

  "cooking-mixer": {
    h1: "Induction Cooking Mixer Machine – 100 L to 300 L",
    title: "Induction Cooking Mixer Machine, 100–300 L | Maxwell Induction",
    description:
      "Industrial induction cooking mixer machine, 100–300 L and 12–30 kW, with planetary scraper agitator and tilting bowl for sweets, sauces and gravies.",
    imageAlt:
      "Maxwell induction cooking mixer machine with tilting bowl and motorized planetary scraper agitator",
    intro: [
      "The Maxwell Cooking Mixer is an induction cooking mixer machine that combines a heated bowl with a motorized planetary scraper agitator. As the agitator turns, Teflon scraping blades continuously wipe the bottom and sides of the bowl, which helps stop thick preparations from sticking or burning. Four sizes are available: 100 L (12 kW), 150 L (15 kW), 200 L (20 kW) and 300 L (30 kW), all on a 415 V, 50 Hz three-phase supply. The bowl tilts, by hydraulic or geared mechanism, so that finished food can be discharged easily.",
      "This commercial food processing equipment is used for Indian sweets such as halwa and barfi, gravies and curry pastes, sauces and ketchups, and production in central commissaries. Because the heat comes from induction rather than a flame, the bowl is heated directly and the temperature is easy to control. If you are comparing cooking mixer machines, check capacity, power, agitator type and discharge method against your production batch. Maxwell Induction manufactures the mixer in Chennai and supplies it across India with a 12-month equipment warranty.",
    ],
    faqs: [
      {
        q: "What sizes does the induction cooking mixer machine come in?",
        a: "Four: 100 L (12 kW), 150 L (15 kW), 200 L (20 kW) and 300 L (30 kW), models MI-ITCM-100 to MI-ITCM-300.",
      },
      {
        q: "What can be cooked in an induction cooking mixer?",
        a: "It is used for Indian sweets such as halwa and barfi, gravies and curry pastes, sauces and ketchups, and central commissary production.",
      },
      {
        q: "How does the cooking mixer prevent sticking and burning?",
        a: "A planetary agitator with Teflon scraping blades continuously wipes the bottom and sidewalls of the bowl while induction heats the bowl directly.",
      },
    ],
    related: [
      "commercial-induction-boiling-pan",
      "commercial-induction-bratt-pan",
      "multy-food-steamer",
      "induction-oil-fry-kadai-wok",
    ],
    keywords: [
      "induction cooking mixer machine",
      "cooking mixer machine",
      "Colino cooking mixer machine",
      "commercial food processing equipment",
    ],
  },

  "four-zone": {
    h1: "Four Zone Commercial Induction Range – 4 x 3.5 kW",
    title: "Four Zone Commercial Induction Range, 4 x 3.5 kW | Maxwell",
    description:
      "Four zone commercial induction cooking range with 4 x 3.5 kW independent zones and 220 V supply for hotel and restaurant kitchens. Request a Maxwell quote.",
    imageAlt:
      "Maxwell four zone commercial induction range with four circular flat cooking zones on a stainless steel deck",
    intro: [
      "The Maxwell Four Zone is a commercial induction cooking range with four independent circular flat cooking zones, each driven by its own 3.5 kW module, for a total output of 14 kW. It is designed as the main cooking battery of hotel and restaurant kitchens, letting chefs simmer stocks, sauté vegetables, boil pasta and reduce sauces at the same time on one station. Each power module has its own fuse. The model MI-CC-4XF runs on a 220 V, 50 Hz commercial supply.",
      "The compact 750 mm wide x 800 mm deep footprint has an 800 mm deck height with a 150 mm rear splash guard, so it fits into a standard cooking line. The range is used on multi-pan à la carte lines, in hotel main kitchens, at continental cooking stations and for banquet preparation. For heavier pots, the Dual Zone Burner Range offers two high-output burners of up to 15 kW each, and the Commercial Induction Cooktop offers an 8–18 kW flat range. Maxwell Induction manufactures the Four Zone in Chennai and supplies it across India with a 12-month warranty.",
    ],
    faqs: [
      {
        q: "How much power does the four zone induction range have?",
        a: "Four independent zones of 3.5 kW each, a total of 14 kW (4 x 3.5 kW), on a 220 V, 50 Hz supply. The model is MI-CC-4XF.",
      },
      {
        q: "What are the dimensions of the four zone commercial induction range?",
        a: "750 mm wide and 800 mm deep, with an 800 mm deck height plus a 150 mm rear splash guard.",
      },
      {
        q: "Where is a four zone induction range used?",
        a: "Typical uses are multi-pan à la carte lines, hotel main kitchens, continental cooking stations and banquet preparation.",
      },
    ],
    related: [
      "induction-cooktop",
      "dual-zone-burner-range",
      "induction-tabletop-cooktop",
      "commercial-double-chinese-range",
    ],
    keywords: [
      "four zone induction range",
      "commercial induction cooking equipment",
      "hotel kitchen induction equipment",
      "induction flat range",
    ],
  },
};

/** SEO content for a product, with a safe fallback if an entry is missing. */
export function getProductSeo(product: Product): ProductSeo {
  const seo = PRODUCT_SEO[product.id];
  if (seo) return seo;
  return {
    h1: product.name,
    title: `${product.name} | Maxwell Induction`,
    description: product.shortDescription,
    imageAlt: `${product.name} by Maxwell Induction`,
    intro: [product.description],
    faqs: [],
    related: [],
    keywords: [],
  };
}

/** Related products: curated cross-category links first, then same category. */
export function getRelatedProductsSeo(product: Product, limit = 4): Product[] {
  const curated = getProductSeo(product)
    .related.map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p) && p!.id !== product.id);
  const sameCategory = PRODUCTS.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id &&
      !curated.some((c) => c.id === p.id)
  );
  return [...curated, ...sameCategory].slice(0, limit);
}
