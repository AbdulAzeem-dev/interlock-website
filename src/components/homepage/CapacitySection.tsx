import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// Only the two figures explicitly approved by the owner are shown as numbers
// (50 pieces to start; up to 50,000 pieces per month). The middle stop is a
// qualitative label only - no invented figure sits between them.
const stops = [
  { value: "50", label: "Focused Runs", detail: "pieces, to start" },
  { value: "→", label: "Growing Programmes", detail: "adapted to your schedule" },
  { value: "50,000", label: "Scaled Production", detail: "pieces, per month" },
];

export default function CapacitySection() {
  return (
    <section className="bg-parchment py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            title="Flexible capacity. Built to scale."
            body="From low-volume runs starting at 50 pieces to monthly production programmes of up to 50,000 pieces. Production planning is adapted to product category, construction, yarn, gauge, complexity, and delivery schedule, from sampling and product development through to bulk manufacturing."
          />
          <Reveal>
            <div className="relative">
              <div className="absolute left-0 right-0 top-[22px] h-px bg-gold/50" aria-hidden="true" />
              <div className="relative grid grid-cols-3 gap-4">
                {stops.map((stop) => (
                  <div key={stop.label} className="text-center">
                    <div className="mx-auto mb-4 h-2.5 w-2.5 rounded-full border-2 border-gold bg-parchment" />
                    <p className="font-display text-3xl text-navy md:text-4xl">{stop.value}</p>
                    <p className="mt-1 text-xs text-charcoal/60">{stop.detail}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy/70">
                      {stop.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
