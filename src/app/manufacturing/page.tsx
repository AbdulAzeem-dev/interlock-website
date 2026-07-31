import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaBlock from "@/components/ui/MediaBlock";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { capabilities, collaborationSteps } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Manufacturing Capability",
  description:
    "How INTERLOCK manufactures knitwear to specification: requirement review, sampling, colour and sizing management, production checks, branding, and packing.",
  alternates: { canonical: "/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <>
      <PageIntro
        title="What it takes to manufacture knitwear to specification."
        body="INTERLOCK produces sweaters, cardigans, uniform knitwear, cotton knits, and accessories through a fixed sequence, whether the order is a first sample or the tenth repeat of a long-running programme."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <MediaBlock
              media={{
                kind: "photo",
                src: "/media/process/knitting-machine.jpg",
                alt: "Circular knitting machine used in knitwear production",
                caption: "Illustrative knitting equipment, not an INTERLOCK facility photograph.",
              }}
              className="aspect-[4/5] w-full"
              priority
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Production"
              title="Knitting, linking, and finishing under one roof."
              body="Machinery, technique, and finishing knowledge built up since 1982 are what let colour and sizing stay consistent from the first sample to a reorder placed years later."
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-charcoal/70">
              Specific machine counts, gauges, and floor capacity are being
              documented for publication here. Until then, capability is described
              by process rather than by unverified figures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading tone="ivory" title="The production sequence" />
          <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex gap-5 border-l-2 border-gold/40 py-4 pl-5">
                <span className="font-display text-2xl italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-ivory">{c.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ivory/70">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            title="From enquiry to dispatch"
            body="This is the practical path an order follows, regardless of category or order size."
          />
          <ol className="space-y-0">
            {collaborationSteps.map((step, i) => (
              <li key={step} className="flex gap-4 border-t border-navy/15 py-4 first:border-t-0">
                <span className="font-display text-lg italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-charcoal/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <SectionHeading
              title="What we need from you to start"
              body="A technical pack, a reference garment, a product photo, or a size chart is enough to begin a feasibility review. Colour references and branding artwork can follow once the construction is agreed."
            />
            <div className="flex lg:justify-end">
              <ButtonLink href="/contact">Discuss Your Requirements</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
