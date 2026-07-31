// Only confirmed facts are represented here. No invented dates, named clients,
// or specific milestone years beyond what has been supplied. See
// REQUIRED_BUSINESS_INPUTS.md item 13 for real archival material that would
// extend this timeline with more specific, dated milestones.
export type HeritageMarker = {
  year: string;
  title: string;
  description: string;
};

export const heritageTimeline: HeritageMarker[] = [
  {
    year: "1982",
    title: "Established in Pakistan",
    description:
      "INTERLOCK begins manufacturing knitwear, building the machinery, technique, and production discipline the company still runs on today.",
  },
  {
    year: "Since",
    title: "A trusted name in Pakistani uniform knitwear",
    description:
      "Decades of production for established and premium schools across Pakistan build a reputation for colour consistency, accurate sizing, and dependable seasonal delivery.",
  },
  {
    year: "Alongside",
    title: "Specification-led military and institutional work",
    description:
      "Working through a Pakistani export partner, INTERLOCK manufactures jerseys, socks, gloves, and related knitted items to fixed military-style specifications, extending its production discipline beyond fashion styling into strict repeatability.",
  },
  {
    year: "Now",
    title: "Building direct international partnerships",
    description:
      "With decades of manufacturing knowledge established at home, INTERLOCK is opening direct relationships with brands, distributors, and institutional buyers outside Pakistan.",
  },
];
