import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import InquiryCTA from "@/components/ui/InquiryCTA";
import { productCategories } from "@/content/products";
import ProductDivisionCard from "@/components/ui/ProductDivisionCard";
import { getDivisionBySlug, productDivisions } from "@/content/divisions";
export const metadata: Metadata = { title: "Knitwear Product Range", description: "Explore custom sweaters, cardigans, cotton shirts, uniform knitwear and accessories. Find your category and discuss a sample with INTERLOCK.", alternates: { canonical: "/products" } };
const ranges = [{id:"all",label:"All product families"}, ...productDivisions.map((division) => ({ id: division.slug, label: division.title }))];
export default async function ProductsPage({searchParams}: {searchParams: Promise<{division?: string; range?: string}>}) {
  const {division, range} = await searchParams;
  const activeDivision = getDivisionBySlug(division);
  const active = activeDivision?.slug ?? (range && ranges.some((item) => item.id === range) ? range : "all");
  const products = activeDivision
    ? productCategories.filter((product) => activeDivision.productSlugs.includes(product.slug))
    : productCategories.filter((product) => active === "all" || product.range === active);
  return <>
    <section className="page-heading"><div className="shell"><p className="eyebrow">What we make</p><h1>Choose the programme you are building.</h1><p>Four clear manufacturing divisions, each with its own requirements, references and product families. Start with the buyer need, then refine the garment.</p></div></section>
    <section className="shell divisions-section"><div className="section-top"><div><p className="eyebrow">Our manufacturing divisions</p><h2>Built around the order, not a generic catalogue.</h2><p>Fashion buyers, uniform distributors and defence procurement teams arrive with different briefs. These are the four ways we organise the work.</p></div></div><div className="division-grid">{productDivisions.map((division) => <ProductDivisionCard key={division.slug} division={division}/>)}</div></section>
    {activeDivision && <section className="shell division-reference-section"><div className="section-top"><div><p className="eyebrow">{activeDivision.eyebrow} / visual references</p><h2>See the range before you brief us.</h2><p>These references show the breadth of the division. Send the style, construction or specification you want to develop and we will confirm the production route.</p></div></div><div className="division-reference-wall">{activeDivision.gallery.map((image) => <figure key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" /></div><figcaption>{image.alt}</figcaption></figure>)}</div></section>}
    <section className="shell catalog-section" id="product-families"><div className="section-top"><div><p className="eyebrow">Product families</p><h2>{activeDivision ? activeDivision.title : "Garments inside the divisions."}</h2><p>Use these starting points to discuss a sample. The final construction, colour, quantity and finish are agreed around your specification.</p></div><p className="catalog-count">{products.length} product {products.length === 1 ? "family" : "families"}</p></div><nav aria-label="Filter products by division" className="range-filters">{ranges.map((item) => <Link key={item.id} href={item.id === "all" ? "/products#product-families" : `/products?division=${item.id}#product-families`} scroll={false} aria-current={active === item.id ? "page" : undefined}>{item.label}</Link>)}</nav>
      <div className="catalog-grid">{products.map((product, index)=><ProductCategoryCard key={product.slug} product={product} eager={index < 3}/>)}</div>
      <p className="catalog-note">Images combine company-supplied references and illustrative style photography. They show the product direction; approved samples set the production standard.</p>
    </section>
    <InquiryCTA title="Have something specific in mind?" body="Share your reference or tech pack. We’ll review the construction, quantity and next steps with you."/>
  </>;
}

