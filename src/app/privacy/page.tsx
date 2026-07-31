import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How INTERLOCK collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        title="Privacy Policy"
        body="This page explains what information INTERLOCK collects through this website and how it is used."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="max-w-[68ch] space-y-10 text-sm leading-relaxed text-charcoal/85">
          <div>
            <h2 className="font-display text-xl text-navy">Information we collect</h2>
            <p className="mt-3">
              When you submit an enquiry through this website, we collect the
              details you provide: your name, work email, company information,
              country, product requirements, and any file you attach, such as a
              technical pack, reference image, or size chart. We do not collect
              payment information through this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">How we use it</h2>
            <p className="mt-3">
              Enquiry information is used only to review and respond to your
              request, and to maintain a record of business communication. We do
              not sell or rent enquiry information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">File uploads</h2>
            <p className="mt-3">
              Files uploaded with an enquiry (technical packs, reference images,
              size charts) are used solely to evaluate your requirement and are
              retained only as long as needed for that purpose.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">Cookies and analytics</h2>
            <p className="mt-3">
              This website does not currently use advertising or third-party
              tracking cookies. If analytics tooling is added in future, this
              page will be updated to describe it before it is enabled.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-navy">Contact</h2>
            <p className="mt-3">
              Questions about this policy or a request to have your enquiry
              information removed can be sent to{" "}
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
