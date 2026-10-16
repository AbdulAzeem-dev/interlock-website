import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteMotion from "@/components/ui/SiteMotion";
import { site } from "@/content/site";
import "./globals.css";
import "./refinements.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: [{ url: "/brand/wintex-favicon-32.png", sizes: "32x32", type: "image/png" }, { url: "/brand/wintex-favicon-192.png", sizes: "192x192", type: "image/png" }], apple: "/brand/wintex-apple-icon.png" },
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Fine Knitwear Manufacturers Since 1982`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "knitwear manufacturer Pakistan",
    "custom knitwear manufacturer",
    "private label knitwear manufacturer",
    "sweater manufacturer Pakistan",
    "cardigan manufacturer",
    "school uniform sweater manufacturer",
    "institutional knitwear manufacturer",
    "knitted cotton shirt manufacturer",
    "socks and gloves manufacturer",
  ],
  openGraph: {
    title: `${site.name} - Fine Knitwear Manufacturers Since 1982`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - Fine Knitwear Manufacturers Since 1982`,
    description: site.description,
  },
  robots: {
    index: site.domainConfirmed,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('wintex-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}` }} /></head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SiteMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              alternateName: "Wintex Fine Knitwear Manufacturers",
              url: site.url,
              logo: `${site.url}/brand/wintex-logo-transparent.png`,
              foundingDate: "1982",
              description: site.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
