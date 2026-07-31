export type Industry = {
  slug: string;
  name: string;
  summary: string;
  priorities: string[];
  relevantCategories: string[];
};

export const industries: Industry[] = [
  {
    slug: "fashion-private-label",
    name: "Fashion & Private Label",
    summary:
      "Brands and private-label buyers developing sweaters, cardigans, and accessories from a design reference or technical pack.",
    priorities: [
      "Accurate interpretation of design and reference garments",
      "Yarn and material options",
      "Sampling before bulk commitment",
      "Custom labels, hang tags, and packaging",
      "Consistency across production runs",
    ],
    relevantCategories: ["sweaters", "cardigans", "mufflers-scarves", "private-label"],
  },
  {
    slug: "school-college-uniforms",
    name: "School & College Uniforms",
    summary:
      "Uniform distributors supplying knitted jumpers and cardigans to schools and colleges, where repeat consistency matters more than seasonal design change.",
    priorities: [
      "Colour consistency across reorders",
      "Reliable sizing across a full grading run",
      "Accurate crest and embroidery placement",
      "Dependable seasonal delivery",
      "Long-term supply relationships",
    ],
    relevantCategories: ["uniform-knitwear", "sweaters", "cardigans"],
  },
  {
    slug: "military-institutional",
    name: "Military & Institutional Supply",
    summary:
      "Contractors and institutional buyers requiring specification-led knitwear with strict repeatability and documentation.",
    priorities: [
      "Exact specification and colour matching",
      "Consistent construction across large volumes",
      "Confidentiality on specification and buyer identity",
      "Repeat production without deviation",
    ],
    relevantCategories: [
      "military-institutional-knitwear",
      "socks",
      "gloves",
      "mufflers-scarves",
    ],
  },
  {
    slug: "corporate-workwear",
    name: "Corporate & Workwear",
    summary:
      "Corporate uniform suppliers and workwear programmes needing consistent branded knitwear across departments and seasons.",
    priorities: [
      "Consistent branding and embroidery placement",
      "Durable construction for regular wear",
      "Predictable reorder timelines",
    ],
    relevantCategories: ["knitted-cotton-shirts", "sweaters", "cardigans", "mufflers-scarves"],
  },
  {
    slug: "wholesale-distribution",
    name: "Wholesalers & Distributors",
    summary:
      "Importers and distributors sourcing a broad, reliable knitwear range for onward sale.",
    priorities: [
      "Breadth of product range from one supplier",
      "Commercial reliability and clear communication",
      "Capacity for repeat and growing orders",
      "Export-ready packaging and documentation",
    ],
    relevantCategories: ["sweaters", "cardigans", "socks", "gloves", "private-label"],
  },
];
