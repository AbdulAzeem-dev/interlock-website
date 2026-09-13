export default function PageIntro({title,body,eyebrow}: {title:string;body?:string;eyebrow?:string}) { return <section className="page-heading"><div className="shell">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{body&&<p>{body}</p>}</div></section>; }

