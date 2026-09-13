"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, DownloadSimple } from "@phosphor-icons/react";
import { submitRfq } from "@/lib/actions";
import { MAX_FILE_BYTES, ALLOWED_FILE_TYPES, type RfqState } from "@/lib/rfq";
import { productCategories } from "@/content/products";

type Values = Record<string,string>;
export default function RFQForm({category = "general", deliveryEnabled = false}: {category?:string;deliveryEnabled?:boolean}) {
  const [values,setValues] = useState<Values>({name:"",email:"",company:"",productCategory:category,quantity:"",details:"",country:"",website:"",material:"",deliveryPeriod:"",privateLabel:"",packaging:"",preferredContact:"Email",phone:""});
  const [file,setFile] = useState<File|null>(null);
  const [fileError,setFileError] = useState("");
  const [draftStatus,setDraftStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const [state,formAction,pending] = useActionState<RfqState,FormData>(async (previous,data) => {
    if(file) data.set("attachment",file);
    return submitRfq(previous,data);
  }, {status:"idle"});
  useEffect(()=>{ if(state.status!=="idle") feedbackRef.current?.focus(); },[state]);
  function props(name:string) {
    return {id:name,name,value:values[name]||"",onChange:(event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setValues({...values,[name]:event.target.value}),"aria-invalid":Boolean(state.fieldErrors?.[name]),"aria-describedby":state.fieldErrors?.[name]?`${name}-error`:undefined};
  }
  function error(name:string) { return state.fieldErrors?.[name]&&<span id={`${name}-error`} className="field-error">{state.fieldErrors[name]}</span>; }
  function saveBrief() {
    const label=(key:string)=>key.replace(/([A-Z])/g," $1").replace(/^./,c=>c.toUpperCase());
    const lines=Object.entries(values).filter(([,value])=>value).map(([key,value])=>`${label(key)}: ${key==="productCategory"?(productCategories.find(p=>p.slug===value)?.name||value):value}`);
    const content=["INTERLOCK | Manufacturing inquiry","DRAFT ONLY. This brief has not been sent.","",...lines,"",file?`Reference file: ${file.name} (attach this separately when sending)`:""].join("\n");
    const url=URL.createObjectURL(new Blob([content],{type:"text/plain;charset=utf-8"}));
    const link=document.createElement("a"); link.href=url; link.download="interlock-inquiry-brief.txt"; link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    setDraftStatus("Brief saved to your device. It has not been sent.");
  }
  if(state.status==="success") return <div className="form-success" ref={feedbackRef} tabIndex={-1} role="status"><CheckCircle size={36}/><h2>Thank you for your inquiry.</h2><p>{state.message}</p><p>Reference: <strong>{state.reference}</strong></p><Link href="/products" className="text-link">Continue exploring <ArrowUpRight size={17}/></Link></div>;
  return <form ref={formRef} className="rfq-form" action={formAction} onSubmit={event=>{
    if(!deliveryEnabled) {event.preventDefault();saveBrief();}
    else if(fileError){event.preventDefault();document.getElementById("attachment")?.focus();}
  }}>
    <div className="form-intro"><h2>Tell us about your project.</h2><p>Start with what you know. Only your name, email and project brief are required.</p></div>
    {!deliveryEnabled&&<div className="form-notice"><strong>Preview: inquiry delivery is not connected.</strong><br/>You can prepare and save a brief. Contact placeholders will be replaced before launch.</div>}
    {state.message&&<div className="form-feedback" role="alert" ref={feedbackRef} tabIndex={-1}>{state.message}</div>}
    <div className="honeypot" aria-hidden="true"><label>Leave empty<input name="company_role" tabIndex={-1} autoComplete="off"/></label></div>
    <div className="form-grid">
      <div className="form-field"><label htmlFor="name">Your name *</label><input {...props("name")} required autoComplete="name" maxLength={250}/>{error("name")}</div>
      <div className="form-field"><label htmlFor="email">Email address *</label><input {...props("email")} required type="email" autoComplete="email" maxLength={250}/>{error("email")}</div>
      <div className="form-field"><label htmlFor="company">Company / brand <span>(optional)</span></label><input {...props("company")} autoComplete="organization" maxLength={250}/>{error("company")}</div>
      <div className="form-field"><label htmlFor="productCategory">Product category</label><select {...props("productCategory")}><option value="general">Not sure yet / multiple products</option>{productCategories.map(p=><option key={p.slug} value={p.slug}>{p.name}</option>)}<option value="private-label">Custom & private label</option></select>{error("productCategory")}</div>
    </div>
    <div className="form-field"><label htmlFor="quantity">Approximate quantity <span>(optional)</span></label><input {...props("quantity")} placeholder="e.g. 200 pieces across 2 colourways" maxLength={250}/>{error("quantity")}</div>
    <div className="form-field"><label htmlFor="details">What would you like to make? *</label><textarea {...props("details")} required rows={4} maxLength={5000} placeholder="Tell us about your design, materials, target delivery or any questions you have."/>{error("details")}</div>
    <div className="form-field"><label htmlFor="attachment">Reference or tech pack <span>(optional)</span></label><input id="attachment" name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" aria-describedby="attachment-help attachment-error" onChange={event=>{
      const selected=event.target.files?.[0]||null;
      const message=selected&&(selected.size>MAX_FILE_BYTES?"Choose a file smaller than 3 MB.":!ALLOWED_FILE_TYPES.includes(selected.type)?"Use a PDF, JPG, PNG or WebP file.":"");
      setFileError(message||"");setFile(message?null:selected);
    }}/><small id="attachment-help">PDF, JPG, PNG or WebP. Up to 3 MB. Larger files can follow by email.</small>{file&&<small>Selected: {file.name}</small>}<span id="attachment-error" className="field-error">{fileError||state.fieldErrors?.attachment}</span></div>
    <details className="form-optional" open={Boolean(state.fieldErrors?.phone)}><summary>More project details (optional)</summary><div className="form-grid">
      <div className="form-field"><label htmlFor="country">Delivery country</label><input {...props("country")} autoComplete="country-name" maxLength={250}/>{error("country")}</div>
      <div className="form-field"><label htmlFor="deliveryPeriod">Target delivery date</label><input {...props("deliveryPeriod")} placeholder="Month / season" maxLength={250}/>{error("deliveryPeriod")}</div>
      <div className="form-field"><label htmlFor="material">Material / yarn</label><input {...props("material")} maxLength={250}/>{error("material")}</div>
      <div className="form-field"><label htmlFor="website">Company website</label><input {...props("website")} placeholder="yourbrand.com" maxLength={250}/>{error("website")}</div>
      <div className="form-field"><label htmlFor="preferredContact">Preferred reply method</label><select {...props("preferredContact")}><option>Email</option><option>WhatsApp</option><option>Phone</option></select></div>
      <div className="form-field"><label htmlFor="phone">Phone / WhatsApp</label><input {...props("phone")} type="tel" autoComplete="tel" placeholder="Include country code" required={values.preferredContact!=="Email"} maxLength={25}/>{error("phone")}</div>
      <div className="form-field"><label htmlFor="privateLabel">Labels & branding</label><textarea {...props("privateLabel")} rows={2} maxLength={5000}/>{error("privateLabel")}</div>
      <div className="form-field"><label htmlFor="packaging">Packaging</label><textarea {...props("packaging")} rows={2} maxLength={5000}/>{error("packaging")}</div>
    </div></details>
    <label className="consent-label"><input type="checkbox" name="consent" required aria-describedby={state.fieldErrors?.consent?"consent-error":undefined}/><span>I agree to be contacted by INTERLOCK about this enquiry. <Link href="/privacy" className="underline">Privacy Policy</Link></span></label>{error("consent")}
    <div className="form-submit-row"><button type="submit" className="button button-primary" disabled={pending}>{pending?"Sending inquiry…":deliveryEnabled?"Send inquiry":"Save inquiry brief"}{!pending&&<ArrowUpRight size={17}/>}</button>{deliveryEnabled&&<button type="button" className="text-link" onClick={saveBrief}><DownloadSimple size={16}/>Save a copy</button>}</div>
    {draftStatus&&<p role="status" className="form-draft-status">{draftStatus}</p>}
    <noscript><p className="form-notice">For direct contact, use the business email or WhatsApp details on this page. Saving a draft requires JavaScript.</p></noscript>
  </form>;
}

