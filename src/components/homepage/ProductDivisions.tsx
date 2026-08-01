"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import MediaBlock from "@/components/ui/MediaBlock";
import { productDivisions } from "@/content/homepage";
import { cn } from "@/lib/cn";

export default function ProductDivisions() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const division = active !== null ? productDivisions[active] : null;

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        {division === null ? (
          <motion.div
            key="grid"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {productDivisions.map((div, i) => (
              <button
                key={div.id}
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-[3/4] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`View ${div.name} range`}
              >
                <MediaBlock
                  media={div.cardMedia}
                  className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-navy/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-ivory md:text-3xl">{div.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/75">
                    {div.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    View Range
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy/70 transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ArrowLeft size={14} weight="bold" />
              All Divisions
            </button>

            <h3 className="mt-5 font-display text-3xl text-navy md:text-4xl">{division.name}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/70">
              {division.intro}
            </p>

            <div
              className={cn(
                "mt-10 grid grid-cols-2 gap-6",
                division.subcategories.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
              )}
            >
              {division.subcategories.map((sub) => (
                <Link key={sub.name} href={sub.href} className="group block">
                  <MediaBlock media={sub.media} className="aspect-[3/4] w-full" />
                  <h4 className="mt-4 font-display text-base text-navy md:text-lg">{sub.name}</h4>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-charcoal/70 sm:block">
                    {sub.summary}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
