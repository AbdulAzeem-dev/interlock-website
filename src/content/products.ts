export type MediaRef =
  | { kind: "photo"; src: string; alt: string; caption?: string }
  | { kind: "placeholder"; label: string; tone: "navy" | "gold" | "parchment" };

export type ProductCategory = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string[];
  applications: string[];
  customization: string[];
  considerations: string[];
  media: MediaRef;
  gallery: MediaRef[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "sweaters",
    name: "Sweaters",
    shortName: "Sweaters",
    summary:
      "Crew neck, V-neck, and full-zip sweaters in fine and mid-gauge knits, developed to a reference garment or technical specification.",
    description: [
      "Sweater production is where INTERLOCK's decades of gauge and shaping experience are most visible. Bodies, sleeves, and collars are knitted to the measurements and silhouette a buyer specifies, then linked and finished by hand.",
      "Work ranges from simple crew necks for institutional programmes to more constructed silhouettes for fashion and private-label buyers, including cable, rib, and jacquard structures.",
    ],
    applications: [
      "Fashion and private-label collections",
      "School and college uniform ranges",
      "Corporate and institutional issue",
    ],
    customization: [
      "Yarn and fibre selection",
      "Gauge and knit structure",
      "Colourway and stripe or panel placement",
      "Neckline, cuff, and hem construction",
      "Woven labels, embroidery, and printed branding",
    ],
    considerations: [
      "Share a reference garment, sketch, or technical pack to begin.",
      "Sizing is developed against your measurement chart, not a generic block.",
    ],
    media: { kind: "placeholder", label: "Sweaters", tone: "navy" },
    gallery: [
      { kind: "placeholder", label: "Rib cuff detail", tone: "parchment" },
      { kind: "placeholder", label: "Crew neck construction", tone: "gold" },
    ],
  },
  {
    slug: "cardigans",
    name: "Cardigans",
    shortName: "Cardigans",
    summary:
      "Button-front and open cardigans across fine-gauge fashion styling and heavier institutional wear.",
    description: [
      "Cardigan construction adds placket, button, and closure detail to the same shaping discipline used across the sweater range. Placket weight, button placement, and pocket construction are agreed against your specification before bulk production begins.",
    ],
    applications: [
      "Fashion and private-label ranges",
      "School and college uniform cardigans",
      "Corporate uniform and workwear",
    ],
    customization: [
      "Button type, spacing, and placket construction",
      "Pocket styles",
      "Yarn blend and weight",
      "Colour and trim detailing",
    ],
    considerations: [
      "Button and trim sourcing can follow your specification or ours, confirmed at the sampling stage.",
    ],
    media: { kind: "placeholder", label: "Cardigans", tone: "gold" },
    gallery: [
      { kind: "placeholder", label: "Placket and button detail", tone: "navy" },
    ],
  },
  {
    slug: "uniform-knitwear",
    name: "Uniform Knitwear",
    shortName: "Uniform Knitwear",
    summary:
      "School and college jumpers, cardigans, and knitted accessories, produced for repeatable colour and sizing across seasonal reorders.",
    description: [
      "This is INTERLOCK's longest-standing area of production. Established and premium schools across Pakistan rely on the same colour and sizing outcome, order after order, which is the standard we bring to distributor and institutional partners abroad.",
      "Uniform programmes are managed against a fixed specification: an agreed colour reference, a full size run, and a consistent embroidery or badge position, so repeat orders match earlier deliveries.",
    ],
    applications: [
      "School and college uniform distributors",
      "Institutional and corporate uniform suppliers",
    ],
    customization: [
      "School or institution colourways",
      "Badge, crest, and embroidery placement",
      "Full size-run grading",
      "V-neck, crew neck, and cardigan formats",
    ],
    considerations: [
      "Colour consistency is managed against a retained reference standard for every reorder.",
      "Seasonal delivery planning is agreed at the start of a programme, not order by order.",
    ],
    media: { kind: "placeholder", label: "Uniform Knitwear", tone: "parchment" },
    gallery: [
      { kind: "placeholder", label: "Crest embroidery placement", tone: "gold" },
    ],
  },
  {
    slug: "military-institutional-knitwear",
    name: "Military & Institutional Knitwear",
    shortName: "Military & Institutional",
    summary:
      "Specification-led jerseys, sweaters, and knitted accessories developed to fixed technical and colour standards for institutional and defence-adjacent supply chains.",
    description: [
      "INTERLOCK has manufactured specification-led military-style knitwear, including jerseys, socks, and gloves, through a Pakistani export partner. Production followed fixed technical specifications rather than fashion styling: precise colour matching, consistent construction, and documentation to support the partner's own compliance requirements.",
      "This experience carries directly into institutional and government-adjacent supply work, where the priority is exact repeatability rather than seasonal design change.",
    ],
    applications: [
      "Institutional and defence-adjacent contractors",
      "Government procurement suppliers (via appointed partners)",
      "Corporate and security-sector uniform programmes",
    ],
    customization: [
      "Fixed colour and yarn specification matching",
      "Reinforced construction for durability",
      "Consistent documentation for repeat production runs",
    ],
    considerations: [
      "INTERLOCK manufactures to specification as a production partner; it does not represent itself as a direct supplier to any government or military body.",
      "Confidentiality on specification and buyer identity is standard practice for this category.",
    ],
    media: { kind: "placeholder", label: "Military & Institutional Knitwear", tone: "navy" },
    gallery: [
      { kind: "placeholder", label: "Specification-matched construction", tone: "parchment" },
    ],
  },
  {
    slug: "knitted-cotton-shirts",
    name: "Knitted Cotton Shirts",
    shortName: "Cotton Shirts",
    summary:
      "Knitted cotton summer shirts and polos, built for warm-climate wear and consistent bulk repeatability.",
    description: [
      "Lighter-weight cotton knits sit alongside the wool and acrylic sweater range, suited to warm-climate institutional wear and summer collections. Collar, placket, and hem construction are agreed at sampling stage.",
    ],
    applications: [
      "Summer uniform programmes",
      "Fashion and private-label warm-weather ranges",
      "Corporate polo and workwear programmes",
    ],
    customization: [
      "Cotton yarn blend and weight",
      "Collar and placket construction",
      "Colour and trim detailing",
      "Embroidered branding",
    ],
    considerations: [
      "Suited to buyers who need a lighter-weight complement to a heavier winter knitwear range.",
    ],
    media: { kind: "placeholder", label: "Knitted Cotton Shirts", tone: "gold" },
    gallery: [
      { kind: "placeholder", label: "Collar construction", tone: "navy" },
    ],
  },
  {
    slug: "socks",
    name: "Socks",
    shortName: "Socks",
    summary:
      "Knitted socks in institutional, uniform, and specification-led constructions, including military-style production experience.",
    description: [
      "Sock production draws on the same specification-matching discipline used across INTERLOCK's institutional and military-style work: consistent yarn, colour, and construction across large repeat volumes.",
    ],
    applications: [
      "School and institutional uniform programmes",
      "Military-style and specification-led supply",
      "Corporate and workwear programmes",
    ],
    customization: [
      "Yarn blend and cushioning construction",
      "Colour and stripe detailing",
      "Sizing range",
    ],
    considerations: [
      "Bulk repeatability is the priority for this category; sampling confirms construction before full production.",
    ],
    media: { kind: "placeholder", label: "Socks", tone: "parchment" },
    gallery: [],
  },
  {
    slug: "gloves",
    name: "Gloves",
    shortName: "Gloves",
    summary:
      "Knitted gloves for institutional, uniform, and specification-led supply, including military-style production experience.",
    description: [
      "Knitted glove production follows the same fixed-specification approach as INTERLOCK's other institutional accessory work, prioritising consistent sizing and construction across volume orders.",
    ],
    applications: [
      "Institutional and uniform supply",
      "Military-style and specification-led supply",
      "Corporate and workwear programmes",
    ],
    customization: [
      "Yarn blend and grip construction",
      "Colour and cuff detailing",
      "Sizing range",
    ],
    considerations: [
      "Suited to buyers who need gloves alongside a wider knitwear or uniform programme.",
    ],
    media: { kind: "placeholder", label: "Gloves", tone: "gold" },
    gallery: [],
  },
  {
    slug: "mufflers-scarves",
    name: "Mufflers & Scarves",
    shortName: "Mufflers & Scarves",
    summary:
      "Knitted scarves, mufflers, and caps, produced as standalone accessory orders or alongside a wider sweater and uniform programme.",
    description: [
      "Accessory knitwear is produced to the same colour and yarn discipline as INTERLOCK's core range, making it straightforward to match to an existing sweater or uniform programme, or to order independently.",
    ],
    applications: [
      "Fashion and private-label accessory ranges",
      "School and institutional uniform accessories",
      "Corporate gifting and workwear programmes",
    ],
    customization: [
      "Yarn blend and weight",
      "Colourway, stripe, and fringe detailing",
      "Woven labels and branding",
    ],
    considerations: [
      "Often ordered to match an existing sweater or uniform colour reference.",
    ],
    media: {
      kind: "photo",
      src: "/media/products/scarf.jpg",
      alt: "Knitted scarf showing gradient colourway and ribbed structure",
      caption: "Illustrative example, not an INTERLOCK production photograph.",
    },
    gallery: [
      {
        kind: "photo",
        src: "/media/products/scarf.jpg",
        alt: "Ribbed knit scarf detail",
        caption: "Illustrative example, not an INTERLOCK production photograph.",
      },
    ],
  },
  {
    slug: "private-label",
    name: "Custom & Private-Label Knitwear",
    shortName: "Private Label",
    summary:
      "Product developed from your brief, reference garment, or technical pack, produced under your own label and packaging.",
    description: [
      "Private-label work spans every category above. It begins with what you already have: a technical pack, a reference garment, a photograph, or a size chart, and is developed into a produced, packed, and labelled product under your brand.",
    ],
    applications: [
      "Fashion and lifestyle brands",
      "Distributors and wholesalers building an own-brand range",
      "Retail groups sourcing a manufacturing partner",
    ],
    customization: [
      "Full private-label branding, woven labels, and hang tags",
      "Custom packaging and folding specification",
      "Product development from a reference garment or tech pack",
    ],
    considerations: [
      "See the Private Label page for the full collaboration process.",
    ],
    media: { kind: "placeholder", label: "Private Label", tone: "navy" },
    gallery: [],
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3) {
  const others = productCategories.filter((p) => p.slug !== slug);
  return others.slice(0, count);
}
