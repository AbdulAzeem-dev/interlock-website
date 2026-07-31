import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-ivory hover:bg-navy-light",
  secondary: "border border-navy text-navy hover:bg-navy hover:text-ivory",
  ghost: "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children"
  >) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
