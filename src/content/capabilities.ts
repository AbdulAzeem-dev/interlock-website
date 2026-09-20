export type Capability = {
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    title: "Requirement review",
    description:
      "A technical pack, reference garment, image, or size chart is reviewed for construction, materials, sizing, and branding before anything is costed.",
  },
  {
    title: "Yarn and material selection",
    description:
      "Yarn blend, weight, and colour are matched against your specification or selected from available options during sampling.",
  },
  {
    title: "Sampling and approval",
    description:
      "A sample is developed against the agreed reference and reviewed before bulk production is scheduled.",
  },
  {
    title: "Colour and sizing management",
    description:
      "Colour is matched and retained against an approved standard; sizing is graded against your measurement chart for consistent repeat orders.",
  },
  {
    title: "Production and construction checks",
    description:
      "Knitting, linking, and finishing are checked at each stage against the approved sample and specification.",
  },
  {
    title: "Branding and labelling",
    description:
      "Woven labels, embroidery, printed branding, and hang tags are applied to your specification, including private-label programmes.",
  },
  {
    title: "Packing and dispatch preparation",
    description:
      "Finished goods are folded, packed, and prepared to your agreed packaging and carton specification ahead of handover.",
  },
];

export const collaborationSteps = [
  "Share your product brief, reference garment, or technical specification",
  "Wintex reviews feasibility and responds with next steps",
  "A sample is developed and reviewed against your reference",
  "Commercial details are confirmed",
  "Bulk production begins",
  "Quality checks are carried out through production",
  "Finished goods are packed to your specification",
  "Delivery or export handover is arranged",
];
