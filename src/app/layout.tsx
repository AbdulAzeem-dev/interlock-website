import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

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
    index: true,
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
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              alternateName: "Interlock Fine Knitwear Manufacturers",
              url: site.url,
              logo: `${site.url}/brand/interlock-logo-full.png`,
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
