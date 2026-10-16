import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import InquiryCTA from "@/components/ui/InquiryCTA";
import BuyerFAQ from "@/components/ui/BuyerFAQ";
import ProductDivisionCard from "@/components/ui/ProductDivisionCard";
import { productDivisions } from "@/content/divisions";
import styles from "./home-hero.module.css";
import sections from "./home-sections.module.css";
import Logo from "@/components/ui/Logo";
export const metadata: Metadata = {
  title: "Private Label Knitwear Manufacturer in Pakistan Since 1982",
  description: "Bring your knitwear collection to life with Wintex. Sweaters, cardigans and accessories, developed to your brief. Manufacturing in Pakistan since 1982.",
  alternates: { canonical: "/" },
};
const steps = [
  ["Design & development", "Start with a sketch, reference garment or tech pack. We review construction, measurements and trims around your intended use and target cost.", "A clear garment brief"],
  ["Yarn selection & sourcing", "Discuss composition, colour, weight and feel. Yarn availability and any specific sourcing requirements are reviewed before sampling.", "An agreed yarn direction"],
  ["Sampling & approval", "Review the fit, stitch, hand-feel and finish. We work through agreed revisions so your approved sample becomes the production reference.", "Your approved sample"],
  ["Computerized knitting", "Cixing and Shima flat-knitting machines turn the agreed construction into knitted panels. Machine suitability is reviewed for your yarn and design.", "Knitting to specification"],
  ["Linking & finishing", "Panels are joined and garments finished, with attention to seams, shape, trims and label placement against the approved reference.", "A finished, branded garment"],
  ["Quality checks & dispatch", "Measurements, appearance and packing are checked against the order requirements. Delivery arrangements and documentation are agreed for your destination.", "Prepared for the agreed handover"],
];
const buyers = [
  ["Fashion & emerging labels", "Sweaters, cardigans and accessories developed around your own fit, colours and brand identity — including collections for online stores.", "Collection development · Private label"],
  ["Retailers & wholesalers", "Coordinated knitwear ranges with agreed sizing, labelling and packing for retail shelves and wholesale programmes.", "Own-brand ranges · Repeat orders"],
  ["Uniform & institutional suppliers", "Specification-led knitwear for school, workwear and institutional programmes, with attention to colour, size ranges and branding.", "Uniform programmes · Consistent specifications"],
  // ["Buying houses & export partners", "A manufacturing conversation built around your buyer’s brief, approval requirements and destination-specific packing and documentation.", "Buyer specifications · Export coordination"],
];
export default function Home() {
  return <div className="home-page">
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.overline}>Knitwear manufacturers · Pakistan · Since 1982</p>
          <h1 id="home-heading">Your label.<br/><span>Our knitwear.</span></h1>
          <p className={styles.description}>Custom sweaters, cardigans and accessories for your brand. From your first sample to production, made to your brief.</p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primary}>Discuss your project <ArrowUpRight size={19}/></Link>
            <Link href="/products" className={styles.secondary}>Explore our knitwear <ArrowRight size={18}/></Link>
          </div>
        </div>
        <figure className={styles.visual}>
          <div className={styles.image}>
            <Image src="/media/sweaters/editorial/folded-knitwear.png" alt="Navy, stone and burgundy knitwear with ribbed necklines and label details, shown as a product reference" fill preload sizes="(max-width: 767px) 100vw, 48vw" className="object-cover"/>
          </div>
          <figcaption>Product reference. Yarn, fit and finish developed to your specification.</figcaption>
        </figure>
      </div>
    </section>
    <section className="proof-strip" aria-label="Manufacturing at a glance"><div className="shell proof-grid"><div><strong>1982</strong><span>Established in Pakistan</span></div><div><strong>50<span> pieces</span></strong><span>Starting runs, subject to specification</span></div><div><strong>10,000<span> pieces</span></strong><span>Monthly capacity, subject to product mix</span></div><div className="proof-detail"><Check size={25}/><span>Sampling through to<br/>private-label production</span></div></div></section>
    <section className="home-products section-space" id="product-range"><div className="shell">
      <div className="section-top"><div><p className="eyebrow">Explore our range</p><h2>Knitwear for your next collection.</h2><p>From fashion collections to uniform orders. Choose a category to see styles, construction options and details to include in your brief.</p></div><Link href="/products" className="text-link">View the complete range <ArrowUpRight size={18}/></Link></div>
      <div className="home-divisions">{productDivisions.map((division) => <ProductDivisionCard key={division.slug} division={division}/>)}</div>
    </div></section>
    <section className="material-section" id="made-to-your-brief"><div className="shell material-grid"><figure><div className="material-image"><Image src="/media/sweaters/editorial/knitwear-cover.jpg" alt="Folded knitwear showing stitch texture, ribbed edges and garment finishing" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover"/></div><figcaption>Reference detail / stitch and finishing are agreed in development</figcaption></figure><div className="material-copy"><p className="eyebrow">Made to your brief</p><h2>Good manufacturing is in the details.</h2><p>Yarn, fit, colour, finish. We work through the choices that make a garment yours, then use the approved sample as the reference for production.</p><div className="detail-pairs"><div><h3>Built around your fit</h3><p>Stitch, weight, silhouette and measurements.</p></div><div><h3>Finished for your label</h3><p>Colourways, woven labels, trims and packing.</p></div></div><Link href="/private-label" className="text-link">Explore private label <ArrowUpRight size={18}/></Link></div></div></section>
    <section className={`shell section-space ${sections.workflow}`} id="how-we-work" aria-labelledby="process-heading"><div className="section-top"><div><p className="eyebrow">How we work</p><h2 id="process-heading">From your first sketch<br/>to the finished shipment.</h2><p>Six stages, with the important decisions agreed along the way. Your approved sample and specification guide production.</p></div><Link href="/manufacturing" className="text-link">Explore our capabilities <ArrowUpRight size={18}/></Link></div><ol className={`process-grid ${sections.steps}`}>{steps.map(([title, body, outcome], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p><span className={sections.outcome}><Check size={15} aria-hidden="true"/>{outcome}</span></li>)}</ol></section>
    <section className={sections.buyers} id="who-we-serve" aria-labelledby="buyers-heading"><div className={`shell ${sections.buyerLayout}`}><div className={sections.buyerIntro}><p className="eyebrow">Who we serve</p><h2 id="buyers-heading">Different buyers.<br/>A shared standard.</h2><p>A new collection and a uniform programme need different things. We start with what matters to your business.</p><div className={sections.links}><Link href="/private-label" className="text-link">Private label manufacturing <ArrowUpRight size={18}/></Link><Link href="/industries" className="text-link">Who we manufacture for <ArrowUpRight size={18}/></Link></div></div><ol className={sections.buyerList}>{buyers.map(([title, body, detail], index) => <li key={title}><span className={sections.buyerNumber}>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p><span className={sections.buyerDetail}>{detail}</span></div></li>)}</ol></div></section>
    <section className="heritage-band"><div className="shell heritage-grid"><figure className="supplier-art"><div><Logo variant="full" href={false}/></div><figcaption>Our name. Our manufacturing heritage.</figcaption></figure><div><p className="eyebrow">Manufacturing in Pakistan since 1982</p><h2>Know the people behind your product.</h2><p>Our background is in domestic uniform knitwear and specification-led production through a Pakistani export partner. Today, we’re building direct relationships with international brands and buyers.</p><p>Ask us for the company details and current production information you need for your supplier review.</p><Link href="/about" className="text-link">Meet Wintex <ArrowUpRight size={18}/></Link></div></div></section>
    <section className="shell section-space faq-section"><div><h2>Before we get started.</h2><p>A few practical answers for your first order.</p></div><BuyerFAQ/></section>
    <InquiryCTA/>
  </div>;
}

