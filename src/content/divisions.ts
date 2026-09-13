export type ProductDivision = {
  slug: "fashion" | "military" | "uniforms" | "hosiery-accessories";
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  familyHeading: string;
  briefPoints: string[];
  hero: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  productSlugs: string[];
  categoryLabel: string;
};

export const productDivisions: ProductDivision[] = [
  {
    slug: "fashion",
    number: "01",
    eyebrow: "Fashion / private label",
    title: "Fashion collections",
    description: "Seasonal sweaters, cardigans and cotton knit tops developed around your silhouette, colour palette and label requirements.",
    familyHeading: "Sweaters, cardigans and cotton knit shirts.",
    briefPoints: ["Silhouette, measurements and fit intent", "Yarn blend, gauge and colourway", "Labels, trims and packing requirements"],
    hero: { src: "/media/hero/sweaters-folded.jpg", alt: "Folded fine-gauge sweaters in navy, stone and burgundy" },
    gallery: [
      { src: "/media/products/knitwear cover.jpg", alt: "Folded sweaters showing rib, cable and textured knit constructions" },
      { src: "/media/products/cotton-shirt.jpg", alt: "White knitted cotton shirt" },
      { src: "/media/products/cardigan-real.jpg", alt: "Green and brown cardigan reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_13 PM (4).png", alt: "Brown cropped knit sweater reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_11 PM (1).png", alt: "Brown sleeveless knit vest reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_11 PM (2).png", alt: "Cream contrast cardigan reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_12 PM (3).png", alt: "Brown cropped sweater reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_13 PM (5).png", alt: "Black and cream cropped sweater reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_13 PM (6).png", alt: "Neutral cropped sweater reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_14 PM (7).png", alt: "Black diamond knit vest reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_15 PM (8).png", alt: "Blue cardigan reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_15 PM (9).png", alt: "Navy half-zip sweater reference" },
      { src: "/media/sweaters/ChatGPT Image Aug 4, 2026, 06_26_16 PM (10).png", alt: "Brown polo sweater reference" },
    ],
    productSlugs: ["sweaters", "cardigans", "knitted-cotton-shirts"],
    categoryLabel: "Sweaters / cardigans / cotton knit shirts",
  },
  {
    slug: "military",
    number: "02",
    eyebrow: "Military / defence",
    title: "Military & defence knitwear",
    description: "Specification-led camouflage and solid-colour jerseys, command sweaters and field-ready knitwear for disciplined repeat programmes.",
    familyHeading: "Camouflage jerseys, command sweaters and field pullovers.",
    briefPoints: ["Solid or camouflage colour systems", "Reinforcement, trim and construction details", "Size sets and repeat specification"],
    hero: { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_41_06 PM (5).png", alt: "Olive camouflage military-style ribbed pullover with shoulder, pocket and reinforcement details" },
    gallery: [
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_11_28 PM (1).png", alt: "Camouflage crew-neck military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_27_11 PM (1).png", alt: "Olive military pullover reference" },
      { src: "/media/products/military-institutional-real.jpg", alt: "Olive institutional knitwear sweater" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_11_29 PM (3).png", alt: "Sand camouflage military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_11_30 PM (4).png", alt: "Black camouflage military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_11_31 PM (5).png", alt: "Green camouflage military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_11_32 PM (6).png", alt: "Sand and green camouflage military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_27_12 PM (2).png", alt: "Black military shirt-jumper reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_27_13 PM (4).png", alt: "Navy military shirt-jumper reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_27_13 PM (5).png", alt: "Khaki military shirt-jumper reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_41_01 PM (1).png", alt: "Black quarter-zip military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_41_03 PM (2).png", alt: "Olive quarter-zip military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_41_04 PM (4).png", alt: "Camouflage quarter-zip military sweater reference" },
      { src: "/media/Army/ChatGPT Image Aug 4, 2026, 04_41_06 PM (5).png", alt: "Black and olive military quarter-zip reference" },
    ],
    productSlugs: ["military-institutional-knitwear"],
    categoryLabel: "Military sweaters / institutional jerseys",
  },
  {
    slug: "uniforms",
    number: "03",
    eyebrow: "Schools / institutions",
    title: "Uniform programmes",
    description: "School, college and corporate knitwear built for consistent colour, sizing, branding and dependable repeat orders.",
    familyHeading: "School sweaters, vests and institutional knitwear.",
    briefPoints: ["School colours, crests and placement", "Size grading and replenishment planning", "Labels, packing and delivery schedule"],
    hero: { src: "/media/new assests/school.jpg", alt: "Navy school pullover with contrast trim and crest detail" },
    gallery: [
      { src: "/media/new assests/school.jpg", alt: "Navy school uniform pullover" },
      { src: "/media/products/uniform-knitwear.jpg", alt: "Navy V-neck uniform knitwear reference" },
      { src: "/media/new assests/WhatsApp Image 2026-08-01 at 2.51.48 PM.jpeg", alt: "Cream cable-knit polo sweater reference" },
      { src: "/media/new assests/school uniform.jpg", alt: "Navy school uniform sweater vest with contrast trim" },
      { src: "/media/new assests/WhatsApp Image 2026-08-01 at 2.51.49 PM.jpeg", alt: "White cable-knit polo sweater reference" },
    ],
    productSlugs: ["uniform-knitwear"],
    categoryLabel: "School sweaters / vests / corporate knitwear",
  },
  {
    slug: "hosiery-accessories",
    number: "04",
    eyebrow: "Hosiery / accessories",
    title: "Hosiery & accessories",
    description: "Socks, gloves, scarves and mufflers produced in coordinated colours and sizes for uniform, lifestyle and specification-led ranges.",
    familyHeading: "Socks, gloves, scarves and mufflers.",
    briefPoints: ["Composition, rib structure and sizing", "Colour sets, pack ratios and finishing", "Lengths, labels and packaging format"],
    hero: { src: "/media/products/division-hosiery.jpg", alt: "Coordinated knitted socks arranged on a wooden surface" },
    gallery: [
      { src: "/media/products/socks-real.jpg", alt: "Ribbed socks in coordinated neutral colours" },
      { src: "/media/products/gloves.jpg", alt: "Light knitted gloves with matching yarn" },
      { src: "/media/products/scarves-neutral.jpg", alt: "Folded neutral scarves showing rib and cable structures" },
      { src: "/media/hero/socks-flatlay.jpg", alt: "Colourful socks arranged for a hosiery range" },
      { src: "/media/products/scarf.jpg", alt: "Colourful knitted scarf reference" },
    ],
    productSlugs: ["socks", "gloves", "mufflers-scarves"],
    categoryLabel: "Socks / gloves / scarves & mufflers",
  },
];

export function getDivisionBySlug(slug?: string) {
  return productDivisions.find((division) => division.slug === slug);
}
