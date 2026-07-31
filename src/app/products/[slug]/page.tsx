import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import MediaBlock from "@/components/ui/MediaBlock";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import {
  getProductBySlug,
  getRelatedProducts,
  productCategories,
} from "@/content/products";

export function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Manufacturer`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <section className="border-b border-navy/15">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Product Category
            </p>
            <h1 className="mt-3 font-display text-4xl font-medium leading-[1.12] text-navy md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/80">
              {product.summary}
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" className="group">
                Discuss This Category
                <ArrowRight
                  size={18}
                  weight="light"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </ButtonLink>
            </div>
          </div>
          <MediaBlock media={product.media} className="aspect-[4/5] w-full" priority />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            {product.description.map((p) => (
              <p key={p} className="max-w-[60ch] text-base leading-relaxed text-charcoal/80">
                {p}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl text-navy">Applications</h2>
              <ul className="mt-4 space-y-2.5">
                {product.applications.map((a) => (
                  <li key={a} className="border-t border-navy/15 pt-2.5 text-sm text-charcoal/80">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl text-navy">Customization</h2>
              <ul className="mt-4 space-y-2.5">
                {product.customization.map((c) => (
                  <li key={c} className="border-t border-navy/15 pt-2.5 text-sm text-charcoal/80">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {product.considerations.length ? (
          <div className="mt-14 border-t border-gold/40 pt-8">
            <h2 className="font-display text-xl text-navy">Good to know</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.considerations.map((c) => (
                <li key={c} className="text-sm leading-relaxed text-charcoal/75">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {product.gallery.length > 0 && (
        <section className="bg-parchment py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <SectionHeading title="Construction detail" />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {product.gallery.map((g, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <MediaBlock media={g} className="aspect-[4/3] w-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <SectionHeading title="Related categories" />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {related.map((p) => (
            <ProductCategoryCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
