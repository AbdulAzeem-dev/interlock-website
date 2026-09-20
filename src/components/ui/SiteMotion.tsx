"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement: content stays visible without JavaScript or motion. */
export default function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (preference.matches) return;
        const animation = target.animate(
          [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 600, easing: "cubic-bezier(.2,.65,.3,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("main .section-top, main .material-grid, main .process-grid, main .heritage-grid, main .story-grid, main .division-product-type, main .cta-inner").forEach((element) => observer.observe(element));
    const stop = () => {
      if (preference.matches) { observer.disconnect(); animations.forEach((animation) => animation.cancel()); }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, [pathname]);
  return null;
}
