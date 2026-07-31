import type { MediaRef } from "@/content/products";

// Content used only on the homepage. Kept separate from products.ts and
// capabilities.ts (used by /products and /manufacturing) so homepage-specific
// wording can evolve without touching other pages.

export type DivisionSubcategory = {
  name: string;
  summary: string;
  href: string;
  media: MediaRef;
};

export type ProductDivision = {
  id: string;
  name: string;
  intro: string;
  subcategories: DivisionSubcategory[];
};

export const productDivisions: ProductDivision[] = [
  {
    id: "knitwear",
    name: "Knitwear",
    intro:
      "Sweaters, cardigans, pullovers and vests built for fashion, uniform, and institutional programmes.",
    subcategories: [
      {
        name: "Fashion & Casual Sweaters",
        summary:
          "Premium casual and contemporary sweaters: crew necks, V-necks, cardigans, and cable-knit styles.",
        href: "/products/sweaters",
        media: {
          kind: "photo",
          src: "/media/products/sweater.jpg",
          alt: "Stack of folded knitted sweaters in neutral tones showing rib and cable structure",
          caption: "Illustrative example, not an INTERLOCK production photograph.",
        },
      },
      {
        name: "Uniform Knitwear",
        summary:
          "School, corporate, and service-programme sweaters, cardigans, and pullovers built for repeat consistency.",
        href: "/products/uniform-knitwear",
        media: {
          kind: "photo",
          src: "/media/products/uniform-knitwear.jpg",
          alt: "Macro detail of navy cable-knit fabric texture",
          caption: "Illustrative knit texture, not an INTERLOCK production photograph.",
        },
      },
      {
        name: "Military & Institutional Knitwear",
        summary:
          "Specification-led sweaters, pullovers, and cardigans built to fixed technical and colour standards.",
        href: "/products/military-institutional-knitwear",
        media: {
          kind: "photo",
          src: "/media/products/military-institutional.jpg",
          alt: "Macro detail of grey ribbed wool knit texture",
          caption: "Illustrative knit texture, not an INTERLOCK production photograph.",
        },
      },
    ],
  },
  {
    id: "hosiery-accessories",
    name: "Hosiery & Accessories",
    intro:
      "Socks, scarves, gloves, and knitted headwear produced to the same colour and yarn discipline as the core range.",
    subcategories: [
      {
        name: "Socks",
        summary: "Knitted socks in institutional, uniform, and specification-led constructions.",
        href: "/products/socks",
        media: {
          kind: "photo",
          src: "/media/products/socks.jpg",
          alt: "Ribbed knitted socks worn with knitted trouser cuffs",
          caption: "Illustrative example, not an INTERLOCK production photograph.",
        },
      },
      {
        name: "Scarves & Mufflers",
        summary: "Knitted scarves and mufflers, ordered standalone or matched to an existing programme.",
        href: "/products/mufflers-scarves",
        media: {
          kind: "photo",
          src: "/media/products/scarf.jpg",
          alt: "Knitted scarf showing gradient colourway and ribbed structure",
          caption: "Illustrative example, not an INTERLOCK production photograph.",
        },
      },
      {
        name: "Gloves",
        summary: "Knitted gloves for institutional, uniform, and specification-led supply.",
        href: "/products/gloves",
        media: {
          kind: "photo",
          src: "/media/products/gloves.jpg",
          alt: "Pair of knitted gloves with a matching ball of yarn",
          caption: "Illustrative example, not an INTERLOCK production photograph.",
        },
      },
      {
        name: "Woollen Caps & Beanies",
        summary: "Knitted caps and beanies produced alongside a wider accessory or uniform programme.",
        href: "/products",
        media: { kind: "placeholder", label: "Woollen Caps & Beanies", tone: "parchment" },
      },
    ],
  },
  {
    id: "activewear",
    name: "Activewear",
    intro:
      "Knitted tracksuits and training wear, built with the same yarn and construction discipline as the rest of the range.",
    subcategories: [
      {
        name: "Tracksuits",
        summary: "Knitted tracksuit tops and bottoms in fleece-back and flat-knit constructions.",
        href: "/products",
        media: { kind: "placeholder", label: "Tracksuits", tone: "navy" },
      },
      {
        name: "Gym & Training Apparel",
        summary: "Training-weight knitted tops and bottoms for everyday gym and activewear programmes.",
        href: "/products",
        media: { kind: "placeholder", label: "Gym & Training Apparel", tone: "gold" },
      },
      {
        name: "Performance Tops & Bottoms",
        summary: "Lighter-weight performance knits suited to layering and active wear.",
        href: "/products",
        media: { kind: "placeholder", label: "Performance Tops & Bottoms", tone: "parchment" },
      },
    ],
  },
];

export const tickerTerms = [
  "Knitwear",
  "Fashion Sweaters",
  "Casual Sweaters",
  "Uniform Knitwear",
  "Institutional Knitwear",
  "Military Knitwear",
  "Hosiery",
  "Socks",
  "Scarves",
  "Mufflers",
  "Gloves",
  "Woollen Caps",
  "Beanies",
  "Activewear",
  "Tracksuits",
  "Gym Apparel",
  "Private Label",
  "Manufacturing Since 1982",
];

export type EnquiryStep = {
  index: number;
  title: string;
  description: string;
};

export const enquiryProcessSteps: EnquiryStep[] = [
  {
    index: 1,
    title: "Share Your Requirements",
    description:
      "Provide product references, quantities, materials, sizing, branding, and delivery requirements.",
  },
  {
    index: 2,
    title: "Product and Material Consultation",
    description:
      "Align on construction, yarn, colours, measurements, finishes, and manufacturing requirements.",
  },
  {
    index: 3,
    title: "Sampling and Approval",
    description: "Develop and refine the sample before moving into bulk production.",
  },
  {
    index: 4,
    title: "Production and Quality Control",
    description: "Manufacture the approved product while maintaining checks throughout production.",
  },
  {
    index: 5,
    title: "Packing and Dispatch",
    description: "Complete final inspection, packing, documentation, and shipment preparation.",
  },
];

export const heroSlides: {
  media: MediaRef;
  eyebrow: string;
}[] = [
  {
    eyebrow: "Raw Materials",
    media: {
      kind: "photo",
      src: "/media/hero/hero-slide-1-materials.jpg",
      alt: "Yarn cones mounted on a flat knitting machine on the production floor",
    },
  },
  {
    eyebrow: "Machinery",
    media: {
      kind: "photo",
      src: "/media/hero/hero-slide-2-machine.jpg",
      alt: "Flat knitting machine in operation",
    },
  },
  {
    eyebrow: "Craftsmanship",
    media: {
      kind: "photo",
      src: "/media/hero/hero-slide-3-craft.jpg",
      alt: "Macro detail of a fair-isle knitted panel showing colour-work construction",
    },
  },
  {
    eyebrow: "Finishing",
    media: {
      kind: "photo",
      src: "/media/hero/hero-slide-4-finished.jpg",
      alt: "Finished knitwear being pressed and inspected on the production floor",
    },
  },
];
