import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import InquiryCTA from "@/components/ui/InquiryCTA";
import BuyerFAQ from "@/components/ui/BuyerFAQ";
import styles from "./manufacturing.module.css";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Cixing & Shima Knitting",
  description: "Explore Wintex’s computerized flat knitting with Cixing and Shima equipment, sample development, finishing and production checks.",
  alternates: { canonical: "/manufacturing" },
};
const stages = [
  { title: "Define the garment", body: "We review your tech pack or reference, intended use, quantities and delivery requirements. Yarn, construction and feasibility are discussed before development.", output: "An agreed development brief", details: "Reference · Yarn direction · Quantity" },
  { title: "Develop & approve", body: "Colour, stitch, measurements and finish are reviewed through sampling. Revisions are agreed before the sample becomes the reference for production.", output: "Your approved sample & specification", details: "Fit · Colour · Construction" },
  { title: "Knit & finish", body: "Computerized flat knitting follows the agreed construction. Linking and finishing bring the garment together, with checks against the production reference.", output: "Garments checked against the sample", details: "Knitting · Linking · Finishing" },
  { title: "Check & prepare", body: "Measurements, appearance, labels and packing are reviewed against the order requirements. Dispatch arrangements and export documentation are agreed for your destination.", output: "An order prepared for the agreed handover", details: "Final checks · Packing · Dispatch" },
];
export default function ManufacturingPage() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className={`shell ${styles.heroGrid}`}>
      <div><p className={styles.eyebrow}>Wintex / Manufacturing capabilities</p><h1>Your design.<br />Our knitting<br /><span>know-how.</span></h1><p className={styles.lead}>Computerized flat knitting with Cixing and Shima machines. Thoughtful development, an approved sample, and attention to the finished garment.</p><div className={styles.actions}><Link className={styles.primary} href="/contact">Discuss your project <ArrowUpRight size={19} /></Link><a className={styles.textLink} href="#equipment">Explore our capabilities <ArrowDown size={17} /></a></div></div>
      <figure className={styles.heroVisual}><div className={styles.heroImage}><Image src="/media/image.avif" alt="Shima Seiki flat-knitting machine with yarn cones, equipment reference" fill preload sizes="(min-width: 900px) 52vw, 100vw" /></div><figcaption><span>THE TECHNOLOGY BEHIND THE KNIT</span><strong>Cixing + Shima</strong><small>Computerized flat-knitting equipment</small></figcaption></figure>
    </div></section>
    <nav className={styles.sectionNav} aria-label="Manufacturing sections"><div className="shell"><a href="#equipment"><span>01</span> Equipment</a><a href="#development"><span>02</span> Development</a><a href="#production"><span>03</span> Production</a><a href="#quality"><span>04</span> Quality checks</a></div></nav>
    <section id="equipment" className={`shell ${styles.section}`}>
      <div className={styles.heading}><div><p className={styles.eyebrow}>01 / Our knitting platform</p><h2>Two machine brands.<br />One clear specification.</h2></div><p>We use both Cixing and Shima computerized flat-knitting machines. The equipment and construction for your order are reviewed around the yarn, stitch and finish your garment needs.</p></div>
      <div className={styles.machineGrid}>{[
        { name: "Cixing", image: "/media/cixing.jpg", style: styles.cixing, body: "Part of our knitting setup for developing and producing garments to an agreed construction." },
        { name: "Shima Seiki", image: "/media/image.avif", style: styles.shima, body: "Alongside Cixing equipment, supporting our approach to sample development and repeat production." },
      ].map(machine => <article className={styles.machine} key={machine.name}><div className={`${styles.machineImage} ${machine.style}`}><Image src={machine.image} alt={`${machine.name} computerized flat-knitting machine, equipment reference`} fill sizes="(min-width: 768px) 46vw, 100vw" /></div><div className={styles.machineCopy}><span>COMPUTERIZED FLAT KNITTING</span><h3>{machine.name}</h3><p>{machine.body}</p></div></article>)}</div>
      <div className={styles.equipmentNote}><p>Have a specific gauge, yarn or stitch requirement? Include it in your brief so we can confirm suitability.</p><small>Equipment reference images; these are not photographs of the Wintex factory floor. Machine models and gauges are confirmed for each project.</small></div>
    </section>
    <section id="development" className={styles.development}><div className={`shell ${styles.developmentGrid}`}><div><p className={styles.eyebrow}>02 / Before production begins</p><h2>The most important<br />garment is the<br /><em>first one.</em></h2><p>A good sample turns a design into a shared reference. We work through the decisions that affect fit, feel and finish before moving to production.</p><Link href="/contact" className={styles.textLink}>Talk through your sample <ArrowUpRight size={18} /></Link></div><div className={styles.approval}><p className={styles.eyebrow}>The sample approval checklist</p>{[
      ["Yarn & colour", "Composition, handle and the agreed colour reference."], ["Stitch & construction", "The knit structure, garment details and finish."], ["Measurements & fit", "Your size chart, grading and agreed tolerances."], ["Labels & presentation", "Branding placement, trims and packing requirements."],
    ].map(([title, body]) => <div className={styles.checkRow} key={title}><Check size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></div>)}<div className={styles.approvalFoot}>Agreed sample + agreed specification = production reference</div></div></div></section>
    <section id="production" className={`shell ${styles.section}`}><div className={styles.heading}><div><p className={styles.eyebrow}>03 / From brief to handover</p><h2>A clear path through<br />your production.</h2></div><p>Each stage has a purpose and a tangible outcome. Timelines, minimums and delivery arrangements are confirmed around your specific order.</p></div><ol className={styles.process}>{stages.map((stage, i) => <li key={stage.title}><span className={styles.number}>0{i + 1}</span><div><p className={styles.stageDetails}>{stage.details}</p><h3>{stage.title}</h3><p>{stage.body}</p></div><div className={styles.outcome}><span>STAGE OUTCOME</span><strong>{stage.output}</strong></div></li>)}</ol></section>
    <section id="quality" className={styles.quality}><div className="shell"><div className={styles.heading}><div><p className={styles.eyebrow}>04 / Attention to the details</p><h2>Quality starts with<br />knowing what to check.</h2></div><p>The approved sample and specification guide our checks through production and before packing.</p></div><div className={styles.qualityGrid}>{[
      ["01", "Consistency", "Yarn and colour are checked against the agreed reference across the programme."], ["02", "Fit & dimensions", "Measurements are reviewed against your size chart and agreed tolerances."], ["03", "Construction", "Attention to stitches, seams, linking and the appearance of the finished garment."], ["04", "Final presentation", "Label placement, trims, folding and packing follow your order requirements."],
    ].map(([n, title, body]) => <div key={title}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>)}</div><p className={styles.testingNote}>Need specific testing, inspection or compliance documentation? Share the requirement at the brief stage so availability and arrangements can be confirmed before you place an order.</p></div></section>
    <section className={`shell ${styles.section} ${styles.brief}`}><div><p className={styles.eyebrow}>Make your first conversation count</p><h2>Bring a tech pack.<br />Or simply a starting idea.</h2><p>You don’t need every detail resolved to get in touch. A reference image and an outline of your requirements help us start the right conversation.</p><Link href="/contact" className={styles.primary}>Start your production inquiry <ArrowUpRight size={19} /></Link></div><div className={styles.briefList}><h3>Useful details to share</h3><ul><li>Garment reference or tech pack</li><li>Target quantity and size range</li><li>Preferred yarn, colours and branding</li><li>Delivery destination and target date</li><li>Any testing or documentation requirements</li></ul></div></section>
    <section className="shell section-space faq-section"><div><h2>Planning your first order.</h2><p>Practical questions to resolve before production.</p></div><BuyerFAQ /></section>
    <InquiryCTA title="Let’s work through your next knit." body="Share your design, quantity and delivery requirements. We’ll review the right production approach for your garment." />
  </div>;
}
