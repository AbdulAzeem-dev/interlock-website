import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import InquiryCTA from "@/components/ui/InquiryCTA";
import ReferenceCarousel from "@/components/ui/ReferenceCarousel";
import { getDivisionBySlug, productDivisions } from "@/content/divisions";
import { getProductBySlug } from "@/content/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return productDivisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) return {};
  return {
    title: division.title,
    description: division.description,
    alternates: { canonical: `/products/divisions/${division.slug}` },
  };
}

export default async function ProductDivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) notFound();
  const products = division.productSlugs.map((productSlug) => getProductBySlug(productSlug)).filter(Boolean);
  const enquiryCategory = division.slug;

  return <>
    <div>
      <div className="shell breadcrumbs"><Link href="/products">Product divisions</Link><span>/</span><span>{division.title}</span></div>
      <section className="shell division-landing-hero">
        <div className="division-landing-copy">
          <p className="eyebrow">{division.eyebrow}</p>
          <h1>{division.title}</h1>
          <p className="division-landing-lede">{division.description}</p>
          <div className="division-landing-actions"><Link href={`/contact?category=${enquiryCategory}`} className="button button-primary">Discuss this division <ArrowUpRight size={18} /></Link><Link href="#reference-gallery" className="text-link">View references <ArrowUpRight size={17} /></Link></div>
          <p className="division-landing-note">Start with a product direction, approximate quantity and destination. We will confirm the practical route with you.</p>
        </div>
        <figure className={`division-landing-hero-figure ${division.slug === "military" ? "division-landing-hero-figure-military" : ""}`}><div><Image src={division.hero.src} alt={division.hero.alt} fill preload sizes="(min-width: 900px) 54vw, 100vw" className={division.slug === "military" ? "division-military-image" : "object-cover"} /></div><figcaption>Reference imagery. Final design and construction are agreed during development.</figcaption></figure>
      </section>

      <section className="division-intent-band"><div className="shell division-intent-grid"><div><p className="eyebrow">Bring us the brief</p><h2>What buyers usually need to specify.</h2></div><ul>{division.briefPoints.map((point) => <li key={point}><Check size={17} />{point}</li>)}</ul></div></section>

      <section className="division-reference-section division-reference-section-landing" id="reference-gallery"><div className="shell"><div className="section-top"><div><p className="eyebrow">Reference gallery</p><h2>See the range before you brief us.</h2><p>These references show the breadth of the division. They are visual directions for a conversation, not a fixed catalogue.</p></div></div></div><ReferenceCarousel images={division.gallery} label={`${division.title} reference images`} /></section>

      <section className="shell division-products-section"><div className="section-top"><div><p className="eyebrow">Product types in this division</p><h2>{division.familyHeading}</h2><p>Everything shown here can be developed around your yarn, measurements, colours, branding and order requirements. Use the enquiry button when you are ready to share a brief.</p></div></div><div className="division-product-list">{products.map((product) => product ? <article className="division-product-type" key={product.slug}>
        <div className="division-product-type-media">{product.media.kind === "photo" ? <Image src={product.media.src} alt={product.media.alt} fill sizes="(min-width: 900px) 34vw, 100vw" className="object-cover" /> : <div className={`product-placeholder product-placeholder-${product.media.tone}`}><span>{product.media.label}</span></div>}</div>
        <div className="division-product-type-copy"><p className="eyebrow">Product type</p><h3>{product.name}</h3><p className="division-product-summary">{product.summary}</p><p className="division-product-description">{product.description[0]}</p><div className="division-product-details"><div><p className="division-detail-label">Common applications</p><ul>{product.applications.slice(0, 3).map((application) => <li key={application}>{application}</li>)}</ul></div><div><p className="division-detail-label">Built around</p><div className="division-product-tags">{product.customization.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div></div></div></div>
      </article> : null)}</div></section>

      <section className="division-route-band"><div className="shell"><div className="section-top"><div><p className="eyebrow">A practical route to production</p><h2>From reference to repeat order.</h2></div></div><ol className="division-route"><li><span>01</span><div><h3>Share the direction</h3><p>Send a reference, drawing, tech pack or existing specification with an approximate quantity.</p></div></li><li><span>02</span><div><h3>Develop the sample</h3><p>Agree yarn, construction, fit, colour and the details that make the programme yours.</p></div></li><li><span>03</span><div><h3>Approve and produce</h3><p>Your approved sample becomes the production reference for repeat manufacturing and finishing.</p></div></li></ol></div></section>
    </div>
    <InquiryCTA href={`/contact?category=${enquiryCategory}`} title={`Start a ${division.title.toLowerCase()} enquiry.`} body="Tell us what you are building, how many pieces you expect and where the order needs to go." />
  </>;
}
