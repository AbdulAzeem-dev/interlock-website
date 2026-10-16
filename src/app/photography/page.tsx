import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
export const metadata:Metadata={title:"Photography Credits",robots:{index:false,follow:true}};
const credits=[
["Neutral scarves","Anna Khomutova","https://www.pexels.com/photo/stack-of-warm-scarfs-on-table-5704188/"],
["Cardigan construction detail","Karola G","https://www.pexels.com/photo/close-up-shot-of-gray-knit-textile-with-button-6276043/"],
["Cotton shirt","Mr. Mockup","https://www.pexels.com/photo/12025472/"],
["Knitted gloves","Marija Makarova","https://www.pexels.com/photo/7266912/"],
["Labelling reference","Vie Studio","https://www.pexels.com/photo/8148725/"],
["Navy knit texture","Karola G","https://www.pexels.com/photo/6275938/"],
["Folded knitwear reference","Tijana Drndarski","https://www.pexels.com/photo/close-up-shot-of-knitted-sweaters-on-white-surface-5475173/"],
];
export default function PhotographyPage(){return <><PageIntro title="Photography & visual references." body="Product and process imagery helps explain the range. It is illustrative and is not presented as evidence of an Wintex-made product, facility or client relationship."/><section className="shell section-space"><div className="max-w-3xl"><h2>Image sources</h2><p className="mt-6 text-sm">The images below are used under the <a className="underline" href="https://www.pexels.com/license/">Pexels License</a>.</p><ul className="mt-8 space-y-4">{credits.map(([subject,author,url])=><li key={subject} className="text-sm"><a href={url} className="underline">{subject}</a> by {author}</li>)}</ul><h2 className="mt-12">Company-supplied references</h2><p className="mt-6 text-sm">The Wintex logo, woven label and hang-tag artwork were supplied by the company. Other supplied product and machinery references are used illustratively. A reference image does not indicate a client endorsement, an affiliation or a verified production sample.</p><p className="mt-4 text-sm"><a href="https://www.flickr.com/photos/145712985@N08/32051224793" className="underline">Ribbed knit detail</a> by Tinker &amp; Rove, Flickr, <a className="underline" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>. Images may be resized or cropped for display.</p></div></section></>;}

