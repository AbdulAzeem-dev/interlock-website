import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the INTERLOCK website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        title="Terms of Use"
        body="These terms govern your use of this website. They do not constitute a manufacturing, purchase, or supply agreement, which is agreed separately with confirmed buyers."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="max-w-[68ch] space-y-10 text-sm leading-relaxed text-charcoal/85">
          <div>
            <h2 className="font-display text-xl text-navy">Website content</h2>
            <p className="mt-3">
              Content on this website describes INTERLOCK&apos;s manufacturing
              capability in general terms. Product images shown for categories
              without dedicated INTERLOCK photography are labelled as
              illustrative and are not representations of a specific product,
              order, or facility. Figures such as capacity, lead time, or
              minimum order quantity are only published once confirmed; where
              not shown, they should be requested directly.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">No offer or contract</h2>
            <p className="mt-3">
              Nothing on this website constitutes a binding offer to
              manufacture or supply goods. An enquiry submitted through this
              website is a request for information; any resulting order is
              subject to a separate written agreement between INTERLOCK and
              the buyer.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">Intellectual property</h2>
            <p className="mt-3">
              The INTERLOCK name, logo, and website content are the property
              of INTERLOCK and may not be reproduced without permission.
              Reference garments, technical packs, or artwork you submit
              remain your property and are used only to evaluate and, where
              agreed, produce your order.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of Pakistan, where
              INTERLOCK is established. Commercial agreements for confirmed
              orders may specify separate governing terms by mutual
              agreement.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href="mailto:enquiries@interlockknits.com" className="text-navy underline decoration-gold underline-offset-4">
                enquiries@interlockknits.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
