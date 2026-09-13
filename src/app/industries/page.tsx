import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import PageIntro from "@/components/ui/PageIntro";
import InquiryCTA from "@/components/ui/InquiryCTA";
export const metadata: Metadata={title:"Who We Manufacture For",description:"Knitwear manufacturing for fashion brands, uniform distributors, institutions and wholesalers.",alternates:{canonical:"/industries"}};
const buyers=[["Fashion & lifestyle brands","Develop sweaters, cardigans and accessories around your own fit, colour palette and label.","/products?range=fashion"],["School & uniform distributors","Build a size-graded range with consistent colours and branding for seasonal programmes and repeat orders.","/products?range=uniforms"],["Institutional & workwear suppliers","Discuss a fixed specification, construction details and the documentation required for your programme.","/products/military-institutional-knitwear"],["Wholesalers & own-brand ranges","Coordinate product categories, labelling and packing through a single manufacturing relationship.","/private-label"]];
export default function IndustriesPage(){return <><PageIntro title="Different buyers. A shared attention to detail." body="A fashion collection and a uniform programme have different priorities. The specification starts with what matters to you."/><section className="shell section-space"><div className="quality-grid">{buyers.map(([title,body,href])=><div key={title}><h2 className="text-2xl">{title}</h2><p>{body}</p><Link href={href} className="text-link mt-6">Explore the possibilities <ArrowUpRight size={18}/></Link></div>)}</div></section><InquiryCTA/></>;}

