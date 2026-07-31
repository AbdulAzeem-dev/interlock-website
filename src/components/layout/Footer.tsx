import Logo from "@/components/ui/Logo";
import { site } from "@/content/site";
import { productCategories } from "@/content/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="ivory" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {productCategories.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/products/${p.slug}`}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {p.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Manufacturing", href: "/manufacturing" },
                { label: "Industries", href: "/industries" },
                { label: "Private Label", href: "/private-label" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              <li>{site.country}</li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-ivory"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} INTERLOCK. Established {site.founded}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {site.footerLegal.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ivory/80">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-ivory/40">
          {site.photoCredits}
        </p>
      </div>
    </footer>
  );
}
