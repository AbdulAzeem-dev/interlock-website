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
      "src": "/media/products/knitwear cover.jpg",
      "alt": "Folded sweaters in neutral colours showing rib and cable knit",
      "caption": "Illustrative knitwear reference."
    },
    "gallery": [
      {
        "kind": "photo",
        "src": "/media/products/division-knitwear.jpg",
        "alt": "Folded crew-neck sweaters in navy, beige and burgundy",
        "caption": "Illustrative colour and silhouette references."
      },
      {
        "kind": "photo",
        "src": "/media/texture/knit-rib-macro.jpg",
        "alt": "Close-up of a ribbed knit structure",
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
      "src": "/media/products/cardigan-real.jpg",
      "alt": "Green button-front cardigan with a brown knitted pattern",
      "caption": "Illustrative cardigan reference."
    },
    "gallery": [
      {
        "kind": "photo",
        "src": "/media/products/cardigan.jpg",
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
      "src": "/media/products/cotton-shirt.jpg",
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
      "Uniform knitwear is a longstanding part of INTERLOCK’s manufacturing history. Programmes are developed around an agreed colour reference, size run and branding position so the specification can be retained for repeat orders."
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
    "media": {
      "kind": "photo",
      "src": "/media/new assests/school uniform.jpg",
      "alt": "Navy V-neck school sweater vest with contrast trim",
      "caption": "Illustrative uniform reference. No affiliation with the depicted institution is implied."
    },
    "gallery": [
      {
        "kind": "photo",
        "src": "/media/products/uniform-knitwear.jpg",
        "alt": "Navy cable-knit fabric construction",
        "caption": "Illustrative navy knit detail."
      }
    ]
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
      "INTERLOCK has manufactured military-style knitwear through a Pakistani export partner. This experience supports specification-led institutional work, where repeatable construction, colour and sizing matter."
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
      "INTERLOCK is a manufacturing partner and does not claim a direct contract or affiliation with a government or military body."
    ],
    "media": {
      "kind": "photo",
      "src": "/media/products/military-institutional-real.jpg",
      "alt": "Olive ribbed institutional-style sweater with a button placket",
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
      "src": "/media/products/socks-real.jpg",
      "alt": "Flat lay of ribbed socks in coordinated muted colours",
      "caption": "Illustrative sock range."
    },
    "gallery": []
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
      "src": "/media/products/gloves.jpg",
      "alt": "Light knitted gloves with a matching yarn ball",
      "caption": "Illustrative knitted glove reference."
    },
    "gallery": []
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
      "src": "/media/products/scarves-neutral.jpg",
      "alt": "Folded scarves in cream and brown showing rib and cable knit structures",
      "caption": "Illustrative scarf reference."
    },
    "gallery": []
  }
];
export function getProductBySlug(slug: string) { return productCategories.find(p => p.slug === slug); }
export function getRelatedProducts(slug: string, count = 3) {
 const current = getProductBySlug(slug);
 return productCategories.filter(p => p.slug !== slug).sort((a,b) => Number(b.range === current?.range) - Number(a.range === current?.range)).slice(0,count);
}

