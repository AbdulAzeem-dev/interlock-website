export default function ProcessStep({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5 border-t border-navy/15 py-6 first:border-t-0">
      <span className="font-display text-2xl italic text-gold">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-lg text-navy">{title}</h3>
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-charcoal/75">
          {description}
        </p>
      </div>
    </div>
  );
}
