import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import HeritageTimeline from "@/components/ui/HeritageTimeline";
import MediaBlock from "@/components/ui/MediaBlock";
import Reveal from "@/components/ui/Reveal";
import { heritageTimeline } from "@/content/heritage";

export const metadata: Metadata = {
  title: "About INTERLOCK",
  description:
    "INTERLOCK is a Pakistan-based knitwear manufacturer established in 1982, now building direct partnerships with international brands, distributors, and institutional buyers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Manufacturing knitwear since 1982."
        body="Four decades of Pakistani knitwear manufacturing, now opening into direct international partnerships."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="max-w-[60ch] text-base leading-relaxed text-charcoal/85">
              INTERLOCK began manufacturing knitwear in Pakistan in 1982. Over
              four decades, that work built into deep experience across
              sweaters, cardigans, uniform knitwear, and knitted accessories,
              alongside the machinery and production discipline needed to
              repeat a result reliably, order after order.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-charcoal/85">
              A significant part of that history is uniform knitwear for
              established and premium schools across Pakistan, where the
              standard buyers expect is not novelty but consistency: the same
              colour, the same fit, the same finish, reorder after reorder.
              Alongside this, INTERLOCK has manufactured specification-led
              military-style knitwear, including jerseys, socks, and gloves,
              through a Pakistani export partner, working to fixed technical
              standards rather than fashion styling.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-charcoal/85">
              That combination, decades of domestic manufacturing experience
              plus the discipline of specification-led production, is what
              INTERLOCK now brings directly to international brands,
              distributors, and institutional buyers. This is a natural next
              stage for a business with a long production history, not a
              reaction to any single event: the aim is long-term
              manufacturing relationships built on the same reliability that
              has held for over forty years at home.
            </p>
          </div>
          <Reveal>
            <MediaBlock
              media={{
                kind: "photo",
                src: "/media/process/yarn-cones.jpg",
                alt: "Yarn cones prepared for a knitting production run",
                caption: "Illustrative yarn preparation, not INTERLOCK's own archive photograph.",
              }}
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading tone="ivory" title="Four decades, in brief" />
          <div className="mt-12">
            <HeritageTimeline markers={heritageTimeline} tone="ivory" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <SectionHeading
          title="Why experience matters more than novelty here"
          body="A knitwear order rarely goes wrong at the design stage. It goes wrong in gauge, tension, colour drift, or a size grade that does not repeat. Forty years of production gives INTERLOCK the judgement to catch that before it reaches you, and to keep a programme consistent for as long as you need it to run."
        />
      </section>
    </>
  );
}
