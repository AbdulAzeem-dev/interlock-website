"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { enquiryProcessSteps } from "@/content/homepage";

// Alternating light tones matching the site's own design system (ivory /
// parchment, navy text, gold accents) - not an off-brand colour sequence.
const cardTones = ["bg-ivory", "bg-parchment", "bg-ivory", "bg-parchment", "bg-ivory"];

function subscribeDesktopQuery(callback: () => void) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/** Tracks whether the viewport is at or above the md breakpoint (768px). */
function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktopQuery,
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false
  );
}

function StackCard({
  index,
  total,
  title,
  description,
  tone,
}: {
  index: number;
  total: number;
  title: string;
  description: string;
  tone: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Stay fully readable for the first half of the card's dwell; only shrink
  // and fade in the second half, as the next card arrives to cover it.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.75]);

  return (
    <div ref={ref} className={isLast ? "" : "h-[100dvh]"}>
      <motion.div
        style={reduce || isLast ? undefined : { scale, opacity }}
        className={`sticky top-0 flex min-h-[100dvh] flex-col justify-center border-t border-navy/15 ${tone} px-6 py-16 sm:px-10 md:px-16`}
      >
        <div className="mx-auto w-full max-w-3xl">
          <span className="font-display text-2xl italic text-gold">
            {String(index + 1).padStart(2, "0")}
            <span className="text-navy/35"> / {String(total).padStart(2, "0")}</span>
          </span>
          <h3 className="mt-4 font-display text-3xl font-medium leading-tight text-navy md:text-5xl">
            {title}
          </h3>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/75 md:text-lg">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Plain vertical sequence for tablet/mobile - deliberately no sticky pinning
 * and no scroll-trigger motion, per the requirement that mobile must not
 * scroll-jack or create excessive section height.
 */
function MobileStackCard({
  index,
  total,
  title,
  description,
  tone,
}: {
  index: number;
  total: number;
  title: string;
  description: string;
  tone: string;
}) {
  return (
    <div className={`border-t border-navy/15 ${tone} px-6 py-14 sm:px-10`}>
      <span className="font-display text-xl italic text-gold">
        {String(index + 1).padStart(2, "0")}
        <span className="text-navy/35"> / {String(total).padStart(2, "0")}</span>
      </span>
      <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-navy">{title}</h3>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-charcoal/75">{description}</p>
    </div>
  );
}

export default function StackedProcessCards() {
  const isDesktop = useIsDesktop();

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          title="From enquiry to production"
          body="INTERLOCK follows a clear process from requirements to dispatch, whether it is a first sample or a repeat programme in its tenth year."
        />
      </div>
      <div className="mt-14">
        {isDesktop
          ? enquiryProcessSteps.map((step, i) => (
              <StackCard
                key={step.title}
                index={i}
                total={enquiryProcessSteps.length}
                title={step.title}
                description={step.description}
                tone={cardTones[i % cardTones.length]}
              />
            ))
          : enquiryProcessSteps.map((step, i) => (
              <MobileStackCard
                key={step.title}
                index={i}
                total={enquiryProcessSteps.length}
                title={step.title}
                description={step.description}
                tone={cardTones[i % cardTones.length]}
              />
            ))}
      </div>
    </section>
  );
}
