import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import InquiryCTA from "@/components/ui/InquiryCTA";
import BuyerFAQ from "@/components/ui/BuyerFAQ";
import ProductDivisionCard from "@/components/ui/ProductDivisionCard";
import { productDivisions } from "@/content/divisions";
export const metadata: Metadata = {
  title: "Private Label Knitwear Manufacturer in Pakistan Since 1982",
  description: "Bring your knitwear collection to life with INTERLOCK. Sweaters, cardigans and accessories, developed to your brief. Manufacturing in Pakistan since 1982.",
  alternates: { canonical: "/" },
};
const steps = [
  ["Share your idea", "Send a reference, sketch or tech pack, with an approximate quantity and delivery date."],
  ["Develop the sample", "Agree yarn, construction, fit and cost. Review your sample before committing to bulk."],
  ["Approve & produce", "Your approved sample guides knitting, linking, finishing and production checks."],
  ["Finish for your brand", "Labels, packaging and dispatch requirements are agreed for your destination."],
];
export default function Home() {
  return <>
    <section className="hero-panel">
      <div className="shell hero-panel-grid">
        <div className="hero-panel-copy">
          <p className="eyebrow">INTERLOCK / FINE KNITWEAR / PAKISTAN</p>
          <h1>Made for the <span>way your brand moves.</span></h1>
          <p className="hero-description">A manufacturing partner for fashion labels, uniform programmes and private-label collections. Start with an idea, a reference or a technical pack.</p>
          <div className="hero-actions"><Link href="/contact" className="button button-primary">Start a conversation <ArrowUpRight size={19}/></Link><Link href="/products" className="text-link">See the range <ArrowRight size={18}/></Link></div>
          <div className="hero-index"><strong>01</strong><span>From yarn and stitch<br/>to your finished label.</span></div>
        </div>
        <figure className="hero-panel-figure"><div className="hero-panel-image"><Image src="/media/products/knitwear cover.jpg" alt="Folded sweaters showing rib, cable and textured knit constructions" fill preload loading="eager" sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover"/></div><figcaption>Reference imagery / product details are confirmed at sampling</figcaption></figure>
        <div className="hero-panel-footer"><span>EST. 1982</span><span>PRIVATE LABEL / UNIFORM / ACCESSORIES</span><span>EXPORT ENQUIRIES OPEN</span></div>
      </div>
    </section>
    <section className="proof-strip" aria-label="Manufacturing at a glance"><div className="shell proof-grid"><div><strong>1982</strong><span>Established in Pakistan</span></div><div><strong>50<span> pieces</span></strong><span>Starting runs, subject to specification</span></div><div><strong>10,000<span> pieces</span></strong><span>Monthly capacity, subject to product mix</span></div><div className="proof-detail"><Check size={25}/><span>Sampling through to<br/>private-label production</span></div></div></section>
    <section className="shell section-space" id="product-range">
      <div className="section-top"><div><p className="eyebrow">Choose your programme</p><h2>Four ways to work with us.</h2><p>Start with the kind of order you are building. We will take you from the right reference to the right product family.</p></div><Link href="/products" className="text-link">View all divisions <ArrowUpRight size={18}/></Link></div>
      <div className="home-divisions">{productDivisions.map((division) => <ProductDivisionCard key={division.slug} division={division}/>)}</div>
    </section>
    <section className="material-section"><div className="shell material-grid"><figure><div className="material-image"><Image src="/media/products/cardigan.jpg" alt="Close view of a cardigan showing its knit, button and pocket finishing" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover"/></div><figcaption>Reference detail / stitch and finishing are agreed in development</figcaption></figure><div className="material-copy"><p className="eyebrow">Made to your brief</p><h2>Good manufacturing is in the details.</h2><p>Yarn, fit, colour, finish. We work through the choices that make a garment yours, then use the approved sample as the reference for production.</p><div className="detail-pairs"><div><h3>Built around your fit</h3><p>Stitch, weight, silhouette and measurements.</p></div><div><h3>Finished for your label</h3><p>Colourways, woven labels, trims and packing.</p></div></div><Link href="/private-label" className="text-link">Explore private label <ArrowUpRight size={18}/></Link></div></div></section>
    <section className="shell section-space"><div className="section-top"><div><p className="eyebrow">How an order takes shape</p><h2>Four decisions before bulk.</h2><p>We keep the path visible, so your team always knows what is being agreed and what comes next.</p></div><Link href="/manufacturing" className="text-link">See our process <ArrowUpRight size={18}/></Link></div><ol className="process-grid">{steps.map(([title, body], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
    <section className="heritage-band"><div className="shell heritage-grid"><div className="heritage-year">Since<br/><strong>1982.</strong></div><div><p className="eyebrow">A long view of making</p><h2>A factory relationship built over time.</h2><p>Our roots are in Pakistan’s knitwear industry, with decades of uniform and specification-led production. Today, we’re building direct relationships with fashion brands and buyers abroad.</p><Link href="/about" className="text-link">Meet INTERLOCK <ArrowUpRight size={18}/></Link></div></div></section>
    <section className="shell section-space faq-section"><div><h2>Before we get started.</h2><p>A few practical answers for your first order.</p></div><BuyerFAQ/></section>
    <InquiryCTA/>
  </>;
}

