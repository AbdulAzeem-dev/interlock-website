import { uniformHero, uniformReferences } from "@/content/uniforms";
export type MediaRef =
  | { kind: "photo"; src: string; alt: string; caption?: string }
  | { kind: "placeholder"; label: string; tone: "navy" | "gold" | "parchment" };
export type ProductCategory = {
 slug: string; name: string; shortName: string; range: string; summary: string; styles: string[];
 description: string[]; applications: string[]; customization: string[]; considerations: string[];
 media: MediaRef; gallery: MediaRef[];
};
export const productCategories: ProductCategory[] = [
  {
    "slug": "sweaters",
    "name": "Sweaters",
    "shortName": "Sweaters",
    "range": "fashion",
    "summary": "Crew necks, V-necks and zip styles. Fine and mid-weight knits, made to your fit and finish.",
    "styles": [
      "Crew neck",
      "V-neck",
      "Half zip",
      "Cable & rib"
    ],
    "description": [
      "Develop a sweater around your own silhouette, yarn and measurement chart. Shape, stitch structure and finishing are reviewed during sampling before the production specification is agreed."
    ],
    "applications": [
      "Fashion and lifestyle brands",
      "Private-label seasonal collections",
      "Uniform and distributor ranges"
    ],
    "customization": [
      "Yarn blend, weight and knit structure",
      "Neckline, cuffs, hem and silhouette",
      "Colourways, stripes and pattern placement",
      "Woven labels and branded trims"
    ],
    "considerations": [
      "Send a tech pack, sketch or reference garment.",
      "Include quantities by style and colour, plus your target delivery date."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/sweaters/winter/b10.png",
      "alt": "Navy textured sweater reference",
      "caption": "Illustrative sweater reference."
    },
    "gallery": [
      {
        "kind": "photo",
        "src": "/media/sweaters/editorial/folded-knitwear.png",
        "alt": "Folded crew-neck sweaters in navy, beige and burgundy",
        "caption": "Illustrative colour and silhouette references."
      },
      {
        "kind": "photo",
        "src": "/media/materials/details/cardigan-buttons.jpg",
        "alt": "Close-up of grey knitwear with button and pocket construction",
        "caption": "Illustrative stitch detail."
      }
    ]
  },
  {
    "slug": "cardigans",
    "name": "Cardigans",
    "shortName": "Cardigans",
    "range": "fashion",
    "summary": "Button-front and open styles, with your choice of knit, silhouette, pockets and trims.",
    "styles": [
      "Button front",
      "Open front",
      "V-neck",
      "Patterned knits"
    ],
    "description": [
      "Cardigans add placket, pocket and closure detail to the core knitwear construction. Agree the shape, button spacing, trim and finishing at sampling so each part works together."
    ],
    "applications": [
      "Fashion and private-label collections",
      "School and college ranges",
      "Corporate uniform suppliers"
    ],
    "customization": [
      "Button choice and placket construction",
      "Pocket placement and shape",
      "Yarn, colour and knit structure",
      "Fit, sleeve length and branding"
    ],
    "considerations": [
      "Share your desired fit and closure details.",
      "Button and trim availability is confirmed during development."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/sweaters/cardigans/green-patterned-cardigan.jpeg",
      "alt": "Green button-front cardigan with a brown knitted pattern",
      "caption": "Illustrative cardigan reference."
    },
    "gallery": [
      {
        "kind": "photo",
        "src": "/media/materials/details/cardigan-buttons.jpg",
        "alt": "Grey ribbed cardigan with button and pocket detail",
        "caption": "Illustrative placket and pocket construction."
      }
    ]
  },
  {
    "slug": "knitted-cotton-shirts",
    "name": "Knitted Cotton Shirts",
    "shortName": "Cotton Shirts",
    "range": "fashion",
    "summary": "Lighter cotton knit shirts and polos for summer collections, corporate wear and uniform ranges.",
    "styles": [
      "Summer knits",
      "Polo styles",
      "Crew neck"
    ],
    "description": [
      "Develop a lighter-weight complement to your sweater range. Yarn, fabric weight, neckline or collar, placket and hem are agreed with you before sampling."
    ],
    "applications": [
      "Warm-weather fashion collections",
      "Summer uniform programmes",
      "Corporate and distributor ranges"
    ],
    "customization": [
      "Cotton yarn blend and fabric weight",
      "Neckline, collar and placket",
      "Colours and trim details",
      "Embroidery and private labels"
    ],
    "considerations": [
      "Confirm the required construction with a reference image or garment.",
      "Include any wash, wear or shrinkage requirements in your brief."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/sweaters/summer/b5.png",
      "alt": "Plain white cotton knit shirt on a light background",
      "caption": "Illustrative cotton shirt reference."
    },
    "gallery": []
  },
  {
    "slug": "uniform-knitwear",
    "name": "Uniform Knitwear",
    "shortName": "Uniform Knitwear",
    "range": "uniforms",
    "summary": "School, college and corporate sweaters, cardigans and vests, developed for consistent repeat orders.",
    "styles": [
      "V-neck jumpers",
      "Sweater vests",
      "Cardigans",
      "School & corporate"
    ],
    "description": [
      "Uniform knitwear is a longstanding part of Wintex’s manufacturing history. Programmes are developed around an agreed colour reference, size run and branding position so the specification can be retained for repeat orders."
    ],
    "applications": [
      "School and college uniform distributors",
      "Corporate and institutional suppliers",
      "Wholesalers managing seasonal programmes"
    ],
    "customization": [
      "Institution colours and stripe placement",
      "Badge, crest or embroidery position",
      "Full size-run grading",
      "V-neck, crew neck, vest and cardigan formats"
    ],
    "considerations": [
      "Share your colour reference and size breakdown.",
      "Let us know your seasonal delivery schedule and reorder plans."
    ],
    media: { kind: "photo", ...uniformHero, caption: "Uniform style reference. Colours, trims and branding are agreed at sampling." },
    gallery: uniformReferences.filter(image => image.src !== uniformHero.src).map(image => ({ kind: "photo" as const, ...image, caption: "Uniform garment and construction reference." }))
  },
  {
    "slug": "military-institutional-knitwear",
    "name": "Military & Institutional Knitwear",
    "shortName": "Institutional Knitwear",
    "range": "uniforms",
    "summary": "Specification-led jerseys and sweaters with agreed colour, construction and reinforcement details.",
    "styles": [
      "Jerseys",
      "Reinforced styles",
      "Fixed specifications"
    ],
    "description": [
      "Wintex has manufactured military-style knitwear through a Pakistani export partner. This experience supports specification-led institutional work, where repeatable construction, colour and sizing matter."
    ],
    "applications": [
      "Institutional knitwear contractors",
      "Security-sector uniform programmes",
      "Specification-led procurement partners"
    ],
    "customization": [
      "Fixed yarn and colour specifications",
      "Reinforcement and trim details",
      "Size grading and construction tolerances",
      "Programme-specific labels and packing"
    ],
    "considerations": [
      "Share the complete technical specification and required documentation.",
      "Wintex is a manufacturing partner and does not claim a direct contract or affiliation with a government or military body."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/Army/Camouflage sweater with sewn WINTEX label.png",
      "alt": "Camouflage military knit sweater with reinforced shoulders and WINTEX neck label",
      "caption": "Illustrative institutional knitwear reference."
    },
    "gallery": []
  },
  {
    "slug": "socks",
    "name": "Socks",
    "shortName": "Socks",
    "range": "accessories",
    "summary": "Knitted socks for uniform, everyday and specification-led ranges, in coordinated colours and sizes.",
    "styles": [
      "Ribbed",
      "Uniform",
      "Everyday"
    ],
    "description": [
      "Sock production is developed around an agreed yarn, construction and size range. Colour and stripe details can be coordinated with a wider knitwear programme."
    ],
    "applications": [
      "Uniform distributors",
      "Private-label accessory ranges",
      "Institutional and workwear suppliers"
    ],
    "customization": [
      "Yarn blend and construction",
      "Colourways, stripe and cuff details",
      "Size range",
      "Labels and packing"
    ],
    "considerations": [
      "Tell us the intended use and required fit.",
      "Sample approval confirms the construction before bulk production."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/socks/collection-flatlay.jpg",
      "alt": "Flat lay of ribbed socks in coordinated muted colours",
      "caption": "Illustrative sock range."
    },
    "gallery": []
  },
{
  "slug": "knitted-caps",
  "name": "Knitted Caps",
  "shortName": "Knitted Caps",
  "range": "accessories",
  "summary": "Ribbed and cable-knit beanies with custom colours, turn-up cuffs and label details, developed for seasonal accessory collections.",
  "styles": [
    "Ribbed beanies",
    "Cable-knit caps",
    "Turn-up cuffs",
    "Pom-pom styles"
  ],
  "description": [
    "Develop knitted caps as a standalone range or coordinate them with gloves and mufflers. Yarn, stitch, crown shaping, fit and cuff depth are reviewed during sampling."
  ],
  "applications": [
    "Fashion and lifestyle brands",
    "Cold-weather accessory collections",
    "Uniform and institutional suppliers"
  ],
  "customization": [
    "Yarn blend, weight and knit structure",
    "Crown shape, fit and cuff depth",
    "Colourways and optional pom-pom details",
    "Woven labels, embroidery and packaging"
  ],
  "considerations": [
    "Share your reference style, intended size range and label requirements.",
    "Coordinated yarns and colours can be discussed alongside gloves and mufflers."
  ],
  "media": {
    "kind": "photo",
    "src": "/media/caps/Silver Grey Cable-Knit Beanie with WINTEX Label-1.png",
    "alt": "Silver Grey Cable-Knit Beanie with WINTEX Label reference",
    "caption": "Knitted-cap reference. Final specification is agreed during sampling."
  },
  "gallery": [
    {
      "kind": "photo",
      "src": "/media/caps/Charcoal cable-knit beanie with WINTEX label-2.png",
      "alt": "Charcoal cable-knit beanie with WINTEX label reference",
      "caption": "Cap style and colour reference."
    },
    {
      "kind": "photo",
      "src": "/media/caps/Ivory ribbed beanie with WINTEX label-5.png",
      "alt": "Ivory ribbed beanie with WINTEX label reference",
      "caption": "Cap style and colour reference."
    },
    {
      "kind": "photo",
      "src": "/media/caps/Pale blue ribbed beanie with WINTEX label-4.png",
      "alt": "Pale blue ribbed beanie with WINTEX label reference",
      "caption": "Cap style and colour reference."
    },
    {
      "kind": "photo",
      "src": "/media/caps/Taupe cable-knit beanie with WINTEX label-3.png",
      "alt": "Taupe cable-knit beanie with WINTEX label reference",
      "caption": "Cap style and colour reference."
    }
  ]
},
  {
    "slug": "gloves",
    "name": "Gloves",
    "shortName": "Gloves",
    "range": "accessories",
    "summary": "Knitted gloves for uniform and cold-weather programmes, with coordinated yarns, colours and sizing.",
    "styles": [
      "Knitted gloves",
      "Ribbed cuffs",
      "Programme matching"
    ],
    "description": [
      "Develop gloves as an accessory order or part of a wider knitwear programme. Sizing, yarn and cuff construction are confirmed at sampling."
    ],
    "applications": [
      "Uniform and institutional suppliers",
      "Cold-weather accessory ranges",
      "Corporate and workwear programmes"
    ],
    "customization": [
      "Yarn blend and colour",
      "Cuff construction",
      "Size range",
      "Branding and packing"
    ],
    "considerations": [
      "Specify the intended use and any required product testing.",
      "Special performance requirements must be reviewed before an order is accepted."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/gloves/Navy gloves with WINTEX cuff embroidery-5.png",
      "alt": "Navy gloves with WINTEX cuff embroidery reference",
      "caption": "Garment reference. Final specification is agreed during sampling."
},
    "gallery": [
      {
            "kind": "photo",
            "src": "/media/gloves/Black glove with WINTEX cuff embroidery-1.png",
            "alt": "Black glove with WINTEX cuff embroidery reference",
            "caption": "Style and colour reference."
      },
      {
            "kind": "photo",
            "src": "/media/gloves/Camel gloves with WINTEX cuff embroidery-4.png",
            "alt": "Camel gloves with WINTEX cuff embroidery reference",
            "caption": "Style and colour reference."
      },
      {
            "kind": "photo",
            "src": "/media/gloves/Light grey gloves with WINTEX cuff embroidery-3.png",
            "alt": "Light grey gloves with WINTEX cuff embroidery reference",
            "caption": "Style and colour reference."
      },
      {
            "kind": "photo",
            "src": "/media/gloves/Taupe gloves with WINTEX cuff embroidery-6.png",
            "alt": "Taupe gloves with WINTEX cuff embroidery reference",
            "caption": "Style and colour reference."
      },
      {
            "kind": "photo",
            "src": "/media/gloves/WINTEX embroidery on charcoal glove cuff-2.png",
            "alt": "WINTEX embroidery on charcoal glove cuff reference",
            "caption": "Style and colour reference."
      }
]
  },
  {
    "slug": "mufflers-scarves",
    "name": "Scarves & Mufflers",
    "shortName": "Scarves",
    "range": "accessories",
    "summary": "Knitted scarves and mufflers with custom colourways, stitch structures, lengths and finishing.",
    "styles": [
      "Ribbed",
      "Plain knit",
      "Striped",
      "Fringed"
    ],
    "description": [
      "Build a standalone scarf range or coordinate accessories with sweaters and uniforms. Dimensions, knit structure and finishing are developed against your reference."
    ],
    "applications": [
      "Fashion and lifestyle brands",
      "Seasonal accessory collections",
      "Uniform and corporate programmes"
    ],
    "customization": [
      "Yarn blend, weight and stitch",
      "Length, width and fringe detailing",
      "Colours and stripe placement",
      "Woven labels and packaging"
    ],
    "considerations": [
      "Share your dimensions or a reference accessory.",
      "Coordinated colours can be discussed alongside a wider knitwear order."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/scarves/Ivory Coiled Knit Scarf, WINTEX Label-4.png",
      "alt": "Ivory Coiled Knit Scarf, WINTEX Label reference",
      "caption": "Garment reference. Final specification is agreed during sampling."
},
    "gallery": [
      {
            "kind": "photo",
            "src": "/media/scarves/Coiled blue-and-white scarf with tiny WINTEX label-2.png",
            "alt": "Coiled blue-and-white scarf with tiny WINTEX label reference",
            "caption": "Style and colour reference."
      },
      {
            "kind": "photo",
            "src": "/media/scarves/folded-dark-grey-b2ba7c04c5.png",
            "alt": "Folded dark grey scarf with Wintex label reference",
            "caption": "Style and colour reference."
      },
      {
            "kind": "photo",
            "src": "/media/scarves/Folded grey scarf with tiny WINTEX label-3.png",
            "alt": "Folded grey scarf with tiny WINTEX label reference",
            "caption": "Style and colour reference."
      }
]
  }
];
export function getProductBySlug(slug: string) { return productCategories.find(p => p.slug === slug); }
export function getRelatedProducts(slug: string, count = 3) {
 const current = getProductBySlug(slug);
 return productCategories.filter(p => p.slug !== slug).sort((a,b) => Number(b.range === current?.range) - Number(a.range === current?.range)).slice(0,count);
}

