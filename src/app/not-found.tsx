import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1400px] flex-col items-start px-5 py-28 sm:px-8 md:py-40">
      <span className="font-display text-7xl italic text-gold">404</span>
      <h1 className="mt-4 font-display text-3xl text-navy md:text-4xl">
        This page has not been made.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/75">
        The page you are looking for does not exist, or has moved. You can
        return home or go straight to our product range.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/">Return Home</ButtonLink>
        <ButtonLink href="/products" variant="secondary">
          View Products
        </ButtonLink>
      </div>
    </section>
  );
}
