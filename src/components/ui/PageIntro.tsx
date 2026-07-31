export default function PageIntro({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="border-b border-navy/15">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.12] text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
          {body}
        </p>
      </div>
    </section>
  );
}
