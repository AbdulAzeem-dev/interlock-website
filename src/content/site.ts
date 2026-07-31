export const site = {
  name: "INTERLOCK",
  descriptor: "Fine Knitwear Manufacturers",
  founded: 1982,
  country: "Pakistan",
  url: "https://www.interlockknits.com",
  description:
    "Established in Pakistan in 1982, INTERLOCK manufactures sweaters, cardigans, jerseys, knitted cotton shirts and accessories for brands, distributors and institutional buyers worldwide.",
  primaryCta: "Discuss Your Requirements",
  secondaryCta: "Explore Our Capabilities",
  enquiryCta: "Start an Enquiry",
  // Contact details are placeholders until the owner supplies real, monitored
  // channels - see REQUIRED_BUSINESS_INPUTS.md item 1-3. Left structurally
  // present but not fabricated with a fake number.
  contact: {
    email: "enquiries@interlockknits.com",
    emailConfirmed: false,
    phone: null as string | null,
    whatsapp: null as string | null,
    city: null as string | null,
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Industries", href: "/industries" },
    { label: "Private Label", href: "/private-label" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerLegal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
  photoCredits:
    "Illustrative process and material photography: Elkagye, Fallaner, Steve Snodgrass, Tinker & Rove, mripp, Breibeest - via Wikimedia Commons and Flickr, Public Domain / CC BY / CC BY-SA. Not photographs of INTERLOCK's own facility.",
} as const;
