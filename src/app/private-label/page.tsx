import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaBlock from "@/components/ui/MediaBlock";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { collaborationSteps } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Private Label & Custom Knitwear Development",
  description:
    "Develop custom or private-label knitwear with INTERLOCK from a technical pack, reference garment, or product image, including labelling and packaging to your specification.",
  alternates: { canonical: "/private-label" },
};

const inputs = [
  "A technical pack",
  "A reference garment",
  "A product image",
  "A size chart",
  "Yarn requirements",
  "Colour requirements",
  "Branding artwork",
  "Label requirements",
  "Packaging requirements",
];

export default function PrivateLabelPage() {
  return (
    <>
      <PageIntro
        title="Start with your product brief."
        body="Private-label development draws on the same production discipline used across INTERLOCK's own categories, applied under your brand, your labels, and your packaging."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="What you can bring to begin"
              body="Development does not require a finished technical package. Any one of the following is enough to start a feasibility review."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {inputs.map((item) => (
                <li
                  key={item}
                  className="border-t border-navy/15 pt-3 text-sm text-charcoal/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <MediaBlock
              media={{
                kind: "photo",
                src: "/media/products/private-label.jpg",
                alt: "Blank hang tag on folded fabric, representing custom branding and labelling",
                caption: "Illustrative example, not an INTERLOCK production photograph.",
              }}
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading tone="ivory" title="The collaboration process" />
          <ol className="mt-10 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-2">
            {collaborationSteps.map((step, i) => (
              <li key={step} className="flex gap-4 border-l-2 border-gold/50 pl-4">
                <span className="font-display text-lg italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-ivory/75">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading
            title="Labels, packaging, and branding to your specification"
            body="Woven labels, hang tags, printed branding, and carton or polybag packaging are developed alongside the product, so what ships carries your brand from the first sample onward."
          />
          <div className="flex lg:justify-end">
            <ButtonLink href="/contact">Discuss Your Requirements</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
