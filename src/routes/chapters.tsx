import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { MapPin, Mail, Users, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/chapters")({
  head: () => ({
    meta: [
      { title: "Regional Chapters Across North America | OSA" },
      {
        name: "description",
        content:
          "Find your local Odia community chapter across the United States and Canada: local festivals, Kumar Purnima, Utkal Dibasa, and networking.",
      },
    ],
  }),
  component: ChaptersPage,
});

const chaptersList = [
  { name: "California Chapter", region: "San Francisco Bay Area & Silicon Valley", contact: "california@odishasociety.org", state: "CA" },
  { name: "Southern California Chapter", region: "Greater Los Angeles & San Diego", contact: "socal@odishasociety.org", state: "CA" },
  { name: "Pacific Northwest Chapter", region: "Seattle, Bellevue, WA & Portland, OR", contact: "pnw@odishasociety.org", state: "WA / OR" },
  { name: "Midwest Chapter", region: "Chicago, IL, Naperville & Milwaukee, WI", contact: "midwest@odishasociety.org", state: "IL / WI" },
  { name: "Michigan Chapter", region: "Detroit, Troy, Ann Arbor & Grand Rapids", contact: "michigan@odishasociety.org", state: "MI" },
  { name: "Ohio Chapter", region: "Columbus, Cleveland, Dublin & Cincinnati", contact: "ohio@odishasociety.org", state: "OH" },
  { name: "New England Chapter", region: "Boston, Cambridge, MA, NH & Rhode Island", contact: "newengland@odishasociety.org", state: "MA / RI" },
  { name: "New Jersey Chapter", region: "Edison, Princeton, Jersey City & Central NJ", contact: "newjersey@odishasociety.org", state: "NJ" },
  { name: "New York Chapter", region: "New York City, Queens & Long Island", contact: "newyork@odishasociety.org", state: "NY" },
  { name: "Mid-Atlantic Chapter", region: "Maryland, Washington DC & Northern Virginia", contact: "midatlantic@odishasociety.org", state: "MD / DC / VA" },
  { name: "Carolinas Chapter", region: "Charlotte, Raleigh, Durham, NC & SC", contact: "carolinas@odishasociety.org", state: "NC / SC" },
  { name: "Southern Chapter", region: "Atlanta, Alpharetta, GA & Alabama", contact: "southern@odishasociety.org", state: "GA / AL" },
  { name: "Florida Chapter", region: "Tampa, Orlando, Jacksonville & Miami", contact: "florida@odishasociety.org", state: "FL" },
  { name: "Southwest Texas Chapter", region: "Dallas-Fort Worth, Houston, Austin & San Antonio", contact: "texas@odishasociety.org", state: "TX" },
  { name: "Canada Chapter", region: "Greater Toronto, Mississauga, Ottawa & Montreal", contact: "canada@odishasociety.org", state: "ON / QC, Canada" },
];

function ChaptersPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              Local Community Network
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ଆମେରିକା ଓ କାନାଡ଼ାର ଆଞ୍ଚଳିକ ଶାଖା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Regional Chapters
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              15+ vibrant regional chapters bringing Odia families together throughout the year for Utkal Dibasa, Raja Parba, Kumar Purnima, drama festivals, and picnics.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="chakra-blue" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
              Active Chapters Directory
            </h2>
            <p className="text-sm text-[#6D737A]">
              Connect with your local chapter leadership to join regional gatherings.
            </p>
          </div>
          <Link to="/register" className="btn-primary text-xs">
            Join Your Regional Chapter <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaptersList.map((c) => (
            <div
              key={c.name}
              className="bg-white border-2 border-[#D1C5B4] p-6 hover:border-[#093060] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-display">
                  <span className="px-2 py-0.5 bg-[#F6F1E7] border border-[#D1C5B4] text-[#B31842] font-bold">
                    {c.state}
                  </span>
                  <MapPin size={14} className="text-[#093060]" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-[#141A24]">
                  {c.name}
                </h3>
                <p className="text-xs text-[#6D737A] font-sans">
                  {c.region}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D1C5B4]/30 mt-6">
                <a
                  href={`mailto:${c.contact}`}
                  className="inline-flex items-center gap-1.5 text-xs font-display uppercase font-bold text-[#B31842] hover:underline"
                >
                  <Mail size={12} /> {c.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
