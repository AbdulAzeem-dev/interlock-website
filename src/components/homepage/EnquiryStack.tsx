"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { capabilities } from "@/content/capabilities";

const ITEM_HEIGHT = "h-[46vh] min-h-[280px]";

function StackItem({
  index,
  total,
  title,
  description,
}: {
  index: number;
  total: number;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Stay fully readable for the first half of the item's dwell; only shrink
  // and fade in the second half, as the next item arrives to cover it.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.7]);

  return (
    <div ref={ref} className={isLast ? "" : ITEM_HEIGHT}>
      <motion.div
        style={reduce || isLast ? undefined : { scale, opacity }}
        className={`sticky top-28 flex ${ITEM_HEIGHT} flex-col justify-center border-t border-navy/15 bg-ivory py-6 first:border-t-0`}
      >
        <div className="flex gap-5">
          <span className="font-display text-2xl italic text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-lg text-navy md:text-xl">{title}</h3>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-charcoal/75 md:text-base">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function EnquiryStack() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            title="What happens after you enquire."
            body="Every order runs through the same stages, whether it is a first sample or a repeat programme in its tenth year."
          />
        </div>
        <div>
          {capabilities.map((c, i) => (
            <StackItem
              key={c.title}
              index={i}
              total={capabilities.length}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
