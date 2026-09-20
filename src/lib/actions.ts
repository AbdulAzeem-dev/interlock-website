"use server";
import { productCategories } from "@/content/products";
import { deliverRfq, type RfqState } from "@/lib/rfq";
export type { RfqState } from "@/lib/rfq";
export async function submitRfq(_previous: RfqState, data: FormData): Promise<RfqState> {
  return deliverRfq(data, productCategories.map(p=>p.slug), process.env.RFQ_WEBHOOK_URL, process.env.RFQ_WEBHOOK_TOKEN);
}

