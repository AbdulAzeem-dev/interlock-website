import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(site.domainConfirmed ? { allow: "/" } : { disallow: "/" }),
    },
    sitemap: site.domainConfirmed ? `${site.url}/sitemap.xml` : undefined,
  };
}
