// Replace placeholders before outreach. These public values can also be set in .env.local.
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "";
const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
export const site = {
  name: "Wintex",
  descriptor: "Fine Knitwear Manufacturers",
  founded: 1982,
  country: "Pakistan",
  url: productionUrl || "https://example.com",
  domainConfirmed: Boolean(productionUrl),
  description: "Knitwear manufacturing in Pakistan since 1982. Custom sweaters, cardigans and knitted accessories for fashion brands, uniform suppliers and private-label collections.",
  primaryCta: "Request a quote",
  secondaryCta: "Explore knitwear",
  enquiryCta: "Request a quote",
  contact: {
    email, emailConfirmed: Boolean(email),
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
    whatsapp,
    whatsappUrl: whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, "")}` : "",
    city: process.env.NEXT_PUBLIC_FACTORY_CITY || "",
    address: process.env.NEXT_PUBLIC_FACTORY_ADDRESS || "",
    placeholders: { email: "[Your business email]", whatsapp: "[Your WhatsApp number]", address: "[Your factory address], Pakistan" },
  },
  nav: [
    { label: "Products", href: "/products" },
    { label: "Private Label", href: "/private-label" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "About", href: "/about" },
  ],
  footerLegal: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Use", href: "/terms" }],
  photoCredits: "Product and material images are illustrative references, not verified Wintex production photographs. See photography credits for sources.",
} as const;

