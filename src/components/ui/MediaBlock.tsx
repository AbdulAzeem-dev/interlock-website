import Image from "next/image";
import type { MediaRef } from "@/content/products";
import { cn } from "@/lib/cn";

const toneStyles = {
  navy: "bg-navy text-ivory/70",
  gold: "bg-navy-light text-ivory/70",
  parchment: "bg-parchment text-navy/60",
} as const;

const patternOpacity = {
  navy: 0.14,
  gold: 0.16,
  parchment: 0.22,
} as const;

/**
 * Renders a real sourced photograph when available, or an honest abstract
 * knit-texture placeholder (never a fabricated "factory" or "product" photo)
 * when it is not. See ASSET_MANIFEST.md.
 */
export default function MediaBlock({
  media,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  dark = false,
}: {
  media: MediaRef;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Set true when placed on a navy/dark background, so the caption stays legible. */
  dark?: boolean;
}) {
  if (media.kind === "photo") {
    const image = (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );

    if (!media.caption) return image;

    return (
      <figure>
        {image}
        <figcaption
          className={cn(
            "mt-2 text-xs italic",
            dark ? "text-ivory/50" : "text-charcoal/50"
          )}
        >
          {media.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        toneStyles[media.tone],
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        style={{ opacity: patternOpacity[media.tone] }}
      >
        <defs>
          <pattern
            id={`rib-${media.tone}-${media.label.replace(/\s+/g, "")}`}
            width="14"
            height="14"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="3" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#rib-${media.tone}-${media.label.replace(/\s+/g, "")})`}
        />
      </svg>
      <span className="relative font-display text-lg italic tracking-wide">
        {media.label}
      </span>
    </div>
  );
}
