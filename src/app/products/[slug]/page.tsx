import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowUpRight, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { getProductBySlug, getRelatedProducts, productCategories } from "@/content/products";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import InquiryCTA from "@/components/ui/InquiryCTA";
export function generateStaticParams() { return [...productCategories.map(p=>({slug:p.slug})),{slug:"private-label"}]; }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params; const product=getProductBySlug(slug);
  return product ? {title:`${product.name} Manufacturer`,description:product.summary,alternates:{canonical:`/products/${slug}`}} : {};
}
export default async function ProductPage({params}: {params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if(slug==="private-label") permanentRedirect("/private-label");
  const product=getProductBySlug(slug);
  if(!product) notFound();
  const href=`/contact?category=${product.slug}`;
  return <>
    <div className="shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/products">Products</Link><CaretRight size={11}/><Link href={`/products?range=${product.range}`}>{product.range==="fashion"?"Fashion knitwear":product.range==="uniforms"?"Uniforms & institutional":"Accessories"}</Link><CaretRight size={11}/><span aria-current="page">{product.shortName}</span></nav>
    <section className="product-detail">
      <figure><div className="product-detail-image">{product.media.kind==="photo"&&<Image src={product.media.src} alt={product.media.alt} fill preload loading="eager" sizes="(min-width: 768px) 46vw, 100vw" className="object-cover"/>}</div><figcaption>{product.media.kind==="photo"&&product.media.caption} Product details are agreed at sampling.</figcaption></figure>
      <div><p className="eyebrow">Custom manufacturing</p><h1>{product.name}</h1><p className="product-description">{product.summary}</p><div className="product-options" aria-label="Available starting points">{product.styles.map(style=><span key={style}>{style}</span>)}</div>
        <dl className="product-meta"><div><dt>Order quantity</dt><dd>From 50 pieces*<br/>Confirmed for your specification</dd></div><div><dt>Development</dt><dd>Your reference or tech pack<br/>Sample approval before bulk</dd></div></dl>
        <Link href={href} className="button button-primary">Request a {product.range==="accessories"?"product":"knitwear"} quote <ArrowUpRight size={18}/></Link><p className="product-next">Your category is included in the inquiry.</p><p className="product-next">*Minimums depend on yarn, colourways and construction.</p>
      </div>
    </section></div>
    <section className="product-specs"><div className="shell"><div className="spec-grid"><div><h2>Developed around<br/>your requirements.</h2>{product.description.map(p=><p key={p}>{p}</p>)}</div><div><h3>What you can customize</h3><ul>{product.customization.map(c=><li key={c}>{c}</li>)}</ul></div><div><h3>Built for</h3><ul>{product.applications.map(a=><li key={a}>{a}</li>)}</ul></div></div>
    {product.gallery.length>0&&<div className="product-gallery">{product.gallery.map((media,index)=>media.kind==="photo"&&<figure key={index}><div className="gallery-image"><Image src={media.src} alt={media.alt} fill sizes="(min-width:768px) 46vw,100vw" className="object-cover"/></div><figcaption>{media.caption}</figcaption></figure>)}</div>}
    <div className="uniform-callout"><p>{product.considerations[0]}</p><Link href={href} className="text-link">Discuss this category <ArrowUpRight size={18}/></Link></div>{product.considerations.slice(1).map(line=><p key={line} className="catalog-note">{line}</p>)}</div></section>
    <section className="shell related-section"><div className="section-top"><h2>Explore the rest of the range.</h2><Link href="/products" className="text-link">All products <ArrowUpRight size={18}/></Link></div><div className="featured-products">{getRelatedProducts(slug).map(p=><ProductCategoryCard key={p.slug} product={p}/>)}</div></section>
    <InquiryCTA href={href} title="Start with a sample." body="Tell us your design, approximate quantity and delivery destination. We’ll discuss the next practical step."/>
  </>;
}

