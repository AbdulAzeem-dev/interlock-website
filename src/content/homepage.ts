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
  /** Image shown on the top-level division card, before drilling in. */
  cardMedia: MediaRef;
  subcategories: DivisionSubcategory[];
};

export const productDivisions: ProductDivision[] = [
  {
    id: "knitwear",
    name: "Knitwear",
    intro:
      "Sweaters, cardigans, pullovers and vests built for fashion, uniform, and institutional programmes.",
    cardMedia: {
      kind: "photo",
      src: "/media/products/division-knitwear.jpg",
      alt: "Folded knitted sweaters in navy, tan, and burgundy",
      caption: "Illustrative example, not an INTERLOCK production photograph.",
    },
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
          src: "/media/products/uniform-knitwear-real.jpg",
          alt: "Navy knitted school-uniform vest with crest detail",
          caption: "Illustrative example, not an INTERLOCK production photograph.",
        },
      },
      {
        name: "Military & Institutional Knitwear",
        summary:
          "Specification-led sweaters, pullovers, and cardigans built to fixed technical and colour standards.",
        href: "/products/military-institutional-knitwear",
        media: {
          kind: "photo",
          src: "/media/products/military-institutional-real.jpg",
          alt: "Olive commando-style knitted sweater with button placket",
          caption: "Illustrative example, not an INTERLOCK production photograph.",
        },
      },
    ],
  },
  {
    id: "hosiery-accessories",
    name: "Hosiery & Accessories",
    intro:
      "Socks, scarves, gloves, and knitted headwear produced to the same colour and yarn discipline as the core range.",
    cardMedia: {
      kind: "photo",
      src: "/media/products/division-hosiery.jpg",
      alt: "Flat lay of colourful knitted socks",
      caption: "Illustrative example, not an INTERLOCK production photograph.",
    },
    subcategories: [
      {
        name: "Socks",
        summary: "Knitted socks in institutional, uniform, and specification-led constructions.",
        href: "/products/socks",
        media: {
          kind: "photo",
          src: "/media/products/socks-real.jpg",
          alt: "Flat lay of colourful ribbed knitted socks",
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
    cardMedia: { kind: "placeholder", label: "Activewear", tone: "navy" },
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

export type HeroComposite = {
  eyebrow: string;
  /** Dominant image, larger frame */
  large: MediaRef;
  /** One or two supporting images, smaller frames */
  small: MediaRef[];
};

// Each "slide" combines 2-3 real photographs into one composite background
// moment (large frame + smaller supporting frames), rather than a single
// full-bleed image. Photos are illustrative process/material/product
// photography - see ASSET_MANIFEST.md.
export const heroSlides: HeroComposite[] = [
  {
    eyebrow: "Raw Materials & Machinery",
    large: {
      kind: "photo",
      src: "/media/hero/machine-studio.jpg",
      alt: "Flat knitting machine with yarn cones mounted, production floor",
    },
    small: [
      {
        kind: "photo",
        src: "/media/hero/yarn-warm.jpg",
        alt: "Cones of warm-toned yarn ready for knitting",
      },
      {
        kind: "photo",
        src: "/media/hero/yarn-dark.jpg",
        alt: "Row of yarn cones in blue and green tones",
      },
    ],
  },
  {
    eyebrow: "Machinery & Craft",
    large: {
      kind: "photo",
      src: "/media/hero/machine-blue-yarn.jpg",
      alt: "Flat knitting machine in operation with blue yarn",
    },
    small: [
      {
        kind: "photo",
        src: "/media/hero/needles-macro.jpg",
        alt: "Macro detail of knitting machine needles",
      },
      {
        kind: "photo",
        src: "/media/hero/yarn-cream-burgundy.jpg",
        alt: "Cones of cream and burgundy yarn",
      },
    ],
  },
  {
    eyebrow: "Finished Knitwear",
    large: {
      kind: "photo",
      src: "/media/hero/factory-bw.jpg",
      alt: "Black and white photograph of a knitwear production floor",
    },
    small: [
      {
        kind: "photo",
        src: "/media/hero/socks-flatlay.jpg",
        alt: "Flat lay of colourful knitted socks",
      },
      {
        kind: "photo",
        src: "/media/hero/sweaters-folded.jpg",
        alt: "Folded knitted sweaters in navy, tan, and burgundy",
      },
    ],
  },
];
