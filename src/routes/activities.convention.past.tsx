import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBanner } from "../components/PatternBanner";
import { History, MapPin, CalendarDays, ExternalLink, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/activities/convention/past")({
  head: () => ({
    meta: [
      { title: "Past Conventions Archive (1969–2025) | OSA" },
      {
        name: "description",
        content:
          "Explore the rich 57-year history of annual OSA conventions held across the United States and Canada since 1969.",
      },
    ],
  }),
  component: PastConventionsPage,
});

const conventionArchive = [
  { year: 2025, no: "56th", city: "Dallas, Texas", theme: "Ananya Odisha", host: "OSA Southwest Chapter" },
  { year: 2024, no: "55th", city: "Charlotte, North Carolina", theme: "Tarangini", host: "OSA Carolinas Chapter" },
  { year: 2023, no: "54th", city: "Atlantic City, New Jersey", theme: "Parampara", host: "OSA New Jersey Chapter" },
  { year: 2022, no: "53rd", city: "Chicago, Illinois", theme: "Pravasi Prerana", host: "OSA Midwest Chapter" },
  { year: 2021, no: "52nd", city: "Virtual Global Conclave", theme: "Samruddhi", host: "National Executive Committee" },
  { year: 2020, no: "51st", city: "Virtual Conclave", theme: "Sankalpa", host: "National Executive Committee" },
  { year: 2019, no: "50th", city: "Atlantic City, New Jersey", theme: "Golden Jubilee Conclave", host: "OSA Tri-State Chapters" },
  { year: 2018, no: "49th", city: "Dearborn, Michigan", theme: "Kalinga Jyoti", host: "OSA Michigan Chapter" },
  { year: 2017, no: "48th", city: "Providence, Rhode Island", theme: "Sanskriti O Chetana", host: "OSA New England Chapter" },
  { year: 2016, no: "47th", city: "Salt Lake City, Utah", theme: "Pratidhwani", host: "OSA Rocky Mountain Chapter" },
  { year: 2015, no: "46th", city: "National Harbor, Maryland", theme: "Milana", host: "OSA Washington DC Chapter" },
  { year: 2014, no: "45th", city: "Columbus, Ohio", theme: "Utkarsha", host: "OSA Ohio Chapter" },
  { year: 2013, no: "44th", city: "Chicago, Illinois", theme: "Sangam", host: "OSA Midwest Chapter" },
  { year: 2012, no: "43rd", city: "Seattle, Washington", theme: "Setu", host: "OSA Pacific Northwest Chapter" },
  { year: 2011, no: "42nd", city: "Dallas, Texas", theme: "Bandhana", host: "OSA Texas Chapter" },
  { year: 2010, no: "41st", city: "San Francisco, California", theme: "Pravasi Spandana", host: "OSA California Chapter" },
  { year: 1994, no: "25th", city: "Toronto, Ontario, Canada", theme: "Silver Jubilee Celebration", host: "OSA Canada Chapter" },
  { year: 1969, no: "1st", city: "Inaugural Gathering", theme: "The Founding Fellowship", host: "Pioneering Odia Scholars" },
];

function PastConventionsPage() {
  return (
    <div className="bg-[#F6F1E7] text-[#141A24]">
      {/* Header Banner */}
      <section className="bg-[#093060] text-white py-16 md:py-24 border-b-4 border-[#B31842]">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <div className="max-w-4xl space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#ECA445]">
              57 Years of Fellowship
            </span>
            <p className="font-odia text-3xl md:text-4xl text-[#ECA445]">
              ବାର୍ଷିକ ସମ୍ମିଳନୀର ଐତିହାସିକ ତାଲିକା
            </p>
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
              Past Conventions
            </h1>
            <p className="text-base sm:text-lg text-[#F6F1E7]/90 leading-relaxed font-sans max-w-2xl">
              From our modest 1969 gathering to grand multi-thousand celebrations in landmark cities across America and Canada.
            </p>
          </div>
        </div>
      </section>

      <PatternBanner motif="ikat-red-black" height={18} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:py-20">
        <div className="border-b-2 border-[#141A24] pb-4 mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-[#141A24]">
              Historic Conventions Archive
            </h2>
            <p className="text-sm text-[#6D737A]">
              Full record of annual gatherings hosted by volunteer regional chapters.
            </p>
          </div>
          <Link to="/activities/convention" className="btn-primary text-xs whitespace-nowrap">
            Upcoming: 57th Minneapolis 2026 <ArrowRight size={14} />
          </Link>
        </div>

        {/* Conventions Table / Grid */}
        <div className="overflow-x-auto border-2 border-[#141A24] bg-white shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#141A24] text-white font-display text-xs uppercase tracking-wider">
                <th className="p-4 border-r border-white/20">Year</th>
                <th className="p-4 border-r border-white/20">Edition</th>
                <th className="p-4 border-r border-white/20">Host City & State</th>
                <th className="p-4 border-r border-white/20">Theme / Focus</th>
                <th className="p-4">Host Chapter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1C5B4] text-xs font-sans">
              {conventionArchive.map((c) => (
                <tr key={c.year} className="hover:bg-[#F6F1E7] transition-colors">
                  <td className="p-4 font-display font-black text-sm text-[#B31842] border-r border-[#D1C5B4]">
                    {c.year}
                  </td>
                  <td className="p-4 font-display font-bold uppercase border-r border-[#D1C5B4]">
                    {c.no}
                  </td>
                  <td className="p-4 font-semibold text-[#141A24] border-r border-[#D1C5B4]">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#093060]" />
                      <span>{c.city}</span>
                    </div>
                  </td>
                  <td className="p-4 font-display uppercase font-bold text-[#093060] border-r border-[#D1C5B4]">
                    {c.theme}
                  </td>
                  <td className="p-4 text-[#6D737A]">
                    {c.host}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
