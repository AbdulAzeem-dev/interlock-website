import type { Metadata } from "next";
import { EnvelopeSimple, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import PageIntro from "@/components/ui/PageIntro";
import RFQForm from "@/components/ui/RFQForm";
import { site } from "@/content/site";
import { getProductBySlug } from "@/content/products";
import { getDivisionBySlug } from "@/content/divisions";
export const metadata: Metadata = {title:"Contact & Request a Quote",description:"Discuss your next knitwear collection with Wintex. Share a reference, approximate quantities and your delivery destination.",alternates:{canonical:"/contact"}};
export default async function ContactPage({searchParams}:{searchParams:Promise<{category?:string|string[]}>}) {
  const {category:rawCategory}=await searchParams;
  const category=typeof rawCategory==="string"?rawCategory:undefined;
  const selected=category&&(getDivisionBySlug(category)||getProductBySlug(category)||category==="private-label")?category:"general";
  return <><PageIntro eyebrow="Let’s work together" title="Good knitwear starts with a conversation." body="A first collection or an established programme. Share your idea and we’ll discuss the next step."/>
  <section className="shell contact-layout">
    <aside className="contact-aside"><h2>A direct conversation.</h2><p>Prefer to email or talk through your idea? Use the contact details below.</p>
      <div className="contact-method"><EnvelopeSimple size={24}/><div><h3>Email</h3>{site.contact.email?<a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>:<p>{site.contact.placeholders.email}</p>}</div></div>
      <div className="contact-method"><WhatsappLogo size={24}/><div><h3>WhatsApp</h3>{site.contact.whatsappUrl?<a href={site.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">{site.contact.whatsapp}</a>:<p>{site.contact.placeholders.whatsapp}</p>}</div></div>
      <div className="contact-method"><MapPin size={24}/><div><h3>Our location</h3><p>{site.contact.address||site.contact.placeholders.address}</p></div></div>
      <div className="contact-next"><h3>What happens next?</h3><ol><li>We review your product and quantity requirements.</li><li>We discuss feasibility, missing details and sampling.</li><li>We agree a quotation and production plan with you.</li></ol></div>
    </aside>
    <RFQForm key={selected} category={selected} deliveryEnabled={Boolean(process.env.RFQ_WEBHOOK_URL)}/>
  </section></>;
}

