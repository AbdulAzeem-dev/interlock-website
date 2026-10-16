import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
type LogoProps = { variant?: "horizontal" | "icon" | "full"; tone?: "navy" | "ivory"; className?: string; href?: string | false };
export default function Logo({ variant = "horizontal", className, href = "/" }: LogoProps) {
  const label = variant === "full";
  const content = <span className={cn(label ? "brand-label-art" : "brand-logo-art", className)}>
    <Image src={label ? "/brand/wintex-label-v2.png" : "/brand/wintex-logo-transparent.png"} alt={label ? "Wintex woven label — Knitwear Manufacturer, Since 1982" : "Wintex — Knitwear Manufacturer, Since 1982"} width={label ? 1772 : 2172} height={label ? 886 : 724} preload={!label}/>
  </span>;
  return href === false ? content : <Link href={href} aria-label="Wintex home" className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-gold">{content}</Link>;
}
