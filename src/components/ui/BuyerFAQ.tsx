import { Plus } from "@phosphor-icons/react/dist/ssr";
export const buyerQuestions = [
  { q: "What is your minimum order quantity?", a: "Runs can start from 50 pieces. The minimum for your project depends on the product, yarn availability, colours and construction. Share your quantities by style and colour so we can confirm what is workable." },
  { q: "Can you work from a reference or a sketch?", a: "Yes. A tech pack is helpful, but you can begin with a reference garment, a sketch or a product image. We review construction, yarn, measurements and finishing with you before agreeing the sample." },
  { q: "How long do sampling and production take?", a: "Timing is confirmed after reviewing the design, yarn sourcing, quantity and current production schedule. Tell us your required delivery date at the start. Bulk production follows sample approval." },
  { q: "Can you add our own labels and packaging?", a: "Yes. Woven labels, care labels, hang tags and packing requirements can be discussed alongside your product. Share artwork and any packaging specification with your brief." },
  { q: "How do you handle international orders?", a: "We are opening direct relationships with international buyers. Delivery destination, packing, shipping responsibilities and any required documentation are agreed as part of the quotation. Tell us about testing or compliance requirements before sampling." },
];
export default function BuyerFAQ({items = buyerQuestions}: {items?: typeof buyerQuestions}) {
  return <div className="faq-list">{items.map(item => <details key={item.q}><summary>{item.q}<Plus size={20}/></summary><p>{item.a}</p></details>)}</div>;
}

