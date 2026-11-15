// Public contact details. Email and site URL can be overridden in .env.local.
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "business@wintexknits.com";
const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wintexknits.com";
const phone = (label: string, display: string) => {
  const digits = display.replace(/\D/g, "");
  return { label, display, telUrl: `tel:+${digits}`, whatsappUrl: `https://wa.me/${digits}` };
};
// Google Calendar appointment schedule: public booking link, no credentials. Set NEXT_PUBLIC_BOOKING_URL to "" to turn off the booking step.
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3k0uC1LuwrXSWdqDpR7GAi9xYFgRBinqxYfCtEJHtIJRlKPAwduY6OKFNctzMC_e_omFctipmG";
const phones = [phone("Pakistan", "+92 321 420 7647"), phone("Australia", "+61 482 623 842")];
export const site = {
  name: "Wintex",
  descriptor: "Fine Knitwear Manufacturers",
  founded: 1982,
  country: "Pakistan",
  url: productionUrl || "https://example.com",
  domainConfirmed: Boolean(productionUrl),
  description: "Knitwear manufacturing in Pakistan since 1982. Custom sweaters, cardigans and knitted accessories for fashion brands, uniform suppliers and private-label collections.",
  primaryCta: "Book a free call",
  secondaryCta: "Explore knitwear",
  enquiryCta: "Book a free call",
  // Factory film hosted on Mux (public playback ID, adaptive quality up to 1080p).
  factoryFilm: { playbackId: "xLX00hp57TfhBV4QbITqqND9luWrfX67aNMn0100H02pDww", title: "Inside the Wintex factory", posterTime: 22, duration: "1:33" },
  booking: { url: /^https:\/\//.test(bookingUrl) ? bookingUrl : "" },
  contact: {
    email, emailConfirmed: Boolean(email),
    phones,
    city: process.env.NEXT_PUBLIC_FACTORY_CITY || "Lahore",
    address: process.env.NEXT_PUBLIC_FACTORY_ADDRESS || "Iqbal Town, Lahore, Punjab, Pakistan",
    plusCode: "G77W+HQJ",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=G77W%2BHQJ%20Lahore",
    placeholders: { email: "[Your business email]", address: "[Your factory address], Pakistan" },
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

