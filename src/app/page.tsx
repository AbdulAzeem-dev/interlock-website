import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MediaBlock from "@/components/ui/MediaBlock";
import HeritageTimeline from "@/components/ui/HeritageTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import HeroSlideshow from "@/components/homepage/HeroSlideshow";
import Ticker from "@/components/homepage/Ticker";
import ProductDivisions from "@/components/homepage/ProductDivisions";
import FactoryVideoSection from "@/components/homepage/FactoryVideoSection";
import CapacitySection from "@/components/homepage/CapacitySection";
import EnquiryStack from "@/components/homepage/EnquiryStack";
import { site } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import { heritageTimeline } from "@/content/heritage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Knitwear Manufacturer in Pakistan Since 1982",
  description:
    "INTERLOCK manufactures sweaters, cardigans, uniform knitwear, cotton knit shirts, socks, gloves and scarves for international brands, distributors and institutional buyers. Established in Pakistan, 1982.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      <Ticker />

      {/* PRODUCT DIVISIONS */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          title="One manufacturing partner. Three specialist product divisions."
          body="From fashion knitwear and institutional uniforms to hosiery and activewear, INTERLOCK supports diverse product programmes through one manufacturing relationship."
        />
        <div className="mt-14">
          <ProductDivisions />
        </div>
      </section>

      <FactoryVideoSection />

      <CapacitySection />

      {/* MANUFACTURER PROOF - dark section, process photography */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <MediaBlock
                media={{
                  kind: "photo",
                  src: "/media/process/yarn-cones.jpg",
                  alt: "Cones of coloured yarn prepared for knitting",
                  caption: "Illustrative yarn preparation, not INTERLOCK's own stock photograph.",
                }}
                className="aspect-[4/5] w-full"
                dark
              />
            </Reveal>
            <div>
              <SectionHeading
                tone="ivory"
                title="Proof is in the process."
                body="An enquiry becomes a finished, packed product through a fixed sequence: requirement review, sampling, colour and sizing management, production checks, and finishing. Nothing moves to bulk production until a sample is approved against your reference."
              />
              <div className="mt-10">
                {capabilities.slice(0, 4).map((c, i) => (
                  <ProcessStepDark key={c.title} index={i + 1} {...c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryStack />

      {/* QUALITY - dark section, texture photography */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionHeading tone="ivory" title="Quality is a checklist, not a slogan." />
              <ul className="mt-8 space-y-4">
                {[
                  "Every order is produced against an approved sample, not a general description.",
                  "Colour is matched and retained against a fixed reference for every reorder.",
                  "Sizing is graded against your measurement chart, not a generic block.",
                  "Stitch, seam, and finishing are checked before packing.",
                  "Logo, embroidery, and label placement are verified against your specification.",
                  "Finished goods are packed to your agreed packaging requirements before dispatch.",
                ].map((line) => (
                  <li key={line} className="flex gap-3 border-t border-ivory/15 pt-4 text-sm leading-relaxed text-ivory/80">
                    <span className="mt-0.5 font-display italic text-gold">&#10003;</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <Reveal>
              <MediaBlock
                media={{
                  kind: "photo",
                  src: "/media/texture/knit-rib-macro.jpg",
                  alt: "Close macro detail of ribbed knit fabric construction",
                  caption: "Illustrative knit texture, not an INTERLOCK product photograph.",
                }}
                className="aspect-[4/5] w-full"
                dark
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          title="Manufacturing knitwear since 1982."
          body="Four decades of production experience shows up as technical judgement: knowing how a yarn will behave, how a colour will hold, and how to keep a reorder identical to the last one."
        />
        <div className="mt-14 bg-navy px-6 py-14 sm:px-10 md:px-14">
          <HeritageTimeline markers={heritageTimeline} tone="ivory" />
        </div>
      </section>

      {/* PRIVATE LABEL CTA */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              title="Start with your product brief."
              body="Share your product category, reference, quantities, materials and target timeline. Our team will review the requirements and respond with the next practical step."
            />
            <div className="flex lg:justify-end">
              <ButtonLink href="/contact" className="group">
                {site.enquiryCta}
                <ArrowRight
                  size={18}
                  weight="light"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessStepDark({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5 border-t border-ivory/15 py-5 first:border-t-0">
      <span className="font-display text-xl italic text-gold">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-base text-ivory">{title}</h3>
        <p className="mt-1 max-w-sm text-sm leading-relaxed text-ivory/70">
          {description}
        </p>
      </div>
    </div>
  );
}
