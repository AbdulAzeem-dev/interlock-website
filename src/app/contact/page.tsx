import type { Metadata } from "next";
import { EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import PageIntro from "@/components/ui/PageIntro";
import RFQForm from "@/components/ui/RFQForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Start an enquiry with INTERLOCK. Share your product category, reference, quantities, materials and target timeline for a practical next step.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Start with your product brief."
        body="Share your product category, reference, quantities, materials and target timeline. Our team will review the requirements and respond with the next practical step."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl text-navy">Direct contact</h2>
            <ul className="mt-6 space-y-4 text-sm text-charcoal/80">
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={20} weight="light" className="text-gold" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-navy">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} weight="light" className="text-gold" />
                {site.country}
              </li>
            </ul>
            <div className="mt-10 border-t border-navy/15 pt-6">
              <h3 className="font-display text-lg text-navy">
                Not ready for a full brief?
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-charcoal/70">
                An incomplete enquiry is still useful. Share what you know, a
                product category and rough quantity is enough for our team to
                come back with the right next question.
              </p>
            </div>
          </div>
          <RFQForm />
        </div>
      </section>
    </>
  );
}
