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
        src="/brand/interlock-icon.png"
        alt="INTERLOCK markhor mark"
        width={40}
        height={39}
        className={cn("h-9 w-auto", className)}
        priority
      />
    ) : variant === "full" ? (
      <Image
        src="/brand/interlock-logo-full.png"
        alt="INTERLOCK - Fine Knitwear Manufacturers, Since 1982"
        width={324}
        height={252}
        className={cn("h-auto w-40", className)}
      />
    ) : (
      <span className={cn("flex items-center gap-3", className)}>
        <Image
          src="/brand/interlock-icon.png"
          alt=""
          width={36}
          height={35}
          className="h-8 w-auto shrink-0"
          priority
        />
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-2xl font-semibold tracking-wide",
              tone === "navy" ? "text-navy" : "text-ivory"
            )}
          >
            INTERLOCK
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
      aria-label={`${"INTERLOCK"} home`}
      className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-gold"
    >
      {content}
    </Link>
  );
}
