import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ProductCategory } from "@/content/products";
export default function ProductCategoryCard({product, eager = false}: {product: ProductCategory; eager?: boolean}) {
  return <article className="product-card"><Link href={`/products/${product.slug}`} className="product-card-link"><div className="product-card-image">{product.media.kind === "photo" && <Image src={product.media.src} alt={product.media.alt} fill loading={eager ? "eager" : "lazy"} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw" className="object-contain product-card-art"/>}</div><div className="product-card-heading"><h3>{product.name}</h3><ArrowUpRight size={22}/></div><p>{product.summary}</p><span className="product-card-cta">Explore {product.shortName.toLowerCase()}</span></Link></article>;
}

