const items = [
  "Established 1982",
  "Made in Pakistan",
  "Custom Knitwear Development",
  "B2B Manufacturing",
  "Private-Label Capability",
];

export default function TrustStrip() {
  return (
    <div className="border-y border-navy/15 bg-parchment">
      <ul className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 sm:px-8">
        {items.map((item) => (
          <li
            key={item}
            className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
