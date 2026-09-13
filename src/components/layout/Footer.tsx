import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Logo from "@/components/ui/Logo";
import { site } from "@/content/site";
import ThemeToggle from "@/components/ui/ThemeToggle";
export default function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-grid">
      <div><Logo/><p className="footer-description">Fine knitwear. Made in Pakistan.<br/>Manufacturing since 1982.</p><Link href="/contact" className="text-link">Let’s discuss your next collection <ArrowUpRight size={17}/></Link></div>
      <div><h2>Explore</h2><Link href="/products">Products</Link><Link href="/private-label">Private label</Link><Link href="/manufacturing">Manufacturing</Link><Link href="/industries">Who we work with</Link><Link href="/about">About INTERLOCK</Link></div>
      <div><h2>Get in touch</h2>{site.contact.email ? <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> : <span className="placeholder-text">{site.contact.placeholders.email}</span>}{site.contact.whatsappUrl ? <a href={site.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp {site.contact.whatsapp} <ArrowUpRight size={14}/></a> : <span className="placeholder-text">{site.contact.placeholders.whatsapp}</span>}<p className="footer-address">{site.contact.address || site.contact.placeholders.address}</p></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} INTERLOCK</p><div>{site.footerLegal.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/photography">Photography credits</Link></div><ThemeToggle/></div>
  </div></footer>;
}

