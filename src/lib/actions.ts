"use server";

export type RfqState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export async function submitRfq(
  _prevState: RfqState,
  formData: FormData
): Promise<RfqState> {
  // Honeypot: a real visitor never fills this hidden field.
  if (formData.get("company_role")) {
    return { status: "success" };
  }

  const fieldErrors: Record<string, string> = {};
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const productCategory = String(formData.get("productCategory") ?? "").trim();
  const consent = formData.get("consent");

  if (!name) fieldErrors.name = "Please enter your full name.";
  if (!email || !/^\S+@\S+\.\S+$/.test(email))
    fieldErrors.email = "Please enter a valid work email address.";
  if (!country) fieldErrors.country = "Please select your country.";
  if (!productCategory)
    fieldErrors.productCategory = "Please select a product category.";
  if (!consent)
    fieldErrors.consent = "Please confirm you agree to be contacted about this enquiry.";

  const file = formData.get("attachment");
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      fieldErrors.attachment = "File must be smaller than 10MB.";
    } else if (file.type && !ALLOWED_FILE_TYPES.includes(file.type)) {
      fieldErrors.attachment =
        "Please upload a PDF, Word, Excel, or image file.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the fields highlighted below.",
      fieldErrors,
    };
  }

  const payload = {
    name,
    email,
    company: String(formData.get("company") ?? ""),
    website: String(formData.get("website") ?? ""),
    country,
    buyerType: String(formData.get("buyerType") ?? ""),
    productCategory,
    quantity: String(formData.get("quantity") ?? ""),
    material: String(formData.get("material") ?? ""),
    deliveryPeriod: String(formData.get("deliveryPeriod") ?? ""),
    privateLabel: String(formData.get("privateLabel") ?? ""),
    packaging: String(formData.get("packaging") ?? ""),
    details: String(formData.get("details") ?? ""),
    preferredContact: String(formData.get("preferredContact") ?? ""),
    attachmentName: file instanceof File && file.size > 0 ? file.name : null,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.RFQ_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else {
      // No RFQ_WEBHOOK_URL configured yet - record server-side so nothing is
      // lost during development. Wire RFQ_WEBHOOK_URL or RFQ_TO_EMAIL before
      // launch (see .env.example and REQUIRED_BUSINESS_INPUTS.md item 1).
      console.info("[RFQ enquiry received]", payload);
    }
  } catch (err) {
    console.error("[RFQ submission failed]", err);
    return {
      status: "error",
      message:
        "Something went wrong sending your enquiry. Please try again or email us directly.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your enquiry has been received and will be reviewed by our team.",
  };
}
