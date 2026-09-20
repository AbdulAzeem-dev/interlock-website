import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "horizontal" | "icon" | "full";
  tone?: "navy" | "ivory";
  className?: string;
  href?: string | false;
};

export default function Logo({
  variant = "horizontal",
  tone = "navy",
  className,
  href = "/",
}: LogoProps) {
  const content =
    variant === "icon" ? (
      <Image
        src="/brand/wintex-icon.png"
        alt="Wintex markhor mark"
        width={40}
        height={39}
        className={cn("h-9 w-auto", className)}
        priority
      />
    ) : variant === "full" ? (
      <span className={cn("wintex-brand-panel", className)}><Image src="/brand/wintex-icon.png" alt="" width={90} height={88}/><strong>WINTEX</strong><span>Fine Knitwear Manufacturers</span><small>Since 1982 · Pakistan</small></span>
    ) : (
      <span className={cn("brand-lockup flex items-center gap-3", className)}>
        <Image
          src="/brand/wintex-icon.png"
          alt=""
          width={36}
          height={35}
          className="h-8 w-auto shrink-0"
          priority
        />
        <span className="brand-wordmark flex flex-col leading-none">
          <span
            className={cn(
              "font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide",
              tone === "navy" ? "text-navy" : "text-ivory"
            )}
          >
            WINTEX
          </span>
          <span
            className={cn(
              "mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em]",
              tone === "navy" ? "text-gold" : "text-gold-soft"
            )}
          >
            Since 1982
          </span>
        </span>
      </span>
    );

  if (href === false) return content;

  return (
    <Link
      href={href}
      aria-label={`${"Wintex"} home`}
      className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-gold"
    >
      {content}
    </Link>
  );
}
