"use client";

import { useEffect, useState } from "react";
import { tickerTerms } from "@/content/homepage";
import { cn } from "@/lib/cn";

function TickerTrack() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {tickerTerms.map((term, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.12em] text-navy/80">
            {term}
          </span>
          <span className="text-gold" aria-hidden="true">
            &#10022;
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    const handler = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  return (
    <div
      className="group overflow-hidden border-y border-navy/15 bg-parchment py-5"
      role="group"
      aria-label={`Product capabilities: ${tickerTerms.join(", ")}`}
    >
      <div
        className={cn(
          "flex w-max animate-marquee group-hover:[animation-play-state:paused]",
          tabHidden && "marquee-paused"
        )}
      >
        <TickerTrack />
        <TickerTrack />
      </div>
    </div>
  );
}
