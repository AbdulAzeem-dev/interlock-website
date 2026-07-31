import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import Reveal from "@/components/ui/Reveal";
import { productCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "Knitwear Product Range",
  description:
    "Sweaters, cardigans, uniform knitwear, military and institutional knitwear, knitted cotton shirts, socks, gloves, scarves, and private-label knitwear manufactured by INTERLOCK.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        title="A wide knitwear range, one production discipline."
        body="Every category below is produced through the same process: requirement review, sampling against your reference, and colour and sizing held to a fixed standard through bulk production."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 0.08}>
              <ProductCategoryCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
