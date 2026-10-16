import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ProductDivision } from "@/content/divisions";

export default function ProductDivisionCard({ division }: { division: ProductDivision }) {
  const cardImage = division.cardHero ?? division.hero;
  return (
    <article className="division-card">
      <Link href={`/products/divisions/${division.slug}`} className="division-card-link" aria-label={`View ${division.title}`}>
        <div className="division-card-media">
          <Image src={cardImage.src} alt={cardImage.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={division.slug === "military" ? "division-military-image" : division.slug === "uniforms" ? "division-uniform-image" : "object-cover"} />
          <span className="division-number">{division.number}</span>
          <span className="division-card-arrow"><ArrowUpRight size={20} /></span>
        </div>
        <div className="division-card-body">
          <p className="eyebrow">{division.eyebrow}</p>
          <h3>{division.title}</h3>
          <p>{division.description}</p>
          <span className="division-card-cta">{division.categoryLabel}<ArrowUpRight size={16} /></span>
        </div>
      <div className="division-card-gallery" aria-hidden="true">
        {division.gallery.slice(0, 3).map((image) => <Image key={image.src} src={image.src} alt="" width={240} height={180} className="object-cover" />)}
      </div>
      </Link>
    </article>
  );
}
