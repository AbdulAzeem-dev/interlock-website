import type { Industry } from "@/content/industries";

export default function IndustryBlock({ industry }: { industry: Industry }) {
  return (
    <div className="border-t border-navy/15 py-8 first:border-t-0 md:py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="font-display text-2xl text-navy">{industry.name}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal/75">
            {industry.summary}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {industry.priorities.map((p) => (
            <li
              key={p}
              className="flex gap-3 text-sm leading-relaxed text-charcoal/80"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
