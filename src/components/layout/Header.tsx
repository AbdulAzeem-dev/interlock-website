"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CaretDown, List, X } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";
import { site } from "@/content/site";

const ranges = [
  { name: "Fashion & private label", items: [["View collections", "/products/divisions/fashion"], ["Sweaters", "/products/sweaters"], ["Cardigans", "/products/cardigans"]] },
  { name: "Military & defence", items: [["View the division", "/products/divisions/military"], ["Institutional knitwear", "/products/military-institutional-knitwear"]] },
  { name: "School & institutional", items: [["View the division", "/products/divisions/uniforms"], ["Uniform knitwear", "/products/uniform-knitwear"]] },
  { name: "Hosiery & accessories", items: [["View the division", "/products/divisions/hosiery-accessories"], ["Socks", "/products/socks"], ["Gloves & scarves", "/products/gloves"]] },
];
export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<"products" | "mobile" | null>(null);
  const root = useRef<HTMLElement>(null);
  const productToggle = useRef<HTMLButtonElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(null);
        (menu === "products" ? productToggle : mobileToggle).current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menu]);
  const close = () => setMenu(null);
  return (
    <header ref={root} className="site-header" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}>
      <div className="shell nav-inner">
        <div onClick={close}><Logo /></div>
        <nav className="desktop-nav" aria-label="Primary">
          <div className="product-nav">
            <Link href="/products" onClick={close} aria-current={pathname.startsWith("/products") ? "page" : undefined}>Products</Link>
            <button ref={productToggle} type="button" aria-label="Browse product categories" aria-expanded={menu === "products"} aria-controls="product-menu" onClick={() => setMenu(menu === "products" ? null : "products")}><CaretDown size={14} /></button>
          </div>
          {site.nav.slice(1).map(item => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="button button-primary nav-quote" onClick={close}>Request a quote <ArrowUpRight size={17} /></Link>
          <button ref={mobileToggle} type="button" className="mobile-toggle" aria-label={menu === "mobile" ? "Close menu" : "Open menu"} aria-expanded={menu === "mobile"} aria-controls="mobile-menu" onClick={() => setMenu(menu === "mobile" ? null : "mobile")}>{menu === "mobile" ? <X size={25} /> : <List size={25} />}</button>
        </div>
      </div>
      {menu === "products" && <nav id="product-menu" className="mega-menu" aria-label="Product categories"><div className="shell mega-grid">{ranges.map(range => <div key={range.name}><p className="menu-heading">{range.name}</p>{range.items.map(([name, href]) => <Link href={href} onClick={close} key={href}>{name}<ArrowUpRight size={15}/></Link>)}</div>)}<Link href="/products" onClick={close} className="mega-all">View all four divisions <ArrowUpRight size={18}/></Link></div></nav>}
      {menu === "mobile" && <nav id="mobile-menu" className="mobile-menu shell" aria-label="Mobile">{site.nav.map(item => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<ArrowUpRight size={20}/></Link>)}<Link href="/industries" onClick={close}>Who we work with <ArrowUpRight size={20}/></Link><Link href="/contact" onClick={close}>Contact <ArrowUpRight size={20}/></Link></nav>}
    </header>
  );
}

