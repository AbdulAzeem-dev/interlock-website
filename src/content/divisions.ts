import { uniformHero, uniformCardHero, uniformReferences } from "@/content/uniforms";
import { accessoryReferences } from "@/content/accessories";
export type ProductDivision = {
  slug: "fashion" | "military" | "uniforms" | "hosiery-accessories";
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  familyHeading: string;
  briefPoints: string[];
  hero: { src: string; alt: string };
  cardHero?: { src: string; alt: string };
  gallery: { src: string; alt: string; category?: string }[];
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
    hero: { src: "/media/sweaters/winter/b6.png", alt: "Navy half-zip sweater reference" },
    gallery: [
      { src: "/media/sweaters/editorial/knitwear-cover.jpg", alt: "Folded sweaters showing rib, cable and textured knit constructions" },
      { src: "/media/sweaters/summer/b5.png", alt: "Cream cable-knit short-sleeve polo reference" },
      { src: "/media/sweaters/cardigans/green-patterned-cardigan.jpeg", alt: "Green and brown cardigan reference" },
      { src: "/media/sweaters/winter/g6.png", alt: "Brown cropped knit sweater reference" },
      { src: "/media/sweaters/winter/g2.png", alt: "Brown sleeveless knit vest reference" },
      { src: "/media/sweaters/winter/g5.png", alt: "Cream contrast cardigan reference" },
      { src: "/media/sweaters/winter/g6.png", alt: "Brown cropped sweater reference" },
      { src: "/media/sweaters/winter/g8.png", alt: "Black and cream cropped sweater reference" },
      { src: "/media/sweaters/winter/g7.png", alt: "Neutral cropped sweater reference" },
      { src: "/media/sweaters/winter/g1.png", alt: "Black diamond knit vest reference" },
      { src: "/media/sweaters/winter/g9.png", alt: "Blue cardigan reference" },
      { src: "/media/sweaters/winter/b6.png", alt: "Navy half-zip sweater reference" },
      { src: "/media/sweaters/winter/b3.png", alt: "Brown polo sweater reference" },
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
    hero: { src: "/media/Army/Camouflage Knit Sweater with WINTEX Label.png", alt: "Camouflage knit sweater with reinforced shoulders and WINTEX neck label" },
    gallery: [
      { src: "/media/Army/Camo jersey with sewn WINTEX label-1.png", alt: "Camouflage knit jersey with WINTEX label" },
      { src: "/media/Army/Camouflage sweater with sewn WINTEX label.png", alt: "Camouflage sweater with WINTEX neck label" },
      { src: "/media/Army/Camo sweater with sewn WINTEX label-2.png", alt: "Camouflage sweater with sewn WINTEX label" },
      { src: "/media/Army/WINTEX label sewn into sweater neckline-1.png", alt: "WINTEX label sewn into military sweater neckline" },
      { src: "/media/Army/WINTEX label inside jersey collar-6.png", alt: "WINTEX label inside knitted jersey collar" },
      { src: "/media/Army/WINTEX label sewn into jersey collar-2.png", alt: "WINTEX label sewn into jersey collar" },
      { src: "/media/Army/WINTEX label sewn into jersey collar-3.png", alt: "WINTEX label inside a military knitwear collar" },
      { src: "/media/Army/WINTEX label sewn into jersey collar-4.png", alt: "WINTEX label sewn into camouflage jersey collar" },
      { src: "/media/Army/Camouflage Knit Sweater with WINTEX Label.png", alt: "Olive institutional knitwear sweater reference" },
    ],    productSlugs: ["military-institutional-knitwear"],
    categoryLabel: "Military sweaters / institutional jerseys",
  },
  {
    slug: "uniforms",
    number: "03",
    eyebrow: "Schools / institutions",
    title: "Uniform programmes",
    description: "School, college and corporate knitwear built for consistent colour, sizing, branding and dependable repeat orders.",
    familyHeading: "School pullovers, cardigans and sweater vests.",
    briefPoints: ["School colours, crests and placement", "Size grading and replenishment planning", "Labels, packing and delivery schedule"],
    hero: uniformHero,
    cardHero: uniformCardHero,
    gallery: uniformReferences,
    productSlugs: ["uniform-knitwear"],
    categoryLabel: "School sweaters / vests / corporate knitwear",
  },
  {
    slug: "hosiery-accessories",
    number: "04",
    eyebrow: "Hosiery / accessories",
    title: "Hosiery & accessories",
    description: "Socks, knitted caps, gloves, scarves and mufflers produced in coordinated colours and sizes for uniform, lifestyle and specification-led ranges.",
    familyHeading: "Socks, knitted caps, gloves and mufflers.",
    briefPoints: ["Composition, rib structure and sizing", "Colour sets, pack ratios and finishing", "Lengths, labels and packaging format"],
    hero: { src: "/media/socks/collection-flatlay.jpg", alt: "Coordinated knitted socks arranged on a wooden surface" },
    gallery: accessoryReferences,
    productSlugs: ["socks", "knitted-caps", "gloves", "mufflers-scarves"],
    categoryLabel: "Socks / knitted caps / gloves / mufflers",
  },
];

export function getDivisionBySlug(slug?: string) {
  return productDivisions.find((division) => division.slug === slug);
}
