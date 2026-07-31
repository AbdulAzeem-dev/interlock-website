import type { HeritageMarker } from "@/content/heritage";
import { cn } from "@/lib/cn";

export default function HeritageTimeline({
  markers,
  tone = "ivory",
}: {
  markers: HeritageMarker[];
  tone?: "ivory" | "navy";
}) {
  return (
    <ol className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
      {markers.map((m) => (
        <li key={m.title} className="border-t border-gold/40 pt-5">
          <span className="font-display text-4xl italic leading-none text-gold">
            {m.year}
          </span>
          <h3
            className={cn(
              "mt-3 font-display text-xl",
              tone === "navy" ? "text-navy" : "text-ivory"
            )}
          >
            {m.title}
          </h3>
          <p
            className={cn(
              "mt-2 max-w-sm text-sm leading-relaxed",
              tone === "navy" ? "text-charcoal/75" : "text-ivory/70"
            )}
          >
            {m.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
