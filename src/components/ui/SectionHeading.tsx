import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "navy",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "navy" | "ivory";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "navy" ? "text-gold" : "text-gold-soft"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-medium leading-[1.15] md:text-4xl",
          tone === "navy" ? "text-navy" : "text-ivory"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-4 max-w-[60ch] text-base leading-relaxed",
            tone === "navy" ? "text-charcoal/80" : "text-ivory/75"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
