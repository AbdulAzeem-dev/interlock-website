"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import { heroSlides } from "@/content/homepage";

const SLIDE_DURATION_MS = 6500;

function KenBurnsImage({
  src,
  alt,
  priority,
  reduce,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  reduce: boolean | null;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        initial={reduce ? undefined : { scale: 1 }}
        animate={reduce ? undefined : { scale: 1.06 }}
        transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image src={src} alt={alt} fill sizes="60vw" priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reduce) return;

    const clear = () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };

    const start = () => {
      clear();
      timerRef.current = setInterval(() => {
        if (!pausedRef.current) {
          setIndex((i) => (i + 1) % heroSlides.length);
        }
      }, SLIDE_DURATION_MS);
    };

    const handleVisibility = () => {
      pausedRef.current = document.hidden;
    };

    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      clear();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reduce]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = heroSlides[index];

  return (
    <section
      aria-label="INTERLOCK manufacturing showcase"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-navy text-ivory"
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.3 : 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Composite: one large frame + up to two smaller supporting
                frames, combined into a single background moment. Mobile
                shows the large frame only - the grid is too busy at
                narrow widths. */}
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-[1.6fr_1fr] md:grid-rows-2 md:gap-1.5 lg:gap-2">
              <div className="relative md:col-start-1 md:row-span-2 md:row-start-1">
                <KenBurnsImage
                  src={slide.large.kind === "photo" ? slide.large.src : ""}
                  alt={slide.large.kind === "photo" ? slide.large.alt : ""}
                  priority={index === 0}
                  reduce={reduce}
                />
              </div>
              {slide.small.map((img, i) => (
                <div
                  key={i}
                  className={`relative hidden md:block md:col-start-2 ${
                    i === 0 ? "md:row-start-1" : "md:row-start-2"
                  }`}
                >
                  <KenBurnsImage
                    src={img.kind === "photo" ? img.src : ""}
                    alt={img.kind === "photo" ? img.alt : ""}
                    reduce={reduce}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Dimmed overlay for text legibility - flat tint, no glow/gradient excess */}
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-28 pt-20 sm:px-8 md:pb-32">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {slide.eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.1] md:text-5xl lg:text-6xl">
          Knitwear manufacturing, refined over four decades.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/85">
          Established in Pakistan in 1982, INTERLOCK manufactures sweaters,
          cardigans, uniform knitwear and accessories for international
          buyers.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/contact">{site.primaryCta}</ButtonLink>
          <ButtonLink href="/manufacturing" variant="ghost">
            {site.secondaryCta}
          </ButtonLink>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-5 z-10 flex items-center gap-4 sm:right-8">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
        >
          <CaretLeft size={16} weight="bold" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Slide selection">
          {heroSlides.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
              onClick={() => goTo(i)}
              className="group flex h-6 w-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span
                className={`h-[3px] w-5 transition-colors ${
                  i === index ? "bg-gold" : "bg-ivory/35 group-hover:bg-ivory/60"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
        >
          <CaretRight size={16} weight="bold" />
        </button>
      </div>
    </section>
  );
}
