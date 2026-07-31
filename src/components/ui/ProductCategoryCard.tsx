import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import MediaBlock from "@/components/ui/MediaBlock";
import type { ProductCategory } from "@/content/products";
import { cn } from "@/lib/cn";

export default function ProductCategoryCard({
  product,
  size = "default",
}: {
  product: ProductCategory;
  size?: "default" | "large";
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <MediaBlock
        media={product.media}
        className={cn(
          "transition-transform duration-700 ease-out",
          size === "large" ? "aspect-[4/5]" : "aspect-[4/3]"
        )}
      />
      <div className="mt-4 flex items-start justify-between gap-3 border-t border-navy/15 pt-4">
        <div>
          <h3 className="font-display text-xl text-navy">{product.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
            {product.summary}
          </p>
        </div>
        <ArrowUpRight
          size={20}
          weight="light"
          className="mt-1 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </Link>
  );
}
