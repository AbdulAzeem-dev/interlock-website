"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 xl:flex"
        >
          {site.nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide text-navy/80 transition-colors hover:text-navy",
                pathname === item.href && "text-navy"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <ButtonLink href="/contact" variant="primary" className="text-xs">
            {site.primaryCta}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center text-navy xl:hidden"
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col overflow-y-auto bg-ivory transition-[opacity,visibility] duration-300 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col gap-1 px-6 pt-6"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-navy/10 py-4 font-display text-2xl text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="px-6 pb-10 pt-4">
          <ButtonLink href="/contact" variant="primary" className="w-full">
            {site.primaryCta}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
