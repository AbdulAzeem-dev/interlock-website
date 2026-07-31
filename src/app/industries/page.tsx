import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/ui/PageIntro";
import IndustryBlock from "@/components/ui/IndustryBlock";
import { industries } from "@/content/industries";
import { getProductBySlug } from "@/content/products";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "INTERLOCK manufactures knitwear for fashion and private-label brands, school and college uniform distributors, military and institutional contractors, corporate workwear programmes, and wholesalers.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        title="Five buyer types. Five different sets of priorities."
        body="A fashion brand and a uniform distributor rarely need the same thing from a manufacturer. INTERLOCK's process adapts to what actually matters to each."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div>
          {industries.map((industry) => (
            <div key={industry.slug}>
              <IndustryBlock industry={industry} />
              <div className="flex flex-wrap gap-3 pb-10">
                {industry.relevantCategories.map((slug) => {
                  const product = getProductBySlug(slug);
                  if (!product) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/products/${slug}`}
                      className="border border-navy/20 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-navy/70 transition-colors hover:border-navy hover:text-navy"
                    >
                      {product.shortName}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
