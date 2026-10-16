import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CaretRight } from "@phosphor-icons/react/dist/ssr";
import ReferenceCarousel from "@/components/ui/ReferenceCarousel";
import InquiryCTA from "@/components/ui/InquiryCTA";

type Style = readonly [file: string, description: string];

const summerWomen: Style[] = [
  ["g1.png", "black and cream striped knit polo"],
  ["g2.png", "pale pink short-sleeve knit polo"],
  ["g3.png", "black and white argyle short-sleeve cardigan"],
  ["g4.png", "cream and navy striped knit polo"],
  ["g5.png", "grey cable-knit short-sleeve cardigan"],
  ["g6.png", "powder blue short-sleeve knit top"],
  ["g7.png", "cream knit top with black trim"],
  ["g8.png", "navy and cream striped short-sleeve cardigan"],
  ["g9.png", "blue and cream rugby-stripe knit polo"],
];
const summerMen: Style[] = [
  ["b1.png", "navy cable-knit polo"],
  ["b2.png", "cream and navy colour-block knit polo"],
  ["b3.png", "cream and green button-front knit shirt"],
  ["b4.png", "navy textured knit polo with contrast collar"],
  ["b5.png", "cream cable-knit polo"],
  ["b6.png", "black textured knit polo"],
  ["b7.png", "rust textured zip-neck knit polo"],
  ["b8.png", "forest green textured knit polo"],
  ["b9.png", "white and navy contrast knit polo"],
];
const winterWomen: Style[] = [
  ["g.png", "blue high-neck knit sweater"],
  ["g1.png", "black and cream argyle knitted vest"],
  ["g2.png", "brown sleeveless knitted vest"],
  ["g3.png", "cream cable-knit V-neck vest"],
  ["g4.png", "taupe cable-knit V-neck vest"],
  ["g5.png", "cream cardigan with black trim"],
  ["g6.png", "brown cropped crew-neck sweater"],
  ["g7.png", "brown sleeveless high-neck knit"],
  ["g8.png", "black and cream contrast cropped sweater"],
  ["g9.png", "pale blue button-front cardigan"],
  ["g10.png", "green and brown patterned cardigan"],
  ["g11.png", "blush cable-knit cropped sweater"],
];
const winterMen: Style[] = [
  ["b1.png", "rust crew-neck sweater"],
  ["b2.png", "cream cable-knit rugby-collar sweater"],
  ["b3.png", "dark brown long-sleeve knit polo"],
  ["b4.png", "tan cable-knit crew-neck sweater"],
  ["b5.png", "brown quarter-zip ribbed sweater"],
  ["b6.png", "navy half-zip sweater"],
  ["b7.png", "navy cable-knit sweater vest"],
  ["b8.png", "grey shawl-collar cardigan"],
  ["b9.png", "cream argyle sweater vest"],
  ["b10.png", "olive cable-knit crew-neck sweater"],
  ["b11.png", "cream ribbed roll-neck sweater"],
  ["12.png", "navy cable-knit button cardigan"],
];

function collection(season: "summer" | "winter", women: Style[], men: Style[]) {
  const length = Math.max(women.length, men.length);
  return Array.from({ length }, (_, index) => [
    women[index] && { src: `/media/sweaters/${season}/${women[index][0]}`, alt: `Women's ${women[index][1]} reference`, category: "Women" },
    men[index] && { src: `/media/sweaters/${season}/${men[index][0]}`, alt: `Men's ${men[index][1]} reference`, category: "Men" },
  ]).flat().filter((image): image is { src: string; alt: string; category: string } => Boolean(image));
}

const summer = collection("summer", summerWomen, summerMen);
const winter = collection("winter", winterWomen, winterMen);

export default function FashionCollectionsPage() {
  const inquiry = "/contact?category=fashion";
  return <div className="sweater-page">
    <div className="sweater-hero-stage">
    <div className="shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/products">Products</Link><CaretRight size={11}/><span aria-current="page">Fashion collections</span></nav></div>
    <section className="sweater-hero shell">
      <div className="sweater-hero-copy">
        <p className="eyebrow">Fashion knitwear / made to your brief</p>
        <h1>Knitwear for every season.</h1>
        <p>From fine-gauge summer polos to textured winter layers, develop a women’s or men’s collection around your own fit, yarn, colour and label.</p>
        <div className="sweater-hero-actions"><Link href={inquiry} className="button button-primary">Discuss your collection <ArrowUpRight size={18}/></Link><a href="#summer-collection" className="text-link">Explore the references <ArrowUpRight size={18}/></a></div>
        <p className="sweater-reference-note">Garment images are design references. Your specification is confirmed through sampling.</p>
      </div>
      <div className="sweater-hero-visual" aria-label="Examples of winter and summer knitwear">
        <div className="sweater-hero-image sweater-hero-image-winter"><Image src="/media/sweaters/winter/12.png" alt="Navy cable-knit button cardigan reference" fill sizes="(min-width: 900px) 25vw, 45vw" priority className="object-contain"/><span>01 / Winter layers</span></div>
        <div className="sweater-hero-image sweater-hero-image-summer"><Image src="/media/sweaters/summer/b3.png" alt="Cream and green button-front summer knit shirt reference" fill sizes="(min-width: 900px) 22vw, 45vw" priority className="object-contain"/><span>02 / Summer knits</span></div>
      </div>
    </section></div>
    <section id="summer-collection" className="sweater-season sweater-season-summer">
      <div className="shell sweater-season-heading"><div><p className="eyebrow">01 / The lighter collection</p><h2>Summer knits</h2></div><div><p>Short-sleeve knitted polos, button-front tops and easy layers with the texture of knitwear and a lighter seasonal feel.</p><span>Women’s & men’s styles · 18 references</span></div></div>
      <ReferenceCarousel images={summer} label="Summer knitwear references for women and men" />
    </section>
    <section id="winter-collection" className="sweater-season sweater-season-winter">
      <div className="shell sweater-season-heading"><div><p className="eyebrow">02 / The layered collection</p><h2>Winter knitwear</h2></div><div><p>Pullovers, cardigans, half-zips and vests. Explore cable, rib, colour-block and contrast-trim directions for colder-weather ranges.</p><span>Women’s & men’s styles · 24 references</span></div></div>
      <ReferenceCarousel images={winter} label="Winter knitwear references for women and men" />
    </section>
    <section className="sweater-development shell"><div className="sweater-development-intro"><p className="eyebrow">Made to your brief</p><h2>Your design sets the specification.</h2><p>Use these references to start a conversation, then define the garment you actually need. We review the construction with you before sampling and agree production details after approval.</p></div><div className="sweater-development-grid"><div><span>01</span><h3>Yarn & structure</h3><p>Choose the blend, gauge, weight and stitch direction for the season and your target price.</p></div><div><span>02</span><h3>Fit & details</h3><p>Set the silhouette, measurements, neck shape, trims and colourways against your reference or tech pack.</p></div><div><span>03</span><h3>Brand & delivery</h3><p>Agree labels, packaging, quantities and destination before a production quotation is confirmed.</p></div></div></section>
    <InquiryCTA href={inquiry} title="Let's develop your next knitwear range." body="Send a sketch, reference or tech pack, plus your intended quantities and destination. We'll discuss the next practical step." />
  </div>;
}
