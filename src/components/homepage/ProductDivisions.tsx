"use client";

import { useState } from "react";
import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";
import MediaBlock from "@/components/ui/MediaBlock";
import { productDivisions } from "@/content/homepage";
import { cn } from "@/lib/cn";

export default function ProductDivisions() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Desktop: tab rail + large panels */}
      <div className="hidden md:block">
        <div
          role="tablist"
          aria-label="Product divisions"
          className="flex gap-10 border-b border-navy/15"
        >
          {productDivisions.map((division, i) => (
            <button
              key={division.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "relative pb-5 font-display text-2xl transition-colors focus-visible:outline-2 focus-visible:outline-gold",
                active === i ? "text-navy" : "text-navy/40 hover:text-navy/70"
              )}
            >
              {division.name}
              {active === i && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        {productDivisions.map((division, i) => (
          <div key={division.id} hidden={active !== i} role="tabpanel">
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-charcoal/70">
              {division.intro}
            </p>
            <div
              className={cn(
                "mt-10 grid grid-cols-1 gap-8",
                division.subcategories.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {division.subcategories.map((sub) => (
                <Link key={sub.name} href={sub.href} className="group block">
                  <MediaBlock media={sub.media} className="aspect-[3/4] w-full" />
                  <h3 className="mt-4 font-display text-lg text-navy">{sub.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">
                    {sub.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden">
        {productDivisions.map((division, i) => {
          const open = active === i;
          return (
            <div key={division.id} className="border-b border-navy/15">
              <button
                type="button"
                onClick={() => setActive(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between py-5 text-left focus-visible:outline-2 focus-visible:outline-gold"
              >
                <span className="font-display text-xl text-navy">{division.name}</span>
                <CaretDown
                  size={18}
                  className={cn("text-gold transition-transform", open && "rotate-180")}
                />
              </button>
              {open && (
                <div className="pb-8">
                  <p className="max-w-xl text-sm leading-relaxed text-charcoal/70">
                    {division.intro}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-5">
                    {division.subcategories.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="group block">
                        <MediaBlock media={sub.media} className="aspect-[3/4] w-full" />
                        <h3 className="mt-3 font-display text-sm text-navy">{sub.name}</h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
