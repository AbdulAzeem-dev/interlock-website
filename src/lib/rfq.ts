export type RfqState = { status: "idle" | "success" | "error"; message?: string; fieldErrors?: Record<string,string>; reference?: string };
export const MAX_FILE_BYTES = 3 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = ["application/pdf","image/jpeg","image/png","image/webp"];
export const rfqFields = ["name","email","company","productCategory","quantity","details","country","website","material","deliveryPeriod","privateLabel","packaging","preferredContact","phone"] as const;

export function validateRfq(data: FormData, categories: string[]) {
  const values: Record<string,string> = {};
  const errors: Record<string,string> = {};
  for(const field of rfqFields) {
    values[field] = String(data.get(field) ?? "").trim();
    if(values[field].length > (["details","privateLabel","packaging"].includes(field) ? 5000 : 250)) errors[field] = "Please shorten this field.";
  }
  if(!values.name) errors.name = "Enter your name.";
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email.length>254) errors.email = "Enter a valid email address.";
  if(!values.details) errors.details = "Tell us a little about your project.";
  if(values.productCategory && values.productCategory!=="general" && values.productCategory!=="private-label" && !categories.includes(values.productCategory)) errors.productCategory = "Choose a category from the list.";
  if(["Phone","WhatsApp"].includes(values.preferredContact) && !/^\+?[\d\s().-]{7,25}$/.test(values.phone)) errors.phone = "Include a phone number with country code.";
  if(data.get("consent")!=="on") errors.consent = "Please agree to be contacted about your inquiry.";
  const file = data.get("attachment");
  if(file instanceof File && file.size>0) {
    if(file.size>MAX_FILE_BYTES) errors.attachment="Choose a file smaller than 3 MB.";
    else if(!ALLOWED_FILE_TYPES.includes(file.type)) errors.attachment="Use a PDF, JPG, PNG or WebP file.";
  }
  return { values, errors, file: file instanceof File && file.size>0 ? file : null };
}

// Returns success only after the configured service acknowledges delivery.
// The receiving service must durably save or forward the inquiry before returning 2xx.
export async function deliverRfq(data: FormData, categories: string[], webhookUrl?: string, webhookToken?: string): Promise<RfqState> {
  if(data.get("company_role")) return {status:"error",message:"Unable to submit this inquiry."};
  const {values,errors,file}=validateRfq(data,categories);
  if(Object.keys(errors).length) return {status:"error",message:"Please check the highlighted fields.",fieldErrors:errors};
  if(!webhookUrl) return {status:"error",message:"Online inquiry delivery is not connected yet. Save your brief or use the contact details when available."};
  const reference = `IL-${crypto.randomUUID().slice(0,8).toUpperCase()}`;
  try {
    const attachment = file ? { name:file.name, type:file.type, size:file.size, contentBase64:Buffer.from(await file.arrayBuffer()).toString("base64") } : null;
    const response=await fetch(webhookUrl,{
      method:"POST", headers:{"Content-Type":"application/json",...(webhookToken?{Authorization:`Bearer ${webhookToken}`}:{})},
      body:JSON.stringify({reference,...values,attachment,consent:true,submittedAt:new Date().toISOString()}),
      signal:AbortSignal.timeout(15000), cache:"no-store", redirect:"error",
    });
    if(!response.ok) return {status:"error",message:"Your inquiry could not be delivered. Your details are still here. Please try again, save your brief, or contact us directly."};
    return {status:"success",reference,message:"Your inquiry has been received. Our team will review your requirements and reply to your email."};
  } catch {
    return {status:"error",message:"We could not confirm delivery. Please keep your brief and contact us directly, or try again."};
  }
}

