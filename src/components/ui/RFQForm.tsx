"use client";

import { useActionState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { submitRfq, type RfqState } from "@/lib/actions";
import { productCategories } from "@/content/products";
import { cn } from "@/lib/cn";

const countries = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Canada",
  "Other",
];

const buyerTypes = [
  "Fashion / Private-Label Brand",
  "School / College Uniform Distributor",
  "Institutional / Corporate Uniform Supplier",
  "Military / Defence-Adjacent Contractor",
  "Wholesaler / Distributor",
  "Buying House / Sourcing Agent",
  "Other",
];

const initialState: RfqState = { status: "idle" };

const labelClass = "text-sm font-medium text-navy";
const inputClass =
  "w-full border border-navy/25 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus-visible:outline-2 focus-visible:outline-gold";

export default function RFQForm() {
  const [state, formAction, pending] = useActionState(submitRfq, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-gold/40 bg-parchment/60 px-8 py-10">
        <CheckCircle size={32} weight="light" className="text-gold" />
        <h3 className="font-display text-2xl text-navy">Enquiry received</h3>
        <p className="max-w-md text-sm leading-relaxed text-charcoal/80">
          {state.message}
        </p>
      </div>
    );
  }

  const err = (field: string) => state.fieldErrors?.[field];

  return (
    <form action={formAction} noValidate className="space-y-8">
      {/* Honeypot - hidden from real visitors */}
      <input
        type="text"
        name="company_role"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {state.status === "error" && state.message && !Object.keys(state.fieldErrors ?? {}).length && (
        <p className="flex items-center gap-2 border border-red-800/30 bg-red-50 px-4 py-3 text-sm text-red-900">
          <WarningCircle size={18} /> {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={err("name")} required>
          <input id="name" name="name" type="text" className={inputClass} />
        </Field>
        <Field label="Work email" htmlFor="email" error={err("email")} required>
          <input id="email" name="email" type="email" className={inputClass} />
        </Field>
        <Field label="Company name" htmlFor="company">
          <input id="company" name="company" type="text" className={inputClass} />
        </Field>
        <Field label="Company website" htmlFor="website">
          <input id="website" name="website" type="text" className={inputClass} placeholder="https://" />
        </Field>
        <Field label="Country" htmlFor="country" error={err("country")} required>
          <select id="country" name="country" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Buyer type" htmlFor="buyerType">
          <select id="buyerType" name="buyerType" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select buyer type
            </option>
            {buyerTypes.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Product category"
          htmlFor="productCategory"
          error={err("productCategory")}
          required
        >
          <select id="productCategory" name="productCategory" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select category
            </option>
            {productCategories.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Approximate quantity" htmlFor="quantity">
          <input id="quantity" name="quantity" type="text" className={inputClass} placeholder="e.g. 500-1000 units" />
        </Field>
        <Field label="Material / yarn preference" htmlFor="material">
          <input id="material" name="material" type="text" className={inputClass} />
        </Field>
        <Field label="Target delivery period" htmlFor="deliveryPeriod">
          <input id="deliveryPeriod" name="deliveryPeriod" type="text" className={inputClass} />
        </Field>
      </div>

      <Field label="Private-label requirements" htmlFor="privateLabel">
        <textarea id="privateLabel" name="privateLabel" rows={3} className={inputClass} placeholder="Labels, hang tags, custom branding..." />
      </Field>

      <Field label="Packaging requirements" htmlFor="packaging">
        <textarea id="packaging" name="packaging" rows={3} className={inputClass} placeholder="Folding, polybag, carton specification..." />
      </Field>

      <Field label="Additional details" htmlFor="details">
        <textarea id="details" name="details" rows={4} className={inputClass} />
      </Field>

      <Field
        label="Attach a tech pack, reference image, or size chart"
        htmlFor="attachment"
        error={err("attachment")}
        helper="PDF, Word, Excel, or image. Max 10MB."
      >
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx,image/*"
          className={cn(inputClass, "file:mr-4 file:border-0 file:bg-navy file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-wide file:text-ivory")}
        />
      </Field>

      <Field label="Preferred contact method" htmlFor="preferredContact">
        <select id="preferredContact" name="preferredContact" className={inputClass} defaultValue="Email">
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal/85">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4 w-4 shrink-0 border-navy/40 accent-navy"
          />
          I agree to be contacted by INTERLOCK about this enquiry.
        </label>
        {err("consent") && (
          <p className="mt-2 text-xs text-red-800">{err("consent")}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center bg-navy px-8 py-4 text-sm font-semibold tracking-wide text-ivory transition-colors duration-300 hover:bg-navy-light disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  error,
  helper,
  required,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  helper?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      {children}
      {helper && !error ? (
        <p className="text-xs text-charcoal/55">{helper}</p>
      ) : null}
      {error ? <p className="text-xs text-red-800">{error}</p> : null}
    </div>
  );
}
