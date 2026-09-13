import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
export default function InquiryCTA({ title = "Let’s make your next collection.", body = "A sketch, a reference or a tech pack. Share what you have, and let’s discuss how to produce it.", href = "/contact" }: {title?: string; body?: string; href?: string}) {
  return <section className="inquiry-cta"><div className="shell cta-inner"><div><h2>{title}</h2><p>{body}</p></div><Link href={href} className="button button-primary">Request a quote <ArrowUpRight size={19}/></Link></div></section>;
}

